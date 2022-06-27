import React from 'react'

const Cunnect = () => {
  return (
    <section class="contact-section bg-primary mt-5">
        <div class="containerr">
            <div class="contact-header">
                <h1 class="text-white">Is degital success eluding you? <br/> <span class="font-bold">We can help</span>
                </h1>
            </div>
            <div class="contact-input">
                <div class="input "><input type="text" class="bg-primary" placeholder="Email"/></div>
                <div class="input "><input type="text" class="bg-primary" placeholder="Phone"/></div>
            </div>
            <div class="contact-button res-contact-button ">
                <a href="#" target="_blank" class="btnn btn-signup res-btn-signup bg-white text-primary mobole-view">
                    Sign Up For Free<i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Cunnect