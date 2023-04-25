import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Heading = (props: any) => {
  const [state, setstate] = useState("");

  const [edit, setEdit] = useState<any>({
    text: props.text,
  });

  const handleChange = (event: any, arg: any) => {
    setEdit({ ...edit.text, [arg]: event.target.value });
  };

  return (
    <div className="flex text-xl items-center">
      {state !== "heading" ? (
        <div
          className="font-bold border-t-2 border-b-2 border-black"
          onClick={() => setstate("heading")}
        >
          {edit.text}
        </div>
      ) : (
        <div className="flex text-xl items-center text-red-bg">
          <input
            className="text-xl font-bold border-t-2 border-b-2 border-black outline-none bg-transparent uppercase"
            type="text"
            value={edit.text}
            style={{ outline: "none", width: "fit-content" }}
            onChange={(e) => handleChange(e, "heading")}
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
