import { Link } from "react-router-dom";
const SeeAll = () => {
  return (
    <div className="flex justify-between items-center mb-3 ">
      <h4 className="text-sm font-bold">Sugesstions</h4>
      <Link to={''} className="text-sky-500 text-sm capitalize">See all</Link>
    </div>
  )
};

export default SeeAll;