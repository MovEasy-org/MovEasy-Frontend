import React, { useState } from "react";
import "./PostJob.scss";
import job from "../PostJob/assets/job.svg";
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import CheckBox from "../../../components/CheckBox/CheckBox";

const PostJob = () => {
  const [vehicleArray, setvehicleArray] = useState([])
  const Postcheckbox = ["Tempo", "Truck", "Pickup", "Tractor", "Tow-truck", "Fire engine"];
  const [PostJob, setPostJob] = useState({
    From: "",
    To: "",
    Date: "",
    Time: "",
    Type: "",
    Budget: "",
    Weight: "",
    Note: "",
    vehicles: vehicleArray
  });
  return (
    <div className="postjob">
      <div >
        <img className="postjob-image" src={job} alt="" />
      </div>
      <div className="postjob-form-container">
        <FormLayout state={PostJob}>
          <h3 className="postjob-head">Post a Job</h3>

          <Input
            label="From"
            placeholder="Start point"
            type="text"
            inputStyle={true}
            name="StartPoint"
            value={PostJob.from}
            state={PostJob}
            setState={setPostJob}
          />
          <Input
            label="To"
            placeholder="End point"
            type="text"
            inputStyle={true}
            name="EndPoint"
            value={PostJob.to}
            state={PostJob}
            setState={setPostJob}
          />
          <div className="PostJob-label">
            <div className="postjob-date">
              <Input
                label="Date"
                placeholder="DD/MM/YYYY"
                type="Date"
                inputStyle={true}
                name="Date"
                value={PostJob.Date}
                state={PostJob}
                setState={setPostJob}
              />
            </div>
            <div className="postjob-time">
              <Input
                label="Time"
                placeholder="HH:MM"
                type="time"
                inputStyle={true}
                name="Time"
                value={PostJob.messgae}
                state={PostJob}
                setState={setPostJob}
              />
            </div>
          </div>
          <Input
            label="Type of goods"
            placeholder="Ex: Furniture"
            type="text"
            inputStyle={true}
            name="Type"
            value={PostJob.Type}
            state={PostJob}
            setState={setPostJob}
          />

          <Input
            label="Budget"
            placeholder="Rs. 20,000/-"
            type="Number"
            inputStyle={true}
            name="Budget"
            value={PostJob.Budget}
            state={PostJob}
            setState={setPostJob}
          />

          <Input
            label="Weight"
            placeholder="450 kgs."
            type="text"
            inputStyle={true}
            name="Weight"
            value={PostJob.Weight}
            state={PostJob}
            setState={setPostJob}
          />
          <div className="post-group">
				<label className="post-label">Select Vehicles</label>
				<div className="post-line"></div>
			</div>

          <div  className="postjobcheckbox">
              {
                  Postcheckbox.map ((label, index) => {
                      return(
                          <div className="checkbox-map"> 
                        <CheckBox label={label} key = {index}
                        arrayState={vehicleArray} setArrayState={setvehicleArray}/>
                        </div>
                      )   
                  }
                  )
              }
          </div>
              
          <Input
            label="Note"
            placeholder="Note for the transporter..."
            type="text"
            inputStyle={true}
            name="Note"
            value={PostJob.Note}
            state={PostJob}
            setState={setPostJob}
          />
          <Button
            type="submit"
            ButtonSize="btn-large"
            ButtonStyle="btn-primary"
            onClick={undefined}
          >
            <span> &#8594;</span>
            Book a ride
          </Button>
        </FormLayout>
      </div>
    </div>
  );
};

export default PostJob;
