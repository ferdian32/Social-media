import { Link } from "react-router-dom";
const SuggestionFriends = () => {
  return (
    <section className="mt-3">
      <div className="flex justify-between items-center mb-3 ">
          <h4 className="text-sm font-bold">Sugesstions</h4>
          <Link to={''} className="text-sky-500 text-sm capitalize">See all</Link>
      </div>
      <div className="flex justify-between">
        <h1>Hello</h1>
      </div>
    </section>
  )
};

export default SuggestionFriends;