import React, { useState } from "react";
import { ourTeam } from "../data";

const OurTeam = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const nextMember = () => {
    setCurrentTeamMember((currentTeamMember + 1) % ourTeam.length);
  };

  const prevMember = () => {
    setCurrentTeamMember(
      (currentTeamMember - 1 + ourTeam.length) % ourTeam.length
    );
  };

  const { img, fullName, job, text } = ourTeam[currentTeamMember];

  return (
    <section className="section ourTeamSection">
      <h2>
        <a name="ourTeam">our team</a>
      </h2>
      <div className="underline"></div>
      <div className="ourTeamItemsWrap">
        <article className="ourTeamItem">
          <div className="ourTeamImgWrap">
            <img className="ourTeamImg" src={img} alt={fullName} />
          </div>
          <h4 className="ourTeamUserName">{fullName}</h4>
          <h5 className="ourTeamJob">{job}</h5>
          <p className="ourTeamDesc">{text}</p>
          <div className="ourTeamButtonContainer">
            <button className="prevBtn" onClick={prevMember}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nextBtn" onClick={nextMember}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurTeam;
