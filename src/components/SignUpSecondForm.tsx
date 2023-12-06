import { useForm, FieldValues } from "react-hook-form";
import { BsCalendar } from "react-icons/bs";
import { TbWorldPin } from "react-icons/tb";
import { TbGenderBigender } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import { FaRegAddressCard } from "react-icons/fa";
import { BiClinic } from "react-icons/bi";

const SignUpSecondForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-8 w-3/6">
        <p className="text-center text-2xl font-bold mb-12 text-blue-500 opacity-60">
          Sign Up
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="flex items-center mb-8">
            <div className="w-1/3 mx-auto flex items-center pr-2">
              <FaRegAddressCard className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("iDrCard")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="iDrCard"
                aria-label="iDrCard"
              />
            </div>
            <div className="w-1/3 mx-auto flex items-center pr-2 pl-2">
              <TbGenderBigender className="text-2xl text-blue-500 opacity-60 mr-2" />
              <select
                {...register("gender")}
                className="border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="gender"
              >
                <option value="">Gender</option>
                <option value="man">Male</option>
                <option value="woman">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-1/3 mx-auto flex items-center pl-2">
              <BsCalendar className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("dateOfBirth")} // Utilisez le nom "dateOfBirth" comme nom pour la propriété dans data
                className="border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Date of Birth"
                aria-label="dateOfBirth"
              />
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/5 mx-auto flex items-center pr-2">
              <TbWorldPin className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("country")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Country"
                aria-label="Country"
              />
            </div>
            <div className="w-2/5 mx-auto flex items-center pl-2">
              <GiModernCity className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("city")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
                aria-label="City"
              />
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-full mx-auto flex items-center">
              <BiClinic className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("address")}
                className="index-10 appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Clinical address"
                aria-label="address"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center z-10">
            <button
              className="pointer-events-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpSecondForm;
