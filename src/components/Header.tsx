import Navlink from "./Navlink";

const Header = () => {
  return (
    <header className="fixed h-[80px] bg-[#2d2d2d] flex items-center px-2 w-full">
      <div className="w-[20%]">
        <p className="text-white font-bold text-2xl">
          <span className=" text-[#E59925]">&lt;</span>
          HG
          <span className="text-[#E59925]">/&gt;</span>
        </p>
      </div>
      <nav className="w-[80%] flex justify-end">
        <ul className="flex gap-4 font-bold text-md">
          <Navlink title="Servicios" url="#services" />
          <Navlink title="Proyectos" url="#projects" />
          <Navlink title="Habilidades" url="#habilidades" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
