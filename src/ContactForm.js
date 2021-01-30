import React from 'react'

export default function ContactForm(props){
    return(
    <>
    <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>დასახელება</label>
        <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={props.name}
            name='name'
            onChange={props.hanldeChange}
        />
    </div>
    <div class='form-group'>
    <label for='exampleInputPassword1'>ტელეფონი</label>
    <input
        type='text'
        className='form-control'
        id='exampleInputPassword1'
        value={props.phone}
        name='phone'
        onChange={props.hanldeChange}
    />
    </div>
    <div class='form-group'>
    <label for='exampleInputPassword1'>ელ.ფოსტა</label>
    <input
        type='text'
        className='form-control'
        id='exampleInputPassword1'
        value={props.email}
        name='email'
        onChange={props.hanldeChange}
    />
    </div>
    </>
    )
}
