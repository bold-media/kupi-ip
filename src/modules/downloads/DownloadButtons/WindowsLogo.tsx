import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  active?: boolean
}

export const WindowsLogo = ({ className, active = false }: LogoProps) => {
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
            x1="23.1399"
            y1="0.462891"
            x2="23.1399"
            y2="15.3066"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71A2FF" />
            <stop offset="1" stopColor="#F7ECFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint1"
            x1="6.8917"
            y1="3.14258"
            x2="6.8917"
            y2="15.3977"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71A2FF" />
            <stop offset="1" stopColor="#F7ECFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint2"
            x1="6.88209"
            y1="16.6763"
            x2="6.88209"
            y2="28.9643"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71A2FF" />
            <stop offset="1" stopColor="#F7ECFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient
            id="paint3"
            x1="23.126"
            y1="16.8408"
            x2="23.126"
            y2="31.5246"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71A2FF" />
            <stop offset="1" stopColor="#F7ECFF" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      )}
      <g clipPath="url(#clip0_101_2253)">
        <path
          className={
            !active ? 'fill-slate-200 hover:fill-slate-50 group-hover:fill-slate-50' : undefined
          }
          d="M14.7484 2.90129C20.3377 2.04796 25.9335 1.23516 31.5356 0.462891C31.5356 5.36956 31.5356 10.2762 31.5356 15.1829C25.9399 15.2042 20.3441 15.2896 14.7441 15.3066C14.7441 11.1708 14.7441 7.0364 14.7441 2.90342L14.7484 2.90129Z"
          fill={active ? 'url(#paint0)' : undefined}
        />
        <path
          className={
            !active ? 'fill-slate-200 hover:fill-slate-50 group-hover:fill-slate-50' : undefined
          }
          d="M0.556763 4.88124C4.7637 4.23058 8.98983 3.67164 13.2266 3.14258C13.2266 7.21013 13.2266 11.2784 13.2266 15.3474C9.00476 15.3474 4.7829 15.4071 0.561029 15.3964V4.88124H0.556763Z"
          fill={active ? 'url(#paint1)' : undefined}
        />
        <path
          className={
            !active ? 'fill-slate-200 hover:fill-slate-50 group-hover:fill-slate-50' : undefined
          }
          d="M0.556757 16.6784C4.77436 16.6635 8.99409 16.7317 13.2117 16.7232C13.2117 20.8043 13.2117 24.8853 13.2117 28.9643C8.99622 28.3413 4.77436 27.7952 0.55249 27.2235V16.6784H0.556757Z"
          fill={active ? 'url(#paint2)' : undefined}
        />
        <path
          className={
            !active ? 'fill-slate-200 hover:fill-slate-50 group-hover:fill-slate-50' : undefined
          }
          d="M14.7207 16.8408H31.5314C31.5314 21.7347 31.5314 26.6293 31.5314 31.5246C25.942 30.6862 20.3442 29.9096 14.7442 29.1502C14.7442 25.0485 14.7363 20.9454 14.7207 16.8408Z"
          fill={active ? 'url(#paint3)' : undefined}
        />
      </g>
      <defs>
        <clipPath id="clip0_101_2253">
          <rect width="32" height="32" />
        </clipPath>
      </defs>
    </svg>
  )
}
