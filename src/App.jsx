import React from 'react';
import Data from './components/Data';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-t from-bg-bottom to-bg-top p-5">
        <Search />
        <Data />
      </div>
    </>
  );
};

export default App;
