import "./Illustration.css";

import illustrationImg from "@/assets/svgs/illustration.svg";

const Illustration = (): JSX.Element => {
  return (
    <div className="container">
      <img className="illustration" src={illustrationImg} alt="" />
    </div>
  );
};

export default Illustration;
