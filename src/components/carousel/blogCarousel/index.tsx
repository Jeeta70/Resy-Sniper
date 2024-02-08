import { IBlog } from "@/types/blog";
import Slider from "react-slick";

function BlogCarousel({ blogs }: { blogs: { data: IBlog[] } }) {

   return (
      <div className="slider-container border-2 border-red-800">
         <Slider
            dots={true}
            arrows={false}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
         >
            {blogs.data.map((blog: IBlog) => (
               <div key={blog.id}>
                  {/* {JSON.stringify(blog.description)} */}
                  <img src={`https://resysniperblog.s3.amazonaws.com/booking-bot.png`} alt={blog.image_alt}/>
               </div>
            ))}
         </Slider>
      </div>
   );
}

export default BlogCarousel;
