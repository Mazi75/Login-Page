import React from 'react';
import LoginImage from './Login.svg'

export class Register extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='base-container'>
                <div className='header'>Register</div>
                <div className='content'>
                    <div className='image'>
                        <img src={LoginImage} alt='Not Found'></img>
                    </div>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='Username'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='username'>Email</label>
                            <input type='email' name='Email' placeholder='Email'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='Password'>Password</label>
                            <input type='password' name='Password' placeholder='Password'/>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn'>Register  </button>
                </div>
            </div>
        )
    }
}