import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { MyReservationOfResturantCard } from "@/components";

export interface ITab {
  id: number;
  value: "all" | "active" | "paused" | "completed" | "canceled";
  label: string;
  count: number;
}

const Index = () => {
  const [tabs] = useState<ITab[]>([
    { id: 1, value: "all", label: "All", count: 16 },
    { id: 2, value: "active", label: "Active", count: 2 },
    { id: 3, value: "paused", label: "Paused", count: 1 },
    { id: 4, value: "completed", label: "Completed", count: 12 },
    { id: 5, value: "canceled", label: "Canceled", count: 1 },
  ]);

  const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);


  return (
    <>
      <Tabs defaultValue="all" className="">
        <TabsList className="grid grid-cols-5 w-1/2">
          {tabs.map((tab) => (
            <TabsTrigger
              onClick={() => setActiveTab(tab)}
              key={tab.id}
              value={tab.value}
            >
              {tab.label.concat("(").concat(tab.count.toString()).concat(")")}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value={activeTab?.value ?? setActiveTab(tabs[0])}
          className=""
        >
          {Array.from({ length: activeTab.count }).map(() => (<MyReservationOfResturantCard />))}
        </TabsContent>
        {/* <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>active</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="paused">
          <Card>
            <CardHeader>
              <CardTitle>paused</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>completed</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
        {/* <TabsContent value="canceled">
          <Card>
            <CardHeader>
              <CardTitle>canceled</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent> */}
      </Tabs>
    </>
  );
};

export default Index;
