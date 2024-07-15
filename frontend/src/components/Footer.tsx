import ImageURL from "@/images/footer_logo.png";
import FacebookURL from "@/images/facebook.png";
import InstagramURL from "@/images/instagram.png";
import GithubURL from "@/images/github.png";

const icons = [
  {
    href: "https://www.facebook.com/ntuee.makerspace/?locale=zh_TW",
    src: FacebookURL,
    alt: "facebook link",
  },
  {
    href: "https://www.instagram.com/ntu.taiwan/",
    src: InstagramURL,
    alt: "instagram link",
  },
  {
    href: "https://github.com/NTUEE-VirtualMKS",
    src: GithubURL,
    alt: "github link",
  },
];

function Footer() {
  return (
    <footer className="flex flex-row">
      <img src={ImageURL} alt="footer" className="w-30 h-30 float-left" />
      {icons.map(({ href, src, alt }) => (
        <a href={href}>
          <img src={src} alt={alt} className="w-12 m-2" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
