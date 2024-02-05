import { useGetSingleBlog } from "@/features/blog/blog";
import  { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import logo from "@/assets/resy.png"

const Index = () => {
   const pathname = useLocation();
   const slug = pathname.pathname.split("/").at(-1);

   const { singleBlog, isSuccess } = useGetSingleBlog(slug ?? "");

   const blog = useMemo(() => {
      if (isSuccess && singleBlog) {
         return singleBlog.data;
      }
   }, [isSuccess, singleBlog]);



   function formatData(dateString:string) {

      const dateObj = new Date(dateString);

   const formattedDate = dateObj.toLocaleDateString('en-US', {year:"numeric",month:"long",day:"numeric"});

      return formattedDate
}


   return (
      <>
         {isSuccess && (
            <>
               <div className="bg-black text-white py-10 h-auto">
                  <div className="container mx-auto sm:w-1/2 ">
                     <h1 className="text-3xl font-bold  leading-tight mb-6 ">
                        {blog?.post?.title}
                     </h1>
                     <p className="text-[.9rem] mb-8">{blog.post?.lead_text}</p>
                     <div className="mt-6 lg:mt-0 flex justify-center">
                        {/* Replace with the path to your actual robot image */}
                        <img
                           src={`https://resysniperblog.s3.amazonaws.com/${blog.post.image_url}`}
                           alt="Resy Bot"
                           className="sm:max-w-lg"
                        />
                     </div>
                     <div
                        className="blog"
                        dangerouslySetInnerHTML={{ __html: singleBlog?.data.post.body }}
                     ></div>
                  </div>
                  <div className="bg-black text-white flex flex-col gap-10 py-6 container mx-auto sm:w-2/3 ">
                    <div className="text-4xl">
                        Related
                    </div>
                     {blog.articles.map((article: { category: string, created_at: string; image_url:string ,slug:string ,lead_text:string,title:string})=>(
                        <div className="block lg:flex items-center">
                           <img
                              src={`https://resysniperblog.s3.amazonaws.com/${article.image_url}`}
                              alt="Steak Dinner"
                              className="w-full lg:w-48  lg:h-28 lg:min-h-32 lg:min-w-48  mb-auto rounded-sm mr-6" // Adjust size as needed
                           />

                           <div className="flex-grow">
                              <h3 className="text-md font-semibold lg:my-0 my-4">
                                 {article.category} — {formatData(article.created_at)}
                              </h3>
                              <a className="no-underline cursor-pointer" href={article.slug}>
                                 <h4 className="text-lg font-normal my-2">
                                 {article.title}
                                 </h4>
                              </a>
                              <p className="text-sm mb-4 leading-6">
                                 {article.lead_text}
                              </p>
                              <div className="flex items-center">
                                 <img
                                    src={logo}
                                    alt="Resy Sniper Logo"
                                    className="w-10 h-10 rounded-full object-cover mr-2" // Adjust size as needed
                                 />
                                 <span className="text-sm">Resy Sniper</span>
                              </div>
                           </div>
                        </div>
                     ))}
                    
                  </div>
               </div>
            </>
         )}
      </>
   );
};

export default Index;
