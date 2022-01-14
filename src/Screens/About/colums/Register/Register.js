import React from 'react'
import './Register.css'
import '../../../../index.css'
import Button from '../../../../components/Button/Button'

const Register = () => {
    return (
        <div className={'Register'}>
            <div className={['container', 'main'].join(' ')}>
                <div className={'button'}>
                    <h2 className={'h2'}>Reigster today +</h2>
                    <p className={'p'}>Follow</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className={'form'}>
                    <div>
                        <h3 className={'h3'}>Join our newsletter</h3>
                        <input type='text' placeholder='Email'/>
                        <Button 
                            className={'subscribe'}
                            icon='E'
                            text='Subscribe'
                            color='white'
                            backgroundColor='black'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
