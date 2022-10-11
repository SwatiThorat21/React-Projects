import React from "react";
import image from "../swati.jpg";

function Info() {
  return (
    <>
      <img src={image} alt="profile" id="profile-img"></img>
      <h2 className="name">Swati Thorat</h2>
      <h3 className="designation">
        Frontend Developer <i class="fa-solid fa-envelope"></i>
      </h3>
      <h4 className="website">swatithorat.website</h4>
      <div className="btn">
        <button id="email_btn">
          Email <i class="fa-solid fa-envelope"></i>
        </button>
        <button id="linkedin_btn">LinkedIn</button>
      </div>
    </>
  );
}

export default Info;
