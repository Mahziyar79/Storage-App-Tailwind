import { useState } from "react";
import { useCategory } from "../context/CategoryProvider";
import { useProduct, useProductAction } from "../context/ProductProvider";

const ShowOneProduct = ({ onDeleteHandler, item }) => {
  const categoryItems = useCategory();
  const productItems = useProduct();
  const setProductItems = useProductAction();
  const [showEditing, setShowEditing] = useState(false);
  const [productEdit, setProductEdit] = useState({
    title: item.title,
    quantity: item.quantity,
    category: item.category,
  });

  const editProduct = (e) => {
    e.preventDefault();
    let selectedProductToEdit = productItems.find(
      (editproduct) => editproduct.id === item.id
    );
    selectedProductToEdit = {
      ...selectedProductToEdit,
      title: productEdit.title,
      quantity: productEdit.quantity,
      category: productEdit.category,
    };
    const removefilteredProduct = productItems.filter(pro => pro.id !== item.id);
    removefilteredProduct.push(selectedProductToEdit)
    setProductItems(removefilteredProduct);
    setShowEditing(false)
  };

  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div>
          <h2 className="font-bold text-slate-300">{item.title}</h2>
        </div>
        <div className="flex gap-x-3 items-center">
          <span className="text-slate-300">{item.date}</span>
          <span className="border border-slate-500 text-slate-500 py-1 px-2 rounded-full">
            {item.category}
          </span>
          <span className="w-7 h-7 rounded-full bg-slate-500 flex items-center justify-center ml-2 text-slate-300 border-2 border-slate-400 font-bold">
            {item.quantity}
          </span>
          <button
            className="text-red-300"
            onClick={() => onDeleteHandler(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
            className="text-slate-300"
            onClick={() => setShowEditing(!showEditing)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>
      {showEditing && (
        <div className="pb-4">
          <form
            className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4"
            onSubmit={(e) => editProduct(e)}
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
                value={productEdit.title}
                onChange={(e) =>
                  setProductEdit({ ...productEdit, title: e.target.value })
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
                value={productEdit.quantity}
                onChange={(e) =>
                  setProductEdit({ ...productEdit, quantity: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-300" htmlFor="quantity">
                Category
              </label>
              <select
                className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
                id="category"
                name="category"
                value={productEdit.category}
                onChange={(e) =>
                  setProductEdit({ ...productEdit, category: e.target.value })
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
                Edit Product
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ShowOneProduct;
