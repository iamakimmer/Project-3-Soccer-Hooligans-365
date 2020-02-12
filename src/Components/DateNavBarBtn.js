/* eslint-disable react/prop-types */
import React from 'react';
import '../Pages/button.css';

const DateNavBarBtn = (props) => {
  const { styleClasses, btnClick, date } = props;

  return (
    <button type="button" className={styleClasses} onClick={btnClick}>
      {date}
    </button>
  );
};

export default DateNavBarBtn;
