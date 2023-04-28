import { LinkedIn } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import "../Style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/vishal-gohil-446390230/">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/VishalG55498637">
          <Twitter />
        </a>
      </div>
    </div>
  );
}
