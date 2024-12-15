import {
  BriefcaseMedical,
  Building2,
  GraduationCap,
  Luggage,
  Newspaper,
  Package,
  Plane,
  TrafficCone,
} from "lucide-react";

export const appLinks = [
  {
    url: "/dashboard",
    label: "Activites",
    icon: TrafficCone,
    exact: false,
  },
  {
    url: "/",
    label: "Hotels",
    icon: Building2,
    exact: false,
  },
  {
    url: "/",
    label: "Flights",
    icon: Plane,
    exact: false,
  },
  {
    url: "/",
    label: "Study",
    icon: GraduationCap,
    exact: false,
  },
  {
    url: "/",
    label: "Visa",
    icon: Newspaper,
    exact: false,
  },
  {
    url: "/",
    label: "Immigration",
    icon: Luggage,
    exact: false,
  },
  {
    url: "/",
    label: "Medical",
    icon: BriefcaseMedical,
    exact: false,
  },
  {
    url: "/",
    label: "Vacation package",
    icon: Package,
    exact: false,
  },
];
