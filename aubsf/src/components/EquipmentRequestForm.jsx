import React, { useState } from 'react';
import '../styles/requestform.css';
import "../styles/global.css";

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

const generateTimeSlots = () => {
  const slots = [];
  for (let h = 6; h <= 22; h++) {
    ['00', '30'].forEach(min => {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const ampm   = h < 12 ? 'AM' : 'PM';
      const value  = `${String(h).padStart(2, '0')}:${min}`;
      const label  = `${hour12}:${min} ${ampm}`;
      slots.push({ value, label });
    });
  }
  return slots;
};
const TIME_SLOTS = generateTimeSlots();

const buildDateOptions = () => {
  const options = [];
  const today = new Date();
  for (let i = 0; i <= 13; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const yyyy = d.getFullYear();
    const mm   = String(d.getMonth() + 1).padStart(2, '0');
    const dd   = String(d.getDate()).padStart(2, '0');
    const value = `${yyyy}-${mm}-${dd}`;
    let label;
    if (i === 0) label = 'Today';
    else if (i === 1) label = 'Tomorrow';
    else label = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });
    options.push({ value, label });
  }
  return options;
};
const DATE_OPTIONS = buildDateOptions();

const EquipmentRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL      = 'https://script.google.com/macros/s/AKfycbzBqdTLfaBDVH8cW5Xc4DbNYCFNBswJyVinlvKSWcAy3M0h8U8qBsBGdf0Gik5nr342/exec';
  const whatsappNumber = '2347057558080';

  const [formData, setFormData] = useState({
    name:       '',
    instrument: '',
    custodian:  '',
    location:   '',
    returnDate: '',
    returnTime: '',
    purpose:    '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInstrumentChange = (e) => {
    const selected = EQUIPMENT_LIST.find(item => item.label === e.target.value);
    setFormData(prev => ({
      ...prev,
      instrument: e.target.value,
      custodian: selected ? selected.custodian : '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const returnDateTime = `${formData.returnDate} at ${formData.returnTime}`;

    const payload = {
      name:       formData.name,
      instrument: formData.instrument,
      location:   formData.location,
      returnTime: returnDateTime,
      custodian:  formData.custodian,
      purpose:    formData.purpose,
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode:   'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:   new URLSearchParams(payload).toString(),
      });

      const timeLabel = TIME_SLOTS.find(t => t.value === formData.returnTime)?.label || formData.returnTime;
      const dateLabel = DATE_OPTIONS.find(d => d.value === formData.returnDate)?.label || formData.returnDate;

      const message =
        `*EQUIPMENT REQUEST* 🎸%0A%0A` +
        `*Borrower:* ${formData.name}%0A` +
        `*Item:* ${formData.instrument}%0A` +
        `*Custodian:* ${formData.custodian}%0A` +
        `*To be used at:* ${formData.location}%0A` +
        `*Return:* ${dateLabel} at ${timeLabel}%0A%0A` +
        `*Purpose:* ${formData.purpose}%0A%0A` +
        `_Please approve to release gear._`;

      window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;

    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="equipment-form-page">

      <div className="equipment-hero">
        <div className="equipment-hero-content">
          <h1>Borrow Gear</h1>
          <p>Request fellowship instruments or equipment.<br />Ensure you have approval before picking anything up.</p>
        </div>
      </div>

      <div className="equipment-form-section">
        <form onSubmit={handleSubmit} className="equipment-form">

          <div className="logistics-note">
            <p>📦 All equipment must be returned on time and in good condition. The custodian is auto-filled when you pick an item.</p>
          </div>

          <div className="form-group">
            <label className="form-label">YOUR NAME</label>
            <input
              type="text" name="name" placeholder="Full Name"
              required className="form-input"
              value={formData.name} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">WHERE WILL IT BE USED?</label>
            <input
              type="text" name="location"
              placeholder="e.g. Aina Hostel, Chapel, Mini-auditorium"
              required className="form-input"
              value={formData.location} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">SELECT ITEM</label>
            <select
              name="instrument" required
              className="form-input select-input"
              value={formData.instrument} onChange={handleInstrumentChange}
            >
              <option value="">Choose equipment...</option>
              {EQUIPMENT_LIST.map(item => (
                <option key={item.label} value={item.label}>{item.label}</option>
              ))}
            </select>
          </div>

          {formData.custodian && (
            <div className="custodian-pill">
              👤 Collect from: <strong>{formData.custodian}</strong>
            </div>
          )}

          <div className="form-group">
            <label className="form-label">RETURN DATE</label>
            <select
              name="returnDate" required
              className="form-input select-input"
              value={formData.returnDate} onChange={handleChange}
            >
              <option value="">When will you return it?</option>
              {DATE_OPTIONS.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">RETURN TIME</label>
            <select
              name="returnTime" required
              className="form-input select-input"
              value={formData.returnTime} onChange={handleChange}
            >
              <option value="">What time?</option>
              {TIME_SLOTS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">PURPOSE</label>
            <textarea
              name="purpose"
              placeholder="e.g. Choir Rehearsal, Personal Practice, Programme..."
              required className="form-input"
              rows="3"
              value={formData.purpose} onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="equipment-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : '📲 Submit via WhatsApp'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EquipmentRequestForm;