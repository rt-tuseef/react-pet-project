import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Home() {
  return (
    <>
      <Header></Header> 
      <div className="home">
        <Posts>Post</Posts>
        <Sidebar>Side Bar</Sidebar>
      </div>
    </>
  )
}
