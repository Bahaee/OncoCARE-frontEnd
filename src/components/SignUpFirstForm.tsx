import { useForm, FieldValues } from "react-hook-form";
import { BsFillPersonFill, BsFillPhoneFill } from "react-icons/bs";
import { IoMdMail, IoMdLock } from "react-icons/io";

const SignUpFirstForm = () => {
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
            <div className="w-1/2 mx-auto flex items-center pr-2">
              <BsFillPersonFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("firstName")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                aria-label="firstName"
              />
            </div>
            <div className="w-1/2 mx-auto flex items-center pl-2">
              <BsFillPersonFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("lastName")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name"
                aria-label="lastName"
              />
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/5 mx-auto flex items-center pr-2">
              <IoMdMail className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("email")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your Email"
                aria-label="Email"
              />
            </div>
            <div className="w-2/5 mx-auto flex items-center pl-2">
              <BsFillPhoneFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("phone")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
                aria-label="Phone"
              />
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/4 mx-auto flex items-center pr-2">
              <IoMdLock className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("password")}
                className="index-10 appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="w-3/4 mx-auto flex items-center pl-2">
              <IoMdLock className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("confirmPassword")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center z-10">
            <button
              className="pointer-events-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFirstForm;
