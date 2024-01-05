import { CredenzaContent } from "@/components/ui/credenza";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Index = ({ children,className }: { children: ReactNode, className?: string }) => {
  return (
    <CredenzaContent className={cn(className)}>{children}</CredenzaContent>
  );
};

export default Index;
