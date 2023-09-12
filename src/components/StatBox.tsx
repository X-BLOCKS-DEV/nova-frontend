import React from "react";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    progress: number,
    increase: number
}

const StatBox = ({ title, subtitle, icon, progress, increase }: StatBoxProps) => {
  return (
    <div className="w-full m-1 p-2 bg-gray-200 rounded">
        <div className="flex">
            <div>
                {icon}
                <h4 className="font-bold text-lg italic">{title}</h4>
            </div>
            <div>
                <ProgressCircle progress={progress} />
            </div>
        </div>
        <div className="flex">
            <h5 className="text-green-500">
                {subtitle}
            </h5>
            <h5 className="text-green-600">
                {increase}
            </h5>
        </div>
    </div>
  );
};

export default StatBox;