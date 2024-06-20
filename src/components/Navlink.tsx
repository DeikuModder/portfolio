const Navlink = ({ title, url }: { title: string; url: string }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

export default Navlink;
