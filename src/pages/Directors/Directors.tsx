import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import axios from "axios";
import { useEffect, useState } from "react";
const Directors = () => {
  const [dataDirectors, setDataDirectors] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const fetchDirectors = async () => {
    try {
      const res = await axios.get(
        "https://7f10-84-54-90-240.ngrok-free.app/api/Directors"
      );
      const data = await res.data;
      setDataDirectors(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDirectors();
  }, []);

  console.log(dataDirectors);

  return (
    <div className="container">
      <TableContainer
        // component={Paper}
        sx={{
          marginLeft: "300px",
          marginTop: "40px",
          width: "1150px",
          marginBottom: "50px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"40px"}
        >
          <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>
            Directors
          </Typography>
          <Box display={"flex"} gap={"10px"}>
            <Typography
              variant="h5"
              sx={{
                color: "#54536E",
                fontFamily: "sans-serif",
                cursor: "pointer",
                ":hover": {
                  color: "#2285D7",
                },
              }}
            >
              Ko'rish
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#54536E",
                fontFamily: "sans-serif",
                cursor: "pointer",
                ":hover": {
                  color: "#2285D7",
                },
              }}
            >
              Qo'shish
            </Typography>
          </Box>
        </Box>

        <Table
          sx={{ width: "1150px" }}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead sx={{ backgroundColor: "transparent" }}>
            <TableRow sx={{ height: "20px" }}>
              <TableCell sx={{ color: "#54536EBA" }}>ISM FAMILYA</TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                UserName
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                Seriya Raqami
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                PASSWORD
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                EMAIL
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                TELEFON RAQAM
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                QO'SHILGAN SANASI
              </TableCell>
              <TableCell align="center" sx={{ color: "#54536EBA" }}>
                TAHRIRLASH
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  background: colors.blue[800],
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center" sx={{ display: "flex", gap: "10px" }}>
                  <BorderColorIcon sx={{ cursor: "pointer" }} />
                  <DeleteOutlineIcon sx={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Directors;
