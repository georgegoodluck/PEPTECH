import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoChevronDown } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Handle scroll to hide top bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    // Inside Navbar.js -> navItems array
    {
      name: 'Our Department',
      path: '/our-department',
      hasDropdown: true,
      submenu: [
        { name: 'Our History', path: '/our-department#history' },
        { name: 'Past Leadership', path: '/our-department#leadership' },
        { name: 'Our Mission', path: '/our-department#mission' },
        { name: "HOD's Roll of Honour", path: '/our-department#honour' },
        { name: 'Departmental History Museum Gallery', path: '/our-department#gallery' },
      ]
    },
    {
      name: 'Academics',
      path: '/academics',
      hasDropdown: true,
      submenu: [
        {
          name: 'Physics',
          path: '/academics/physics',
          nested: [
            {
              name: 'Undergraduate',
              items: [
                { name: 'About & Prospects', path: '/academics/physics/undergraduate/about' },
                { name: 'Admission Requirements', path: '/academics/physics/undergraduate/admission' },
                { name: 'Course Descriptions', path: '/academics/physics/undergraduate/courses' },
              ]
            },
            {
              name: 'Postgraduate',
              items: [
                { name: 'About', path: '/academics/physics/postgraduate/about' },
                { name: 'Admission Requirements', path: '/academics/physics/postgraduate/admission' },
                { name: 'Course Descriptions', path: '/academics/physics/postgraduate/courses' },
              ]
            }
          ]
        },
        { name: 'Engineering Physics', path: '/academics/engineering-physics' },
        { name: 'Science Laboratory Technology', path: '/academics/slt' },
      ]
    },
    {
      name: 'Research',
      path: '/research',
      hasDropdown: true,
      submenu: [
        { name: 'Publications', path: '/publications' },
      ]
    },
    // {
    //   name: 'Spotlight',
    //   path: '/spotlight',
    //   hasDropdown: false
    // },
  ];

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top Bar - External Links Only (Disappears on scroll) */}
        <div
          className={`bg-white border-b-2 border-amber-400 shadow-sm transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20'
            }`}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 flex-wrap">
              <a
                href="https://pepesa.oauife.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-950 to-blue-800 text-white text-xs sm:text-sm font-semibold rounded-lg hover:from-blue-900 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap border border-amber-400/30"
              >
                PEPESA Portal
              </a>
              <a
                href="https://eportal.oauife.edu.ng/home.php"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-blue-950 text-xs sm:text-sm font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                School Portal
              </a>
              <a
                href="https://physics.oauife.edu.ng"
                className="px-3 sm:px-4 py-2 bg-white text-blue-950 text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap border-2 border-blue-950"
              >
                physics.oauife.edu.ng
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Sticky with Logo */}
        <nav className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-20">
              {/* Logo Section */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-lg sm:text-xl font-bold text-blue-950">P</span>
                </div> */}
                <img src="/images/peplogo.png" alt="" className='w-14 h-14' />
                <div className="hidden sm:block">
                  <h1 className="text-sm sm:text-base lg:text-lg font-bold text-white">
                    Department of Physics
                  </h1>
                  <p className="text-xs text-amber-300">Obafemi Awolowo University</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        className="flex items-center gap-1.5 px-4 xl:px-5 py-2.5 text-sm xl:text-base font-semibold text-white hover:text-amber-300 transition-all duration-300 rounded-lg hover:bg-white/10 group"
                      >
                        <span>{item.name}</span>
                        <IoChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300 text-amber-400" />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center gap-1.5 px-4 xl:px-5 py-2.5 text-sm xl:text-base font-semibold text-white hover:text-amber-300 transition-all duration-300 rounded-lg hover:bg-white/10"
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div className="absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border-t-4 border-amber-500 overflow-hidden">
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.name}>
                              {subItem.nested ? (
                                <div className="relative group/nested">
                                  <button
                                    className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-blue-950 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 border-l-4 border-transparent hover:border-amber-500"
                                  >
                                    {subItem.name}
                                    <IoChevronDown className="w-4 h-4 transform -rotate-90 text-amber-500" />
                                  </button>
                                  {/* Nested Submenu */}
                                  <div className="absolute left-full top-0 ml-1 w-80 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 border-t-4 border-blue-950 overflow-hidden">
                                    <div className="py-2">
                                      {subItem.nested.map((nestedCategory) => (
                                        <div key={nestedCategory.name} className="px-4 py-3 border-b border-gray-100 last:border-b-0">
                                          <div className="font-bold text-xs text-amber-600 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                            {nestedCategory.name}
                                          </div>
                                          <div className="space-y-1">
                                            {nestedCategory.items.map((nestedItem) => (
                                              <Link
                                                key={nestedItem.name}
                                                to={nestedItem.path}
                                                className="block px-3 py-2 text-sm text-blue-900 hover:bg-blue-50 hover:text-blue-950 rounded-lg transition-all duration-200 font-medium"
                                              >
                                                {nestedItem.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  to={subItem.path}
                                  className="block px-5 py-3 text-sm font-medium text-blue-950 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200 border-l-4 border-transparent hover:border-amber-500"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2.5 rounded-lg text-amber-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation - Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
          onClick={toggleMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 lg:top-20 left-0 right-0 bg-gradient-to-b from-blue-900 to-blue-950 shadow-2xl transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <div className="px-3 sm:px-4 py-4 space-y-2 overflow-y-auto max-h-[calc(100vh-5rem)]">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-amber-500/20 pb-2 last:border-b-0 last:pb-0">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <span>{item.name}</span>
                    <IoChevronDown
                      className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Mobile Dropdown */}
                {item.hasDropdown && (
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === item.name ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="pl-2 space-y-1.5 bg-blue-800/30 rounded-lg p-3 border border-amber-500/20">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.nested ? (
                            <div className="bg-blue-950/40 rounded-lg p-3 border border-amber-500/30">
                              <div className="px-3 py-2 text-sm font-bold text-amber-400 flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                {subItem.name}
                              </div>
                              {subItem.nested.map((nestedCategory) => (
                                <div key={nestedCategory.name} className="pl-3 mt-3 border-l-2 border-amber-500/40">
                                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 px-3">
                                    {nestedCategory.name}
                                  </div>
                                  <div className="space-y-1">
                                    {nestedCategory.items.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.path}
                                        className="block px-3 py-2.5 text-sm text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-200"
                                        onClick={toggleMenu}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2.5 text-sm font-medium text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-200"
                              onClick={toggleMenu}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
