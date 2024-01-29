import { Card, CardHeader } from "@/components/ui/card";
import { ResponseUI } from "@/components";
import WarningIcon from "@/assets/WarningCircle.svg"

interface ResyConnectAccountCardType {
  image: string;
  cardStyle: string;
  onResyFormSubmit?: () => void;
  setdisableContinueButton: (boolean: boolean)=>void
}

const Index = ({ image, cardStyle, setdisableContinueButton }: ResyConnectAccountCardType) => {
  return (
    <Card className={cardStyle}>
      <CardHeader className="pb-0 mb-2">
        <img src={image} alt="" className="h-8" />
        <div className="border-2 bg-orange flex p-2 rounded-sm gap-2 items-center text-white">
          <img src={WarningIcon} className="h-5 w-5" alt="warning-icon" />
          <small className="font-semibold">we are not associated with resy opentable or any other brands </small>
        </div>
      </CardHeader>
      <ResponseUI setdisableContinueButton={setdisableContinueButton} />
    </Card>
  );
};

export default Index;
