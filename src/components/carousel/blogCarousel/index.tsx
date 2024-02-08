import { IBlog } from "@/types/blog";
import Slider from "react-slick";
import "./style.css"
import { useNavigate } from "react-router-dom";

function BlogCarousel({ blogs }: { blogs: { data: IBlog[] } }) {
 const navigate =  useNavigate()

  return (
    <div className="overflow-x-hidden blog-section">
      <h2 className="text-4xl font-bold text-white text-center mb-10">Resy Sniper Blog</h2>
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
          <div
            key={blog.id}
            className="text-white !grid sm:grid-cols-[30%,auto] gap-10"
          >
            <a className="cursor-pointer" onClick={() => navigate(`/blogs/${ blog.slug }`)} href={`/blogs/${blog.slug}`}>
              <img
                className="h-full rounded-sm"
                src={`https://resysniperblog.s3.amazonaws.com/${blog.image_url}`}
                alt={blog.image_alt}
              />
            </a>

            <div className="flex flex-col justify-between">
              <div className="font-light"><span className="font-bold">{blog.category}</span>{" "}{blog.created_at}</div>
              <div className="text-3xl font-normal mb-4">{blog.title}</div>

              <div className=" text-sm font-thin">{blog.description}</div>

              <a className="flex items-center gap-2  mt-3">
                <div className="">
                  <img
                    src="http://54.172.183.153/static/images/logo.png"
                    className="rounded-full h-10"
                    alt="Author Image"
                  />
                </div>
                <div className="text">
                  <p>Resy Sniper</p>
                </div>
              </a>
            </div>
            {/* <div class="content align-self-center">
                 <div class="post-meta mb-3">
                    <a class="category">Reservation Guide</a>, <a>
                       <span class="date">{blog.created_at}</span>
                    </a></div><a>
                 </a><h2 class="heading"><a></a><a href="/blog/how-to-get-a-reservation-at-i-sodi">How to Get a Reservation at I Sodi: 5 Proven Methods Featuring Resy Sniper</a></h2>
                 <p>Securing a reservation at I Sodi in New York City can be tough. We offer five proven methods to help you book a table, including using Resy Sniper.</p>

                 <a class="post-author d-flex align-items-center">
                    <div class="author-pic">
                       <img src="/static/images/logo.png" alt="Author Image">
                    </div>
                    <div class="text">
                       <strong>Resy Sniper</strong>
                       <span></span>
                    </div>
                 </a>
              </div> */}
            {/* <div className="flex">
                 <header className="text-center p-5">
                    <h1 className="text-4xl font-bold">Resy Sniper Blog</h1>
                 </header>
                 <article className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-4">Unlocking the Secret: How to Secure a Reservation at 4 Charles Prime Rib</h2>
                    <p className="text-gray-400">Reservation Guide, October 21, 2023</p>
                    <img className="my-6 w-full" src="path-to-your-image.jpg" alt="Prime Rib" />
                    <p className="text-lg">Wondering how to break through the barrier and get a reservation at the renowned 4 Charles Prime Rib? Look no further—your comprehensive guide is here, featuring Resy Sniper, your ultimate secret weapon.</p>
                 </article>
              </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogCarousel;
