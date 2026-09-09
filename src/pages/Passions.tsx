import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import Lightbox from '../components/Lightbox'
import FullGallery from '../components/FullGallery'
import NexusChampionship from '../assets/nexus_championship_landscape.jpg'
import HanoiTrainStreet from '../assets/vsco_hanoi_trainstreet.jpg'
import SoftballHuddle from '../assets/vsco_softball_huddle.jpg'
import HaLongBay from '../assets/vsco_halongbay.jpg'
import Pizza from '../assets/vsco_pizza.jpg'
import CneFellas from '../assets/vsco_cne_fellas.jpg'
import Snowboard from '../assets/vsco_snowboard.jpg'
import GoldenBridge from '../assets/vsco_goldenbridge.jpg'
import Aurora from '../assets/vsco_aurora.jpg'
import MarliesHockey from '../assets/vsco_marlies_hockey.jpg'
import NinhBinhBoat from '../assets/vsco_ninhbinh_boat.jpg'
import TanDinhChurch from '../assets/vsco_tandinh_church.jpg'
import HawaiiTiki from '../assets/vsco_hawaii_tiki.jpg'
import PeggysCove from '../assets/vsco_peggyscove.jpg'
import PeiCottage from '../assets/vsco_pei_cottage.jpg'
import NiagaraFalls from '../assets/vsco_niagarafalls.jpg'
import PickleballSquad from '../assets/pickleball_squad.jpg'
import PickleballAction from '../assets/pickleball_action.jpg'
import PickleballTrophy from '../assets/pickleball_trophy.jpg'
import Apples from '../assets/vsco_apples.jpg'
import Beach from '../assets/vsco_beach.jpg'
import HoiAnBoats from '../assets/vsco_hoian_boats.jpg'
import CoconutForest from '../assets/vsco_coconut_forest.jpg'
import Coldplay from '../assets/vsco_coldplay.jpg'
import Concert from '../assets/vsco_concert.jpg'
import Kauai from '../assets/vsco_kauai.jpg'
import Hearts from '../assets/vsco_hearts.jpg'
import KoaCanoe from '../assets/vsco_koa_canoe.jpg'
import Husky from '../assets/vsco_husky.jpg'
import AuroraStreet from '../assets/vsco_aurora_street.jpg'
import Millie from '../assets/vsco_millie.jpg'
import MoonlightBeach from '../assets/vsco_moonlight_beach.jpg'
import Palmtrees from '../assets/vsco_palmtrees.jpg'
import Shoreline from '../assets/vsco_shoreline.jpg'
import Skates from '../assets/vsco_skates.jpg'
import NinhBinhViewpoint from '../assets/vsco_ninhbinh_viewpoint.jpg'
import MauiSunset from '../assets/vsco_maui_sunset.jpg'
import TorontoRooftop from '../assets/vsco_toronto_rooftop.jpg'
import Acai from '../assets/vsco_acai.jpg'
import HockeyAction from '../assets/vsco_hockey.jpg'
import Bowls from '../assets/vsco_bowls.jpg'
import Cabo from '../assets/vsco_cabo.jpg'
import KoaSleep from '../assets/vsco_koa_sleep.jpg'
import Ultimate from '../assets/vsco_ultimate.jpeg'
import Elephants from '../assets/vsco_elephants.jpg'
import Safari from '../assets/vsco_safari.jpg'
import Parthenon from "../assets/vsco_parthenon.jpg"

const PICKLEBALL_REEL = [
  { tag: 'The Crew', src: PickleballSquad, alt: 'Pickleball with the crew', caption: 'Pickleball in Palmetto Springs, South Carolina.', focus: 'center' },
  { tag: 'Dod and I', src: PickleballAction, alt: 'Mid-rally with my Dod', caption: 'Playing outdoors with my Dad.', focus: 'center' },
  { tag: 'Champions', src: PickleballTrophy, alt: 'APA Ontario Circuit champions', caption: '4.0 Doubles champions with my dad at the APA Ontario Circuit.', focus: 'center' },
]

const VSCO_URL = 'https://vsco.co/ethaaaanm/gallery'

const ALL_PHOTOS = [
  { src: HanoiTrainStreet, alt: "Hanoi's Train Street, Vietnam", caption: "Hanoi's Train Street — the tracks run close enough to touch the shopfronts.", focus: 'center' },
  { src: SoftballHuddle, alt: 'Pre-game softball huddle', caption: "Pre-game huddle with the softball squad — that's my name on the back.", focus: 'center' },
  { src: HaLongBay, alt: 'Ha Long Bay, Vietnam', caption: 'Ha Long Bay, camera out before the coffee kicked in.', focus: 'center' },
  { src: Pizza, alt: 'Wood-fired pizza', caption: 'Two pizzas, zero regrets.', focus: 'top' },
  { src: CneFellas, alt: 'The CNE at night with friends', caption: 'The CNE at night, CN Tower doing its thing in the background.', focus: 'bottom' },
  { src: Snowboard, alt: 'Snowboarding with friends', caption: 'First run of the day, still figuring out the goggles.', focus: 'bottom' },
  { src: GoldenBridge, alt: 'The Golden Bridge, Da Nang, Vietnam', caption: 'The Golden Bridge outside Da Nang — yes, those are giant hands.', focus: 'center' },
  { src: Aurora, alt: 'Aurora over an Ontario street', caption: 'The night the aurora showed up over my neighbourhood, completely uninvited.', focus: 'top' },
  { src: MarliesHockey, alt: 'Marlies hockey game', caption: "Marlies game — hockey doesn't take an offseason around here.", focus: 'center' },
  { src: NinhBinhBoat, alt: 'Ninh Binh, Vietnam', caption: "Boat tour through Ninh Binh's limestone karsts — everyone in the obligatory life jacket.", focus: 'bottom' },
  { src: TanDinhChurch, alt: 'Tan Dinh Church, Ho Chi Minh City', caption: 'Tan Dinh Church, Ho Chi Minh City — hard to miss that shade of pink.', focus: 'center' },
  { src: HawaiiTiki, alt: 'Hawaii at sunset', caption: 'Torches lit, sun down, Hawaii doing its best postcard impression.', focus: 'top' },
  { src: PeggysCove, alt: "Peggy's Cove, Nova Scotia", caption: "Peggy's Cove — the lighthouse everyone photographs, for good reason.", focus: 'left' },
  { src: PeiCottage, alt: 'Prince Edward Island', caption: 'A cottage on PEI with a view that does not get old.', focus: 'center' },
  { src: NiagaraFalls, alt: 'Niagara Falls', caption: 'Niagara Falls, still impressive on the hundredth visit.', focus: 'center' },
  { src: Apples, alt: 'Apple picking', caption: 'Apple picking on the last good day of fall.', focus: 'bottom' },
  { src: Beach, alt: 'Paddleboards at dusk', caption: 'Paddleboards racked up at dusk.', focus: 'bottom' },
  { src: HoiAnBoats, alt: 'Hoi An, Vietnam', caption: 'Boats along the river in Hoi An.', focus: 'center' },
  { src: CoconutForest, alt: 'The coconut forest, Hoi An', caption: 'The coconut forest outside Hoi An, by basket boat.', focus: 'center' },
  { src: Coldplay, alt: 'Coldplay concert', caption: "Coldplay's stadium show, hearts and all.", focus: 'center' },
  { src: Concert, alt: 'A concert, mid-set', caption: 'Another night, another stage full of fog.', focus: 'center' },
  { src: Kauai, alt: 'Kalalau lookout, Kauai', caption: 'The Kalalau lookout, Kauai.', focus: 'center' },
  { src: Hearts, alt: 'Concert crowd', caption: 'The crowd, mid-singalong.', focus: 'center' },
  { src: KoaCanoe, alt: 'Koa in a canoe', caption: 'Koa, mid-adventure, unbothered by any of it.', focus: 'center' },
  { src: Husky, alt: 'A husky with a bone', caption: 'Home-turf portrait, mid-treat.', focus: 'center' },
  { src: AuroraStreet, alt: 'Aurora over a residential street', caption: 'The aurora, from the driveway this time.', focus: 'top' },
  { src: Millie, alt: 'Millie the dog', caption: 'Millie, guarding a very important cardboard box.', focus: 'center' },
  { src: MoonlightBeach, alt: 'Friends under a full moon', caption: 'Under a very bright moon, one very questionable idea.', focus: 'bottom' },
  { src: Palmtrees, alt: 'Palm trees at sunset', caption: 'Palm trees doing their sunset thing.', focus: 'center' },
  { src: Shoreline, alt: 'A beach at golden hour', caption: "Golden hour on a beach I can't place anymore.", focus: 'center' },
  { src: Skates, alt: 'Skates on a frozen pond', caption: 'A frozen pond, and a heart etched in the ice by someone.', focus: 'center' },
  { src: NinhBinhViewpoint, alt: 'Ninh Binh viewpoint, Vietnam', caption: "The view after climbing Ninh Binh's 500 steps.", focus: 'center' },
  { src: MauiSunset, alt: 'Sunset in Hawaii', caption: 'Watching the sun go down, Hawaii.', focus: 'center' },
  { src: TorontoRooftop, alt: 'A Toronto rooftop at sunset', caption: 'A Toronto rooftop, right at sunset.', focus: 'center' },
  { src: Acai, alt: 'Acai bowls', caption: "Three acai bowls, because I couldn't decide on toppings.", focus: 'center' },
  { src: HockeyAction, alt: 'Hockey, mid-shift', caption: 'Grinders hockey, mid-shift.', focus: 'center' },
  { src: Bowls, alt: 'Poke and salad bowls', caption: 'The kind of order that takes longer to photograph than eat.', focus: 'center' },
  { src: Cabo, alt: 'ATVing in Cabo, Mexico', caption: 'Cabo, kicking up more dust than the tour guide would like.', focus: 'bottom' },
  { src: KoaSleep, alt: 'Koa, backseat driver', caption: 'Koa, supervising the drive from the back seat.', focus: 'center' },
]

const HERO_REEL = [
  {
    tag: 'Photography',
    src: Aurora,
    alt: 'Aurora over an Ontario street',
    caption: 'The night the aurora borealis showed up over my neighbourhood.',
    focus: 'top 40%',
  },
  {
    tag: 'Friends & Family',
    src: CneFellas,
    alt: 'Friends at the CNE',
    caption: 'The fellas at the CNE',
    focus: 'center 60%',
  },
  {
    tag: 'Travel',
    src: Shoreline,
    alt: 'Shoreline, Hawaii',
    caption: 'Shoreline in Hawaii, my second home',
    focus: 'center',
  },
  {
    tag: 'Travel',
    src: GoldenBridge,
    alt: 'The Golden Bridge, Da Nang, Vietnam',
    caption: 'The Golden Bridge in Da Nang',
    focus: 'center 40%',
  },
  {
    tag: 'Photography',
    src: HanoiTrainStreet,
    alt: "Hanoi's Train Street, Vietnam",
    caption: "Hanoi's Train Street",
    focus: 'center 60%',
  },
  {
    tag: 'Travel',
    src: HoiAnBoats,
    alt: 'Boats in Hoi An, Vietnam',
    caption: 'The boats in Hoi An, Vietnam.',
    focus: 'center 40%',
  },
  {
    tag: 'Sports',
    src: Hearts,
    alt: 'Hearts from a Coldplay concert',
    caption: 'All my love, Coldplay',
    focus: 'center',
  },
  {
    tag: 'Travel',
    src: Elephants,
    alt: 'Elephants in Kenya',
    caption: 'Elephants in Kenya',
    focus: 'bottom',
  },
]

const SPORTS_GALLERY = [
  { src: SoftballHuddle, alt: 'Softball', caption: 'TCAC United', focus: 'center' },
  { src: HockeyAction, alt: 'Hockey', caption: 'Dod and I', focus: 'center' },
  { src: MarliesHockey, alt: 'Marlies game', caption: "Marlies championship game", focus: 'left' },
  { src: Snowboard, alt: 'Snowboarding', caption: 'Mont Tremblant', focus: 'bottom' },
  { src: Skates, alt: 'Ice skating', caption: 'Frozen pond in Kingston', focus: 'center' },
  { src: Ultimate, alt: 'Frisbee', caption: 'Ultimate Frisbee', focus: 'center 85%' },
]

const MISSIONS = [
  {
    label: 'Bolivia',
    desc: 'Helped build orphanages and delivered gifts and resources to kids who had gone without.',
  },
  {
    label: 'China',
    desc: "Taught English and ran a summer camp in remote villages — turns out a soccer ball doesn't need a translator.",
  },
  {
    label: 'Kenya',
    desc: 'Provided medical care to villages with limited access to it otherwise.',
  },
]

const TRAVEL_GALLERY = [
  { tag: 'Vietnam', src: NinhBinhBoat, alt: 'Ninh Binh, Vietnam', caption: 'Boat tour through Ninh Binh.', focus: 'center' },
  { tag: 'Kenya', src: Safari, alt: 'Nairobi, Kenya', caption: 'Safari in Nairobi, Kenya.', focus: 'center' },
  { tag: 'Hawaii', src: HawaiiTiki, alt: 'Hawaii at sunset', caption: 'Maui, Hawaii.', focus: 'top' },
  { tag: 'Nova Scotia', src: PeggysCove, alt: "Peggy's Cove, Nova Scotia", caption: "Peggy's Cove, Nova Scotia.", focus: 'left' },
  { tag: 'Mexico', src: Cabo, alt: 'ATVing in Cabo, Mexico', caption: 'ATVing in Cabo, Mexico.', focus: 'bottom' },
  { tag: 'Greece', src: Parthenon, alt: 'The Parthenon, Greece', caption: 'The Parthenon, Greece.', focus: 'left' },
]

const FOOD_GALLERY = [
  { src: Pizza, alt: 'Wood-fired pizza', caption: 'Piano Piano', focus: 'top' },
  { src: Acai, alt: 'Acai bowls', caption: "Maui Acai", focus: 'center' },
  { src: Bowls, alt: 'Poke and salad bowls', caption: 'Poke and Salad Bowls', focus: 'center' },
]

export default function Passions() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          ← Back home
        </Link>

        {/* Header */}
        <Reveal className="mt-7 mb-10">
          <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            03 — Passions
          </p>
          <h1 className="font-display mb-5 max-w-[800px] text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.02] tracking-tight text-ink">
            Follow along with my adventures!
          </h1>
          <p className="max-w-[600px] text-[1.05rem] leading-relaxed text-ink-muted">
            Sports, community, travel, and food are the things that make life worth living!
          </p>
        </Reveal>

        {/* VSCO reel */}
        <Reveal className="mb-28">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div className="tile-label mb-0">From My VSCO</div>
            <FullGallery label="View full gallery" photos={ALL_PHOTOS} vscoUrl={VSCO_URL} />
          </div>
          <Carousel slides={HERO_REEL} />
          <p className="mt-3 text-center text-xs text-ink-dim sm:text-left">
            Tap the <span className="font-semibold not-italic">i</span> on any photo for the story behind it.
          </p>
        </Reveal>

        {/* Sports */}
        <section className="mb-28">
          <Reveal className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
            <div className="lg:col-span-3">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Pickleball
              </p>
              <h2 className="font-display mb-4 text-[1.9rem] font-extrabold leading-tight tracking-tight text-ink sm:text-[2.3rem]">
                My most recent passion
              </h2>
              <p className="max-w-[520px] text-base leading-relaxed text-ink-muted">
                Pickleball has been my most recent obsession!!
                It's a game that combines the best parts of racket sports like tennis and ping pong into a sport that has an easy barrier to entry but hard to master.
                <br /> <br />
                I started playing pickleball after my parents got incredibly addicted and I've been hooked every since!
                It's a great way to stay active, meet new people, and have fun. I love the community aspect and the ability to play with all ages and skill levels.
                It's become such an important aspect of my life and community as I continue to make lasting memories with many of my friends and family through the sport!
              </p>
            </div>
            <div className="lg:col-span-2">
              <Carousel slides={PICKLEBALL_REEL} aspect="aspect-[4/5]" />
            </div>
          </Reveal>

          {/* The Nexus League — full-bleed standout */}
          <Reveal className="-mx-4 border-t border-line pt-10 sm:-mx-8">
            <div className="relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[520px]">
              <img
                src={NexusChampionship}
                alt="The Nexus League celebrating a championship"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: '35% 35%', transform: 'scaleX(-1)' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
              <div className="relative z-10 px-4 pb-12 sm:px-8 sm:pb-16">
                <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  The Nexus League · Est. 2024
                </p>
                <h2 className="font-display mb-5 max-w-[700px] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-ink">
                  Iron sharpens iron.
                </h2>
                <p className="max-w-[620px] text-base leading-relaxed text-ink-muted">
                  The Nexus League is a Christian multi-sport rec league at its core, and
                  softball, hockey, basketball, and frisbee are mostly just the excuse to get
                  everyone together every week. The standings matter a lot less than the
                  community and culture putting Proverbs 27:17 in practice, week after week. We
                  show up for each other as brothers, pushing one another to grow, on the
                  field and off it.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
              Sports
            </p>
            <h3 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Ways I stay active and connected with friends and family.
            </h3>
            <Lightbox aspect="aspect-square" images={SPORTS_GALLERY} />
          </Reveal>
        </section>

        {/* Missions */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Missions
          </p>
          <h2 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Time, effort, or money — whatever's needed.
          </h2>
          <p className="mb-8 max-w-[620px] text-base leading-relaxed text-ink-muted">
            Giving back to my community isn't optional in my book — it's just a matter
            of which currency fits the season. Three mission trips have been the
            clearest version of that pull to serve so far.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {MISSIONS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <div className="tile-label">{m.label}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Places */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Travel</p>
          <h2 className="font-display mb-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Places I've explored!
          </h2>
          <Lightbox aspect="aspect-square" images={TRAVEL_GALLERY} />
         </Reveal>

        {/* Food */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Food</p>
          <h2 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            I plan my days around meals. 
          </h2>
          <p className="mb-8 max-w-[560px] text-base leading-relaxed text-ink-muted">
            It would be an understatement to call me a foodie
          </p>
          <Lightbox aspect="aspect-square" images={FOOD_GALLERY} />
        </Reveal>

        {/* Closer */}
        <Reveal className="border-t border-line pt-14 pb-4 text-center">
          <h2 className="font-display mb-6 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            If any of this overlaps with your thing, come say hi.
          </h2>
          <Link to="/contact" className="btn-primary">
            Contact
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
