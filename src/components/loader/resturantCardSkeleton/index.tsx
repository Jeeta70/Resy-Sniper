import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const index = () => {

   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   return (
      <div className="grid sm:grid-cols-4 gap-4">
         {array.map((s) => (
            <Card className="h-[50vh]" key={s}>
               <Skeleton className="rounded-t-lg h-1/2 w-full " />
               <CardContent>
                  <Skeleton className="my-2 w-1/5 ">
                     <Skeleton className="inline-block" />
                  </Skeleton>
                  <Skeleton className="my-2">
                     <Skeleton className="inline-block" />
                  </Skeleton>
                  <Skeleton className="mb-3 w-1/3 ">
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
            </Card>
         ))}
      </div>
   );
};

export default index;
