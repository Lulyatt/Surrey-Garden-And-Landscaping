// Illustrative content for a fictional business (portfolio concept).
// Services are fixed in code; projects & testimonials are the CMS-managed collections.
import hero from "@/assets/hero-garden.jpg";
import patio from "@/assets/patio.jpg";
import fencing from "@/assets/fencing.jpg";
import decking from "@/assets/decking.jpg";
import before from "@/assets/before-garden.jpg";
import after from "@/assets/after-garden.jpg";
import lawn from "@/assets/lawn-planting.jpg";
import maintenance from "@/assets/maintenance.jpg";

export const business = {
  name: "Surrey Garden & Landscaping",
  phone: "01483 555 214",
  phoneHref: "tel:+441483555214",
  email: "hello@surreygardenlandscaping.co.uk",
  hours: [
    { days: "Monday – Friday", time: "8:00am – 5:30pm" },
    { days: "Saturday", time: "9:00am – 1:00pm" },
    { days: "Sunday & bank holidays", time: "Closed" },
  ],
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  established: 2009,
};

export const serviceAreas = [
  "Guildford", "Woking", "Godalming", "Farnham", "Cranleigh", "Dorking",
  "Leatherhead", "Cobham", "Weybridge", "Reigate", "Epsom", "Haslemere",
  "Bramley", "Shere", "Ripley", "Send",
];

export const images = { hero, patio, fencing, decking, before, after, lawn, maintenance };

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  includes: string[];
  approach: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "garden-transformations",
    title: "Garden Transformations",
    short: "Complete redesigns that bring a tired garden back into everyday use.",
    intro:
      "When a garden needs more than a tidy-up, we plan and carry out the whole job — clearance, levels, hard landscaping, lawns and planting — as one joined-up project with one team.",
    image: after,
    includes: ["Site clearance and waste removal", "Levelling and drainage", "Patios, paths and steps", "New lawns and borders", "Fencing and boundaries", "Planting plans"],
    approach: [
      { title: "Visit and listen", text: "We walk the garden with you, talk through how you'd like to use it and take measurements." },
      { title: "Clear written quote", text: "You receive an itemised quote with materials, timings and anything we'd recommend you consider." },
      { title: "Build with care", text: "The same small team works on your garden from start to finish and keeps the site tidy each day." },
    ],
  },
  {
    slug: "patios-and-paving",
    title: "Patios & Paving",
    short: "Sandstone, porcelain and block paving laid on proper foundations.",
    intro:
      "A good patio starts underground. We excavate, lay a compacted sub-base and set slabs on a full mortar bed so your paving stays level and drains properly for years.",
    image: patio,
    includes: ["Natural sandstone and limestone", "Porcelain paving", "Block paved paths", "Steps and raised edges", "Brick raised beds", "Pointing and repairs"],
    approach: [
      { title: "Choosing materials", text: "We bring samples so you can see colours and finishes in your own garden's light." },
      { title: "Groundwork first", text: "Correct depth, falls away from the house and a compacted sub-base before any slab goes down." },
      { title: "Neat finishing", text: "Jointing, cutting and edging done carefully, then a full clean-down on completion." },
    ],
  },
  {
    slug: "fencing",
    title: "Fencing",
    short: "Sturdy, well-set fencing for privacy, security and a tidy boundary.",
    intro:
      "From replacing a single storm-damaged panel to a full new boundary, we install fencing that's set straight, level and built to cope with the weather.",
    image: fencing,
    includes: ["Closeboard and featheredge", "Fence panels and trellis", "Concrete and timber posts", "Gravel boards", "Garden gates", "Removal of old fencing"],
    approach: [
      { title: "Boundary check", text: "We confirm the line with you and discuss neighbours, heights and access beforehand." },
      { title: "Solid posts", text: "Posts are set properly in concrete so the fence stays upright through winter winds." },
      { title: "Clean finish", text: "Old materials taken away and the area left as we found it — only better." },
    ],
  },
  {
    slug: "decking",
    title: "Decking",
    short: "Timber and composite decks for sloping sites and outdoor dining.",
    intro:
      "Decking is a practical way to create level outdoor space, especially on a sloping garden. We build on a properly spaced, treated frame with good ventilation underneath.",
    image: decking,
    includes: ["Softwood and hardwood decking", "Composite boards", "Steps and multi-level decks", "Balustrades and handrails", "Integrated planters", "Deck repairs"],
    approach: [
      { title: "Plan the space", text: "We help you decide on size, height and orientation so the deck gets the best of the sun." },
      { title: "Strong framework", text: "A treated sub-frame on solid footings, with weed membrane and ventilation beneath." },
      { title: "Finishing details", text: "Neatly fixed boards, tidy edges and steps that are comfortable to use." },
    ],
  },
  {
    slug: "lawns",
    title: "Lawns & Planting",
    short: "New turf, lawn renovation and borders planted to suit your soil.",
    intro:
      "A healthy lawn and well-chosen planting make a garden feel finished. We prepare the ground thoroughly, lay quality turf and plant borders that suit your soil and how much time you have.",
    image: lawn,
    includes: ["Ground preparation and levelling", "Turf laying", "Lawn renovation and scarifying", "Lawn edging", "Border planting", "Hedges and trees"],
    approach: [
      { title: "Prepare the soil", text: "Clearing, rotavating, levelling and adding topsoil where needed before laying." },
      { title: "Lay and plant", text: "Turf laid tight with staggered joints; plants chosen for the aspect and soil." },
      { title: "Aftercare advice", text: "Simple written guidance on watering and mowing so everything establishes well." },
    ],
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    short: "Regular or one-off visits to keep your garden in good order.",
    intro:
      "Not every job is a big project. We offer regular maintenance visits and seasonal tidy-ups for homeowners who want their garden kept neat without the work.",
    image: maintenance,
    includes: ["Regular mowing and edging", "Hedge trimming", "Pruning and weeding", "Seasonal tidy-ups", "Leaf clearance", "Green waste removal"],
    approach: [
      { title: "Agree a routine", text: "We suggest a visit frequency based on your garden and the time of year." },
      { title: "Reliable visits", text: "The same faces each time, arriving when we say we will." },
      { title: "Keep you informed", text: "We'll let you know if we spot anything that needs attention." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  description: string[];
  services: string[];
  duration: string;
  image: string;
  gallery: string[];
  beforeAfter?: { before: string; after: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "semi-detached-garden-renovation-woking",
    title: "Back garden renovation",
    location: "Woking",
    summary: "An overgrown rear garden turned into a usable family space with patio, lawn and new fencing.",
    description: [
      "The owners had recently moved in and inherited a garden that hadn't been touched for several years. The fences had collapsed, the old concrete path was broken and the lawn was mostly weeds.",
      "We cleared the site, installed new closeboard fencing on concrete posts, laid a sandstone patio outside the French doors and returfed the full length of the garden. Narrow borders along each side were planted with hydrangeas, lavender and young multi-stem trees for privacy.",
    ],
    services: ["Site clearance", "Fencing", "Patios & paving", "Turfing", "Planting"],
    duration: "Around three weeks",
    image: after,
    gallery: [after, patio, lawn],
    beforeAfter: { before, after },
    featured: true,
  },
  {
    slug: "sandstone-patio-guildford",
    title: "Sandstone patio & raised bed",
    location: "Guildford",
    summary: "A worn concrete patio replaced with Indian sandstone and a reclaimed-brick raised border.",
    description: [
      "The existing patio had sunk in places and held water near the house. We removed it, corrected the falls and laid a new sandstone patio on a full mortar bed.",
      "A low raised bed in reclaimed-style brick now separates the seating area from the lawn and gives the owners an easy-to-reach planting space.",
    ],
    services: ["Patios & paving", "Brickwork", "Planting"],
    duration: "Around ten days",
    image: patio,
    gallery: [patio, hero],
    featured: true,
  },
  {
    slug: "garden-decking-godalming",
    title: "Raised deck with wide steps",
    location: "Godalming",
    summary: "A level timber deck off the kitchen, with broad steps down to the lawn.",
    description: [
      "This garden sloped away from the house, leaving little flat space for a table. We built a raised softwood deck level with the doors, with three broad steps that double as informal seating.",
      "Existing borders either side were protected during the work and topped up with new planting afterwards.",
    ],
    services: ["Decking", "Planting"],
    duration: "Around one week",
    image: decking,
    gallery: [decking, lawn],
    featured: true,
  },
  {
    slug: "boundary-fencing-cranleigh",
    title: "Full boundary fencing",
    location: "Cranleigh",
    summary: "Storm-damaged panels replaced with a continuous closeboard fence and gravel boards.",
    description: [
      "After winter storms left several panels down, the owners decided to replace the whole rear boundary rather than patch it.",
      "We removed the old fence, set new concrete posts and installed featheredge closeboard with concrete gravel boards to keep the timber off the ground.",
    ],
    services: ["Fencing"],
    duration: "Two days",
    image: fencing,
    gallery: [fencing],
  },
  {
    slug: "family-garden-farnham",
    title: "Family garden refresh",
    location: "Farnham",
    summary: "New paving, a reshaped lawn and fuller borders for a busy family garden.",
    description: [
      "The family wanted a lawn that could take football and a patio big enough for summer meals. We widened the patio, reshaped the lawn with a gentle curve and planted generous, low-maintenance borders.",
    ],
    services: ["Garden transformations", "Patios & paving", "Lawns"],
    duration: "Around two and a half weeks",
    image: hero,
    gallery: [hero, lawn, patio],
    beforeAfter: { before, after: hero },
  },
  {
    slug: "border-planting-dorking",
    title: "Cottage border planting",
    location: "Dorking",
    summary: "A long, bare border replanted with lavender, salvias and ornamental grasses.",
    description: [
      "We cleared and improved the soil along a south-facing wall and planted a layered border chosen for long flowering and easy upkeep. The lawn edge was recut and finished with a neat steel edge.",
    ],
    services: ["Planting", "Lawns"],
    duration: "Three days",
    image: lawn,
    gallery: [lawn],
  },
];

export const testimonials = [
  {
    quote: "They turned up when they said they would, kept us updated every day and left the garden spotless. We actually use it now.",
    name: "Sarah & Tom",
    location: "Woking",
    project: "Back garden renovation",
  },
  {
    quote: "The new patio is level, drains properly and looks lovely. The quote was clear and there were no surprises at the end.",
    name: "Margaret H.",
    location: "Guildford",
    project: "Sandstone patio",
  },
  {
    quote: "Friendly, tidy and really knew their stuff. The deck has completely changed how we use the garden in summer.",
    name: "James P.",
    location: "Godalming",
    project: "Raised deck",
  },
];

export const trustPoints = [
  { title: "Public liability insurance", text: "Fully insured for work on domestic properties." },
  { title: "Workmanship guarantee", text: "Our hard landscaping work is covered by a written workmanship guarantee." },
  { title: "Qualified team", text: "RHS-trained and experienced in hard and soft landscaping." },
  { title: "Free written quotes", text: "Itemised quotes after a visit, with no obligation." },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Do you charge for quotes?", a: "No. We visit, talk through what you have in mind and send a written quote free of charge and with no obligation." },
  { q: "How do quotes and estimates work?", a: "After visiting the garden we send an itemised written quote covering materials, labour and waste removal. If anything changes once work starts — for example, unexpected ground conditions — we'll talk to you before doing any extra work." },
  { q: "How do payments work?", a: "For larger projects we usually ask for a deposit to cover materials, with the balance due on completion. Smaller jobs and maintenance visits are invoiced after the work. Payment details are set out clearly on every quote." },
  { q: "Can I choose my own materials?", a: "Yes. We'll recommend materials that suit your garden and budget and can bring samples, but you're welcome to choose your own or source specific products." },
  { q: "What should I do before work starts?", a: "We'll confirm access, parking and where materials can be stored. It helps if pots, furniture and anything fragile are moved from the work area, and if neighbours are aware of any boundary work." },
  { q: "How long will my project take?", a: "It depends on the size of the job and the weather. A fence replacement might take a day or two, while a full garden transformation may take a few weeks. Your quote will include an estimated timescale." },
  { q: "Do you work in all weathers?", a: "We work through most conditions, but some jobs — like laying patios or turf — need suitable weather. If we need to pause, we'll let you know and reschedule as quickly as we can." },
  { q: "Which areas do you cover?", a: "We work across Surrey, mainly around Guildford, Woking, Godalming, Farnham and the surrounding towns and villages. If you're nearby, just ask." },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
