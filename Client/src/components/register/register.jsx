import React from 'react'

// import Portal from '../components/Portal'
import './style.css'

function Modal() {
  return (
   <div>
        <div style={style.overlay} >
            <div style={style.modal}>
                <div className="form" style={{maxWidth:'400px', margin:'50px auto', padding:'30px', borderRadius:'8px' }}>
                <form action="" type='signup'>
                <h1>Sign-Up</h1>
                <div className='formInput' style={style.formInput}>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>
                <div className='formInput' style={style.formInput}>
                    <label htmlFor="">email</label>
                    <input type="text" />
                </div>
                <div className='formInput' style={style.formInput}>
                    <label htmlFor="">role</label>
                        <select aria-placeholder='select' id="role" name="role">
                    <option value=''>select role </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                        </select>
                </div>
                <div className='formInput' style={style.formInput}>
                    <label htmlFor="">password</label>   
                    <input type="text"/>
                </div>
                    <button className='button' style={{maxWidth:' auto',backgroundb:'black', color:'white'}}> signup </button>
                </form>
            </div>    
                {children}
            </div>
        </div >
   </div>
  )
}

const style={
    overlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal:{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%'
    },
    formInput:{
        display: 'flex',
        flexDirection:'column'
    },
        
}

export default Modal