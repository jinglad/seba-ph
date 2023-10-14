import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { v4 as uuidv4 } from "uuid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";

const companyLinks = [
  {
    id: uuidv4(),
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    id: uuidv4(),
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: uuidv4(),
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: uuidv4(),
    name: "About Us",
    link: "/about-us",
  },
  {
    id: uuidv4(),
    name: "Our services",
    link: "/services",
  },
];

const socialLinks = [
  {
    id: uuidv4(),
    name: "3257, Snow St, Keilor, VIC 3036",
    icon: <LocationOnIcon />,
  },
  {
    id: uuidv4(),
    name: "+8801700000000",
    icon: <PhoneAndroidIcon />,
  },
  {
    id: uuidv4(),
    name: "www.e-sheba.com",
    icon: <LanguageIcon />,
  },
  {
    id: uuidv4(),
    name: "info@esheba.com",
    icon: <EmailIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#26798C]">
      <div className="container mx-auto pt-20 pb-5">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <h1 className="text-white text-2xl font-semibold">About Us</h1>
            <Box component="hr" className="mb-5 mt-3 w-20 h-1 bg-white" />
            <p className="text-white text-base">
              Build a website as impressive as your ultrauniq with this
              attractive and professional ultrauniq company template.
            </p>
            <div className=" bg-white w-3/4 my-5">
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="py-3 pl-3 bg-transparent outline-none border-0 text-white"
                  />
                </div>
                <div>
                  <button className="bg-primary py-3 px-2 cursor-pointer">
                    <ArrowForwardIcon sx={{ color: "white" }} />
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="flex justify-center items-center">
              <div>
                <h1 className="text-white text-2xl font-semibold">
                  Company Links
                </h1>
                <Box component="hr" className="mb-5 mt-3 w-20 h-1 bg-white" />
                <div className="">
                  <List dense={true}>
                    {companyLinks.map((item) => (
                      <ListItem key={item.id} sx={{ ml: "-20px" }}>
                        <ListItemIcon>
                          <KeyboardDoubleArrowRightIcon
                            sx={{ color: "white" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          sx={{ color: "lightgray" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="flex justify-center items-center">
              <div>
                <h1 className="text-white text-2xl font-semibold ml-5">
                  Contact Us
                </h1>
                <Box
                  component="hr"
                  className="mb-5 ml-5 mt-3 w-20 h-1 bg-white"
                />
                <div className="">
                  <List dense={true}>
                    {socialLinks.map((item) => (
                      <ListItem key={item.id}>
                        <ListItemIcon sx={{ color: "white" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: "lightgray" }}
                          primary={item.name}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
