import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/index";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Diversity3Icon from "@mui/icons-material/Diversity3";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Item = ({ title, to, icon, selected, setSelected }: any) => {
  return (
    <Menu>
      <NavLink to={to} style={{ textDecoration: "none" }}>
        <MenuItem
          active={selected === title}
          style={{
            marginRight: "20px",
            borderRadius: "30px",
            color: selected === title ? "#000" : "#fff",
            backgroundColor: selected === title ? "#ffff" : "transparent", // Adjust the background color as needed
          }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </NavLink>
    </Menu>
  );
};

const Aside = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blue[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        marginTop: "-80px",
        position: "fixed",
        top: "82px",
        left: "0px",
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} backgroundColor={colors.blue[700]}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              position: "absolute",
              display: "none",
              float: "right",
              left: "70%",
              top: "-100px",
              color: colors.indigo[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {!isCollapsed && (
              <Box mb="25px" mt={"100px"}>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    fontFamily={"sans-serif"}
                    color={colors.indigo[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Zeemlin
                  </Typography>
                </Box>
              </Box>
            )}
            <Item
              title="Home"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Maktablar"
              to="/maktablar"
              icon={<SchoolIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="O’qituvchilar"
              to="/o’qituvchilar"
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="O’quvchilar"
              to="/o'quvchilar"
              icon={<SupervisedUserCircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Directors"
              to="/directors"
              icon={<AdminPanelSettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Jamoa"
              to="/jamoa"
              icon={<Diversity3Icon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tadbirlar"
              to="/tadbirlar"
              icon={<DomainVerificationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ota-Onalar"
              to="/otaOnalar"
              icon={<FamilyRestroomIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Yordam"
              to="/yordam"
              icon={<AccessibilityNewIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        <Box
          display={"flex"}
          gap={"10px"}
          ml={"190px"}
          mt={"82px"}
          alignContent={"center"}
        >
          <NavLink to="/report">
            <Item to="/yordam" icon={<HelpOutlineIcon />} />
          </NavLink>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Aside;
