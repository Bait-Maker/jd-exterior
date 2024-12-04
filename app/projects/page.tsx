import ProjectGrid from "@/components/gallery/project-grid/ProjectGrid";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const Projects = () => {
  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Projects</h1>
        </div>
      </NavbarImage>
      <ProjectGrid />
    </main>
  );
};

export default Projects;
