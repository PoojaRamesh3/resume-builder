import { AnyAction } from "redux";
import { NAME } from "../action";
import { POSITION } from "../action";
import { DESCRIPTION } from "../action";
import { EMAIL } from "../action";

export interface StateProps {
  name: string;
  position: string;
  description: string;
  email: string;
  phone: number;
  city: string;
  linkedin: string;
}

const initialState: StateProps = {
  name: "Your Name",
  position: "Your Position",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
  email: "example@domain.com",
  phone: 1234567890,
  city: "City, Country",
  linkedin: "linkedin.com/in/username",
};

const Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload,
        // phone: action.payload,
        // city: action.payload,
        // linkedin: action.payload,
      };
    case POSITION:
      return {
        ...state,
        position: action.payload,
      };

    case DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };

    case EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
