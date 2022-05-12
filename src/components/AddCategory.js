import { useState } from "react";
import { useCategory, useCategoryAction } from "../context/CategoryProvider";

const AddCategory = () => {
  const [addNewCategory, setAddNewCategory] = useState({
    title: "",
    desc: "",
    id: "",
  });
  const [addCatIsOpen, setAddCatIsOpen] = useState(false);
  const setCategoryItems = useCategoryAction();
  const categoryItems = useCategory();

  const submitCategoryHandler = (e) => {
    e.preventDefault();
    if (addNewCategory.title) {
      setCategoryItems([
        ...categoryItems,
        {
          ...addNewCategory,
          id: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
        },
      ]);
      setAddNewCategory({
        title: "",
        desc: "",
        id: "",
      });
      setAddCatIsOpen(false);
    } else {
      alert("please fill the name fo category");
    }
  };

  return (
    <div>
      <h2
        onClick={() => setAddCatIsOpen(!addCatIsOpen)}
        className="font-bold text-slate-300 text-xl my-5 cursor-pointer"
      >
        Add New Category
      </h2>
      {addCatIsOpen && (
        <div>
          <form
            onSubmit={(e) => submitCategoryHandler(e)}
            className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4"
          >
            <div>
              <label
                className="block mb-1 text-slate-300"
                htmlFor="category-title"
              >
                title
              </label>
              <input
                className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
                type="text"
                id="category-title"
                name="category-title"
                value={addNewCategory.title}
                onChange={(e) =>
                  setAddNewCategory({
                    ...addNewCategory,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label
                className="block mb-1 text-slate-300"
                htmlFor="category-desc"
              >
                description
              </label>
              <textarea
                className="bg-transparent rounded-lg border border-slate-500 text-slate-400 w-full"
                id="category-desc"
                name="category-desc"
                value={addNewCategory.desc}
                onChange={(e) =>
                  setAddNewCategory({ ...addNewCategory, desc: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <button className="border border-slate-400 text-slate-400 rounded-lg flex-1 py-2">
                Cancel
              </button>
              <button className="bg-slate-500 text-slate-200 rounded-lg flex-1 py-2">
                Add New Category
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
