import { useForm, FieldValues } from "react-hook-form";
import { IoMdMail, IoMdLock } from "react-icons/io";

const FormLogIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-8 w-3/6">
        <p className="text-center text-2xl font-bold mb-12 text-blue-500 opacity-60">
          Log In
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="w-3/4 mx-auto mb-6 flex items-center">
            <IoMdMail className="text-2xl text-blue-500 opacity-60 mr-2" />
            <input
              {...register("email")}
              className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your Email"
              aria-label="Email"
            />
          </div>
          <div className="w-3/4 mx-auto mb-6 flex items-center">
            <IoMdLock className="text-2xl text-blue-500 opacity-60 mr-2" />
            <input
              {...register("password")}
              className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
              aria-label="Password"
            />
          </div>
          <div className="mb-6 flex items-center justify-center">
            <button
              className="text-sm text-blue-400 hover:text-blue-600"
              type="button"
            >
              Forgot your password ?
            </button>
          </div>
          <div className="mb-6 flex items-center justify-center z-10">
            <button
              className="pointer-events-auto bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogIn;
