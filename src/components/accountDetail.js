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
import { Logo } from "src/components/logo";
import {
  FacebookLoginButton,
  TwitterLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";

export const AccountDetailComponent = (props) => {
  const { formik } = props;

  return (
    <Grid
      xs={12}
      lg={8}
      sx={{
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
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
      </Box>
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
              <Typography variant="body2" sx={{ color: "gray" }}>
                Add your personal info
              </Typography>
            </Stack>
            <Stack direction={`vertical`} display={`flex`}>
              <GoogleLoginButton
                // text=''
                style={{
                  color: "grey",
                }}
                text="Sign in with Google"
              ></GoogleLoginButton>
              <AppleLoginButton
                text="Sign in with Apple"
                style={{
                  color: "grey",
                }}
              ></AppleLoginButton>
            </Stack>
            <Divider textAligh="center">
              <Typography variant="body2" sx={{ color: "gray" }}>
                Or with email
              </Typography>
            </Divider>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Grid container spacing={3} mt={2}>
                <Grid item xs={6}>
                  <TextField
                    error={!!(formik.touched.firstName && formik.errors.firsName)}
                    fullWidth
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    label="First Name"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.firstName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    error={!!(formik.touched.lastName && formik.errors.lastName)}
                    fullWidth
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    label="Last Name"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.creatorName && formik.errors.creatorName)}
                    fullWidth
                    helperText={formik.touched.creatorName && formik.errors.creatorName}
                    label="Creator Name"
                    name="creatorName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.creatorName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                    fullWidth
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    label="Phone Number"
                    name="phoneNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="tel"
                    value={formik.values.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                    fullWidth
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    label="Confirm Password"
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.confirmPassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" display={"flex"} alignItems={"center"}>
                    <Checkbox id="terms" name="terms" />
                    <label htmlFor="terms" style={{ cursor: "pointer" }}>
                      I Accept the <NextLink href="/terms">Terms</NextLink>
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
              <Button fullWidth size="large" sx={{ mt: 3 }} type="submit" variant="contained">
                Continue
              </Button>
              <Typography
                variant="body2"
                sx={{ color: "gray", textAlign: "center" }}
                mx={"auto"}
                mt={4}
              >
                Already have an Account? <NextLink href="signin">Sign in</NextLink>
              </Typography>
            </form>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};
