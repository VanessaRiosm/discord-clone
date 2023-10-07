'use client'
import {X} from 'lucide-react'
import Image from 'next/image'
import {UploadDropzone} from '@/lib/uploadthing'

interface FileUploadProps {
  onChange: (url?: string) => void
  value: string
  endpoint: 'messageFile' | 'serverImage'
}

export const FileUpload = ({onChange, value, endpoint}: FileUploadProps) => {
  const fileType = value?.split('.').pop()

  if (value && fileType !== 'pdf') {
    return (
      <div className='realtive h-20 w-20  flex justify-center'>
        <Image
          src={value}
          alt='upload'
          className='rounded-full'
          height={5}
          width={100}
        />

        <button
          onClick={() => onChange('')}
          className='bg-rose-500 text-white p-1 rounded-full absolute top-50 right-[210px] shadow-sm'
          type='button'
        >
          <X className='h-5 w-5' />
        </button>
      </div>
    )
  }

  if (value && fileType === 'pdf') {
    return <div className='relative'></div>
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => {
        console.log(error)
      }}
    />
  )
}
