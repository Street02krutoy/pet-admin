import React from 'react';
import ListForm from "src/components/atoms/listForm/ListForm";
import AvatarsListForm from "src/components/atoms/avatarsListForm/AvatarsListForm";

const PetCard = () => {
    return (
        <div className="ml-4 mr-4 mb-4">
            <ListForm>
                <div className="flex gap-3">
                <AvatarsListForm/>
                <div className="grid gap-1 md:grid-cols-1">
                    <h1 className="text-black">Lorem ipsum</h1>
                    <h4 className="text-black text-xs">dolor sit amet, consectetur</h4>
                </div>
                </div>
            </ListForm>
        </div>
    );
};

export default PetCard;