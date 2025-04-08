import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { i18n } = useTranslation("global");

  return (
    <>
      {i18n.language === "es" ? (
        <p className="text-center sm:w-[700px] sm:text-2xl sm:mr-[80px]">
          Poseo aproximadamente mas de 3 años de experiencia en{" "}
          <span className="text-[#E59925]">desarrollo web</span>. Mi progreso en
          el tiempo se puede apreciar en mi cuenta de GitHub. Me especializo en
          el lado del <span className="text-[#FC6767]">frontend</span> de
          software (sitios <span className="text-[#E59925]">web</span>,
          aplicaciones de <span className="text-[#5CF9EF]">escritorio</span> y{" "}
          <span className="text-[#9C53FA]">móvil</span>), tambien tengo cierta
          experiencia con bases de datos, servidores y creando API's (
          <span className="text-[#47BB45]">backend</span>), pero no es mi
          fuerte.
          <br />
          <br />
          Me gusta verme a mi mismo como un{" "}
          <span className="text-[#E59925]">constructor</span>, mas que solo un
          <span className="text-[#47BB45]"> programador</span>, entender el
          panorama completo a la hora de comenzar un proyecto, mas que solo
          limitarme a hacer ciertas piezas es importante para mí, me gusta
          entender y predecir como funcionara el proyecto entero cuando todas
          las piezas se conecten
        </p>
      ) : (
        <p className="text-center sm:w-[700px] sm:text-2xl sm:mr-[80px]">
          I'm a fullstack developer with around 3+ years of experience in{" "}
          <span className="text-[#E59925]">web development</span>. My progress
          in time can be seen on my GitHub account. I specialize on the{" "}
          <span className="text-[#FC6767]">front-end</span> of software
          development (<span className="text-[#E59925]">websites</span>,{" "}
          <span className="text-[#5CF9EF]">desktop</span> and{" "}
          <span className="text-[#9C53FA]">mobile</span> applications), i also
          have some experience with databases, servers and building API's (
          <span className="text-[#47BB45]">backend</span>), but it's not my
          forte.
          <br />
          <br />I like to see myself as a{" "}
          <span className="text-[#E59925]">builder</span> more than just a{" "}
          <span className="text-[#47BB45]">programmer</span>, understand the
          full scheme at the time of start a new project, rather than only make
          some pieces without understanding why it's important for me, i like to
          understand and predict how the full project will work once all the
          pieces and engines connect.
        </p>
      )}
    </>
  );
};

export default AboutMeText;
