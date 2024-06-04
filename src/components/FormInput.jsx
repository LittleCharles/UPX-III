import React from 'react';

function FormInput({ label, value, onChange, type = 'text', name }) {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded shadow focus:outline-none focus:border-blue-400"
            />
        </div>
    );
}

export default FormInput;
