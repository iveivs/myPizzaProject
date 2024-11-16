import styles from './Banner.module.css'

function Banner () {
    return (
        <>
        <section className="banner">
                <div className="container">
                    <div className={`${styles.modif_row}`}>
                        <div className={`${styles.left_infobox} col-5 `}>
                            <h1 className="banner_title">Pizza delivery</h1>
                            <p className="banner_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur assumenda debitis ducimus, odio reiciendis vero exercitationem aliquid nam inventore eius reprehenderit nisi blanditiis iste eligendi sint voluptate eos expedita quos.</p>
                            <a href="" className="button">Order delivery</a>
                        </div>
                        <div className={``}"temp col-7"> 
                            {/* <img src="/images/banner.avif" alt="" className={styles.banner_img}/> */}
                            
                            <div className="temp">1234</div>
                            someText
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner