import { Switch } from '@/components/ui/switch';

const OverideCurrentReservationToggleSection = () => {
  return (
    <div className="flex flex-row items-center justify-between  p-3 ">
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
        <Switch
        // checked={field.value}
        // onCheckedChange={field.onChange}
        />
      </div>
    </div>
  );
}

export default OverideCurrentReservationToggleSection