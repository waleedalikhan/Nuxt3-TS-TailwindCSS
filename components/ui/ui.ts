export const uiType = (variant: string) => {
  let val = 0;
  switch (variant) {
    case "secondary":
      val = 1;
      break;

    case "error":
      val = 2;
      break;

    case "success":
      val = 3;
      break;

    default:
      val = 0;
      break;
  }

  return val;
};
