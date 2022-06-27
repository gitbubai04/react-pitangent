import React from 'react'

const Blog = () => {
  return (
    <section class="containerr my-5">
        <div class="blog-header ">
            <div class="heading">
                <h1>our tranding blog</h1>
            </div>
            <div class="view-more">
                <a href="#" class="castom-gap">
                    <p>view more</p><i class="fas fa-chevron-right ml-4"></i>
                </a>
            </div>
        </div>
        <hr/>
        <div class="blog-post mt-5">
            <div class="left-blog">
                <img src="image/blog1.png" alt=""/>
                <h6 class="trending-blog mt-5 text-muted">trending blog</h6>
                <h1 class="tranding-h1 mt-3">guide to evlved syber securitytips for this new COVID era</h1>
                <p class="para mt-4 blog-para">In publishing and graphic design, Lorem text commonly used to
                    demonstrate the visual form of a document or a typeface without relying on meaningful</p>
            </div>
            <div class="right-blog">
                <div class="up-blog">
                    <img src="image/blog2.png" alt=""/>
                    <h6 class="trending-blog mt-5 text-muted">trending blog</h6>
                    <h1 class="tranding-h1 tranding-h1-right mt-3">Rice of robotic in healthcare boon or course</h1>
                </div>
                <div class="down-blog mt-5">
                    <img src="image/blog3.png" alt=""/>
                    <h6 class="trending-blog mt-5 text-muted">trending blog</h6>
                    <h1 class="tranding-h1 tranding-h1-right mt-3">ioMT is revolutionzing the healthcare industry in the use</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog