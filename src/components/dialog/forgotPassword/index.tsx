import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useToggle from "@/hooks/useToogle";

const Index = () => {
  const { toggle, setToggle } = useToggle(false);
  console.log("render");
  
  return (
    <Dialog open={toggle}>
      <DialogTrigger asChild>
        <div
          className="text-center text-blue-700 font-medium"
          role="button"
          onClick={() => setToggle((prev) => !prev)}
        >
          Forgot password ?
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-2xl"
        onBlur={() => setToggle((prev) => !prev)}
      >
        <DialogHeader>
          <DialogTitle>Forgot Password?</DialogTitle>
          <DialogDescription>
            Please provide the email associated with your account, and we will
            send you instructions on resetting your password
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Input id="email" placeholder="Your email" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            onClick={() => setToggle(false)}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Reset Password
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Index;
