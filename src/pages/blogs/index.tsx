import { useGetAllblogs } from "@/features/blog/blog"

const Index = () => {

   const { blogs } = useGetAllblogs()
  return (
     <div>{blogs?.data.map((blog: any) => {
        return <div
           dangerouslySetInnerHTML={{ __html: blog.body }}
        />
     })}</div>
  )
}

export default Index