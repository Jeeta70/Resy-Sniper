import { IRestaurant } from "@/types/restaurants";

// type InitialSittingState = {
//   showModel: boolean;
//   title: string;
//   restaurantDetail: IRestaurant;
//   availableSittings: string;
// };

const initialSittingState = {
  showModel: false,
  title: "Add Resturant",
  restaurantDetail: { cover_image_url: "", price: 0, venue_name: "" },
  availableSittings: "indoor",
};

// type selectedResturant = {
//   venue_id?: string;
//   venue_name?: string;
//   price?: number;
//   cover_image_url?: string;
//   selectAvailableSittings: "any";
// };

export interface IFormState {
  reservationType: number | string | undefined;
  // selectedResturantsForReservation:s
  resturantOptionOnAddReservationPage: {
    selectedResturant: number | string | undefined;
    selectedResturantsForReservationOnAddReservationPage: IRestaurant[];
  };

  selectSittingOptions: {
    showModel: boolean;
    title: string;
    restaurantDetail: { cover_image_url: string, price: number, venue_name: string };
    availableSittings: string;
  };
  partySize: number | string;
  reservationDates: Date[] | string[];
  releaseDates :  Date[] | string[];
  reservationTime:string,
  releaseTime :string;
  finalSnipingDay: string;
  overideCurrentReservationToggleSection: boolean;
  title: string;
  description: string;
  errors: {
    resturantsError: boolean;
    partySizeError: boolean;
    reservationDateError: boolean;
    reservationTimeError:boolean;
    releaseDatesError:boolean;
    releaseTimeError:boolean;
  };
}


export const initialState: IFormState = {
  reservationType: "cancel",
  resturantOptionOnAddReservationPage: {
    selectedResturant: "",
    selectedResturantsForReservationOnAddReservationPage: [],
  },
  selectSittingOptions: { ...initialSittingState },
  partySize: 0,
  reservationDates: [],
  releaseDates: [],
  reservationTime:"",
  releaseTime:"",
  finalSnipingDay: "any",
  overideCurrentReservationToggleSection: true,
  title: "",
  description: "",
  errors: {
    resturantsError: false,
    partySizeError: false,
    reservationDateError: false,
    reservationTimeError:false,
    releaseDatesError:false,
    releaseTimeError:false,
  },
};

export enum ResturantReservationStateReducerConstant {
  RESERVATION_TYPE = "RESERVATION_TYPE",
  SELECT_RESTURANT = "SELECT_RESTURANT",
  SELECT_AVAILABLE_SITTING = " SELECT_AVAILABLE_SITTING",
  SELECT_SITTING_OPTION = "SELECT_SITTING_OPTION",
  RESET_SITTING_OPTION = "RESET_SITTING_OPTION",
  SELECT_PART_SIZE = "SELECT_PART_SIZE",
  SELECT_FINAL_SNIPING_DAY = "SELECT_FINAL_SNIPING_DAY",
  OVERIDE_CURRENT_RESERVATION = "OVERIDE_CURRENT_RESERVATION",
  SET_SELECT_RESTAURANTS_FOR_RESERVATION = "SET_SELECT_RESTAURANTS_FOR_RESERVATION",
  DELETE_RESTURANTS_FOR_RESERVATION = "DELETE_RESTURANTS_FOR_RESERVATION",
  RESET_RESERVATION_FORM = "RESET_RESERVATION_FORM",
  RESERVATION_FIELD_VALIDATION = "RESERVATION_FIELD_VALIDATION",
  SET_ALL_ERROR_FIELD_TRUE = "SET_ALL_ERROR_FIELD_TRUE",
  SET_RESERVATION_DATE = "SET_RESERVATION_DATE",
  SET_RESERVATION_TIME="SET_RESERVATION_TIME",
  RELEASE_RESERVATION_DATE = "RELEASE_RESERVATION_DATE",
  RELEASE_RESERVATION_TIME="RELEASE_RESERVATION_TIME",
  UPDATE_RESERVATION="UPDATE_RESERVATION",
  UPDATE_SELECTED_RESTAURANT = "UPDATE_SELECTED_RESTAURANT"
}

export interface IAction<T, P> {
  key?: string;
  value?: string | number | boolean;
  type: T;
  // payload?: Partial<P> | IRestaurant | number | Date[] | string[] | string;
  payload?: any | Partial<P>;

}

export type IActionType = IAction<ResturantReservationStateReducerConstant, IFormState>;

export type IUserStateReducerDispatchType = (value: IActionType) => void;


export const reservationFormReducer = (
  state: IFormState,
  action: IActionType
): IFormState => {
  switch (action.type) {
    case ResturantReservationStateReducerConstant.RESERVATION_TYPE:
      return { ...state, reservationType: String(action.value) };

    // case ResturantReservationStateReducerConstant.SELECT_RESTURANT:
    //   return {
    //     ...state,
    //     resturantOptionOnAddReservationPage: {
    //       ...state.resturantOptionOnAddReservationPage,
    //       selectedResturant: action.value,
    //     },
    //   };

    case ResturantReservationStateReducerConstant.SET_SELECT_RESTAURANTS_FOR_RESERVATION:
      // eslint-disable-next-line no-case-declarations
      const currentVenueId = action.payload?.venue_id;
      return {
        ...state,
        resturantOptionOnAddReservationPage: {
          ...state.resturantOptionOnAddReservationPage,
          selectedResturantsForReservationOnAddReservationPage: currentVenueId
            ? state.resturantOptionOnAddReservationPage.selectedResturantsForReservationOnAddReservationPage.some(
              (o) => currentVenueId === o.venue_id
            )
              ? state.resturantOptionOnAddReservationPage.selectedResturantsForReservationOnAddReservationPage.filter(
                (o) => currentVenueId !== o.venue_id
              )
              : [
                ...state.resturantOptionOnAddReservationPage
                  .selectedResturantsForReservationOnAddReservationPage,
                action.payload,
              ]
            : state.resturantOptionOnAddReservationPage
              .selectedResturantsForReservationOnAddReservationPage,
        },
      };

    case ResturantReservationStateReducerConstant.DELETE_RESTURANTS_FOR_RESERVATION:
      return {
        ...state,
        resturantOptionOnAddReservationPage: {
          ...state.resturantOptionOnAddReservationPage,
          selectedResturantsForReservationOnAddReservationPage:
            state.resturantOptionOnAddReservationPage.selectedResturantsForReservationOnAddReservationPage.filter(
              (resturant) => resturant.venue_id !== action.payload.venue_id
            ),
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
          restaurantDetail: action.payload,
        },
      };

    case ResturantReservationStateReducerConstant.RESET_SITTING_OPTION:
      return { ...state, selectSittingOptions: { ...initialSittingState } };

    case ResturantReservationStateReducerConstant.SELECT_PART_SIZE:
      return {
        ...state,
        partySize: Number(action.value),
      };
    case ResturantReservationStateReducerConstant.SET_RESERVATION_DATE:

      // eslint-disable-next-line no-case-declarations
      const payloadIsArray = Array.isArray(action.payload);
      if (!payloadIsArray) return state;

      return {
        ...state,
        reservationDates: [...action.payload],
      };
      case ResturantReservationStateReducerConstant.SET_RESERVATION_TIME:
        return {
        ...state,
        reservationTime: String(action.value),
      };

      case ResturantReservationStateReducerConstant.RELEASE_RESERVATION_DATE:

      // eslint-disable-next-line no-case-declarations
      const payloadIsArray2 = Array.isArray(action.payload);
      if (!payloadIsArray2) return state;

      return {
        ...state,
        releaseDates: [...action.payload],
      };
      case ResturantReservationStateReducerConstant.RELEASE_RESERVATION_TIME:
        return {
        ...state,
        releaseTime: String(action.value),
      };
    case ResturantReservationStateReducerConstant.SELECT_FINAL_SNIPING_DAY:
      return {
        ...state,
        finalSnipingDay: String(action.value),
      };

    case ResturantReservationStateReducerConstant.OVERIDE_CURRENT_RESERVATION:
      return {
        ...state,
        overideCurrentReservationToggleSection: action.value ? true : false,
      };

    case ResturantReservationStateReducerConstant.RESET_RESERVATION_FORM:
      return initialState;

    case ResturantReservationStateReducerConstant.RESERVATION_FIELD_VALIDATION:
      // eslint-disable-next-line no-case-declarations
      const key = action.key || "default key";
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: action.value,
        },
      };

    case ResturantReservationStateReducerConstant.SET_ALL_ERROR_FIELD_TRUE:
      return {
        ...state,
        errors: {
          resturantsError: true,
          partySizeError: true,
          reservationDateError: true,
          reservationTimeError:true,
          releaseDatesError:true,
          releaseTimeError:true,
        },
      };
    case ResturantReservationStateReducerConstant.UPDATE_RESERVATION:
      return action.payload
    case ResturantReservationStateReducerConstant.UPDATE_SELECTED_RESTAURANT:
      return {
        ...state,
        resturantOptionOnAddReservationPage: {
          ...state.resturantOptionOnAddReservationPage,
          selectedResturantsForReservationOnAddReservationPage: action.payload
        }
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

export function selectSittingOptions(
  dispatch: IUserStateReducerDispatchType,
  payload: IRestaurant
) {


  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_SITTING_OPTION,
    payload,
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

export function selectResturantForReservation(
  dispatch: IUserStateReducerDispatchType,
  restaurantPayload: object
) {


  dispatch({
    type: ResturantReservationStateReducerConstant.SET_SELECT_RESTAURANTS_FOR_RESERVATION,
    payload: restaurantPayload,
  });
}

export function deleteResturantForReservation(
  dispatch: IUserStateReducerDispatchType,
  restaurantPayload: IRestaurant
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.DELETE_RESTURANTS_FOR_RESERVATION,
    payload: restaurantPayload,
  });
}
// export function selectAvailableSittings(dispatch: IUserStateReducerDispatchType, value:  string) {
//   dispatch({
//     type: ResturantReservationStateReducerConstant.SELECT_AVAILABLE_SITTING,
//     value: value,
//   });
// }

export function resetSittingOption(dispatch: IUserStateReducerDispatchType) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RESET_SITTING_OPTION,
  });
}

export function handleButtonClickPartySize(
  dispatch: IUserStateReducerDispatchType,
  value: number
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_PART_SIZE,
    value: value,
  });
}

export function handleReservationDate(
  dispatch: IUserStateReducerDispatchType,
  payload: unknown
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SET_RESERVATION_DATE,
    payload,
  });
}

export function handleReleaseDate(
  dispatch: IUserStateReducerDispatchType,
  payload: unknown
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RELEASE_RESERVATION_DATE,
    payload,
  });
}

export function handleReseverationTime( dispatch: IUserStateReducerDispatchType,
  value:string){
  dispatch({
    type: ResturantReservationStateReducerConstant.SET_RESERVATION_TIME,
    value:value,
  });
}

export function handleReleaseTime( dispatch: IUserStateReducerDispatchType,
  value:string){
  dispatch({
    type: ResturantReservationStateReducerConstant.RELEASE_RESERVATION_TIME,
    value:value,
  });
}

// FINAL SNIPING DAY FIELD

export function handleFinalSnipingDay(
  dispatch: IUserStateReducerDispatchType,
  value: string
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SELECT_FINAL_SNIPING_DAY,
    value: value,
  });
}

export function handleToogleOverideCurrentSection(
  dispatch: IUserStateReducerDispatchType,
  value: boolean
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.OVERIDE_CURRENT_RESERVATION,
    value: value,
  });
}

export function resetReservationForm(dispatch: IUserStateReducerDispatchType) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RESET_RESERVATION_FORM,
  });
}

export function handleReserveFormValidation(
  dispatch: IUserStateReducerDispatchType,
  key: string,
  value: boolean
) {
  dispatch({
    type: ResturantReservationStateReducerConstant.RESERVATION_FIELD_VALIDATION,
    key,
    value,
  });
}

export function setAllErrorFieldTrue(dispatch: IUserStateReducerDispatchType) {
  dispatch({
    type: ResturantReservationStateReducerConstant.SET_ALL_ERROR_FIELD_TRUE,
  });
}


export function handleUpdateReservation(dispatch: IUserStateReducerDispatchType, payload: unknown) {
  dispatch({
    type: ResturantReservationStateReducerConstant.UPDATE_RESERVATION,
    payload
  });
}

export function handleUpdateSelectedRestaurant(dispatch: IUserStateReducerDispatchType, payload: IRestaurant[]) {
  dispatch({ type: ResturantReservationStateReducerConstant.UPDATE_SELECTED_RESTAURANT, payload })
}