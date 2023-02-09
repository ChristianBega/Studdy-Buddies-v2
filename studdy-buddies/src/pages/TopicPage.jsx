import { Link } from "react-router-dom";

export default function TopicPage() {
  return (
    <>
      <h1>Topic Page</h1>
      {/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */}
      {/* "/:topicname/topicpage" */}
      <Link to="/subtopic-page">Subtopic Card</Link>
    </>
  );
}
