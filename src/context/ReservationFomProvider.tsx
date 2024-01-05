import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  initialState,
  reservationFormReducer,
} from "@/reducer/reservationFormReducer";

export const initialReservationContext = {
  reservationFormState: {
    reservationType: "",
  },
};

type EventState = {
  reservationType: string;
  resturantOption: {
    selectedResturant: string;
  };
  selectSittingOptions: initialSittingState;
  title: string;
  description: string;
};

type initialSittingState = {
  showModel: boolean;
  title: string;
};

const initialSittingStates = {
  showModel: false,
  title: "Add Resturant",
};

export const initialStateReservationForm: EventState = {
  reservationType: "",
  resturantOption: {
    selectedResturant: "",
  },
  selectSittingOptions: {
    ...initialSittingStates,
  },
  title: "",
  description: "",
};

export const ReservationContext = createContext<unknown>({});

export const useReservationContext = () => useContext(ReservationContext);

interface ReservationContextProviderProps {
  children: ReactNode;
}

export function ReservationContextProvider(
  props: ReservationContextProviderProps
) {
  const [reservationFormState, dispatch] = useReducer<unknown | any>(
    reservationFormReducer,
    initialState
  );

  return (
    <ReservationContext.Provider value={{ reservationFormState, dispatch }}>
      {props.children}
    </ReservationContext.Provider>
  );
}
