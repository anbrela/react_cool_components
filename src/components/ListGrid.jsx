import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import * as PropTypes from "prop-types";

export const HeadElement = ({ item }) => {
  return (
    <th key={item.id} className="text-left p-4 bg-gray-100">
      {item.header}
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

function ListPagination(props) {
  return (
    <>
      {props.pagination ? (
        <div className="flex  mt-1 w-full bg-gray-100 h-10 px-5">
          <div className="flex w-full h-full items-center justify-between">
            <p className="text-xs">
              Mostrando{" "}
              <span className="font-bold">
                {props.pagination.elementsByPage}
              </span>{" "}
              de <span className="font-bold">{props.total}</span>
            </p>
            <div className="flex space-x-2 items-center ">
              <BsArrowLeft
                className="cursor-pointer"
                size={20}
                onClick={() =>
                  props.pagination.page > 1 ? props.previousPage() : null
                }
              />
              <div className="flex space-x-2">
                {props.pages?.map((el) => (
                  <div
                    onClick={() => props.onPagination(el)}
                    key={el}
                    className={`cursor-pointer flex items-center justify-center w-6 font-bold h-6 rounded-full ${
                      props.pagination.page === el && "bg-white"
                    }`}
                  >
                    {el}
                  </div>
                ))}
              </div>
              <BsArrowRight
                className="cursor-pointer"
                onClick={() =>
                  props.pages.length > 1 &&
                  props.pagination.page < props.pages.length
                    ? props.nextPage()
                    : null
                }
                size={20}
              />
            </div>
            <div>
              <p className="text-xs">
                Por página:{" "}
                <span className="font-bold">
                  {" "}
                  <select
                    value={props.pagination.optionsByPage[0]}
                    onChange={props.onChange}
                    className="bg-gray-100"
                  >
                    {props.pagination.optionsByPage.map((el) => (
                      <option className="text-xl" value={el} key={el}>
                        {el}
                      </option>
                    ))}
                  </select>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

ListPagination.propTypes = {
  pagination: PropTypes.any,
  elementsByPage: PropTypes.number,
  total: PropTypes.any,
  onClick: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.any),
  callbackfn: PropTypes.func,
  onClick1: PropTypes.func,
  elementsByPage1: PropTypes.number,
  onChange: PropTypes.func,
  optionsByPage: PropTypes.any,
  callbackfn1: PropTypes.func,
};
export const ListGrid = ({
  data,
  columns,
  pagination,
  color,
  total,
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

  return (
    <div className="w-full flex justify-center ">
      <div className="w-2/4 flex-col flex items-center">
        <table className="w-full space-y-4 ">
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
