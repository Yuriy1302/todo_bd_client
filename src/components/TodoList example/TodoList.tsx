import React from 'react';

import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';

import { getListDataById } from '../../slices/list.action';

const TodoList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id} = useParams();

    console.log('params in TodoList => ', id);

    const { token } = useSelector((state: RootState) => state.user);
    const { currentList } = useSelector((state: RootState) => state.list);

    console.log('Token in TodoList Widget => ', token);

    // const currentListMemo = React.useMemo(() => currentList, []);
    

    React.useEffect(() => {
        if (token && id) {
            dispatch(getListDataById({ token, listId: id }))
        }
    }, [id]);

    console.log('currentList ==> ', currentList);
    

    return (
        <div>
            <h2 style={{ color: 'yellowgreen' }}>List # {currentList?.listId}</h2>
            <ul>
                {currentList?.tasks && currentList.tasks.map((task: any) => (
                    <li key={task.taskId}>{task.text}</li>
                ))}
            </ul>
        </div>
        
    );
};

export default TodoList;
