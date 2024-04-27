import React from 'react';
import Header from 'src/components/organism/header/Header';
import Main from "src/components/template/main/Main";
import MessageField from "src/components/atoms/textField/Message/MessageField";
import ListPets from "src/components/organism/ListPets/ListPets";
import AvatarsListForm from "src/components/atoms/avatarsListForm/AvatarsListForm";

const GeneralPage = () => {
    return (
        <Main>
            <div>
                <ListPets/>
            </div>
        </Main>
    );
};

export default GeneralPage;