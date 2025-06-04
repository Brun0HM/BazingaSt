// Table.jsx
import React from 'react'

/**
 * Props:
 * - columns: array de objetos { header: 'Título', accessor: 'chaveDoObjeto' }
 * - data: array de objetos com as mesmas chaves de accessor
 * - className: classes adicionais
 *
 * Exemplo de uso genérico:
 * <Table columns={cols} data={rows} className="table-striped" />
 */
export function Table({ columns = [], data = [], className = '' }) {
  return (
    <div className="table-responsive">
      <table className={`table ${className}`}>
        <thead className="table-light">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.accessor}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
