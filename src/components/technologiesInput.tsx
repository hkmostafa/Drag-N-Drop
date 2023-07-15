import { useContext } from "react";
import { StateContext } from "../context";

const UITech = () => {
  const {
    state: { technology, ...others },
    setState,
  }: any = useContext(StateContext);

  const handleChangeTechnology = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ technology: e.target.value, ...others });
  };

  return (
    <>
      <div
        className="px-4 py-2 bg-darkBlue rounded-lg grid gap-2"
        id="technologyInput"
      >
        <label
          htmlFor="technology-select"
          className="text-xs sm:text-sm font-PoppinsRegular text-white"
        >
          Your favorite CSS framework ?
        </label>
        <select
          name="technology"
          id="technology-select"
          className="font-PoppinsRegular text-xs bg-white px-2 py-1 rounded-md w-full"
          value={technology}
          onChange={handleChangeTechnology}
        >
          <option value="" className="">
            Select CSS framework
          </option>
          <option value={"MaterialUI"} className="" defaultValue={"MaterialUI"}>
            MaterialUI
          </option>
          <option value={"TailwindCSS"} className=" ">
            TailwindCSS
          </option>
          <option value={"Bootstrap"} className="">
            Bootstrap
          </option>
        </select>
      </div>
    </>
  );
};
export default UITech;
