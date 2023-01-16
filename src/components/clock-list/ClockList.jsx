import React from 'react';
import ClockListItem from './ClockListItem';
import './ClockList.css';

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      <h3 className="list">Others Colcks</h3>
      {/* <hr /> */}
      {clocks.length === 0 ? (
        <h3 className="noClock">There is no clock, Please create one</h3>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              localClock={localClock}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;
