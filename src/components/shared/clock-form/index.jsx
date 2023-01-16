import React, { useEffect, useState } from 'react';
import { getOffset } from './../../../utils/timezone';
import { TIMEZONE_OFFSET } from './../../../constants/timezone';
import classes from './index.module.css';

/**
 *
 *  1.title won't be changed for a local clock
 *  2. to create a new clock we have to create title, timezone, offset
 * for edit we have title, timezone, offset
 */

const ClockForm = ({
  values = { title: '', timezone: 'GMT', offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'offset') {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  return (
    <div className={classes.clockForm}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Enter Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            disabled={!title}
          />
        </div>

        <div className={classes.timezone}>
          <label htmlFor="timezone">Enter Timezone</label>

          <select
            id="title"
            name="timezone"
            onChange={handleChange}
            value={formValues.timezone}
          >
            <option value="GMT">GMT</option>
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="EST">EST</option>
            <option value="BST">BST</option>
            <option value="EDT">EDT</option>
            <option value="MST">MST</option>
          </select>
        </div>
        {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC') && (
          <div className={classes.offset}>
            <label htmlFor="offset">Enter Offset</label>

            <select
              name="offset"
              id="offset"
              onChange={handleChange}
              value={formValues.offset / 60}
            >
              {getOffset().map((offset) => (
                <option key={offset + 1} value={offset}>
                  {' '}
                  {offset}
                </option>
              ))}
            </select>
          </div>
        )}

        <button>{edit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default ClockForm;
