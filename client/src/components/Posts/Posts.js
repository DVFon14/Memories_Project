//============== React import ==============//
import React from "react";
//============== Material UI import ==============//
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

//============== react-redux ==============//
import { useSelector } from "react-redux";

//============== Files and Folders imports ==============//
import Post from "./Post/Post";
import useStyles from "./styles";

//============== Code ==============//
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
