"use client";

import ImageCard from "./image-card/ImageCard";
import styles from "./ImageGrid.module.css";
import { StaticImageData } from "next/image";
import { Key, useEffect, useRef, useState, useTransition } from "react";
import DeleteBtn from "../buttons/delete/DeleteBtn";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import AddBtn from "../buttons/add/AddBtn";
import Modal from "../util/modal/modal";
import UploadForm from "./upload-form/UploadForm";
import { deleteData } from "@/lib/supabase/table/client";
import { deleteImage } from "@/lib/supabase/storage/client";
import { useRouter } from "next/navigation";

type Props = {
  searchValues?: string[];
  images?: any[] | null;
};

// TODO: Make seperate components for adding and deleting data.

const ImageGrid = ({ searchValues, images }: Props) => {
  const { user } = useSupabaseAuth();
  const [filteredImages, setFilteredImages] = useState<any>();
  const modalRef = useRef<any>();
  const router = useRouter();

  function handleReload() {
    router.refresh();
  }

  useEffect(() => {
    function filterImages() {
      if (images && searchValues && searchValues.length >= 1) {
        setFilteredImages(
          images.filter((curr: { category: string }) =>
            searchValues.includes(curr.category)
          )
        );
      } else {
        setFilteredImages(images);
      }
    }
    filterImages();
  }, [searchValues]);

  function handleOpen() {
    if (!modalRef.current) {
      return;
    }
    modalRef.current.openModal();
  }

  const [isPending, startTransition] = useTransition();

  function handleDelete(src: string | StaticImageData) {
    startTransition(async () => {
      const target = src.toString();

      const result = await deleteData(target);

      if (result) {
        console.error(result);
        return;
      }

      const { error } = await deleteImage(target);

      if (error) {
        console.error(error);
        return;
      }
    });
    handleReload();
  }

  return (
    <>
      {user && (
        <div className={styles.addContainer}>
          <AddBtn onClick={handleOpen} />
        </div>
      )}
      <section className={styles.wrapper}>
        <ul className={styles.cardList}>
          {filteredImages &&
            filteredImages.map(
              (image: {
                id: Key | null | undefined;
                src: string | StaticImageData;
              }) => {
                return (
                  <li key={image.id} className={styles.card}>
                    {user && (
                      <DeleteBtn
                        onClick={() => handleDelete(image.src)}
                        className={styles.deleteBtn}
                      />
                    )}
                    <ImageCard src={image.src} />
                  </li>
                );
              }
            )}
        </ul>
      </section>
      <Modal ref={modalRef}>
        <UploadForm />
      </Modal>
    </>
  );
};

export default ImageGrid;
