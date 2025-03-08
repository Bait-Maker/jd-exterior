"use client";

import { convertBlobUrlToFile } from "@/lib/blobToFile";
import styles from "./UploadForm.module.css";
import { OUTDOOR_OPTIONS } from "@/lib/constants";
import Image from "next/image";
import {
  AwaitedReactNode,
  ChangeEvent,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { useDropzone } from "react-dropzone";
import { FaXmark } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import { uploadImage } from "@/lib/supabase/storage/client";
import { insertData } from "@/lib/supabase/table/client";

type Error = {
  code: Key | null | undefined;
  message:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
};

const UploadForm = () => {
  const [files, setFiles] = useState<any[]>([]);

  const [rejected, setRejected] = useState<any[]>([]);
  const className = styles.dropzone;

  const onDrop = useCallback((acceptedFiles: any[], rejectedFiles: any[]) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 2000, // 2.048 MB
  });

  useEffect(() => {
    // Revoke the data urls to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  function removeFile(name: any) {
    setFiles((files) => files.filter((file) => file.name !== name));
  }

  function removeAll() {
    setFiles([]);
    setRejected([]);
  }

  const removeRejected = (name: any) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const [isPending, startTransition] = useTransition();

  const uploadAction = (formData: FormData) => {
    startTransition(async () => {
      for (const url of files) {
        const blob = URL.createObjectURL(url);
        const imageFile = await convertBlobUrlToFile(blob);
        const { imageUrl, error } = await uploadImage({
          file: imageFile,
          bucket: "images",
        });

        if (error) {
          console.error(error);
          return;
        }

        formData.append("src", imageUrl);
        insertData(formData);
      }

      removeAll();
    });
  };

  return (
    <form action={uploadAction} className={styles.form}>
      <div>
        <label htmlFor="category">
          Select the Category: (Image MUST be at around 2000 x 1500)
        </label>{" "}
        <br />
        <select name="category" id="category">
          {OUTDOOR_OPTIONS.map((option, index) => {
            return <option key={index}>{option.value}</option>;
          })}
        </select>{" "}
      </div>
      <div {...getRootProps({ className })}>
        <input {...getInputProps()} />
        <div className={styles.textContainer}>
          <IoCloudUpload />
          {isDragActive ? (
            <p>Drops the files here ...</p>
          ) : (
            <p>Drag and drop files here, or click to select files</p>
          )}
        </div>
      </div>

      {/* ACCEPTED FILES */}
      <h3 className={styles.title}>Accepted Files</h3>
      <ul className={styles.grid}>
        {files.map((file, index) => {
          return (
            <li key={index} className={styles.file}>
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className={styles.image}
              />
              <button
                type="button"
                onClick={() => removeFile(file.name)}
                className={styles.removeBtn}
              >
                <FaXmark />
              </button>
              <p className={styles.filetxt}>{file.name}</p>
            </li>
          );
        })}
      </ul>

      {/* REJECTED FILES */}
      <h3 className={`${styles.title} ${styles.rejected}`}>Rejected Files</h3>
      <ul className={styles.flex}>
        {rejected.map(({ file, errors }) => {
          return (
            <li key={file.name} className={styles.rejectedFile}>
              <div>
                <p>{file.name}</p>
                <ul className={styles.errors}>
                  {errors.map((error: Error) => {
                    return <li key={error.code}>{error.message}</li>;
                  })}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => removeRejected(file.name)}
                className={styles.remove}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>

      {/* CANCEL/UPLOAD */}
      <div className={styles.uploadContainer}>
        <button
          type="reset"
          value={"Reset"}
          onClick={removeAll}
          className={styles.cancelBtn}
        >
          Cancel
        </button>
        <button type="submit" disabled={isPending} className={styles.uploadBtn}>
          Upload Images
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
