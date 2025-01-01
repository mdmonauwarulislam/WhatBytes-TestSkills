import TestCard from "@/components/TestCard";
import QuickStatics from "@/components/QuickStatics";
import ComparisonGraph from "@/components/ComparisonGraph";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";

function Page() {
  return (
    <div className='min-h-screen w-full bg-white pt-20 max-h-screen overflow-y-auto'>
      <h1 className='text-xl font-semibold text-gray-600 pt-10 pl-10'>Skill Test</h1>
      <div className='grid grid-cols-1 md:grid-cols-[60%,40%] px-10 pt-5 gap-10'>
        <div className="flex flex-col gap-5">
          <TestCard />
          <QuickStatics />
          <ComparisonGraph />
        </div>
        <div className="flex flex-col gap-5 pr-5 mb-10">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Page;
