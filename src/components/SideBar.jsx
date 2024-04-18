/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaLayerGroup } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { IoDocument } from "react-icons/io5";
import { TiDocument } from "react-icons/ti";
import { IoPeopleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import Activities from "./Activities";
import Settings from "./Settings";
import Users from "./Users";
import Roles from "./Roles";
import Reports from "./Reports";
import Projects from "./Projects";
import TemplateList from "./TemplateList";
const SideBar = ({ setSelectedComponent }) => {
  const [active, setActive] = useState(null);
  const handleActive = (index) => {
    setActive(index);
    setSelectedComponent(components[index]);
  };

  const icons = [
    <FaLayerGroup />,
    <VscGraphLine />,
    <IoDocument />,
    <IoPeopleOutline />,
    <TiDocument />,
    <CiUser />,
    <CiSettings />,
  ];

  const components = [
    <Projects />,
    <Activities />,
    <Reports />,
    <Users />,
    <TemplateList />,
    <Roles />,
    <Settings />,
  ];

  return (
    <div className="flex">
      <div className="w-10 bg-[#ffff] h-screen shadow-md">
        <ul className="flex flex-col text-lg">
          {icons.map((icon, index) => (
            <li
              key={index}
              className={`cursor-pointer px-2 py-4 ${
                active === index ? "bg-slate-400" : ""
              }`}
              onClick={() => handleActive(index)}
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
