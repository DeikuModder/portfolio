import { ReactNode } from "react";

const Service = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <article className="bg-[#E59925] p-2 rounded-lg w-[170px] h-[360px] flex flex-col justify-center items-center text-black">
      <div className="mb-2">{icon}</div>
      <h3 className="font-bold text-center">{title}</h3>
      <ul className=" list-disc list-inside">{children}</ul>
    </article>
  );
};
export default Service;
