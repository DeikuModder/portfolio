import picture from "../assets/picture.jfif";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-2 items-center p-4">
      <h2 className="text-2xl font-bold">Acerca de mi</h2>

      <figure className="w-[150px] rounded-full">
        <img src={picture} alt="picture" className="w-[100%] rounded-full" />
      </figure>

      <p className="text-center">
        Estudiante en la carrera de{" "}
        <span className="text-[#53A2FF]">Ingeniería Informática</span>, tengo
        aproximadamente mas de 2 años de experiencia en{" "}
        <span className="text-[#E59925]">desarrollo web</span>. Mi progreso en
        el tiempo se puede apreciar en mi cuenta de GitHub. Me especializo en el
        lado del <span className="text-[#FC6767]">frontend</span> de software
        (sitios <span className="text-[#E59925]">web</span>, aplicaciones de{" "}
        <span className="text-[#5CF9EF]">escritorio</span> y{" "}
        <span className="text-[#9C53FA]">móvil</span>), tambien tengo cierta
        experiencia con bases de datos y con servidores (
        <span className="text-[#47BB45]">backend</span>), pero no es mi fuerte.
        <br />
        Me gusta verme a mi mismo como un{" "}
        <span className="text-[#E59925]">constructor</span>, mas que solo un
        <span className="text-[#47BB45]">programador</span>, entender el
        panorama completo a la hora de comenzar un proyecto, mas que solo
        limitarme a hacer ciertas piezas es importante para mí, me gusta
        entender y predecir como funcionara el proyecto entero cuando todas las
        piezas se conecten
      </p>
    </section>
  );
};

export default AboutMe;
