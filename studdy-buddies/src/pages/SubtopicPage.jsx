import { Link } from "react-router-dom";
import CodeDemo from "../components/SubTopic/CodeDemo";
import Description from "../components/SubTopic/Description";
import Gist from "../components/SubTopic/Gist";
import Resources from "../components/SubTopic/Resources";

import "../Styles/SubtopicPage.css";

export default function SubtopicPage() {
  return (
    <section className="subtopicSection">
      <h1>Subtopic "Name"</h1>
      {/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */}
      {/* "/:topicname/topicpage" */}
      {/* <Link to="/subtopic-page">Topic Card</Link> */}
      <Description />
      <CodeDemo />
      <Gist />
      <Resources />
    </section>
  );
}
