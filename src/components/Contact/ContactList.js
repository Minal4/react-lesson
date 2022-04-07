import React, { useState } from 'react';

export const ContactList = ({ contactDetail }) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div>
      <div className="column">
        <div className="image">
          <img src={contactDetail.image} alt="im" />
        </div>
        <div className="content">
          <h4>{contactDetail.name}</h4>
          <p>Email:{contactDetail.email}</p>
          <button type="submit" onClick={() => setShowAge(!showAge)}>
            Toggle Age
          </button>
          {showAge && <p>{contactDetail.age}</p>}
        </div>
      </div>
    </div>
  );
};
