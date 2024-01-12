import { Card, CardHeader } from "@/components/ui/card";
import { ResponseUI } from "@/components";

interface ResyConnectAccountCardType {
  image: string;
  cardStyle: string;
  onResyFormSubmit?: () => void;
  setdisableContinueButton: (boolean: boolean)=>void
}

const Index = ({ image, cardStyle, setdisableContinueButton }: ResyConnectAccountCardType) => {
  return (
    <Card className={cardStyle}>
      <CardHeader>
        <img src={image} alt="" className="h-10 w-24" />
      </CardHeader>
      <ResponseUI setdisableContinueButton={setdisableContinueButton} />
    </Card>
  );
};

export default Index;
