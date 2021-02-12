import React from 'react'

export const Loader = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner-border cen" style={{ width: "3rem", height: "3rem"}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)
