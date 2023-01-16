import { format } from 'date-fns';
import React from 'react';
import classes from './Index.module.css';

const ClockDisplay = ({ title, date, timezone, offset }) => {
  const offsethour = offset / 60;

  return (
    <div className={classes.displayClock}>
      <h1>Title: {title}</h1>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>

      <p>
        {timezone}
        {offsethour > 0
          ? `+${Math.abs(offsethour)}`
          : `-${Math.abs(offsethour)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
