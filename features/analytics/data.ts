export type AnalyticsCategorySlug = "energy" | "water" | "air-flow" | "vibration" | "comfort" | "carbon";

export interface AnalyticsColumn {
  key: string;
  label: string;
  tone?: "amber" | "green" | "cyan" | "muted";
}

export type AnalyticsRow = Record<string, string>;

export interface AnalyticsCategory {
  slug: AnalyticsCategorySlug;
  label: string;
  title: string;
  primary: {
    label: string;
    value: string;
    unit?: string;
    trend: string;
  };
  secondary: {
    label: string;
    zone: string;
    value: string;
    percent: number;
  };
  chartLabel: string;
  columns: AnalyticsColumn[];
  rows: AnalyticsRow[];
}

export const analyticsCategories: AnalyticsCategory[] = [
  {
    slug: "energy",
    label: "Energy",
    title: "9th Floor Energy Statistic",
    primary: {
      label: "9th Floor Consumption Today",
      value: "220.0",
      unit: "kWh",
      trend: "-12.4% vs yesterday",
    },
    secondary: {
      label: "Peak Load Zone",
      zone: "9th Floor - Chiller Zone Ch-03",
      value: "2.4 kWh",
      percent: 62,
    },
    chartLabel: "9th Floor Hourly Energy Load (00:00 - 24:00)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "source", label: "Zone Source" },
      { key: "energy", label: "Energy", tone: "amber" },
      { key: "cost", label: "Cost", tone: "green" },
      { key: "hours", label: "Total Hours" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:28", source: "9th Floor - Chiller Ch-03 (HVAC)", energy: "220.0 kWh", cost: "Rp 245.000", hours: "8.5 Hrs" },
      { date: "05/10/2026", time: "15:22:28", source: "9th Floor - Smart LED Workstations Hub", energy: "58.2 kWh", cost: "Rp 98.500", hours: "9.2 Hrs" },
      { date: "05/10/2026", time: "14:55:28", source: "9th Floor - Innovation Lab & Server HVAC", energy: "85.0 kWh", cost: "Rp 140.000", hours: "24.0 Hrs" },
      { date: "05/10/2026", time: "14:05:28", source: "9th Floor - Executive Boardroom AHU", energy: "45.4 kWh", cost: "Rp 78.000", hours: "7.0 Hrs" },
      { date: "05/10/2026", time: "13:00:28", source: "9th Floor - Smart Solar Grid Feed", energy: "110.0 kWh", cost: "Rp 0 (Solar)", hours: "6.5 Hrs" },
      { date: "04/10/2026", time: "15:38:28", source: "9th Floor - Chiller Ch-03 (HVAC)", energy: "212.6 kWh", cost: "Rp 236.000", hours: "8.0 Hrs" },
      { date: "04/10/2026", time: "15:22:28", source: "9th Floor - Smart LED Workstations Hub", energy: "55.0 kWh", cost: "Rp 93.000", hours: "9.0 Hrs" },
    ],
  },
  {
    slug: "water",
    label: "Water",
    title: "9th Floor Water Statistic",
    primary: {
      label: "9th Floor Water Flow Today",
      value: "840",
      unit: "Liters",
      trend: "-8.1% vs average",
    },
    secondary: {
      label: "Main Water Node",
      zone: "9th Floor (Smart Pantry Bar)",
      value: "520 L",
      percent: 48,
    },
    chartLabel: "9th Floor Hourly Water Flow (L/hr)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "node", label: "Utility Node" },
      { key: "volume", label: "Volume", tone: "amber" },
      { key: "ph", label: "Quality pH", tone: "green" },
      { key: "hours", label: "Total Hours" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:37", node: "9th Floor - Pantry Hydro Node", volume: "420 L", ph: "7.4 pH (Safe)", hours: "6.0 Hrs" },
      { date: "05/10/2026", time: "15:22:37", node: "9th Floor - Executive Washroom Flow", volume: "240 L", ph: "7.4 pH (Safe)", hours: "8.0 Hrs" },
      { date: "05/10/2026", time: "14:55:37", node: "9th Floor - Filtered Drinking Dispenser", volume: "180 L", ph: "7.5 pH (Potable)", hours: "8.5 Hrs" },
    ],
  },
  {
    slug: "air-flow",
    label: "Air Flow",
    title: "9th Floor Airflow & HVAC",
    primary: {
      label: "Average 9th Floor Airflow",
      value: "23.5°C / 54%",
      unit: "m/s",
      trend: "ASHRAE Standard Compliant",
    },
    secondary: {
      label: "Primary Air Exchange Zone",
      zone: "9th Floor (Executive Boardroom)",
      value: "ISPU 28 (Baik)",
      percent: 72,
    },
    chartLabel: "9th Floor PM2.5 Cleanliness (µg/m³)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "terminal", label: "Air Terminal" },
      { key: "rate", label: "Airflow Rate", tone: "amber" },
      { key: "hepa", label: "HEPA Status", tone: "green" },
      { key: "hours", label: "Total Hours" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:42", terminal: "9th Floor - VAV Terminal V-09", rate: "23.5°C", hepa: "98% Clean (Grade A)", hours: "8.0 Hrs" },
      { date: "05/10/2026", time: "15:22:42", terminal: "9th Floor - Open Workstation AHU", rate: "0.22 m/s", hepa: "99% Clean (Grade A)", hours: "9.0 Hrs" },
      { date: "05/10/2026", time: "14:55:42", terminal: "9th Floor - Boardroom Fresh Air Damper", rate: "0.25 m/s", hepa: "99% Clean (HEPA Active)", hours: "7.5 Hrs" },
      { date: "05/10/2026", time: "14:05:42", terminal: "9th Floor - Server Lab Pressurization", rate: "0.32 m/s", hepa: "100% Clean (Ultra Air)", hours: "24.0 Hrs" },
    ],
  },
  {
    slug: "vibration",
    label: "Vibration",
    title: "9th Floor Structural Stability",
    primary: {
      label: "9th Floor Stability Index",
      value: "0.42",
      unit: "Score",
      trend: "Stable Seismic Grade I",
    },
    secondary: {
      label: "Elevator Core Sensor",
      zone: "9th Floor Lift Core Hub",
      value: "Chiller Ch-03 (0.38 mm/s)",
      percent: 20,
    },
    chartLabel: "9th Floor Acoustic Spectrum (dB)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "sensor", label: "Sensor Node" },
      { key: "peak", label: "Vibration Peak", tone: "amber" },
      { key: "noise", label: "Noise (dB)", tone: "green" },
      { key: "hours", label: "Total Hours" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:48", sensor: "9th Floor - Elevator Core Shaft", peak: "0.12 mm/s", noise: "38 dB (Quiet)", hours: "10.0 Hrs" },
      { date: "05/10/2026", time: "15:22:48", sensor: "9th Floor - Server Rack Vibration Node", peak: "0.18 mm/s", noise: "45 dB (Normal)", hours: "8.0 Hrs" },
      { date: "05/10/2026", time: "14:55:48", sensor: "9th Floor - HVAC Acoustic Sensor", peak: "0.22 mm/s", noise: "42 dB (Controlled)", hours: "12.0 Hrs" },
    ],
  },
  {
    slug: "comfort",
    label: "Comfort",
    title: "9th Floor Comfort Index",
    primary: {
      label: "9th Floor Comfort Rating",
      value: "PMV 0.00",
      unit: "% Optimal",
      trend: "PMV: -0.2 (Ideal)",
    },
    secondary: {
      label: "Highest Comfort Zone",
      zone: "9th Floor (Executive Boardroom)",
      value: "Occupancy: 0 Persons",
      percent: 100,
    },
    chartLabel: "9th Floor Thermal Satisfaction PPD (%)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "zone", label: "Zone" },
      { key: "temperature", label: "Temperature", tone: "amber" },
      { key: "humidity", label: "Humidity" },
      { key: "status", label: "Comfort Status", tone: "green" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:55", zone: "9th Floor - Boardroom A", temperature: "22.4°C", humidity: "52%", status: "99% Optimal Good" },
      { date: "05/10/2026", time: "15:22:55", zone: "9th Floor - Open Workstation Hub", temperature: "23.0°C", humidity: "50%", status: "98% Optimal Good" },
      { date: "05/10/2026", time: "14:55:55", zone: "9th Floor - Breakout Lounge", temperature: "23.4°C", humidity: "53%", status: "97% Good" },
      { date: "05/10/2026", time: "14:05:55", zone: "9th Floor - Manager Suite", temperature: "22.8°C", humidity: "51%", status: "99% Optimal Good" },
    ],
  },
  {
    slug: "carbon",
    label: "Carbon",
    title: "9th Floor Green Carbon ESG",
    primary: {
      label: "9th Floor Carbon Footprint",
      value: "171.6",
      unit: "Ton CO2",
      trend: "-24.5% vs Baseline",
    },
    secondary: {
      label: "LED Efficiency Contribution",
      zone: "9th Floor (Smart Automated Grid)",
      value: "70.4 kgCO2e Saved",
      percent: 80,
    },
    chartLabel: "9th Floor CO2 Avoided (kg CO2)",
    columns: [
      { key: "date", label: "Date" },
      { key: "time", label: "Time", tone: "cyan" },
      { key: "source", label: "Green Source" },
      { key: "offset", label: "Energy Offset", tone: "amber" },
      { key: "avoided", label: "CO2 Avoided", tone: "green" },
      { key: "rating", label: "ESG Rating" },
    ],
    rows: [
      { date: "05/10/2026", time: "15:38:59", source: "9th Floor - Automated Smart LED Grid", offset: "72 kWh", avoided: "58 kg CO2", rating: "Grade A+ Net Zero" },
      { date: "05/10/2026", time: "15:22:59", source: "9th Floor - Eco Chiller Variable Speed", offset: "45 kWh", avoided: "36 kg CO2", rating: "Grade A+ Eco" },
      { date: "05/10/2026", time: "14:55:59", source: "9th Floor - Daylight Harvesting Sensor", offset: "20 kWh", avoided: "16 kg CO2", rating: "Grade A Circular" },
    ],
  },
];

export function getAnalyticsCategory(slug: string) {
  return analyticsCategories.find((category) => category.slug === slug);
}
