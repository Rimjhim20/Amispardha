
import React from 'react';
import Link from "next/link";
const StudentCard = (props) => {
  const student = props.student;

  return (
    <div className='card-container'>
      <img
        src='/team.jpg'
        alt='students'
        height={150}
      />
      <div className='desc'>
        <h2>
          {student.title}
        </h2>
        <h2>{student.cotitle}</h2>
        <p>{student.department}</p>
        <h2>
          <Link href={`/show-student/${student._id}`}>see details</Link>
        </h2>
      </div>
    </div>
  );
};

export default StudentCard;