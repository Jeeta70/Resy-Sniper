import { Button } from "@/components/ui/button";

const ReserveButtonSection = () => {
  return (
    <div className="flex justify-between">
      <p className="text-xs font-semibold ">
        2 of 25 reservation requests used
      </p>
      <Button variant="outline">Reserve</Button>
    </div>
  );
}

export default ReserveButtonSection