import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { handlingStoreData } from "../redux/action";

const Heading = () => {
  const [show, setShow] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((states: any) => states.getData);
  const [heading, setHeading] = useState({
    workexpheading: data.workexpheading,
  });
  const { workexpheading } = heading;

  function handleChange(evt: any) {
    const value = evt.target.value;
    setHeading({
      ...heading,
      [evt.target.name]: value,
    });
    dispatch(handlingStoreData(heading));
  }
  return (
    <div className="flex text-xl items-center">
      {show !== "heading" ? (
        <div
          className="font-bold border-t-2 border-b-2 border-black"
          onClick={() => setShow("heading")}
        >
          {workexpheading}
        </div>
      ) : (
        <div className="flex text-xl items-center text-red-bg">
          <input
            className="text-xl font-bold border-t-2 border-b-2 border-black outline-none bg-transparent uppercase"
            type="text"
            value={workexpheading}
            style={{ outline: "none", width: "fit-content" }}
            onChange={(e) => handleChange(e)}
            name="workexpheading"
          />
          <div className="ml-8 cursor-pointer">
            <FontAwesomeIcon icon={faCirclePlus} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;
