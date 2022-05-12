import { useState, createContext, useContext, useEffect } from "react";

const ProductItemsContext = createContext();
const ProductItemsContextDispature = createContext();

const ProductProvider = ({ children }) => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const productItems = JSON.parse(localStorage.getItem('productItems')) || [];
    if (productItems.length) {
      const retriveProducts = JSON.parse(localStorage.getItem("productItems"));
      setProductItems(retriveProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productItems", JSON.stringify(productItems));
  }, [productItems]);

  return (
    <ProductItemsContext.Provider value={productItems}>
      <ProductItemsContextDispature.Provider value={setProductItems}>
        {children}
      </ProductItemsContextDispature.Provider>
    </ProductItemsContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(ProductItemsContext);
export const useProductAction = () => useContext(ProductItemsContextDispature);
