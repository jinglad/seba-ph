import { useSelector } from "react-redux";
import { DashboardMenus } from "../Dashboard/Dashboard";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import { useDoctorAppointments } from "../../hooks/useDoctorAppointment";
import Loader from "../Reused/Loader";
import {
  Button,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export interface IAppointment {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  gender: string;
  age: string;
  date: string;
  time: string;
  price: number;
  user: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  sessionKey: string;
  transactionId: string;
}

const DoctorsAppointments = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { token } = useSelector((state: any) => state.user);
  const { data, isLoading } = useDoctorAppointments({ token, page });

  return (
    <>
      <Header />
      <main className="container mx-auto min-h-[50vh] my-10 flex gap-4">
        <DashboardMenus />
        <div className="w-full">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h1 className="text-2xl font-bold">Doctor's Appointments</h1>
              <TableContainer component={Paper} className="w-full">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Phone
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Doctor
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Status
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        Transaction ID
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.doctorAppointment?.map((row: IAppointment) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.fullName}
                        </TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.doctor}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.transactionId}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack spacing={2} mt={5}>
                <Pagination
                  onChange={(e, page) => setPage(page)}
                  count={data?.totalPages}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DoctorsAppointments;
