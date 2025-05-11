import Link from "next/link";

export default function Course({courses}) {
    return(
        <div className="flex flex-col md:flex-row gap-5 ">
            {courses.map(({title, image, content, year, credit, path}) => {
                return(
                    <div key={path} className="bg-gray-100">
                        <div className="w-full h-full md:h-[260px]">
                            <img className="w-full h-full cover" src={image} alt={title} />
                        </div>
                        <div className="space-y-2">
                            <Link href={path}><h3  className="p-4 hover:underline">{title}</h3></Link>
                            <p className="px-4 content border-b-2 border-gray-300 pb-3">{content}</p>
                            <div className="px-15 pt-6 md-4 text-center">
                                <p className="text-sm font-bold tracking-wide pb-3 border-b-2 border-gray-300">Year: {year}</p>
                                <p className="text-sm font-bold tracking-wide py-3 text-center border-b-2 border-gray-300">Credit: {credit}</p>
                            </div>
                            <Link href="/courses" className="btn-cta flex items-center justify-center mx-4 mt-8 mb-4"> Learn More</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}