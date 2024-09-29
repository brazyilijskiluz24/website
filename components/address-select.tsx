import taxOfices from '@/lib/taxOfices'
import Select from 'react-select'
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import { Params } from '@/app/layout'
import AsyncSelect from 'react-select/async'

const getAddresses = async (
  inputValue: string,
  callback: (options: any) => void
) => {
  const req = await fetch(
    `https://nominatim.openstreetmap.org/$q=${inputValue}`
  )
  return await req.json()
}

const AddressSelect = ({ params }: Params) => {
  const { t } = useTranslation(params.lng, 'chat')

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={getAddresses}
      placeholder={t('selectOrSearchTaxOffice')}
      className={'mx-auto w-full'}
      options={taxOfices.map(v => ({ value: v, label: v }))}
    />
  )
}

export default AddressSelect
