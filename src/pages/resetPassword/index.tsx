import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import {  useSearchParams } from "react-router-dom";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "@/utils/formZodSchema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ButtonLoader} from "@/components";
import {
  useChangePassword,
  useVerifyResetPassword,
} from "@/features/authentication/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const Index = () => {
  // const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { verifyResetPassword, isLoading } = useVerifyResetPassword();
  const { changePassword } =    useChangePassword();


  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    if (!token) {
      changePassword({ password:values.password });
    } else {
      verifyResetPassword({ password: values.password, token });
    }
  }
  return (
    <>
      <div className="flex sm:items-center items-start justify-center h-screen w-[100%] font-inter">
        <div className="container sm:w-3/12">
          <div className="text-center text-primary text-3xl font-bold w-full sm:w-auto p-3 font-inter">
            RESERVATION SNIPER
          </div>
          <div className="sm:border sm:border-gray-300 sm:p-[40px] w-full rounded-md mt-3">
            <div className="text-center text-[24px] font-bold mb-3 font-inter">
              <p>Create New Password</p>
            </div>
            {/* <div className="my-3">
              <p className="text-[#12171A] text-[14px] !font-[400]">
                New Password
              </p>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="px-3 text-[13px] !font-[400] text-[#12171A] border py-[12px] w-[100%] rounded-md"
                  placeholder="Create new password"
                  onChange={handleChange}
                  value={password}
                ></input>
                <div className="absolute right-3 top-3">
                  {showPassword ? (
                    <Eye
                      size={18}
                      color="gray"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <EyeOff
                      size={18}
                      color="gray"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
              <p className="text-[#12171A] opacity-[60%] text-[10px] !font-[400]">
                Must be at least 8 characters long
              </p>
              <p className="text-xs text-primary">{error}</p>
            </div>
            <div className="my-3">
              <p className="text-[#12171A] text-[14px] !font-[400]">
                Repeat new Password
              </p>
              <div className="relative">
                <input
                  type={`${showPassword2 ? "text" : "password"}`}
                  className="px-3 text-[13px] !font-[400] text-[#12171A] border py-[12px] w-[100%] rounded-md"
                  placeholder="Repeat new password"
                  onChange={handleChangePassword}
                  value={confirmPassword}
                ></input>
                <div className="absolute right-3 top-3">
                  {showPassword2 ? (
                    <Eye
                      size={18}
                      color="gray"
                      onClick={() => setShowPassword2(!showPassword2)}
                    />
                  ) : (
                    <EyeOff
                      size={18}
                      color="gray"
                      onClick={() => setShowPassword2(!showPassword2)}
                    />
                  )}
                </div>
              </div>
              <p className="text-xs text-primary">{error2}</p>
            </div> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10 sm:m-auto w-full"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <>
                      <FormItem className="relative">
                        <FormLabel className="text-sm font-normal">
                          New Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Create new password"
                              type={`${showPassword ? "text" : "password"}`}
                              {...field}
                            />
                            <div className="absolute right-3 top-3">
                              {showPassword ? (
                                <Eye
                                  size={18}
                                  color="gray"
                                  onClick={() => setShowPassword(!showPassword)}
                                />
                              ) : (
                                <EyeOff
                                  size={18}
                                  color="gray"
                                  onClick={() => setShowPassword(!showPassword)}
                                />
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="absolute -bottom-5 text-xs" />
                      </FormItem>
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <>
                      <FormItem className="relative">
                        <FormLabel className="text-sm font-normal">
                          Repeat Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Repeat new password"
                              type={`${showPassword2 ? "text" : "password"}`}
                              {...field}
                            />
                            <div className="absolute right-3 top-3">
                              {showPassword2 ? (
                                <Eye
                                  size={18}
                                  color="gray"
                                  onClick={() =>
                                    setShowPassword2(!showPassword2)
                                  }
                                />
                              ) : (
                                <EyeOff
                                  size={18}
                                  color="gray"
                                  onClick={() =>
                                    setShowPassword2(!showPassword2)
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="absolute -bottom-5 text-xs text-error" />
                      </FormItem>
                    </>
                  )}
                />
                {/* <div className="mt-3"> */}
                  <Button type="submit" variant="primary" className="w-full">
                    {isLoading ? <ButtonLoader /> : "Confirm"}
                  </Button>
                {/* </div> */}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
