import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/JewelleryRepair.css';
// import VideoUpload from '../components/VideoUpload';


const JewelleryRepair = () => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jewelleryType, setJewelleryType] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [otp, setOtp] = useState('');
    const [repairId, setRepairId] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    // Handle form submission for repair request
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const repairData = { customerName, phoneNumber, jewelleryType, issueDescription };
    
        try {
            console.log('📤 Sending Repair Request:', repairData);
            const response = await axios.post('http://localhost:7001/api/repair/request', repairData);
            console.log('✅ Repair Response:', response.data);
    
            setRepairId(response.data.repairId);
            setOtpSent(true);
            alert('Repair request created. OTP sent to your phone.');
        } catch (error) {
            console.error('❌ Repair Request Error:', error.response?.data || error.message);
            alert('Error creating repair request');
        }
    };
    

    // Handle OTP verification
    const verifyOtp = async (e) => {
        e.preventDefault(); // ✅ UI button event handling
    
        // ✅ Ensure phoneNumber and otp exist before sending
        if (!phoneNumber || !otp) {
            alert("Please enter a valid OTP and phone number");
            return;
        }
    
        const otpData = { phoneNumber, otp };
    
        try {
            console.log('📤 Sending OTP for verification:', otpData);
            const response = await axios.post('http://localhost:7001/api/repair/verify-otp', otpData);
            console.log('✅ OTP Verification Response:', response.data);
    
            alert('OTP Verified successfully!');
            setOtpSent(false);
            setOtp('');
        } catch (error) {
            console.error('❌ OTP Verification Error:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Invalid OTP or OTP expired');
        }
    };
    

    return (
        <div className="repair-wrapper">
            <div className="repair-container">
                <h2 className="repair-heading">Request Repair Service</h2>
                {!otpSent ? (
                    <form className="repair-form" onSubmit={handleSubmit}>
                        <div className="repair-form-group">
                            <label className="repair-label">Customer Name</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Phone Number</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Jewellery Type</label>
                            <input
                                className="repair-input"
                                type="text"
                                value={jewelleryType}
                                onChange={(e) => setJewelleryType(e.target.value)}
                                required
                            />
                        </div>
                        <div className="repair-form-group">
                            <label className="repair-label">Issue Description</label>
                            <textarea
                                className="repair-textarea"
                                value={issueDescription}
                                onChange={(e) => setIssueDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button className="repair-btn" type="submit">Submit Repair Request</button>
                    </form>
                ) : (
                    <div className="otp-container">
                        <h3 className="otp-heading">Enter OTP</h3>
                        <form className="otp-form" onSubmit={verifyOtp}>
                            <div className="repair-form-group">
                                <label className="repair-label">OTP</label>
                                <input
                                    className="repair-input"
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="repair-btn" type="submit">Verify OTP</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default JewelleryRepair;

