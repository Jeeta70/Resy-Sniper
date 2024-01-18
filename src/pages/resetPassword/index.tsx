import { useState } from "react";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

const Index = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [error2, setError2] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setError("Password is too short");
    } else {
      setError("");
    }
  };
    const handleChangePassword = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    if (confirmPassword != password) {
      setError2("Passwords do not match");
    } else {
      setError2("");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen w-[100%] font-inter">
        <div>
          <div className="text-center text-primary text-3xl font-bold w-full sm:w-auto p-3 font-inter">
            RESY SNIPER
          </div>
          <div className="border border-gray-300 p-[40px] w-[380px] rounded-md mt-3">
            <div className="text-center text-[24px] !font-[700] mb-3 font-inter">
              <p>Create New Password</p>
            </div>
            <div className="my-3">
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
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="w-[100%] text-white rounded-md bg-primary py-[12px] px-[24px] text-sm font-inter"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
