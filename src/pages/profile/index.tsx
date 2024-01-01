// import * as z from "zod";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AtSign, Phone } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
// import { signupFormSchema } from "@/utils/formZodSchema";
import { ProfileTab } from "@/components";

const Index = () => {
  // const form = useForm<z.infer<typeof signupFormSchema>>({
  //   resolver: zodResolver(signupFormSchema),
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     countryCode: "",
  //     phoneNumber: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  // });

  // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof signupFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  return (
    <>
      <Tabs defaultValue="account" className="sm:w-8/12 mx-auto">
        <CardHeader>
          <CardTitle className="font-bold text-3xl">Profile </CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="grid grid-cols-[20%,auto,20%] sm:grid-cols-[12%,auto,10%] items-center gap-4 border-3">
            <div className=" bg-black h-full text-white rounded-md flex justify-center items-center text-6xl">
              JD
            </div>
            <div className=" flex flex-col gap-2 ">
              <CardDescription className="font-bold text-black text-md ">
                John Doe
              </CardDescription>
              <CardDescription>
                <AtSign className="inline-block" size={20} />
                <span className="ml-1 text-xs"> johndoe@example.com</span>
              </CardDescription>
              <CardDescription>
                <Phone className="inline-block" size={20} />
                <span className="ml-1 text-xs"> +1 917-728-4685</span>
              </CardDescription>
            </div>
            <div className=" justify-self-end">
              <Button variant="primary">PRO</Button>
            </div>
          </div>
        </CardContent>
        <ProfileTab />
      </Tabs>
    </>
  );
};

export default Index;
