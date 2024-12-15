import { NavLink } from "react-router-dom";
import { appLinks } from "@/constants/appLinks";
import { cn } from "@/lib/utils";

export default function dashboardSideNav() {
  return (
    <nav className="w-full h-full flex flex-col pt-[8px] pb-[24px] text-base">
      <ul className="flex flex-col gap-4">
        {appLinks.map((appLink, index) => (
          <li key={appLink.label + index}>
            <NavLink
              to={appLink.url}
              className={({ isActive }) => {
                return cn([
                  "flex gap-[8px] items-center px-6 text-[#647995]  py-[8px] mx-2 font-medium rounded-[6px]",
                  isActive && "bg-[#0D6EFD] text-white",
                ]);
              }}
            >
              <appLink.icon className="h-5 w-5" />
              <span>{appLink.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
