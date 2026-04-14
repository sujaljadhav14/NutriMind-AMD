import NearbySpotCard from "@/components/NearbySpotCard";

export default function NearbyPage() {
  const mockSpots = [
    {
      name: "The Green Alchemist",
      rating: 4.9,
      description: "Plant-based & Organic",
      tags: ["KETO", "GLUTEN FREE"],
      distance: "0.4 mi",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5TGKeig5AhAogEbGHOMElfqEPeiVrho8LzSYtziUlkBU1MhPRR5tpbe3F1f0GjhGW3OP5OLBsCKTKOijKS5PYd4rj7F6oAMDOovGPFcfFIYeK7TBuexcOnNazR544FBXxG0cd1XYqWeSv8y3u-KXF6O8Tzi6I3X6BaVtEXMCa2xYPg21MplviUcPGL0c0n0oTTl_Qp_RrzdbZ0fSG5GO5eNsxv25NYxRYexM0Kd0ZPe05Krh2BfuLL2ASDYp1WBmFthwVqTp7oHpE"
    },
    {
      name: "Marrow & Root",
      rating: 4.7,
      description: "Artisan Broths & Seasonal Bowls",
      tags: ["PALEO"],
      distance: "1.2 mi",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuPSD3dtlxHEiD_c0tHKXww-UdxmwQtwrLst9Cld1wxchPirfFy27csz5-AIdIWgoK4H7NgXlIfroZRTLNQeaempXvmmn24NkQMOyg941TGSEPg0ERkPhkhOuKytLxVa-YLAAQg3JvqFUzd-Gkd_v9TTEuvl----pRTDIvjpfyukHOL9CtEMZLcRhXK-KMU9V4T1DGauRIMf9BCQi--OPlDE8VUDXrwcOnh7UqnRDHZDu5D54gLgNKh8w6ja5tZ1jf7D93NZ55szWB"
    },
    {
      name: "Levantine Hearth",
      rating: 4.8,
      description: "Mediterranean Soul Food",
      tags: ["WHOLE30"],
      distance: "1.5 mi",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMI_0TUqSN9ecOiPwFK0Lw--wDN5vy7aYldu9h2jwXlK2W3WM48kLPtpS-Zw5t4CNen7Lelvdj83zDlkt2o-uh9mOWNZ3ytfUHnZIDnXTFF2JCRtQ3iAcMtX1A3BspZkewFaDOzCuNbcKJB0uHTQtrPiHpNosa9rV-DL-UZL98fVcc-8WCUG4HWA_tOJDws0Y4W787z3v_F1wj-WsjgCQEDjAyw-8_G2cYZeCZ9AC9f64NKigHUKw6iWiqa2leGHqGZHjfAqm6Ewdt"
    },
    {
      name: "Pulse & Press",
      rating: 4.5,
      description: "Cold-pressed & Superfoods",
      tags: ["VEGAN"],
      distance: "2.1 mi",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk5k0y-vsKRbpl-8JrrWEsIBgf_HxMsD8PAWWzdfkec5XDLTCoayOjCnqb51a7HDCCxpmjRGfp669iL1eYX89LEANEjMlRUcsNuBqRTw8-TOd-oAJ7K38t0f_cFo412kj25_Qig0aEPxkoV0qgX15j7YHvc2MJa4n6zU5ahapcAAs08nZfGKnqBZ5bRsfQLPJFTSY_WWk4TU31_8X06-9YwHsjbxL9qtE6_tteQvOPlBAVNIBy3h_Myld2wwulCv9ATSnV4xJf4FgO"
    },
    {
      name: "Solstice Market",
      rating: 4.9,
      description: "Farm-to-Table Grocery",
      tags: ["LOCAL"],
      distance: "3.4 mi",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE_ryCro28yCa2ck4EYJuz5vD6hAT-xMvAKSw5U_HXFPRMnLkx7cIca-Q7MHYQ8-ZWrttXfnny74J4f1vETDFyCpszOVmpNCSJbDDT_LleSNc6HqbDkJ98zEGhS0a-Tlc651ieL0ZCTJKBwRWxj0OdqxUDp8F6UBwboSv4uUbqv8peN1HKkOSX8mduGseomtDEtRdk4hMJyNWCwI8SlzdDuHEyZCiB0CclLpdJeWNUk4zWFWCqKp4fZ36cQ1Sz0nXlh1ZD8A2s97EY"
    }
  ];

  return (
    <div className="flex-grow flex flex-col min-h-[calc(100vh-80px)]">
      {/* Search Bar Section */}
      <section className="w-full bg-surface-container-low px-8 py-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
            </div>
            <input 
              className="w-full h-16 pl-16 pr-8 bg-surface-container-highest border-none rounded-2xl text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 font-medium transition-all" 
              placeholder="Search for organic cafes, keto-friendly spots, or local farm markets..." 
              type="text"
            />
            <div className="absolute inset-y-0 right-4 flex items-center gap-2">
              <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined" data-icon="tune">tune</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="flex-grow flex flex-col md:flex-row overflow-hidden max-w-[1440px] mx-auto w-full">
        {/* Left Column */}
        <div className="w-full md:w-[450px] lg:w-[520px] h-[calc(100vh-216px)] overflow-y-auto bg-surface px-8 py-8 flex flex-col gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold tracking-tight text-on-surface">Nearby Spots</h1>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary-container/30 px-3 py-1 rounded-full">{mockSpots.length} Locations</span>
          </div>

          {mockSpots.map((spot, i) => (
            <NearbySpotCard key={i} spot={spot} />
          ))}
        </div>

        {/* Right Column: Map Placeholder */}
        <div className="flex-grow h-[400px] md:h-[calc(100vh-216px)] bg-surface-container-high relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
              alt="Map view of San Francisco with markers"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKAHFc_2TbRb2g5sUFA9Sh3G4BW8ffNRQhVOJtKf72307uXYzWBLtZyUGIRJeNHx9ujLFCZ_zGVRJjKM8Q3zo33P8Canu5ClYQ7MsLRi_clR07EXk1tPIZnT8CTEfwnfCjlJ46E3bXkv9WxmHDw5okh6MsCy-oxipuTo6skU4qhV5198B_CQhIXJEetSd-oH_j7IwZ9I1hme6Fp08SQ0JipJaVICM1aS1__-rB2hJKWoBPIcrYMUmV5hbdVf9joHxhztTxVx8H7Igw" 
            />
            
            {/* Custom Map Markers mock */}
            <div className="absolute top-1/4 left-1/3">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white transform transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-on-surface text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  THE GREEN ALCHEMIST
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-white transform transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-on-surface text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  SOLSTICE MARKET
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
              <button className="w-12 h-12 bg-surface-container-lowest rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="w-12 h-12 bg-surface-container-lowest rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="w-12 h-12 bg-surface-container-lowest rounded-xl shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors mt-2">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
