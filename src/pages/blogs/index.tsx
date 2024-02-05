import { useGetAllblogs } from "@/features/blog/blog";
import { IBlog } from "@/types/blog";

const Index = () => {
   const { blogs, isLoading } = useGetAllblogs();

   console.log(blogs);


   return (
      <>
         {!isLoading &&
            <section className="py-7 bg-[#212529]" id="features">
               <div className="mx-20 md:mx-30 sm:container">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                     {blogs?.data.map((blog: IBlog) => (
                        <div className="" key={blog.id}>
                           <div className="">
                              <a className=" cursor-pointer" href={`/blogs/${blog.slug}`}>

                                 <img src={`https://resysniperblog.s3.amazonaws.com/${blog.image_url}`} alt={blog.image_alt} className=" rounded-t-lg" />

                              </a>
                              <div className="text-white mt-3">
                                 <div className="mb-1 cursor-pointer">
                                    <a className="font-semibold">{blog.category}</a>—
                                    <span className="">{blog.created_at}</span>
                                 </div>
                                 <h2 className="mb-4 cursor-pointer"><a href={blog.title}>{blog.title}</a></h2>
                                 <p className=" text-base leading-7 ">{blog.summary}</p>
                                 <a className="flex items-center gap-2  mt-3">
                                    <div className="">
                                       <img src="http://54.172.183.153/static/images/logo.png" className="rounded-full h-10" alt="Author Image" />
                                    </div>
                                    <div className="text">
                                       <p>Resy Sniper</p>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         }
      </>
   );
};

export default Index;
