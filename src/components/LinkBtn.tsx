import { Link } from "react-router-dom";

type LinkBtnType = {
  route: string;
  text: string;
};

const LinkBtn = ({ route, text }: LinkBtnType) => {
  return (
    <Link to={route} className="md-btn border-black">
      {text}
    </Link>
  );
};

export default LinkBtn;
