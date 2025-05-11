import Course from './Course'
import Catagory from '../Catagory'
import Pagination from "../Pagination";

const Courses = [
    {
      title: "Web Design",
      image: "/post-2.jpg",
      path: "/course:id",
      author: "Darwin",
      release_date: "May 19, 2024",
      content: "",
      avatar: "/girl_dp1.jpg",
      year:"1", 
      credit:"3hr"
    },
    {
      title: "Object Oreinted Programming",
      image: "/post-5.jpg",
      path: "/course:id",
      author: "Gumball",
      release_date: "Jan 20, 2025",
      content: "",
      avatar: "/man_dp1.jpg",
      year:"1", 
      credit:"2hr"
    },
    {
      title: "Database System",
      image: "/post-2.jpg",
      path: "/course:id",
      author: "Gumball",
      release_date: "Jan 20, 2025",
      content: "",
      avatar: "/profile-1.jpg",
      year:"1", 
      credit:"1hr"
    },
  ];
  

function CoursePage() {
  return (
    <div className="max-w-6xl mx-auto px-8 space-y-8">
        <h2 className="text-center py-0 mt-10">Our Courses</h2>
        <Catagory />
        <Course courses={Courses}/>
        <Pagination />
     </div>
  )
}

export default CoursePage;