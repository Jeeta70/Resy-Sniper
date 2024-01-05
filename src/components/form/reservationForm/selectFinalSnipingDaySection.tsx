import { Button } from "@/components/ui/button";

const SelectFinalSnipingDaySection = () => {
  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Final Sniping Day</p>
      <div className="flex gap-3">
        <Button variant="outline" className="hidden sm:inline-flex">
          Same day
        </Button>
        <Button variant="outline" className="hidden sm:inline-flex">
          1 Day before
        </Button>
        <Button variant="outline" className="hidden sm:inline-flex">
          2 Day before
        </Button>
        <Button variant="outline" className="hidden sm:inline-flex">
          3 Day before
        </Button>
      </div>
    </div>
  );
}

export default SelectFinalSnipingDaySection