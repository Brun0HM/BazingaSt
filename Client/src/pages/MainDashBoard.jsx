// MainDashBoard.jsx
import React, { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DBNavbar from '../components/UiDB/DBNavbar'

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export default function MainDashBoard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Dados para os gráficos
  const salesData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Vendas 2024',
        data: [3200, 4100, 3800, 5400, 4800, 6100],
        backgroundColor: 'rgba(183, 0, 255, 0.6)',
        borderColor: 'rgb(132, 0, 255)',
        borderWidth: 2,
      },
    ],
  }

  const productsData = {
    labels: ['Camisetas', 'Action Figures', 'Canecas', 'Quadros', 'Acessórios', 'Jogos'],
    datasets: [
      {
        label: 'Vendas por Categoria',
        data: [400, 380, 320, 280, 220, 190],
        backgroundColor: [
          'rgba(220, 53, 69, 0.7)',   // bg-danger
          'rgba(40, 167, 69, 0.7)',   // bg-success
          'rgba(255, 193, 7, 0.7)',   // bg-warning
          'rgba(23, 162, 184, 0.7)',  // bg-info
          'rgba(108, 117, 125, 0.7)', // bg-secondary
          'rgba(0, 123, 255, 0.7)',   // bg-primary
        ],
        borderWidth: 1,
      },
    ],
  }

  const recentOrders = [
    { id: '#4832', customer: 'Carlos Silva', status: 'Entregue', date: '12/05/2024', total: 'R$ 189,90' },
    { id: '#4831', customer: 'Ana Oliveira', status: 'Em trânsito', date: '11/05/2024', total: 'R$ 349,80' },
    { id: '#4830', customer: 'Pedro Santos', status: 'Processando', date: '11/05/2024', total: 'R$ 129,90' },
    { id: '#4829', customer: 'Mariana Costa', status: 'Entregue', date: '10/05/2024', total: 'R$ 219,70' },
    { id: '#4828', customer: 'Lucas Mendes', status: 'Cancelado', date: '09/05/2024', total: 'R$ 89,90' },
  ]

  const popularProducts = [
    { name: 'Camiseta Star Wars - Darth Vader', sales: 142, stock: 38, price: 'R$ 89,90', image: '/placeholder.svg?height=60&width=60' },
    { name: 'Action Figure Homem-Aranha', sales: 128, stock: 15, price: 'R$ 199,90', image: '/placeholder.svg?height=60&width=60' },
    { name: 'Caneca Personalizada Rick and Morty', sales: 113, stock: 42, price: 'R$ 49,90', image: '/placeholder.svg?height=60&width=60' },
    { name: 'Funko Pop Stranger Things - Eleven', sales: 98, stock: 23, price: 'R$ 149,90', image: '/placeholder.svg?height=60&width=60' },
  ]

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <DBNavbar />

      {/* Conteúdo Principal */}
      <div className="ms-3 me-3">
        <div className="flex-grow-1 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
            <h2 className="fw-bold">Dashboard</h2>
          </div>

          {/* Abas */}
          <ul className="nav nav-tabs mb-4" id="dashboardTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
                type="button"
              >
                Visão Geral
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
                type="button"
              >
                Análises
              </button>
            </li>
          </ul>

          {/* Conteúdo das Abas */}
          <div className="tab-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="tab-pane fade show active">
                {/* Cards de Métricas */}
                <div className="row g-4 mb-4">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card border-start border-2 border-primary">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="card-title mb-0">Receita Total</h6>
                          <i className="bi bi-currency-dollar text-muted" style={{ fontSize: '1.25rem' }} />
                        </div>
                        <h3 className="fw-bold">R$ 45.231,89</h3>
                        <p className="text-muted small">+20.1% vs mês anterior</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card border-start border-2 border-success">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="card-title mb-0">Novos Clientes</h6>
                          <i className="bi bi-people text-muted" style={{ fontSize: '1.25rem' }} />
                        </div>
                        <h3 className="fw-bold">+138</h3>
                        <p className="text-muted small">+14.2% vs mês anterior</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card border-start border-2 border-warning">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="card-title mb-0">Pedidos</h6>
                          <i className="bi bi-cart3 text-muted" style={{ fontSize: '1.25rem' }} />
                        </div>
                        <h3 className="fw-bold">+593</h3>
                        <p className="text-muted small">+5.2% vs mês anterior</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="card border-start border-2 border-danger">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="card-title mb-0">Produtos Ativos</h6>
                          <i className="bi bi-box2 text-muted" style={{ fontSize: '1.25rem' }} />
                        </div>
                        <h3 className="fw-bold">428</h3>
                        <p className="text-muted small">+12 novos produtos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid 2x2 de Gráficos e Tabelas */}
                <div className="row g-4 mb-4">
                  {/* Vendas Mensais */}
                  <div className="col-12 col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Vendas Mensais</h6>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <Line
                          data={salesData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { position: 'top' } },
                          }}
                          style={{ flexGrow: 1 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vendas por Categoria */}
                  <div className="col-12 col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Vendas por Categoria</h6>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <Bar
                          data={productsData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                          }}
                          style={{ flexGrow: 1 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pedidos Recentes */}
                  <div className="col-12 col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Pedidos Recentes</h6>
                        <small className="text-muted">Você recebeu 30 pedidos neste mês</small>
                      </div>
                      <div className="card-body p-0 flex-grow-1 overflow-auto" style={{ maxHeight: '100%' }}>
                        <div className="table-responsive">
                          <table className="table table-sm mb-0">
                            <thead className="table-white">
                              <tr>
                                <th>Pedido</th>
                                <th>Cliente</th>
                                <th>Status</th>
                                <th>Data</th>
                                <th className="text-end">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {recentOrders.map((order) => (
                                <tr key={order.id}>
                                  <td>{order.id}</td>
                                  <td>{order.customer}</td>
                                  <td>
                                    <span
                                      className={`badge ${
                                        order.status === 'Entregue'
                                        ? 'bg-success'
                                        : order.status === 'Em trânsito'
                                        ? 'bg-primary'
                                        : order.status === 'Processando'
                                        ? 'bg-warning text-dark'
                                        : 'bg-danger'
                                      }`}
                                    >
                                      {order.status}
                                    </span>
                                  </td>
                                  <td>{order.date}</td>
                                  <td className="text-end">{order.total}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card-footer bg-white text-end">
                        <a href="/dbpedidos" className="btn btn-outline-secondary">
                          Ver todos os pedidos
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Produtos Populares */}
                  <div className="col-12 col-lg-6">
                    <div className="card h-100">
                      <div className="card-header bg-white">
                        <h6 className="mb-0">Produtos Populares</h6>
                        <small className="text-muted">Os produtos mais vendidos este mês</small>
                      </div>
                      <div className="card-body d-flex flex-column overflow-auto" style={{ maxHeight: '100%' }}>
                        {popularProducts.map((product) => (
                          <div key={product.name} className="d-flex align-items-center mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-thumbnail me-3"
                              style={{ width: '60px', height: '60px' }}
                            />
                            <div>
                              <p className="mb-1 fw-medium">{product.name}</p>
                              <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                                {product.sales} vendas · {product.stock} em estoque
                              </p>
                            </div>
                            <div className="ms-auto fw-semibold">{product.price}</div>
                          </div>
                        ))}
                      </div>
                      <div className="card-footer bg-white text-end">
                        <a href="/dbprodutos" className="btn btn-outline-secondary">
                          Ver todos os produtos
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="tab-pane fade show active">
                <div className="card">
                  <div className="card-header bg-white">
                    <h6 className="mb-0">Análises Detalhadas</h6>
                    <small className="text-muted">Visualize métricas avançadas da sua loja</small>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                    <div className="text-center text-muted">
                      <i className="bi bi-bar-chart-fill mb-3" style={{ fontSize: '3rem' }}></i>
                      <h5>Análises em desenvolvimento</h5>
                      <p>Esta seção estará disponível em breve com métricas detalhadas.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
