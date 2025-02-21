import React, {useState} from 'react'

const AddProject = () => {
    const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [currentSubstep, setCurrentSubstep] = useState("");
  const [substepVisible, setSubstepVisible] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(null);

  const addStep = () => {
    if (currentStep.trim()) {
      const newStep = {
        text: currentStep,
        substeps:
          substepVisible && currentSubstep.trim() ? [currentSubstep] : [],
      };
      if (activeStepIndex !== null) {
        // Edit existing step
        const updatedSteps = [...steps];
        updatedSteps[activeStepIndex] = newStep;
        setSteps(updatedSteps);
      } else {
        // Add new step
        setSteps([...steps, newStep]);
      }
      resetInputs();
    }
  };

  const resetInputs = () => {
    setCurrentStep("");
    setCurrentSubstep("");
    setSubstepVisible(false);
    setActiveStepIndex(null);
  };

  const cancelStep = () => {
    resetInputs();
  };

  const addSubstep = () => {
    setSubstepVisible(true);
  };

  const cancelSubstep = () => {
    setSubstepVisible(false);
    setCurrentSubstep("");
  };

  const editStep = (index) => {
    setCurrentStep(steps[index].text);
    setCurrentSubstep(steps[index].substeps[0] || "");
    setSubstepVisible(!!steps[index].substeps.length);
    setActiveStepIndex(index);
  };
  return (
    <div>
      {/* Steps Section */}
      <div className="project-steps -mt-3">
          <h2 className="text-[17px] bigText">Add Project Steps</h2>
          <h2 className="text-[14px] lg:text-[16px] editTitle text-[#359846] text-justify">
            Provide a step-by-step guide to delivering your project.
          </h2>

          {/* Existing Steps */}
          <div className="">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-4 mt-5 w-full focus:outline-none  name bg-[#012619] rounded-lg text-white shadow-lg shadow-[#071B16]"
              >
                <div className="flex justify-between">
                  <p className="font-bold">
                    <span className="bg-[#D9D9D9] bg-opacity-20 px-2 rounded-full text-[#00FF23]">
                      {index + 1}
                    </span>{" "}
                    &nbsp; {step.text}
                  </p>
                  <button onClick={() => editStep(index)}>
                    <img src="../images/editPen.svg" alt="edit" />
                  </button>
                </div>
                {step.substeps.length > 0 && (
                  <ul className="mt-2 ml-10 pl-4 list-disc break-words w-[80%] text-[14px]">
                    {step.substeps.map((substep, subIndex) => (
                      <li key={subIndex}>{substep}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Show Add Step form below the most recently added step */}
            {activeStepIndex === null && (
              <button
                onClick={() => setActiveStepIndex(steps.length)}
                className="bg-button hover:bg-green-800 text-white font-bold py-3 px-4 mt-6 flex justify-between items-center gap-4 rounded-lg"
              >
                Add Step <img src="../images/AddSym.svg" alt="add" />
              </button>
            )}

            {activeStepIndex !== null && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder={`Step ${activeStepIndex + 1}`}
                  value={currentStep}
                  onChange={(e) => setCurrentStep(e.target.value)}
                  className="w-full focus:outline-none p-4 name bg-[#012619] rounded-lg text-white shadow-lg shadow-[#071B16]"
                />
                {substepVisible && (
                  <textarea
                    placeholder="Substep"
                    value={currentSubstep}
                    onChange={(e) => setCurrentSubstep(e.target.value)}
                    className="w-full focus:outline-none p-4 name bg-[#012619] rounded-lg text-white shadow-lg shadow-[#071B16] mt-4"
                  />
                )}
                <div className="flex justify-between mt-5">
                  {!substepVisible ? (
                    <button
                      onClick={addSubstep}
                      className="bg-[#026310] text-white px-4 py-2 rounded-lg hover:bg-green-600 name"
                    >
                      Add Substep
                    </button>
                  ) : (
                    <button
                      onClick={cancelSubstep}
                      className="bg-transparent ring-2 ring-red-600 hover:bg-red-600 text-white py-2 px-5 rounded-lg name ml-1"
                    >
                      Cancel Substep
                    </button>
                  )}
                  <div>
                    <button
                      onClick={addStep}
                      className="bg-[#026310] text-white px-8 py-2 rounded-lg hover:bg-green-600 name mr-2"
                    >
                      Add
                    </button>
                    <button
                      onClick={cancelStep}
                      className="bg-transparent ring-2 ring-red-600 hover:bg-red-600 text-white py-2 px-7 rounded-lg name"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default AddProject
