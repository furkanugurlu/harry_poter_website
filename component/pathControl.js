const PathControl = (path, title) => {
  switch (path) {
    case "/":
      return title ? "HARRY POTTER" : "home";
    case "/character":
      return title ? "HOGWART STUDENT" : "character";
    case "/about":
      return title ? "HOGWART STAFF" : "about";

    case "/character/[userId]":
      return title ? "STUDENT & STAFF DETAİL " : "character";
    default:
      return title ? "404 PAGE" : "";
  }
};
export default PathControl;
