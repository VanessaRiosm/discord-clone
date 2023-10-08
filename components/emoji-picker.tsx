'use client'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Smile} from 'lucide-react'

interface EmojiPickerProps {
  onChange: (value: string) => void
}

export const EmojiPicker = ({onChange}: EmojiPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Smile className='text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300' />
      </PopoverTrigger>
      <PopoverContent
        side='right'
        sideOffset={40}
        className='bg-transparent border-none shadow-non drop-shadow-none mb-16'
      ></PopoverContent>
    </Popover>
  )
}
