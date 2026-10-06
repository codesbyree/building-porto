"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export function SimulationForm() {
  const [humidity, setHumidity] = useState(0);
  const [lighting, setLighting] = useState(0);

  return (
    <section className="px-4 pb-4">
      <form className="bg-gray-950/60 outline outline-gray-950/80 rounded-md p-2">
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-gray-50">Simulation Parameters</FieldLegend>
            <FieldDescription className="text-gray-50/70">All field are required for the simulation to run properly</FieldDescription>

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
                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="temprature" className="text-gray-50">
                  Room Temprature (°C)
                </FieldLabel>
                <Input
                  id="temprature"
                  placeholder="23.8"
                  required
                  type="text"
                  inputMode="numeric"
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
                  inputMode="numeric"

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
                  inputMode="numeric"

                  className="bg-gray-950/50 dark:bg-gray-950/60 h-10 p-4! text-sm! placeholder:text-sm! border-none! outline! outline-gray-950/80 focus-visible:outline-primary! text-gray-50! placeholder:text-gray-50/70! rounded-md!"
                />
                <FieldDescription className="text-gray-50/60">Decimal value is allowed</FieldDescription>
              </Field>

              <Field className="relative">
                <FieldLabel htmlFor="humidity" className="text-gray-50">
                  Humidity
                </FieldLabel>
                <FieldDescription className="absolute top-0 right-0 w-max text-right text-gray-50/60">
                  <span>{humidity}% RH</span>
                </FieldDescription>
                <Slider value={humidity} onValueChange={(value) => setHumidity(value as number)} max={100} min={0} step={1} className="mt-2 w-full" aria-label="Humidity" />
              </Field>

              <Field className="relative">
                <FieldLabel htmlFor="lighting" className="text-gray-50">
                  Lighting
                </FieldLabel>
                <FieldDescription className="absolute top-0 right-0 w-max text-right text-gray-50/60">
                  <span>{lighting} Lux</span>
                </FieldDescription>
                <Slider value={lighting} onValueChange={(value) => setLighting(value as number)} max={1000} min={0} step={100} className="mt-2 w-full" aria-label="Humidity" />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button type="submit" size="lg">
              Run Simulation
            </Button>
            <Button variant="outline" type="button" size="lg" className="text-gray-50">
              Clear
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </section>
  );
}
