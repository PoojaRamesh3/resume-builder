import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleNameChange } from "../redux/action";
import { handlePositionChange } from "../redux/action";
import { handleDescChange } from "../redux/action";
import { handleEmailChange } from "../redux/action";
import { handlePhoneChange } from "../redux/action";

const NameAndDetails = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state: any) => state);

  const [state, setstate] = useState("");

  return (
    <div className="flex justify-between flex-wrap w-full font-Inter">
      <div className="w-full md:w-5/12">
        {state !== "name" ? (
          <div
            className="text-2xl font-bold h-8"
            onClick={() => setstate("name")}
          >
            {edit.name}
          </div>
        ) : (
          <input
            className="text-2xl font-bold h-8"
            type="text"
            value={edit.name}
            style={{ outline: "none" }}
            onChange={(e) => dispatch(handleNameChange(e.target.value))}
          />
        )}
        {state !== "position" ? (
          <div
            className="text-gray-500 h-6 truncate"
            onClick={() => setstate("position")}
          >
            {edit.position}
          </div>
        ) : (
          <input
            className="text-gray-500 h-6 truncate"
            type="text"
            value={edit.position}
            style={{ outline: "none" }}
            onChange={(e) => dispatch(handlePositionChange(e.target.value))}
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
            onChange={(e) => dispatch(handleDescChange(e.target.value))}
          />
        )}
      </div>

      <div className="w-1 md:w-6/12 md:pl-2 mt-6 md:mt-0 flex flex-col items-end">
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
              onChange={(e) => dispatch(handleEmailChange(e.target.value))}
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
              onChange={(e) => dispatch(handlePhoneChange(e.target.value))}
            />
          )}
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        {/*<div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
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
              onChange={(e) => dispatch(handleChange(e.target.value))}
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
              onChange={(e) => dispatch(handleChange(e.target.value))}
            />
          )}
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default NameAndDetails;
