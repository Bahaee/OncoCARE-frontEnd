import { useForm, FieldValues } from "react-hook-form";
import { useEffect, useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { TbWorldPin } from "react-icons/tb";
import { TbGenderBigender } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import { FaRegAddressCard } from "react-icons/fa";
import { BiClinic } from "react-icons/bi";
import { getCountries } from "../services/getCountries";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; //Integrate reacthook form with zod

//Using Z we can define the schema or shape of all those validation rules:
const schema = z.object({
  iDrCard: z
    .string()
    .min(8, { message: "iDrCard must be at least 8 characters" }),
  gender: z
    .string()
    .nullable()
    .refine((data) => data !== null && data.trim() !== "", {
      message: "You must specify your gender",
    })
    .refine((data) => ["Man", "Woman", "Other"].includes(data), {
      message:
        "Invalid enum value. Expected 'Man' | 'Woman' | 'Other', received '${data}'",
    }),
  dateOfBirth: z.string(),
  country: z.string().refine((data) => data !== "Select your country", {
    message: "Please select a country",
  }),
  city: z.string().refine((data) => data.trim() !== "", {
    message: "City is required",
  }),
  address: z.string().refine((data) => data.trim() !== "", {
    message: "Address is required",
  }),
});

type signUp2Data = z.infer<typeof schema>; //This returns a typescript type which is similar to an interface

const SignUpSecondForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<signUp2Data>({ resolver: zodResolver(schema) });

  const onSubmit = (data: signUp2Data) => {
    console.log("Form data submitted:", data);
    if (!isValid) {
      console.error("Form is not valid. Check for errors below:");
      console.error(errors);
      return;
    }
  };
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState("Gender");

  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = await getCountries();
      setCountries(countryList);
    };

    fetchCountries();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-8 w-3/6">
        <p className="text-center text-2xl font-bold mb-12 text-blue-500 opacity-60">
          Sign Up
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <div className="flex items-center mb-8">
            <div className="w-1/3 mx-auto flex items-center pr-2 relative">
              <FaRegAddressCard className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("iDrCard")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="iDrCard"
                aria-label="iDrCard"
              />
              {errors.iDrCard && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.iDrCard.message}
                </p>
              )}
            </div>
            <div className="w-1/3 mx-auto flex items-center pr-2 pl-2 relative">
              <TbGenderBigender className="text-2xl text-blue-500 opacity-60 mr-2" />
              <select
                {...register("gender")}
                className="border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="gender"
                value={selectedGender}
                onChange={(sexe) => setSelectedGender(sexe.target.value)}
              >
                <option value="">Gender</option>
                <option value="Man">Male</option>
                <option value="Woman">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="w-1/3 mx-auto flex items-center pl-2 relative">
              <BsCalendar className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("dateOfBirth")} // Utilisez le nom "dateOfBirth" comme nom pour la propriété dans data
                className="border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Date of Birth"
                aria-label="dateOfBirth"
              />
              {errors.dateOfBirth && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-3/5 mx-auto flex items-center pr-2 relative">
              <TbWorldPin className="text-2xl text-blue-500 opacity-60 mr-2" />
              <select
                {...register("country")}
                className="border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                aria-label="country"
                defaultValue=""
              >
                <option value="Select your country">Select your country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.country.message}
                </p>
              )}
            </div>
            <div className="w-2/5 mx-auto flex items-center pl-2 relative">
              <GiModernCity className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("city")}
                className="appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="City"
                aria-label="City"
              />
              {errors.city && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-full mx-auto flex items-center relative">
              <BiClinic className="text-2xl text-blue-500 opacity-60 mr-2" />
              <input
                {...register("address")}
                className="index-10 appearance-none border-b border-blue-500 opacity-60 w-full py-2 px-3 text-blue-400 placeholder-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Clinical address"
                aria-label="address"
              />
              {errors.address && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    position: "absolute",
                    bottom: "-16px",
                    left: "10px",
                  }}
                >
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center z-10">
            <button
              //   disabled={!isValid}
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
