// DBPedidos.jsx
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DBNavbar from '../components/UiDB/DBNavbar'

export default function DBPedidos() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [dateFilter, setDateFilter] = useState('all')

  const [orders] = useState([
    {
      id: 'ORD-4832',
      customer: {
        name: 'Carlos Silva',
        email: 'carlos.silva@email.com',
        phone: '(11) 99999-9999',
        address: 'Rua das Flores, 123 - São Paulo, SP - 01234-567',
      },
      items: [
        {
          id: '1',
          name: 'Camiseta Star Wars - Darth Vader',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 2,
          price: 89.9,
          sku: 'SW-DV-001',
        },
        {
          id: '2',
          name: 'Caneca Marvel - Homem de Ferro',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 1,
          price: 49.9,
          sku: 'MG-IF-001',
        },
      ],
      status: 'delivered',
      subtotal: 229.7,
      shipping: 15.0,
      tax: 0,
      total: 244.7,
      date: '2024-05-12',
      estimatedDelivery: '2024-05-15',
      trackingCode: 'BR123456789',
      paymentMethod: 'Cartão de Crédito',
      notes: 'Entrega realizada com sucesso',
    },
    {
      id: 'ORD-4831',
      customer: {
        name: 'Ana Oliveira',
        email: 'ana.oliveira@email.com',
        phone: '(11) 88888-8888',
        address: 'Av. Paulista, 456 - São Paulo, SP - 01310-100',
      },
      items: [
        {
          id: '3',
          name: 'Action Figure Homem-Aranha',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 1,
          price: 199.9,
          sku: 'AF-SM-001',
        },
        {
          id: '4',
          name: 'Quadro Decorativo Batman',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 2,
          price: 79.9,
          sku: 'QD-BT-001',
        },
      ],
      status: 'shipped',
      subtotal: 359.7,
      shipping: 20.0,
      tax: 0,
      total: 379.7,
      date: '2024-05-11',
      estimatedDelivery: '2024-05-16',
      trackingCode: 'BR987654321',
      paymentMethod: 'PIX',
    },
    {
      id: 'ORD-4830',
      customer: {
        name: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        phone: '(11) 77777-7777',
        address: 'Rua Augusta, 789 - São Paulo, SP - 01305-000',
      },
      items: [
        {
          id: '5',
          name: 'Jogo Dungeons & Dragons Starter Set',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 1,
          price: 299.9,
          sku: 'JG-DD-001',
        },
      ],
      status: 'processing',
      subtotal: 299.9,
      shipping: 25.0,
      tax: 0,
      total: 324.9,
      date: '2024-05-11',
      estimatedDelivery: '2024-05-18',
      paymentMethod: 'Boleto Bancário',
    },
    {
      id: 'ORD-4829',
      customer: {
        name: 'Mariana Costa',
        email: 'mariana.costa@email.com',
        phone: '(11) 66666-6666',
        address: 'Rua Oscar Freire, 321 - São Paulo, SP - 01426-001',
      },
      items: [
        {
          id: '6',
          name: 'Funko Pop Stranger Things - Eleven',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 1,
          price: 149.9,
          sku: 'FP-ST-011',
        },
        {
          id: '7',
          name: 'Chaveiro Groot Guardians',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 3,
          price: 29.9,
          sku: 'CH-GR-001',
        },
      ],
      status: 'delivered',
      subtotal: 239.6,
      shipping: 12.0,
      tax: 0,
      total: 251.6,
      date: '2024-05-10',
      estimatedDelivery: '2024-05-13',
      trackingCode: 'BR456789123',
      paymentMethod: 'Cartão de Débito',
    },
    {
      id: 'ORD-4828',
      customer: {
        name: 'Lucas Mendes',
        email: 'lucas.mendes@email.com',
        phone: '(11) 55555-5555',
        address: 'Rua da Consolação, 654 - São Paulo, SP - 01302-000',
      },
      items: [
        {
          id: '8',
          name: 'Caneca Rick and Morty',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 2,
          price: 49.9,
          sku: 'MG-RM-001',
        },
      ],
      status: 'cancelled',
      subtotal: 99.8,
      shipping: 10.0,
      tax: 0,
      total: 109.8,
      date: '2024-05-09',
      paymentMethod: 'PIX',
      notes: 'Cancelado a pedido do cliente',
    },
    {
      id: 'ORD-4827',
      customer: {
        name: 'Fernanda Lima',
        email: 'fernanda.lima@email.com',
        phone: '(11) 44444-4444',
        address: 'Av. Faria Lima, 987 - São Paulo, SP - 04538-132',
      },
      items: [
        {
          id: '9',
          name: 'Camiseta The Office - Dunder Mifflin',
          image: '/placeholder.svg?height=60&width=60',
          quantity: 1,
          price: 79.9,
          sku: 'SW-TO-001',
        },
      ],
      status: 'pending',
      subtotal: 79.9,
      shipping: 15.0,
      tax: 0,
      total: 94.9,
      date: '2024-05-13',
      estimatedDelivery: '2024-05-20',
      paymentMethod: 'Cartão de Crédito',
    },
  ])

  const getOrderStats = () => {
    return {
      total: orders.length,
      pending: orders.filter((o) => o.status === 'pending').length,
      processing: orders.filter((o) => o.status === 'processing').length,
      shipped: orders.filter((o) => o.status === 'shipped').length,
      delivered: orders.filter((o) => o.status === 'delivered').length,
      cancelled: orders.filter((o) => o.status === 'cancelled').length,
    }
  }

  const stats = getOrderStats()

  const getStatusBadge = (status) => {
    const config = {
      pending: { label: 'Pendente', className: 'bg-warning text-dark', icon: 'bi-clock' },
      processing: { label: 'Processando', className: 'bg-info text-white', icon: 'bi-box-seam' },
      shipped: { label: 'Enviado', className: 'bg-primary text-white', icon: 'bi-truck' },
      delivered: { label: 'Entregue', className: 'bg-success text-white', icon: 'bi-check-circle' },
      cancelled: { label: 'Cancelado', className: 'bg-danger text-white', icon: 'bi-x-circle' },
    }[status]

    return (
      <span className={`badge ${config.className} d-inline-flex align-items-center`}>
        <i className={`bi ${config.icon} me-1`}></i>
        {config.label}
      </span>
    )
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = selectedTab === 'all' || order.status === selectedTab
    // Note: dateFilter not applied
    return matchesSearch && matchesStatus
  })

  const closeModal = () => setSelectedOrder(null)

  return (
    <>
        <DBNavbar />
      <div className="container-fluid">
      {/* Header */}

      <div className='ms-4 me-4 mt-5'>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Pedidos</h2>
          <small className="text-muted">Gerencie todos os pedidos da sua loja</small>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <i className="bi bi-download me-1"></i> Exportar
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-funnel me-1"></i> Filtrar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-secondary">
            <div className="card-body">
              <h6 className="card-title">Total</h6>
              <h3 className="fw-bold">{stats.total}</h3>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-warning">
            <div className="card-body">
              <h6 className="card-title">Pendentes</h6>
              <h3 className="fw-bold">{stats.pending}</h3>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-info">
            <div className="card-body">
              <h6 className="card-title">Processando</h6>
              <h3 className="fw-bold">{stats.processing}</h3>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-primary">
            <div className="card-body">
              <h6 className="card-title">Enviados</h6>
              <h3 className="fw-bold">{stats.shipped}</h3>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-success">
            <div className="card-body">
              <h6 className="card-title">Entregues</h6>
              <h3 className="fw-bold">{stats.delivered}</h3>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-start border-2 border-danger">
            <div className="card-body">
              <h6 className="card-title">Cancelados</h6>
              <h3 className="fw-bold">{stats.cancelled}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTab('all')}
            >
            Todos ({stats.total})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'pending' ? 'active' : ''}`}
            onClick={() => setSelectedTab('pending')}
            >
            Pendentes ({stats.pending})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'processing' ? 'active' : ''}`}
            onClick={() => setSelectedTab('processing')}
            >
            Processando ({stats.processing})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'shipped' ? 'active' : ''}`}
            onClick={() => setSelectedTab('shipped')}
            >
            Enviados ({stats.shipped})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'delivered' ? 'active' : ''}`}
            onClick={() => setSelectedTab('delivered')}
            >
            Entregues ({stats.delivered})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${selectedTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setSelectedTab('cancelled')}
            >
            Cancelados ({stats.cancelled})
          </button>
        </li>
      </ul>

      {/* Filters: Search + Status + Date */}
      <div className="row g-3 mb-4">
        <div className="col-md-5">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar pedidos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
            >
            <option value="all">Todos os status</option>
            <option value="pending">Pendente</option>
            <option value="processing">Processando</option>
            <option value="shipped">Enviado</option>
            <option value="delivered">Entregue</option>
            <option value="cancelled">Cancelado</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            >
            <option value="all">Todos os períodos</option>
            <option value="today">Hoje</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mês</option>
            <option value="quarter">Este trimestre</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0">Lista de Pedidos</h5>
            <small className="text-muted">{filteredOrders.length} pedido(s) encontrado(s)</small>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-white">
                <tr>
                  <th>Pedido</th>
                  <th>Cliente</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Itens</th>
                  <th>Total</th>
                  <th>Pagamento</th>
                  <th className="text-end">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                    <tr key={order.id}>
                    <td>
                      <div className="fw-medium">{order.id}</div>
                      {order.trackingCode && (
                          <div className="text-muted small font-monospace">{order.trackingCode}</div>
                        )}
                    </td>
                    <td>
                      <div>
                        <div className="fw-medium">{order.customer.name}</div>
                        <div className="text-muted small">{order.customer.email}</div>
                      </div>
                    </td>
                    <td>
                      <div>{new Date(order.date).toLocaleDateString('pt-BR')}</div>
                      {order.estimatedDelivery && (
                          <div className="text-muted small">
                          Entrega: {new Date(order.estimatedDelivery).toLocaleDateString('pt-BR')}
                        </div>
                      )}
                    </td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>
                      <div className="small">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      </div>
                      <div className="text-muted small">
                        {order.items.reduce((acc, i) => acc + i.quantity, 0)} unidade
                        {order.items.reduce((acc, i) => acc + i.quantity, 0) > 1 ? 's' : ''}
                      </div>
                    </td>
                    <td>
                      <div className="fw-medium">R$ {order.total.toFixed(2)}</div>
                    </td>
                    <td>
                      <div className="small">{order.paymentMethod}</div>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-light"
                        onClick={() => setSelectedOrder(order)}
                        >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
          <div
          className="modal show fade"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          >
          <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-cart-fill me-2"></i> Detalhes do Pedido {selectedOrder.id}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  ></button>
              </div>
              <div className="modal-body">
                {/* Status & Actions */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center gap-3">
                    {getStatusBadge(selectedOrder.status)}
                    {selectedOrder.trackingCode && (
                        <div className="text-muted small">
                        Rastreamento: <span className="font-monospace">{selectedOrder.trackingCode}</span>
                      </div>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-printer me-1"></i> Imprimir
                    </button>
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="statusDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Alterar Status
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="statusDropdown">
                        <li>
                          <button className="dropdown-item">Pendente</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Processando</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Enviado</button>
                        </li>
                        <li>
                          <button className="dropdown-item">Entregue</button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button className="dropdown-item text-danger">Cancelar</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-4">
                  {/* Customer Info */}
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Informações do Cliente</h6>
                      </div>
                      <div className="card-body">
                        <p className="mb-1">
                          <strong>Nome:</strong> {selectedOrder.customer.name}
                        </p>
                        <p className="mb-1">
                          <strong>Email:</strong> {selectedOrder.customer.email}
                        </p>
                        <p className="mb-1">
                          <strong>Telefone:</strong> {selectedOrder.customer.phone}
                        </p>
                        <p className="mb-0">
                          <strong>Endereço:</strong> {selectedOrder.customer.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Info */}
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Informações do Pedido</h6>
                      </div>
                      <div className="card-body">
                        <p className="mb-1">
                          <strong>Método de Pagamento:</strong> {selectedOrder.paymentMethod}
                        </p>
                        <p className="mb-1">
                          <strong>Data do Pedido:</strong>{' '}
                          {new Date(selectedOrder.date).toLocaleDateString('pt-BR')}
                        </p>
                        {selectedOrder.estimatedDelivery && (
                            <p className="mb-1">
                            <strong>Previsão de Entrega:</strong>{' '}
                            {new Date(selectedOrder.estimatedDelivery).toLocaleDateString('pt-BR')}
                          </p>
                        )}
                        {selectedOrder.notes && (
                            <p className="mb-0">
                            <strong>Observações:</strong> {selectedOrder.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="card mb-4">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">Itens do Pedido</h6>
                  </div>
                  <div className="card-body">
                    {selectedOrder.items.map((item) => (
                        <div
                        key={item.id}
                        className="d-flex align-items-center gap-3 p-3 border rounded mb-3"
                        >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">{item.name}</h6>
                          <small className="text-muted">SKU: {item.sku}</small>
                          <p className="mb-0">Quantidade: {item.quantity}</p>
                        </div>
                        <div className="text-end">
                          <p className="fw-medium mb-1">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <small className="text-muted">R$ {item.price.toFixed(2)} cada</small>
                        </div>
                      </div>
                    ))}

                    <hr />

                    <div className="d-flex justify-content-between mb-1">
                      <span>Subtotal:</span>
                      <span>R$ {selectedOrder.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span>Frete:</span>
                      <span>R$ {selectedOrder.shipping.toFixed(2)}</span>
                    </div>
                    {selectedOrder.tax > 0 && (
                        <div className="d-flex justify-content-between mb-1">
                        <span>Impostos:</span>
                        <span>R$ {selectedOrder.tax.toFixed(2)}</span>
                      </div>
                    )}
                    <hr />
                    <div className="d-flex justify-content-between fw-bold fs-5">
                      <span>Total:</span>
                      <span>R$ {selectedOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
      </>
  )
}
