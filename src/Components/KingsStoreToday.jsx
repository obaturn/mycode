import React from "react";
import Style from "./Kings.module.css";
import hourlyGlass from "./Assets/glass.PNG";

const data = [
    {
        title: "6,000,000 Products",
        text: "Jumia offers the widest assortment at an unbeatable price.",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740817045/back_woman_gw5nii.png"
    },
    {
        title: "13 African Countries",
        text: "The Pan African Online Commerce",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740817721/team_work_gwequx.png"
    },
    {
        title: "Over 50,000 International & National Brands",
        text: "Samsung, Infinix, Innjoo, Vero Moda, Jack & Jones...",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740817809/iphone_w8psmx.png"
    },
    {
        title: "Over 10,000 Active Vendors",
        text: "Nigeria’s Biggest Online Mall",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740817857/super_market_lcis3a.png"
    },
    {
        title: "#1 E-Commerce Website, Nigeria",
        text: "With Over 15 Million Monthly Visitors",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740818150/family-pics_qws8ij.png"
    },
    {
        title: "Over 4 Million Subscribers",
        text: "Discover First the Best Deals on Jumia",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740817641/group_human_kyeoko.png"
    },
    {
        title: "10 Commercial Events",
        text: "Discover the Events Changing Africa's",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740818665/meeting_gpflfu.png"
    },
    {
        title: "Many App Downloads",
        text: "During Black Friday 2015",
        imageUrl: "https://res.cloudinary.com/dkrpginfm/image/upload/v1740818617/black-friday_jlujob.png"
    },
];

const KingsStoreToday = () => {
    return (
        <div className={Style.KingsContainer}>
            <div className={Style.headings}>
                <img src={hourlyGlass} alt="Hourly" className={Style.Icon} />
                <h2 className={Style.title}>KingsStore Today</h2>
                <p className={Style.subtitle}>In a Nutshell</p>
            </div>

            <div className={Style.gridContainer}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={Style.card}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}>
                        <div className={Style.overlay}></div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KingsStoreToday;
