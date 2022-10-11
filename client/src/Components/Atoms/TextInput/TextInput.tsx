import React from "react";
import { StyledTextInput, Input, Label } from "./TextInput.styled";

export type Props = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

const TextInput: React.FC<Props> = ({
  label,
  name,
  value,
  onChange = (e) => console.log(e.target.value),
  ref,
  ...props
}) => {
  return (
    <StyledTextInput hasValue={value !== ""}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </StyledTextInput>
  );
};

export default TextInput;
