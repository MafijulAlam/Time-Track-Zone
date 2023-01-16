import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import './App.css';
import ClockList from './components/clock-list/ClockList';
import LocalClock from './components/local-clock/LocalClock';
import useEvents from './hooks/useEvents';

const localClock_init = {
  title: 'My clock',
  offset: 0,
  timezone: '',
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...localClock_init });
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = shortid.generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updateClock) => {
    const newUpdatedClock = clocks.map((clock) => {
      if (clock.id === updateClock.id) return updateClock;
      return clock;
    });
    setClocks(newUpdatedClock);
  };

  const deleteClock = (id) => {
    const newUpdatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(newUpdatedClocks);
  };

  return (
    <div className="app">
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />

      <ClockList
        localClock={localClock.date}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
