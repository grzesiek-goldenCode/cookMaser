import { IoSettings } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="w-full mt-3 px-5 flex items-center justify-between"
    >
      <div className="flex items-center justify-start gap-3">
        <p className=" text-xl">Cook Manager</p>
        <a>Strona Główna</a>
        <a>Przepisy</a>
        <a>Dodaj</a>
      </div>
      <div className="flex items-center justify-end gap-10 pr-5">
        <span className="scale-150">
          <IoSettings />
        </span>
        <span className="scale-150">
          <IoMdNotificationsOutline />
        </span>
        <span className="scale-175">
          <CgProfile />
        </span>
      </div>
    </nav>
  );
}
