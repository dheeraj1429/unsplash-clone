import { ACTION_TYPE } from "../ActionType/actionType";
const initalState = {
  navData: [
    { title: "Editorial" },
    { title: "Following" },
    { title: "3D Renders" },
    { title: "Architecture & Interior" },
    { title: "Current Events" },
    { title: "Experimental" },
    { title: "Fashion" },
    { title: "Film" },
    { title: "Food & Drink" },
    { title: "Health & Wellness" },
    { title: "Nature" },
    { title: "People" },
    { title: "Street Photography" },
  ],

  navInnerContent: {
    firstContent: [
      { heading: "Company" },
      { title: "About" },
      { title: "Brand" },
      { title: "History" },
      { title: "Join the team" },
      { title: "Press" },
      { title: "Contact us" },
      { title: "help" },
    ],

    secondContent: [
      { heading: "Propduct" },
      { title: "Developers/Api" },
      { title: "Unsplash Database" },
      { title: "Unsplash for IOS" },
      { title: "Apps & Plugins" },
    ],

    threeContent: [
      { heading: "Community" },
      { title: "Become a Contributor" },
      { title: "Topics" },
      { title: "Collections" },
      { title: "Trends" },
      { title: "Unsplash Awards" },
      { title: "stats" },
    ],
  },

  navBarUserContent: [{ title: "View profile" }, { title: "Stats" }, { title: "Account settings" }],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
