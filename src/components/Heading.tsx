import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { handlingWorkExperinceData } from "../redux/action";

const Heading = () => {
  const [show, setShow] = useState("");

  const dispatch = useDispatch();
  const storeData = useSelector((states: any) => states.worksection);

  const [storeObj, setStoreObj] = useState({
    heading: storeData.heading,
  });

  const { heading } = storeObj;

  function handleChange(event: any) {
    const value = event.target.value;
    setStoreObj({ ...storeObj, [event.target.name]: value });

    dispatch(handlingWorkExperinceData(storeObj));
  }
  return (
    <div className="flex text-xl items-center">
      {show !== "heading" ? (
        <div
          className="font-bold border-t-2 border-b-2 border-black"
          onClick={() => setShow("heading")}
        >
          {heading}
        </div>
      ) : (
        <div className="flex text-xl items-center text-red-bg">
          <input
            className="text-xl font-bold border-t-2 border-b-2 border-black outline-none bg-transparent uppercase"
            type="text"
            value={heading}
            style={{ outline: "none", width: "fit-content" }}
            onChange={(e) => handleChange(e)}
            name="heading"
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
