import React from 'react';
import DataTable from './component/DataTable'
import StudentTable from './component/StudenTable';


const App = () => {
  return (
    <div className='w-[80%]'>
     <DataTable/>
     <StudentTable/>
    </div>
  );
};

export default App;
