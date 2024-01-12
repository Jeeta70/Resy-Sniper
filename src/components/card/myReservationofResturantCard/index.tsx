
import {
  Card,
  CardContent,

} from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { GripHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'



const index = () => {

  return (
    <Card className="flex h-[20vh]  my-5">
      <div>
        <img
          className="rounded-l-lg h-full"
          src="../restaurant/restaurant.png"
          alt=""
        />
      </div>
      <CardContent className="space-y-2 my-auto w-full">
        <div className="space-y-1">
          <Badge variant="active">Active</Badge>
        </div>
        <div className="space-y-1 flex justify-between">
          <div>
            <h1 className="text-base font-bold">
              The Coop at Double Chicken Please
            </h1>
            <p className="font-medium text-xs text-light">
              Cancel reservation 4  people Dec 23, Dec30 5:00-7:00PM, 10:00-11:00 PM
            </p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <GripHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText("payment.id")}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>Pause</DropdownMenuItem>
                <DropdownMenuItem>Cancel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}

export default index