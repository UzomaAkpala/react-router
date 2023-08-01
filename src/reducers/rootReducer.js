const initialState = {
  cards: [
    {
      id: 1,
      title: "Uzoma",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 2,
      title: "Jovita",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 3,
      title: "Joshua",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
