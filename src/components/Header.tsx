interface HeaderProps {
    title: string,
    subtitle: string
}

const Header = (props: HeaderProps) => {
  return (
    <div className="m-5">
        <h2 className="text-2xl font-bold text-gray-500">{props.title}</h2>
        <h5 className="text-gray-400">{props.subtitle}</h5>
    </div>
  );
};

export default Header;