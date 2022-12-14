
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-items-wrapper">
        <a href="https://twitter.com/IBSENMARTINEZ">
          <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
        </a>
        <a href="mailto:ibsenmartinez692@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
        </a>
        <p>© 2022 </p>
      </div>
    </div>
  );
}
