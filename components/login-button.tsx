'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'
import { TLanguage } from '@/app/i18n/settings'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'

interface LoginButtonProps extends ButtonProps {
  lng: TLanguage
}

export function LoginButton({ className, ...props }: LoginButtonProps) {
  const router = useRouter()
  const { t } = useTranslation(props.lng, 'chat')

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        router.push(`/${props.lng}/login`)
      }}
      className={'w-full justify-start pl-5'}
    >
      <span>{t('login')}</span>
    </Button>
  )
}
