import React from 'react';
import AvatarMedForm from "src/components/atoms/avatarMedForm/AvatarMedForm";
import DateBurn from "src/components/atoms/date/DateBurn";
import PorodaField from "src/components/atoms/textField/InfoPet/petField/porodaField/PorodaField";
import OkrasField from "src/components/atoms/textField/InfoPet/petField/okrasField/OkrasField";
import DopField from "src/components/atoms/textField/InfoPet/petField/dopField/DopField";
import NameField from "src/components/atoms/textField/InfoPet/ownerField/nameField/NameField";
import AdressField from "src/components/atoms/textField/InfoPet/ownerField/adressField/AdressField";
import PhoneField from "src/components/atoms/textField/InfoPet/ownerField/phoneField/PhoneField";
import Calendar from "src/components/molecule/calendar/Calendar";

const MedCard = () => {
    return (
        <div className="pt-5 ml-5 mr-5">
            <div className="flex gap-3 ">
                <AvatarMedForm/>
                <div className="grid md:grid-cols-1">
                    <h1 className="text-black">Lorem ipsum</h1>
                    <DateBurn/>
                </div>
            </div>
            <div>
                <div className="mt-6">
                    <PorodaField/>
                    <OkrasField/>
                    <DopField/>
                </div>
                <div>
                    <h1 className="text-2xl mt-10">О владельце</h1>
                    <NameField/>
                    <PhoneField/>
                </div>
            </div>
        </div>
    );
};

export default MedCard;