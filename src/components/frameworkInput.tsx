import { useContext } from "react";
import { StateContext } from "../context";

const Framework = () => {
  const {
    state: { framework, ...others },
    setState,
  }: any = useContext(StateContext);

  const handleChangeFramework = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ framework: e.target.value, ...others });
  };

  return (
    <>
      <div
        className="px-4 py-2 bg-darkBlue rounded-lg grid gap-2"
        id="frameworkInput"
      >
        <label
          htmlFor="framework-select"
          className="text-xs sm:text-sm font-PoppinsRegular text-white"
        >
          Your favorite framework ?
        </label>
        <select
          name="Framework"
          id="framework-select"
          className="font-PoppinsRegular text-xs bg-white px-2 py-1 rounded-md  w-full"
          value={framework}
          onChange={handleChangeFramework}
        >
          <option value="" className="">
            Select Front-End framework
          </option>
          <option value={"React"} className="">
            React
          </option>
          <option value={"VueJS"} className=" ">
            VueJS
          </option>
          <option value={"Angular"} className="">
            Angular
          </option>
        </select>
      </div>
    </>
  );
};
export default Framework;
