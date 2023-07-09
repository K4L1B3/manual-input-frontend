import "./Input.css";

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface InputProps {
  icon: IconDefinition;
  label: string;
  name: string;
  placeholder: string;
  type: "email" | "password" | "text";
}

const Input = ({
  label,
  name,
  placeholder,
  type,
  icon,
}: InputProps): JSX.Element => {
  const [showVisibleEye, setShowVisibleEye] = useState<boolean>(false);
  const [visibleEye, setVisibleEye] = useState<boolean>(true);
  const [currentType, setCurrentType] = useState<string>(type);

  React.useEffect(() => {
    if (type !== "password") {
      return;
    }
    setShowVisibleEye(true);
  }, [type]);

  function handleVisibleEye() {
    setVisibleEye(!visibleEye);
    if (visibleEye && type === "password") {
      setCurrentType("text");
      return;
    }
    setCurrentType(type);
  }

  return (
    <div className="container-component-input">
      <label className="input-name" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="input"
        type={currentType}
        placeholder={placeholder}
      />
      <FontAwesomeIcon icon={icon} className={"icon"} />
      {showVisibleEye && (
        <button className={"eye-slash-icon"} onClick={handleVisibleEye}>
          <FontAwesomeIcon icon={visibleEye ? faEye : faEyeSlash} />
        </button>
      )}
    </div>
  );
};

export default Input;
