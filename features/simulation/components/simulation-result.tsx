import { cn, ClassValue } from "cn";
import { HTMLAttributes } from "react";

export function SimulationResult() {
  return (
    <section className="pl-1 pr-4 pb-4 col-start-2 col-span-2 w-full h-full">
      <div className="rounded-md p-2 bg-gray-950/60 outline outline-gray-950/80 grid grid-cols-2 w-full h-full gap-2">
        <ResultCard title="Status" leftDescriptor="Environment State" rightDesriptor="AI Verified" rightDescriptorStyle="text-blue-300">
          <div className="text-center space-y-2"></div>
        </ResultCard>

        <ResultCard title="Predicted Power" leftDescriptor="Machine Learning Inference" rightDesriptor="0.128 kW load" rightDescriptorStyle="text-orange-600"></ResultCard>

        <ResultCard title="PMV" leftDescriptor="ISO 7730 Comfort Target" rightDesriptor="Ideal range [-0.5, +0.5]" rightDescriptorStyle="text-teal-600"></ResultCard>

        <ResultCard title="PPD" leftDescriptor="Dissatisfaction Factor" rightDesriptor="Target < 10%" rightDescriptorStyle="text-blue-300"></ResultCard>
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
    <div className={cn("flex flex-col justify-between p-2 rounded-sm from-gray-900/60 to-gray-950/40 bg-radial", className)}>
      <h2 className={cn("text-gray-50/60 text-xs", titleStyle)}>{title}</h2>
      {children}

      <div className="flex justify-between items-center">
        <p className={cn("text-gray-50/60 text-xs", leftDescriptorStyle)}>{leftDescriptor}</p>
        <p className={cn("text-gray-50/60 text-xs", rightDescriptorStyle)}>{rightDesriptor}</p>
      </div>
    </div>
  );
}
