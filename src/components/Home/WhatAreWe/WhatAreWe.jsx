import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const list = [
  {
    id: uuidv4(),
    title: "Easy access to specialists",
  },
  {
    id: uuidv4(),
    title: "Best hospitals at your home",
  },
  {
    id: uuidv4(),
    title: "Lower cost",
  },
  {
    id: uuidv4(),
    title: "All medicine shop in one platform",
  },
  {
    id: uuidv4(),
    title: "Instructions to lead a healthy life",
  },
  {
    id: uuidv4(),
    title: "Peer-to-peer Support",
  },
];

const WhatAreWe = () => {
  return (
    <section className="pt-10">
      <Container fixed>
        <Grid container spacing={4} sx={{width: "100%"}}>
          <Grid item xs={12} md={6} 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
            <div className="ml-5">
              <h2 className="text-primary font-semibold text-4xl">You will feel nurtured here.</h2>
              <h2 className="text-primary font-semibold text-4xl">What is this?</h2>
            </div>
            <div className="ml-10 mt-8">
              <List dense={true}>
                  {
                    list.map((item) => (
                      <ListItem key={item.id}>
                        <ListItemIcon>
                          <FiberManualRecordIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))
                  }
              </List>
            </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
          }}>
            <img src="/images/what-we-are.png" alt="what-are-we" className="w-fit" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default WhatAreWe;
