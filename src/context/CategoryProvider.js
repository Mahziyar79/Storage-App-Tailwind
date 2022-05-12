import { useState, createContext, useContext, useEffect } from "react";

const CategoryItemsContext = createContext();
const CategoryItemsContextDispature = createContext();
const CategoryProvider = ({ children }) => {
  const [categoryItems, setCategoryItems] = useState([
    // { title: "Diary", id: 1 },
    // { title: "Meat", id: 2 },
    // { title: "Beans", id: 3 },
  ]);

  useEffect(() => {
    const categoryItems = JSON.parse(localStorage.getItem("categoryItems")) || [];
    if (categoryItems.length) {
      const localCategory = JSON.parse(localStorage.getItem("categoryItems"));
      setCategoryItems(localCategory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categoryItems", JSON.stringify(categoryItems));
  }, [categoryItems]);

  return (
    <CategoryItemsContext.Provider value={categoryItems}>
      <CategoryItemsContextDispature.Provider value={setCategoryItems}>
        {children}
      </CategoryItemsContextDispature.Provider>
    </CategoryItemsContext.Provider>
  );
};

export default CategoryProvider;

export const useCategory = () => useContext(CategoryItemsContext);
export const useCategoryAction = () =>
  useContext(CategoryItemsContextDispature);
