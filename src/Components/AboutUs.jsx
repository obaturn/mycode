import React, { useEffect, useState } from "react";
import nivea from "./Assets/nivea.PNG";
import wig from "./Assets/wig.PNG";
import handbag from "./Assets/handbag.PNG";
import styles from "./TopBan.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { FaStar, FaSearch } from "react-icons/fa";
import { BsPerson, BsCart } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import KingsStoreToday from "./KingsStoreToday";

const images = [nivea, wig, handbag];
const texts = ["ORDER NOW >", "LIMITED STOCK AVAILABLE!", "Call for deals 08104375142"];
const brands = ["NIVEA | BRAND DAY", "WIGS | HOT DEALS", "HANDBAGS | LIMITED STOCK"];

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* TOP BANNER WITH ANIMATION */}
            <div className={styles.topNav}>
                <div className={styles.leftSection}>
                    <span className={styles.brandText}>{brands[currentIndex]}</span>
                </div>
                <div className={styles.centerSection}>
                    <img src={images[currentIndex]} alt="Promo" className={styles.bannerImage} />
                </div>
                <div className={styles.rightSection}>
                    <span className={styles.bannerText}>{texts[currentIndex]}</span>
                </div>
            </div>

            {/* JUMIA-STYLE NAVBAR */}
            <div className={styles.secondNav}>
                <div className={styles.logoSection}>
                    <FiAlignJustify className={styles.menuIcon} />
                    <span className={styles.logoText}>KINGS-STORE</span>
                    <FaStar className={styles.starIcon} />
                </div>

                {/* SEARCH BAR */}
                <div className={styles.searchSection}>
                    <div className={styles.searchBox}>
                        <FaSearch className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search products, brands and categories"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <button className={styles.searchButton}>Search</button>
                </div>

                {/* RIGHT SECTION: ACCOUNT, HELP, CART */}
                <div className={styles.rightNavSection}>
                    <button className={styles.navButton}>
                        <BsPerson /> Account ▼
                    </button>
                    <button className={styles.navButton}>
                        <IoIosHelpCircleOutline /> Help ▼
                    </button>
                    <button className={styles.cartButton}>
                        <BsCart /> Cart
                    </button>
                </div>
            </div>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutUsTittle}>About Us</h2>
                <div className={styles.aboutUsNav}>
                    <span>Our Vision</span>
                    <span>KingsStore Today</span>
                    <span>Our History</span>
                    <span>Awards</span>
                </div>
                <div className={styles.aboutSection}>
                    <img src={nivea} alt="Our Vision" className={styles.aboutImage}/>
                    <div className={styles.overlayText}>
                        <h3>Our Vision</h3>
                        <p>We are building the most beloved and trusted shopping destination for Africans.</p>
                    </div>
                </div>

                <div className={styles.aboutSection}>
                    <img src={wig} alt="Jumia Today" className={styles.aboutImage}/>
                    <div className={styles.overlayText}>
                        <h3>KINGS-STORE Today</h3>
                        <p>Providing millions of customers with quality products and great deals every day.</p>
                    </div>
                </div>

                {/* THIRD SECTION: Our History */}
                <div className={styles.aboutSection}>
                    <img src={handbag} alt="Our History" className={styles.aboutImage}/>
                    <div className={styles.overlayText}>
                        <h3>Our History</h3>
                        <p>From a small startup to Africa’s largest online store, our journey continues.</p>
                    </div>
                </div>
            </div>
            <KingsStoreToday/>


        </>
    );
};

export default AboutUs;




