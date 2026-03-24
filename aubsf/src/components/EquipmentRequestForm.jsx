import React, { useState } from 'react';
import '../styles/requestform.css';
import "../styles/global.css";

// Each instrument maps directly to its custodian
const EQUIPMENT_LIST = [
  { label: 'Shekere — Big',               custodian: 'Bro. Abiodun' },
  { label: 'Shekere — Small',             custodian: 'Bro. Abiodun' },
  { label: 'Microphone',                   custodian: 'Bro. Abiodun' },
  { label: 'PA System (Old)',              custodian: 'Bro. Abiodun' },
  { label: 'Drum (Agbamole)',             custodian: 'Bro. Mayokun' },
  { label: 'Keyboard & Power Bank',       custodian: 'Bro. Abiodun' },
  { label: 'Keyboard Stand',              custodian: 'Bro. Abiodun' },
  { label: 'Speaker Stand',               custodian: 'Sis. Sarah'   },
  { label: 'Lectern',                      custodian: 'Sis. Praise'  },
  { label: 'Banner',                       custodian: 'Sis. Praise'  },
  { label: 'PA System (New)',              custodian: 'Bro. Obaloluwa'  },

];

const EquipmentRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwruu8ywQWOQGLfeF7abRuU9iItauYkcP_WC8k2B-MzEcVpN56ZauwyRAmflSdcibK_/exec';
  const whatsappNumber = '2348115690442';

  const [formData, setFormData] = useState({
    name:       '',
    instrument: '',
    custodian:  '',
    location:   '',
    returnTime: '',
    purpose:    '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // When an instrument is chosen, auto-populate the custodian field
  const handleInstrumentChange = (e) => {
    const selected = EQUIPMENT_LIST.find(item => item.label === e.target.value);
    setFormData(prev => ({
      ...prev,
      instrument: e.target.value,
      custodian:  selected ? selected.custodian : '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const message =
        `*EQUIPMENT REQUEST* 🎸%0A%0A` +
        `*Borrower:* ${formData.name}%0A` +
        `*Item:* ${formData.instrument}%0A` +
        `*Custodian:* ${formData.custodian}%0A` +
        `*To be used at:* ${formData.location}%0A` +
        `*Return Time:* ${formData.returnTime.replace('T', ' at ')}%0A%0A` +
        `*Purpose:* ${formData.purpose}%0A%0A` +
        `_Please approve to release gear._`;

      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="equipment-form-page">

      {/* Hero */}
      <div className="equipment-hero">
        <div className="equipment-hero-content">
          <h1>Borrow Gear</h1>
          <p>Request fellowship instruments or equipment.<br />Ensure you have approval before picking anything up.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="equipment-form-section">
        <form onSubmit={handleSubmit} className="equipment-form">

          {/* Note */}
          <div className="logistics-note">
            <p>📦 All equipment must be returned on time and in good condition. The custodian's name will be auto-filled once you select an item.</p>
          </div>

          {/* Section 1: Borrower Details */}
          <div className="form-group">
            <label className="form-label">YOUR NAME</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">WHERE WILL IT BE USED?</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Atiku Hostel, Chapel, Auditorium"
              required
              className="form-input"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Section 2: Equipment */}
          <div className="form-group">
            <label className="form-label">SELECT ITEM</label>
            <select
              name="instrument"
              required
              className="form-input select-input"
              value={formData.instrument}
              onChange={handleInstrumentChange}
            >
              <option value="">Choose equipment...</option>
              {EQUIPMENT_LIST.map(item => (
                <option key={item.label} value={item.label}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Auto-filled custodian — read only */}
          <div className="form-group">
            <label className="form-label">CUSTODIAN</label>
            <input
              type="text"
              name="custodian"
              className="form-input"
              value={formData.custodian}
              placeholder="Auto-filled when you select an item"
              readOnly
              style={{ background: '#f8fafc', color: '#64748b', cursor: 'default' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">RETURN DATE & TIME</label>
            <input
              type="datetime-local"
              name="returnTime"
              required
              className="form-input date-input"
              value={formData.returnTime}
              onChange={handleChange}
            />
          </div>

          {/* Section 3: Purpose */}
          <div className="form-group">
            <label className="form-label">PURPOSE</label>
            <textarea
              name="purpose"
              placeholder="Briefly describe what you need it for (e.g. Choir Rehearsal, Personal Practice)..."
              required
              className="form-input"
              rows="3"
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="equipment-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : '📲 Submit via WhatsApp'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EquipmentRequestForm;