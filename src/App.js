import React, { useState } from "react";
import UseTransition from "./useTransition/UseTransition";
import WithoutUseTransition from "./useTransition/WithoutUseTransition";

const App = () => {
  const [withHook, setWithHook] = useState(true);
  return (
    <>
      with useTransition():
      <input
        type="checkbox"
        checked={withHook}
        onClick={() => setWithHook(!withHook)}
      />
      {withHook ? <UseTransition /> : <WithoutUseTransition />}
    </>
  );
};

export default App;
