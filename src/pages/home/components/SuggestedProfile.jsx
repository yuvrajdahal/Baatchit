import { Link } from "react-router-dom";

function SuggestedProfile() {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <h6 className="font-bold text-neutral-400">Suggested For you </h6>
        <Link className="font-normal text-sm text-blue-500">See all</Link>
      </div>
      <ul className="">
        <li className="flex justify-between mt-4 items-center">
          <div className="flex gap-4">
            <div className="rounded-full p-5 border border-neutral-500 overflow-hidden h-12 w-12"></div>
            <div>
              <p>premishah</p>
              <div className="text-neutral-400 text-sm ">Biratnagar</div>
            </div>
          </div>
          <Link className="text-accent_soft text-sm">follow</Link>
        </li>
        <li className="flex justify-between mt-4 items-center">
          <div className="flex gap-4">
            <div className="rounded-full p-5 border border-neutral-500 overflow-hidden h-12 w-12"></div>
            <div>
              <p>itsRami</p>
              <div className="text-neutral-400 text-sm ">Biratnagar</div>
            </div>
          </div>
          <Link className="text-accent_soft text-sm">follow</Link>
        </li>
      </ul>
    </div>
  );
}

export default SuggestedProfile;
