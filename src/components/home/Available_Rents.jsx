

const homeAvailables = [
    {title:"Felix", image:"/man_dp1.jpg"},
    {title:"Felix", image:"/man_dp2.jpg"},
    {title:"Felix", image:"man_dp3.jpg"},
    {title:"Felix", image:"/girl_dp1.jpg"},
    {title:"Felix", image:"/girl_db3.jpg"},
];


export default function Availables() {
  return (
    <div className="wrapper py-24 w-full h-full space-y-8">
       <Headlines />

       <div className=" py-8 px-10 flex flex-wrap justify-start gap-6" >
          {homeAvailables.map(({image, title}) => {
            return(
                    <div className="space-y-4">
                        <div className="w-[220px] h-[380px] rounded-md">
                            <img className="w-full h-full rounded-md cover" src={image} alt={title} />
                        </div>
                        <span className="text-lg text-gray-200 font-semibold">{title}</span>
                    </div>
            )
        })}
       </div>
    </div>
  );
};


// Headline
export function Headlines(){
  return(
    <div>
      <p className="uppercase text-xs text-gray-800 text-center">Variety of properties available for rent</p>
      <p className="text-2xl text-gray-900 tracking-wide capitalize text-center mb-8 mt-4">What type of properties to rent</p>
    </div>
  );
};
