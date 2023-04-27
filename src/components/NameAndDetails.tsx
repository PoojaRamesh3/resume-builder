import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlingNameHeaderData } from "../redux/action";

const NameAndDetails = () => {
  const [show, setShow] = useState("");

  const dispatch = useDispatch();
  const storeData = useSelector((state: any) => state.namesection);

  const [storeObj, setStoreObj] = useState({
    name: storeData.name,
    position: storeData.position,
    description: storeData.description,
    email: storeData.email,
    phone: storeData.phone,
    city: storeData.city,
    linkedin: storeData.linkedin,
  });
  const { name, position, description, email, phone, city, linkedin } =
    storeObj;

  function handleChange(event: any) {
    const value = event.target.value;
    setStoreObj({
      ...storeObj,
      [event.target.name]: value,
    });
    dispatch(handlingNameHeaderData(storeObj));
  }

  return (
    <div className="flex justify-between flex-wrap w-full font-Inter">
      <div className="w-full md:w-5/12">
        {show !== "name" ? (
          <div
            className="text-2xl font-bold h-8"
            onClick={() => setShow("name")}
          >
            {name}
          </div>
        ) : (
          <input
            className="text-2xl font-bold h-8"
            type="text"
            value={name}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e)}
            name="name"
          />
        )}
        {show !== "position" ? (
          <div
            className="text-gray-500 h-6 truncate"
            onClick={() => setShow("position")}
          >
            {position}
          </div>
        ) : (
          <input
            className="text-gray-500 h-6 truncate"
            type="text"
            value={position}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e)}
            name="position"
          />
        )}
        {show !== "desc" ? (
          <div
            className="text-black text-sm mt-4 line-clamp-4 text-ellipsis"
            onClick={() => setShow("desc")}
          >
            {description}
          </div>
        ) : (
          <textarea
            rows={4}
            className="text-black text-sm mt-4 outline-none bg-transparent resize-none w-full"
            value={description}
            style={{ outline: "none" }}
            onChange={(e) => handleChange(e)}
            name="description"
          />
        )}
      </div>

      <div className="w-1 md:w-6/12 md:pl-2 mt-6 md:mt-0 flex flex-col items-end">
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row">
          {show !== "email" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setShow("email")}
            >
              {email}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={email}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e)}
              name="email"
            />
          )}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {show !== "phone" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setShow("phone")}
            >
              {phone}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={phone}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e)}
              name="phone"
            />
          )}
          <FontAwesomeIcon
            icon={faMobileScreen}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {show !== "city" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setShow("city")}
            >
              {city}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={city}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e)}
              name="city"
            />
          )}
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-sm md:ml-2 text-red-bg"
          />
        </div>
        <div className="flex justify-center items-center w-full flex-row-reverse md:flex-row mt-4">
          {show !== "linkedin" ? (
            <div
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              onClick={() => setShow("linkedin")}
            >
              {linkedin}
            </div>
          ) : (
            <input
              className="text-black text-sm truncate w-full text-left md:text-right font-medium ml-2 md:ml-0"
              type="text"
              value={linkedin}
              style={{ outline: "none" }}
              onChange={(e) => handleChange(e)}
              name="linkedin"
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
