import { useState } from "react";

const useToggle = (defaultBoolean = false) => {
  const [toggle, setToggle] = useState(defaultBoolean);
  return { toggle, setToggle };
};

export default useToggle;
