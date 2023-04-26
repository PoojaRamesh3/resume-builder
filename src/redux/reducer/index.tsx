import { AnyAction } from "redux";
import { DATA } from "../action";

export interface StateProps {
  name: string;
  position: string;
  description: string;
  email: string;
  phone: number;
  city: string;
  linkedin: string;
}

const initialData = {
  name: "Your Pooja",
  position: "Your Position",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
  email: "example@domain.com",
  phone: 1234567890,
  city: "City, Country",
  linkedin: "linkedin.com/in/username",
};

const initialState = { getData: initialData };

const Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        getData: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;
