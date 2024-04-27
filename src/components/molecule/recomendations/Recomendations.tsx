import React from 'react';
import MessageField from "src/components/atoms/textField/Message/MessageField";
import SendMessageButton from "src/components/molecule/buttons/SendMassage/SendMessageButton";

const Recomendations = () => {
    return (
        <div className="pt-5 ml-5 mr-5">
            <MessageField/>
            <SendMessageButton/>
        </div>
    );
};

export default Recomendations;