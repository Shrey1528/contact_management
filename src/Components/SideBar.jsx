import { Link } from "react-router-dom";
import { AiOutlineContacts } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex pt-16 flex-col h-screen p-3 bg-slate-800 shadow w-60 mobile:w-20">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-4 text-sm">
            <li className="rounded-md shadow-md shadow-slate-400 ">
              <Link
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md bg-slate-300  mobile:pl-0 mobile:space-x-0"
              >
                <AiOutlineContacts
                  style={{ fontSize: "1.5rem" }}
                  className="mobile:invisible"
                />
                <span className="mobile:text-sm">Contacts</span>
              </Link>
            </li>
            <li className="rounded-md shadow-md shadow-slate-400">
              <Link
                to="/dashboard"
                className="flex items-center p-2 space-x-3 rounded-md bg-slate-300 mobile:pl-0 mobile:space-x-0"
              >
                <IoStatsChartSharp
                  style={{ fontSize: "1.2rem" }}
                  className="mobile:invisible"
                />
                <span>Charts And Maps</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
