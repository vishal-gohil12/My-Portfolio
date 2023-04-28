import { ProjectItem } from "../Componant/ProjectItem";
import { projectList } from '../Projects/ProjectList';
import '../Style/Project.css'
export const Projects = () =>{
    return(
        <div className="projects">
            <h1>My Personal projects</h1>
            <div className="projectList">{projectList.map((project)=>{
                        return <ProjectItem name={project.name} image={project.image}/>
                    })}
            </div>
        </div>
    );
}