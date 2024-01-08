type Props = {
  type?: "button" | "submit" | "reset";
  buttonType?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  contents: React.ReactNode;
};

const Button: React.FC<Props> = ({
  contents,
  onClick,
  type = "button",
  buttonType,
}) => {
  let buttonClassName =
    "bg-dark-green text-white font-body p-2 border-solid border-dark-green border-4 ";

  switch (buttonType) {
    case "primary":
      buttonClassName +=
        " w-[300px] h-[300px] m-20 rounded-md text-4xl hover:bg-white hover:text-dark-green";

      break;
    case "secondary":
      buttonClassName +=
        " bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-gray-500 hover:border-gray-600";
      break;
    case "danger":
      buttonClassName +=
        " bg-danger text-danger-foreground hover:bg-danger/90 border-2 border-red-500 hover:border-red-600";

      break;
    case "success":
      buttonClassName +=
        " bg-success text-success-foreground hover:bg-success/90 border-2 border-green-500 hover:border-green-600";
      break;
    case "warning":
      buttonClassName +=
        " bg-warning text-warning-foreground hover:bg-warning/90 border-2 border-yellow-500 hover:border-yellow-600";
      break;
    case "info":
      buttonClassName +=
        " bg-info text-info-foreground hover:bg-info/90 border-2 border-blue-500 hover:border-blue-600";
      break;
    case "light":
      buttonClassName +=
        " bg-light text-light-foreground hover:bg-light/90 border-2 border-gray-300 hover:border-gray-400";
      break;
    case "dark":
      buttonClassName +=
        " bg-dark text-dark-foreground hover:bg-dark/90 border-2 border-gray-800 hover:border-gray-900";
      break;
    case "link":
      buttonClassName += " text-link-foreground hover:underline";
      break;
  }

  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {contents}
    </button>
  );
};

export default Button;
