import React from "react";
import { useForm, FieldValues } from "react-hook-form";

const FormLogIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
        <p className="text-center text-xl font-bold mb-4">Log In</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="mb-4">
            <input
              {...register("email")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your Email"
              aria-label="Email"
            />
          </div>
          <div className="mb-4">
            <input
              {...register("password")}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
              aria-label="Password"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <button
              className="text-sm text-teal-500 hover:text-teal-800"
              type="button"
            >
              Forgot your password ?
            </button>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
