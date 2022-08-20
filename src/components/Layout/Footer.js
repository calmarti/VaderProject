//TODO: pobrar con una tipografía diferente a Karla
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter , faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div style={{backgroundColor: "#18181B"}} className="w-screen h-36 border-t-2 border-white">
            {<FontAwesomeIcon icon={faSquareTwitter} size="2x" className="icon" />}
        </div>
    )
}

