import { useState } from "react";
import deku from "../Assets/Images/Wallpaper/dekuWallpaper.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { facebook, twitter } from "../Assets/Icons";

interface useFormInterface {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is required!").email("Invalid Email!"),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<useFormInterface>({
    resolver: yupResolver(schema),
  });
  const [input, setInput] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  return (
    <div
      className="min-h-screen w-full flex bg-cover border-[1px] items-center"
      style={{
        background: `url(${deku}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scaleX(-1)",
      }}
    >
      <div
        className=" h-full px-[40px] flex w-full"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="gap-[30px] justify-center flex h-full flex-wrap items-end">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-1/3 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/My-hero-academia-jpn.svg/2560px-My-hero-academia-jpn.svg.png"
              alt="My Hero Academia"
            />
          </div>
          <div className="md:w-8/12 w-full lg:ml-6 lg:w-5/12 md:py-[0px] py-[28px]">
            <form
              className="bg-white md:p-[48px] p-[24px] rounded-[8px]"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  {...register("email")}
                  type="text"
                  className={`peer block min-h-[auto] w-full rounded border-[1px] shadow-sm shadow-black bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${
                    errors?.email
                      ? "!border-red-600 border-opacity-50 shadow-sm !shadow-red-600"
                      : ""
                  }`}
                  autoComplete="current-password"
                  value={input?.email}
                  onChange={(event) => {
                    setInput((prev) => ({
                      ...prev,
                      email: event?.target?.value,
                    }));
                    clearErrors("email");
                  }}
                  placeholder="Email address"
                />
                <label
                  className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:bg-white peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                    input?.email
                      ? "-translate-y-[1.15rem] scale-[0.8] bg-white"
                      : ""
                  } ${errors.email ? "text-red-600" : ""}`}
                >
                  Email address
                </label>
                <p className="h-[12px] text-red-600 text-[12px]">
                  {errors?.email && `${errors?.email?.message}`}
                </p>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  {...register("password")}
                  type="password"
                  className={`peer block min-h-[auto] border-[1px] w-full rounded !bg-white shadow-sm shadow-black  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 ${
                    errors?.password
                      ? "!border-red-600 border-opacity-50 shadow-sm !shadow-red-600"
                      : ""
                  } `}
                  autoComplete="current-password"
                  value={input?.password}
                  onChange={(event) => {
                    setInput((prev) => ({
                      ...prev,
                      password: event?.target?.value,
                    }));
                    clearErrors("password");
                  }}
                  placeholder="Password"
                />
                <label
                  //   for="exampleFormControlInput33"
                  className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:bg-white peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${
                    input?.password
                      ? "-translate-y-[1.15rem] scale-[0.8] bg-white"
                      : ""
                  } ${errors.password ? "text-red-600" : ""}`}
                >
                  Password
                </label>
                <p className="absolute text-red-600 text-[12px]">
                  {errors?.password && `${errors?.password?.message}`}
                </p>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-[#3a71ca] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="mr-2 h-3.5 w-3.5"
                />
                Continue with Facebook
              </a>
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src={twitter}
                  alt="twitter icon"
                  className="mr-2 h-3.5 w-3.5"
                />
                Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
