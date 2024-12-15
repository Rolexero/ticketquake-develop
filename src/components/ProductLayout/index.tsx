import React from "react";
import Page from "@/components/page";
import { Outlet } from "react-router-dom";
import LoadingView from "@/components/LoadingView";
import ProductPageTabs from "./components/ProductPageTabs";

interface Props {
  title?: string;
  links: {
    id: string;
    content: string;
    url?: string;
  }[];
}

export default function TabLayout(props: Props) {
  const { title, links } = props;
  return (
    <Page title={title}>
      <ProductPageTabs links={links}>
        <React.Suspense fallback={<LoadingView page loading />}>
          <Outlet />
        </React.Suspense>
      </ProductPageTabs>
    </Page>
  );
}
