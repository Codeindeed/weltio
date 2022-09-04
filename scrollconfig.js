export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".card1",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
      rotate: {
        x: 20,
        z: 20,
      },
    },
  },
  {
    element: ".card__left",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
      rotate: {
        x: 20,
        z: 20,
      },
    },
  },
  {
    element: ".idoffer-tags",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
      rotate: {
        x: 20,
        z: 20,
      },
    },
  },
  {
    element: ".idoffer-card",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
      rotate: {
        x: 20,
        y: -20,
      },
    },
  },
  {
    element: ".card5",
    animation: {
      delay: 100,
      distance: "0px",
      origin: "bottom",
      rotate: {
        x: 20,
        z: 20,
      },
    },
  },
];
