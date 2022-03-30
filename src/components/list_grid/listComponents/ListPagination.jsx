import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import * as PropTypes from "prop-types";
import React from "react";

export const ListPagination = (props) => {
  return (
    <>
      {props?.pagination ? (
        <div className={`flex  mt-1 w-full h-14 px-5 ${props.classname}`}>
          <div className="flex w-full h-full items-center justify-between">
            <p className="text-xs">
              {props.messages.showing}
              <span className="font-bold ml-1 mr-1">
                {props.pagination?.elementsByPage}
              </span>
              {props.messages.from}
              <span className="ml-1 font-bold">{props.total}</span>
            </p>
            <div className="flex space-x-2 items-center ">
              <BsArrowLeft
                className="cursor-pointer"
                size={20}
                onClick={() =>
                  props.pagination?.page > 1 ? props.previousPage() : null
                }
              />
              <div className="flex space-x-2">
                {props.pages?.map((el) => (
                  <div
                    onClick={() => props.onPagination(el)}
                    key={el}
                    className={`cursor-pointer flex items-center justify-center w-6 font-bold h-6 rounded-full ${
                      props.pagination?.page === el && "bg-white"
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
                  props.pagination?.page < props.pages.length
                    ? props.nextPage()
                    : null
                }
                size={20}
              />
            </div>
            <div>
              <p className="text-xs">
                {props.messages.elements}
                <span className="font-bold">
                  <select
                    value={props.pagination?.optionsByPage[0]}
                    onChange={props.onChange}
                    className="bg-gray-50 cursor-pointer"
                  >
                    {props.pagination?.optionsByPage.map((el) => (
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
};

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
