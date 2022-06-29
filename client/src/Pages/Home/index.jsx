import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Charts from '../../Component/BarChart'
import axios from "axios";
import { useEffect, useState } from "react";

const styles = (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },

  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "20%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Album(props) {
  const { classes } = props;

  const [TimeData, setTimeData] = useState([]);
  const [internal, setInternal] = useState([]);
  const [external, setExternal] = useState([]);
  const fetchData = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/a3f3a8dd-678f-4941-91b2-28923b305d4b"
    );
    setTimeData(data1.data);
  };
  const fetchInternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/77d33342-bb12-4e57-a881-d98871b959d2"
    );
    setInternal(data1.data);
  };
  const fetchExternal = async () => {
    const data1 = await axios.get(
      "https://run.mocky.io/v3/4fc47154-feef-401d-80d8-6e3978a5bb7d"
    );
    setExternal(data1.data);
  };

  useEffect(() => {
    fetchData();
    fetchInternal();
    fetchExternal();
  }, []);
  let project = external.map((d) => d.Project);
  let hourly_rate = external.map((d) => d.Hourly_rate);
let duration =0
TimeData.map((d)=>duration+=d.Duration/3600);
console.log(duration);
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            <Box sx={{ width: "100%" }}>
              <Grid
                on
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2} sm={4} md={4}>
                  <Item>
                    <h3> Employee count </h3>
                    <h1>{internal.length}</h1>
                  </Item>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <Item>
                    <h3> Active Projects </h3>
                    <h1>{external.length}</h1>
                  </Item>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <Item>
                    <h3>Total employees work hour count</h3>
                    <h1>{duration.toFixed(0)} hours</h1>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </div>
        <div className={classes.heroUnit}>
      <Charts date={project} duration={hourly_rate}/>
            

        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
