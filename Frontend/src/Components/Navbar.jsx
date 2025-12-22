import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoChevronDown } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navItems = [
    {
      name: 'Home',
      path: '/',
      hasDropdown: false
    },
    {
      name: 'Our Department',
      path: '/our-department',
      hasDropdown: true,
      submenu: [
        { name: 'Our History', path: '/our-department/history' },
        { name: 'Past Leadership', path: '/our-department/leadership' },
        { name: 'Our Mission', path: '/our-department/mission' },
        { name: "HOD's Roll of Honour", path: '/our-department/hod-honour' },
        { name: 'Departmental History Museum Gallery', path: '/our-department/museum' },
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
        { name: 'Publications', path: '/research/publications' },
      ]
    },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar with Quick Links */}
      <div className="bg-[#191970] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <div className="flex items-center space-x-1 sm:space-x-3">
              <a 
                href="https://pepsa.oauife.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-[#FFD700] transition-colors duration-200"
              >
                <span>PEPSA Website</span>
                <FiExternalLink className="w-3 h-3" />
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="https://studentportal.oauife.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-[#FFD700] transition-colors duration-200"
              >
                <span>OAU Student Portal</span>
                <FiExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="hidden sm:block text-[#FFD700] font-semibold">
              physics.oauife.edu.ng
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar with Logo and Menu */}
      <div className="bg-white shadow-lg border-b-2 border-[#FFD700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FDB931] flex items-center justify-center shadow-lg ring-2 ring-[#191970]">
                <span className="text-[#191970] font-bold text-xl sm:text-2xl">P</span>
              </div>
              {/* Logo Text */}
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#191970]">
                  OAU Physics
                </div>
                <div className="text-[#FFD700] text-xs sm:text-sm font-semibold">
                  Department of Physics
                </div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex lg:space-x-1 items-center">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.path}
                    className="flex items-center space-x-1 text-[#191970] hover:text-[#FFD700] hover:bg-[#191970]/5 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <IoChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Desktop Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-lg border-t-4 border-[#FFD700] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.nested ? (
                              <div className="relative group/nested">
                                <a
                                  href={subItem.path}
                                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#191970] hover:bg-gradient-to-r hover:from-[#191970] hover:to-[#1e1e7a] hover:text-white transition-all duration-200"
                                >
                                  <span>{subItem.name}</span>
                                  <IoChevronDown className="w-4 h-4 transform -rotate-90 text-[#FFD700]" />
                                </a>
                                {/* Nested Submenu */}
                                <div className="absolute left-full top-0 w-72 bg-white shadow-2xl rounded-lg border-l-4 border-[#FFD700] opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 ml-1">
                                  <div className="py-2">
                                    {subItem.nested.map((nestedCategory) => (
                                      <div key={nestedCategory.name} className="px-4 py-2 border-b border-gray-100 last:border-b-0">
                                        <div className="font-bold text-xs text-[#FFD700] uppercase mb-2 tracking-wider">
                                          {nestedCategory.name}
                                        </div>
                                        {nestedCategory.items.map((nestedItem) => (
                                          <a
                                            key={nestedItem.name}
                                            href={nestedItem.path}
                                            className="block px-3 py-2 text-sm text-[#191970] hover:bg-[#FFD700] hover:text-[#191970] rounded-md transition-all duration-200 font-medium"
                                          >
                                            {nestedItem.name}
                                          </a>
                                        ))}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <a
                                href={subItem.path}
                                className="block px-4 py-3 text-sm font-medium text-[#191970] hover:bg-gradient-to-r hover:from-[#191970] hover:to-[#1e1e7a] hover:text-white transition-all duration-200"
                              >
                                {subItem.name}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - Right Side */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-lg text-[#191970] hover:text-white hover:bg-[#191970] transition-all duration-200 border-2 border-[#191970] hover:border-[#FFD700]"
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl border-t-2 border-[#FFD700]">
          <div className="px-4 pt-4 pb-4 space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200 pb-2 last:border-b-0">
                <button
                  onClick={() => {
                    if (!item.hasDropdown) {
                      window.location.href = item.path;
                    } else {
                      toggleDropdown(item.name);
                    }
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-[#191970] hover:text-white hover:bg-gradient-to-r hover:from-[#191970] hover:to-[#1e1e7a] rounded-lg transition-all duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <IoChevronDown
                      className={`w-5 h-5 text-[#FFD700] transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="mt-2 space-y-1 bg-gray-50 rounded-lg p-3 border-l-4 border-[#FFD700]">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name}>
                        {subItem.nested ? (
                          <div className="mb-3">
                            <div className="px-3 py-2 text-sm font-bold text-white bg-[#191970] rounded-md mb-2">
                              {subItem.name}
                            </div>
                            {subItem.nested.map((nestedCategory) => (
                              <div key={nestedCategory.name} className="pl-3 mt-2 mb-3">
                                <div className="text-xs font-bold text-[#FFD700] uppercase mb-2 px-2 tracking-wider">
                                  {nestedCategory.name}
                                </div>
                                {nestedCategory.items.map((nestedItem) => (
                                  <a
                                    key={nestedItem.name}
                                    href={nestedItem.path}
                                    className="block px-4 py-2.5 text-sm text-[#191970] hover:text-white hover:bg-[#191970] rounded-md transition-all duration-200 font-medium mb-1"
                                  >
                                    {nestedItem.name}
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <a
                            href={subItem.path}
                            className="block px-4 py-2.5 text-sm font-medium text-[#191970] hover:text-white hover:bg-gradient-to-r hover:from-[#191970] hover:to-[#1e1e7a] rounded-lg transition-all duration-200"
                          >
                            {subItem.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Quick Links */}
            <div className="pt-4 mt-4 border-t-2 border-[#FFD700] space-y-2">
              <a 
                href="https://pepsa.oauife.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#191970] bg-[#FFD700]/20 hover:bg-[#FFD700] rounded-lg transition-all duration-200"
              >
                <span>PEPSA Website</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://studentportal.oauife.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#191970] bg-[#FFD700]/20 hover:bg-[#FFD700] rounded-lg transition-all duration-200"
              >
                <span>OAU Student Portal</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;