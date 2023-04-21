import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

//Need to implement redux
const NameAndDetails = () => {
  const [state, setstate] = useState("");

  const [edit, setEdit] = useState<any>({
    name: "Your Name",
    position: "Your Position",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
    email: "example@domain.com",
    phone: 1234567890,
    city: "City, Country",
    linkedin: "linkedin.com/in/username",
  });

  const handleChange = (event: any, arg: any) => {
    setEdit({ ...edit, [arg]: event.target.value });
  };

  return (
    <div className="flex justify-between flex-wrap w-full font-Inter">
      <div className="w-full md:w-5/12">
        {state !== "name" ? (
          <div
            className="text-red-bg  text-2xl font-bold h-8"
            onClick={() => setstate("name")}
          >
            {edit.name}
          </div>
        ) : (
          <input
            className="text-red-bg  text-2xl font-bold h-8"
            type="text"
            value={edit.name}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e, "name")}
          />
        )}
        {state !== "position" ? (
          <div
            className="text-gray-500 text-md h-6 truncate"
            onClick={() => setstate("position")}
          >
            {edit.position}
          </div>
        ) : (
          <input
            className="text-gray-500 text-md h-6 truncate"
            type="text"
            value={edit.position}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e, "position")}
          />
        )}
        {state !== "desc" ? (
          <div
            className="text-black text-sm mt-4 line-clamp-4 text-ellipsis"
            onClick={() => setstate("desc")}
          >
            {edit.description}
          </div>
        ) : (
          <textarea
            rows={4}
            className="text-black text-sm mt-4 outline-none bg-transparent resize-none w-full"
            value={edit.description}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e, "description")}
          />
        )}
      </div>
      <div className="w-12/12 md:w-6/12 md:pl-2 mt-6 md:mt-0 flex flex-col items-end">
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row">
          {state !== "email" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setstate("email")}
            >
              {edit.email}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={edit.email}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "email")}
            />
          )}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {state !== "phone" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setstate("phone")}
            >
              {edit.phone}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={edit.phone}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "phone")}
            />
          )}
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {state !== "city" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setstate("city")}
            >
              {edit.city}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={edit.city}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "city")}
            />
          )}
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {state !== "linkedin" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setstate("linkedin")}
            >
              {edit.linkedin}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={edit.linkedin}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "linkedin")}
            />
          )}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default NameAndDetails;
