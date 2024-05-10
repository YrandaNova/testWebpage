"use client";

import React from "react";
import {
  barData,
  barOptions,
  doughnutData,
  doughnutOptions,
  lineData,
  polarData,
  radarData,
} from "@/components/graphs/graphs";
import ChartComponent from "@/components/chartComponent";
import Calendar from "@/components/calendar";

const DataPage = () => {
  return (
    <div className="bg-blue-500  flex w-full overflow-hidden">
      <div className="w-2/3 flex">
        <div className="w-1/2">
          <div className="h-[400px] rounded bg-white p-6 m-5">
            <h2 className="text-black mt-4 text-center">Bar Chart</h2>
            <ChartComponent type="bar" data={barData} options={barOptions} />
          </div>
          <div className="h-[400px] bg-white rounded p-6 m-5 mb-2 items-center flex flex-col">
            <h2 className="text-black text-center">Pie chart</h2>
            <ChartComponent
              type="doughnut"
              data={doughnutData}
              options={doughnutOptions}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-[400px] bg-white rounded p-6 m-5">
            <h2 className="text-black mt-4 text-center">Line chart </h2>
            <ChartComponent type="line" data={lineData} options={{}} />
          </div>
          <div className="h-[400px] bg-white rounded p-6 m-5 mt-5 items-center flex flex-col">
            <h2 className="text-black text-center">Radar Chart</h2>
            <ChartComponent type="radar" data={radarData} options={{}} />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col">
        <div className="h-[400px] flex rounded bg-white px-6 m-5 ml-6">
          <div className="h-[300px] w-[250px] mt-10 flex flex-col items-center">
            <h2 className="text-black text-center mb-4">Polar Chart</h2>
            <ChartComponent type="polarArea" data={polarData} options={{}} />
          </div>
          <div className="h-[300px] w-[250px] mt-10 flex flex-col items-center">
            <h2 className="text-black text-center mb-4">Another Polar Chart</h2>
            <ChartComponent type="polarArea" data={polarData} options={{}} />
          </div>
        </div>
        <div className="flex flex-col items-center flex flex-col justify-center">
          <div className="h-[400px] w-[350px] items-center">
            <h1 className="text-lg font-bold text-center">Simple Calendar</h1>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
