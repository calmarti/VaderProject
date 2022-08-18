//TODO: pobrar con una tipografía diferente a Karla
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrands, faSquareTwitter  } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <div style={{backgroundColor: "#18181B"}}className="w-screen h-36 border-t-2 border-white">
            <FontAwesomeIcon style={{backgroundColor:"white"}} icon={faSquareTwitter} />
        </div>
    )
}