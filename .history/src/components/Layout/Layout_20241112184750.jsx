import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./L"

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
