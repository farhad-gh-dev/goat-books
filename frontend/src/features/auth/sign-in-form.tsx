import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { TexInput } from "@/components/text-input";

import { signInFormSchema } from "./entities";
import type { SignInFormValues } from "./types";
import { signInFormDefaultValues } from "./constants";
import { useSignIn } from "./api/sign-in";

export const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const signInMutation = useSignIn({});

  const { formState, control, handleSubmit } = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInFormDefaultValues,
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleFromSubmit: SubmitHandler<SignInFormValues> = async (values) => {
    signInMutation.mutateAsync(
      { data: values },
      {
        onSuccess: () =>
          toast("You singed in successfully.", { type: "success" }),
        onError: (error) =>
          toast(
            (error.response?.data as any).message || "Something went wrong.",
            {
              type: "error",
            }
          ),
      }
    );
  };

  return (
    <Box
      sx={{
        width: "400px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", fontWeight: "medium", mb: 1 }}
      >
        welcome back
      </Typography>
      <Typography sx={{ textTransform: "capitalize", mb: 4 }}>
        you don't have an account?{" "}
        <Link
          component={RouterLink}
          to="/auth/sign-up"
          sx={{
            textTransform: "capitalize",
            fontWeight: "medium",
            textDecoration: "none",
          }}
        >
          create one here.
        </Link>
      </Typography>

      <form>
        <TexInput
          name="email"
          controller={control}
          required
          label="Email"
          sx={{
            width: "100%",
            mb: 4,
          }}
          error={!!formState.errors.email?.message}
          helperText={formState.errors.email?.message}
        />

        <TexInput
          name="password"
          controller={control}
          required
          type={showPassword ? "text" : "password"}
          label="password"
          sx={{
            width: "100%",
            mb: 10,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => handleMouseDownPassword(e)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!formState.errors.password?.message}
          helperText={formState.errors.password?.message}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            py: 1.5,
            fontSize: "1rem",
          }}
          onClick={handleSubmit(handleFromSubmit)}
          disabled={signInMutation.isLoading}
        >
          {signInMutation.isLoading ? "Loading ..." : "Sign In"}
        </Button>
      </form>
    </Box>
  );
};
