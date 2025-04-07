import Link from "next/link";
import { FaAnglesUp } from "react-icons/fa6";

const ToTop = () => {
  return (
    <Link href="#top">
      <button className="fixed z-50 p-3 border-2 rounded-lg border-slate-500 bottom-5 right-5 ">
        <FaAnglesUp className="text-slate-500" />
      </button>
    </Link>
  );
};
export default ToTop;
