import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import DetailModal from "./detailModal";

const BoxModal = ({
  item,
  id,
  setOpen,
  setSelectedJob,
  selectedJob,
}: {
  item: any;
  id: number;
  setOpen: any;
  setSelectedJob: any;
  selectedJob: number | undefined;
}) => {
  const isSelected = selectedJob === id;
  return (
    <>
      <div
        className={` box-border p-2 space-y-1 cursor-pointer shadow-slate-400 shadow-md rounded-r-lg border-l-4 border-black mt-3 focus:border-blue-500 hover:translate-x-2 hover:ease-in duration-200  ${
          !item.shortDescription ? "flex justify-between" : ""
        } ${
          isSelected
            ? item.shortDescription
              ? `hidden sm:block `
              : `hidden sm:flex`
            : ""
        }`}
        onClick={() => {
          setOpen(true);
          setSelectedJob(id);
        }}
      >
        <h1 className="font-semibold">{item.jobTitle}</h1>
        <p className="text-sm text-gray-400 ">{item.shortDescription}</p>
        <p className={`flex items-center space-x-2`}>
          <span className="">
            {item.applyNow
              ? `ApplyNow`
              : item.quickApply
              ? `QuickApply`
              : `Click to Apply`}
          </span>
          <span className="">
            <FaLongArrowAltRight />
          </span>
        </p>
      </div>

      {isSelected && (
        <div className="sm:hidden">
          <DetailModal selectedJob={selectedJob} />{" "}
        </div>
      )}
    </>
  );
};

export default BoxModal;
