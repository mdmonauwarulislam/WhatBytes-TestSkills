'use client';
import { useState } from 'react';
import Image from 'next/image';
import Htmlpng from '../assets/images.png';
import UpdateScoreModal from './UpdateScoreModal';

function TestCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white py-5 px-3 rounded-md border border-gray-200">
      {/* Image Section */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <Image src={Htmlpng} alt="HTML Logo" width={64} height={64} className="rounded-md" />
      </div>

      {/* Text Section */}
      <div className="text-black flex-1 text-center md:text-left">
        <h1 className="text-[16px] font-semibold">Hyper Text Markup Language</h1>
        <p className="text-[14px] font-medium text-gray-600">Questions : 08 | Durations : 15 mins | Submitted on 31 Dec 2024</p>
      </div>

      {/* Button Section */}
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <button
          className="px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-950 text-white font-medium"
          onClick={handleOpen}
        >
          Update
        </button>
        <div>
          <UpdateScoreModal open={open} handleOpen={handleOpen} />
        </div>
      </div>
    </div>
  );
}

export default TestCard;
