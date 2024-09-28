'use client'
import React from 'react'
import taxOfices from '@/lib/taxOfices'
import Select from 'react-select'
import { useTranslation } from '@/app/i18n/client'
import { Params } from '@/app/layout'

export default function TaxOffice({ params }: Params) {
  const { t } = useTranslation(params.lng, 'chat')

  return (
    <Select
      placeholder={t('selectOrSearchTaxOffice')}
      className={'mx-auto w-full'}
      options={taxOfices.map(v => ({ value: v, label: v }))}
    />
  )
}
