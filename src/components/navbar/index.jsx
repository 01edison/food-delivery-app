import { useState } from "react";

const Navbar = () => {
  const links = ["Home", "Product", "Faq", "Contact"];
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex p-10 justify-between items-center">
        <div className="w-[150px] md:w-[200px]">
          <img src="/bellaOlonjeLogo.png" />
        </div>

        <div className="sm:hidden" onClick={toggleMenu}>
          <img src="/bars.svg" width="20px" />
        </div>

        <div className="hidden sm:flex justify-between w-[580px] ">
          {links.map((link) => {
            return (
              <a
                href="#"
                className={`hover:text-orange ${
                  link == activeLink && "text-orange"
                }`}
                onClick={() => {
                  console.log(link);
                  setActiveLink(link);
                }}
              >
                {link}
              </a>
            );
          })}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`flex flex-col items-center sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => {
          return (
            <a href="#" className="my-2 hover:text-orange">
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
