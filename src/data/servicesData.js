import implants from '../assets/img/implants.jpg';
import root from '../assets/img/root.jpg';
import cavityfilling from '../assets/img/cavityfilling.jpg';
import orthodic from '../assets/img/orthodic.jpg';
import teethwhite from '../assets/img/teethwhite.webp';
import wisdom from '../assets/img/wisdom.jpg';
import crowns from '../assets/img/crowns.jpg';
import pediatric from '../assets/img/pediatric.webp';



import veneer from '../assets/img/veneers.jpg';
import extraction from '../assets/img/teeth extraction.jpeg';
import zinc from '../assets/img/zincorniacrown.jpeg';
import cavity from '../assets/img/cavityfilling.jpg';
import aligner from '../assets/img/aligners.jpeg';
import dentures from '../assets/img/dentures.jpg';
// import wisdom from '../assets/img/wisdom';
import laser from '../assets/img/laser filling.jpeg'
import braces from '../assets/img/braces.jpeg';
import scaling from '../assets/img/scaling.jpg';
export const servicesData = [
  {
    id: 1,
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'A permanent and natural-looking solution to replace missing teeth and restore your beautiful smile.',
    image: implants,
    overview:
      'Dental implants are titanium posts surgically placed into the jawbone to act as artificial tooth roots. Once healed, they support crowns, bridges, or dentures that look and function like natural teeth.',
    benefits: [
      'Permanent, stable tooth replacement',
      'Preserves jawbone and facial structure',
      'Natural appearance and comfortable chewing',
      'No need to alter adjacent healthy teeth',
    ],
    procedure: [
      'Comprehensive exam and 3D imaging',
      'Implant placement under local anesthesia',
      'Healing period for osseointegration (3–6 months)',
      'Custom crown or prosthetic attachment',
    ],
    duration: '60–90 minutes per implant (placement visit)',
    recovery: 'Mild soreness for 3–5 days; full fusion over several months',
    idealFor: 'Adults with one or more missing teeth and adequate bone support',
  },
  {
    id: 2,
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    description: 'A precise procedure to save infected teeth and eliminate pain while preserving your natural tooth structure.',
    image: root,
    overview:
      'Root canal therapy removes infected or inflamed pulp from inside the tooth, cleans and seals the canals, and restores the tooth so it can function for years without extraction.',
    benefits: [
      'Relieves severe toothache quickly',
      'Saves your natural tooth',
      'Stops infection from spreading',
      'Restores normal biting and chewing',
    ],
    procedure: [
      'Digital X-rays and diagnosis',
      'Local anesthesia for comfort',
      'Removal of infected pulp and canal cleaning',
      'Sealing and placement of a protective crown',
    ],
    duration: '60–90 minutes (may require 1–2 visits)',
    recovery: 'Mild tenderness for 2–3 days; full function within a week',
    idealFor: 'Patients with deep decay, cracked teeth, or pulp infection',
  },
  {
    id: 3,
    slug: 'cavity-filling',
    title: 'Cavity Filling',
    description: 'High-quality, tooth-colored fillings used to repair decay and protect your teeth from further damage.',
    image: cavityfilling,
    overview:
      'We remove decayed tooth material and restore the tooth with durable composite resin that matches your natural tooth color for a seamless, mercury-free result.',
    benefits: [
      'Stops decay from progressing',
      'Tooth-colored, aesthetic finish',
      'Quick, minimally invasive treatment',
      'Restores strength for daily use',
    ],
    procedure: [
      'Examination and decay assessment',
      'Numbing if needed for comfort',
      'Removal of decayed tissue',
      'Layered composite filling and polishing',
    ],
    duration: '30–45 minutes per tooth',
    recovery: 'Resume normal activities immediately; avoid hard foods for 24 hours',
    idealFor: 'Anyone with cavities, chipped enamel, or minor tooth damage',
  },
  {
    id: 4,
    slug: 'orthodontics',
    title: 'Orthodontics',
    description: 'Expert alignment services, including braces and clear aligners, to give you perfectly straight teeth.',
    image: orthodic,
    overview:
      'Orthodontic treatment gradually moves teeth into ideal alignment using braces or clear aligners, improving bite function, oral hygiene access, and smile aesthetics.',
    benefits: [
      'Straighter, more confident smile',
      'Improved bite and jaw comfort',
      'Easier cleaning between aligned teeth',
      'Long-term oral health benefits',
    ],
    procedure: [
      'Consultation, photos, and digital scans',
      'Custom treatment plan creation',
      'Appliance fitting (braces or aligners)',
      'Regular adjustments and progress monitoring',
    ],
    duration: '12–24 months depending on case complexity',
    recovery: 'Mild pressure after adjustments; no downtime',
    idealFor: 'Children, teens, and adults with crowding, gaps, or bite issues',
  },
  {
    id: 5,
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments to remove stains and brighten your smile by several shades instantly.',
    image: teethwhite,
    overview:
      'In-office professional whitening uses safe, clinical-grade agents activated for fast results, lifting stains from coffee, tea, tobacco, and aging far more effectively than store-bought kits.',
    benefits: [
      'Noticeably whiter smile in one visit',
      'Safe, dentist-supervised treatment',
      'Even, natural-looking results',
      'Boosts confidence for special occasions',
    ],
    procedure: [
      'Shade assessment and gum protection',
      'Application of professional whitening gel',
      'Light activation for enhanced results',
      'Post-treatment care instructions',
    ],
    duration: '45–60 minutes',
    recovery: 'Temporary sensitivity for 24–48 hours; avoid staining foods briefly',
    idealFor: 'Adults with healthy teeth seeking a brighter, stain-free smile',
  },
  {
    id: 6,
    slug: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    description: 'Safe and comfortable surgical removal of impacted wisdom teeth to prevent crowding and future pain.',
    image: wisdom,
    overview:
      'When wisdom teeth are impacted, partially erupted, or causing infection, surgical extraction prevents pain, cyst formation, and damage to neighboring teeth.',
    benefits: [
      'Prevents crowding and misalignment',
      'Eliminates recurring pain and infection',
      'Reduces risk of cysts and gum disease',
      'Performed with modern pain management',
    ],
    procedure: [
      'Panoramic X-ray and surgical planning',
      'Sedation or local anesthesia options',
      'Careful extraction of impacted teeth',
      'Stitching and detailed aftercare guidance',
    ],
    duration: '30–60 minutes per tooth',
    recovery: 'Swelling for 3–5 days; full healing in 1–2 weeks',
    idealFor: 'Teens and adults with impacted or problematic wisdom teeth',
  },
  {
    id: 7,
    slug: 'crown-bridges',
    title: 'Crown & Bridges',
    description: 'Custom-made dental caps and bridges designed to strengthen damaged teeth and fill gaps seamlessly.',
    image: crowns,
    overview:
      'Crowns restore strength to weakened teeth, while bridges replace one or more missing teeth by anchoring to adjacent teeth or implants — restoring your smile and bite.',
    benefits: [
      'Restores chewing function and appearance',
      'Protects cracked or heavily filled teeth',
      'Fills gaps without removable dentures',
      'Durable, custom-shaded porcelain',
    ],
    procedure: [
      'Tooth preparation and digital impressions',
      'Temporary crown or bridge placement',
      'Lab fabrication of custom restoration',
      'Final fitting, adjustment, and cementation',
    ],
    duration: '2 visits over 1–2 weeks',
    recovery: 'Mild sensitivity for a few days; normal use within a week',
    idealFor: 'Patients with damaged, root-treated, or missing teeth',
  },
  {
    id: 8,
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Specialized and friendly dental care for children, ensuring a positive experience for our youngest patients.',
    image: pediatric,
    overview:
      'Our pediatric dental team creates a calm, fun environment for children while providing preventive cleanings, fluoride treatments, sealants, and gentle restorative care.',
    benefits: [
      'Child-friendly, anxiety-free visits',
      'Early cavity prevention and education',
      'Monitors growth and bite development',
      'Builds lifelong healthy dental habits',
    ],
    procedure: [
      'Gentle introduction and familiarization visit',
      'Exam, cleaning, and fluoride as needed',
      'Sealants for cavity-prone molars',
      'Parent guidance on home care routines',
    ],
    duration: '30–45 minutes per visit',
    recovery: 'No downtime; children resume activities immediately',
    idealFor: 'Infants through teens for routine and preventive dental care',
  },
  {
    id: 9,
    slug: 'aligners',
    title: 'Aligners',
    description: 'Discreet clear aligners that straighten teeth comfortably without traditional metal braces.',
    image: aligner,
    overview:
      'Clear aligners are custom-made, removable trays that gradually move teeth into proper alignment. They are virtually invisible, making them a popular choice for adults and teens who want a straighter smile without the look of fixed braces.',
    benefits: [
      'Nearly invisible during everyday wear',
      'Removable for eating, brushing, and flossing',
      'Smooth, comfortable fit with no wires',
      'Predictable results with digital treatment planning',
    ],
    procedure: [
      'Consultation, scans, and bite assessment',
      'Custom aligner series designed for your smile',
      'Wear aligners 20–22 hours per day as directed',
      'Progress checks and new tray sets every few weeks',
    ],
    duration: '6–18 months depending on alignment needs',
    recovery: 'Mild pressure when switching trays; no downtime',
    idealFor: 'Teens and adults with mild to moderate crowding, gaps, or bite concerns',
  },
  {
    id: 10,
    slug: 'braces',
    title: 'Braces',
    description: 'Traditional and modern braces for reliable, long-lasting teeth straightening and bite correction.',
    image: braces,
    overview:
      'Dental braces use brackets and wires to apply gentle, continuous pressure that moves teeth into ideal positions over time. At DentisTree, we offer effective orthodontic solutions tailored to children, teens, and adults for lasting alignment and improved oral function.',
    benefits: [
      'Highly effective for complex alignment cases',
      'Corrects bite issues and jaw alignment',
      'Durable, proven orthodontic treatment',
      'Customized adjustments throughout treatment',
    ],
    procedure: [
      'Orthodontic exam and X-rays',
      'Bracket and wire placement',
      'Regular tightening and progress visits',
      'Retainer fitting after active treatment',
    ],
    duration: '12–24 months on average',
    recovery: 'Mild soreness for 2–3 days after adjustments; no downtime',
    idealFor: 'Patients with crowding, spacing, overbite, underbite, or crossbite',
  },
  {
    id: 11,
    slug: 'scaling',
    title: 'Scaling',
    description: 'Professional deep cleaning to remove plaque, tartar, and stains for healthier gums and fresher breath.',
    image: scaling,
    overview:
      'Scaling (professional dental cleaning) removes hardened tartar and bacterial buildup above and below the gum line that brushing alone cannot reach. Regular scaling helps prevent gum disease, bad breath, and tooth loss while keeping your smile clean and bright.',
    benefits: [
      'Prevents gum disease and bleeding gums',
      'Removes stubborn tartar and surface stains',
      'Fresher breath and cleaner-feeling teeth',
      'Supports long-term oral and overall health',
    ],
    procedure: [
      'Gum health assessment and examination',
      'Ultrasonic scaling to remove tartar',
      'Polishing to smooth tooth surfaces',
      'Personalized home-care and recall schedule',
    ],
    duration: '30–60 minutes per session',
    recovery: 'Mild sensitivity for 24 hours; resume normal activities immediately',
    idealFor: 'All ages — especially those with tartar buildup, gum inflammation, or routine preventive care',
  },
  {
    id: 12,
    slug: 'veneers',
    title: 'Veneers',
    description: 'Ultra-thin porcelain shells that transform chipped, stained, or uneven teeth into a flawless smile.',
    image: veneer,
    overview:
      'Dental veneers are custom-crafted porcelain or composite shells bonded to the front of teeth to improve color, shape, size, and symmetry. They deliver a natural, Hollywood-quality smile makeover with minimal tooth preparation.',
    benefits: [
      'Instant improvement in smile aesthetics',
      'Stain-resistant, natural-looking finish',
      'Corrects chips, gaps, and discoloration',
      'Long-lasting cosmetic enhancement',
    ],
    procedure: [
      'Smile design consultation and shade selection',
      'Minimal enamel preparation if required',
      'Impressions and custom veneer fabrication',
      'Bonding and final polish for a seamless look',
    ],
    duration: '2 visits over 1–2 weeks',
    recovery: 'Mild sensitivity for a few days; normal use within a week',
    idealFor: 'Adults seeking a cosmetic upgrade for stained, worn, or misshapen front teeth',
  },
  {
    id: 13,
    slug: 'zirconia-crown',
    title: 'Zirconia Crown',
    description: 'Premium metal-free crowns offering exceptional strength, biocompatibility, and a natural tooth-like appearance.',
    image: zinc,
    overview:
      'Zirconia crowns are made from high-strength ceramic that mimics the translucency of natural enamel while withstanding heavy biting forces. They are an excellent choice for front and back teeth when durability and aesthetics both matter.',
    benefits: [
      'Metal-free and biocompatible',
      'Extremely strong and fracture-resistant',
      'Natural color match and lifelike appearance',
      'Ideal for patients with metal sensitivities',
    ],
    procedure: [
      'Tooth evaluation and preparation',
      'Digital or conventional impressions',
      'Temporary crown while lab crafts zirconia restoration',
      'Final fit, bite adjustment, and permanent cementation',
    ],
    duration: '2 visits over 5–10 days',
    recovery: 'Mild sensitivity for 2–3 days; full function within a week',
    idealFor: 'Patients needing crowns on front or back teeth who want maximum strength and aesthetics',
  },
  {
    id: 14,
    slug: 'extractions',
    title: 'Extractions',
    description: 'Gentle, safe tooth removal when a tooth cannot be saved — performed with modern anesthesia and care.',
    image: extraction,
    overview:
      'Tooth extraction is recommended when a tooth is severely decayed, fractured, infected, or causing crowding. Our team performs simple and surgical extractions with careful pain control and clear aftercare so healing is as smooth as possible.',
    benefits: [
      'Relieves pain and stops spreading infection',
      'Prevents damage to neighboring teeth',
      'Creates space for orthodontics or implants',
      'Comfort-focused procedure with local anesthesia',
    ],
    procedure: [
      'Examination and X-ray to plan extraction',
      'Numbing for a pain-free experience',
      'Careful loosening and removal of the tooth',
      'Gauze packing and detailed aftercare instructions',
    ],
    duration: '15–45 minutes depending on complexity',
    recovery: 'Mild swelling for 2–3 days; soft diet for 24–48 hours; full healing in 1–2 weeks',
    idealFor: 'Patients with non-restorable teeth, severe decay, trauma, or orthodontic space needs',
  },
  {
    id: 15,
    slug: 'laser-filling',
    title: 'Laser Filling',
    description: 'Advanced laser technology for precise, comfortable cavity treatment with minimal drilling and faster healing.',
    image: laser,
    overview:
      'Laser fillings use focused light energy to remove decay and prepare the tooth with less vibration, noise, and discomfort than traditional drills. The result is a conservative, tooth-colored restoration that preserves more healthy enamel.',
    benefits: [
      'Minimally invasive with less drilling',
      'Reduced anxiety for needle- or drill-sensitive patients',
      'Precise decay removal with faster recovery',
      'Tooth-colored composite for a natural finish',
    ],
    procedure: [
      'Cavity detection and treatment planning',
      'Laser removal of decayed tissue',
      'Disinfection and bonding preparation',
      'Layered composite filling and polishing',
    ],
    duration: '20–40 minutes per tooth',
    recovery: 'Resume normal activities immediately; avoid very hard foods for 24 hours',
    idealFor: 'Patients with small to moderate cavities who prefer a modern, gentle filling experience',
  },
  {
    id: 16,
    slug: 'dentures',
    title: 'Dentures',
    description: 'Custom full and partial dentures to restore your smile, speech, and ability to eat comfortably.',
    image: dentures,
    overview:
      'Dentures are removable prosthetic teeth designed to replace missing teeth and surrounding tissue. Whether you need a full set or a partial denture to fill specific gaps, our team creates comfortable, natural-looking solutions tailored to your face shape and bite.',
    benefits: [
      'Restores chewing ability and clear speech',
      'Supports facial muscles for a youthful appearance',
      'Custom fit for daily comfort and confidence',
      'Affordable option for multiple missing teeth',
    ],
    procedure: [
      'Oral exam, impressions, and bite registration',
      'Try-in of wax or digital mock-up for fit and aesthetics',
      'Fabrication of custom full or partial denture',
      'Final delivery, adjustment, and care instructions',
    ],
    duration: '3–5 visits over 2–4 weeks',
    recovery: 'Short adaptation period of 1–2 weeks; follow-up adjustments as needed',
    idealFor: 'Patients missing several or all teeth who want a removable, cost-effective smile restoration',
  },
];

export const getServiceBySlug = (slug) =>
  servicesData.find((s) => s.slug === slug);

export const getRelatedServices = (currentSlug, limit = 3) =>
  servicesData.filter((s) => s.slug !== currentSlug).slice(0, limit);
