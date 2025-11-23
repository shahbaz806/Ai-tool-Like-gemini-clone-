import React from "react";

const RecentlySerch = ({
  seteRcentHistory,
  recentHistory,
  setSelectedHistory,
}) => {
  const clearHistory = () => {
    localStorage.clear();
    seteRcentHistory([]);
  };
  const clearSelectedHistory = (selectedItem) => {
    let history = JSON.parse(localStorage.getItem("history"));
    history = history.filter((item) => {
      if(item!=selectedItem) {
        return item
      }
    })
    seteRcentHistory(history);
    localStorage.setItem('history',JSON.stringify(history));
  };
  return (
    <div className="col-span-1 dark:bg-zinc-800 bg-slate-300 pt-3">
      <h1 className="dark:text-white text-black text-xl">
        Recent Search{" "}
        <button onClick={() => clearHistory()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#fff"
          >
            <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
          </svg>
        </button>
      </h1>

      <ul className="text-left overflow-auto text-sm ">
        {recentHistory &&
          recentHistory.map((item, index) => (
            <div className="flex justify-between pr-3 py-1 ">
              <li
                onClick={() => setSelectedHistory(item)}
                key={index + Math.random()}
                className=" w-full p-1 pl-5 truncate cursor-pointer dark:hover:bg-zinc-700  dark:hover:text-zinc-200 hover:bg-zinc-700 dark:text-white text-zinc-700 hover:text-zinc-200"
              >
                {item}
              </li>
              <button
                onClick={() => clearSelectedHistory(item)}
                className="cursor-pointer hover:bg-zinc-900 bg-zinc-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fff"
                >
                  <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                </svg>
              </button>{" "}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RecentlySerch;
