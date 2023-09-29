import { Link } from "react-router-dom";

type LinkBtnType = {
  route: string;
  text: string;
  onClick?: () => void;
};

const LinkBtn = ({ route, text, onClick }: LinkBtnType) => {
  return (
    <Link onClick={onClick} to={route} className="md-btn border-black">
      {text}
    </Link>
  );
};

export default LinkBtn;
