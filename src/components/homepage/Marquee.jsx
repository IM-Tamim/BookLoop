"use client";

const marqueeItems = [
  "📚 New Arrivals: The Alchemist",
  "⭐ Special Discount on Memberships",
  "🆕 Just Added: Clean Code by Robert C. Martin",
  "🔥 Trending: A Brief History of Time",
  "🎉 Free Borrowing for New Members",
  "📖 New Arrivals: 1984 by George Orwell",
  "💡 Featured: Introduction to Algorithms",
  "🌟 Special Offer: Unlimited Borrows This Month",
  "📚 New Arrivals: The Origin of Species",
  "✨ Explore 1,200+ Titles Today",
];

export default function Marquee() {
  return (
    <div className="bg-[#e2c97e] text-[#0B1120] py-2.5 overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#e2c97e] to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#e2c97e] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {/* First copy */}
        {marqueeItems.map((item, i) => (
          <span
            key={`a-${i}`}
            className="inline-flex items-center gap-2 mx-8 text-sm font-semibold tracking-wide"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {item}
            <span className="text-[#0B1120] opacity-40 font-bold">·</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeItems.map((item, i) => (
          <span
            key={`b-${i}`}
            className="inline-flex items-center gap-2 mx-8 text-sm font-semibold tracking-wide"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {item}
            <span className="text-[#0B1120] opacity-40 font-bold">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}