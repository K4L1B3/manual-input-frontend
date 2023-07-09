import "./NavigationTitle.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavigationTitleProps {
  text: string;
}
const NavigationTitle = (props: NavigationTitleProps): JSX.Element => {
  return (
    <div className="container">
      <button className="icon">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1 className="text">{props.text}</h1>
    </div>
  );
};

export default NavigationTitle;
