export interface PortfolioItem {
  id: string;
  title: string;
  category: 'skincare' | 'cosmetics' | 'fragrance' | 'fashion' | 'commercial';
  categoryLabel: string;
  client?: string;
  imageSrc: string;
  featured?: boolean;
  aspect?: 'portrait' | 'landscape' | 'square';
  description?: string;
  page: 'work' | 'cliental' | 'both';
}

export const STUDIO_INFO = {
  name: "To The Infinity Studio",
  shortName: "To the ∞ Studio",
  founder: "Sarvesh Chaudhari",
  role: "Commercial & Editorial Photographer",
  location: "Mumbai, India",
  phone: "+91 9664568706",
  phoneRaw: "9664568706",
  email: "sarvesh@totheinfinitystudio.com",
  instagram: "https://www.instagram.com/totheinfinitystudio/",
  instagramHandle: "@totheinfinitystudio",
  linkedin: "https://www.linkedin.com/in/sarvesh-chaudhari-25aa3419a/",
  whatsapp: "https://wa.me/919664568706?text=Hi%20Sarvesh%2C%20I%20would%20like%20to%20discuss%20a%20commercial%20photography%20project%20with%20To%20The%20Infinity%20Studio.",
  tagline: "Shot for real. Styled for real. Only real setups and moments as they actually happened.",
  bio: "I specialize in capturing beauty, cosmetics, and fashion products with a refined blend of minimalism and abstraction. Based in Mumbai, I operate exclusively in a controlled studio environment, ensuring every frame is meticulously styled, lit, and edited to perfection. My work doesn't just showcase products — it enhances their narrative, making them stand out in a crowded marketplace.",
  expertise: "I focus on delivering high-end visuals that strike the perfect balance between art and commerce. Whether it's clean, impactful e-commerce shots or sophisticated creative imagery, my approach highlights the distinct identity of each brand.",
  logoUrl: "/images/about-2.png",
  portraitUrl: "/images/about-3.png",
  studioShotUrl: "/images/contact-3.png",
  heroBannerUrl: "/images/work-3.png",
};

export const SERVICES = [
  {
    id: "product-photo",
    title: "Product Photography",
    tagline: "Precision lighting tailored for luxury goods & textures",
    description: "I specialize in capturing beauty, cosmetics, and fashion products with a refined blend of minimalism and abstraction.",
    deliverables: ["High-resolution master files", "Clean color-graded edits", "Retouched reflective surfaces", "Multiple lighting variations"]
  },
  {
    id: "ecommerce-shots",
    title: "E-Commerce Product Shots",
    tagline: "High-volume catalog imagery with standardized excellence",
    description: "Flawless white/seamless backgrounds, multi-angle hero shots, and marketplace-compliant sizing for luxury e-tailers.",
    deliverables: ["Amazon/Sephora/Shopify compliant", "Precision clipping paths", "Consistent scale & shadows", "Bulk throughput delivery"]
  },
  {
    id: "beauty-fashion",
    title: "Beauty, Skincare & Fashion Imagery",
    tagline: "Sensory editorial compositions that evoke desire",
    description: "Capturing tactile serum textures, cosmetic swatches, glass translucency, and model skin interactions with editorial flair.",
    deliverables: ["Editorial campaign compositions", "Texture smears & swatches", "Creative acrylic/water setups", "Art direction guidance"]
  },
  {
    id: "concept-styling",
    title: "Concept Development & Styling",
    tagline: "Full-spectrum creative narrative from moodboard to final frame",
    description: "Prop sourcing, bespoke podiums, architectural geometry, and curated color palettes designed exclusively for your brand launch.",
    deliverables: ["Moodboard & treatment curation", "Prop styling & set design", "On-set creative direction", "Pre-production alignment"]
  }
];

export const CLIENT_BRANDS = [
  "Nykaa Beauty",
  "Forest Essentials",
  "Kama Ayurveda",
  "Plum Goodness",
  "Sugar Cosmetics",
  "mCaffeine",
  "Dot & Key",
  "Colorbar Paris"
];

// All images loaded locally from public/images/ (fast, crisp, no 403 blocks)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "work-4",
    title: "Luminous Essence Serum",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Luxury Beauty Co.",
    imageSrc: "/images/work-4.png",
    featured: true,
    aspect: "portrait",
    description: "Controlled directional lighting accentuating golden luminescence and botanical serum viscosity.",
    page: "both"
  },
  {
    id: "work-5",
    title: "Velvet Matte Rouge",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Haute Cosmetics",
    imageSrc: "/images/work-5.png",
    featured: true,
    aspect: "square",
    description: "Monochromatic composition with deep pigment reflections on dark obsidian stone.",
    page: "work"
  },
  {
    id: "work-6",
    title: "Crystal Droplet Hydration",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Pure Botanical",
    imageSrc: "/images/work-6.png",
    featured: false,
    aspect: "portrait",
    description: "High-speed strobe capture of real micro-droplets resting on frosted glass curvature.",
    page: "both"
  },
  {
    id: "work-7",
    title: "Noir Eau De Parfum",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Maison De Parfum",
    imageSrc: "/images/work-7.png",
    featured: true,
    aspect: "portrait",
    description: "Dramatic rim lighting bringing out faceted glass edges and amber liquid depth.",
    page: "both"
  },
  {
    id: "work-8",
    title: "Botanical Elixir Dropper",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Aura Skincare",
    imageSrc: "/images/work-8.png",
    featured: false,
    aspect: "square",
    description: "Minimalist studio backdrop celebrating organic product tones and tactile glass pipette.",
    page: "work"
  },
  {
    id: "work-9",
    title: "Prism Refraction Fragrance",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Elysian Scents",
    imageSrc: "/images/work-9.png",
    featured: true,
    aspect: "landscape",
    description: "Caustic optical refraction through faceted flacon with subtle color dispersion.",
    page: "work"
  },
  {
    id: "work-10",
    title: "Sleek Chrome Lipstick Tube",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Luxe Cosmetics",
    imageSrc: "/images/work-10.png",
    featured: false,
    aspect: "square",
    description: "Mirror-finish metallic cylinders rendered with flawless gradient lighting.",
    page: "both"
  },
  {
    id: "work-11",
    title: "Silk Moisture Cream Jar",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Dermaceutic Laboratory",
    imageSrc: "/images/work-11.png",
    featured: false,
    aspect: "portrait",
    description: "Frosted jar with weighted base standing against calm neutral plaster styling.",
    page: "both"
  },
  {
    id: "work-12",
    title: "Sculpted Foundation Swatches",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "TrueTone Beauty",
    imageSrc: "/images/work-12.png",
    featured: true,
    aspect: "landscape",
    description: "Macro texture study showcasing creamy consistency and true skin undertones.",
    page: "work"
  },
  {
    id: "work-13",
    title: "Gold Foil Peptide Amplifier",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Aethelgard Skincare",
    imageSrc: "/images/work-13.png",
    featured: false,
    aspect: "square",
    description: "Refined gold foil embossing captured with micro specular control.",
    page: "work"
  },
  {
    id: "work-14",
    title: "Artisanal Candle Vessel",
    category: "fashion",
    categoryLabel: "Fashion & Lifestyle",
    client: "Maison Luminary",
    imageSrc: "/images/work-14.png",
    featured: false,
    aspect: "portrait",
    description: "Matte ceramic body with smooth wax pool bathed in soft atmospheric studio illumination.",
    page: "work"
  },
  {
    id: "work-15",
    title: "Mineral Sunscreen Tube",
    category: "commercial",
    categoryLabel: "Commercial Catalog",
    client: "Solare Labs",
    imageSrc: "/images/work-15.png",
    featured: false,
    aspect: "square",
    description: "Crisp commercial e-commerce execution with true color accuracy and sharp typography.",
    page: "cliental"
  },
  {
    id: "work-16",
    title: "Citrus Hydrosol Mist",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Nectar Organics",
    imageSrc: "/images/work-16.png",
    featured: false,
    aspect: "portrait",
    description: "Amber bottle highlighted with soft backlight against a textured travertine block.",
    page: "work"
  },
  {
    id: "work-17",
    title: "Hydra Lip Gloss Wand",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Kroma Studio",
    imageSrc: "/images/work-17.png",
    featured: true,
    aspect: "landscape",
    description: "Macro precision capture showing the glass-like gloss layer with zero unwanted reflections.",
    page: "both"
  },
  {
    id: "work-18",
    title: "Minimalist Eyewear Reflection",
    category: "fashion",
    categoryLabel: "Fashion & Lifestyle",
    client: "Optique Modern",
    imageSrc: "/images/work-18.png",
    featured: false,
    aspect: "square",
    description: "Titanium wireframes styled on polished mirror with controlled lens coatings.",
    page: "work"
  },
  {
    id: "work-19",
    title: "Restorative Night Concentrate",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Sommeil Beauty",
    imageSrc: "/images/work-19.png",
    featured: false,
    aspect: "portrait",
    description: "Rich cobalt glass container with crisp typography legibility.",
    page: "both"
  },
  {
    id: "work-20",
    title: "Couture Leather Wristlet",
    category: "fashion",
    categoryLabel: "Fashion & Lifestyle",
    client: "Atelier V",
    imageSrc: "/images/work-20.png",
    featured: false,
    aspect: "square",
    description: "Top-grain pebble leather texture and hand-stitched details under raking light.",
    page: "work"
  },
  {
    id: "work-21",
    title: "Amber Body Oil in Splashing Water",
    category: "commercial",
    categoryLabel: "Commercial Catalog",
    client: "Oceane Bodycare",
    imageSrc: "/images/work-21.png",
    featured: true,
    aspect: "landscape",
    description: "Action strobe setup freezing clear water ripples around glass packaging.",
    page: "both"
  },
  {
    id: "work-22",
    title: "Aura Highlighter Palette",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Prism Face",
    imageSrc: "/images/work-22.png",
    featured: false,
    aspect: "portrait",
    description: "Baked powder surface micro-texture shimmering under pinpoint specular highlights.",
    page: "work"
  },
  {
    id: "work-23",
    title: "Smoky Oud Extract",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Oud Royale",
    imageSrc: "/images/work-23.png",
    featured: false,
    aspect: "square",
    description: "Deep smoky shadows surrounding a heavy crystal flacon with golden juice.",
    page: "both"
  },
  {
    id: "work-24",
    title: "Complete Brand E-Commerce Suite",
    category: "commercial",
    categoryLabel: "Commercial Catalog",
    client: "Forest Rituals",
    imageSrc: "/images/work-24.png",
    featured: true,
    aspect: "landscape",
    description: "Full range catalog lineup shot for primary online retail banner.",
    page: "cliental"
  },
  {
    id: "work-25",
    title: "Glass Amber Droppers Pack",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Pure Elements",
    imageSrc: "/images/work-25.png",
    featured: false,
    aspect: "square",
    description: "Clean modular catalog angles for direct-to-consumer e-commerce storefront.",
    page: "cliental"
  },
  {
    id: "work-26",
    title: "Ceramide Moisture Duo",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "HydraDerm",
    imageSrc: "/images/work-26.png",
    featured: false,
    aspect: "portrait",
    description: "Pair composition highlighting product pairing and size proportion.",
    page: "cliental"
  },
  {
    id: "work-27",
    title: "Botanical Clay Cleanser",
    category: "commercial",
    categoryLabel: "Commercial Catalog",
    client: "Earth & Clay",
    imageSrc: "/images/work-27.png",
    featured: false,
    aspect: "square",
    description: "Soft ambient shadows rendering the matte recyclable tube finish.",
    page: "cliental"
  },
  {
    id: "work-28",
    title: "Lip Tint Collection Lineup",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Kroma Studio",
    imageSrc: "/images/work-28.png",
    featured: true,
    aspect: "portrait",
    description: "Array of color variants captured in identical geometry for product swatches.",
    page: "cliental"
  },
  {
    id: "work-29",
    title: "Botanical Toner Spray Mist",
    category: "commercial",
    categoryLabel: "Commercial Catalog",
    client: "Verdant Flora",
    imageSrc: "/images/work-29.png",
    featured: false,
    aspect: "square",
    description: "Fine nozzle atomizer mist with back-lit particle dispersion.",
    page: "cliental"
  },
  {
    id: "work-30",
    title: "Mineral Essence Drop",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Dermacare",
    imageSrc: "/images/work-30.png",
    featured: false,
    aspect: "portrait",
    description: "High-contrast commercial catalog view on seamless white background.",
    page: "cliental"
  },
  {
    id: "work-31",
    title: "Matte Lipstick Swatch Array",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Color Studio",
    imageSrc: "/images/work-31.png",
    featured: false,
    aspect: "square",
    description: "Crisp studio lighting capturing accurate pigmentation.",
    page: "cliental"
  },
  {
    id: "work-32",
    title: "Luxury Flacon Duo",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Parfum Prive",
    imageSrc: "/images/work-32.png",
    featured: false,
    aspect: "landscape",
    description: "Subtle specular rim reflections across sculpted flacon contours.",
    page: "cliental"
  }
];
