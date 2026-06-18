import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.length
  }

  if (value && typeof value === 'object') {
    return value.displayName ?? value.name ?? value.username ?? value._id ?? 'Linked item'
  }

  return value ?? 'None'
}

function StateRow({ columnCount, children }) {
  return (
    <tr>
      <td colSpan={columnCount}>{children}</td>
    </tr>
  )
}

export default function ResourcePage({ title, resourceName, columns }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadRecords() {
      try {
        setStatus('loading')
        const collection = await fetchCollection(resourceName)

        if (isMounted) {
          setRecords(collection)
          setStatus('ready')
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message)
          setStatus('error')
        }
      }
    }

    loadRecords()

    return () => {
      isMounted = false
    }
  }, [resourceName])

  return (
    <section className="resource-section">
      <div className="resource-heading">
        <div>
          <h2>{title}</h2>
          <p>{records.length} records</p>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle resource-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {status === 'loading' && <StateRow columnCount={columns.length}>Loading data...</StateRow>}
            {status === 'error' && <StateRow columnCount={columns.length}>{error}</StateRow>}
            {status === 'ready' && records.length === 0 && <StateRow columnCount={columns.length}>No records found.</StateRow>}
            {status === 'ready' && records.map((record) => (
              <tr key={record._id ?? JSON.stringify(record)}>
                {columns.map((column) => (
                  <td key={column.key}>{formatValue(column.render(record))}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}