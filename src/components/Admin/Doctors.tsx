import { useSelector } from "react-redux";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import {
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardMenus } from "../Dashboard/Dashboard";

export interface IDoctor {
  id: number;
  name: string;
  department: string;
  image: string;
  place: string;
  rating: number;
  degree: string;
  experience: string;
  fee: number;
  about: string;
  speciality: string[];
  awards: string[];
  languages: string[];
  availability: IAvailability[];
}

export interface IAvailability {
  day: string;
  time: string;
}

const Doctors = () => {
  const navigate = useNavigate();
  const { doctors } = useSelector((state: any) => state.user);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <main className="container mx-auto my-10 min-h-[50vh] flex gap-4">
        <DashboardMenus />
        <div className="w-full">
          <h1 className="font-bold text-2xl">Doctors</h1>
          <TableContainer component={Paper} className="w-full">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Department
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Experience
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    Fee
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctors?.map((row: IDoctor) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                    onClick={() => navigate(`/doctors/${row.id}`)}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.department}</TableCell>
                    <TableCell align="center">{row.experience}</TableCell>
                    <TableCell align="right">{row.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Doctors;
