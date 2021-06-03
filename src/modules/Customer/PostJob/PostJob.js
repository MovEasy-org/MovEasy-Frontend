import React, { useState } from 'react'
import './PostJob.scss';
import job from '../PostJob/assets/job.svg';
import FormLayout from "../../../components/FormLayout/FormLayout";
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';


    const PostJob = () => {
        const [PostJob, setPostJob] = useState({
            From: "",
            To: "",
            Date: "",
            Time: "",
        });
    
    return (
        <div className="postjob">
            <div className="postimage">
                <img className="postjob-image" src={job} alt=""/>
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
                                <Button
                                    type="submit"
                                    ButtonSize="btn-large"
                                    ButtonStyle="btn-primary"
                                    onClick={undefined}
                                >
                                    <span> &#8594;</span>
                                    Next
                                </Button>
                            </FormLayout>
            </div>
        </div>
    )
}

export default PostJob
