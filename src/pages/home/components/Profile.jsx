import { Link } from "react-router-dom";

function profile() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <div className="rounded-full p-5 border border-neutral-500 overflow-hidden h-12 w-12"></div>
        <div>
          <p>ashimrai902</p>
          <div className="text-neutral-400 text-sm ">Biratnagar</div>
        </div>
      </div>
      <Link className="text-sm text-accent_soft">See now</Link>
    </div>
  );
}

export default profile;
