const Navlink = ({ title, url }: { title: string; url: string }) => {
  return (
    <li>
      <a href={url} className="hover:text-[#E59925] transition-colors">
        {title}
      </a>
    </li>
  );
};

export default Navlink;
