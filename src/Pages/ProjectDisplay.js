import { useParams } from "react-router-dom";
import { projectList } from "../Projects/ProjectList";
import { GitHub } from "@material-ui/icons";

export default function ProjectDisplay() {

  const { id } = useParams();
  const project = projectList[id];
  
    return (
    <div>
      <h2>{project.name}</h2>
     
      <GitHub />
    </div>
  );
}
