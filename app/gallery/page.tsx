import ImageGrid from "@/components/gallery/ImageGrid";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";
import { createSupabaseClient } from "@/lib/supabase/sever";

const Gallery = async (props: {
  searchParams?: Promise<{
    value?: string[];
  }>;
}) => {
  const searchParams = await props.searchParams;
  const selectedOption = searchParams?.value || [];

  const response = await createSupabaseClient();

  let { data: images } = await response.from("gallery-images").select("*");

  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Gallery</h1>
        </div>
      </NavbarImage>
      <PhotoGallery />
      <ImageGrid searchValues={selectedOption} images={images} />
    </main>
  );
};

export default Gallery;
