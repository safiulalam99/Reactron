import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import './index.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProjectGrid({ name, hours,projectRevenue,employees }) {
  return (
    <>
      <h1>{name}</h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <h3>Hours Worked</h3>
              <h1>{hours}</h1>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Project revenue</h3>
              <h1>{projectRevenue}</h1>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Employees</h3>
              <h1>{' '+employees}</h1>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h3>Hours Worked</h3>
              <h1>{hours}</h1>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
