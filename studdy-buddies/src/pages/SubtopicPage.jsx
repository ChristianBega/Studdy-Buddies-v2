import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import CodeDemo from "../components/SubTopic/CodeDemo";
import Description from "../components/SubTopic/Description";
import Gist from "../components/SubTopic/Gist";
import Resources from "../components/SubTopic/Resources";

import "../Styles/SubtopicPage.css";
const Item = styled(Paper)({
  width: "100%",
});

export default function SubtopicPage() {
  return (
    <Grid columnSpacing={{ xs: 0, md: 2 }} sx={{ margin: "auto" }} container className="subtopicSection">
      <Grid item xs={12}>
        <Item>
          <h1 className="subtopicHeader">Subtopic</h1>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Description />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <CodeDemo />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Gist />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Resources />
        </Item>
      </Grid>
    </Grid>
  );
}

/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */
/* "/:topicname/topicpage" */
/* <Link to="/subtopic-page">Topic Card</Link> */
