import ImageGrid from "@/components/gallery/ImageGrid";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const Gallery = async ({
  searchParams,
}: {
  searchParams?: {
    value?: string[];
  };
}) => {
  const selectedOption = searchParams?.value || [];

  console.log(selectedOption);
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
