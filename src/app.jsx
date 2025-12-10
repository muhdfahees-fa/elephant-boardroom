import React, { useState } from 'react';
import { Users, Briefcase, Coffee, Trophy, TrendingUp, Sparkles } from 'lucide-react';

export default function ElephantBoardroom() {
  const [clicked, setClicked] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 text-center transform transition-all duration-700 hover:shadow-purple-500/50 border border-purple-200/50">
          {/* Sparkle Effect */}
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          </div>
          
          {/* Elephant Emoji with Glow */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="text-9xl relative animate-bounce" style={{ animationDuration: '3s' }}>
              🐘
            </div>
          </div>
          
          {/* Main Message with Gradient */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello from Elephant Board Room
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Where big ideas and big memories meet
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-500 italic">Premium Executive Experience</span>
            <Trophy className="w-5 h-5 text-yellow-500" />
          </div>
          
          {/* Boardroom Features with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div 
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:from-purple-100 hover:to-pink-100 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 border-2 border-transparent hover:border-purple-300 shadow-lg hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-300 rounded-full -mr-10 -mt-10 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Users className={`w-16 h-16 mx-auto mb-4 transition-all duration-500 ${hoveredCard === 1 ? 'text-purple-600 scale-110 rotate-12' : 'text-purple-500'}`} />
              <h3 className="font-bold text-xl text-gray-800 mb-3">Executive Team</h3>
              <p className="text-gray-600">Never forget a meeting</p>
              <div className="mt-4 flex justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
            
            <div 
              className="group relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:from-indigo-100 hover:to-blue-100 transition-all duration-500 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-indigo-300 shadow-lg hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-300 rounded-full -mr-10 -mt-10 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Briefcase className={`w-16 h-16 mx-auto mb-4 transition-all duration-500 ${hoveredCard === 2 ? 'text-indigo-600 scale-110 rotate-12' : 'text-indigo-500'}`} />
              <h3 className="font-bold text-xl text-gray-800 mb-3">Big Decisions</h3>
              <p className="text-gray-600">Thoughtful & strategic</p>
              <div className="mt-4 flex justify-center">
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            
            <div 
              className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:from-pink-100 hover:to-rose-100 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:rotate-1 border-2 border-transparent hover:border-pink-300 shadow-lg hover:shadow-2xl"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-300 rounded-full -mr-10 -mt-10 opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Coffee className={`w-16 h-16 mx-auto mb-4 transition-all duration-500 ${hoveredCard === 3 ? 'text-pink-600 scale-110 rotate-12' : 'text-pink-500'}`} />
              <h3 className="font-bold text-xl text-gray-800 mb-3">Networking</h3>
              <p className="text-gray-600">Strong connections</p>
              <div className="mt-4 flex justify-center">
                <Sparkles className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </div>
          
          {/* Interactive Button with Enhanced Design */}
          <button
            onClick={() => setClicked(!clicked)}
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-bold py-5 px-12 rounded-full text-xl transition-all transform hover:scale-110 active:scale-95 shadow-2xl hover:shadow-purple-500/50 border-4 border-white/30"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              {clicked ? (
                <>
                  🎉 Welcome to the Boardroom!
                  <Sparkles className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  👔 Enter Boardroom
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all"></div>
          </button>
          
          {clicked && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300 animate-pulse shadow-lg">
              <p className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                🎉 Welcome to the Boardroom! 
                <Trophy className="w-6 h-6 text-yellow-500" />
              </p>
              <p className="text-gray-700 font-medium">🥜 Premium peanuts provided at every meeting</p>
              <p className="text-sm text-gray-600 mt-2">☕ Complimentary refreshments • 🎯 Strategic planning sessions</p>
            </div>
          )}
        </div>
        
        {/* Footer with Enhanced Design */}
        <div className="text-center mt-10">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <p className="text-white text-sm font-medium flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-300" />
              Built with React • Powered by Node.js • Premium Experience
              <Sparkles className="w-4 h-4 text-pink-300" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
