import React from 'react';

const StudentTable = () => {

  //Data are stored in the array of object
  const students = [
    { id: "1", name: "Shivangi", courses: ["React", "Node", "MongoDB"] },
    { id: "2", name: "Rahul", courses: ["React", "Node", "MongoDB"] },
    { id: "3", name: "Rohit", courses: ["React", "Node", "MongoDB"] },
    { id: "4", name: "Raj", courses: ["React", "Node", "MongoDB"] },
    { id: "5", name: "Riya", courses: ["React", "Node", "MongoDB"] },
    { id: "6", name: "Riya", courses: ["React", "Node", "MongoDB"] },
    { id: "7", name: "Riya", courses: ["React", "Node", "MongoDB"] },
    { id: "8", name: "Riya", courses: ["React", "Node", "MongoDB"] },
    { id: "9", name: "Riya", courses: ["React", "Node", "MongoDB"] },
  ];

  return (
    <div className=" w-[80%] mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Student Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-400 border-b border-blue-600">
            <th className="py-2 px-4 text-left font-medium">ID</th>
            <th className="py-2 px-4 text-left font-medium">Name</th>
            <th className="py-2 px-4 text-left font-medium">Courses</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b border-blue-200">
              <td className="py-2 px-4 text-left">{student.id}</td>
              <td className="py-2 px-4 text-left">{student.name}</td>
              <td className="py-2 px-4 text-left">{student.courses.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
