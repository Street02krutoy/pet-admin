import React from 'react';
import ListForm from "src/components/atoms/listForm/ListForm";
import List from "src/components/molecule/list/List";

const ListPets = () => {
    return (
        <div>
            <div className="flex flex-column">
            <h1 className="text-2xl font-bold pl-8">Список питомцев</h1>
            </div>
            <List/>
        </div>
    );
};

export default ListPets;