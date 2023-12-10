import React from 'react'

function Header() {
  return (
    <div>
        <div style={{backgroundColor:'teal',color:'white',padding:10}}>
            <div style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between'}}>
                <div>
                    <h1>TOLL CALCULATOR</h1>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{marginRight:20}}>Home</div>
                    <div style={{marginRight:20}}>Contact</div>
                    <div style={{marginRight:20}}>Profile</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header