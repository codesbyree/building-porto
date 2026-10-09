"use client";

import { cn } from "cn";
import { type ClassValue } from "clsx";
import { HTMLAttributes, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export function useSimulationResults() {
  const searchParams = useSearchParams();

  return useMemo(() => {
    return {
      status: searchParams.get("status") || null,
      predictedPower: searchParams.get("predicted_power") || null,
      pmv: searchParams.get("pmv") || null,
      ppd: searchParams.get("ppd") || null,
    };
  }, [searchParams]);
}

export function SimulationResult() {
  const results = useSimulationResults();

  return (
    <section className="pl-1 pr-4 pb-4 col-start-2 col-span-2 w-full h-full">
      <div className="rounded-md p-2 bg-gray-950/60 outline-gray-600/20 outline grid grid-cols-2 w-full h-full gap-2">
        <ResultCard title="Status" leftDescriptor="Environment State" rightDesriptor="AI Verified" rightDescriptorStyle="text-blue-300">
          {results.status && (
            <div className="text-center space-y-2 flex-1 flex items-center justify-center text-3xl font-bold">
              <p>{results.status}</p>
            </div>
          )}
        </ResultCard>

        <ResultCard title="Predicted Power" leftDescriptor="Machine Learning Inference" rightDesriptor="0.128 kW load" rightDescriptorStyle="text-orange-600">
          {results.predictedPower && (
            <div className="text-center space-y-2 flex-1 flex items-center justify-center text-3xl font-bold">
              <p>{results.predictedPower}</p>
            </div>
          )}
        </ResultCard>

        <ResultCard title="PMV" leftDescriptor="ISO 7730 Comfort Target" rightDesriptor="Ideal range [-0.5, +0.5]" rightDescriptorStyle="text-teal-600">
          {results.pmv && (
            <div className="text-center space-y-2 flex-1 flex items-center justify-center text-3xl font-bold">
              <p>{results.pmv}</p>
            </div>
          )}
        </ResultCard>

        <ResultCard title="PPD" leftDescriptor="Dissatisfaction Factor" rightDesriptor="Target < 10%" rightDescriptorStyle="text-blue-300">
          {results.ppd && (
            <div className="text-center space-y-2 flex-1 flex items-center justify-center text-3xl font-bold">
              <p>{results.ppd}%</p>
            </div>
          )}
        </ResultCard>
      </div>
    </section>
  );
}

interface ResultCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  leftDescriptor: string;
  rightDesriptor: string;
  titleStyle?: ClassValue;
  leftDescriptorStyle?: ClassValue;
  rightDescriptorStyle?: ClassValue;
}

function ResultCard(props: ResultCardProps) {
  const { children, title, leftDescriptor, rightDesriptor, titleStyle, leftDescriptorStyle, rightDescriptorStyle, className } = props;

  return (
    <div className={cn("flex flex-col justify-between p-2 rounded-sm from-gray-900/60 to-gray-950/40 bg-radial outline outline-gray-800/50 min-h-40", className)}>
      <h2 className={cn("text-gray-50/60 text-xs", titleStyle)}>{title}</h2>

      {children}

      <div className="flex justify-between items-center mt-auto pt-4">
        <p className={cn("text-gray-50/60 text-xs", leftDescriptorStyle)}>{leftDescriptor}</p>
        <p className={cn("text-gray-50/60 text-xs font-medium", rightDescriptorStyle)}>{rightDesriptor}</p>
      </div>
    </div>
  );
}
