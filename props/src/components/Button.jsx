import React from 'react'

const cardStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
    borderRadius: '1rem',
    boxShadow: '0 4px 24px rgba(60, 72, 88, 0.12)',
    padding: '2rem',
    margin: '1rem',
    maxWidth: '400px',
    transition: 'transform 0.2s',
    border: '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const Button = ({ handleClick, children }) => {
    return (
        <div style={cardStyle}>
            {children}
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Button