import picture from "../assets/picture.jfif";

const Home = () => {
  return (
    <section
      className="p-4 pt-[100px] flex flex-col justify-center mb-4"
      id="home"
    >
      <div className="flex gap-4">
        <div>
          <h1 className="text-2xl font-bold">Hector Gabriel Trujillo</h1>
          <h2 className="text-xl font-medium text-[#E59925]">
            Desarrollador Frontend
          </h2>
        </div>

        <figure className="w-[60px] rounded-full">
          <img src={picture} alt="picture" className="w-[100%] rounded-full" />
        </figure>
      </div>

      <p className="w-[80%]">
        Necesitas soluciones bonitas y eficacez para el front end de tus
        aplicaciones? Estas en el lugar indicado!
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="#contact"
          className="bg-[#E59925] text-black text-xl font-semibold rounded-lg p-1"
        >
          Contacto
        </a>
        <a
          href="#projects"
          className="border border-[#E59925] text-xl font-medium rounded-lg p-1"
        >
          Proyectos
        </a>
      </div>
    </section>
  );
};

export default Home;
