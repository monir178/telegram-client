import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=" h-screen w-64 fixed left-0 top-0 overflow-y-auto">
            <ul>
                <li className="p-4 cursor-pointer hover:bg-gray-300">
                    <Link to="/chat/1">Chat 1</Link>
                </li>
                <li className="p-4 cursor-pointer hover:bg-gray-300">
                    <Link to="/chat/2">Chat 2</Link>
                </li>
                <li className="p-4 cursor-pointer hover:bg-gray-300">
                    <Link to="/chat/3">Chat 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
