import { useContext, useState } from "react";
import { StateContext } from "../context";
import isDivInsideRightZone from "../utility/rightDevParent";

const ArrayList = () => {
  // Accessing state from context
  const {
    state: { email, name, framework, workStyle, technology },
  }: any = useContext(StateContext);

  // Local state for storing data
  const [data, setData] = useState({
    name: "",
    email: "",
    framework: "",
    workStyle: "",
    technology: "",
  });

  // Checking if inputs are inside the right dropbox using the "isDivInsideRightZone" function

  const isEmailInside = isDivInsideRightZone("emailInput");
  const isNameInside = isDivInsideRightZone("nameInput");
  const isFrameworkInside = isDivInsideRightZone("frameworkInput");
  const isWorkStyleInside = isDivInsideRightZone("workStyleInput");
  const istechnologyInside = isDivInsideRightZone("technologyInput");

  // Function to update the data state
  const showData = () => {
    setData({ email, name, framework, technology, workStyle });
  };

  return (
    <>
      <button
        className="text-white font-PoppinsRegular tracking-wider bg-darkBlue w-[50%] sm:w-fit  sm:px-20 py-3 text-md sm:text-lg rounded-2xl border-lightBlue border-[1px] justify-self-center hover:shadow-md hover:bg-bgColor transition-color duration-200 ease-in-out"
        type="submit"
        onClick={showData}
      >
        Save
      </button>
      <div className="">
        <table className=" w-full table-fixed">
          <thead className="">
            <tr className="font-PoppinsRegular text-xs md:text-base sm:text-left border-solid    border-b-[0.5px] border-white text-white text-center ">
              <th className="py-2 px-1 md:px-4 border-solid    border-r-[0.5px] sm:border-none border-white ">
                Name
              </th>
              <th className="py-2  px-1 md:px-4 border-solid    border-r-[0.5px] sm:border-none border-white">
                Work style
              </th>
              <th className="py-2  px-1 md:px-4 border-solid    border-r-[0.5px] sm:border-none border-white">
                Email
              </th>
              <th className="py-2  px-1 md:px-4 border-solid    border-r-[0.5px] sm:border-none border-white break-words">
                Framework
              </th>
              <th className="py-2  px-1 md:px-4 sm:border-none   break-words">
                CSS framework
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="font-PoppinsRegular text-xs sm:text-sm text-center sm:text-left   text-gray-300">
              <td className="py-2 px-1 md:px-4 border-r-[0.5px]  sm:border-none border-solid  break-words">
                {/*Show name only if the name input is in the right dropzone */}
                {isNameInside && data.name}
              </td>
              <td className="py-2  px-1 md:px-4 border-r-[0.5px]  sm:border-none border-solid break-words">
                {isWorkStyleInside && data.workStyle}
              </td>
              <td className="py-2  px-1 md:px-4 border-r-[0.5px]  sm:border-none border-solid  break-words">
                {isEmailInside && data.email}
              </td>
              <td className="py-2 px-1 md:px-4 border-r-[0.5px]  sm:border-none border-solid break-words">
                {isFrameworkInside && data.framework}
              </td>
              <td className="py-2  px-1 md:px-4 border-solid sm:border-none  break-words ">
                {istechnologyInside && data.technology}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ArrayList;
