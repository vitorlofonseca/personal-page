export const getViewportBottom = () => {
  return (
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) - 100
  );
};

export const userGotToTheBottom = () => {
  var scrollPosition =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  var documentHeight = document.documentElement.scrollHeight;

  var windowHeight = window.innerHeight;

  return scrollPosition + windowHeight >= documentHeight;
};
