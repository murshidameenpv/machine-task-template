import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "./Table";
import NewTemplate from "./NewTemplate";

const TemplateList = () => {
  const [isNewTemplate, setIsNewTemplate] = useState(false);

  const handleNewTemplate = () => {
    setIsNewTemplate(true);
  };

  if (isNewTemplate) {
    return <NewTemplate />;
  }

  return (
    <div className="">
      <div className="mx-2 my-3 py-2 px-3">
        <div className="flex justify-between">
          <h2 className="font-bold">Templates</h2>
          <button
            className="px-4 py-1 rounded-full border-2 border-[#3A406F] bg-transparent flex items-center font-bold text-sm cursor-pointer"
            onClick={handleNewTemplate}
          >
            <FiPlus className="mr-2 font-bold" />
            Add New
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default TemplateList;
