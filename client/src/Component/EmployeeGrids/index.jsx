import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function EmployeeGrids({
  revenue,
  hours,
  projects,
  salary,
  holiday,
  sickDay,
  user,
  billable,
  totalIndex,
  rate
}) {
  return (
    <>
      <h1 >{user}</h1>
      <Box sx={{ width: "100%" }}>
        <Grid on container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3> Total revenue brought in by employee </h3>
              <h1>{'€'+revenue.toFixed(2)}</h1>
            </Item>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3> Total hours worked </h3>
              <h1>{hours.toFixed(1)}</h1>
            </Item>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Internal rate per hour</h3>
              <h1>{'€'+rate }</h1>
            </Item>
          </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Projects worked on </h3>
              <h1>{"  " + projects + " "}</h1>
            </Item>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Employee salary</h3>
              <h1>{'€'+salary.toFixed(2) + " "}</h1>
            </Item>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Holidays</h3>
              <h1>{"  " + holiday + " "}</h1>
            </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Sick leave</h3>
              <h1>{"  " + sickDay + " "}</h1>
            </Item>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h3>Non-billible hours</h3>
              <h1>{"  " + billable + "/" + totalIndex}</h1>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </>
  );
}
