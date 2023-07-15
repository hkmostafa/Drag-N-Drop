import { useContext } from "react";
import { StateContext } from "../context";

const Email = () => {
  // Accessing state and setState function from context
  const {
    state: { email, ...others }, // Extracting email state and others using object destructuring
    setState,
  }: any = useContext(StateContext);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ email: e.target.value, ...others }); // Updating email state and the other variables using setState function
  };

  return (
    <>
      <div
        className="px-4 py-2 bg-darkBlue rounded-lg grid gap-2"
        id="emailInput"
      >
        <label
          htmlFor="framework-select"
          className=" text-xs sm:text-sm font-PoppinsRegular text-white"
        >
          Enter your email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          className="bg-white w-full border-2 px-4 py-1 font-PoppinsRegular text-xs rounded-md outline-lightBlue"
        />
      </div>
    </>
  );
};
export default Email;
