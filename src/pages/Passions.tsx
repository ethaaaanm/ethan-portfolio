import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import Lightbox from '../components/Lightbox'
import FullGallery from '../components/FullGallery'
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

const PICKLEBALL_REEL = [
  { tag: 'The Crew', src: PickleballSquad, alt: 'Pickleball with the crew', caption: 'Sunday pickleball with the crew — paddles required, skill optional.' },
  { tag: 'Tournament', src: PickleballAction, alt: 'Mid-rally at a tournament', caption: 'Mid-point at a weekend tournament, fully committed to the dive.' },
  { tag: 'Champions', src: PickleballTrophy, alt: 'APA Ontario Circuit champions', caption: 'Doubles champions with my dad — the APA Ontario Circuit.' },
]

const VSCO_URL = 'https://vsco.co/ethaaaanm/gallery'

// Every photo pulled from the VSCO gallery, shown in the "View full gallery" grid.
const ALL_PHOTOS = [
  { src: HanoiTrainStreet, alt: "Hanoi's Train Street, Vietnam", caption: "Hanoi's Train Street — the tracks run close enough to touch the shopfronts." },
  { src: SoftballHuddle, alt: 'Pre-game softball huddle', caption: "Pre-game huddle with the softball squad — that's my name on the back." },
  { src: HaLongBay, alt: 'Ha Long Bay, Vietnam', caption: 'Ha Long Bay, camera out before the coffee kicked in.' },
  { src: Pizza, alt: 'Wood-fired pizza', caption: 'Two pizzas, zero regrets.' },
  { src: CneFellas, alt: 'The CNE at night with friends', caption: 'The CNE at night, CN Tower doing its thing in the background.' },
  { src: Snowboard, alt: 'Snowboarding with friends', caption: 'First run of the day, still figuring out the goggles.' },
  { src: GoldenBridge, alt: 'The Golden Bridge, Da Nang, Vietnam', caption: 'The Golden Bridge outside Da Nang — yes, those are giant hands.' },
  { src: Aurora, alt: 'Aurora over an Ontario street', caption: 'The night the aurora showed up over my neighbourhood, completely uninvited.' },
  { src: MarliesHockey, alt: 'Marlies hockey game', caption: "Marlies game — hockey doesn't take an offseason around here." },
  { src: NinhBinhBoat, alt: 'Ninh Binh, Vietnam', caption: "Boat tour through Ninh Binh's limestone karsts — everyone in the obligatory life jacket." },
  { src: TanDinhChurch, alt: 'Tan Dinh Church, Ho Chi Minh City', caption: 'Tan Dinh Church, Ho Chi Minh City — hard to miss that shade of pink.' },
  { src: HawaiiTiki, alt: 'Hawaii at sunset', caption: 'Torches lit, sun down, Hawaii doing its best postcard impression.' },
  { src: PeggysCove, alt: "Peggy's Cove, Nova Scotia", caption: "Peggy's Cove — the lighthouse everyone photographs, for good reason." },
  { src: PeiCottage, alt: 'Prince Edward Island', caption: 'A cottage on PEI with a view that does not get old.' },
  { src: NiagaraFalls, alt: 'Niagara Falls', caption: 'Niagara Falls, still impressive on the hundredth visit.' },
  { src: Apples, alt: 'Apple picking', caption: 'Apple picking on the last good day of fall.' },
  { src: Beach, alt: 'Paddleboards at dusk', caption: 'Paddleboards racked up at dusk.' },
  { src: HoiAnBoats, alt: 'Hoi An, Vietnam', caption: 'Boats along the river in Hoi An.' },
  { src: CoconutForest, alt: 'The coconut forest, Hoi An', caption: 'The coconut forest outside Hoi An, by basket boat.' },
  { src: Coldplay, alt: 'Coldplay concert', caption: "Coldplay's stadium show, hearts and all." },
  { src: Concert, alt: 'A concert, mid-set', caption: 'Another night, another stage full of fog.' },
  { src: Kauai, alt: 'Kalalau lookout, Kauai', caption: 'The Kalalau lookout, Kauai.' },
  { src: Hearts, alt: 'Concert crowd', caption: 'The crowd, mid-singalong.' },
  { src: KoaCanoe, alt: 'Koa in a canoe', caption: 'Koa, mid-adventure, unbothered by any of it.' },
  { src: Husky, alt: 'A husky with a bone', caption: 'Home-turf portrait, mid-treat.' },
  { src: AuroraStreet, alt: 'Aurora over a residential street', caption: 'The aurora, from the driveway this time.' },
  { src: Millie, alt: 'Millie the dog', caption: 'Millie, guarding a very important cardboard box.' },
  { src: MoonlightBeach, alt: 'Friends under a full moon', caption: 'Under a very bright moon, one very questionable idea.' },
  { src: Palmtrees, alt: 'Palm trees at sunset', caption: 'Palm trees doing their sunset thing.' },
  { src: Shoreline, alt: 'A beach at golden hour', caption: "Golden hour on a beach I can't place anymore." },
  { src: Skates, alt: 'Skates on a frozen pond', caption: 'A frozen pond, and a heart etched in the ice by someone.' },
  { src: NinhBinhViewpoint, alt: 'Ninh Binh viewpoint, Vietnam', caption: "The view after climbing Ninh Binh's 500 steps." },
  { src: MauiSunset, alt: 'Sunset in Hawaii', caption: 'Watching the sun go down, Hawaii.' },
  { src: TorontoRooftop, alt: 'A Toronto rooftop at sunset', caption: 'A Toronto rooftop, right at sunset.' },
]

const HERO_REEL = [
  {
    tag: 'Photography',
    src: HanoiTrainStreet,
    alt: "Hanoi's Train Street, Vietnam",
    caption: "Hanoi's Train Street — the tracks run close enough to touch the shopfronts.",
  },
  {
    tag: 'Sports',
    src: SoftballHuddle,
    alt: 'Pre-game softball huddle',
    caption: 'Pre-game huddle with the softball squad — that\'s my name on the back.',
  },
  {
    tag: 'Travel',
    src: HaLongBay,
    alt: 'Ha Long Bay, Vietnam',
    caption: 'Ha Long Bay, camera out before the coffee kicked in.',
  },
  {
    tag: 'Food',
    src: Pizza,
    alt: 'Wood-fired pizza',
    caption: 'Two pizzas, zero regrets.',
  },
  {
    tag: 'Friends & Family',
    src: CneFellas,
    alt: 'The CNE at night with friends',
    caption: 'The CNE at night, CN Tower doing its thing in the background.',
  },
  {
    tag: 'Sports',
    src: Snowboard,
    alt: 'Snowboarding with friends',
    caption: 'First run of the day, still figuring out the goggles.',
  },
  {
    tag: 'Travel',
    src: GoldenBridge,
    alt: 'The Golden Bridge, Da Nang, Vietnam',
    caption: 'The Golden Bridge outside Da Nang — yes, those are giant hands.',
  },
  {
    tag: 'Photography',
    src: Aurora,
    alt: 'Aurora over an Ontario street',
    caption: 'The night the aurora showed up over my neighbourhood, completely uninvited.',
  },
]

const SPORTS_SUPPORTING = [
  {
    label: 'Softball · Basketball · Volleyball · Frisbee',
    desc: 'Mostly through the Nexus league and recreationally. I\'m not the best player but I always shows up.',
  },
  {
    label: 'Hockey',
    desc: 'As Canadian as it gets. I grew up learning to skate and play hockey',
  },
  {
    label: 'Running',
    desc: 'From 10k to half-marathon to working my way to a full marathon. I like the challenge and the mental clarity it brings.',
  },
]

const SPORTS_GALLERY = [
  { src: SoftballHuddle, alt: 'Softball', caption: 'Weekly, between two leagues — one of which I run.' },
  { src: MarliesHockey, alt: 'Hockey', caption: "Marlies game — hockey doesn't take an offseason around here." },
  { alt: 'Nexus league', caption: 'The multi-sport league I built the software for.' },
]

const COMMUNITY = [
  {
    label: 'Commissioner',
    desc: "Nexus Sports League. Runs it, wrote the software for it — when the standings are wrong there's exactly one person to blame.",
  },
  {
    label: 'Volunteer',
    desc: "A discussion program at church, built around asking hard questions in a room where nobody's expected to have the answer already. Made for a substantially better listener, which has been quietly useful in code reviews.",
  },
  {
    label: 'In Progress',
    desc: 'Pickleball coaching certification.',
  },
]

const TRAVEL_GALLERY = [
  { src: NinhBinhBoat, alt: 'Ninh Binh, Vietnam', caption: "Boat tour through Ninh Binh's limestone karsts — everyone in the obligatory life jacket." },
  { src: TanDinhChurch, alt: 'Tan Dinh Church, Ho Chi Minh City', caption: 'Tan Dinh Church, Ho Chi Minh City — hard to miss that shade of pink.' },
  { src: HawaiiTiki, alt: 'Hawaii at sunset', caption: 'Torches lit, sun down, Hawaii doing its best postcard impression.' },
  { src: PeggysCove, alt: "Peggy's Cove, Nova Scotia", caption: "Peggy's Cove — the lighthouse everyone photographs, for good reason." },
  { src: PeiCottage, alt: 'Prince Edward Island', caption: 'A cottage on PEI with a view that does not get old.' },
  { src: NiagaraFalls, alt: 'Niagara Falls', caption: 'Niagara Falls, still impressive on the hundredth visit.' },
]

const FOOD_GALLERY = [
  { src: Pizza, alt: 'Wood-fired pizza', caption: 'Two pizzas, zero regrets.' },
  { alt: 'Ramen', caption: 'Late-night ramen, the correct order of operations.' },
  { alt: 'Brunch', caption: 'A brunch that ran long, on purpose.' },
  { alt: 'Home-cooked', caption: 'Home-cooked, which happens more often than people expect.' },
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

          <Reveal className="border-t border-line pt-10">
            <h3 className="font-display mb-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Sports
            </h3>

            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {SPORTS_SUPPORTING.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.05}>
                  <div className="tile-label whitespace-nowrap text-[0.75rem] tracking-normal">{s.label}</div>
                  <p className="text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                </Reveal>
              ))}
            </div>

            <Lightbox aspect="aspect-square" images={SPORTS_GALLERY} />
          </Reveal>
        </section>

        {/* The run — full-bleed standout */}
        <Reveal className="mb-28 -mx-4 sm:-mx-8">
          <div
            className="relative flex min-h-[420px] items-end overflow-hidden sm:min-h-[520px]"
            style={{ background: 'linear-gradient(160deg, #1a1608 0%, #111111 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 px-4 pb-12 sm:px-8 sm:pb-16">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                42.2 km · Solo · Summer 2026
              </p>
              <h2 className="font-display mb-5 max-w-[700px] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-ink">
                Running a marathon nobody's organizing.
              </h2>
              <p className="max-w-[620px] text-base leading-relaxed text-ink-muted">
                No race, no bib, no crowd — a self-mapped route through Toronto's ravine
                trail network, with friends stationed along the way with water and a ride
                home at the end. I like this for the same reason as the projects with
                source code: nobody asked for it, it only happens if the work gets done,
                and there's no version of finishing it that isn't earned.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Community */}
        <section className="mb-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {COMMUNITY.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="tile-label">{c.label}</div>
                <p className="text-sm leading-relaxed text-ink-muted">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Places */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Travel</p>
          <h2 className="font-display mb-6 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Wherever I can get to.
          </h2>
          <Lightbox aspect="aspect-square" images={TRAVEL_GALLERY} />
        </Reveal>

        {/* Food */}
        <Reveal className="mb-28">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">Food</p>
          <h2 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            I plan my weekends around meals.
          </h2>
          <p className="mb-8 max-w-[560px] text-base leading-relaxed text-ink-muted">
            Toronto is an unfairly good city for this and I've made it my business to
            take advantage. If you want a recommendation I have one. If you want an
            argument about the best place for a specific dish, I have that too.
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
