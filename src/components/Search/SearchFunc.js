import React, { useState } from 'react';

export const SearchFunc = () => {
  const [search, setSearch] = useState([
    {
      user: 'minal',
      phone: 9841329130,
      address: 'thiaba',
    },
    {
      user: 'anup',
      phone: 9841654654,
      address: 'godawari',
    },
    {
      user: 'sabin',
      phone: 9841325865,
      address: 'taukhel',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      SearchFunc:{' '}
      <input type="search" onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {search
          .filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (val.user.includes(searchTerm)) {
              return val.user;
            }
          })
          .map((item, index) => {
            return (
              <>
                <li>{item.user}</li>
                <li>{item.address}</li>
                <li>{item.phone}</li>
              </>
            );
          })}
      </ul>
    </div>
  );
};
