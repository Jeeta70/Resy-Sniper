import { BlogCarousel } from "@/components";
import { useGetAllblogs } from "@/features/blog/blog";
import { IBlog } from "@/types/blog";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/resy.png"

const Index = () => {
  const { blogs, isLoading } = useGetAllblogs();
  const navigate = useNavigate()

  return (
    <>
      {!isLoading && blogs && (
        <>
          <section className="py-7 bg-black h-full" id="features">

            <span className="text-[#D62637] mx-10 md:mx-30 sm:container  text-2xl font-black cursor-pointer hover:text-primary" role="button" onClick={() => navigate("/login")}>RESERVATION SNIPER</span>
            <div className="mx-10 md:mx-30 sm:container flex justify-center items-center">
              <BlogCarousel blogs={blogs} />
            </div>
          </section>
          <section className="py-7 bg-[#212529]" id="features">
            <div className="mx-20 md:mx-30 sm:container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs?.data.map((blog: IBlog) => (
                  <div className="" key={blog.id}>
                    <div className="">
                      <a
                        className=" cursor-pointer"
                        href={`/blogs/${blog.slug}`}
                      >
                        <img
                          src={`https://resysniperblog.s3.amazonaws.com/${blog.image_url}`}
                          alt={blog.image_alt}
                          className=" rounded-t-lg"
                        />
                      </a>
                      <div className="text-white mt-3">
                        <div className="mb-1 cursor-pointer">
                          <a className="font-semibold">{blog.category}</a>—
                          <span className="">{blog.created_at}</span>
                        </div>
                        <h2 className="mb-4 cursor-pointer">
                          <a href={blog.title}>{blog.title}</a>
                        </h2>
                        <p className=" text-base leading-7 ">{blog.summary}</p>
                        <a className="flex items-center gap-2  mt-3">
                          <div className="">
                            {/* <img
                              src="http://54.172.183.153/static/images/logo.png"
                              className="rounded-full h-10"
                              alt={ logo }
                            /> */}
                          </div>
                          <div className="text">
                            <p>- Reservation Sniper</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Index;
