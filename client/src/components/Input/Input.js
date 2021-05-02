import React from 'react';

import './Input.css';

const Input = ({ message, sendMessage, setMessage }) => (
    <form className='form'>
        <input
            className='input'
            type='text'
            placeholder='입력해주세요.'
            value={message} 
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className='sendButton' onClick={(event) => sendMessage(event)}>보내기</button>
    </form>
)

export default Input