'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'

type Country = 'ch' | 'de'

export default function Header() {
  // Mobile Dropdown (Unterpunkte)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Desktop Dropdown (Über uns)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null)

  // Country / Language
  const [country, setCountry] = useState<Country>('ch')
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  // initial: Land aus URL ableiten (/ch/... oder /de/...)
  useEffect(() => {
    if (pathname?.startsWith('/de')) {
      setCountry('de')
    } else if (pathname?.startsWith('/ch')) {
      setCountry('ch')
    }
  }, [pathname])

  const isCH = country === 'ch'

  const flagSrc = isCH ? '/flags/ch.svg' : '/flags/de.svg'

  const flagCH = '/flags/ch.svg'
  const flagDE = '/flags/de.svg'

  // Menüeinträge – teilweise abhängig vom Land
  const menuItems = [
    {
      label: 'Über uns',
      href: isCH ? '/ch/about' : '/de/about',
      children: [
        { label: 'Mission', href: isCH ? '/ch/about#mission' : '/de/about#mission' },
        { label: 'Philosophie', href: isCH ? '/ch/about#philosophie' : '/de/about#philosophie' },
        { label: 'Vorstand', href: isCH ? '/ch/about#vorstand' : '/de/about#vorstand' },
        {
          label: isCH ? 'Statuten' : 'Satzung',
          href: isCH ? '/ch/about#statuten' : '/de/about#satzung',
        },
      ],
    },
    {
      label: 'Mitgliedschaft',
      href: isCH ? '/ch/mitgliedschaft' : '/de/mitgliedschaft',
    },
    {
      label: 'Hilfsprojekte',
      href: '/projekte', // gemeinsam
    },
    {
      label: 'Aktivitäten',
      href: '/aktivitaeten', // gemeinsam
    },
    {
      label: 'News',
      href: '/news', // gemeinsam
    },
  ]

  // Aktiver Menüpunk (ohne Hash vergleichen)
  const isActive = (href: string) => {
    if (!pathname) return false
    const cleanHref = href.split('#')[0]
    const cleanPath = pathname.split('#')[0]
    return cleanPath === cleanHref
  }

  // Beim Länderwechsel: URL anpassen, falls /ch oder /de im Pfad
  const handleCountryChange = (nextCountry: Country) => {
    if (nextCountry === country) return

    setCountry(nextCountry)
    setCountryDropdownOpen(false)

    if (!pathname) return

    // Wenn URL mit /ch oder /de beginnt, tauschen
    if (/^\/(ch|de)\b/.test(pathname)) {
      const newPath = pathname.replace(/^\/(ch|de)/, `/${nextCountry}`)
      router.push(newPath)
    } else {
      // gemeinsame Seiten (z.B. /news) bleiben gleich, nur State ändert sich
      router.push(pathname)
    }
  }

  const currentCountryLabel = isCH ? 'Bärenherz Schweiz' : 'Bärenherz Deutschland'
  const currentCountryFlag = isCH ? '🇨🇭' : '🇩🇪'

  return (
    <>
      {/* Sticky Header */}
      <header className="bg-accentGray shadow fixed top-0 left-0 right-0 z-50">
        <div className="container-custom py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href={`/${country}`} className="flex items-center">
            <Image
              src="/logo/logo_baerenherz.png"
              alt="Bärenherz Logo"
              width={300}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Navigation – Mitte */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-10 text-brandGold text-lg font-semibold">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative list-none flex items-center"
                  onMouseEnter={() => item.children && setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => item.children && setOpenDesktopDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`
                        flex items-center 
                        ${isActive(item.href) ? 'text-actionRed' : 'text-brandGold'} 
                        hover:text-actionRed
                      `}
                    >
                      {item.label}
                      {/* Pfeil nur bei Items mit Children UND nicht bei "Über uns" */}
                      {item.children && item.label !== 'Über uns' && (
                        <span className="ml-1 transform transition-transform duration-200">
                          <FaChevronDown className="text-sm" />
                        </span>
                      )}
                    </Link>
                  ) : (
                    <span className="flex items-center cursor-default">
                      {item.label}
                    </span>
                  )}

                  {/* Dropdown für Desktop */}
                  {item.children && openDesktopDropdown === item.label && (
                    <ul className="absolute left-0 top-full w-52 bg-white border border-gray-200 rounded shadow-lg z-50">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-brandGold hover:bg-gray-100 hover:text-actionRed whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </nav>
          </div>

          {/* Desktop: Country Dropdown + Spenden – rechts */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Länder-Dropdown: "Du befindest dich auf:" */}
            <div className="text-sm text-brandGold">
              <span className="block mb-1">Du befindest dich auf:</span>

              <div
                className="relative inline-block"
                onMouseEnter={() => setCountryDropdownOpen(true)}
                onMouseLeave={() => setCountryDropdownOpen(false)}
              >
                {/* Button */}
                <button
                  className="bg-white px-3 py-1 flex items-center gap-2 hover:text-actionRed cursor-pointer"
                >
                  <Image
                    src={isCH ? '/flags/ch.svg' : '/flags/de.svg'}
                    alt={isCH ? 'Schweiz Flagge' : 'Deutschland Flagge'}
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                  <span>{currentCountryLabel}</span>
                </button>

                {/* Dropdown */}
                {countryDropdownOpen && (
                  <div className="absolute left-0 top-full w-56 bg-white border border-gray-200 rounded shadow-lg z-50">
                    
                    {/* Wenn DE aktiv ist → CH anzeigen */}
                    {!isCH && (
                      <button
                        onClick={() => handleCountryChange('ch')}
                        className="w-full text-left px-4 py-2 text-sm hover:text-actionRed cursor-pointer flex items-center gap-2"
                      >
                        <Image
                          src="/flags/ch.svg"
                          alt="Schweiz Flagge"
                          width={20}
                          height={20}
                        />
                        <span>Bärenherz Schweiz</span>
                      </button>
                    )}

                    {/* Wenn CH aktiv ist → DE anzeigen */}
                    {isCH && (
                      <button
                        onClick={() => handleCountryChange('de')}
                        className="w-full text-left px-4 py-2 text-sm hover:text-actionRed cursor-pointer flex items-center gap-2"
                      >
                        <Image
                          src="/flags/de.svg"
                          alt="Deutschland Flagge"
                          width={20}
                          height={20}
                        />
                        <span>Bärenherz Deutschland</span>
                      </button>
                    )}

                  </div>
                )}
              </div>
            </div>


            {/* Jetzt spenden Button */}
            <Link
              href="/spenden"
              className="bg-accentBlue text-white px-8 py-2 hover:bg-actionRed transition font-semibold whitespace-nowrap"
            >
              Jetzt spenden!
            </Link>
          </div>
          
          {/* Mobile Burger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col">
              {/* Länder-Dropdown / Auswahl mobil */}
              <li className="border-b px-4 py-3">
                <p className="text-xs text-gray-600 mb-1">Du befindest dich auf:</p>
                <div className="relative">
                  <button
                    onClick={() => setCountryDropdownOpen((prev) => !prev)}
                    className="w-full border border-brandGold bg-white px-3 py-2 rounded-md flex items-center justify-between text-sm text-brandGold"
                  >
                    <span>{currentCountryLabel}</span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {countryDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50">
                      <button
                        onClick={() => {
                          handleCountryChange('ch')
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          isCH ? 'font-semibold' : ''
                        }`}
                      >
                        Bärenherz Schweiz
                      </button>
                      <button
                        onClick={() => {
                          handleCountryChange('de')
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          !isCH ? 'font-semibold' : ''
                        }`}
                      >
                        Bärenherz Deutschland
                      </button>
                    </div>
                  )}
                </div>
              </li>

              {menuItems.map((item) => (
                <li key={item.label} className="border-b">
                  <div className="flex justify-between items-center px-4 py-3">
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                      className="text-brandGold hover:underline font-semibold"
                    >
                      {item.label}
                    </Link>
                    
                    {item.children && (
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className="text-sm text-gray-500 flex items-center"
                      >
                        {openDropdown === item.label
                          ? <FaChevronUp className="ml-1" />
                          : <FaChevronDown className="ml-1" />}
                      </button>
                    )}
                  </div>

                  {/* Dropdown mobil */}
                  {item.children && openDropdown === item.label && (
                    <ul className="bg-gray-50">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setOpenDropdown(null)
                            }}
                            className="block px-6 py-2 text-sm text-brandGold hover:bg-gray-100"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Mobile Spenden Button */}
              <li className="border-b">
                <Link
                  href="/spenden"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setOpenDropdown(null)
                  }}
                  className="block text-center bg-blue-900 text-white py-3 font-semibold hover:bg-blue-800 transition"
                >
                  Jetzt spenden!
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Abstand unter dem Header für Inhalt */}
      <div className="h-25"></div>
    </>
  )
}
