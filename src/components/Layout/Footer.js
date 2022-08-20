//TODO: pobrar con una tipografía diferente a Karla
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#18181B" }}
      className="w-screen h-36 border-t-2 border-white"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
      {<FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />}
      <p>©2022 </p>

    </div>
  );
}
