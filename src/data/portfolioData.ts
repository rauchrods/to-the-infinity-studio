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
  "Rhode Skin",
  "Chanel",
  "Adidas Originals",
  "Dior",
  "Aēsop",
  "Essential Parfums Paris",
  "Huda Beauty",
  "L'Oréal Paris",
  "Summer Fridays",
  "Puma",
  "H&M Beauty"
];

// All images loaded locally from public/images/ (fast, crisp, high-resolution)
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "work-4",
    title: "Rhode Peptide Lip Tint & Dinner Party",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Rhode Skin",
    imageSrc: "/images/work-4.png",
    featured: true,
    aspect: "portrait",
    description: "Hailey Bieber's Rhode Peptide Lip Tint balanced across the rim of an empty cocktail glass above stacked dinner plates with pasta leftovers, a retro keypad phone, and crumpled linen on a vivid red tabletop.",
    page: "both"
  },
  {
    id: "work-5",
    title: "Adidas Originals in Grocery Bag",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Adidas Originals",
    imageSrc: "/images/work-5.png",
    featured: true,
    aspect: "portrait",
    description: "Surrealist lifestyle editorial featuring an Adidas Originals Samba sneaker peeking out of a crinkled brown paper grocery bag alongside a glass milk bottle and a yellow #1 billiard ball against rich olive green.",
    page: "both"
  },
  {
    id: "work-6",
    title: "Bubblegum on Adidas Gum Sole",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Adidas Originals",
    imageSrc: "/images/work-6.png",
    featured: false,
    aspect: "portrait",
    description: "Macro study of the textured rubber gum sole on an Adidas Originals sneaker with gooey bubblegum-pink chewing gum stretched from the tread against a deep forest green studio backdrop.",
    page: "work"
  },
  {
    id: "work-7",
    title: "Bois Impérial on Folded Denim",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Essential Parfums Paris",
    imageSrc: "/images/work-7.png",
    featured: true,
    aspect: "portrait",
    description: "Architectural flacon of Bois Impérial Eau de Parfum by Quentin Bisch resting atop neatly pressed denim indigo jeans, sculpted with moody side rim lighting to accentuate glass clarity.",
    page: "both"
  },
  {
    id: "work-8",
    title: "Bois Impérial on Diner Silver Tray",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Essential Parfums Paris",
    imageSrc: "/images/work-8.png",
    featured: false,
    aspect: "portrait",
    description: "Narrative still life of Bois Impérial fragrance arranged on a stainless steel diner tray alongside a single espresso, folded dollar bills on a diner receipt, yellow BIC lighter, and sugar packets.",
    page: "both"
  },
  {
    id: "work-9",
    title: "Bleu de Chanel Overtime Workspace",
    category: "fragrance",
    categoryLabel: "Fragrance",
    client: "Chanel",
    imageSrc: "/images/work-9.png",
    featured: true,
    aspect: "portrait",
    description: "Deep midnight blue Bleu de Chanel bottle propping up a vintage off-white telephone receiver over scattered late-night office invoices, computer keyboard, burning cigarette, and spilled coffee.",
    page: "both"
  },
  {
    id: "work-10",
    title: "Diamond Tennis Bracelet & Spilled Espresso",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Fine Jewelry Editorial",
    imageSrc: "/images/work-10.png",
    featured: true,
    aspect: "portrait",
    description: "Brilliant-cut diamond tennis bracelet draped carelessly across a white porcelain saucer into a pool of spilled espresso, styled beside stacked diner mugs and a red Bialetti Moka pot.",
    page: "both"
  },
  {
    id: "work-11",
    title: "Diamond Bracelet on Haricots Verts",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Haute Joaillerie",
    imageSrc: "/images/work-11.png",
    featured: false,
    aspect: "portrait",
    description: "Sensory juxtaposition of fine diamond jewelry draped across fresh organic green beans on a polished oval silver serving platter against deep emerald studio shadows.",
    page: "work"
  },
  {
    id: "work-12",
    title: "H&M Beauty Red & Virgin Mobile",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "H&M Beauty",
    imageSrc: "/images/work-12.png",
    featured: true,
    aspect: "portrait",
    description: "Sculptural red H&M Beauty lipstick bound tightly to a vintage black Virgin Mobile candybar phone with a taut yellow rubber band against a pastel blue textured paper backdrop.",
    page: "both"
  },
  {
    id: "work-13",
    title: "Red Lipstick on Frothy Milk Jug",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Cosmetic Editorial",
    imageSrc: "/images/work-13.png",
    featured: false,
    aspect: "portrait",
    description: "Bold red lipstick tube balanced horizontally across the sky-blue cap of a glass milk jug brimming with frothy white milk against a warm yellow monochromatic studio wall.",
    page: "work"
  },
  {
    id: "work-14",
    title: "Summer Fridays Cherry Lip Butter Martini",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Summer Fridays",
    imageSrc: "/images/work-14.png",
    featured: true,
    aspect: "portrait",
    description: "Summer Fridays Lip Butter Balm in Cherry balanced across a crystal martini glass filled with rich ruby liquid, crowned with a fresh dark cherry under cool studio rim lighting.",
    page: "both"
  },
  {
    id: "work-15",
    title: "Suede Boat Shoe & Fresh Baguettes",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Artisan Footwear",
    imageSrc: "/images/work-15.png",
    featured: false,
    aspect: "portrait",
    description: "Caramel brown suede deck loafer tucked into a crinkled white paper bakery bag next to golden crusty French baguettes under crisp directional studio illumination.",
    page: "work"
  },
  {
    id: "work-16",
    title: "Suede Loafer Office Still Life",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Artisan Footwear",
    imageSrc: "/images/work-16.png",
    featured: false,
    aspect: "square",
    description: "Brown suede deck shoe balanced at an angle over a ramp of office paper documents with an espresso cup, yellow pencil, binder clips, and wireless AirPods on a clean desk.",
    page: "both"
  },
  {
    id: "work-17",
    title: "Puma Speedcat on Studio C-Stand",
    category: "fashion",
    categoryLabel: "Fashion",
    client: "Puma",
    imageSrc: "/images/work-17.png",
    featured: true,
    aspect: "portrait",
    description: "Forest green suede Puma Speedcat sneaker with white leather Formstrip clamped vertically in a heavy chrome stainless steel C-stand grip head against a moody dark slate gradient.",
    page: "both"
  },
  {
    id: "work-18",
    title: "Mocha Matte Lipstick & Espresso Stack",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Beauty Editorial",
    imageSrc: "/images/work-18.png",
    featured: false,
    aspect: "portrait",
    description: "Deep chocolate brown lipstick bullet in matte black case resting against tilted, stacked porcelain espresso cups with rich dark coffee dripping down the saucers.",
    page: "work"
  },
  {
    id: "work-19",
    title: "Cherry Lipstick on Folded Contact Sheet",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Editorial Beauty",
    imageSrc: "/images/work-19.png",
    featured: false,
    aspect: "portrait",
    description: "Cherry red lipstick in chrome casing paired with a ripe stem cherry resting on a folded monochrome photographic proof against an intense deep burgundy red surface.",
    page: "work"
  },
  {
    id: "work-20",
    title: "Red Lipstick & Bitten Cherry on Fork",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Cosmetic Art",
    imageSrc: "/images/work-20.png",
    featured: true,
    aspect: "portrait",
    description: "Surreal culinary beauty concept featuring a silver dining fork piercing through a red lipstick bullet, topped with a succulent bitten dark cherry against a studio gradient.",
    page: "both"
  },
  {
    id: "work-21",
    title: "Nude Lipstick Impaled on Thorn Branch",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Conceptual Beauty",
    imageSrc: "/images/work-21.png",
    featured: false,
    aspect: "portrait",
    description: "Sculptural nude lipstick tip pierced directly through a sharp natural desert thorn branch on an isolated, high-key white background capturing fragile tension.",
    page: "work"
  },
  {
    id: "work-22",
    title: "Huda Beauty Dripping Frame Illusion",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Huda Beauty",
    imageSrc: "/images/work-22.png",
    featured: true,
    aspect: "portrait",
    description: "Viscous chocolate liquid lipstick melting and oozing down through a sleek black photo frame toward an open matte brown Huda Beauty lipstick tube standing below.",
    page: "both"
  },
  {
    id: "work-23",
    title: "L'Oréal Crimson Lipstick on Shears",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "L'Oréal Paris",
    imageSrc: "/images/work-23.png",
    featured: true,
    aspect: "portrait",
    description: "High-precision macro of a classic L'Oréal Paris red lipstick severed along the razor edge of heavy tailoring shears, with glossy pigment droplets dripping onto high-gloss acrylic.",
    page: "both"
  },
  {
    id: "work-24",
    title: "Chrome Lipstick on Watermelon Slice",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Summer Beauty",
    imageSrc: "/images/work-24.png",
    featured: false,
    aspect: "portrait",
    description: "Mirror-finish chrome lipstick tube resting across the vibrant red seeded flesh of an oval sliced watermelon under crisp, shadowless studio lighting.",
    page: "work"
  },
  {
    id: "work-25",
    title: "Red Lipstick & Kinetic Dahlia Blur",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Creative Beauty",
    imageSrc: "/images/work-25.png",
    featured: false,
    aspect: "portrait",
    description: "Long-exposure shutter drag technique capturing the dynamic horizontal motion blur of deep red chrysanthemum petals beside a static, pin-sharp crimson lipstick bullet.",
    page: "both"
  },
  {
    id: "work-26",
    title: "Mended Lipstick with Steel Staple",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Avant-Garde Beauty",
    imageSrc: "/images/work-26.png",
    featured: true,
    aspect: "portrait",
    description: "Striking macro study of a severed crimson lipstick bullet reconnected with an industrial silver metal staple across its fracture line against pure white.",
    page: "both"
  },
  {
    id: "work-27",
    title: "Geometric Red Bullet Overhead Macro",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Luxe Cosmetics",
    imageSrc: "/images/work-27.png",
    featured: false,
    aspect: "portrait",
    description: "Top-down overhead perspective celebrating the geometric teardrop symmetry and pristine bevel edge of a ruby red lipstick inside a square black case.",
    page: "work"
  },
  {
    id: "work-28",
    title: "Velvet Lipstick Core Texture Study",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Luxe Cosmetics",
    imageSrc: "/images/work-28.png",
    featured: false,
    aspect: "portrait",
    description: "Micro-texture overhead view revealing the dense, velvety crumb and rich concentrated pigments of a sheared lipstick barrel core under controlled directional lighting.",
    page: "work"
  },
  {
    id: "work-29",
    title: "Overhead Lipstick & Spinning Floral Bloom",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Creative Beauty",
    imageSrc: "/images/work-29.png",
    featured: false,
    aspect: "portrait",
    description: "Bird's-eye perspective of a centered lipstick case nested within spinning floral red dahlia petals rendered with dramatic lateral kinetic motion blur.",
    page: "work"
  },
  {
    id: "work-30",
    title: "Chanel Rouge Coco Mauve & Rose",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Chanel",
    imageSrc: "/images/work-30.png",
    featured: true,
    aspect: "portrait",
    description: "Chanel Rouge Coco lipstick in dusty mauve nude standing behind a sharp matte black architectural column, framed by a soft fuchsia pink garden rose on high-key white.",
    page: "both"
  },
  {
    id: "work-31",
    title: "Espresso Lipstick & Roasted Coffee Drip",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Sensory Beauty",
    imageSrc: "/images/work-31.png",
    featured: true,
    aspect: "portrait",
    description: "Single roasted arabica coffee bean suspended in mid-air, releasing an unctuous glossy drop of coffee syrup onto the apex of an espresso brown lipstick bullet.",
    page: "both"
  },
  {
    id: "work-32",
    title: "Nude Lipstick on Sculpted Cocoa Slabs",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Tactile Cosmetics",
    imageSrc: "/images/work-32.png",
    featured: false,
    aspect: "portrait",
    description: "Matte nude lipstick resting on architectural monolithic blocks carved from compacted fine cocoa powder, creating a velvety monochrome tactile earth landscape.",
    page: "work"
  },
  {
    id: "work-33",
    title: "Rouge Dior Peach in Paper Lattice",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Dior",
    imageSrc: "/images/work-33.png",
    featured: true,
    aspect: "portrait",
    description: "Rouge Dior nude peach lipstick and CD monogram cap embedded within an architectural geometric lattice of interwoven white paper strips bathed in soft diffuse light.",
    page: "both"
  },
  {
    id: "work-34",
    title: "Rouge Dior Velvet Sliced by Glass Shard",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Dior",
    imageSrc: "/images/work-34.png",
    featured: true,
    aspect: "portrait",
    description: "Tense, high-contrast macro of an embossed Rouge Dior deep berry bullet sliced cleanly at the slant by an ultra-thin razor shard of shattered glass against deep black.",
    page: "both"
  },
  {
    id: "work-35",
    title: "Chanel Rouge Coco Minimalist Rose Bloom",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Chanel",
    imageSrc: "/images/work-35.png",
    featured: false,
    aspect: "portrait",
    description: "Iconic Chanel black and gold lipstick paired with delicate open rose petals, juxtaposed against a bold vertical graphic divider on white seamless.",
    page: "work"
  },
  {
    id: "work-36",
    title: "Plum Lipstick in Serrated Shears",
    category: "cosmetics",
    categoryLabel: "Cosmetics",
    client: "Avant-Garde Beauty",
    imageSrc: "/images/work-36.png",
    featured: false,
    aspect: "portrait",
    description: "Dramatic close-up macro of a rich plum purple lipstick bullet gripped and pinched between the serrated stainless steel teeth of industrial kitchen bone shears.",
    page: "both"
  },
  {
    id: "work-37",
    title: "Rhode Peptide Lip Tint in Raspberry Jelly",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Rhode Skin",
    imageSrc: "/images/work-37.png",
    featured: true,
    aspect: "portrait",
    description: "Hailey Bieber's Rhode Peptide Lip Tint in raspberry plunged into a swirl of whipped cream atop a crystal coupe of glowing pink gelatin dessert on stacked white porcelain plates.",
    page: "both"
  },
  {
    id: "work-38",
    title: "Aēsop Resurrection Aromatique Hand Balm",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Aēsop",
    imageSrc: "/images/work-38.png",
    featured: true,
    aspect: "portrait",
    description: "Classic aluminum tube of Aēsop Resurrection Aromatique Hand Balm upside down with an unctuous creamy golden dollop oozing from the nozzle onto a clean studio gradient.",
    page: "both"
  },
  {
    id: "work-39",
    title: "Aēsop Cedar & Citrus Lip Salve with Orange Peel",
    category: "commercial",
    categoryLabel: "Commercial",
    client: "Aēsop",
    imageSrc: "/images/work-39.png",
    featured: false,
    aspect: "portrait",
    description: "Aēsop Cedar & Citrus Lip Salve tube standing upright beside a freshly peeled curl of aromatic orange zest and clear glossy droplets of salve on a bright studio surface.",
    page: "both"
  },
  {
    id: "work-40",
    title: "Rhode Peptide Lip Tint & Morning Table",
    category: "skincare",
    categoryLabel: "Skincare",
    client: "Rhode Skin",
    imageSrc: "/images/work-40.png",
    featured: true,
    aspect: "portrait",
    description: "Rhode Peptide Lip Tint resting on a breakfast plate alongside artisan baguette crumbs, butter knife, and an espresso cup with a rich dark coffee spill on crimson red.",
    page: "both"
  }
];
