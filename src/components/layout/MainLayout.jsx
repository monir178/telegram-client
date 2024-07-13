import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <h1>SideNav</h1>
            <Outlet />
            <h1>Footer</h1>

        </div>
    )
}

export default MainLayout