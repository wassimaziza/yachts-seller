import React, { useState } from 'react';

const ListItem = (props) => {
  const [Form, setForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'wass';
  console.log(addFormData);

  const [addFormData, setAddFormData] = useState({
    name: '',
    length: '',
    capacity: '',
    price: '',
    company: '',
    image: '',
  });
  const [name,setName]=useState('')
  const [length,setlength]=useState('')
  const [capacity,setcapacity]=useState('')
  const [price,setprice]=useState('')
  const [company,setcompany]=useState('')
  const [image,setimage]=useState('')
  console.log(name);
  const [updateFormData, setUpdateFormData] = useState({
    name: '',
    capacity: '',
    price: '',
    image: '',
  });

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newYacht = {
      name: name,
      length: length,
      capacity: capacity,
      price: price,
      company: company,
      image: image,
    }
    console.log(newYacht);
    props.add1(newYacht);
    console.log( props,'fff');
    setAddFormData({
      name: '',
      length: '',
      capacity: '',
      price: '',
      company: '',
      image: '',
    })
  }

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    const updatedYacht = {
      name: name,
      capacity: capacity,
      price: price,
      image: image,
    }
    props.up(props.yacht.id, updatedYacht)
    setShowUpdateForm(false)
    setUpdateFormData({
      name: '',
      capacity: '',
      price: '',
      image: '',
    })
  }

  const renderAddForm = () => {
    return (
      <form onSubmit={handleAddFormSubmit}>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) =>
            setName(e.target.value)         }
        />
        <input
          type='text'
          placeholder='Length (meters)'
          onChange={(e) =>
            setlength(e.target.value)
          }
        />
        <input
          type='text'
          placeholder='Capacity'
          onChange={(e) =>
            setcapacity(e.target.value)          }
        />
        <input
          type='text'
          name='price'
          placeholder='Price'
          onChange={(e) =>
          setprice(e.target.value)
          }
        />
        <input
          type='text'
          name='company'
          placeholder='Company'
          onChange={(e) =>
            setcompany(e.target.value)
          }
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          onChange={(e) =>
setimage(e.target.value)          }
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  const renderUpdateForm = () => {
    return (
      <form onSubmit={handleUpdateFormSubmit}>
        <input
          type='text'
          placeholder='Name'
          onChange={(e) =>
            setName(e.target.value)
          }
        />
        <input
          type='text'
          placeholder='Capacity'
          onChange={(e) =>
setcapacity(e.target.value)          }
        />
        <input
          type='text'
          placeholder='Price'
          onChange={(e) =>
setprice(e.target.value)          }
        />
        <input
          type='text'
          placeholder='Image URL'
          onChange={(e) =>
            setimage(e.target.value)
          }
        />
        <button type='submit'>Update</button>
      </form>
    )
  }

  const handleButtonClick = () => {
    setForm(true)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const renderContent = () => {
    if (Form) {
      return renderAddForm()
    } else if (password === correctPassword) {
      return (
        <div>
          <button className='btn' onClick={handleButtonClick}>
            Add a Yacht
          </button>
          <button className='btn' onClick={() => setShowUpdateForm(true)}>
            Update
          </button>
          <button className='btn' onClick={()=>{
            props.dele(props.yacht.id)
          }}>delete</button>
          {showUpdateForm && renderUpdateForm()}
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className='parent2'>
      <div>
        <br />
        <img src={props.yacht.image} width='250' alt={props.yacht.name} />
        <li> {props.yacht.name}</li>
        <li> with a length of: {props.yacht.length} meters </li>
        <li> can hold: {props.yacht.capacity}</li>
        <li>only at: {props.yacht.price}</li>

        <div>
          <input
            type='password'
            placeholder='Enter Password'
            onChange={handlePasswordChange}
          />
        </div>

        {renderContent()}
      </div>
    </div>
  )
}

export default ListItem
