import { useState } from "react";
import { useProduct, useProductAction } from "../context/ProductProvider";
import ShowOneProduct from "./ShowOneProduct";

const ProductList = () => {
  const productItems = useProduct();
  const setProductItems = useProductAction();
  const [searchValue, setSearchValue] = useState("");
 


  const onDeleteHandler = (id) => {
    const filteredProducts = productItems.filter((item) => item.id !== id);
    setProductItems(filteredProducts);
  };

  const onSortHandler = (e) => {
    if (e.target.value === "newest") {
      const sortItemsNew = productItems.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      setProductItems(sortItemsNew);
    } else {
      const sortItemsOld = productItems.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setProductItems(sortItemsOld);
    }
  };

  return (
    <>
      <h2 className="font-bold text-slate-300 text-xl my-5">Product List</h2>
      <div className="flex justify-between items-center mb-8">
        <p className="text-slate-300">Search</p>
        <input
          type="text"
          className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-56"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div className="flex justify-between items-center mb-8">
        <p className="text-slate-300">Sort</p>
        <select
          className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-56"
          id="sort"
          name="sort"
          onChange={(e) => onSortHandler(e)}
        >
          <option className="bg-slate-600 text-slate-300" value="newest">
            Newest
          </option>
          <option className="bg-slate-600 text-slate-300" value="oldest">
            Oldest
          </option>
        </select>
      </div>
      {productItems.length ? (
        productItems
          .filter((filterItem) => {
            if (searchValue === "") {
              return filterItem;
            } else if (
              filterItem.title
                .toLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            ) {
              return filterItem;
            }
          })
          .map((product) => (
            <ShowOneProduct
              key={product.id}
              item={product}
              onDeleteHandler={(id) => onDeleteHandler(id)}
              
            />
          ))
      ) : (
        <p className="text-red-300 text-lg font-bold pb-4">
          Please Add Product
        </p>
      )}
    </>
  );
};

export default ProductList;
