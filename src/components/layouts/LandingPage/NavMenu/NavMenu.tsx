import Link from "next/link";
import { CiBoxList, CiHome } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoIosInformationCircle, IoIosPeople } from "react-icons/io";
import NavMenuDropdown from "./NavMenuDropdown";

const NavMenu = () => {
  return (
    <div className="shadow-xl navbar bg-base-100 rounded-xl">
      <div className="flex-1 gap-2 lg:gap-4">
        <div className="px-2 overflow-hidden text-6xl font-extrabold -rotate-45 border-2 rounded-lg">
          S
        </div>
        <a className="text-xl font-bold ">Sederhana</a>
      </div>
      <NavMenuDropdown />
      <div className="flex-none">
        <ul className="hidden px-1 lg:flex menu menu-horizontal">
          <li>
            <Link href="#">
              <CiHome /> Home
            </Link>
          </li>
          <li>
            <details>
              <summary>
                <CiBoxList /> Menu
              </summary>
              <ul className="p-2 rounded-t-none bg-base-100">
                <li>
                  <Link href="#">
                    <IoIosInformationCircle /> About us
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaHandHoldingMedical /> Our services
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <IoIosPeople /> Testimonials
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavMenu;
