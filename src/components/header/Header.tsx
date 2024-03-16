import {
  Box,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ColorModeContext, tokens } from "../../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useContext, useState } from "react";
const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleDark = () => {
    setIsDark(!isDark);
    colorMode.toggleColorMode();
  };
  const [isDark, setIsDark] = useState(false);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"20px"}
      position={"sticky"}
      top={"1px"}
      marginLeft={"250px"}
      zIndex={"11321"}
      bgcolor={colors.blue[800]}
    >
      <Box display={"flex"} bgcolor={colors.blue[500]} borderRadius={"20px"}>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ flex: 1 }} placeholder="Qidirish..." />
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        {isDark ? (
          <LightModeIcon onClick={handleDark} sx={{ cursor: "pointer" }} />
        ) : (
          <NightlightRoundIcon
            onClick={handleDark}
            sx={{ cursor: "pointer" }}
          />
        )}
        <MailOutlineIcon sx={{ cursor: "pointer" }} />
        <NotificationsNoneIcon sx={{ cursor: "pointer" }} />
        <Typography
          variant="h4"
          fontFamily={"sans-serif"}
          color={colors.blue[100]}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
        >
          User Name
          <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
        </Typography>
        <PersonIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Header;
