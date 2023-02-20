import { Link } from "react-router-dom";
import QuoteContainer from "../components/DashBoard/Quote";
import ToDoList from "../components/DashBoard/ToDoList";
import Card from "../components/DashBoard/Card";

export default function DashboardPage() {
  return (
    <>
      {/* Path needs to pass the "topic name" of the current card to fetch user data on that topic. */}
      {/* "/:topicname/topicpage" */}
      <div className="pageContainer">
      <QuoteContainer />
      <ToDoList />
      <Card />
      </div>
    </>
  );
}
