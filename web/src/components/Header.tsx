import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      label: 'Bärenherz Schweiz',
      href: '/ch/about',
      children: [
        { label: 'Mission', href: '/ch/about#mission' },
        { label: 'Philosophie', href: '/ch/about#philosophie' },
        { label: 'Vorstand', href: '/ch/about#vorstand' },
        { label: 'Statuten', href: '/ch/about#statuten' }
      ],
    },
    {
      label: 'Bärenherz Deutschland',
      href: '/de/about',
      children: [
        { label: 'Mission', href: '/de/about#mission' },
        { label: 'Philosophie', href: '/de/about#philosophie' },
        { label: 'Vorstand', href: '/de/about#vorstand' },
        { label: 'Satzung', href: '/de/about#satzung' }
      ],
    },
    {
      label: 'Mitgliedschaft',
      children: [
        { label: 'Mitgliedschaft Schweiz', href: '/ch/mitgliedschaft' },
        { label: 'Mitgliedschaft Deutschland', href: '/de/mitgliedschaft' }
      ]
    },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Aktivitäten', href: '/aktivitaeten' },
    { label: 'News', href: '/news' },
  ]

  return (
    <>
      {/* Sticky Header */}
      <header className="bg-accentGray shadow fixed top-0 left-0 right-0 z-50">
        <div className="container-custom py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo_baerenherz.png"
              alt="Bärenherz Logo"
              width={300}
              height={150}
              priority
            />
          </Link>

          {/* Desktop Navigation + Spenden Button */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6 text-brandGold text-lg font-semibold">
              {menuItems.map((item) => (
                <li key={item.label} className="relative group list-none flex items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center hover:underline text-brandGold"
                    >
                      {item.label}
                      {item.children && (
                        <span className="ml-1 transform transition-transform duration-200 group-hover:rotate-180">
                          <FaChevronDown className="text-sm" />
                        </span>
                      )}
                    </Link>
                  ) : (
                    <span className="flex items-center cursor-default">
                      {item.label}
                      {item.children && (
                        <span className="ml-1 transform transition-transform duration-200 group-hover:rotate-180">
                          <FaChevronDown className="text-sm" />
                        </span>
                      )}
                    </span>
                  )}

                  {/* dropdown for desktop */}
                  {item.children && (
                    <ul className="absolute left-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-brandGold hover:bg-gray-100 whitespace-nowrap"
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
            {/* Jetzt spenden Button */}
            <Link
              href="/spenden"
              className="bg-accentBlue text-white px-8 py-2 hover:bg-blue-900 transition font-semibold whitespace-nowrap"
            >
              Jetzt spenden!
            </Link>

          </div>
          

          {/* mobile burger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.label} className="border-b">
                  <div className="flex justify-between items-center px-4 py-3">
                    {item.href ? (
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
                    ) : (
                      <span className="font-semibold">{item.label}</span>
                    )}
                    
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

                  {/* dropdown mobile */}
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
