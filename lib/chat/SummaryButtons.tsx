'use client'

import React from 'react'

const DownloadButton = ({
  xmlContent
}: {
  xmlContent: string
}) => {
  const handleDownload = () => {
    const blob = new Blob([xmlContent], {
      type: 'application/xml'
    })

    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'formularz.xml'

    document.body.appendChild(a)
    a.click()

    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <button onClick={handleDownload}>
      Pobierz formularz
    </button>
  )
}

export default DownloadButton
