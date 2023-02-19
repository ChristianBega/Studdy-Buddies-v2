// import { useState } from "react";
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CodeDemo from "../components/SubTopic/CodeDemo";
import Description from "../components/SubTopic/Description";
import Gist from "../components/SubTopic/Gist";
import Resources from "../components/SubTopic/Resources";

import "../Styles/SubtopicPage.css";

export default function SubtopicPage() {
  return (
    <Grid container className="subtopicSection">
      <Grid item sx={12}>
        <h1 className="subtopicHeader">Subtopic</h1>
      </Grid>
      <Grid item sx={12}>
        <Description />
      </Grid>
      <Grid item sx={12}>
        <CodeDemo />
      </Grid>
      <Grid item sx={12}>
        <Gist />
      </Grid>
      <Grid item sx={12}>
        <Resources />
      </Grid>

      {/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */}
      {/* "/:topicname/topicpage" */}
      {/* <Link to="/subtopic-page">Topic Card</Link> */}
    </Grid>
  );
}
