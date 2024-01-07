import { ComponentProps } from "react";

type PickedProps = Pick<
  ComponentProps<"input">,
  "id" | "type" | "value" | "list" | "onChange"
>;

type Props = ComponentProps<"input"> &
  Required<PickedProps> & {
    label: string;
    placeholder: string;
  };

const InputField: React.FC<Props> = ({ label, placeholder, ...props }) => {
  return (
    <>
      <label className="block text-lg font-bold mb-1" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...props}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
