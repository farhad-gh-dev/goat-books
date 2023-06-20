import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useController } from "react-hook-form";

export interface TexInputProps extends Omit<TextFieldProps, "variant"> {
  name: string;
  controller: any;
}

export const TexInput: React.FC<TexInputProps> = ({
  name,
  controller,
  ...rest
}) => {
  const { field } = useController({
    name,
    control: controller,
  });

  return <TextField {...rest} {...field} />;
};
