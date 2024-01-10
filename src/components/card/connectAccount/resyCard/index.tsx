import { Card, CardHeader } from "@/components/ui/card";
import { ResponseUI } from "@/components";

interface ResyConnectAccountCardType {
  image: string;
  cardStyle: string;
  onResyFormSubmit?: () => void;
}

const Index = ({ image, cardStyle }: ResyConnectAccountCardType) => {
  return (
    <Card className={cardStyle}>
      <CardHeader>
        <img src={image} alt="" className="h-10 w-24" />
      </CardHeader>
      <ResponseUI />
    </Card>
  );
};

export default Index;
