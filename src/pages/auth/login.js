import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useFormik } from "formik";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useCallback, useState } from "react";
import { Logo } from "src/components/logo";
import { AccountDetailComponent } from "src/components/accountDetail";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import * as Yup from "yup";
import { AccountTypeComponent } from "src/components/accountType";
import { styled } from "@mui/material/styles";
// import backgroundImage from '/assets/Left.jpg';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState("email");
  const [accountType, setAccountType] = useState(0);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      creatorName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push("/dashboard");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const StyleStepConnectorLine = styled("span")(() => ({
    "& .MuiStepConnector-line": {
      // borderLeftStyle: "dashed",
      borderLeft: "1px dashed #FFFFFF4D",
      marginTop: "-13px",
      height: "40px",
      marginBottom: "-13px",
    },
  }));
  const QontoStepLabelRoot = styled("div")(() => ({
    "& .title": {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "20px",
      height: "20px",
      color: "#F9F9F9",
      margin: "10px 0",
    },
    "& .description": {
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "14px",
      height: "14px",
      color: "#FFFFFF",
      opacity: "0.5",
      margin: "10px 0",
    },
  }));

  const steps = [
    {
      label: (
        <QontoStepLabelRoot>
          <p className="title">Account Type</p>
          <p className="description">Select your account type</p>
        </QontoStepLabelRoot>
      ),
    },
    {
      label: (
        <QontoStepLabelRoot>
          <p className="title">Account Details</p>
          <p className="description">Add your personal info</p>
        </QontoStepLabelRoot>
      ),
    },
    {
      label: (
        <QontoStepLabelRoot>
          <p className="title">Creator Info</p>
          <p className="description">Setup your business details</p>
        </QontoStepLabelRoot>
      ),
    },
    {
      label: (
        <QontoStepLabelRoot>
          <p className="title">Completed</p>
          <p className="description">Your account is created</p>
        </QontoStepLabelRoot>
      ),
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const QontoStepIconRoot = styled("div")(({ active }) => ({
    display: "flex",
    height: 22,
    alignItems: "center",
    width: "46px",
    height: "46px",
    "& .MuiIconButton-root": {
      width: "100%",
      height: "100%",
      borderRadius: "9px",
      ...(!active && { border: "1px dashed #FFFFFF4D" }),
      marginLeft: "-10px",
      color: "white",
      fontSize: "18px",
      ...(active && { background: "#50CD89" }),
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className, icon } = props;
    console.log(props);

    return (
      <QontoStepIconRoot active={active} icon={icon}>
        <IconButton>{icon}</IconButton>
      </QontoStepIconRoot>
    );
  }

  return (
    <>
      <Head>
        <title>Login | Devias Kit</title>
      </Head>
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={0}
          sm={0}
          md={4}
          lg={4}
          sx={{
            display: { lg: "flex", md: "flex", xs: "none", sm: "none" },
            alignItems: "center",
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            background: `url("/assets/left.jpg")`,
            padding: "20px",

            color: "white",
            flexDirection: "column",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ marginTop: "120px" }}>
            <img
              alt=""
              src="/assets/logo.svg"
              style={{ marginBottom: "120px" }}
            />
            <StyleStepConnectorLine>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </StyleStepConnectorLine>
          </Box>
          <div
            style={{
              display: "flex",
              marginTop: "auto",
              marginBottom: "15px",
              gap: "40px",
              color: "#50CD89",
            }}
          >
            <div>Terms</div>
            <div>Plans</div>
            <div>Contact Us</div>
          </div>
        </Grid>
        {activeStep === 0 ? (
          <AccountTypeComponent
            accountType={accountType}
            setAccountType={setAccountType}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ) : (
          <AccountDetailComponent formik={formik} />
        )}
      </Grid>
      {/* <Button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Skip
      </Button> */}
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
