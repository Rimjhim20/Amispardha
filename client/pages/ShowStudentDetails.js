import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';

function ShowStudentDetails(props) {
  const router = useRouter()
  const [student, setStudent] = useState({});

  const { id } = router.query

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/students/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudentDetails');
      });
  }, [id]);

  // const onDeleteClick = (id) => {
  //   axios
  //     .delete(`http://localhost:8082/api/students/${id}`)
  //     .then((res) => {
  //      router.push('/');
  //     })
  //     .catch((err) => {
  //       console.log('Error form ShowStudentDetails_deleteClick');
  //     });
  // };

  const StudentItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Participant Name</td>
            <td>{student.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Co-Participant Name</td>
            <td>{student.cotitle}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>EmailID</td>
            <td>{student.email}</td>
          </tr>
          {/* <tr>
            <th scope='row'>4</th>
            <td>Phone No.</td>
            <td>{student.phoneno}</td>
          </tr> */}
          <tr>
            <th scope='row'>5</th>
            <td> Date</td>
            <td>{student.date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Department Name</td>
            <td>{student.department}</td>
          </tr>
          {/* <tr>
            <th scope='row'>6</th>
            <td>Date</td>
            <td>{student.date}</td>
          </tr> */}
          <tr>
            <th scope='row'>6</th>
            <td>Enrollment No.</td>
            <td>{student.enroll}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>University Name</td>
            <td>{student.university}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowStudentDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link href='/ShowStudentList' className='btn btn-outline-warning float-left'>
              Show Student List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Student's Record</h1>
            <p className='lead text-center'>View Student's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{StudentItem}</div>
          {/* <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(student._id);
              }}
            >
              Delete Student
            </button>
          </div> */}
          <div className='col-md-6 m-auto'>
            <Link
              href={`/edit-student/${student._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowStudentDetails;