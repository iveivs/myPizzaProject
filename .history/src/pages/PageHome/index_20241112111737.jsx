import styles from "./PageHome.module.css";
import Banner from "./components/banner/Banner";
import PageProducts from "../PageProducts";
import { Reviews } from "../../components/Layout/Reviews/Reviews";
import T

function PageHome() {
    return (
        <>
            <Banner />
            <PageProducts />
            <Reviews  />

            {/* <header className={styles.banner}>
                <div className="container indent"></div>
            </header>
            <header className={styles.products}>
                <div className="container indent"></div>
            </header>
            <header className={styles.reviews}>
                <div className="container indent"></div>
            </header>
            <footer className={styles.footer}>
                <div className="container indent"></div>
            </footer> */}
        </>
    );
}

export default PageHome;
