import { useLocation } from "react-router-dom";
import { PropsWithChildren, useState } from "react";

import Tabs from "@/components/ui/tabs";
import { stripLeadingSlash } from "@/lib/url";

interface Links {
  id: string;
  content: string;
  url?: string;
}

export interface Props {
  links: Links[];
}

export default function ProductPageTabs(props: PropsWithChildren<Props>) {
  const { links, children } = props;
  const { pathname } = useLocation();
  const param = pathname.split("/");

  const [activeTab, setActiveTab] = useState(() =>
    stripLeadingSlash(pathname.split(param[1] ?? "").at(-1)!)
  );

  return (
    <Tabs
      className="mt-2 md:mt-4 w-full sm:w-auto mb-4"
      onTabChanged={setActiveTab}
      activeTab={activeTab}
      tabs={links}
    >
      {children}
    </Tabs>
  );
}
