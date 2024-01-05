import { AddResturantModel } from '@/components';
import { Button } from '@/components/ui/button';
import { Credenza, CredenzaTrigger } from '@/components/ui/credenza';
import { Plus } from 'lucide-react';

const AddResturantSection = () => {
  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Resturants</p>
      <Credenza onOpenChange={(e) => {console.log(e)}}>
        <CredenzaTrigger asChild>
          <Button
            variant="outline"
            className="hidden sm:inline-flex font-semibold text-[11px]"
          >
            <Plus className="mr-3 " /> Add Reservation
          </Button>
        </CredenzaTrigger>
        <AddResturantModel />
        {/* <DisconnectResyAccountModel /> */}
      </Credenza>
    </div>
  );
}

export default AddResturantSection