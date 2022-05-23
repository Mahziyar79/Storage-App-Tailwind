import { useProduct } from "../context/ProductProvider";

const NavBar = () => {
  const productItem= useProduct();

  return (
    <div className="bg-slate-700 flex items-center justify-center py-3">
      <h1 className="text-slate-300 mr-2 md:text-xl text-base font-bold">
        Inventory App using tailwind & react js
      </h1>
      <span className="w-7 h-7 rounded-full bg-slate-500 flex items-center justify-center ml-2 text-slate-300 border-2 border-slate-400 font-bold">
        {productItem.length}
      </span>
    </div>
  );
};

export default NavBar;
