import { Link } from "react-router-dom";

type LinkBtnType = {
  route: string;
  text: string;
  onClick?: () => void;
};

const LinkBtn = ({ route, text, onClick }: LinkBtnType) => {
  return (
    <Link
      onClick={onClick}
      to={route}
      className="transit md-btn border-black hover:scale-95"
    >
      {text}
    </Link>
  );
};

export default LinkBtn;
