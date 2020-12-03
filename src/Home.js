import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from "./Card";

function Home() {
    return (
        <div className="home">
       
            <Banner/>

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg?__cf_chl_captcha_tk__=995b8eca6212e8b32b55d06cdb974c58ec0b92c9-1606839463-0-ATc-lF5FXYYq2hfVj2wcXqfvILPlpPmm9wUVJIYaz3qqgzXi9rHZnFi5uUYKh37HLJMa8e0XcWgSuJmx1RPOLtwdO0pAHdq4Mv3dQM1H4wZW7a6Sjae6XPGzFFCNJWNG2X5CXxp7zCqQBt8D-wcntcHAuLb0id8YQQSHhixjP7im4m1lxelNK8A-un42THXsZLN92mTKN4182moGuAQWFtZNL0QnEEyUCmk8Ei3W0hln2SWMRW2-ZK-_UNzLh76y8wXBIOMRr1I2zcRat-CEIzVbGO8I7yKrZaY2ioz8NOlqH5RFl83C8I7m8xUgWiQ0sa30NvuYeU6iGeKzvSL4CKzdwcPraQ_5hzyBrHc0kPU-FvSOYGj5MQRuC3wb79knvIxORi8_HOKNLLd7ivSNCOPHhmQ84lSavS6q_JJNFbuKLRBMAFhrgDpLgcIZuLnB8w-tQbrk76JXhZRhUbpQt1IfMU5lRc00xS1d11GNhh6ayKMPfFMaDcliJxEgJmpd84UpY6L30rJZuF72x_SdThLShnO9nQV7rRltoOqZBYG7vh3aBBFNOj6Fh4-O-vV2Ysq83638Ft-KTKC_p5e31EM"
                
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home
