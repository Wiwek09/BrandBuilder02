"use client";
import { useEffect, useState } from "react";
import dummyData from "@/lib/dummyData.json";
import BoxModal from "../components/boxModal";
import DetailModal from "./detailModal";

const BoxContainer = () => {
  const [selectedJob, setSelectedJob] = useState<number | undefined>();
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState([{}]);

  // useEffect(() => {
  //   const check = dummyData.filter((item) => {
  //     return !item.quickApply && !item.applyNow;
  //   });
  //   setData(check);
  //   console.log("Check", check);
  // }, []);

  return (
    <div className={`w-full px-3 ${open ? `sm:flex gap-[16px]` : ``} `}>
      <div className={`flex flex-col gap-3 ${open ? `sm:w-[50%]` : `w-full`} `}>
        {dummyData.map((item) => (
          <BoxModal
            key={item._id}
            item={item}
            id={item._id}
            setOpen={setOpen}
            setSelectedJob={setSelectedJob}
            selectedJob={selectedJob}
          />
        ))}
      </div>
      {open && (
        <div className="sm:w-[50%] hidden sm:block  ">
          <DetailModal selectedJob={selectedJob} />
        </div>
      )}
    </div>
  );
};

export default BoxContainer;
