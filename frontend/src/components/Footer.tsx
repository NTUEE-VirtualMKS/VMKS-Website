import ImageURL from "../images/footer_logo.png";
import FacebookURL from "../images/facebook.png";
import InstagramURL from "../images/instagram.png";
import GithubURL from "../images/github.png";

const Footer = () => {
  return (
    <footer className="flex flex-row">
      <img src={ImageURL} alt="footer" className="w-30 h-30 float-left" />
      <a href="https://www.facebook.com/ntuee.makerspace/?locale=zh_TW">
        <img src={FacebookURL} alt="facebook link" className="w-12 m-2" />
      </a>
      <a href="https://www.instagram.com/ntu.taiwan/">
        <img src={InstagramURL} alt="instagram link" className="w-12 m-2" />
      </a>
      <a href="https://github.com/NTUEE-VirtualMKS">
        <img src={GithubURL} alt="github link" className="w-12 m-2" />
      </a>
    </footer>
  );
};

export default Footer;
