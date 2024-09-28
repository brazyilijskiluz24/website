import { auth } from '@/auth'
import LoginForm from '@/components/login-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'
import { Params } from '@/app/layout'

export default async function LoginPage({ params }: Params) {
  const session = (await auth()) as Session

  if (session) {
    redirect('/' + params.lng)
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm params={params} />
    </main>
  )
}
