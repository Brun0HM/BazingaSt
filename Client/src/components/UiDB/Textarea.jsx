// Textarea.jsx
import React from 'react'

/**
 * Recebe props típicos de <textarea> (value, onChange, placeholder, etc).
 */
export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`form-control ${className}`}
      {...props}
    />
  )
}
