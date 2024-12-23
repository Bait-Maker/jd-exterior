import ImageGrid from "@/components/gallery/ImageGrid";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const Gallery = () => {
  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Gallery</h1>
        </div>
      </NavbarImage>
      <ImageGrid />
    </main>
  );
};

export default Gallery;
