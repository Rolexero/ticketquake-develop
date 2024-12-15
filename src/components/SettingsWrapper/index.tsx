import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { settingLinks } from "@/constants/settingLinks";
import LoadingView from "../LoadingView";
import Page from "../page";

export default function SettingsWrapper() {
  return (
    <Page>
      <div className="flex items-start gap-[48px] w-full h-full max-[740px]:flex-col max-[740px]:gap-[30px] max-[740px]:items-stretch">
        <div className="sticky h-full top-[0px] flex flex-col shrink-0">
          <h4 className="text-2xl py-[16px] font-semibold">Settings</h4>

          <div className="mt-[16px] flex flex-col gap-[8px]">
            {settingLinks.map((link) => {
              return (
                <NavLink
                  className={({ isActive }) => {
                    return cn([
                      "flex gap-[8px] items-center py-[4px] font-medium",
                      isActive && "text-primary",
                    ]);
                  }}
                  key={link.url}
                  to={link.url}
                  end={link.exact ?? true}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        <section className="w-full flex-1 mt-[76px]">
          <React.Suspense fallback={<LoadingView loading page />}>
            <Outlet />
          </React.Suspense>
        </section>
      </div>
    </Page>
  );
}
