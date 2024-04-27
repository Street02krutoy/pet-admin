import React from 'react';
import Header from 'src/components/organism/header/Header';
import Main from "src/components/template/main/Main";
import MessageField from "src/components/atoms/textField/Message/MessageField";

const GeneralPage = () => {
    return (
        <Main>
            <div>
                <MessageField/>
            </div>
        </Main>
    );
};

export default GeneralPage;