import * as React from "react";
import { useCallback, useState } from "react";

import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Unstable_Grid2 as Grid,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Checkbox,
  Divider,
} from "@mui/material";
import NextLink from "next/link";
// import { Logo } from "src/components/logo";
import {
  FacebookLoginButton,
  TwitterLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: 40,
  },
  "& .MuiInputBase-input": {
    padding: "10px 12px 8px 0",
    marginLeft: 10,
    height: 40,
  },
  "& .MuiInputBase-input::placeholder": {
    color: "grey",
  },
}));
export const AccountDetailComponent = (props) => {
  const { formik } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={8}
      lg={8}
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* <Box
        component="header"
        sx={{
          left: 0,
          p: 3,
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: "inline-flex",
            height: 32,
            width: 32,
          }}
        >
          <Logo />
        </Box>
      </Box> */}
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="h4">Account Details</Typography>
              <Typography variant="body3" sx={{ color: "gray" }}>
                Add your personal info
              </Typography>
            </Stack>
            <Stack
              direction={`vertical`}
              display={`flex`}
              sx={{
                gap: "10px",
              }}
            >
              <Button
                style={{
                  color: "grey",
                  boxShadow: "0px 0px 0px 1px #E1E3EA",
                  borderRadius: 5,
                  fontSize: 16,
                  height: 40,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",

                  // gap: "10px"
                }}
              >
                <img src="/assets/Google.svg"></img>
                <div style={{ textAlgin: "center", width: "100%" }}>
                  Sign in with Google
                </div>
              </Button>
              <Button
                style={{
                  color: "grey",
                  boxShadow: "0px 0px 0px 1px #E1E3EA",
                  borderRadius: 5,
                  fontSize: 16,
                  height: 40,
                  display: "flex",
                  width: "100%",

                  // gap: "10px"
                }}
              >
                <img
                  src="/assets/apple.svg"
                  style={{ width: 25, height: 25 }}
                ></img>
                <div style={{ textAlgin: "center", width: "100%" }}>
                  Sign in with Apple
                </div>
              </Button>
              {/* <GoogleLoginButton
                // text=''
                style={{
                  color: "grey",
                  boxShadow: "0px 0px 0px 1px #E1E3EA",
                  borderRadius: 5,
                  fontSize: 16,
                  height: 40,
                  display: "inline-flex",
                  justifyContent: "center",
                  gap: "100px",

                  // gap: "10px"
                }}
                text="Sign in with Google"
              ></GoogleLoginButton>
              <AppleLoginButton
                text="Sign in with Apple"
                style={{
                  color: "grey",
                  boxShadow: "0px 0px 0px 1px #E1E3EA",
                  borderRadius: 5,
                  fontSize: 16,
                  height: 40,
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              ></AppleLoginButton> */}
            </Stack>
            <Divider textAlign="center" sx={{ paddingTop: 3 }}>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Or with email
              </Typography>
            </Divider>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Grid
                container
                spacing={3}
                mt={2}
                // sx={{
                //   '& .MuiTextField-root': {  // Apply styles to all MUI TextFields
                //     m: 1,
                //     // width: '25ch',
                //     height: 38
                //   },
                // }}
              >
                <Grid item xs={6}>
                  <StyledTextField
                    error={
                      !!(formik.touched.firstName && formik.errors.firsName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    placeholder="First Name"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.firstName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StyledTextField
                    error={
                      !!(formik.touched.lastName && formik.errors.lastName)
                    }
                    fullWidth
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                    placeholder="Last Name"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    error={
                      !!(
                        formik.touched.creatorName && formik.errors.creatorName
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.creatorName && formik.errors.creatorName
                    }
                    placeholder="Creator Name"
                    name="creatorName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.creatorName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    placeholder="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    error={
                      !!(
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="tel"
                    value={formik.values.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    placeholder="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <img src="/assets/eye.svg"></img>
                            ) : (
                              <img src="/assets/eye-slash.svg"></img>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    error={
                      !!(
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      )
                    }
                    fullWidth
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type={showConfirmPassword ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <img src="/assets/eye.svg"></img>
                            ) : (
                              <img src="/assets/eye-slash.svg"></img>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" display={"flex"} alignItems={"center"}>
                    <Checkbox id="terms" name="terms" />
                    <label
                      htmlFor="terms"
                      style={{ cursor: "pointer", fontSize: 14 }}
                    >
                      I Accept the{" "}
                      <NextLink
                        href="/terms"
                        style={{
                          color: "#2884EF",
                          textDecoration: "none",
                        }}
                      >
                        Terms
                      </NextLink>
                    </label>
                  </Stack>
                </Grid>
              </Grid>
              {/* <FormHelperText sx={{ mt: 1 }}>
                                Optionally you can skip.
                            </FormHelperText> */}
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#3E97FF",
                  "&:hover": {
                    // hover styles
                    backgroundColor: "#0097FF",
                    color: "white",
                  },
                  height: 40,
                }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
              <Typography
                variant="body2"
                sx={{ color: "gray", textAlign: "center" }}
                mx={"auto"}
                mt={4}
              >
                Already have an Account?{" "}
                <NextLink
                  href="signin"
                  style={{
                    color: "#2884EF",
                    textDecoration: "none",
                  }}
                >
                  Sign in
                </NextLink>
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};
