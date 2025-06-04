// DBClientes.jsx
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DBNavbar from '../components/UiDB/DBNavbar'

export default function DBClientes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedSegment, setSelectedSegment] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState(null)

  // Agora com setter para poder adicionar/editar
  const [customers, setCustomers] = useState([
    {
      id: '1',
      name: 'Carlos Silva',
      email: 'carlos.silva@email.com',
      phone: '(11) 99999-9999',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'active',
      segment: 'vip',
      registrationDate: '2023-01-15',
      lastPurchase: '2024-05-12',
      totalSpent: 2450.8,
      totalOrders: 12,
      averageOrderValue: 204.23,
      address: {
        street: 'Rua das Flores, 123',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01234-567',
      },
      preferences: ['Star Wars', 'Marvel', 'Camisetas'],
      orders: [
        { id: 'ORD-4832', date: '2024-05-12', total: 244.7, status: 'delivered', items: 2 },
        { id: 'ORD-4820', date: '2024-04-28', total: 189.9, status: 'delivered', items: 1 },
        { id: 'ORD-4810', date: '2024-04-15', total: 299.8, status: 'delivered', items: 3 },
      ],
      notes: 'Cliente VIP, sempre compra produtos Star Wars',
    },
    {
      id: '2',
      name: 'Ana Oliveira',
      email: 'ana.oliveira@email.com',
      phone: '(11) 88888-8888',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'active',
      segment: 'regular',
      registrationDate: '2023-06-20',
      lastPurchase: '2024-05-11',
      totalSpent: 1280.5,
      totalOrders: 8,
      averageOrderValue: 160.06,
      address: {
        street: 'Av. Paulista, 456',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01310-100',
      },
      preferences: ['DC Comics', 'Action Figures', 'Decoração'],
      orders: [
        { id: 'ORD-4831', date: '2024-05-11', total: 379.7, status: 'shipped', items: 2 },
        { id: 'ORD-4815', date: '2024-04-20', total: 149.9, status: 'delivered', items: 1 },
      ],
      notes: '',
    },
    {
      id: '3',
      name: 'Pedro Santos',
      email: 'pedro.santos@email.com',
      phone: '(11) 77777-7777',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'active',
      segment: 'regular',
      registrationDate: '2023-09-10',
      lastPurchase: '2024-05-11',
      totalSpent: 890.4,
      totalOrders: 5,
      averageOrderValue: 178.08,
      address: {
        street: 'Rua Augusta, 789',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01305-000',
      },
      preferences: ['RPG', 'Jogos', 'Livros'],
      orders: [{ id: 'ORD-4830', date: '2024-05-11', total: 324.9, status: 'processing', items: 1 }],
      notes: '',
    },
    {
      id: '4',
      name: 'Mariana Costa',
      email: 'mariana.costa@email.com',
      phone: '(11) 66666-6666',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'active',
      segment: 'vip',
      registrationDate: '2022-11-05',
      lastPurchase: '2024-05-10',
      totalSpent: 3200.9,
      totalOrders: 18,
      averageOrderValue: 177.83,
      address: {
        street: 'Rua Oscar Freire, 321',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01426-001',
      },
      preferences: ['Stranger Things', 'Funko Pop', 'Séries'],
      orders: [{ id: 'ORD-4829', date: '2024-05-10', total: 251.6, status: 'delivered', items: 2 }],
      notes: 'Cliente fiel, sempre deixa avaliações positivas',
    },
    {
      id: '5',
      name: 'Lucas Mendes',
      email: 'lucas.mendes@email.com',
      phone: '(11) 55555-5555',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'inactive',
      segment: 'regular',
      registrationDate: '2024-01-20',
      lastPurchase: '2024-05-09',
      totalSpent: 320.7,
      totalOrders: 3,
      averageOrderValue: 106.9,
      address: {
        street: 'Rua da Consolação, 654',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01302-000',
      },
      preferences: ['Rick and Morty', 'Canecas'],
      orders: [{ id: 'ORD-4828', date: '2024-05-09', total: 109.8, status: 'cancelled', items: 2 }],
      notes: 'Cancelou último pedido, verificar motivo',
    },
    {
      id: '6',
      name: 'Fernanda Lima',
      email: 'fernanda.lima@email.com',
      phone: '(11) 44444-4444',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'active',
      segment: 'new',
      registrationDate: '2024-05-01',
      lastPurchase: '2024-05-13',
      totalSpent: 94.9,
      totalOrders: 1,
      averageOrderValue: 94.9,
      address: {
        street: 'Av. Faria Lima, 987',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '04538-132',
      },
      preferences: ['The Office', 'Séries'],
      orders: [{ id: 'ORD-4827', date: '2024-05-13', total: 94.9, status: 'pending', items: 1 }],
      notes: 'Cliente novo, primeira compra',
    },
    {
      id: '7',
      name: 'Roberto Alves',
      email: 'roberto.alves@email.com',
      phone: '(11) 33333-3333',
      avatar: '/placeholder.svg?height=40&width=40',
      status: 'blocked',
      segment: 'regular',
      registrationDate: '2023-03-12',
      lastPurchase: '2024-03-20',
      totalSpent: 450.3,
      totalOrders: 4,
      averageOrderValue: 112.58,
      address: {
        street: 'Rua Vergueiro, 432',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01504-000',
      },
      preferences: ['Marvel', 'Quadrinhos'],
      orders: [],
      notes: 'Cliente bloqueado por problemas de pagamento',
    },
  ])

  const getCustomerStats = () => ({
    total: customers.length,
    active: customers.filter((c) => c.status === 'active').length,
    inactive: customers.filter((c) => c.status === 'inactive').length,
    blocked: customers.filter((c) => c.status === 'blocked').length,
    vip: customers.filter((c) => c.segment === 'vip').length,
    new: customers.filter((c) => c.segment === 'new').length,
  })

  const stats = getCustomerStats()

  const getSegmentBadge = (segment) => {
    const config = {
      vip: { label: 'VIP', className: 'bg-warning text-white', icon: 'bi-star-fill' },
      regular: { label: 'Regular', className: 'bg-primary text-white', icon: 'bi-person-fill' },
      new: { label: 'Novo', className: 'bg-success text-white', icon: 'bi-graph-up' },
    }[segment]
    return (
      <span className={`badge ${config.className} d-inline-flex align-items-center`}>
        <i className={`bi ${config.icon} me-1`}></i>
        {config.label}
      </span>
    )
  }

  const getStatusBadge = (status) => {
    const config = {
      active: { label: 'Ativo', className: 'bg-success text-white' },
      inactive: { label: 'Inativo', className: 'bg-secondary text-white' },
      blocked: { label: 'Bloqueado', className: 'bg-danger text-white' },
    }[status] || { label: 'Desconhecido', className: 'bg-light text-dark' }

    return <span className={`badge ${config.className}`}>{config.label}</span>
  }

  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.phone.includes(searchTerm)

    const matchesSegment = selectedSegment === 'all' || cust.segment === selectedSegment
    const matchesStatus = selectedStatus === 'all' || cust.status === selectedStatus
    const matchesTab =
      selectedTab === 'all' ||
      cust.status === selectedTab ||
      cust.segment === selectedTab

    return matchesSearch && matchesSegment && matchesStatus && matchesTab
  })

  const closeModal = () => {
    setSelectedCustomer(null)
    setEditingCustomer(null)
    setIsAddModalOpen(false)
  }

  // Formulário para adicionar/editar
  const CustomerForm = ({ customer, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      name: customer?.name || '',
      email: customer?.email || '',
      phone: customer?.phone || '',
      street: customer?.address?.street || '',
      city: customer?.address?.city || '',
      state: customer?.address?.state || '',
      zipCode: customer?.address?.zipCode || '',
      notes: customer?.notes || '',
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      // Se for edição, mantém id e demais campos não alterados (status, segment, registrationDate, etc)
      if (customer) {
        const updated = {
          ...customer,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
          },
          notes: formData.notes,
        }
        onSave(updated)
      } else {
        // Novo cliente
        const newCustomer = {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          avatar: '/placeholder.svg?height=40&width=40',
          status: 'active',
          segment: 'regular',
          registrationDate: new Date().toISOString().split('T')[0],
          lastPurchase: '',
          totalSpent: 0,
          totalOrders: 0,
          averageOrderValue: 0,
          address: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
          },
          preferences: [],
          orders: [],
          notes: formData.notes,
        }
        onSave(newCustomer)
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nome Completo
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            className="form-control"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <label className="form-label">Endereço</label>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Rua, número"
              value={formData.street}
              onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Cidade"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Estado"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="CEP"
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Observações
          </label>
          <input
            id="notes"
            type="text"
            className="form-control"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            {customer ? 'Atualizar' : 'Adicionar'} Cliente
          </button>
        </div>
      </form>
    )
  }

  const CustomerDetailsModal = ({ customer }) => (
    <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-flex align-items-center">
              <i className="bi bi-person-fill me-2"></i> Perfil de {customer.name}
            </h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {/* Header do Cliente */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="rounded-circle"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <h4 className="mb-0">{customer.name}</h4>
                  {getSegmentBadge(customer.segment)} {getStatusBadge(customer.status)}
                </div>
                <div className="text-muted small">
                  <i className="bi bi-calendar me-1"></i> Cliente desde{' '}
                  {new Date(customer.registrationDate).toLocaleDateString('pt-BR')}
                  {customer.lastPurchase && (
                    <>
                      <br />
                      <i className="bi bi-bag-check me-1"></i> Última compra:{' '}
                      {new Date(customer.lastPurchase).toLocaleDateString('pt-BR')}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="h5 text-success">R$ {customer.totalSpent.toFixed(2)}</div>
                    <small className="text-muted">Total Gasto</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="h5 text-primary">{customer.totalOrders}</div>
                    <small className="text-muted">Pedidos</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="h5 text-warning">R$ {customer.averageOrderValue.toFixed(2)}</div>
                    <small className="text-muted">Ticket Médio</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Informações Pessoais */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">
                      <i className="bi bi-geo-alt-fill me-1"></i> Informações Pessoais
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="mb-1">
                      <strong>Endereço:</strong>
                      <br />
                      {customer.address.street}
                      <br />
                      {customer.address.city}, {customer.address.state}
                      <br />
                      CEP: {customer.address.zipCode}
                    </p>
                    <p className="mb-1">
                      <strong>Preferências:</strong>{' '}
                      {customer.preferences.map((pref) => (
                        <span key={pref} className="badge bg-secondary me-1">
                          {pref}
                        </span>
                      ))}
                    </p>
                    {customer.notes && (
                      <p className="mb-0">
                        <strong>Observações:</strong> {customer.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Histórico de Pedidos */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">
                      <i className="bi bi-bag-fill me-1"></i> Histórico de Pedidos
                    </h6>
                  </div>
                  <div className="card-body">
                    {customer.orders.length > 0 ? (
                      customer.orders.map((order) => (
                        <div
                          key={order.id}
                          className="d-flex justify-content-between align-items-center p-3 border rounded mb-3"
                        >
                          <div>
                            <div className="fw-medium">{order.id}</div>
                            <small className="text-muted">
                              {new Date(order.date).toLocaleDateString('pt-BR')} • {order.items}{' '}
                              item{order.items > 1 ? 's' : ''}
                            </small>
                          </div>
                          <div className="text-end">
                            <div className="fw-medium">R$ {order.total.toFixed(2)}</div>
                            <span
                              className={`badge ${
                                order.status === 'delivered'
                                  ? 'bg-success'
                                  : order.status === 'shipped'
                                  ? 'bg-primary'
                                  : order.status === 'cancelled'
                                  ? 'bg-danger'
                                  : 'bg-warning text-dark'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-muted">Nenhum pedido encontrado</p>
                    )}
                  </div>
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
  )

  return (
    <>
      <DBNavbar />

      <div className="container-fluid">
        <div className="p-4 mt-3">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">Clientes</h2>
              <small className="text-muted">Gerencie sua base de clientes</small>
            </div>
            <button className="btn btn-danger" onClick={() => setIsAddModalOpen(true)}>
              <i className="bi bi-plus-lg me-1"></i> Adicionar Cliente
            </button>
          </div>

          {/* Stats Cards */}
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">Total</h6>
                    <i className="bi bi-people text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.total}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-success">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">Ativos</h6>
                    <i className="bi bi-person text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.active}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-warning">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">VIP</h6>
                    <i className="bi bi-star text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.vip}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-primary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">Novos</h6>
                    <i className="bi bi-graph-up-arrow text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.new}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">Inativos</h6>
                    <i className="bi bi-person text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.inactive}</h3>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="card border-start border-2 border-danger">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="card-title mb-0">Bloqueados</h6>
                    <i className="bi bi-ban text-muted" style={{ fontSize: '1.25rem' }} />
                  </div>
                  <h3 className="fw-bold">{stats.blocked}</h3>
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
                className={`nav-link ${selectedTab === 'active' ? 'active' : ''}`}
                onClick={() => setSelectedTab('active')}
              >
                Ativos ({stats.active})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'vip' ? 'active' : ''}`}
                onClick={() => setSelectedTab('vip')}
              >
                VIP ({stats.vip})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'new' ? 'active' : ''}`}
                onClick={() => setSelectedTab('new')}
              >
                Novos ({stats.new})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'inactive' ? 'active' : ''}`}
                onClick={() => setSelectedTab('inactive')}
              >
                Inativos ({stats.inactive})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedTab === 'blocked' ? 'active' : ''}`}
                onClick={() => setSelectedTab('blocked')}
              >
                Bloqueados ({stats.blocked})
              </button>
            </li>
          </ul>

          {/* Filters: Search + Segment + Status */}
          <div className="row g-3 mb-4">
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar clientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedSegment}
                onChange={(e) => setSelectedSegment(e.target.value)}
              >
                <option value="all">Todos os segmentos</option>
                <option value="vip">VIP</option>
                <option value="regular">Regular</option>
                <option value="new">Novo</option>
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">Todos os status</option>
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="blocked">Bloqueado</option>
              </select>
            </div>
          </div>

          {/* Customers Table */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-white">
              <div>
                <h5 className="mb-0">Lista de Clientes</h5>
                <small className="text-muted">{filteredCustomers.length} cliente(s) encontrado(s)</small>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-white">
                    <tr>
                      <th>Cliente</th>
                      <th>Contato</th>
                      <th>Segmento</th>
                      <th>Status</th>
                      <th>Pedidos</th>
                      <th>Total Gasto</th>
                      <th>Última Compra</th>
                      <th className="text-end">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map((cust) => (
                      <tr key={cust.id}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={cust.avatar}
                              alt={cust.name}
                              className="rounded-circle"
                              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            />
                            <div>
                              <div className="fw-medium">{cust.name}</div>
                              <div className="text-muted small">
                                Desde {new Date(cust.registrationDate).toLocaleDateString('pt-BR')}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="small">{cust.email}</div>
                          <div className="text-muted small">{cust.phone}</div>
                        </td>
                        <td>{getSegmentBadge(cust.segment)}</td>
                        <td>{getStatusBadge(cust.status)}</td>
                        <td className="text-center">
                          <div className="fw-medium">{cust.totalOrders}</div>
                          <div className="text-muted small">pedidos</div>
                        </td>
                        <td>
                          <div className="fw-medium">R$ {cust.totalSpent.toFixed(2)}</div>
                          <div className="text-muted small">
                            Média: R$ {cust.averageOrderValue.toFixed(2)}
                          </div>
                        </td>
                        <td>
                          {cust.lastPurchase ? (
                            <div className="small">{new Date(cust.lastPurchase).toLocaleDateString('pt-BR')}</div>
                          ) : (
                            <div className="text-muted small">Nunca</div>
                          )}
                        </td>
                        <td className="text-end">
                          <div className="btn-group">
                            <button
                              className="btn btn-sm btn-light"
                              onClick={() => setSelectedCustomer(cust)}
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-light"
                              onClick={() => setEditingCustomer(cust)}
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Add Customer Modal */}
          {isAddModalOpen && (
            <div
              className="modal show fade"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
              tabIndex="-1"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header bg-white">
                    <h5 className="modal-title">Adicionar Novo Cliente</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <CustomerForm
                      onSave={(data) => {
                        setCustomers((prev) => [...prev, data])
                        closeModal()
                      }}
                      onCancel={closeModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Edit Customer Modal */}
          {editingCustomer && (
            <div
              className="modal show fade"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
              tabIndex="-1"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header bg-white">
                    <h5 className="modal-title">Editar Cliente</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <CustomerForm
                      customer={editingCustomer}
                      onSave={(data) => {
                        setCustomers((prev) =>
                          prev.map((c) => (c.id === data.id ? data : c))
                        )
                        closeModal()
                      }}
                      onCancel={closeModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Details Modal */}
          {selectedCustomer && <CustomerDetailsModal customer={selectedCustomer} />}
        </div>
      </div>
    </>
  )
}
