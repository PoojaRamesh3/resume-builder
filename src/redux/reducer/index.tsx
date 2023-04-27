import { AnyAction } from "redux";
import { NAMESECTION } from "../action";
import { WORKEXPERIENCE } from "../action";

export interface StateProps {
  namesection: {
    name: string;
    position: string;
    description: string;
    email: string;
    phone: number;
    city: string;
    linkedin: string;
  };
  worksection: {
    heading: string;
  };
}

const initialData = {
  namesection: {
    name: "Your Name",
    position: "Your Position",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
    email: "example@domain.com",
    phone: 1234567890,
    city: "City, Country",
    linkedin: "linkedin.com/in/username",
  },
  worksection: {
    heading: "WORK EXPERIENCE",
  },
};

const Reducer = (state = initialData, action: AnyAction) => {
  switch (action.type) {
    case NAMESECTION:
      return {
        ...state,
        namesection: action.payload,
      };
    case WORKEXPERIENCE:
      return {
        ...state,
        worksection: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;
