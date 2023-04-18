import React from 'react'

export default function Signup() {
    return (
        <main className='flex-row justify-center '>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign Up</h4>
                    <div className='card-body'>
                        <form >
                            <input
                                className='form-input'
                                placeholder='Your username'
                                name='username'
                                type='username'
                                id='username'

                            />
                            <input
                                className='form-input'
                                placeholder='Your email'
                                name='email'
                                type='email'
                                id='email'

                            />
                            <input
                                className='form-input'
                                placeholder='pasword'
                                name='password'
                                type='password'
                                id='password'

                            />
                            <button className='btn d-block w-150' type='submit'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>)
}
