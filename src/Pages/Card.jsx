import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export function Cardd({event,index}) {
  const navigate = useNavigate();
  const handleClick = ()=> {
navigate(`/${index}`, { state: { desc: event } })
  }
  return (
    <Card onClick={handleClick} className="mt-6 w-96 mx-auto rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
      <CardHeader color="blue-gray" className="relative rounded-none mt-7 m-0 h-54">
        <img
          src={event.image}
          alt="card-image"
          className="h-[240px] w-[400px] rounded-none"
        />
      </CardHeader>
      <CardBody>
        <Typography className="font-bold text-[20px] text-black mb-2">
          <span>{event.name}</span>&nbsp;-&nbsp;<span>{event.type}</span>
        </Typography>
        <Typography>
         <span className="font-semibold text-black">Day: {event.date}</span>
        </Typography>
        <Typography>
         <span className="font-semibold text-black">Registration Fee:  {event.registrationFee !== null ? event.registrationFee : "None"} </span> 
        </Typography>
        <Typography>
         <span className="font-semibold text-black">Venue:  {event.venue} </span> 
        </Typography>
        <Typography><span className="font-semibold text-black">{event?.prizes && <span>Prize Money:</span>}</span>
        <ul>
          {event?.prizes?.map((prize, index) => (
            <li className="font-semibold text-black" key={index}>
              {prize.position}: <span className="text-pink-500">{prize.amount}</span>
            </li>
          ))}
        </ul>
        </Typography>
      </CardBody>
      
    </Card>
  );
}