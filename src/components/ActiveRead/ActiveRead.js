import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { unsetActiveRead } from '../../store/activeRead';
import ReadPercentageScale from '../ReadPercentageScale/ReadPercentageScale';
import './activeRead.scss';

function ActiveRead() {
  const activeRead = useSelector((store) => store.activeRead);
  const dispatch = useDispatch();

  const closeActiveRead = (event) => {
    dispatch(unsetActiveRead());
  };

  const getPercentage = (read) => {
    return Math.ceil(read.statistics.readPercentage * 100);
  };

  console.log(activeRead);

  return (
    <div
      className={`active-read rounded-corner shadow transition ${
        !activeRead.isBeingRead ? 'show' : ''
      }`}
    >
      <IoIosClose
        onClick={closeActiveRead}
        className="active-read__close icon"
      />
      {activeRead.title ? (
        <Link to={activeRead.url} onClick={closeActiveRead}>
          <div className="active-read__inner">
            <div className="flex ai-center">
              <div className="active-read__image">
                <div className="image-wrapper">
                  <img src={activeRead.img_url} alt="active read" />
                </div>
              </div>
              <h4 className="active-read__title milli">{activeRead.title}</h4>
            </div>
            <div className="active-read__percentage">
              <em className="percentage__value mini">{`${getPercentage(
                activeRead
              )}%`}</em>
              <div className="percentage__scale">
                <ReadPercentageScale
                  size="sm"
                  percentage={getPercentage(activeRead)}
                />
              </div>
            </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
}

export default ActiveRead;
