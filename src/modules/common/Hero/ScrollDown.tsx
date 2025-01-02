import { cn } from '@/utils/cn'
import React from 'react'

export const ScrollDown = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `absolute w-6 h-10 border-2 border-gray-200 rounded-full flex items-start justify-center p-1`,
        className,
      )}
    >
      {/* Mouse wheel/dot animation */}
      <svg viewBox="0 0 10 20" className="w-2 h-4">
        <circle
          cx="5"
          cy="5"
          r="2.5"
          fill="currentColor"
          className="text-slate-300 animate-bounce"
        />
      </svg>
    </div>
  )
}
