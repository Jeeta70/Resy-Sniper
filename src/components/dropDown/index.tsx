import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  placeholder: string;
  onValueChange: (e: string) => void
}

const index = ({ children, placeholder, onValueChange }: Props) => {
  return (
    <Select onValueChange={onValueChange}>
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
