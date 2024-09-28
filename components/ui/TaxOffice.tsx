'use client'
import React from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import taxOfices from '@/lib/taxOfices'

export default function TaxOffice() {
  const [value, setValue] = React.useState('')
  const [selectedKey, setSelectedKey] = React.useState(null)

  const onSelectionChange = id => {
    setSelectedKey(id)
  }

  const onInputChange = value => {
    setValue(value)
  }

  return (
    <div className="flex w-full flex-col">
      <Autocomplete
        label="Search an animal"
        variant="bordered"
        defaultItems={taxOfices.map(v => ({ value: v, label: v }))}
        className="max-w-xs"
        allowsCustomValue={true}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {item => (
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  )
}
