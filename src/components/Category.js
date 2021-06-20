const Category = ({ icon, name }) => {
  return (
    <div className="w-full flex flex-row items-center px-4 py-2 mb-4 border rounded border-light_border dark:border-dark_border cursor-pointer hover:bg-light_input dark:hover:bg-dark_container">
      <p className="text-2xl mr-4 mb-0">{icon}</p>
      <h2 className="font-semibold m-0 text-lg text-light_secondary dark:text-dark_secondary">
        {name}
      </h2>
    </div>
  );
};

export default Category;
