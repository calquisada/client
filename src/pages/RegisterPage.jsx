import React from 'react'

const RegisterPage = () => {
  return (
    <div className='register'>
      <h1>RegisterPage</h1>
      <div className='register_content'>
        <form>
          <input
            placeholder='First Name'
            name='firstname'
            required
          />
          <input
            placeholder='Last Name'
            name='lastname'
            required
          />
          <input
            placeholder='Email'
            name='email'
            type='email'
            required
          />
          <input
            placeholder='Password'
            name='password'
            type='password'
            required
          />
          <input
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            required
          />
          <input
            id='image' 
            type='file' 
            name='profileImage' 
            accept='image/*' 
            style={{ display: 'none' }} 
            required 
            />
            <label htmlFor='image'>
              <img src='/assets/addImage.png' alt='profile pic' />
              <p>Upload Your Photo</p>
            </label>
            <button>REGISTER</button>
        </form>
        <a href='/login'>Already have an account? Log in here!</a>
      </div>
    </div>
  )
}

export default RegisterPage