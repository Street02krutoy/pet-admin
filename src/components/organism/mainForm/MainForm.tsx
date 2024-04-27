import React from 'react';
import MedCard from "src/components/molecule/MedCard/MedCard";
import Recomendations from "src/components/molecule/recomendations/Recomendations";

const MainForm = () => {
    return (
        <div className="flex bg-light-violet mt-8 mr-10 border rounded-xl">
            <MedCard/>
            <Recomendations/>
        </div>
    );
};

export default MainForm;