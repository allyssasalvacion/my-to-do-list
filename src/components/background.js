const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className="font-inter bg-light_background dark:bg-dark_background transition-all flex-col w-full h-screen md:flex-row overflow-hidden">
      {children}
    </div>
  );
};

export default Background;
