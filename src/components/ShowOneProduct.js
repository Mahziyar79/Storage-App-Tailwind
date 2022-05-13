const ShowOneProduct = ({ onDeleteHandler ,item}) => {
  return (
    <div className="flex items-center justify-between my-3">
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
        <button className="text-slate-300" onClick={() => onDeleteHandler(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowOneProduct;
