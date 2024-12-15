import { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { isString } from "@/lib/strings";

type PagebreadCrumb = {
  onAction?: () => void;
  url?: string;
};

interface Props {
  className?: string;
  title?: ReactNode;
  breadCrumbs?: PagebreadCrumb;
  actions?: ReactNode;
}
export default function Page({
  children,
  className,
  breadCrumbs,
  actions,
  title,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "flex flex-col py-4 bg-white  max-w-full w-[1300px] mx-auto !px-4",
        {
          className,
        }
      )}
    >
      {!!(title || breadCrumbs || actions) && (
        <div className="flex flex-col py-[16px] sm:flex-row">
          <div className="grow flex items-center gap-[8px]">
            {breadCrumbs && (
              <Button
                variant="outline"
                size="icon"
                asChild={!!breadCrumbs.url}
                onClick={breadCrumbs.onAction}
                className="shrink-0"
              >
                {breadCrumbs.url ? (
                  <Link to={breadCrumbs.url}>
                    <ArrowLeftIcon size="18px" />
                  </Link>
                ) : (
                  <ArrowLeftIcon size="18px" />
                )}
              </Button>
            )}

            {!!title && (
              <div className="grow flex flex-col gap-[2px]">
                {isString(title) ? (
                  <h4 className="text-2xl font-semibold">{title}</h4>
                ) : (
                  title
                )}
              </div>
            )}
          </div>

          {actions && <div className="flex gap-[8px]">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
