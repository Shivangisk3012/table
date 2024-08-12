import React from 'react';

const DataTable = () => {
  // Define your data here 
  //Data are stored in object
  const data = {
    id: 1,
    name: 'Shivangi',
    age: 28,
    email: 'Shivangi@gmail.com',
  };

  return (
    <div className="w-[80%] mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Data Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-400 border-b border-blue-300">
            <th className="py-2 px-4 text-left font-medium">Key</th>
            <th className="py-2 px-4 text-left font-medium">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(key => (
            <tr key={key} className="border-b border-blue-200">
              <td className="py-2 px-4 text-left">{key}</td>
              <td className="py-2 px-4 text-left">{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
