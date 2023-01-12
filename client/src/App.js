//============== React import ==============//
import React from "react";

//============== Material UI import ==============//
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";

//============== Files and Folders imports ==============//
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";

//============== Code ==============//
const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt=" memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
