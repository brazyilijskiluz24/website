import { TLanguage } from '@/app/i18n/settings'

type DocPreviewParams = {
  lng: TLanguage
}

export default function DocPreview({ lng }: DocPreviewParams) {
  return <div className="w-1/2 bg-red">preview</div>
}
