import styles from './Banner.module.css'

function Banner () {
    return (
        <>
        <section class="banner">
                <div class="container">
                    <div class={`${styles.modif_row} `}"row">
                        <div class="col-5">
                            <h1 class="banner_title">Pizza delivery</h1>
                            <p class="banner_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur assumenda debitis ducimus, odio reiciendis vero exercitationem aliquid nam inventore eius reprehenderit nisi blanditiis iste eligendi sint voluptate eos expedita quos.</p>
                            <a href="" class="button">Order delivery</a>
                        </div>
                        <div class="col-7">
                            
                            <img src="/images/banner.avif" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner