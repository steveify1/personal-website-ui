import { useState } from 'react';

function useShow(initialState) {
  const [show, setShow] = useState(initialState);
  return {
    show,
    setShow,
  };
}

export default useShow;
