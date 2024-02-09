import axios, { AxiosResponse } from "axios";
import { toast } from "@/components/ui/use-toast";
import { baseUrl } from "@/config/baseUrl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getToken, getresyloginDetail } from "@/utils/healper";

interface IAccountDetails {
  email?: string;
  password?: string;
  phone?: string;
}

export const useConnectResyAccount = () => {
  const queryClient = useQueryClient();
  const { mutate: connectResyAccount, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: IAccountDetails) => {
      return axios.post(
        `${baseUrl}/api/resylogin`,
        { email, password },
        { headers: { Authorization: `Bearer ${getToken("access_token")}` } }
      );
    },
    onSuccess: () => {
      toast({ description: "sucessfully connected", variant: "dark" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: { response: AxiosResponse }) => {
      toast({
        description: error.response.data.message,
        variant: "destructive",
      });
    },
  });

  return { connectResyAccount, isLoading };
};

export const useDisconnectConnectResyAccount = () => {
  const queryClient = useQueryClient();
  const { mutate: discconetResyAccount, isPending: isLoading } = useMutation({
    mutationFn: (): any => {
      return axios.post(
        `${baseUrl}/api/resysignout`,
        {},
        { headers: { Authorization: `Bearer ${getToken("access_token")}` } }
      );
    },
    onSuccess: () => {
      toast({ description: "sucessfully disconnected", variant: "dark" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // document.getElementById("dissconnetResyConnect")?.click()
    },
    onError: (error: { response: AxiosResponse }) => {
      toast({
        description: error.response.data.message,
        variant: "destructive",
      });
    },
  });

  return { discconetResyAccount, isLoading };
};

export const useDisconnectConnectOpenTableAccount = () => {
  const queryClient = useQueryClient();
  const { mutate: discconetOpenTableAccount, isPending: isLoading } =
    useMutation({
      mutationFn: (): any => {
        return axios.post(
          `${baseUrl}/api/opentable-signout`,
          {},
          { headers: { Authorization: `Bearer ${getToken("access_token")}` } }
        );
      },
      onSuccess: () => {
        toast({ description: "sucessfully disconnected", variant: "dark" });
        queryClient.invalidateQueries({ queryKey: ["user"] });
      },
      onError: (error: { response: AxiosResponse }) => {
        toast({
          description: error.response.data.message,
          variant: "destructive",
        });
      },
    });

  return { discconetOpenTableAccount, isLoading };
};

export const useConnectOpenTableAccount = () => {
  const queryClient = useQueryClient();
  const access_token = getToken("access_token");
  const { mutate: connectOpenTableAccount, isPending: isLoading } = useMutation(
    {
      mutationFn: ({
        countryCode,
        phoneNumber,
      }: {
        countryCode: string;
        phoneNumber: string;
      }) => {
        return axios.post(
          `${baseUrl}/api/opentable-phone-login`,
          {
            phone: `${countryCode}${phoneNumber}`,
          },
          { headers: { Authorization: `Bearer ${access_token}` } }
        );
      },
      onSuccess: (data) => {
        localStorage.setItem("resyloginDetail", JSON.stringify(data.data));
        toast({ description: data.data.message, variant: "dark" });
        queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      },
      onError: (error: { response: AxiosResponse }) => {
        toast({
          description: error.response.data.message,
          variant: "destructive",
        });
      },
    }
  );

  return { connectOpenTableAccount, isLoading };
};

export const useOpenTableCode = () => {
  const queryClient = useQueryClient();
  const access_token = getToken("access_token");
  const { mutate: openTableCode, isPending: isLoading } = useMutation({
    mutationFn: ({ code }: { code: string }) => {
      const resyLoginDetail = getresyloginDetail();

      return axios.post(
        `${baseUrl}/api/verify-phone-2fa`,
        {
          code: code,
          correlation_id: resyLoginDetail.correlation_id,
          phone: `+${resyLoginDetail?.message?.match(/(\d+)/)[0]}`,
        },
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
    },
    onSuccess: () => {
      toast({ description: "Successfully connected", variant: "dark" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: { response: AxiosResponse }) => {
      toast({
        description: error.response.data.message,
        variant: "destructive",
      });
    },
  });

  return { openTableCode, isLoading };
};
