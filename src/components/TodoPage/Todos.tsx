import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';

import { getListDataById } from '../../slices/list.action';

type TTodos = {
    listId: string;
};

const TodoList: React.FC<TTodos> = ({ listId }) => {
    const dispatch = useDispatch<AppDispatch>();

    const { token } = useSelector((state: RootState) => state.user);
    const { currentList } = useSelector((state: RootState) => state.list);

    React.useEffect(() => {
        if (token && listId) {
            dispatch(getListDataById({ token, listId: listId }))
        }
    }, [listId]);

    console.log('currentList ==> ', currentList);
    

    return (
        <div className="card p-3 ml-5" style={{ width: '100%' }}>
            {listId && <h2 style={{ color: 'yellowgreen' }}>List # {currentList?.listId}</h2>}
            <ul>
                {currentList?.tasks && currentList.tasks.map((task: any) => (
                    <li key={task.taskId}>{task.text}</li>
                ))}
            </ul>
        </div>
        
    );
};

export default TodoList;
