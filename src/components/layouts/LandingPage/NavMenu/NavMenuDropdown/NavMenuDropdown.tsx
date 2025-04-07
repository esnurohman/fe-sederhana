import Link from "next/link";
import { CiBoxList, CiHome } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoIosInformationCircle, IoIosPeople } from "react-icons/io";
const NavMenuDropdown = () => {
  return (
    <div className="lg:hidden">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="m-1 bg-opacity-0 btn">
          <CiBoxList />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link href="/">
              <CiHome /> Home
            </Link>
          </li>
          <li>
            <Link href="#about">
              <IoIosInformationCircle /> About us
            </Link>
          </li>
          <li>
            <Link href="#feature">
              <FaHandHoldingMedical /> Our services
            </Link>
          </li>
          <li>
            <Link href="#testimonials">
              <IoIosPeople /> Testimonials
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavMenuDropdown;
