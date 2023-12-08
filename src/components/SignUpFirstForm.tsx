import { useForm } from "react-hook-form";
import { BsFillPersonFill, BsFillPhoneFill } from "react-icons/bs";
import { IoMdMail, IoMdLock } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; //Integrate reacthook form with zod

const schema = z.object({
  firstName: z
    .string()
    .min(3, { message: "name must be at least 3 characters" }),
  lastName: z
    .string()
    .min(3, { message: "name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine(
    (data) => {
      const phoneNumber = data.toString();
      return phoneNumber.length >= 10;
    },
    {
      message: "Phone must be a number with at least 10 digits",
      path: ["phone"],
    }
  ),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  // .refine(
  //   (password) => {
  //     // Au moins un chiffre
  //     const hasDigit = /\d/.test(password);
  //     // Au moins une lettre majuscule
  //     const hasUppercase = /[A-Z]/.test(password);
  //     // Au moins une lettre minuscule
  //     const hasLowercase = /[a-z]/.test(password);
  //     return hasDigit && hasUppercase && hasLowercase;
  //   },
  //   {
  //     message:
  //       "Password must contain at least one digit, one uppercase letter, and one lowercase letter",
  //     path: ["password"],
  //   }
  // )
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm password must be at least 8 characters" }),
});

type signUp1Data = z.infer<typeof schema>; //This returns a typescript type which is similar to an interface

const SignUpFirstForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<signUp1Data>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: signUp1Data) => console.log(data);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-8 w-3/6">
        <p className="text-center text-2xl font-bold mb-12 text-blue-500 opacity-60">
          Sign Up
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="flex items-center mb-8">
            <div className="w-1/2 mx-auto flex items-center pr-2 relative">
              <BsFillPersonFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("firstName")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                aria-label="firstName"
              />
              {errors.firstName && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-1/2 mx-auto flex items-center pl-2 relative">
              <BsFillPersonFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("lastName")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name"
                aria-label="lastName"
              />
              {errors.lastName && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/5 mx-auto flex items-center pr-2 relative">
              <IoMdMail className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("email")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your Email"
                aria-label="Email"
              />
              {errors.email && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-2/5 mx-auto flex items-center pl-2 relative">
              <BsFillPhoneFill className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("phone" /*, { valueAsNumber: true }*/)}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
                aria-label="Phone"
              />
              {errors.phone && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/4 mx-auto flex items-center pr-2 relative">
              <IoMdLock className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("password")}
                className="index-10 appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
              {errors.password && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="w-3/4 mx-auto flex items-center pl-2 relative">
              <IoMdLock className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("confirmPassword")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>
            {errors.confirmPassword && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  position: "absolute",
                  bottom: "-16px",
                  left: "10px",
                }}
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="mb-6 flex items-center justify-center z-10">
            <button
              // disabled={!isValid}
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
