import classNames from "classnames";

export function Card(props: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={classNames(
        "drop-shadow",
        "rounded-xl",
        "border",
        "border-solid",
        "p-3",
        "border-[rgba(255,255,255,0.13)]",
        {
          "text-foreground-disabled": props.disabled,
          "bg-card-pattern": !props.disabled
        },
        props.className
      )}
      onClick={() => !props.disabled && props.onClick && props.onClick()}
    >
      {props.children}
    </div>
  );
}
