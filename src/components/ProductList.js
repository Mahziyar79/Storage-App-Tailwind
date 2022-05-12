import { useProduct, useProductAction } from "../context/ProductProvider";
import ShowOneProduct from "./ShowOneProduct";

const ProductList = () => {
  const productItems = useProduct();
  const setProductItems = useProductAction();

  const onDeleteHandler = (id) => {
    const filteredProducts = productItems.filter((item) => item.id !== id);
    setProductItems(filteredProducts);
  };
  return (
    <>
      <h2 className="font-bold text-slate-300 text-xl my-5">Product List</h2>
      {productItems.length ? (
        productItems.map((item) => (
          <ShowOneProduct
            key={item.id}
            item={item}
            onDeleteHandler={(id) => onDeleteHandler(id)}
          />
        ))
      ) : (
        <p className="text-red-300 text-lg font-bold">Please Add Product</p>
      )}
    </>
  );
};

export default ProductList;
