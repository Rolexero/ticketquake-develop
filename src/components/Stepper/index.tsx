interface Props extends React.PropsWithChildren<{}> {
  step: number;
}

export default function Stepper({ step, children }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium">
      <div className="flex md:flex-col py-4 overflow-x-auto md:overscroll-x-none whitespace-nowrap md:whitespace-normal gap-4 w-full md:w-[200px]">
        <StepItem text="Event details" checked={false} active={step === 0} />

        <StepItem text="Ticket details" checked={false} active={step === 1} />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}

interface StepProps {
  checked: boolean;
  text: string;
  active?: boolean;
}

const StepItem = (props: StepProps) => {
  const { checked, text, active } = props;

  return (
    <div className="flex items-center gap-[5px]">
      <div className="flex flex-col items-center mt-[2px] after:hidden after:w-0 after:h-8 after:my-2.5 after:border after:content-['']">
        <div
          className={`h-[16px] w-[16px] overflow-hidden rounded-full border divide-solid ${
            active ? "border-primary" : "border-muted-foreground"
          } ${checked ? "bg-primary" : "bg-transparent"}`}
        ></div>
      </div>

      <p>{text}</p>
    </div>
  );
};
