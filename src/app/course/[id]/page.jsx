import api from "@/src/api/events_api";

const Event = ({params}) => {

 useEffect(() => {
   let event = api[params.id];

  },[])
    return(
	<div></div>
)
};

