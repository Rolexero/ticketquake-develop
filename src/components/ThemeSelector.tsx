import { Button } from "@/components/ui/button";

const Val = [
  { icon: "/Bell.svg", label: "Notification" },
  { icon: "/bask.svg", label: "Carts" },
  { icon: "/create.svg", label: "Create" },
];

export function AppThemeToggle() {
  return (
    <div className="flex items-center gap-6 justify-center">
      <Button className="text-white px-6 bg-[#0D6EFD] font-poppins">
        Subscribe
      </Button>

      <div className="flex gap-3 items-center">
        {Val.map((res) => {
          return (
            <div className="flex flex-col cursor-pointer gap-1 items-center justify-center">
              <img
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="18"
                // @ts-ignore
                src={res.icon}
                width="18"
              />
              <p className="font-poppins  text-[14px] text-[#647995]">
                {res.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
