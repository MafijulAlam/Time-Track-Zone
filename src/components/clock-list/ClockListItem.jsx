import React, { useEffect } from 'react';
import classes from './ClockList.module.css';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display/Index';
import useClock from './../../hooks/useClock';

import { formatDistance } from 'date-fns';
import useTimer from './../../hooks/useTimer';
import useEvents from './../../hooks/useEvents';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  if (!date || !timer) return null;

  return (
    <div>
      <ClockDisplay
        localClock={localClock}
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />

      <h4 className={classes.text3}>
        Difference is {formatDistance(localClock, timer)}
      </h4>
    </div>
  );
};

export default ClockListItem;
