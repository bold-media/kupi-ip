'use client'

export const GradientDefs = () => {
  return (
    <svg
      width="0"
      height="0"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brand-gradient-primary" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="var(--brand-primary-a)" offset="0%" />
          <stop stopColor="var(--brand-primary-b)" offset="100%" />
        </linearGradient>
        <linearGradient id="brand-gradient-secondary" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="var(--brand-secondary-a)" offset="0%" />
          <stop stopColor="var(--brand-secondary-b)" offset="100%" />
        </linearGradient>
      </defs>
    </svg>
  )
}
