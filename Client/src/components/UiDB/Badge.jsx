// Badge.jsx
import React from 'react'

/**
 * Props:
 * - variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
 * - children: texto ou componente dentro da badge
 * - className: classes adicionais se necessário
 */
export function Badge({ variant = 'primary', children, className = '' }) {
  return (
    <span className={`badge bg-${variant} ${className}`}>
      {children}
    </span>
  )
}
