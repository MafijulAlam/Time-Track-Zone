import React, { useState } from 'react';
import ClockForm from '../clock-form';
import classes from './index.module.css';

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setisCreate] = useState(false);

  const handleClock = (values) => {
    createClock(values);
  };

  return (
    <div className={classes.clockAction}>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setisCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}

      {isEdit && (
        <>
          <h3>Edit Clock</h3>

          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>Create A New Clock</h3>

          <ClockForm
            // values={clock}
            handleClock={handleClock}
          />
        </>
      )}
    </div>
  );
};

export default ClockActions;
