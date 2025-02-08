type Props = {
  children: React.ReactNode;
  name: string;
};

const Template = ({ children, name }: Props) => {
  return (
    <div className="w-fit h-fit flex gap-2 font-bold bg-[#E59925] rounded-xl p-2 text-black items-center sm:text-xl">
      <div className="w-[20px]">{children}</div>
      {name}
    </div>
  );
};

export default Template;
