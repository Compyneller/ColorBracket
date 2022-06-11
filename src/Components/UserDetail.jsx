import React, { useEffect, useState } from "react";

const UserDetail = ({ userDetail }) => {
  const [userDetailData, setUserDetailData] = useState({});
  console.log(userDetail);
  useEffect(() => {
    userDetail?.map((items) => {
      setUserDetailData(items);
    });
  }, []);

  return (
    <>
      <div className="row customBorder">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Company</p>
          </strong>
          <p>{userDetailData.company}</p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <img src={userDetailData.company_logo} height={100} alt="" />
        </div>
      </div>

      <div className="row customBorder">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Designation</p>
          </strong>
          <p>{userDetailData.designation}</p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Rating</p>
          </strong>
          {userDetailData.rating}
        </div>
      </div>

      <div className="row customBorder">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Name</p>
          </strong>
          <p>{userDetailData.name}</p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Interests</p>
          </strong>
          <p>{userDetailData.interests}</p>
        </div>
      </div>
      <div className="row customBorder">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>View more</p>
          </strong>
          <a target="_blank" href={userDetailData.view_more}>
            {userDetailData.view_more}
          </a>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <strong>
            <p>Interests</p>
          </strong>
          <p>{userDetailData.interests}</p>
        </div>
      </div>
      <div className="row customBorder text-center">
        <strong>
          <p>Job Description</p>
        </strong>
        <p>{userDetailData.job_descripton}</p>
      </div>

      <div className="row customBorder"></div>
    </>
  );
};

export default UserDetail;
