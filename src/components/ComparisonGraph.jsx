import Image from "next/image";
import LineChart from "./LineChart";
import graph from "../assets/graph.webp";

function ComparisonGraph() {
  return (
    <div className="bg-white p-5 border border-gray-200 rounded-lg">
      <div className="md:flex sm:flex-row md:w-full items-center sm:items-start justify-between mb-10">
        {/* Title and Description Section */}
        <div className="flex flex-col justify-center mb-4 sm:mb-0 sm:w-3/5 md:w-full">
          <h1 className="text-xl font-semibold text-black">Comparison Graph</h1>
          <p className="text-sm text-black">
            <span className="font-semibold">You Score 90 percentile </span>which
            is lower than the average percentile 72% who took this assessments
          </p>
        </div>

        {/* Graph Icon */}
        <div className="md:flex justify-center sm:justify-start sm:w-2/5 md:full hidden ">
          <Image src={graph} alt="graph icon" className="h-20 w-20" />
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="px-5 sm:px-10">
        <LineChart />
      </div>
    </div>
  );
}

export default ComparisonGraph;
