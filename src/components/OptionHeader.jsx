import React from 'react';

function OptionHeader({ title, Icon, styles }) {
  return (
    <div
      className={`flex flex-col   cursor-pointer
         hover:text-black text-gray-600 
        items-center  first-letter ${styles} `}>
      {Icon && (
        <>
          <Icon className="text-xl" />
          <h3 className="text-xs hidden md:block font-bold">{title}</h3>
        </>
      )}
    </div>
  );
}

export default OptionHeader;
