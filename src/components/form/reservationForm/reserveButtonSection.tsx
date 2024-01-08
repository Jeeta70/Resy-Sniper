import { Button } from "@/components/ui/button";

const ReserveButtonSection = () => {
  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-2 text-center">
      <p className="text-xs font-semibold ">
        2 of 25 reservation requests used
      </p>
      <Button variant="primary">Reserve</Button>
    </div>
  );
}

export default ReserveButtonSection