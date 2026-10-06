export const APP_ROUTES = {
  public: {
    auth: "/auth",
  },
  private: {
    dashboard: {
      index: "/dashboard",
      analytics: {
        index: "/dashboard/analytics",
        energy: "/dashboard/analytics/energy",
        water: "/dashboard/analytics/water",
        airFlow: "/dashboard/analytics/air-flow",
        vibration: "/dashboard/analytics/vibration",
        comfort: "/dashboard/analytics/comfort",
        carbon: "/dashboard/analytics/carbon",
      },
      monitoring: "/dashboard/monitoring",
      simulation: "/dashboard/simulation",
    },
  },
};

export const MAIN_NAVIGATION = [
  { href: APP_ROUTES.private.dashboard.monitoring, label: "Monitoring", key: "monitoring" },
  { href: APP_ROUTES.private.dashboard.analytics.energy + "?selectedFloor=1", label: "Analytics", key: "analytics" },
  { href: APP_ROUTES.private.dashboard.simulation, label: "Simulation", key: "simulation" },
];

export const TAB_NAVIGATION = [
  { href: APP_ROUTES.private.dashboard.analytics.energy, label: "Energy", key: "energy" },
  { href: APP_ROUTES.private.dashboard.analytics.water, label: "Water", key: "water" },
  { href: APP_ROUTES.private.dashboard.analytics.airFlow, label: "Air Flow", key: "air-flow" },
  { href: APP_ROUTES.private.dashboard.analytics.vibration, label: "Vibration", key: "vibration" },
  { href: APP_ROUTES.private.dashboard.analytics.comfort, label: "Comfort", key: "comfort" },
  { href: APP_ROUTES.private.dashboard.analytics.carbon, label: "Carbon", key: "carbon" },
];
