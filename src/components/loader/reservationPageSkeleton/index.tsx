import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const index = () => {

   const array = [1, 2, 3, 4, 5,];
   return (
      <div className="flex flex-col gap-10 mt-3">
         {array.map((s) => (
            <Card className="h-[30vh] flex" key={s}>
               <Skeleton className="rounded-t-lg w-1/5" />
               <div className="w-4/5">
                  <CardContent>
                     <Skeleton className="my-3">
                        <Skeleton className="inline-block" />
                     </Skeleton>
                     <Skeleton className="my-2">
                        <Skeleton className="inline-block" />
                     </Skeleton>
                     <Skeleton className="mb-3">
                        <Skeleton className="inline-block" />
                     </Skeleton>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                     <Skeleton className="w-full h-1/2">
                        <Skeleton className="inline-block" />
                     </Skeleton>
                     <Skeleton className="w-full h-1/2">
                        <Skeleton className="inline-block" />
                     </Skeleton>
                  </CardFooter>
               </div>
            </Card>
         ))}
      </div>
   );
};

export default index;
