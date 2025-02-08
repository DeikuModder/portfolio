const Section = ({
  children,
  id,
  className,
  backgrounColor,
}: {
  children: JSX.Element | JSX.Element[];
  id: string;
  className?: string;
  backgrounColor?: string;
}) => {
  return (
    <section className={`${backgrounColor} sections z-30 relative`} id={id}>
      <div className={`${className} flex flex-col showAnimation`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
