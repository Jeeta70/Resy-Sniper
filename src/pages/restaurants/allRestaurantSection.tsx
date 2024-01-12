import { RestaurantCard } from "@/components";
import { RestaurantProps } from "@/components/card/restaurantCard";
import { useNavigate } from "react-router-dom";


interface Props {
  restaurants: RestaurantProps[];
  sectionTitle: string

}

const Section = ({ restaurants, sectionTitle }: Props) => {
  const navigate = useNavigate();


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="my-4 text-lg font-semibold	">{sectionTitle}</h1>
        <h1
          className="my-4 text-primary"
          role="button"
          onClick={() => navigate('/restaurants/top-picks')}
        >
          See all
        </h1>

      </div>
      <div className="grid grid-cols-4 gap-4">
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            restaurant={restaurant}
            layout={{ displayFooter: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
