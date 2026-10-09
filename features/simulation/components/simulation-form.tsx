"use client";

import { useCallback, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export function SimulationForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [formState, setFormState] = useState({
    people: "",
    temperature: "",
    noise: "",
    room_size: "",
    humidity: 0,
    lighting: 0,
  });

  const runSimulation = useDebouncedCallback((currentState: typeof formState) => {
    const temperature = Number(currentState.temperature) || 0;
    const room_size = Number(currentState.room_size) || 0;
    const humidity = Number(currentState.humidity) || 0;
    const lighting = Number(currentState.lighting) || 0;
    const people = Number(currentState.people) || 0; // Extracted people

    const tempOffset = temperature - 22;
    const humOffset = (humidity - 50) * 0.01;
    const pmv = tempOffset * 0.3 + humOffset;

    const ppd = 100 - 95 * Math.exp(-0.03353 * Math.pow(pmv, 4) - 0.2179 * Math.pow(pmv, 2));

    // Adjusted multipliers so room_size and people have a noticeable impact on power
    const basePower = room_size * 0.015;
    const lightingPower = lighting * 0.0001;
    const peopleHeatLoad = people * 0.1;

    const coolingPower = Math.max(0, tempOffset) * 0.05 + peopleHeatLoad;
    const predictedPower = basePower + lightingPower + coolingPower;

    const isComfortable = pmv >= -0.5 && pmv <= 0.5 && ppd < 10;
    const status = isComfortable ? "Optimal" : "Requires Tuning";

    const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

    Object.entries(currentState).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        currentParams.set(key, value.toString());
      } else {
        currentParams.set(key, "0");
      }
    });

    currentParams.set("status", status);
    currentParams.set("predicted_power", predictedPower.toFixed(3));
    currentParams.set("pmv", pmv.toFixed(2));
    currentParams.set("ppd", ppd.toFixed(1));

    router.push(`${pathname}?${currentParams.toString()}`, { scroll: false });
  }, 500);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      let value = e.target.value;

      if (name === "people") {
        value = value.replace(/[^0-9]/g, "");
      } else {
        value = value.replace(/[^0-9.]/g, "");
        const parts = value.split(".");
        if (parts.length > 2) {
          value = parts[0] + "." + parts.slice(1).join("");
        }
      }

      if (value.length > 1 && value.startsWith("0") && value[1] !== ".") {
        value = value.replace(/^0+/, "") || "0";
      }

      const newState = { ...formState, [name]: value };
      setFormState(newState);
      runSimulation(newState);
    },
    [formState, runSimulation],
  );

  const handleValueChange = useCallback(
    (name: string, value: number) => {
      const newState = { ...formState, [name]: value };
      setFormState(newState);
      runSimulation(newState);
    },
    [formState, runSimulation],
  );

  const clearForm = useCallback(() => {
    const emptyState = {
      people: "",
      temperature: "",
      noise: "",
      room_size: "",
      humidity: 0,
      lighting: 0,
    };

    setFormState(emptyState);
    router.push(pathname);
  }, [router, pathname]);

  return (
    <section className="px-4 pb-4">
      <div className="bg-gray-950/60 outline-gray-600/20 outline rounded-md p-2">
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-gray-50">Simulation Parameters</FieldLegend>
            <FieldDescription className="text-gray-50/70">All fields are required for the simulation to run properly</FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="people" className="text-gray-50">
                  Total of People in Building
                </FieldLabel>
                <Input
                  id="people"
                  placeholder="0"
                  required
                  type="text"
                  inputMode="numeric"
                  name="people"
                  value={formState.people}
                  onChange={handleChange}
                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="temperature" className="text-gray-50">
                  Room Temperature (°C)
                </FieldLabel>
                <Input
                  id="temperature"
                  placeholder="23.8"
                  required
                  type="text"
                  inputMode="decimal"
                  name="temperature"
                  value={formState.temperature}
                  onChange={handleChange}
                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
                <FieldDescription className="text-gray-50/60">Decimal value is allowed</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="noise" className="text-gray-50">
                  Noise (dB)
                </FieldLabel>
                <Input
                  id="noise"
                  placeholder="13.3"
                  required
                  type="text"
                  inputMode="decimal"
                  name="noise"
                  value={formState.noise}
                  onChange={handleChange}
                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
                <FieldDescription className="text-gray-50/60">Decimal value is allowed</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="room-size" className="text-gray-50">
                  Room Size (m²)
                </FieldLabel>
                <Input
                  id="room-size"
                  placeholder="230"
                  required
                  type="text"
                  inputMode="decimal"
                  name="room_size"
                  value={formState.room_size}
                  onChange={handleChange}
                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
                <FieldDescription className="text-gray-50/60">Decimal value is allowed</FieldDescription>
              </Field>

              <Field className="relative">
                <FieldLabel htmlFor="humidity" className="text-gray-50">
                  Humidity
                </FieldLabel>
                <FieldDescription className="absolute top-0 right-0 w-max text-right text-gray-50/60">
                  <span>{formState.humidity ?? 0}% RH</span>
                </FieldDescription>
                <Slider
                  value={[formState.humidity ?? 0]}
                  onValueChange={(value) => {
                    const val = Array.isArray(value) ? value[0] : value;
                    handleValueChange("humidity", val as number);
                  }}
                  max={100}
                  min={0}
                  step={1}
                  className="mt-2 w-full"
                  aria-label="Humidity"
                />
              </Field>

              <Field className="relative">
                <FieldLabel htmlFor="lighting" className="text-gray-50">
                  Lighting
                </FieldLabel>
                <FieldDescription className="absolute top-0 right-0 w-max text-right text-gray-50/60">
                  <span>{formState.lighting ?? 0} Lux</span>
                </FieldDescription>
                <Slider
                  value={[formState.lighting ?? 0]}
                  onValueChange={(value) => {
                    const val = Array.isArray(value) ? value[0] : value;
                    handleValueChange("lighting", val as number);
                  }}
                  max={1000}
                  min={0}
                  step={100}
                  className="mt-2 w-full"
                  aria-label="Lighting"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field>
            <Button onClick={clearForm} variant="outline" type="button" size="lg" className="text-gray-50 w-full">
              Clear
            </Button>
          </Field>
        </FieldGroup>
      </div>
    </section>
  );
}
