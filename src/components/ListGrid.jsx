import React, { useEffect, useState } from "react";
import { ListPagination } from "./listComponents/ListPagination";
import { Select } from "../customComponents/Select";
import { BsArrowUp } from "react-icons/bs";

export const HeadElement = ({ item }) => {
  return (
    <th key={item.id} className="text-left p-4 bg-gray-100">
      <p className={"flex items-center"}>{item.header} </p>
    </th>
  );
};

export const BodyElement = ({
  item,
  column,
  checkboxVisible,
  selected,
  color,
  onChange,
}) => {
  return (
    <tr className="bg-white">
      {checkboxVisible ? (
        <td className="p-3 mb-10 w-5">
          <input
            style={{ background: color }}
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={selected.includes(item.id)}
            onChange={() => onChange(item.id)}
          />
        </td>
      ) : null}
      {column.map((colEl) => (
        <td key={colEl.id} className=" p-3 mb-10">
          {colEl.value(item)}
        </td>
      ))}
    </tr>
  );
};

export const ListGrid = ({
  data,
  columns,
  pagination,
  color,
  total,
  messages,
  onSort,
  onPagination,
  checboxVisible,
  defaultSelected,
}) => {
  const [pages, setPages] = useState(
    pagination
      ? Array.from(
          Array(Math.round(total / pagination.elementsByPage)),
          (_, x) => x + 1
        )
      : null
  );

  const [selected, setSelected] = useState(defaultSelected);
  const [sorts, setSorts] = useState({
    name: null,
    type: null,
  });

  useEffect(() => {
    if (total) {
      setPages(
        Array.from(
          Array(Math.round(total / pagination.elementsByPage)),
          (_, x) => x + 1
        )
      );
    }
  }, [total]);

  useEffect(() => {
    onSort(sorts);
  }, [sorts]);

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-4xl flex-col flex items-center">
        <div className="w-full flex justify-between py-4">
          <span className="text-xl font-semibold">{messages.title}</span>
          <div className="flex items-center">
            <span>Order by: </span>
            <Select
              className="bg-gray-50 font-semibold ml-2"
              value={sorts.name}
              onChange={(e) => setSorts({ name: e.target.value, type: "ASC" })}
              data={columns.map((el) => el)}
            />

            {sorts.name ? (
              <div className="ml-4 flex items-center space-x-1">
                <span>Order</span>
                <span
                  style={{ color: color }}
                  onClick={() =>
                    sorts.type === "ASC"
                      ? setSorts({ ...sorts, type: "DESC" })
                      : setSorts({ name: "" })
                  }
                >
                  <BsArrowUp
                    className={`cursor-pointer ${
                      sorts.type === "DESC" && "rotate-180"
                    }`}
                  />
                </span>
              </div>
            ) : null}
          </div>
        </div>
        <table className="w-full space-y-4 relative">
          <thead>
            <tr>
              {checboxVisible ? (
                <th className="w-5 bg-gray-100">
                  <input
                    style={{ background: color }}
                    checked={selected.length === total}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    type="checkbox"
                    onChange={() =>
                      selected.length === total
                        ? setSelected([])
                        : setSelected(data.map((el) => el.id))
                    }
                  />
                </th>
              ) : null}
              {columns.map((el, index) => (
                <HeadElement key={index} item={el} />
              ))}
            </tr>
          </thead>
          {!data.length ? (
            <div className="absolute w-full h-full flex justify-center">
              {messages.gridEmpty}
            </div>
          ) : null}
          <tbody>
            {data.map((el) => (
              <BodyElement
                key={el?.id}
                checkboxVisible={checboxVisible}
                selected={selected}
                color={color}
                onChange={(data) => {
                  return !selected.includes(data)
                    ? setSelected([...selected, data])
                    : setSelected(selected.filter((el) => el !== data));
                }}
                item={el}
                column={columns}
              />
            ))}
          </tbody>
        </table>

        <ListPagination
          classname={!data.length && "mt-14"}
          messages={messages}
          pagination={pagination}
          elementsByPage={pagination?.elementsByPage}
          total={total}
          onPagination={(el) => onPagination({ ...pagination, page: el })}
          previousPage={() =>
            onPagination({
              page: pagination.page - 1,
              elementsByPage: pagination.elementsByPage,
              optionsByPage: pagination.optionsByPage,
            })
          }
          pages={pages}
          nextPage={() =>
            onPagination({
              page: pagination.page + 1,
              elementsByPage: pagination.elementsByPage,
              optionsByPage: pagination.optionsByPage,
            })
          }
          onChange={(e) =>
            onPagination({
              ...pagination,
              elementsByPage: parseInt(e.target.value),
            })
          }
        />
      </div>
    </div>
  );
};
