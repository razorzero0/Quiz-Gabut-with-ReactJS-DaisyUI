import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar  h-16 bg-primary text-white shadow-md shadow-blue-500/50  rounded-t-3xl mt-2">
      <div className="flex justify-between">
        <Link to={"/"}>
          <div className="btn btn-ghost normal-case text-xl">Quiz Gabut</div>
        </Link>
        <div className=""></div>
      </div>
    </div>
  );
}
