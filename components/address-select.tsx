import taxOfices from '@/lib/taxOfices'
import Select from 'react-select'
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import { Params } from '@/app/layout'
import AsyncSelect from 'react-select/async'
import debounce from 'lodash.debounce'

const getAddresses = async (
  inputValue: string,
  callback: (options: any) => void
) => {
  const req = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json`
  )
  const res = await req.json()
  console.log('res:', res)
  if (Array.isArray(res)) {
    return res.map(v => ({
      label: v.display_name,
      value: { x: v.lat, y: v.lon }
    }))
  }
}

const AddressSelect = ({ params }: Params) => {
  const { t } = useTranslation(params.lng, 'chat')

  return (
    <div className={'mb-'}>
      <AsyncSelect
        cacheOptions
        loadOptions={getAddresses}
        placeholder={t('selectLocation')}
        className={'mx-auto w-full'}
        options={taxOfices.map(v => ({ value: v, label: v }))}
      />
    </div>
  )
}

export default AddressSelect
