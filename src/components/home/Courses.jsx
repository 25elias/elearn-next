import Course from "./Course";

const houses = [
    {title: "Web Design", image:"/post-2.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"3", credit:"3hr"},
    {title: "Object Oreinted Programming", image:"/post-5.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"2", credit:"3hr"},
    {title: "Database System", image:"/post-2.jpg", path:"/", content:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", year:"1", credit:"3hr"},
];


export default function() {
    return(
        <div className="mt-3 flex gap-4">
            {houses.map((house, idx) => 
                <Course  key={idx} house={house} />
            )}
        </div>
    )
};