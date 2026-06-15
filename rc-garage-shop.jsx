import { useState } from "react";
import { Battery, Timer, Ruler, X, ShoppingBag, Gauge as GaugeIcon } from "lucide-react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap');
.font-display { font-family: 'Rajdhani', sans-serif; }
.font-body { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }
.tread {
  background-image: repeating-linear-gradient(
    115deg,
    #FF6B35 0px, #FF6B35 10px,
    transparent 10px, transparent 24px
  );
}
`;

const CARS = [
  {
    id: "ridgeback",
    name: "Ridgeback X4",
    category: "Off-Road",
    scale: "1:10",
    topSpeed: 65,
    runtime: 25,
    battery: "7.4V 3000mAh",
    price: 189.99,
    blurb: "4WD chassis with long-travel suspension for broken ground.",
  },
  {
    id: "apex",
    name: "Apex Drift GT",
    category: "Drift",
    scale: "1:10",
    topSpeed: 55,
    runtime: 20,
    battery: "7.4V 2200mAh",
    price: 159.99,
    blurb: "Tuned for oversteer, with swappable drift tires.",
  },
  {
    id: "crusher",
    name: "Crusher MX",
    category: "Monster Truck",
    scale: "1:8",
    topSpeed: 45,
    runtime: 30,
    battery: "11.1V 5000mAh",
    price: 229.99,
    blurb: "Oversized tires and reinforced axles for backyard jumps.",
  },
  {
    id: "sandstorm",
    name: "Sandstorm Buggy",
    category: "Buggy",
    scale: "1:10",
    topSpeed: 70,
    runtime: 22,
    battery: "7.4V 3000mAh",
    price: 174.99,
    blurb: "Lightweight shell built for wide-open sprints.",
  },
  {
    id: "nightfall",
    name: "Nightfall Crawler",
    category: "Rock Crawler",
    scale: "1:12",
    topSpeed: 12,
    runtime: 60,
    battery: "7.4V 2000mAh",
    price: 139.99,
    blurb: "Low gearing and deep articulation for technical climbs.",
  },
  {
    id: "velocity",
    name: "Velocity Spec R",
    category: "Touring",
    scale: "1:10",
    topSpeed: 80,
    runtime: 18,
    battery: "7.4V 2200mAh",
    price: 249.99,
    blurb: "Belt-driven touring platform for tarmac and indoor tracks.",
  },
];

const CATEGORIES = ["All", "Off-Road", "Drift", "Monster Truck", "Buggy", "Rock Crawler", "Touring"];
const MAX_SPEED = 80;

function SpeedGauge({ value, max = MAX_SPEED, size = "lg" }) {
  const angle = -90 + (value / max) * 180;
  const rad = (angle * Math.PI) / 180;
  const cx = 60, cy = 60, r = 46;
  const nx = cx + r * Math.cos(rad);
  const ny = cy + r * Math.sin(rad);
  const dims = size === "lg" ? "w-40 h-24" : "w-24 h-16";

  return (
    <div className={`relative ${dims}`}>
      <svg viewBox="0 0 120 70" className="w-full h-full">
        <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#3A3F47" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M10 60 A50 50 0 0 1 110 60"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${(value / max) * 157} 157`}
        />
        {[0, 20, 40, 60, 80].map((t) => {
          const a = (-90 + (t / max) * 180) * (Math.PI / 180);
          const ix = cx + (r - 9) * Math.cos(a);
          const iy = cy + (r - 9) * Math.sin(a);
          return (
            <text key={t} x={ix} y={iy} fill="#6B7280" fontSize="7" textAnchor="middle" className="font-mono">
              {t}
            </text>
          );
        })}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#D4FF3F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3" fill="#D4FF3F" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <span className="font-mono text-sm text-[#F2F3F5] font-semibold">{value}</span>
        <span className="font-mono text-[10px] text-[#8B919A]"> km/h</span>
      </div>
    </div>
  );
}

function CarCard({ car, onAdd }) {
  return (
    <div className="bg-[#1F2228] border border-[#2C3038] rounded-lg p-5 flex flex-col gap-4 hover:border-[#FF6B35]/50 transition-colors">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#FF6B35]">{car.category}</p>
        <h3 className="font-display text-2xl font-semibold text-[#F2F3F5] leading-tight">{car.name}</h3>
        <p className="font-body text-sm text-[#8B919A] mt-1">{car.blurb}</p>
      </div>

      <div className="flex items-center justify-center bg-[#15171A] rounded-md py-3">
        <SpeedGauge value={car.topSpeed} />
      </div>

      <div className="grid grid-cols-3 gap-2 font-mono text-xs text-[#C9CDD3]">
        <div className="flex flex-col items-center gap-1 bg-[#15171A] rounded-md py-2">
          <Ruler size={14} className="text-[#8B919A]" />
          {car.scale}
        </div>
        <div className="flex flex-col items-center gap-1 bg-[#15171A] rounded-md py-2">
          <Timer size={14} className="text-[#8B919A]" />
          {car.runtime} min
        </div>
        <div className="flex flex-col items-center gap-1 bg-[#15171A] rounded-md py-2 text-center px-1">
          <Battery size={14} className="text-[#8B919A]" />
          {car.battery}
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <span className="font-display text-xl font-semibold text-[#F2F3F5]">${car.price.toFixed(2)}</span>
        <button
          onClick={() => onAdd(car)}
          className="font-body text-sm font-medium bg-[#FF6B35] text-[#15171A] px-4 py-2 rounded-md hover:bg-[#FF8255] transition-colors"
        >
          Add to garage
        </button>
      </div>
    </div>
  );
}

export default function RCGarageShop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [garage, setGarage] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = activeCategory === "All" ? CARS : CARS.filter((c) => c.category === activeCategory);

  const addToGarage = (car) => {
    setGarage((prev) => [...prev, car]);
    setDrawerOpen(true);
  };

  const removeFromGarage = (index) => {
    setGarage((prev) => prev.filter((_, i) => i !== index));
  };

  const total = garage.reduce((sum, c) => sum + c.price, 0);
  const fastest = CARS.reduce((a, b) => (b.topSpeed > a.topSpeed ? b : a));

  return (
    <div className="min-h-screen bg-[#15171A] font-body text-[#F2F3F5]">
      <style>{FONTS}</style>

      {/* Nav */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#2C3038]">
        <span className="font-display text-xl font-bold tracking-wide">
          RUSH<span className="text-[#FF6B35]">RC</span>
        </span>
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C9CDD3] hover:text-[#FF6B35] transition-colors"
        >
          <ShoppingBag size={16} />
          Garage ({garage.length})
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#D4FF3F] mb-3">
            RC Garage // Full Throttle Catalog
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-4">
            Built for the dirt.
            <br />
            Tuned for speed.
          </h1>
          <p className="font-body text-[#8B919A] max-w-md mb-6">
            Six platforms, six personalities — from crawlers that climb at a walking
            pace to touring cars that hit eighty. Every spec sheet below is real, so
            you know exactly what's going in the garage.
          </p>
          <a
            href="#catalog"
            className="inline-block font-body text-sm font-medium bg-[#FF6B35] text-[#15171A] px-5 py-3 rounded-md hover:bg-[#FF8255] transition-colors"
          >
            View the lineup
          </a>
        </div>

        <div className="bg-[#1F2228] border border-[#2C3038] rounded-lg p-8 flex flex-col items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#8B919A] mb-4">
            Fastest in stock — {fastest.name}
          </p>
          <SpeedGauge value={fastest.topSpeed} />
          <div className="flex items-center gap-2 mt-4 text-[#6B7280] font-mono text-xs">
            <GaugeIcon size={14} />
            0 – {MAX_SPEED} km/h scale, true to spec
          </div>
        </div>
      </section>

      <div className="h-2 tread" />

      {/* Filters */}
      <section id="catalog" className="px-6 md:px-12 pt-10 pb-4">
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-md border transition-colors ${
                activeCategory === cat
                  ? "bg-[#FF6B35] text-[#15171A] border-[#FF6B35]"
                  : "border-[#2C3038] text-[#C9CDD3] hover:border-[#FF6B35]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} onAdd={addToGarage} />
          ))}
        </div>
      </section>

      <div className="h-2 tread" />

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between gap-2 text-[#6B7280] font-mono text-xs">
        <span>RUSH RC — spec sheets you can trust, tracks you can't.</span>
        <span>Batteries and chargers sold separately.</span>
      </footer>

      {/* Garage drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-label="Garage">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDrawerOpen(false)} />
          <div className="relative w-full max-w-sm bg-[#1F2228] border-l border-[#2C3038] h-full p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-semibold">Your garage</h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-[#8B919A] hover:text-[#F2F3F5] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                aria-label="Close garage"
              >
                <X size={20} />
              </button>
            </div>

            {garage.length === 0 ? (
              <p className="font-body text-sm text-[#8B919A]">
                Nothing parked here yet. Add a car from the lineup to get started.
              </p>
            ) : (
              <div className="flex-1 overflow-y-auto flex flex-col gap-3">
                {garage.map((car, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#15171A] rounded-md px-3 py-2">
                    <div>
                      <p className="font-body text-sm font-medium">{car.name}</p>
                      <p className="font-mono text-xs text-[#8B919A]">${car.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromGarage(i)}
                      className="text-[#6B7280] hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                      aria-label={`Remove ${car.name}`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {garage.length > 0 && (
              <div className="border-t border-[#2C3038] pt-4 mt-4 flex items-center justify-between">
                <span className="font-body text-sm text-[#8B919A]">Total</span>
                <span className="font-display text-xl font-semibold">${total.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
