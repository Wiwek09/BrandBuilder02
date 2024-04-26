"use client";
import React, { useEffect } from "react";
import { FaWallet, FaSuitcaseRolling } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import { useState } from "react";
import dummyData from "@/lib/dummyData.json";
import Link from "next/link";

const DetailModal = ({ selectedJob }: { selectedJob: number | undefined }) => {
  const data = dummyData.find((item) => item._id === selectedJob);
  // console.log(data, "Data");

  return (
    <div className="px-3 py-2  flex flex-col gap-4 shadow-slate-600 shadow-md rounded-lg ">
      {/*heading and detals  */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-semibold text-2xl ">{data?.jobTitle}</h1>
        <p className="font-semibold text-sm">{data?.organization}</p>
        <p className="text-sm">{data?.organizationLocation}</p>
        <p className="bg-orange-100 w-fit p-1 px-2 rounded-lg text-sm ">
          <Link href={"#"}>
            <span className="font-semibold">
              {(data?.applyNow && "ApplyNow") ||
                (data?.quickApply && "QuickApply")}
            </span>
          </Link>
        </p>
      </div>

      {/*Border Line  */}
      <div className="w-full h-[2px] rounded-lg bg-orange-200"></div>

      {/*job details  */}
      <div>
        <h1 className="font-semibold">Job details</h1>
        <p className="text-sm">{data?.jobDescription}</p>
        <div className="py-1">
          <div className="text-sm flex items-center space-x-2 ">
            <span>
              <FaWallet />
            </span>
            <span>Pay</span>
          </div>

          <div className="bg-orange-100 w-fit mt-1 p-1 px-2 rounded-lg text-sm ml-4 ">
            <span>{data?.jobDetails?.payOut}</span>
          </div>
        </div>

        <div className="py-2">
          <div className="text-sm flex items-center space-x-2 ">
            <span>
              <FaSuitcaseRolling />
            </span>
            <span>Job Type</span>
          </div>

          <div className=" ">
            <span>
              {data?.jobDetails?.jobType.map((el) => {
                return (
                  <span className="bg-orange-100 w-fit mt-1 p-1 px-2 rounded-lg text-sm ml-4">
                    {el}
                  </span>
                );
              })}
            </span>
          </div>
        </div>

        <div className="py-2">
          <div className="text-sm flex items-center space-x-2 ">
            <span>
              <BsClockFill />
            </span>
            <span>Shift and Shedule</span>
          </div>

          <div>
            <span className="flex space-x-3">
              {data?.jobDetails?.shifts.map((el) => {
                return (
                  <span className="bg-orange-100 w-fit mt-1 p-1 px-2 rounded-lg text-sm ml-4">
                    {el}
                  </span>
                );
              })}
            </span>
          </div>
        </div>
      </div>

      {/*Border Line  */}
      <div className="w-full h-[2px] rounded-lg bg-orange-200"></div>

      {/* Benefits */}
      <div>
        <h1 className="font-semibold">Benefits</h1>
        <div>
          {data?.benefits?.map((el, index) => {
            return (
              <div className="flex items-center space-x-2 ">
                <span className="text-xl font-bold ">.</span>
                <span className="mt-2 text-sm ">{el}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/*Border Line  */}
      <div className="w-full h-[2px] rounded-lg bg-orange-200"></div>

      {/* Job Summary */}
      <div>
        <h1 className="font-semibold">Job Summary</h1>
        <p className="text-sm">{data?.jobSummary}</p>
      </div>

      {/*Border Line  */}
      <div className="w-full h-[2px] rounded-lg bg-orange-200"></div>

      {/* Key Responsibilities */}
      <div>
        <h1 className="font-semibold">Key Responsibilities</h1>
        <div>
          {data?.keyResponsibilities?.map((el) => {
            return (
              <div className="flex items-center space-x-2 ">
                <span className="text-xl font-bold ">.</span>
                <span className="mt-2 text-sm ">{el}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/*Border Line  */}
      <div className="w-full h-[2px] rounded-lg bg-orange-200"></div>

      {/* Qualifications and skills */}
      <div>
        <h1 className="font-semibold">Qualifications and Skills</h1>
        <div>
          {data?.qualificationSkills?.map((el) => {
            return (
              <div className="flex items-center space-x-2 ">
                <span className="text-xl font-bold ">.</span>
                <span className="mt-2 text-sm ">{el}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
