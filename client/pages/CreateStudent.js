import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
const CreateStudent = (props) => {
  const router = useRouter()
  // Define the state with useState hook
  const [student, setStudent] = useState({
    title: '',
    cotitle: '',
    email: '',
    department: '',
    date: '',
    enroll: '',
    university:''
  });

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/students', student)
      .then((res) => {
        setStudent({
          title: '',
          cotitle: '',
          email: '',
          department: '',
          date: '',
          enroll: '',
          university:''
        });

        // Push to /
        router.push('/confirm');
      })
      .catch((err) => {
        console.log('Error in Registration!');
      });
  };

  return (
    <div className='CreateStudent'>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-8 m-auto'>
            <br />
            <Link href='/' className='btn btn-outline-primary float-left'>
              Show Student List
            </Link>
          </div> */}
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Amispardha 2.0 : Amity Science Techno Festival 2022</h1>
            <p className='lead display-6 text-center'>Organized By: Amity School of Engineering and Technology, Amity University Patna 
Date: 01st December 2022</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Participant Name'
                  name='title'
                  className='form-control'
                  value={student.title}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Co-Participant Name'
                  name='cotitle'
                  className='form-control'
                  value={student.cotitle}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='email'
                  placeholder='EmailID'
                  name='email'
                  className='form-control'
                  value={student.email}
                  onChange={onChange}
                />
              </div>

              {/* <div className='form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='Phone No.'
                  className='form-control'
                  value={student.phoneno}
                  onChange={onChange}
                />
              </div> */}
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Department Name'
                  name='department'
                  className='form-control'
                  value={student.department}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date'
                  name='date'
                  className='form-control'
                  value={student.date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enrollment No.'
                  name='enroll'
                  className='form-control'
                  value={student.enroll}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='School/University Name'
                  name='university'
                  className='form-control'
                  value={student.university}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-primary btn-block mb-5 mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;