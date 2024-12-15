import { NavLink } from "react-router-dom";
import { appLinks } from "@/constants/appLinks";
import { cn } from "@/lib/utils";

export default function MobileSideNav() {
  return (
    <div className="w-full h-full flex border-t px-[8px] bg-muted">
      {appLinks.map((appLink, index) => (
        <NavLink
          key={appLink.url + index}
          to={appLink.url}
          className={({ isActive }) => {
            return cn([
              "w-[89.75px] py-[15px] h-full flex-shrink-0 flex-grow flex flex-col items-center justify-center text-base text-black32",
              isActive && "text-primary font-semibold",
            ]);
          }}
        >
          <appLink.icon className="h-[24px] w-[24px] mb-[4px]" />
          {appLink.label}
        </NavLink>
      ))}
    </div>
  );
}
