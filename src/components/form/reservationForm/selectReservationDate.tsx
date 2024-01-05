import { Button } from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const SelectReservationDateSection = () => {
  return (
    <div>
      <p className="mb-2 mb-2 font-semibold text-sm">Reservation Date</p>
      <div className="flex gap-3">
        <Button variant="outline" className="hidden sm:inline-flex">
          Today
        </Button>
        <Button variant="outline" className="hidden sm:inline-flex">
          Tomorrow
        </Button>
        <Select onValueChange={(e) => console.log(e)}>
          <SelectTrigger className="w-auto flex-row-reverse gap-4 text-light">
            Custom
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {5 + index}
                    {" people"}
                  </SelectItem>
                ))}
              {/* <SelectItem value={""}>{"index"}</SelectItem> */}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default SelectReservationDateSection