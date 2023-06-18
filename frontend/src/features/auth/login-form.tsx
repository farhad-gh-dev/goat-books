import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
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

      <TextField
        required
        label="email"
        sx={{
          width: "100%",
          mb: 4,
        }}
        // error={true}
      />
      <TextField
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
        // error={true}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          py: 1.5,
          fontSize: "1rem",
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};
