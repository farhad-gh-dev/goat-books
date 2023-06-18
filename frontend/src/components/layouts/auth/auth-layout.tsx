import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

// import AuthBackgroundImage from "@/assets/auth-bg.jpg";
import AuthBackgroundImage from "@/assets/sign-in-bg.jpg";
import LogoImage from "@/assets/logo-dark-64.png";

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box sx={{ height: "100vh", p: "20px" }}>
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid xs={4}>
          <Box
            sx={{
              height: "100%",
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  width: "100%",
                  gap: 2,
                  mt: 3,
                  mb: 5,
                }}
              >
                <img
                  alt="logo"
                  src={LogoImage}
                  style={{ width: "48px", height: "48px" }}
                />
                <Typography variant="h5" sx={{ fontWeight: "medium" }}>
                  Goat Books
                </Typography>
              </Box>
              {children}
            </Box>
          </Box>
        </Grid>
        <Grid xs={8}>
          <Box
            sx={{
              height: "100%",
              px: "100px",
              backgroundImage: `url(${AuthBackgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
          >
            <Box
              display="flex"
              mb="60px"
              sx={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}
            >
              <Typography variant="h2" color="tertiary.main">
                Inspire{"\u00A0"}
              </Typography>
              <Typography variant="h2">And Be{"\u00A0"}</Typography>
              <Typography variant="h2" color="tertiary.main">
                Inspired
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "700px",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}
              >
                Step into a realm where words have the power to inspire,
                motivate <br /> and stir emotions. Join us in our journey of
                sharing <br /> wisdom one quote at a time.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
