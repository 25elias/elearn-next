import Link from "next/link";
import navItems from "./navItems";



const Footer = () => {

  return (
    <footer className="relative">
      <div className="w-full h-full bg-[rgba(0,0,0,1)]">
        {/* navbar */}
          <div className="flex items-center justify-between max-w-6xl mx-auto px-8 text-white">
            <Link href="/" className="text-2xl font-bold">Huzsky</Link>
            <div className="flex items-center py-2">
              <ul className="hidden sm:flex gap-4 lg:gap-8 pr-4">
                {navItems.map(({ title, path }) => {
                  return (
                    <li key={path}>
                      <Link href={path} 
                      className="text-sm  lg:text-2xl font-medium lg:font-bold">{title}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link className="btn-cta sm:hidden" href="/user/signup">
                Sign Up
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
