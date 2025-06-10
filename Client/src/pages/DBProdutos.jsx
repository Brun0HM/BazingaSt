import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import DBNavbar from '../components/UiDB/DBNavbar'

export default function DBProdutos() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProducts, setSelectedProducts] = useState([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [viewProduct, setViewProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)

  const [products, setProducts] = useState([
    { id: '1', name: 'Camiseta Star Wars - Darth Vader', category: 'Camisetas', price: 89.9, stock: 38, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Camiseta 100% algodão com estampa do Darth Vader', sku: 'SW-DV-001', sales: 142 },
    { id: '2', name: 'Action Figure Homem-Aranha', category: 'Action Figures', price: 199.9, stock: 15, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Action figure articulado do Homem-Aranha com 30cm', sku: 'AF-SM-001', sales: 128 },
    { id: '3', name: 'Caneca Rick and Morty', category: 'Canecas', price: 49.9, stock: 0, status: 'out_of_stock', image: '/placeholder.svg?height=80&width=80', description: 'Caneca de porcelana com estampa Rick and Morty', sku: 'MG-RM-001', sales: 113 },
    { id: '4', name: 'Funko Pop Stranger Things - Eleven', category: 'Colecionáveis', price: 149.9, stock: 23, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Funko Pop da personagem Eleven de Stranger Things', sku: 'FP-ST-011', sales: 98 },
    { id: '5', name: 'Quadro Decorativo Batman', category: 'Decoração', price: 79.9, stock: 12, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Quadro decorativo do Batman em MDF', sku: 'QD-BT-001', sales: 67 },
    { id: '6', name: 'Chaveiro Groot Guardians', category: 'Acessórios', price: 29.9, stock: 45, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Chaveiro do personagem Groot dos Guardiões da Galáxia', sku: 'CH-GR-001', sales: 89 },
    { id: '7', name: 'Jogo Dungeons & Dragons Starter Set', category: 'Jogos', price: 299.9, stock: 8, status: 'active', image: '/placeholder.svg?height=80&width=80', description: 'Kit inicial do jogo de RPG Dungeons & Dragons', sku: 'JG-DD-001', sales: 34 },
    { id: '8', name: 'Camiseta The Office - Dunder Mifflin', category: 'Camisetas', price: 79.9, stock: 0, status: 'inactive', image: '/placeholder.svg?height=80&width=80', description: 'Camiseta com logo da Dunder Mifflin Paper Company', sku: 'SW-TO-001', sales: 56 },
  ])

  const categories = ['Camisetas', 'Action Figures', 'Canecas', 'Colecionáveis', 'Decoração', 'Acessórios', 'Jogos']

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const isStatusFilter = ['active', 'inactive', 'out_of_stock'].includes(selectedCategory)
    const matchesCategoryOrStatus =
      selectedCategory === 'all' ||
      (isStatusFilter && product.status === selectedCategory) ||
      (!isStatusFilter && product.category === selectedCategory)
    return matchesSearch && matchesCategoryOrStatus
  })

  const handleSelectProduct = (productId) =>
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )

  const handleSelectAll = () =>
    selectedProducts.length === filteredProducts.length
      ? setSelectedProducts([])
      : setSelectedProducts(filteredProducts.map((p) => p.id))

  const getStatusBadge = (status) => {
    if (status === 'active') return <span className="badge bg-success">Ativo</span>
    if (status === 'inactive') return <span className="badge bg-secondary">Inativo</span>
    if (status === 'out_of_stock') return <span className="badge bg-danger">Sem Estoque</span>
    return <span className="badge bg-light text-dark">Desconhecido</span>
  }

  const handleDeleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    setSelectedProducts((prev) => prev.filter((pid) => pid !== id))
    setViewProduct(null)
    setEditingProduct(null)
  }

  const handleToggleStatus = (id) =>
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p
      )
    )

  const handleBatchAction = (action) => {
    if (action === 'delete')
      setProducts((prev) => prev.filter((p) => !selectedProducts.includes(p.id)))
    if (action === 'activate')
      setProducts((prev) => prev.map((p) => (selectedProducts.includes(p.id) ? { ...p, status: 'active' } : p)))
    if (action === 'deactivate')
      setProducts((prev) => prev.map((p) => (selectedProducts.includes(p.id) ? { ...p, status: 'inactive' } : p)))
    setSelectedProducts([])
  }

  const ProductDetailsModal = ({ product }) => (
    <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="bi bi-box-seam me-2"></i> Produto: {product.name}
            </h5>
            <button type="button" className="btn-close" onClick={() => setViewProduct(null)}></button>
          </div>
          <div className="modal-body">
            <div className="d-flex gap-3 mb-4">
              <img src={product.image} alt={product.name} className="rounded" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <div>
                <p><strong>Categoria:</strong> {product.category}</p>
                <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
                <p><strong>Estoque:</strong> {product.stock}</p>
                <p><strong>SKU:</strong> {product.sku}</p>
                <p><strong>Vendas:</strong> {product.sales}</p>
                <p><strong>Status:</strong> {getStatusBadge(product.status)}</p>
              </div>
            </div>
            <div>
              <p><strong>Descrição:</strong></p>
              <p className="text-muted">{product.description}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setViewProduct(null)}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  )

  const ProductForm = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      name: product?.name || '',
      category: product?.category || '',
      price: product?.price || 0,
      stock: product?.stock || 0,
      description: product?.description || '',
      sku: product?.sku || '',
      status: product?.status || 'active',
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      if (product) onSave({ ...product, ...formData })
      else {
        const newProduct = { id: Date.now().toString(), ...formData, image: '/placeholder.svg?height=80&width=80', sales: 0 }
        onSave(newProduct)
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome do Produto</label>
          <input
            id="name"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Digite o nome do produto"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sku" className="form-label">SKU</label>
          <input
            id="sku"
            className="form-control"
            value={formData.sku}
            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            placeholder="Ex: SW-DV-001"
            required
          />
        </div>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Categoria</label>
            <select
              id="category"
              className="form-select"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            >
              <option value="">Selecione uma categoria</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Preço (R$)</label>
            <input
              id="price"
              type="number"
              step="0.01"
              className="form-control"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              placeholder="0.00"
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <label htmlFor="stock" className="form-label">Quantidade em Estoque</label>
            <input
              id="stock"
              type="number"
              className="form-control"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
              placeholder="0"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              id="status"
              className="form-select"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
              <option value="out_of_stock">Sem Estoque</option>
            </select>
          </div>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="description" className="form-label">Descrição</label>
          <textarea
            id="description"
            className="form-control"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Descreva o produto..."
            rows={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagem do Produto</label>
          <input id="image" type="file" className="form-control" accept="image/*" />
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-primary">{product ? 'Atualizar' : 'Adicionar'} Produto</button>
        </div>
      </form>
    )
  }

  return (
    <>
      <DBNavbar />
      <div className="ms-3 me-3">
        <div className="container-fluid p-4">
          <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
            <div>
              <h2 className="fw-bold">Produtos</h2>
              <small className="text-muted">Gerencie o catálogo da sua loja geek</small>
            </div>
            <button className="btn btn-danger" onClick={() => setIsAddModalOpen(true)}>
              <i className="bi bi-plus-lg me-1"></i> Adicionar Produto
            </button>
          </div>

          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                Todos ({products.length})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedCategory === 'active' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('active')}
              >
                Ativos ({products.filter((p) => p.status === 'active').length})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedCategory === 'inactive' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('inactive')}
              >
                Inativos ({products.filter((p) => p.status === 'inactive').length})
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${selectedCategory === 'out_of_stock' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('out_of_stock')}
              >
                Sem Estoque ({products.filter((p) => p.status === 'out_of_stock').length})
              </button>
            </li>
          </ul>

          <div className="row g-3 mb-4 align-items-center">
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Todas as categorias</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
                <option disabled>──────────</option>
                <option value="active">Ativos</option>
                <option value="inactive">Inativos</option>
                <option value="out_of_stock">Sem Estoque</option>
              </select>
            </div>
            <div className="col-md-4 text-end">
              {selectedProducts.length > 0 && (
                <div className="dropdown d-inline me-2">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="batchActions"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ações em lote ({selectedProducts.length})
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="batchActions">
                    <li>
                      <button className="dropdown-item d-flex align-items-center" onClick={() => handleBatchAction('activate')}>
                        <i className="bi bi-check-circle me-2"></i> Ativar selecionados
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item d-flex align-items-center" onClick={() => handleBatchAction('deactivate')}>
                        <i className="bi bi-slash-circle me-2"></i> Desativar selecionados
                      </button>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger d-flex align-items-center" onClick={() => handleBatchAction('delete')}>
                        <i className="bi bi-trash me-2"></i> Excluir selecionados
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Lista de Produtos</h5>
              <small className="text-muted">{filteredProducts.length} produto(s) encontrado(s)</small>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-white">
                    <tr>
                      <th scope="col" style={{ width: '2rem' }}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th scope="col">Produto</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Estoque</th>
                      <th scope="col">Vendas</th>
                      <th scope="col">Status</th>
                      <th scope="col" style={{ width: '6rem' }}>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleSelectProduct(product.id)}
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={product.image} alt={product.name} className="rounded me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                            <div>
                              <div className="fw-medium">{product.name}</div>
                              <div className="text-muted small text-truncate" style={{ maxWidth: '200px' }}>{product.description}</div>
                            </div>
                          </div>
                        </td>
                        <td>{product.category}</td>
                        <td className="font-monospace small">{product.sku}</td>
                        <td>R$ {product.price.toFixed(2)}</td>
                        <td>
                          {product.stock === 0 ? <span className="text-danger fw-semibold">{product.stock}</span> : product.stock}
                        </td>
                        <td>{product.sales}</td>
                        <td>{getStatusBadge(product.status)}</td>
                        <td>
                          <div className="dropdown">
                            <button className="btn btn-sm btn-light dropdown-toggle" type="button" id={`actions-${product.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="bi bi-three-dots-vertical"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`actions-${product.id}`}>
                              <li>
                                <button className="dropdown-item d-flex align-items-center" onClick={() => setViewProduct(product)}>
                                  <i className="bi bi-eye me-2"></i> Visualizar
                                </button>
                              </li>
                              <li>
                                <button className="dropdown-item d-flex align-items-center" onClick={() => setEditingProduct(product)}>
                                  <i className="bi bi-pencil-fill me-2"></i> Editar
                                </button>
                              </li>
                              <li>
                                <button className="dropdown-item d-flex align-items-center" onClick={() => handleToggleStatus(product.id)}>
                                  {product.status === 'active' ? <i className="bi bi-slash-circle me-2"></i> : <i className="bi bi-check-circle me-2"></i>}
                                  {product.status === 'active' ? 'Desativar' : 'Ativar'}
                                </button>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <button className="dropdown-item text-danger d-flex align-items-center" onClick={() => handleDeleteProduct(product.id)}>
                                  <i className="bi bi-trash me-2"></i> Excluir
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {isAddModalOpen && (
            <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Adicionar Novo Produto</h5>
                    <button type="button" className="btn-close" onClick={() => setIsAddModalOpen(false)}></button>
                  </div>
                  <div className="modal-body">
                    <ProductForm
                      onSave={(newProduct) => {
                        setProducts([...products, newProduct])
                        setIsAddModalOpen(false)
                      }}
                      onCancel={() => setIsAddModalOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {editingProduct && (
            <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Editar Produto</h5>
                    <button type="button" className="btn-close" onClick={() => setEditingProduct(null)}></button>
                  </div>
                  <div className="modal-body">
                    <ProductForm
                      product={editingProduct}
                      onSave={(updatedProduct) => {
                        setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))
                        setEditingProduct(null)
                      }}
                      onCancel={() => setEditingProduct(null)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {viewProduct && <ProductDetailsModal product={viewProduct} />}
        </div>
      </div>
    </>
  )
}
