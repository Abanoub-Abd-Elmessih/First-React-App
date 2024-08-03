import React from 'react';
import PropTypes from 'prop-types';

function Divider({ borderColor = 'border-white', starColor = 'text-white' }) {
  return (
    <div className="flex items-center justify-center">
      <div className={`border-t-4 ${borderColor} w-24 mx-2`}></div>
      <i className={`fa-solid fa-star ${starColor}`} />
      <div className={`border-t-4 ${borderColor} w-24 mx-2`}></div>
    </div>
  );
}

Divider.propTypes = {
  borderColor: PropTypes.string,
  starColor: PropTypes.string,
};

export default Divider;
