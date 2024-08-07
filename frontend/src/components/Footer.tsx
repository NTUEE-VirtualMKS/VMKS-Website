import { icons } from "@/constants/index";

function Footer() {
  return (
    <footer className="flex flex-row justify-center bg-slate-900 items-center h-16 border-t border-[#444444] gap-10">
      {icons.map(({ href, src, alt }) => (
        <a href={href}>
          <img src={src} alt={alt} className="w-10 bg-white rounded-full" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
