import React from 'react';

const Spotlight = () => {
  const spotlightPeople = [
    {
      id: 1,
      name: "Prof. Felix Olise",
      achievement: "Breakthrough in Theoretical Quantum physics",
      description: "Led the team that achieved quantum supremacy with a 1000-qubit processor, opening new frontiers in computational science.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      category: "Quantum Physics"
    },
    {
      id: 2,
      name: "Prof. Owoade",
      achievement: "Thermodynamics pioneer", 
      description: "Groundbreaking research in thermodynamics, enhancing energy efficiency in industrial processes.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      category: "Medical Physics"
    },
    {
      id: 3,
      name: "Prof. Akinwumi",
      achievement: "Materials Science Innovator",
      description: "Pioneered new materials with unique properties for technological advancements.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      category: "Computational Physics"
    },
    {
      id: 4,
      name: "Mr. Ayomide Olabode",
      achievement: "Revolutionary in Astronomical Research",
      description: "Developed advanced techniques in observational astronomy, leading to the discovery of new celestial phenomena.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      category: "Applied Physics"
    },
    {
      id: 5,
      name: "Mr. Adigun Oreoluwa ",
      achievement: "Innovator in Energy Materials",
      description: "Revolutionized energy storage solutions with breakthrough battery technology.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Materials Science"
    },
    {
      id: 6,
      name: "Mr. George Okikiola", 
      achievement: "Material Science Pioneer",
      description: "Developed innovative materials for advanced engineering applications.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      category: "Astrophysics"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-16 lg:py-24 px-4">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0c1e3d] to-[#0f2847]">
        {/* Layered gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#FFC527]/15 via-[#FFC527]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFC527]/10 via-[#FFC527]/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0c1e3d]/80 via-[#FFC527]/5 to-[#0c1e3d]/80 rounded-full blur-3xl" />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFC527' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#FFC527 1px, transparent 1px), linear-gradient(90deg, #FFC527 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFC527]/90 to-[#ffb700]/90 backdrop-blur-xl rounded-full mb-8 shadow-2xl border-2 border-[#FFC527]/50 transform hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-[#0c1e3d] rounded-full animate-pulse" />
            <span className="text-sm font-black text-[#0c1e3d] tracking-widest uppercase">Excellence Recognized</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            In The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC527] via-[#ffd45a] to-[#FFC527] drop-shadow-2xl">Spotlight</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Celebrating extraordinary individuals whose remarkable achievements have made a lasting impact on the world of physics
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-10 gap-4">
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-[#FFC527]" />
            <div className="w-3 h-3 bg-[#FFC527] rounded-full shadow-lg shadow-[#FFC527]/50" />
            <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-[#FFC527]" />
          </div>
        </div>

        {/* Spotlight Grid - 2 columns on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {spotlightPeople.map((person, index) => (
            <div
              key={person.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-[#FFC527]/20 hover:border-[#FFC527]/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#FFC527]/20"
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-[#FFC527]/20 to-transparent rounded-bl-full" />
              
              <div className="p-4 lg:p-8">
                {/* Image */}
                <div className="relative mb-4 lg:mb-6">
                  <div className="w-full aspect-square rounded-xl lg:rounded-2xl overflow-hidden ring-2 lg:ring-4 ring-[#FFC527]/30 group-hover:ring-[#FFC527]/60 transition-all duration-300">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Spotlight glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#FFC527]/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-full" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-block mb-2 lg:mb-3">
                    <span className="text-[10px] lg:text-xs font-bold text-[#FFC527] bg-[#FFC527]/10 px-2 lg:px-3 py-1 rounded-full border border-[#FFC527]/30">
                      {person.category}
                    </span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base lg:text-2xl font-black text-white mb-1 lg:mb-2 group-hover:text-[#FFC527] transition-colors duration-300 line-clamp-2">
                    {person.name}
                  </h3>
                  
                  <h4 className="text-xs sm:text-sm lg:text-lg font-bold text-[#FFC527]/90 mb-2 lg:mb-3 line-clamp-2">
                    {person.achievement}
                  </h4>
                  
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-300 leading-relaxed line-clamp-3 lg:line-clamp-4">
                    {person.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 lg:mt-6 h-0.5 lg:h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FFC527] to-transparent transition-all duration-700 rounded-full" />
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, transparent 20%, rgba(255,197,39,0.2) 21%, rgba(255,197,39,0.2) 30%, transparent 31%)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Commented out as in original */}
        {/* <div className="text-center mt-16 lg:mt-24 bg-gradient-to-r from-[#0c1e3d]/50 via-[#1a2f4d]/50 to-[#0c1e3d]/50 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-8 lg:p-16 border-2 border-[#FFC527]/20">
          <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 lg:mb-6">
            Know Someone Extraordinary?
          </h3>
          <p className="text-base lg:text-xl text-gray-300 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Nominate an individual whose achievements deserve recognition and inspire others to excellence
          </p>
          <button className="px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-[#FFC527] to-[#ffb700] text-[#0c1e3d] font-black text-base lg:text-xl rounded-full hover:from-[#ffb700] hover:to-[#FFC527] shadow-2xl shadow-[#FFC527]/30 hover:shadow-[0_0_40px_rgba(255,197,39,0.5)] transform hover:scale-105 transition-all duration-500">
            Submit Nomination
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Spotlight;