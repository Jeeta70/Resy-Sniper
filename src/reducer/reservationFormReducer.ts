// type EventState = NonNullable<unknown>;

type InitialSittingState = {
  showModel: boolean;
  title: string;
};

const initialSittingState = {
  showModel: false,
  title: "Add Resturant",
};
export interface IFormState {
  reservationType: number | string | undefined;
  resturantOption: {
    selectedResturant: number | string | undefined;
  };
  partySize: number | string ,
  selectSittingOptions: InitialSittingState;
  title: string;
  description: string;
}


export const initialState: IFormState = {
  reservationType: "cancelReservation",
  resturantOption: {
    selectedResturant: "",
  },
  partySize: 0,
  selectSittingOptions: {
    ...initialSittingState,
  },
  title: "",
  description: "",
};


export enum ResturantReservationStateReducerConstant {
  RESERVATION_TYPE = "RESERVATION_TYPE",
  SELECT_RESTURANT = "SELECT_RESTURANT",
  SELECT_SITTING_OPTION = "SELECT_SITTING_OPTION",
  RESET_SITTING_OPTION = "RESET_SITTING_OPTION",
  SELECT_PART_SIZE = "SELECT_PART_SIZE"
}

export interface IAction<T, P> {
  value?: string | number;
  type: T;
  payload?: Partial<P>;
}

export type IActionType = IAction<
  ResturantReservationStateReducerConstant,
  IFormState
>;
export type IUserStateReducerDispatchType = (value: IActionType) => void;

export const reservationFormReducer = (state: IFormState, action: IActionType): IFormState => {
  switch (action.type) {
    case ResturantReservationStateReducerConstant.RESERVATION_TYPE:
      return { ...state, reservationType: action.value };

    case ResturantReservationStateReducerConstant.SELECT_RESTURANT:
      return {
        ...state,
        resturantOption: {
          ...state.resturantOption,
          selectedResturant: action.value,
        },
      };

    case ResturantReservationStateReducerConstant.SELECT_SITTING_OPTION:
      return {
        ...state,
        selectSittingOptions: {
          ...state.selectSittingOptions,
          showModel: !state.selectSittingOptions.showModel,
          title: !state.selectSittingOptions.showModel
            ? "Select Sitting"
            : "Add Resturant",
        },
      };
    case ResturantReservationStateReducerConstant.RESET_SITTING_OPTION:
      return {
        ...state,
        selectSittingOptions: {
          ...state.selectSittingOptions,
        },
      };

    case ResturantReservationStateReducerConstant.SELECT_PART_SIZE:
      return {
        ...state,
        partySize: Number(action.value)
      }

    default:
      return state;
  }
};

export function selectResturant(dispatch: IUserStateReducerDispatchType, value: string) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_RESTURANT,
    value: value,
  });
}

export function selectSittingOptions(dispatch: IUserStateReducerDispatchType) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_SITTING_OPTION,
  });
}

export function handleButtonClickReservationType(dispatch: IUserStateReducerDispatchType, value: string) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RESERVATION_TYPE,
    value: value,
  });
}

export function handleButtonClickPartySize(dispatch: IUserStateReducerDispatchType, value: number) {

  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_PART_SIZE,
    value: value,
  })
}
