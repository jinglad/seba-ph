import { useDispatch, useSelector } from "react-redux";
import { useUsers } from "../../hooks/useUser";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeAdmin } from "../redux/userSlice";
import React from "react";
import ConfirmModal from "../Reused/confirmModal";
import { DashboardMenus } from "../Dashboard/Dashboard";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const Users = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);
  const users = useSelector((state: any) => state.user.users);
  const { data, isLoading, isError } = useUsers({ token, dispatch });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState("");

  console.log(users);

  const handleSubmit = () => {
    setLoading(true);
    dispatch(makeAdmin({ id }));
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto my-10 min-h-[50vh] flex gap-4">
        <DashboardMenus />
        <div className="w-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-full w-full">
              <CircularProgress />
            </div>
          ) : (
            <div className="w-full">
              <h1 className="text-2xl font-bold">Users</h1>
              <TableContainer component={Paper} className="w-full">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users?.map((row: IUser) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.role}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              setOpen(true);
                              setId(row._id);
                            }}
                          >
                            Make Admin
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        handleSubmit={handleSubmit}
        title="Make Admin"
        text="Are you sure you want to make this user an admin?"
        loading={loading}
      />
    </>
  );
};

export default Users;
