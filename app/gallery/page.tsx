import ImageGrid from "@/components/gallery/ImageGrid";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const Gallery = async ({
  searchParams,
}: {
  searchParams?: {
    value?: string;
    isOpen?: boolean;
  };
}) => {
  // const selectedOption = searchParams?.value || "";
  // const isOpen = searchParams?.isOpen || "";
  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Gallery</h1>
        </div>
      </NavbarImage>
      <PhotoGallery />
    </main>
  );
};

export default Gallery;
