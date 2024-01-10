import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const index = () => {
  const tabs = [
    { id: 1, value: "all6", label: "All(16)" },
    { id: 2, value: "active2", label: "Active(2)" },
    { id: 3, value: "all6", label: "All(16)" },
    { id: 4, value: "all6", label: "All(16)" },
    { id: 5, value: "all6", label: "All(16)" },
  ];

  return (
    <Tabs defaultValue="account" className="w-1/2">
      <TabsList className="grid w-full grid-cols-5">
        {tabs.map(() => (
          <>
            <TabsTrigger value="account">All(16)</TabsTrigger>
            <TabsTrigger value="password">Active(2)</TabsTrigger>
            <TabsTrigger value="account">Paused(1)</TabsTrigger>
            <TabsTrigger value="password">Completed(12)</TabsTrigger>
            <TabsTrigger value="account">Canceled(1)</TabsTrigger>
          </>
        ))}
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
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
      </TabsContent>
    </Tabs>
  );
};

export default index;
