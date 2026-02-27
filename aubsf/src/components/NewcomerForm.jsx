import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/global.css";
import "../styles/newhereform.css";

const NewcomerForm = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        courseLevel: '',
        whatsapp: '',
        hostelRoom: '',
        homeChurch: '',
        visitation: 'No',
        status: 'Visiting',
        discovery: 'Friend'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const message = `*NEW MEMBER REGISTRATION* %0A%0A` +
            `*Full Name:* ${formData.fullName}%0A` +
            `*Gender:* ${formData.gender}%0A` +
            `*Course/Level:* ${formData.courseLevel}%0A` +
            `*WhatsApp:* ${formData.whatsapp}%0A` +
            `*Hostel/Room:* ${formData.hostelRoom}%0A` +
            `*Home Church:* ${formData.homeChurch}%0A` +
            `*Wants Visit:* ${formData.visitation}%0A` +
            `*Status:* ${formData.status}%0A` +
            `*Heard via:* ${formData.discovery}`;

        const waLink = `https://wa.me/2347057558080?text=${message}`;

        window.open(waLink, '_blank');

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="newcomer-form-page">
            {/* HERO SECTION */}
            <section className="newcomer-hero">
                <div className="hero-overlay"></div>
                <div className="newcomer-hero-content">
                    <h1>Welcome Home!</h1>
                    <p className="hero-subtext">We're so glad you're joining us today. Let's connect and grow together.</p>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="newcomer-intro">
                <div className="container">
                    <h2>Join the AU-BSF Community</h2>
                    <div className="brand-underline"></div>
                    <p>
                        Fill out this simple form and we'll get in touch with you right away.
                        Whether you're exploring faith for the first time or looking for a spiritual family at AU,
                        we'd love to meet you and support your journey.
                    </p>
                </div>
            </section>

            {/* FORM SECTION */}
            <section className="newcomer-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit} className="newcomer-form">
                            {/* Personal Information */}
                            <div className="form-section">
                                <h3 className="form-section-title">About You</h3>

                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="e.g. Joshua Tobouke"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender *</label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            required
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="whatsapp">WhatsApp Number *</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="0915..."
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Academic Information */}
                            <div className="form-section">
                                <h3 className="form-section-title">Education & Residence</h3>

                                <div className="form-group">
                                    <label htmlFor="courseLevel">Course of Study & Level *</label>
                                    <input
                                        type="text"
                                        id="courseLevel"
                                        name="courseLevel"
                                        required
                                        value={formData.courseLevel}
                                        onChange={handleChange}
                                        placeholder="e.g. MASS-COM 100L"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="hostelRoom">Hostel & Room Number</label>
                                    <input
                                        type="text"
                                        id="hostelRoom"
                                        name="hostelRoom"
                                        value={formData.hostelRoom}
                                        onChange={handleChange}
                                        placeholder="e.g. A17 Atiku"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="homeChurch">Home Church / Denomination</label>
                                    <input
                                        type="text"
                                        id="homeChurch"
                                        name="homeChurch"
                                        value={formData.homeChurch}
                                        onChange={handleChange}
                                        placeholder="e.g. Christ Living Faith"
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            {/* Fellowship Information */}
                            <div className="form-section">
                                <h3 className="form-section-title">Fellowship</h3>

                                <div className="form-group">
                                    <label htmlFor="visitation">Would you like us to visit you?</label>
                                    <select
                                        id="visitation"
                                        name="visitation"
                                        value={formData.visitation}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="Yes">Yes, that would be great</option>
                                        <option value="No">No, thanks</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="status">Your Intention *</label>
                                    <select
                                        id="status"
                                        name="status"
                                        required
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="Visiting">Just Visiting</option>
                                        <option value="Interested">Interested to Join</option>
                                        <option value="Joining">I'm Joining</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="discovery">How did you hear about us? *</label>
                                    <select
                                        id="discovery"
                                        name="discovery"
                                        required
                                        value={formData.discovery}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="Friend">Friend</option>
                                        <option value="Flyer">Flyer</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Campus">Campus Event</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="form-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Let\'s Connect'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewcomerForm;