import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

interface IProps {
    tiktok: string;
    facebook: string;
    linkedin: string;
    github: string;
}
const SocialMedia = (props: IProps) => {
    const {  tiktok, facebook, linkedin, github } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Lê Bình Trọng">
                <FaTiktok size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Lê Bình Trọng">
                <FaFacebook size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Facebook Lê Bình Trọng">
                <FaLinkedin size={30} />
            </a>
            <a href={github} target='_blank' className="highlight" title="Facebook Lê Bình Trọng">
                <FaGithub size={30} />
            </a>
        </div>
    )
}
export default SocialMedia;