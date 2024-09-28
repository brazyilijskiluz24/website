import { redirect } from 'next/navigation'
import { Params } from '@/app/layout'

export default async function NewPage({ params }: Params) {
  redirect('/' + params.lng)
}
