import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveRead, unsetActiveRead } from '../../store/activeRead';

function ActiveReadManager(read) {
  const dispatch = useDispatch();
  const [activeRead, setActive] = useState(null);
  const [readPercentage, setReadPercentage] = useState(null);

  if (!read.isBeingRead) {
    dispatch(unsetActiveRead());
  }

  useEffect(() => {
    return () => {
      if (activeRead) {
        dispatch(
          setActiveRead({
            ...activeRead,
            statistics: {
              readPercentage: readPercentage || 0.3,
            },
          })
        );
      }
    };
  }, [activeRead, readPercentage, dispatch]);

  return {
    setActive,
    setReadPercentage,
  };
}

export default ActiveReadManager;
