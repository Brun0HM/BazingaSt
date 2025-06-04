// Checkbox.jsx
import React from 'react'

/**
 * Recebe props padrão de input (checked, onChange, disabled, etc).
 * Exemplo de uso: <Checkbox checked={checked} onChange={...} />
 */
export function Checkbox({ className = '', ...props }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className={`form-check-input ${className}`}
        {...props}
      />
      <label className="form-check-label"></label>
    </div>
  )
}
