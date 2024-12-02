import React, { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import BackgroundSVG from "../../assets/background.svg";
import "./Buy_Page.css";

const Buy_Page = () => {
  const [balance, setBalance] = useState(100); // Balance with initial being 100 (Change the default to actual data in backend)
  const [pagesToBuy, setPagesToBuy] = useState(0); // The numbers of pages the user input
  const [paymentMethod, setPaymentMethod] = useState("ZaloPay");
  const pricePerPage = 500; // Price per page (500 VNĐ)
  const totalPrice = pagesToBuy * pricePerPage;

  const handleBuyPages = () => {
    if (pagesToBuy > 0) {
      const confirmPurchase = window.confirm(
        `You are about to buy ${pagesToBuy} page(s) for ${totalPrice.toLocaleString()} VNĐ using ${paymentMethod}. Do you want to proceed?`
      );
  
      if (confirmPurchase) {
        setBalance(balance + pagesToBuy); // Update balance
        alert(
          `You successfully bought ${pagesToBuy} page(s) for ${totalPrice.toLocaleString()} VNĐ using ${paymentMethod}.`
        );
        setPagesToBuy(0); // Reset input field
      }
    } else {
      alert("Please enter a valid number of pages to buy.");
    }
  };
  

  return (
    <div>
      <Navbar property="Registered User" />
      <div
        style={{
          backgroundImage: `url(${BackgroundSVG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="container">
          <h2 className="page-balance">
            Current Page Balance: {balance.toLocaleString()} pages
          </h2>
          <div className="buy-form">
            <label htmlFor="pagesToBuy" className="form-label">
              Enter pages to buy:
            </label>
            <input
                type="number"
                id="pagesToBuy"
                className="form-input"
                min="0"
                value={pagesToBuy === 0 ? "" : pagesToBuy} // Display blank for 0
                onChange={(e) => {
                    const value = e.target.value;
                    setPagesToBuy(value === "" ? 0 : parseInt(value, 10)); // Parse and handle empty input
                }}
            />
            <label htmlFor="paymentMethod" className="form-label">
              Select payment method:
            </label>
            <select
              id="paymentMethod"
              className="form-select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="ZaloPay">ZaloPay</option>
              <option value="MoMo">MoMo</option>
              <option value="BkPay">BkPay</option>
            </select>
            <p className="total-price">
              Total Price: {totalPrice.toLocaleString()} VNĐ
            </p>
            <button className="buy-button" onClick={handleBuyPages}>
              Buy Pages
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy_Page;
