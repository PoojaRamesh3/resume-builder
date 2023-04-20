import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NameAndDetails = () => {
  return (
    <div className="flex justify-between flex-wrap w-full font-Inter">
      <div className="w-full md:w-5/12">
        <div className="text-red-bg  text-2xl font-bold h-8">Your Name</div>
        <div className="text-gray-500 text-md h-6 truncate">Your Position</div>
        <div className="text-black text-sm mt-4 line-clamp-4 text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quaerat cupiditate sapiente iste odio veniam dolorum blanditiis
          incidunt? Praesentium laborum nobis ipsa modi cumque voluptates, iure
          aliquid asperiores sit. Ad.
        </div>
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
