'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/[lng]/signup/actions'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { IconSpinner } from './ui/icons'
import { getMessageFromCode } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Params } from '@/app/layout'
import { useTranslation } from '@/app/i18n/client'

export default function SignupForm({ params }: Params) {
  const router = useRouter()
  const [result, dispatch] = useFormState(signup, undefined)
  const { t } = useTranslation(params.lng, 'auth')

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <form
      action={dispatch}
      className="flex flex-col items-center gap-4 space-y-3"
    >
      <h1 className="text-2xl font-bold">
        <span className="text-red">e</span>-podatek
      </h1>
      <div className="w-full flex-1 rounded-lg border bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
        <h1 className="mb-3 text-2xl font-bold">{t('signUpHeader')}</h1>
        <p className="mb-3 block text-sm font-medium text-zinc-600">
          {t('signUpDescription')}
        </p>
        <div className="w-full">
          <div>
            <label
              className="mb-2 mt-5 block text-xs font-medium text-zinc-400"
              htmlFor="email"
            >
              {t('email')}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="email"
                type="email"
                name="email"
                placeholder={t('enterEmail')}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-2 mt-5 block text-xs font-medium text-zinc-400"
              htmlFor="password"
            >
              {t('password')}
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="password"
                type="password"
                name="password"
                placeholder={t('enterPassword')}
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton params={params} />
      </div>

      <Link
        href={`/${params.lng}/login`}
        className="flex flex-row gap-1 text-sm text-zinc-400"
      >
        {t('alreadyHaveAccount')}{' '}
        <div className="font-semibold underline">{t('signIn')}</div>
      </Link>
    </form>
  )
}

function LoginButton({ params }: Params) {
  const { pending } = useFormStatus()
  const { t } = useTranslation(params.lng, 'auth')

  return (
    <button
      className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-md bg-red-600 p-2 text-sm font-semibold text-zinc-100 hover:bg-red-700 dark:bg-red-700 dark:text-zinc-50 dark:hover:bg-red-800"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner /> : t('createAccount')}
    </button>
  )
}
