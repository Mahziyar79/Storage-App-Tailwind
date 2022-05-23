import "./App.css";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import CategoryProvider from "./context/CategoryProvider";
import ProductProvider from "./context/ProductProvider";

const App = () => {
  return (
    <ProductProvider>
      <CategoryProvider>
        <div className="bg-slate-800 min-h-screen w-screen font-poppins">
          <NavBar />
          <div className="container md:max-w-lg max-w-xs mx-auto">
            <AddCategory />
            <AddProduct />
            <ProductList />
          </div>
        </div>
      </CategoryProvider>
    </ProductProvider>
  );
};

export default App;
