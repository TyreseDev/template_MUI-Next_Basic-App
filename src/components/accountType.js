import * as React from "react";
import { useCallback, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Unstable_Grid2 as Grid,
  // Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NextLink from "next/link";
import { Logo } from "src/components/logo";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export const AccountTypeComponent = (props) => {
  const { accountType, setAccountType, activeStep, setActiveStep } = props;
  // const [accountType, setAccountType] = useState(0);

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
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h4" sx={{ textAlign: "left" }} mr={"auto"}>
            Choose an account type
          </Typography>
          <Typography variant="h7" sx={{ textAlign: "left", color: "gray" }} mr={"auto"}>
            If you need more info, please visit our{" "}
            <Link
              href="/help"
              style={{
                color: "#2884EF",
                textDecoration: "none",
              }}
            >
              help page
            </Link>
          </Typography>
          <Stack direction={"row"} gap={4} mt={4}>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={3}
              gap={2}
              sx={{
                border: `.5px dashed ${accountType === 0 ? "blue" : "gray"}`,
                borderRadius: "12px",
                cursor: "pointer",
                transition: "background-color .3s ease-in-out",
                backgroundColor: `${accountType === 0 ? "#EEF6FF" : ""}`,
                "&:hover": {
                  backgroundColor: `${accountType === 0 ? "#EEF6FF" : "rgba(0, 0, 0, 0.1)"}`,
                },
              }}
              onClick={() => setAccountType(0)}
            >
              <Box>
                <Stack>
                  {/* <PersonIcon /> */}
                  <img src="/assets/users.svg"></img>
                </Stack>
              </Box>
              <Box>
                <Stack>
                  <Typography sx={{ fontWeight: "bold" }}>Creator</Typography>
                  <Typography sx={{ color: "gray" }}>Sign-up as a creator</Typography>
                </Stack>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={3}
              gap={2}
              sx={{
                border: `.5px dashed ${accountType === 1 ? "blue" : "gray"}`,
                borderRadius: "12px",
                cursor: "pointer",
                transition: "background-color .3s ease-in-out",
                backgroundColor: `${accountType === 1 ? "#EEF6FF" : ""}`,
                "&:hover": {
                  backgroundColor: `${accountType === 1 ? "#EEF6FF" : "rgba(0, 0, 0, 0.1)"}`,
                },
              }}
              onClick={() => setAccountType(1)}
            >
              <Box>
                <Stack>
                  {/* <BusinessCenterIcon /> */}
                  <img src="/assets/briefcase.svg"></img>
                </Stack>
              </Box>
              <Box>
                <Stack>
                  <Typography sx={{ fontWeight: "bold" }}>Agency</Typography>
                  <Typography sx={{ color: "gray" }}>Sign-up as an agency</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Button
            size="large"
            sx={{
              mt: 3,
              ml: "auto",
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
            onClick={() => setActiveStep(1)}
          >
            Continue
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
};
