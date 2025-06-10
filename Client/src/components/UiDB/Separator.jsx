// Separator.jsx
import React from 'react'

/**
 * Caso precise horizontal, basta usar <Separator />
 * Para vertical, enviar orientation="vertical" e ajustar via CSS.
 */
export function Separator({ orientation = 'horizontal', className = '' }) {
  if (orientation === 'horizontal') {
    return <hr className={className} />
  } else {
    // Exemplo simples de separator vertical: uma div fina com 100% de altura
    return (
      <div
        className={`border-start border-1 mx-2 ${className}`}
        style={{ height: '100%' }}
      />
    )
  }
}
