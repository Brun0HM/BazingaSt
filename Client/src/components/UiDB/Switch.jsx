// Switch.jsx
import React from 'react'

/**
 * Props típicos: checked, onChange, id, disabled, etc.
 * Usa a classe form-switch do Bootstrap para criar toggle.
 */
export function Switch({ id, checked, onChange, disabled = false, className = '' }) {
  return (
    <div className="form-check form-switch">
      <input
        className={`form-check-input ${className}`}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="form-check-label" htmlFor={id}></label>
    </div>
  )
}
