  import { useForm, Controller } from "react-hook-form";
  import ColorPickerInput from "./ColorPickerInput";
  import { useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPlus ,faTrash,faEdit,faStar} from "@fortawesome/free-solid-svg-icons";
    const milestoneNames = ["Milestone 1", "Milestone 2", "Milestone 3", "Milestone 4","free","text","dummy"];
      const Form = () => {
        const [milestoneValue, setMilestoneValue] = useState("");
        const [newMilestone, setNewMilestone] = useState("");
        const [showRecommendations, setShowRecommendations] = useState(false);
        const [taskValues, setTaskValues] = useState([])
        const [milestones, setMilestones] = useState([]);
        const {
          register,
          handleSubmit,
          control,
          formState: { errors },
        } = useForm();

      const onSubmit = (data) => {
        const formData = {
          ...data,
          milestones,
        };
        console.log(formData);
      };
    const handleInputChange = (e) => {
      const value = e.target.value;
      setMilestoneValue(value);
      setShowRecommendations(true); // Show recommendations when typing
    };

    const handleSelectMilestone = (milestone) => {
      setMilestoneValue(milestone);
      setShowRecommendations(false); // Close recommendations when a milestone is selected
    };

    const handleSaveMilestoneName = () => {
      if (newMilestone && !milestones.includes(newMilestone)) {
        milestones.push(newMilestone);
        setMilestoneValue(newMilestone);
        setNewMilestone("");
        setShowRecommendations(false); // Close recommendations after adding new milestone
        document.getElementById("my_modal_5").close(); // Close the modal after saving milestone
      }
        };
        
  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = document.getElementById("taskName").value;
    if (taskName.trim() !== "") {
      setTaskValues([...taskValues, { taskName }]);
      document.getElementById("taskName").value = "";
    }
  };

        const handleSaveMilestone = (e) => {
          e.preventDefault()
          if (
            milestoneValue &&
            !milestones.some((m) => m.milestoneName === milestoneValue)
          ) {
            setMilestones([
              ...milestones,
              { milestoneName: milestoneValue, tasks: taskValues },
            ]);
            setMilestoneValue("");
            setTaskValues([]);
            document.getElementById("my_modal_5").close(); // Close the modal after saving milestone
          }
        };
  const handleOpenModal = () => {
    document.getElementById("my_modal_5").showModal();
  };
    const handleCancel = () => {
      document.getElementById("my_modal_5").close(); 
        };    
    const resetForm = () => {
      // Reset state variables
      setMilestoneValue("");
      setNewMilestone("");
      setShowRecommendations(false);
      setTaskValues([]);
      setMilestones([]);
    };    
        return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg"
          >
            {/* first row */}
            <div className="flex">
              <div className="w-1/2 p-2 relative">
                <p className="text-sm px-2 py-2">
                  Template Type <span className="text-red-600">*</span>
                </p>
                <div className="relative">
                  <select
                    {...register("templateType", { required: true })}
                    className="w-full p-2 border rounded appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="Installation">Installation</option>
                    <option value="Crane">Crane</option>
                  </select>
                  {errors.templateType && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </div>
              </div>
              <div className="w-1/2 p-2">
                <label className="block w-full px-2 py-3">
                  <span className="text-sm">
                    Template Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    {...register("templateName", { required: true })}
                    type="text"
                    placeholder="Type here"
                    className="w-full p-2 border border-black focus:border-blue-500 rounded"
                  />
                  {errors.templateName && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </label>
              </div>
            </div>
            {/* second row */}
            <div className="px-2">
              <input
                {...register("copyTemplate")}
                type="checkbox"
                id="copyTemplate"
              />
              <label htmlFor="copyTemplate" className="mx-2">
                Copy Template
              </label>
            </div>
            {/* third row */}
            <div className="px-2 py-3 mx-2 my-3">
              <h2 className="font-bold text-sm">Colors</h2>
              <div className="flex justify-between px-2 py-3">
                <Controller
                  name="progressingColor"
                  control={control}
                  defaultValue="#DA362A"
                  render={({ field }) => (
                    <ColorPickerInput
                      placeholder="Progressing Color"
                      color={field.value}
                      setColor={(value) => field.onChange(value)}
                    />
                  )}
                />

                <Controller
                  name="completedColor"
                  control={control}
                  defaultValue="#2C9C4B"
                  render={({ field }) => (
                    <ColorPickerInput
                      placeholder="Completed Color"
                      color={field.value}
                      setColor={(value) => field.onChange(value)}
                    />
                  )}
                />

                <Controller
                  name="delayedColor"
                  control={control}
                  defaultValue="#F3BA16"
                  render={({ field }) => (
                    <ColorPickerInput
                      placeholder="Delayed Color"
                      color={field.value}
                      setColor={(value) => field.onChange(value)}
                    />
                  )}
                />
              </div>
            </div>
            {/* forth row */}
            <div className="flex justify-between">
              <div className="p-2">
                <label className="block w-full px-2 py-3">
                  <span className="text-sm">
                    Milestone Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="Please type"
                    value={milestoneValue}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-black focus:border-blue-500 rounded"
                  />
                  {errors.milestoneName && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </label>
                {showRecommendations &&
                  milestoneValue && ( // Show recommendations only if inputValue is not empty and showRecommendations is true
                    <div className="border rounded p-2">
                      {milestoneNames
                        .filter((milestone) =>
                          milestone
                            .toLowerCase()
                            .includes(milestoneValue.toLowerCase())
                        )
                        .map((milestone, index) => (
                          <p
                            key={index}
                            onClick={() => handleSelectMilestone(milestone)}
                            className="cursor-pointer hover:bg-gray-200"
                          >
                            {milestone}
                          </p>
                        ))}
                      {/* Filter out the newly added milestone from the recommendations */}
                      {!milestones.includes(milestoneValue) && (
                        <div
                          onClick={handleOpenModal}
                          className="flex items-center cursor-pointer text-sm hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="bg-indigo-100 rounded w-4 h-4 text-center text-sm">
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                          <span className="font-bold ml-2 text-sm">
                            Add new
                          </span>
                        </div>
                      )}
                    </div>
                  )}
              </div>
              <div className="p-2">
                <label className="block w-full px-2 py-3">
                  <span className="text-sm">
                    Task Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    id="taskName"
                    type="text"
                    placeholder="Please type task name"
                    className="w-full p-2 border border-black focus:border-blue-500 rounded"
                  />
                </label>
              </div>
              <div className="p-5 text-white text-sm">
                <button
                  onClick={handleAddTask}
                  className="px-3 bg-[#131650] rounded-md py-1"
                >
                  Add Task
                </button>
              </div>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Add New</h3>
                  <input
                    type="text"
                    placeholder="New Milestone"
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                    className="w-full p-2 border border-black focus:border-blue-500 rounded"
                  />
                  <div className="modal-action">
                    <button onClick={handleSaveMilestoneName} className="btn">
                      OK
                    </button>
                    <button onClick={handleCancel} className="btn">
                      Cancel
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
            {/* fifth row */}
            <div className="w-3/4 px-1 py-1">
              {taskValues.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#F8F8F8] p-2 mb-2 rounded"
                >
                  <span>{task.taskName}</span>
                  <div>
                    <button className="text-red-500 mr-2">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="text-purple-800 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-black">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mx-2 my-2">
              <button
                onClick={handleSaveMilestone}
                className="border-2 border-[#131650] text-[#131650] bg-transparent py-1 px-3 rounded hover:bg-indigo-100"
              >
                Save/Add New Milestone
              </button>
            </div>
            <div className="flex flex-col-reverse">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-indigo-50 p-2 mb-2 rounded relative"
                >
                  <div className="absolute top-0 right-0 p-2">
                    <button className="text-red-700 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-[#131650]">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#131650] mr-2"
                    />
                    <div className="bg-white p-1 rounded">
                      <span className="font-bold text-[#131650]">
                        Milestone Name:
                      </span>
                      <span>{milestone.milestoneName}</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-[#131650]">Tasks: </span>
                    <div className="flex space-x-2">
                      {milestone?.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="bg-white p-1 rounded">
                          <span>{task.taskName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                type="reset"
                onClick={resetForm}
                className="border-2 border-[#131650] text-[#131650] bg-transparent  px-6 rounded hover:bg-indigo-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#131650] text-white  px-6 rounded hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        );
  };
  export default Form