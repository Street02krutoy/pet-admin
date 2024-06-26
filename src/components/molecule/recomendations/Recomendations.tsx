import React from 'react';
import MessageField from "src/components/atoms/textField/Message/MessageField";
import SendMessageButton from "src/components/molecule/buttons/SendMassage/SendMessageButton";
import Calendar from "src/components/molecule/calendar/Calendar";
import SendMessageButtonForm from "src/components/atoms/buttonForm/SendMessageButton/SendMessageButtonForm";
import Recommends from "src/components/atoms/textField/Recomends/Recomends";

const Recomendations = () => {
    return (
        <div className="pt-5 ml-5 mr-5">
            <Calendar/>
            <MessageField/>
            <SendMessageButton/>
        </div>
    );
};

export default Recomendations;