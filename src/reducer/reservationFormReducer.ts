type EventState = NonNullable<unknown>;

type InitialSittingState = {
  showModel: boolean;
  title: string;
};

const initialSittingState = {
  showModel: false,
  title: "Add Resturant",
};

export const initialState: EventState = {
  reservationType: "cancelReservation",
  resturantOption: {
    selectedResturant: "",
  },
  selectSittingOptions: {
    ...initialSittingState,
  },
  title: "",
  description: "",
};

export interface IFormState {
  reservationType: string;
  resturantOption: {
    selectedResturant: string;
  };
  selectSittingOptions: InitialSittingState;
  title: string;
  description: string;
}

export enum ResturantReservationStateReducerConstant {
  RESERVATION_TYPE = "RESERVATION_TYPE",
  SELECT_RESTURANT = "SELECT_RESTURANT",
  SELECT_SITTING_OPTION = "SELECT_SITTING_OPTION",
  RESET_SITTING_OPTION = "RESET_SITTING_OPTION",
}

export interface IAction<T, P> {
  value: string;
  type: T;
  payload?: Partial<P>;
}

export type IActionType = IAction<
  ResturantReservationStateReducerConstant,
  IFormState
>;

export type IUserStateReducerDispatchType = (value?: IActionType) => void;

export const reservationFormReducer = (
  state: IFormState,
  action: IActionType
): EventState => {
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

    default:
      return state;
  }
};

export function selectResturant(
  dispatch: IUserStateReducerDispatchType,
  value: string
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_RESTURANT,
    value: value,
  });
}

export function selectSittingOptions(dispatch: IUserStateReducerDispatchType) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_SITTING_OPTION,
    value: "",
  });
}

export function handleButtonClickReservationType(
  dispatch: IUserStateReducerDispatchType,
  value: string
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RESERVATION_TYPE,
    value: value,
  });
}
