import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      {/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */}
      {/* "/:topicname/topicpage" */}
      <Link to="/topic-page">Topic Card</Link>
    </>
  );
}
