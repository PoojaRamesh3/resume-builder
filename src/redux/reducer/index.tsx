import { combineReducers } from "redux";
// import { useState } from "react";

// const [edit, setEdit] = useState<any>({
//   name: "Your Name",
//   position: "Your Position",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
//   email: "example@domain.com",
//   phone: 1234567890,
//   city: "City, Country",
//   linkedin: "linkedin.com/in/username",
// });

const postsReducer = (state = [], action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
