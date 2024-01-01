import { CredenzaContent } from '@/components/ui/credenza'
import {ReactNode } from 'react'

const Index = ({ children }: { children: ReactNode }) => {
  return <CredenzaContent>{children}</CredenzaContent>;
};

export default Index