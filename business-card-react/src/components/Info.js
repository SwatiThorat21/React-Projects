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
      <button>
        Email <i class="fa-solid fa-envelope"></i>
      </button>
      <button>LinkedIn</button>
    </>
  );
}

export default Info;
