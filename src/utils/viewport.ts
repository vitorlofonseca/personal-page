export const getViewportBottom = () => {
  return (
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    ) - 100
  );
};
