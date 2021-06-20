const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className="bg-light_background dark:bg-dark_background transition-all">
      {children}
    </div>
  );
};
export default Background;
