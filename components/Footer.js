import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="w-full flex shadow border p-5">
            <a className="mr-5" href="https://github.com/Alphabethika-CodeHub"><FontAwesomeIcon size="lg" icon={faGithubSquare} /> Github</a>
            <a className="mr-5" href="linkedin.com/in/daffa-nabil-hartono-800271178/"><FontAwesomeIcon size="lg" icon={faLinkedin} /> LinkedIn</a>
            <a className="mr-5" href="https://www.instagram.com/daffanh_6633/"><FontAwesomeIcon size="lg" icon={faInstagramSquare} /> Instagram</a>
        </div>
    );
}

export default Footer;