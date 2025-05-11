import Course from "./Course";

const Courses = [
    {title: "Web Design", image:"/post-2.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"3", credit:"3hr"},
    {title: "Object Oreinted Programming", image:"/post-5.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"2", credit:"3hr"},
    {title: "Database System", image:"/post-2.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"1", credit:"3hr"},
];


export default function() {
    return(
        <div className="mt-8">
            <h2 className="text-center py-14 my-8">Courses</h2>
            <Course courses={Courses} />
        </div>
    )
};