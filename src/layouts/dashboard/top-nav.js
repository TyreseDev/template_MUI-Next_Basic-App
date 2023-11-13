import PropTypes from "prop-types";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { usePopover } from "src/hooks/use-popover";
import { AccountPopover } from "./account-popover";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 84;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const accountPopover = usePopover();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      fontSize: "10px",
      backgroundColor: "#F1416C",
    },
  }));

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: "sticky",
          left: 0,
          top: 0,
          width: {
            lg: "100%",
          },
          height: TOP_NAV_HEIGHT,
          lineHeight: TOP_NAV_HEIGHT,
          // zIndex: (theme) => theme.zIndex.appBar,
          zIndex: 2000,
          borderBottom: "1px solid #E1E3EA",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
            height: TOP_NAV_HEIGHT,
            lineHeight: TOP_NAV_HEIGHT,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <img src="/logo.png" style={{ height: "24px", margin: "30px" }} />
          </Stack>

          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Notifications">
              <IconButton>
                <StyledBadge badgeContent={5} color="error" sx={{ fontSize: "10px" }}>
                  <SvgIcon>
                    <BellIcon />
                  </SvgIcon>
                </StyledBadge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Search">
              <IconButton>
                <SvgIcon>
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>

            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: "pointer",
                height: 44,
                width: 44,
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
