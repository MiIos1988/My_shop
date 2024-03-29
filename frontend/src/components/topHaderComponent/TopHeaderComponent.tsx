import React from "react";
//@ts-ignore
import i18n from "../../i18n";

const TopHeaderComponent = () => {

  const handleLanguageChange = (lang: string) => {
    const newLanguage = lang;
    i18n.changeLanguage(newLanguage);
  }

  return (
    <div className="bg-dark mb-4 topHeader">
      <div className="topHeaderDiv d-flex justify-content-between mx-4">
        <div className="freeShop text-white my-auto ">
          <p className="mb-0">Free Shipping On Order Over $99</p>{" "}
        </div>
        <div className="rightDiv d-flex ">
          <select
            className="form-select me-2 selectElement"
            aria-label="Default select example"
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">Germany</option>
            <option value="sr">Serbia</option>
          </select>

          <select className="form-select selectElement selectElement2 " aria-label="Default select example">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="RSD">RSD</option>
          </select>

                 </div>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
