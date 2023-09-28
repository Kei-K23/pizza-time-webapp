import { PizzaCrustsType } from "../pizza";
import CrustCard from "./CrustCard";

type crustListProps = {
  pizza: PizzaCrustsType;
};

const List = ({ pizza }: crustListProps) => {
  return (
    <div className="card-grid ">
      {pizza.map((item, index) => (
        <CrustCard
          key={index}
          name={item?.name}
          img={item?.img}
          price={item?.price}
          description={item?.description}
        />
      ))}
    </div>
  );
};

export default List;
