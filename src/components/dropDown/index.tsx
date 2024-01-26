import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";

interface Props {
  children:ReactNode;
  placeholder: string;
}

const index = ({children, placeholder, }: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="w-2/3">
          {children}
      </SelectContent>
    </Select>
  );
};

export default index;
