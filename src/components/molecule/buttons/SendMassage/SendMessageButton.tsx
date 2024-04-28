import React from 'react';
import SendMessageButtonForm from '../../../atoms/buttonForm/SendMessageButton/SendMessageButtonForm';

const SendMessageButton = () => {
    const onClick = () =>{
        alert("Сообщение доставлено!")
    }
    return (
        <div>
            <SendMessageButtonForm onClick={onClick}>Send message</SendMessageButtonForm>
        </div>
    );
};

export default SendMessageButton;