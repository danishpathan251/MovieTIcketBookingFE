// VoucherForm.js
import React, { useState } from 'react';
import axios from 'axios';

const Voucher = () => {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/vouchers/validate', { code });
      setDiscount(response.data.discount);
    } catch (error) {
      console.error('Error validating voucher:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <div className="form-field col-lg-">
      <input
          type="text"
          className="input-text js-input"
          placeholder="Enter voucher code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="submit-btn ml-10">Validate</button>

      </div>

      
      </form>
      {discount !== null && <p>Discount: {discount}%</p>}
    </div>
  );
};

export default Voucher;
