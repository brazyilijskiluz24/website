import { Input } from '@/components/ui/input'
import AddressSelect from '@/components/address-select'

const NameComponent = () => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2 px-4 sm:px-0">
      <div
        className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900`}
      >
        <div className={'flex gap-4'}>
          <Input placeholder={'Imię'} className={'w-1/2'} />
          <Input placeholder={'Nazwisko'} className={'w-1/2'} />
        </div>
      </div>
    </div>
  )
}

export default NameComponent
