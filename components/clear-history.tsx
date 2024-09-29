'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { ServerActionResult } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { IconSpinner } from '@/components/ui/icons'
import { clearChats } from '@/app/actions'
import { TLanguage } from '@/app/i18n/settings'

interface ClearHistoryProps {
  isEnabled: boolean
  lng: TLanguage
}

export function ClearHistory({ isEnabled = false, lng }: ClearHistoryProps) {
  const [open, setOpen] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()
  const router = useRouter()

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" disabled={!isEnabled || isPending}>
          {isPending && <IconSpinner className="mr-2" />}
          Wyczyść historię
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Czy jesteś pewien?</AlertDialogTitle>
          <AlertDialogDescription>
            To pernamentie usunie podgląd z naszych serwerów.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Anuluj</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={event => {
              event.preventDefault()
              startTransition(async () => {
                const result = await clearChats(lng)
                if (result && 'error' in result) {
                  toast.error(result.error)
                  return
                }

                setOpen(false)
              })
            }}
          >
            {isPending && <IconSpinner className="mr-2 animate-spin" />}
            Usuń
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
