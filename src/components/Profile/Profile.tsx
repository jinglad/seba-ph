import { useDispatch, useSelector } from "react-redux";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import { useState } from "react";
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { setProfileData } from "../redux/userSlice";

const Profile = () => {
  const profileData = useSelector((state: any) => state.user.profileData);
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState({
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    email: profileData.email,
    gender: profileData.gender,
    phoneNumber: profileData.phoneNumber,
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    dispatch(setProfileData(profile));
    setTimeout(() => {
      setLoading(false);
      setShowEdit(false);
      setProfile({
        firstName: "",
        lastName: "",
        email: "",
        gender: "Male",
        phoneNumber: "",
      });
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto my-10 min-h-[50vh]">
        {!showEdit ? (
          <div className="shadow-[0px_2px_18px_0px_rgba(150,150,150,0.5)]">
            {/* <section className="w-full "> */}
            <div className="flex items-center justify-between border-b p-7">
              <div className="text-2xl font-semibold">Personal Information</div>

              <button
                className="flex items-center bg-primary text-black px-4 py-2 rounded-md font-semibold text-sm transition duration-300 active:scale-95 "
                onClick={() => setShowEdit(true)}
              >
                Edit
              </button>
            </div>
            {/* <div className="border-t border-gray-200 bg-gray-50"> */}
            <div className="min-w-[55%] p-7">
              <div className="flex w-full md:flex-col lg:flex-row">
                <ShowPersonalInformationData
                  label="First Name"
                  data={profileData?.firstName}
                  className="w-1/2 pr-2 md:w-full lg:w-1/2"
                />
                <ShowPersonalInformationData
                  label="Last Name"
                  data={profileData?.lastName}
                />
              </div>

              <div className="mt-6 flex md:mt-0 md:flex-col lg:mt-6 lg:flex-row">
                <ShowPersonalInformationData
                  label="Email"
                  data={profileData?.email}
                  className="w-1/2 pr-2 md:w-full lg:w-1/2"
                />
                <ShowPersonalInformationData
                  label="Phone Number"
                  data={profileData?.phoneNumber}
                  className="w-1/2"
                />
              </div>
              <div className="mt-6 flex md:mt-0 md:flex-col lg:mt-6 lg:flex-row">
                <ShowPersonalInformationData
                  valueClass="capitalize"
                  label="Gender"
                  data={profileData?.gender}
                  className="w-1/2 pr-2 md:w-full lg:w-1/2"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="shadow-[0px_2px_18px_0px_rgba(150,150,150,0.5)]">
            <div className="flex items-center justify-between border-b p-7">
              <div className="text-2xl font-semibold">Personal Information</div>
            </div>
            {/* <div className="border-t border-gray-200 bg-gray-50"> */}
            <div className=" p-7">
              <div className="w-full">
                <p className="mb-2 text-right text-base">Required fields *</p>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="flex items-center justify-between w-full gap-4">
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      className="w-full"
                      value={profile.firstName}
                      onChange={(e) => {
                        setProfile((prev) => {
                          const newData = { ...prev };
                          newData.firstName = e.target.value;
                          return newData;
                        });
                      }}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      className="w-full"
                      value={profile.lastName}
                      onChange={(e) => {
                        setProfile((prev) => {
                          const newData = { ...prev };
                          newData.lastName = e.target.value;
                          return newData;
                        });
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full gap-4">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="w-full"
                      value={profile.email}
                      onChange={(e) => {
                        setProfile((prev) => {
                          const newData = { ...prev };
                          newData.email = e.target.value;
                          return newData;
                        });
                      }}
                    />
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={profile.gender}
                      label="Gender"
                      className="w-full"
                      onChange={(e) => {
                        setProfile((prev) => {
                          const newData = { ...prev };
                          newData.gender = e.target.value;
                          return newData;
                        });
                      }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </div>
                  <div className="w-1/2">
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      className="w-full"
                      value={profile.phoneNumber}
                      onChange={(e) => {
                        setProfile((prev) => {
                          const newData = { ...prev };
                          newData.phoneNumber = e.target.value;
                          return newData;
                        });
                      }}
                    />
                  </div>

                  <div className="space-x-2">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={
                        loading && <CircularProgress sx={{ width: "5rem" }} />
                      }
                      type="submit"
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => setShowEdit(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;

export function ShowPersonalInformationData({
  label,
  data,
  valueClass,
  className,
}: {
  label: string;
  data?: string | number;
  valueClass?: string;
  className?: string;
}) {
  console.log("from show personal information data: ", data);
  return (
    <div className={`mt-0 flex-1 md:mt-3 lg:mt-0 ${className}`}>
      <label className={`text-lg text-gray-600 sm:text-xl`}>{label}</label>
      <div
        title={`${data ? data : "N/A"}`}
        className={`lg-mt-1.5 mt-1.5 truncate text-lg font-semibold text-black sm:text-xl md:mt-0 ${valueClass}`}
      >
        {data ? data : "N/A"}
      </div>
    </div>
  );
}
