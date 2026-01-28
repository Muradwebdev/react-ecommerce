import React from "react";

const SelectedCategory = () => {
  return (
    <div>
      <select name="category">
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="computer">Computer</option>
        <option value="smart-home">Smart Home</option>
        <option value="automotive">Automotive</option>
        <option value="baby">Baby</option>
        <option value="beauty">Beauty</option>
        <option value="personal-care">Personal Care</option>
        <option value="butcher-shop">Butcher Shop</option>
        <option value="cafe">Cafe</option>
        <option value="charity-2">Charity</option>
        <option value="church">Church</option>
        <option value="clinic">clinic</option>
        <option value="college">College</option>
        <option value="conference">Conference</option>
        <option value="construction">Construction</option>
        <option value="corona-virus">Corona Virus</option>
        <option value="corporate">Corporate</option>
        <option value="covid19">Covid19</option>
        <option value="digital-products">Digital Products</option>
        <option value="doctors">doctors</option>
        <option value="ecological">Ecological</option>
      </select>
    </div>
  );
};

export default SelectedCategory;
