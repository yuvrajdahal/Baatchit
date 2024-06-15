import Post from "./components/Post";
import Suggested from "../Suggested";
import Sidebar from "../Sidebar";
import Modal from "../../components/Modal/Modal";

function Home() {
  return (
    <section className="bg-dark h-screen w-screen text-light ">
      <div className="h-full w-full  grid md:grid-cols-6">
        <Sidebar />
        <Post />
        <Suggested />
      </div>
    </section>
  );
}

export default Home;
