import { useContext } from "react";
import { StateContext } from "../context";

const Work = () => {
  const {
    state: { workStyle, ...others },
    setState,
  }: any = useContext(StateContext);

  const handleChangeWork = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ workStyle: e.target.value, ...others });
  };

  return (
    <>
      <div
        className="px-4 py-2 bg-darkBlue rounded-lg grid gap-1"
        id="workStyleInput"
      >
        <h2 className="text-xs sm:text-sm font-PoppinsRegular text-white">
          How would you like to work ?
        </h2>
        <div className="flex gap-2">
          <input
            type="radio"
            id="onSite"
            name="workstyle"
            value={"On-Site"}
            checked={workStyle === "On-Site"}
            onChange={handleChangeWork}
          />
          <label
            htmlFor="onSite"
            className="text-xs sm:text-sm font-PoppinsRegular text-white"
          >
            On-Site
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="hybrid"
            name="workstyle"
            value={"Hybrid"}
            checked={workStyle === "Hybrid"}
            onChange={handleChangeWork}
          />
          <label
            htmlFor="hybrid"
            className="text-xs sm:text-sm font-PoppinsRegular text-white"
          >
            Hybrid
          </label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="remotely"
            name="workstyle"
            value={"Remote"}
            checked={workStyle === "Remote"}
            onChange={handleChangeWork}
          />
          <label
            htmlFor="remotely"
            className="text-xs sm:text-sm font-PoppinsRegular text-white"
          >
            Remote
          </label>
        </div>
      </div>
    </>
  );
};
export default Work;
