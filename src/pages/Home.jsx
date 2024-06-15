import Post from "./Post"
import Suggested from "./Suggested"
import Sidebar from "./Sidebar"

function Home() {
    return (
        <section className="bg-dark h-screen w-100 text-light p-5">
            <div className="grid grid-cols-6 h-full">
            <Sidebar></Sidebar>
            <Post></Post>
            <Suggested></Suggested>
            </div>
        </section>
    )
}

export default Home
