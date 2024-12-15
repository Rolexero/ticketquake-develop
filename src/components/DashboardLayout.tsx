import * as React from "react";

import LoadingView from "./LoadingView";
import { Outlet } from "react-router-dom";
import { Input } from "./ui/input";

interface Props {
  sideNav?: React.ReactNode;
  profileDropdown?: JSX.Element;
  themeSelector?: React.ReactNode;
  mobileSideNav?: React.ReactNode;
}

export function DashboardLayout({
  profileDropdown,
  sideNav,
  themeSelector,
  mobileSideNav,
}: Props) {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-[#F0F2F5] font-FiraSans">
      <header className="sticky flex item-center bg-[#FFFFFF] top-0 z-30 h-[90px]">
        <div className="flex items-center justify-between gap-4 bg-transparent px-8 py-auto w-full">
          <div className="flex gap-4 items-center">
            <h6 className="font-semibold text-primary">
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="58"
                src="/logo.svg"
                width="58"
              />
            </h6>

            <Input
              className="w-[300px] !py-6"
              id="email"
              type="email"
              placeholder="Search"
              required
            />
          </div>

          <div className="flex gap-2 items-center">
            {themeSelector}

            {profileDropdown}
          </div>
        </div>
      </header>

      <div className="grow flex lg:h-[calc(100vh-56px)]">
        {/* side nav  */}
        <aside className="hidden bg-white mt-6 lg:flex border-border w-[220px] ml-8 h-[600px] shrink-0 pt-5">
          {sideNav}
        </aside>
        {/* main */}
        <div className="grow w-full overflow-auto pt-6">
          {/* wrap with error boundary */}
          <React.Suspense fallback={<LoadingView loading />}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>

      <footer className="flex-shrink-0 sticky bottom-0 block lg:hidden">
        {mobileSideNav}
      </footer>
    </div>
  );
}
