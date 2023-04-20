import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const NameAndDetails = () => {
  const [state, setstate] = useState(false);

  const [edit, setEdit] = useState<any>({
    name: "Your Name",
    position: "Your Position",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Architecto quaerat cupiditate sapiente iste odio veniam dolorum blanditiis incidunt?Praesentium laborum nobis ipsa modi cumque voluptates, iure aliquid asperiores sit. Ad.",
  });

  const invokeInput = () => {
    setstate(true);
  };

  const handleChange = (event: any, arg: any) => {
    setEdit({ ...edit, [arg]: event.target.value });
  };

  return (
    <div className="flex justify-between flex-wrap w-full font-Inter">
      <div className="w-full md:w-5/12">
        {state === false && (
          <div
            className="text-red-bg  text-2xl font-bold h-8"
            onClick={invokeInput}
          >
            {edit.name}
          </div>
        )}
        {state === true && (
          <div>
            <input
              className="text-red-bg  text-2xl font-bold h-8"
              type="text"
              value={edit.name}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "name")}
            />
          </div>
        )}
        {state === false && (
          <div
            className="text-gray-500 text-md h-6 truncate"
            onClick={invokeInput}
          >
            {edit.position}
          </div>
        )}
        {state === true && (
          <div>
            <input
              className="text-gray-500 text-md h-6 truncate"
              type="text"
              value={edit.position}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "position")}
            />
          </div>
        )}
        {state === false && (
          <div
            className="text-black text-sm mt-4 line-clamp-4 text-ellipsis"
            onClick={invokeInput}
          >
            {edit.description}
          </div>
        )}
        {state === true && (
          <div>
            <textarea
              rows={4}
              className=" text-black text-sm mt-4 outline-none bg-transparent resize-none w-full"
              value={edit.description}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e, "description")}
            />
          </div>
        )}
      </div>
      <div className="w-12/12 md:w-6/12 md:pl-2 mt-6 md:mt-0 flex flex-col items-end">
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row">
          <div className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0">
            example@domain.com
          </div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          <div className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0">
            1234567890
          </div>
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          <div className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0">
            City, Country
          </div>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          <div className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0">
            linkedin.com/in/username
          </div>
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
