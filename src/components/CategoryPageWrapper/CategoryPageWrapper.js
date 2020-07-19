import React, { useState, Fragment, useEffect } from 'react';
import DatePicker, { today } from '../DatePicker/DatePicker';
import { IoIosCalendar } from 'react-icons/io';
import PlainBanner from '../Banner/PlainBanner';
import elysiaClient from '../../utils/elysiaClient';

const getFormattedDate = (value = '') => {
  const date = value ? new Date(value) : new Date();
  const attachZero = (value) => (`${value}`.lenght === 1 ? `0${value}` : value);

  const day = attachZero(date.getDate());
  const month = attachZero(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
};

function CategoryPage({
  title,
  category,
  consumeData,
  consumeSelectedDate,
  children,
}) {
  const [disableDatePicker, setDisableDatePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false); // Applies to small screens (<=990px)

  const provideData = (data) => {
    if (consumeData) {
      consumeData(data);
    }
  };

  const provideSelectedDate = (date) => {
    if (consumeSelectedDate) {
      consumeSelectedDate(date);
    }
  };

  const fetchData = async (date) => {
    setDisableDatePicker(true);
    provideData(null);
    const res = await elysiaClient.articles.getAll({
      queryParams: {
        category,
        date_published: date,
      },
    });

    if (res) {
      provideData(res.data.data.rows);
      provideSelectedDate(new Date(date).toDateString());
    }

    setDisableDatePicker(false);
  };

  useEffect(() => {
    (() => fetchData(getFormattedDate()))();
  }, [category]);

  const handlePicked = (date) => {
    fetchData(getFormattedDate(date));
  };

  return (
    <Fragment>
      <PlainBanner>
        <h1 className="ta-center headline headline-3">{title}</h1>
      </PlainBanner>

      <div aria-label="JJC" className="page jjc-page">
        <section className="section">
          <section className="section__inner">
            <div className="grid gap-1 content-by-date">
              <div className="calendar">
                <div className="flex jc-space-between calendar__header">
                  <h6>Pick a date</h6>
                  <IoIosCalendar
                    title="Toggle calendar"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    className="calendar__toggler icon"
                  />
                </div>

                <DatePicker
                  className={showDatePicker ? 'show' : ''}
                  onPicked={handlePicked}
                  disabled={disableDatePicker}
                />
              </div>

              <section className="category-page__content grid grid-3 gap-1">
                {children}
              </section>
            </div>
          </section>
        </section>
      </div>
    </Fragment>
  );
}

export default CategoryPage;
