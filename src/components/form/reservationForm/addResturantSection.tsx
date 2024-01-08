import { AddResturantModel, ErrorMessage } from '@/components';
import { Button } from '@/components/ui/button';
import { Credenza, CredenzaTrigger } from '@/components/ui/credenza';
import { useReservationContext } from '@/context/ReservationFomProvider';
import { Plus } from 'lucide-react';

const AddResturantSection = () => {
  useReservationContext()

  return (
    <div>
      <p className="mb-2 font-semibold text-sm">Resturants</p>
      <Credenza onOpenChange={(e) => { console.log(e) }}>
        <CredenzaTrigger asChild className=''>
          <Button variant="outline" className="inline-flex font-semibold text-[11px]">
            <Plus className="mr-3 " /> Add Reservation
          </Button>
        </CredenzaTrigger>
        <AddResturantModel />
      </Credenza>
      <ErrorMessage message='Please select a restaurant' />
    </div>
  );
}

export default AddResturantSection