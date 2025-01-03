import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  active?: boolean
}

export const AppleLogo = ({ className, active = false }: LogoProps) => {
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
            y1="0.03125"
            x2="16"
            y2="31.9687"
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
        d="M15.5402 7.71725C15.1996 5.86037 16.0776 3.94944 17.135 2.66162C18.3003 1.24069 20.3001 0.151 22.0091 0.03125C22.2978 1.97806 21.5033 3.87487 20.4575 5.21656C19.3356 6.65794 17.4067 7.77569 15.5402 7.71725ZM25.5646 14.4457C26.0934 12.9703 27.141 11.6429 28.7663 10.7472C27.1239 8.69775 24.818 7.50787 22.6419 7.50787C19.7628 7.50787 18.5455 8.87956 16.5458 8.87956C14.4858 8.87956 12.923 7.50787 10.4292 7.50787C7.98372 7.50787 5.38066 8.99837 3.72978 11.5439C3.12278 12.4849 2.7116 13.6538 2.48735 14.9558C1.8651 18.6082 2.7946 23.3656 5.56728 27.5898C6.91541 29.6396 8.71235 31.9484 11.0598 31.9685C13.151 31.9889 13.7443 30.6315 16.5752 30.6175C19.4103 30.6014 19.9477 31.9826 22.036 31.9626C24.3842 31.9428 26.2801 29.3877 27.6282 27.3382C28.5882 25.8674 28.9512 25.1246 29.6976 23.4618C25.9022 22.0304 24.3412 17.8482 25.5646 14.4457Z"
        fill={active ? 'url(#paint0)' : undefined}
      />
    </svg>
  )
}
