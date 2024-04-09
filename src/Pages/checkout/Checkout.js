import React, { useEffect } from "react";
import "./checkout.css";
import BGImage from "../../images/checkout page images/BGImage.png";
import accountWhiteImage from "../../images/checkout page images/UsersWhite.png";
import locationWhiteImage from "../../images/checkout page images/LocationWhite.png";
import paymentWhiteImage from "../../images/checkout page images/PaymentWhite.png";

import accountBlackImage from "../../images/checkout page images/UsersBlack.png";
import locationBlackImage from "../../images/checkout page images/LocationBlack.png";
import paymentBlacksImage from "../../images/checkout page images/PaymentBlack.png";

import checkoutImage from "../../images/checkout page images/10219 2.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { useTheme } from "../../contexts/ThemeContext";
// import Header from "../../components/Header";
export default function Checkout() {
  const body = document.querySelector("body");
  // const { isDarkTheme } = useTheme();

  // useEffect(() => {
  //   if (isDarkTheme) {
  //     body.classList.add("dark-mode");
  //     body.classList.remove("white-mode");
  //   } else {
  //     body.classList.add("white-mode");
  //     body.classList.remove("dark-mode");
  //   }
  // }, [isDarkTheme, body.classList]);
  return (
    <>
      {/* <Header isDarkTheme={isDarkTheme} /> */}
      <Navbar />
     <div className="checkout">
      <h1>Kasse</h1>
     <div className="checkout-page-container">
       
       <div className="checkout-details-left">
         <div className="detail-container">
           <h2>Rechnungsdetails</h2>
           <p>Um Ihre Bestellung aufzugeben, melden Sie sich bitte an oder registrieren Sie sich.</p>
           <button className="acc-btn">
             <span>
               <a href="#0">Login</a>
             </span>
           </button>
           <button className="acc-btn">
             <span>
               <a href="#0">Registrieren</a>
             </span>
           </button>
           <img
             // src={isDarkTheme ? accountWhiteImage : accountBlackImage}
             src={accountWhiteImage}
             alt="user"
           />
         </div>
         <div className="detail-container">
           <h2>Lieferadresse</h2>
           <img
             // src={isDarkTheme ? locationWhiteImage : locationBlackImage}
             src={locationWhiteImage}
             alt="location"
           />
           <div className="box">
            <input type="text" placeholder="Strasse" className="large-input"/>
           </div>
           <div className="box">
            <input type="text" placeholder="Plz" />
            <input type="text" placeholder="Ort" />
           </div>
         </div>
         <div className="detail-container">
           <h2>Zahlungsart auswählen</h2>
           <img
             // src={isDarkTheme ? paymentWhiteImage : paymentBlacksImage}
             src={paymentWhiteImage}
             alt="payment"
           />
           <div className="box">
                   <input type="radio" name="check"/><label>TWINT</label>
           </div>
           <div className="box">
                   <input type="radio" name="check"/><label>Barzahlung</label>
           </div>
         </div>
         <div className="detail-container outer">
         <h2>Coupon</h2>
         <img
             // src={isDarkTheme ? paymentWhiteImage : paymentBlacksImage}
             src={paymentWhiteImage}
             alt="payment"
           />
           <label>Coupon Code eingeben  </label> <input type="text" placeholder ="XXXX-XXXX-XXXX"/>
         </div>
       </div>
       <div className="checkout-right">
         <header>
           <img src={checkoutImage} alt="pizza" />
           <div className="info">
             <h3>Wow ! Pizza</h3>
             <br/>
           </div>
         </header>
         <section className="cart-items-container">
           <p className="apply-ur-coupon">
           <br/>
           <div className="inputs"><input type="checkbox"/><label> Mit deiner Bestellung erklärst du dich mit unseren Allgemeinen
                                                                   Geschäftsbedingungen und Datenschutzbestimmungen einverstanden. </label></div>
           </p>
         
      
         </section>
         <section className="bill-details">
           <h3>Rechnungsdetails:</h3>
           <div className="bill-item">
             Total <span>55.00</span>
           </div>
           <div className="bill-item with-border">
           Liefergebühr:{" "}
             <span>
               <span style={{ color: "#FFC0C0" }}>5.00</span>
             </span>
           </div>
           <div className="bill-item with-border">
             {" "}
             Coupon-Rabatt: <span style={{ color: "#FFC0C0" }}>-12.00</span>
           </div>

           <div className="bill-item with-border">
             {" "}
             Zwischensumme: <span style={{ color: "#C0FFFF" }}>48.00</span>
           </div>

           <div className="bill-item with-black-border">
             8.1% MWST: <span style={{ color: "#FFC0C0" }}>3.90</span>
           </div>
           <div className="bill-item">
             {" "}
             Gesamtsummer: <span>CHF 51.90</span>
           </div>
<br/>
         </section>
       </div>
       <img className="bg-image" src={BGImage} alt="background" />
     </div>
     </div>
     <Footer/>
    </>
  );
}
