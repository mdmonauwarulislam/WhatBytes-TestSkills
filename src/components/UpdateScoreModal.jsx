import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import Htmlpng from "../assets/images.png";
import { IoMdArrowRoundForward } from "react-icons/io";

const inputData = [
  {
    id: 1,
    label: "Rank",
    type: "number",
    placeholder: "Enter your Rank",
  },
  {
    id: 2,
    label: "Percentile",
    type: "number",
    placeholder: "Enter your Percentile",
  },
  {
    id: 3,
    label: "Current Score (out of 15)",
    type: "number",
    placeholder: "Enter your current score",
  },
];

export default function UpdateScoreModal({ open, handleOpen }) {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex items-center justify-between pt-6 px-8">
          <h2 className="text-2xl font-bold text-black">Update Score</h2>
          <Image src={Htmlpng} alt="html logo" className="h-10 w-10" />
        </DialogHeader>
        <DialogBody>
          <form className="flex flex-col gap-6">
            {inputData.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center gap-4"
              >
                <div className="flex items-center gap-3">
                  {/* Circular ID */}
                  <div className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    {data.id}
                  </div>
                  {/* Label */}
                  <label className="text-[16px] text-black">
                    Update your{" "}
                    <span className="font-semibold">{data.label}</span>
                  </label>
                </div>
                {/* Input Field */}
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  className="border no-spinner border-blue-200 p-2 text-blue-900 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-900 w-[40%]" 
                />
              </div>
            ))}
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpen}
            className="mr-1 text-blue-900 border border-blue-900 rounded-md"
          >
            <span>Cancel</span>
          </Button>
          <Button  className="bg-blue-900 text-white flex items-center" onClick={handleOpen}>
            <span>Save</span>
            <IoMdArrowRoundForward className="ml-2" size={20} />
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
