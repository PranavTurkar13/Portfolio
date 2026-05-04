import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {

  const navRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
  }, []);

  useEffect(() => {
    gsap.fromTo(linksRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.4 });
  }, []);

  useEffect(() => {
    gsap.fromTo(logoRef.current, { rotation: -90, opacity: 0, scale: 0.5 }, { rotation: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.7)", delay: 0.2 });
  }, []);

  const handleLogoHover = () => {
    gsap.to(logoRef.current, { scale: 1.2, duration: 0.4, ease: "power2.out" });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {  scale: 1, duration: 0.4, ease: "power2.inOut" });
  };

  useEffect(() => {
      const handleScroll = () => {
        const sections = navItems.map(item =>
          document.getElementById(item.id)
        );

        const scrollY = window.scrollY + 100; // offset for navbar

        sections.forEach((section, index) => {
          if (!section) return;

          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(navItems[index].label);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (item, index) => {
      setActive(item.label);

      
      gsap.fromTo(
        linksRef.current[index],
        { scale: 0.9 },
        { scale: 1, duration: 0.3, ease: "back.out(2)" }
      );

      const section = document.getElementById(item.id);
      if (section) {
        gsap.to(window, {
          duration: 1,
          scrollTo: section,
          ease: "power2.out",
        });
      }
    };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-10 h-[68px] flex items-center justify-between"
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
      }}
    >
      <div
        ref={logoRef}
        className="cursor-pointer"
        onMouseEnter={handleLogoHover}
        onMouseLeave={handleLogoLeave}
      >
        <div className='logo flex gap-7'>
            <div className='lines flex flex-col gap-2'>
                <div className='line w-12 h-1 bg-white'></div>
                <div className='line w-8 h-1 bg-white'></div>
                <div className='line w-5 h-1 bg-white'></div>
            </div>
            <div className='name text-3xl text-white -mt-[7px]'>Rockstar</div>
        </div>
      </div>

      <ul className="flex items-center gap-8 list-none">
        {navItems.map((item,index) => (
          <li
            key={index}
            ref={(el) => (linksRef.current[index] = el)}
            onClick={() => handleLinkClick(item, index)}
            className="relative cursor-pointer"
          >
            <span
              className="text-white tracking-wildest transition-colors duration-200"
              style={{
                fontSize: "20px",
                letterSpacing: "3px",
                opacity: active === item.label ? 1 : 0.9,
                color: active === item.label ? "#a855f7" : "white",
              }}
            >
              {item.label}
            </span>
            <span
              className="absolute bottom-[-4px] left-0 h-[2px] rounded-full transition-all duration-300"
              style={{
                background: "#a855f7",
                width: active === item.label ? "100%" : "0%",
                boxShadow: "0 0 8px #a855f7",
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;