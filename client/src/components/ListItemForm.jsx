import React, { useState } from 'react';

const ListItemForm = ({ add1 }) => {
  const [formData, setFormData] = useState({
    name: '',
    length: '',
    capacity: '',
    price: '',
    company: '',
    image: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newYacht = {
      name: formData.name,
      length: formData.length,
      capacity: formData.capacity,
      price: formData.price,
      company: formData.company,
      image: formData.image,
    };
    console.log(111);
    add1(formData)
    setFormData({
      name: '',
      length: '',
      capacity: '',
      price: '',
      company: '',
      image: '',
    })
  }

  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='length'
        placeholder='Length (meters)'
        value={formData.length}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='capacity'
        placeholder='Capacity'
        value={formData.capacity}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='price'
        placeholder='Price'
        value={formData.price}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='company'
        placeholder='Company'
        value={formData.company}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='image'
        placeholder='Image URL'
        value={formData.image}
        onChange={handleInputChange}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default ListItemForm;
