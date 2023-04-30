import React, { useState, useTransition } from "react";
import UseTransition from "./useTransition/UseTransition";
import WithoutUseTransition from "./useTransition/WithoutUseTransition";

const App = () => {
  const [withHook, setWithHook] = useState(true);
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    // NOTE: Prioritize input and output of user input by delaying state updates.
    startTransition(() => {
      setWithHook(!withHook);
    });
  };
  return (
    <>
      with useTransition():
      <input type="checkbox" checked={withHook} onClick={toggle} />
      <div>
        {isPending ? (
          "Loading"
        ) : withHook ? (
          <UseTransition />
        ) : (
          <WithoutUseTransition />
        )}
      </div>
    </>
  );
};

export default App;

