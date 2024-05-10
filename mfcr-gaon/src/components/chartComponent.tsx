// components/ChartComponent.js
import React, { useRef, useEffect } from "react";
import Chart, { ChartTypeRegistry } from "chart.js/auto";

const ChartComponent = ({
  type,
  data,
  options,
}: {
  type: string;
  data: any;
  options: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const chartInstance = new Chart(ctx, {
      type: type as keyof ChartTypeRegistry,
      data: data,
      options: options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [type, data, options]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChartComponent;
