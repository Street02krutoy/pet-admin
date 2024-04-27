import React from 'react';
import Main from "src/components/template/main/Main";
import ListPets from "src/components/organism/ListPets/ListPets";
import MedCard from "src/components/molecule/MedCard/MedCard";
import MainForm from "src/components/organism/mainForm/MainForm";

const GeneralPage = () => {
    return (
        <Main>
            <div className="flex gap-5">
                <ListPets/>
                <MainForm/>

            </div>
        </Main>
    );
};

export default GeneralPage;