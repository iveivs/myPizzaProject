import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import st

function Layout() {
    return (
        <div className="layout-wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
