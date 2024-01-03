import React from 'react';


// ---
// import { Link, useParams } from 'react-router-dom';

export type TListsWidgetProps = {
    handleSelectList: (id: string | null) => void;
    lists: {
        listId: string | null;
        title: string | null;
        // complited: boolean | null;
    }[];
};

const ListsWidget: React.FC<TListsWidgetProps> = ({ lists, handleSelectList }) => {
    // const params = useParams();

    

    return (
        <div className="card" style={{ width: '300px' }}>
            <ul className="list-group">
                {lists.length > 0 && lists.map((list) => (
                    <li className="list-group-item" key={list.listId} onClick={() => handleSelectList(list.listId)}>
                        <h5>{list.title}</h5>
                        <span><i>#{list.listId}</i></span>
                        {/* <h5><Link to={`/todospace/${list.listId}`}>{list.title}</Link></h5> */}
                        {/* <span>{list.complited ? 'Completed' : 'Active'}</span> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListsWidget;
