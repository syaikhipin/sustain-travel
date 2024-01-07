import { SelectableActivity } from "../trip-planner";

type ActivityButtonProps = SelectableActivity & {
  onClick: () => void;
};

const ActivityButton = ({
  name,
  icon,
  onClick,
  isSelected,
}: ActivityButtonProps) => (
  <button
    type="button"
    aria-label={name}
    className={`rounded-lg shadow-md text-secondary font-semibold transition-all px-4 py-2 m-2 hover:scale-105 bg-accent ${
      isSelected ? "opacity-100 scale-105" : "opacity-70 hover:opacity-100"
    }`}
    onClick={onClick}
  >
    <span className="mr-2" aria-hidden>
      {icon}
    </span>
    {name}
  </button>
);

export default ActivityButton;
