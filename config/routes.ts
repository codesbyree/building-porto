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
      monitoring: {
        index: "/dashboard/monitoring",
        basement1: "/dashboard/monitoring/basement?level=B1",
        floor1: "/dashboard/monitoring/floor?level=1",
        floor2: "/dashboard/monitoring/floor?level=2",
        floor3: "/dashboard/monitoring/floor?level=3",
        floor4: "/dashboard/monitoring/floor?level=4",
        floor5: "/dashboard/monitoring/floor?level=5",
        floor6: "/dashboard/monitoring/floor?level=6",
        floor7: "/dashboard/monitoring/floor?level=7",
      },
      simulation: "/dashboard/simulation",
    },
  },
};

export const MAIN_NAVIGATION = [
  { href: APP_ROUTES.private.dashboard.monitoring.index, label: "Monitoring", key: "monitoring" },
  { href: APP_ROUTES.private.dashboard.analytics.energy + "?selectedFloor=4", label: "Analytics", key: "analytics" },
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

export const FLOOR_NAVIGATION = [
  { href: APP_ROUTES.private.dashboard.monitoring.basement1, label: "B1", key: "B1" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor1, label: "1", key: "1" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor2, label: "2", key: "2" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor3, label: "3", key: "3" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor4, label: "4", key: "4" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor5, label: "5", key: "5" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor6, label: "6", key: "6" },
  { href: APP_ROUTES.private.dashboard.monitoring.floor7, label: "7", key: "7" },
];
