import React, { useState, Fragment } from 'react';
import DatePicker, { today } from '../../components/DatePicker/DatePicker';
import Banner from '../../components/Banner/PlainBanner';
import PlainBanner from '../../components/Banner/PlainBanner';

function POR() {
  const [date, setDate] = useState();
  const [disableDatePicker, setDisableDatePicker] = useState(false);

  const handlePicked = (date) => {
    setDisableDatePicker(true);
    setTimeout(() => {
      console.log(date);
      setDisableDatePicker(false);
    }, 2000);
  };

  return (
    <Fragment>
      <PlainBanner>
        <h1 className="ta-center headline headline-3">
          Preachers of Righteousness
        </h1>
      </PlainBanner>
      <div aria-label="JJC" className="page jjc-page">
        <section className="section">
          <section className="section__inner">
            <div className="grid gap-1 content-by-date">
              {/* <div className="column column-"></div> */}
              <DatePicker
                onPicked={handlePicked}
                disabled={disableDatePicker}
              />
              <section className="rendered-content">
                I am a content. I am a content. I am a content. I am a content.
                I am a content. I am a content. I am a content. I am a content.
                I am a content. I am a content. I am a content. I am a content.
                I am a content. I am a content. I am a content. I am a content.
                I am a content. I am a content. I am a content.{' '}
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
}

export default POR;
