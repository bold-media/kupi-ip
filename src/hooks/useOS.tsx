import { useState, useEffect } from 'react'
import { UAParser } from 'ua-parser-js'
import { canUseDOM } from '@/utils/canUseDOM'

export enum OperatingSystem {
  Windows = 'windows',
  Mac = 'macos',
  Linux = 'linux',
  Android = 'android',
  iOS = 'ios',
  Unknown = 'unknown',
}

export const OS_DISPLAY_NAMES: Record<OperatingSystem, string> = {
  [OperatingSystem.Windows]: 'Windows',
  [OperatingSystem.Mac]: 'Mac OS',
  [OperatingSystem.Linux]: 'Linux',
  [OperatingSystem.Android]: 'Android',
  [OperatingSystem.iOS]: 'iOS',
  [OperatingSystem.Unknown]: 'Unknown',
}

interface UseOSResult {
  os: OperatingSystem
  isLoading: boolean
  version?: string
}

export const useOS = (): UseOSResult => {
  const [result, setResult] = useState<UseOSResult>({
    os: OperatingSystem.Unknown,
    isLoading: true,
  })

  useEffect(() => {
    if (!canUseDOM) {
      return
    }

    const parser = new UAParser()
    const os = parser.getOS()

    const osNameMap: Record<string, OperatingSystem> = {
      windows: OperatingSystem.Windows,
      'windows phone': OperatingSystem.Windows,
      'windows mobile': OperatingSystem.Windows,
      'mac os': OperatingSystem.Mac,
      macos: OperatingSystem.Mac,
      ios: OperatingSystem.iOS,
      android: OperatingSystem.Android,
      linux: OperatingSystem.Linux,
      ubuntu: OperatingSystem.Linux,
      debian: OperatingSystem.Linux,
      fedora: OperatingSystem.Linux,
      'red hat': OperatingSystem.Linux,
      suse: OperatingSystem.Linux,
    }

    const osName = os.name?.toLowerCase() || ''
    const detectedOS = Object.entries(osNameMap).reduce((result, [key, value]) => {
      return osName.includes(key) ? value : result
    }, OperatingSystem.Unknown)

    setResult({
      os: detectedOS,
      version: os.version || undefined,
      isLoading: false,
    })
  }, [])

  return result
}

export const isWindows = (os: OperatingSystem): boolean => os === OperatingSystem.Windows
export const isMac = (os: OperatingSystem): boolean => os === OperatingSystem.Mac
export const isLinux = (os: OperatingSystem): boolean => os === OperatingSystem.Linux
export const isIOS = (os: OperatingSystem): boolean => os === OperatingSystem.iOS
export const isAndroid = (os: OperatingSystem): boolean => os === OperatingSystem.Android
export const isMobile = (os: OperatingSystem): boolean => isIOS(os) || isAndroid(os)
export const isDesktop = (os: OperatingSystem): boolean => isWindows(os) || isMac(os) || isLinux(os)
