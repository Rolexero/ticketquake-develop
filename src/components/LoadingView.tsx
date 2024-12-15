import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";

interface Props {
  screen?: boolean;
  page?: boolean;
  modal?: boolean;
  error?: string;
  loading?: boolean;
  onRetry?: VoidFunction;
}
export default function LoadingView({
  screen,
  page,
  modal,
  loading,
  children,
  error,
  onRetry,
}: PropsWithChildren<Props>) {
  if (!loading && !error) return children;

  return (
    <div
      className={cn({
        "w-full h-full flex items-center justify-center": loading || error,
        "w-screen h-screen": screen,
        "min-h-[400px]": page,
        "min-h-[250px]": modal,
      })}
    >
      {loading && <Loader2Icon className="animate-spin" />}

      {!loading && error && (
        <div className="flex flex-col gap-[24px]">
          <p>{error}</p>

          <Button onClick={onRetry}>Retry</Button>
        </div>
      )}
    </div>
  );
}
