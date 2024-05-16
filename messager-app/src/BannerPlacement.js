import { useContext, useState } from "react";
import UserContext from "./UserContext";

const BannerPlacement = () => {
  const [state, setState] = useState(true);

  const { elementRef } = useContext(UserContext);

  const style = !state ? { display: "none" } : {};
  return (
    <div>
      <p>
        Місце для банеру:
        <div style={style} ref={elementRef}></div>
      </p>
      {state ? (
        <button onClick={() => setState(false)}>Скрити баннер</button>
      ) : (
        <button onClick={() => setState(true)}>Показати баннер</button>
      )}
    </div>
  );
};

export default BannerPlacement;
