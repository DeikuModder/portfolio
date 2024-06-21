const Section = ({
  children,
  id,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  id: string;
  className?: string;
}) => {
  return (
    <section className={`${className} flex flex-col`} id={id}>
      {children}
    </section>
  );
};

export default Section;
