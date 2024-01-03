import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Todos from './Todos';

// ---
// import { Outlet } from 'react-router-dom';

import { getAllLists } from '../../slices/list.action';
// import { TList } from '../../slices/list.slice';

import { RootState, AppDispatch } from '../../store';

import ListsWidget from './ListsWidget';

import './TodoPage.css';

const TodoPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { token } = useSelector((state: RootState) => state.user);
    const { lists } = useSelector((state: RootState) => state.list);

    // console.log('lists >>> ', lists);


    const [currentList, setCurentList] = React.useState<string>('');

    const handleSelectList = (id: string | null) => {
        if (!id) return void 0;
        setCurentList(id);
    };

    const listMemo = React.useMemo(() => lists, []);

    useEffect(() => {
        dispatch(getAllLists(token || ''));
        
    }, [listMemo]);

    return (
        <div className="container">
            <h1>Todo Page</h1>
            <div className="d-flex">
                <ListsWidget lists={lists} handleSelectList={handleSelectList} />
                {/* <Outlet /> */}
                <Todos listId={currentList} />
            </div>
        </div>
    );
};

export default TodoPage;
