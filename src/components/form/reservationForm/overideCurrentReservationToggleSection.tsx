import { FeatureIsForProModel } from '@/components';
import { Credenza, CredenzaTrigger } from '@/components/ui/credenza';
import { Switch } from '@/components/ui/switch';
import { useReservationContext } from '@/context/ReservationFomProvider';
import { UserDetailContext } from '@/context/UserDetailProvider';
import { handleToogleOverideCurrentSection } from '@/reducer/reservationFormReducer';
import { useContext } from 'react';

const OverideCurrentReservationToggleSection = () => {

  const { reservationFormState, dispatch } = useReservationContext();
  const userDetail = useContext(UserDetailContext);


  return (
    <div className="flex flex-row items-center justify-between  sm:py-3 ">
      <div className="space-y-0.5">
        <div className="mb-2 font-semibold text-sm">
          Overide current Reservation
        </div>
        {/* <FormDescription> */}
        <div className="font-normal text-xs">
          Resy and OpenTable only allow one reservation at a time. If you enable
          this option, it will replace your current reservation.
        </div>
        {/* </FormDescription> */}
      </div>
      <div>
        {userDetail.subscription_type === "standard" ?
          <>
            <Credenza>
              <CredenzaTrigger asChild>
                <Switch className='bg-[#12171A] opacity-[30%]' checked={false} />
              </CredenzaTrigger>
              <FeatureIsForProModel />
            </Credenza>
          </>
          :
          <Switch
            name='overideCurrentReservation'
            checked={reservationFormState.overideCurrentReservationToggleSection}
            onCheckedChange={(e) => handleToogleOverideCurrentSection(dispatch, e)}
          />}
      </div>
    </div>
  );
}

export default OverideCurrentReservationToggleSection