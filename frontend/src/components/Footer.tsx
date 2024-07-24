import { icons } from "@/constants/index";

function Footer() {
  return (
    <footer className="flex flex-row">
      <img
        src="/footer_logo.png"
        alt="footer"
        className="w-30 h-30 float-left"
      />
      {icons.map(({ href, src, alt }) => (
        <a href={href}>
          <img src={src} alt={alt} className="w-12 m-2" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
