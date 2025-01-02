import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  active?: boolean
}

export const AndroidLogo = ({ className, active = false }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('transition-colors duration-200', className)}
    >
      {active && (
        <defs>
          <linearGradient
            id="paint0"
            x1="16"
            y1="7.04004"
            x2="16"
            y2="24.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71A2FF" />
            <stop offset="1" stopColor="#F7ECFF" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      )}
      <path
        className={
          !active ? 'fill-slate-200 hover:fill-slate-50 group-hover:fill-slate-50' : undefined
        }
        d="M23.364 20.423a1.667 1.667 0 110-2.625 1.667 1.667 0 010 2.625zm-14.728 0a1.667 1.667 0 110-2.625 1.667 1.667 0 010 2.625zm14.21-7.976l2.663-4.582a.666.666 0 00-.514-1.022.666.666 0 00-.622.297l-2.7 4.64a16.672 16.672 0 00-6.673-1.454c-2.36 0-4.695.495-6.85 1.454l-2.696-4.64a.667.667 0 00-1.136.725l2.663 4.582C5.856 13.693 3.905 15.49 2.48 17.675 1.055 19.86.203 22.364 0 24.96h32c-.204-2.594-1.057-5.097-2.482-7.281-1.424-2.184-3.375-3.98-5.676-5.232"
        fill={active ? 'url(#paint0)' : undefined}
      />
    </svg>
  )
}
