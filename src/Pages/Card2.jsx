import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function Carddd({ event, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${index}`, { state: { desc: event } });
  };

  return (
    <Card
      onClick={handleClick}
      className="mt-6 w-96 bg-purple-100 mx-auto rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
    >
    
      <CardBody>
        <Typography className="font-bold text-[20px] text-black mb-2">
          <span>{event.name}</span>&nbsp;-&nbsp;<span>{event.type}</span>
        </Typography>
        <Typography>
          <span className="font-semibold text-purple-900">Contact Persons:</span>
        </Typography>
        <ul className="list-disc list-inside text-[#191a2b]">
          {event.contactPersons.map((person, i) => (
            <li key={i}>
              <span>{person.name}</span>&nbsp;-&nbsp;<span>{person.phone}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
