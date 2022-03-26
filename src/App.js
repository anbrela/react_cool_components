import React, { useEffect, useState } from "react";
import "./App.css";
import { ListGrid } from "./components/ListGrid";

function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState({
    page: 1,
    elementsByPage: 10,
    optionsByPage: [10, 20],
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) =>
        res.json().then((response) => {
          setTotal(response.length);
          const newData = response.splice(0, 10);
          setData(newData);
        })
      )
      .catch((e) => console.log(e));
  }, []);

  const onPagination = (data) => {
    setPagination(data);
  };

  const components = [
    { id: 1, name: "List Data Grid", branch: "components/list_data_grid" },
  ];

  const columns = () => {
    return [
      {
        id: 0,
        header: "Component",
        value: (item) => item.name,
      },
      {
        id: 1,
        header: "Branch",
        value: (item) => item.branch,
      },
    ];
  };

  return (
    <div className="p-10 flex flex-col items-center space-y-2 bg-gray-50 min-h-screen">
      <div className="text-5xl font-bold text-gray-800">
        Welcome to react{" "}
        <span className="text-purple-800 font-black"> cool</span> components!
      </div>
      <span className="text-gray-300 text-2xl">
        Checkout branch if you want to discover more cool components
      </span>

      <div className="w-full pt-10">
        <ListGrid
          data={components}
          columns={columns()}
          color="#a78bfa"
          checboxVisible={false}
        />
      </div>
    </div>
  );
}

export default App;
