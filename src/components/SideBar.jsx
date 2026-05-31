import "./Sidebar.css";

import {
  FaHome,
  FaMap,
  FaLocationArrow,
  FaCube,
  FaBullseye,
  FaChartBar,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo">
        ERIC
      </div>

      <nav>

        <FaHome />
        <FaMap />
        <FaLocationArrow />
        <FaCube />
        <FaBullseye />
        <FaChartBar />
        <FaUser />

      </nav>

    </div>
  );
};

export default Sidebar;