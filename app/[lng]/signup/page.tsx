import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'
import { Params } from '@/app/layout'

export default async function SignupPage({ params }: Params) {
  const session = (await auth()) as Session

  if (session) {
    redirect('/' + params.lng)
  }

  return (
    <main className="flex flex-col p-4">
      <SignupForm params={params} />
    </main>
  )
}
