import FilterBar from "@/components/projects/category-filterbar/FilterBar";
import ProjectGrid from "@/components/projects/project-grid/ProjectGrid";
import NavbarImage from "@/components/util/navbar-image/NavbarImage";

const Projects = () => {
  return (
    <main>
      <NavbarImage wrapperClassName="header-wrapper">
        <div className="header-hero">
          <h1>Projects</h1>
        </div>
      </NavbarImage>
      <FilterBar />
      <ProjectGrid />
    </main>
  );
};

export default Projects;
