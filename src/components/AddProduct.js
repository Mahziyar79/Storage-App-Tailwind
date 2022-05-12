import { useState } from "react";
import { useCategory } from "../context/CategoryProvider";
import { useProduct, useProductAction } from "../context/ProductProvider";

const AddProduct = () => {
  const productItems = useProduct();
  const categoryItems = useCategory();
  const setProductItems = useProductAction();
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    quantity: 1,
    category: "",
  });
  const submitProductHandler = (e) => {
    e.preventDefault();
    if (newProduct.title && newProduct.category) {
      setProductItems([
        ...productItems,
        { ...newProduct, id: Math.floor(Math.random() * (1000 - 1 + 1) + 1) },
      ]);
    } else {
      alert("please fill the title and category");
    }
  };

  return (
    <div>
      <h2 className="font-bold text-slate-300 text-xl my-5">Add New Product</h2>
      <div>
        <form
          className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4"
          onSubmit={(e) => submitProductHandler(e)}
        >
          <div>
            <label
              className="block mb-1 text-slate-300"
              htmlFor="product-title"
            >
              Product Title
            </label>
            <input
              className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
              type="text"
              id="product-title"
              name="product-title"
              value={newProduct.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-300" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
              id="quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: +e.target.value })
              }
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-300" htmlFor="quantity">
              Category
            </label>
            <select
              value={newProduct.category}
              className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
              id="category"
              name="category"
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {categoryItems.map((category, index) => (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-slate-500 text-slate-200 rounded-lg flex-1 py-2">
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
