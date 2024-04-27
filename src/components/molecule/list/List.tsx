import React from 'react';
import ListForm from "src/components/atoms/listForm/ListForm";
import AvatarsListForm from "src/components/atoms/avatarsListForm/AvatarsListForm";
import Search from "src/components/molecule/search/Search";
import PetCard from "src/components/molecule/petCard/PetCard";

const List = () => {
    return (
        <div className="flex flex-column">
            <div className="bg-dark-violet border rounded-xl">
            <form>
                <Search/>
                <PetCard/>
                <PetCard/>
                <PetCard/>
                <PetCard/>
                <PetCard/>
                <PetCard/>
                <PetCard/>
                <PetCard/>

            </form>
        </div>
        </div>
    );
};

export default List;