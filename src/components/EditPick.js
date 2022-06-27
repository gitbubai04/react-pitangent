import React from 'react'

const EditPick = () => {
  return (
    <section class="containerr my-5">
        <div class="edit-pick">
            <div class="left-pick">
                <div class="heading">
                    <h1>Editor's pick</h1>
                </div>
                <hr/>
                <div class="left-part">
                    <div class="left-part-img">
                        <img src="image/limg1.png" alt=""/>
                    </div>
                    <div class="left-part-data">
                        <h3 class="tranding-h1 castom-text-width">looking for best app devlopment courses? the trending ones hear!
                        </h3>
                    </div>
                </div>
                <hr/>
                <div class="left-part">
                    <div class="left-part-img">
                        <img src="image/limg2.png" alt=""/>
                    </div>
                    <div class="left-part-data">
                        <h3 class="tranding-h1 castom-text-width">want to see the future? 3 way through which AI all we show you 2021
                            business changes!</h3>
                    </div>
                </div>
                <hr/>
                <div class="left-part">
                    <div class="left-part-img">
                        <img src="image/limg3.png" alt=""/>
                    </div>
                    <div class="left-part-data">
                        <h3 class="tranding-h1 castom-text-width">want to see the future? 3 way through which AI all we show you 2021
                            business changes!</h3>
                    </div>
                </div>
                <hr/>
            </div>
            <div class="right-pick bg-light">
                <div class="body-content">

                    <div class="png-img">
                        <img src="image/subscribe.png" alt=""/>
                    </div>

                    <h3 class="tranding-h1 font-sizt-castom mt-5">subcribe to get our best content in your inbox</h3>
                    <div class="input-box mt-5">
                        <div class="input "><input type="text" placeholder="Email address.."/></div>
                        <div class="button"><button type="submit"
                                class="bg-primary text-white border-0">Subscribe</button></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default EditPick