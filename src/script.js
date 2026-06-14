// ========== DATA ==========
const categories = [
  { id: 1, name: "Needle Felt(Needle Punched Felt Filter Fabric)", slug: "pulse-jet-filter-fabrics", icon: "zap", image: "src/assets/images/c1p51.webp", description: "Specially woven for pulse-jet cleaning systems with excellent dust release properties and long service life.", shortDesc: "Needle felt roll goods for Polyester, Acrylic, PPS, Aramid, Fiberglass, PTFE, p84" },
  { id: 2, name: "PTFE Product", slug: "bag-house-filter-media", icon: "home", image: "src/assets/images/c1p11.webp", description: "Complete range of filter bag media for industrial baghouse dust collectors in various weights and treatments.", shortDesc: "Supply a range of related PTFE products, such as PTFE staple fiber, PTFE filament, PTFE scrim, PTFE membrane, PTFE sewing..." },
  { id: 4, name: "Scrim", slug: "ptfe-membrane-laminated", icon: "layers", image: "src/assets/images/c4p71.webp", description: "Fiberglass fabrics laminated with PTFE membrane for near-zero emission performance.", shortDesc: "Near-zero emission surface filtration" },
  { id: 0, name: "Fiberglass Filter Fabric", slug: "high-temperature-filter-bags", icon: "flame", image: "src/assets/images/c0p11.webp", description: "Engineered for continuous operation at extreme temperatures up to 280°C. Ideal for cement, steel, and power generation industries.", shortDesc: "For extreme heat applications up to 280°C" },
  { id: 3, name: "Filter Bag Accessories", slug: "flue-gas-filter-fabrics", icon: "cloud", image: "src/assets/images/c1p21.webp", description: "Acid and alkali resistant filter fabrics for flue gas desulfurization and waste incineration.", shortDesc: "For flue gas & incineration systems" },
];

const products = [
  { id: 0, name: "750g/m2 woven fiberglass fabric 22oz", categoryId: 0, image: "src/assets/images/c0p11.webp", images: ["src/assets/images/c0p11.webp", "src/assets/images/c0p12.webp", "src/assets/images/c0p13.webp", "src/assets/images/c0p14.webp"], shortDesc: "Woven fiberglass is a kind of filter material for high temperature application.", description: "Woven fiberglass is a kind of filter material for high temperature application. It's made by drawing-spinning-warping-texturizing-weaving-finishing-laminating processes. Because of its excellent performance like high temperature resistance (260℃), high tensile strength, high oxygen and corrosion resistance and long service lifetime, it can be widely used in dust filtration in cement plant, power plant, carbon black plant, steel plant, incinerator, etc.", specs: { "Material": "E-Fiberglass + SiO₂ Treatment", "Operating Temp": "260°C Continuous / 300°C Peak", "Weight": "800 g/m²", "Thickness": "2.8 mm", "Air Permeability": "10-15 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 3000 N/5cm", "Tensile Strength (Weft)": "> 2500 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Silica treatment for enhanced heat resistance", "Low shrinkage under thermal cycling", "Excellent acid resistance", "Smooth surface for easy dust release", "Custom sizes available"], applications: ["Cement kiln dust collection", "Lime production", "Carbon black industry", "Metal processing", "Power generation"] },
  { id: 1, name: "470g/m2 glass fiber cloth for reverse air filter bag 14oz", categoryId: 0, image: "src/assets/images/c0p21.webp", images: ["src/assets/images/c0p21.webp", "src/assets/images/c0p22.webp", "src/assets/images/c0p23.webp", "src/assets/images/c0p24.webp"], shortDesc: "Ultra high-temp fiberglass bag rated for 280°C continuous with PTFE impregnation.", description: "The FT-850 Super Heat features a dual-treatment process combining silica coating with PTFE impregnation, delivering unmatched performance at sustained temperatures of 280°C with peak capability up to 320°C.", specs: { "Material": "E-Fiberglass + SiO₂ + PTFE", "Operating Temp": "280°C Continuous / 320°C Peak", "Weight": "850 g/m²", "Thickness": "3.0 mm", "Air Permeability": "8-12 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 3500 N/5cm", "Tensile Strength (Weft)": "> 2800 N/5cm", "Filtration Efficiency": "> 99.95% @ 1μm", "Available Width": "Customizable up to 2.4m" }, features: ["Dual silica + PTFE treatment", "Self-cleaning surface", "Extended service life", "Superior dimensional stability", "Chemical resistant"], applications: ["Steel sinter plants", "Glass manufacturing", "Waste incineration", "Petroleum coke calcining", "Ferrous metal processing"] },
  { id: 2, name: "Polyester (PE) needle felt", categoryId: 1, image: "src/assets/images/c1p11.webp", images: ["src/assets/images/c1p11.webp", "src/assets/images/c1p12.webp", "src/assets/images/c1p13.webp", "src/assets/images/c1p14.webp"], shortDesc: "Lightweight fiberglass fabric optimized for high-frequency pulse-jet cleaning.", description: "The PJ-550 is specifically engineered for pulse-jet dust collection systems where frequent cleaning cycles demand exceptional flex resistance and dust release properties.", specs: { "Material": "E-Fiberglass + Anti-acid Treatment", "Operating Temp": "240°C Continuous / 270°C Peak", "Weight": "550 g/m²", "Thickness": "1.9 mm", "Air Permeability": "15-20 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2200 N/5cm", "Tensile Strength (Weft)": "> 1800 N/5cm", "Filtration Efficiency": "> 99.8% @ 2μm", "Available Width": "Customizable up to 2.0m" }, features: ["Optimized for pulse-jet systems", "Excellent flex fatigue resistance", "Rapid dust cake release", "Low pressure drop", "Cost-effective"], applications: ["General dust collection", "Wood processing", "Food processing", "Pharmaceutical manufacturing", "Grain handling"] },
  { id: 3, name: "Anti-static needle felt", categoryId: 1, image: "src/assets/images/c1p21.webp", images: ["src/assets/images/c1p21.webp", "src/assets/images/c1p22.webp", "src/assets/images/c1p23.webp", "src/assets/images/c1p24.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 4, name: "PTFE scrim", categoryId: 2, image: "src/assets/images/c2p11.webp", images: ["src/assets/images/c2p11.webp", "src/assets/images/c2p12.webp", "src/assets/images/c2p13.webp", "src/assets/images/c2p14.webp"], shortDesc: "Versatile baghouse filter media for a wide range of industrial applications.", description: "The BH-600 Standard is our most versatile baghouse filter media, delivering reliable performance across a broad spectrum of industrial applications with multiple treatment options.", specs: { "Material": "E-Fiberglass, Various Treatments", "Operating Temp": "220°C Continuous / 260°C Peak", "Weight": "600 g/m²", "Thickness": "2.1 mm", "Air Permeability": "12-18 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2500 N/5cm", "Tensile Strength (Weft)": "> 2000 N/5cm", "Filtration Efficiency": "> 99.85% @ 2μm", "Available Width": "Customizable up to 2.2m" }, features: ["Versatile multi-application", "Multiple treatment options", "Consistent quality", "Easy fabrication", "Competitive pricing"], applications: ["General baghouse filtration", "Building materials", "Chemical processing", "Metallurgy", "Paper industry"] },
  { id: 5, name: "PTFE membrane", categoryId: 2, image: "src/assets/images/c2p21.webp", images: ["src/assets/images/c2p21.webp", "src/assets/images/c2p22.webp", "src/assets/images/c2p23.webp", "src/assets/images/c2p24.webp"], shortDesc: "Premium heavyweight baghouse media for maximum filtration efficiency.", description: "The BH-750 Premium combines a dense weave structure with advanced multi-stage treatment for the highest filtration efficiency and longest service life.", specs: { "Material": "E-Fiberglass + Multi-stage Treatment", "Operating Temp": "250°C Continuous / 280°C Peak", "Weight": "750 g/m²", "Thickness": "2.6 mm", "Air Permeability": "10-14 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 3200 N/5cm", "Tensile Strength (Weft)": "> 2600 N/5cm", "Filtration Efficiency": "> 99.95% @ 1μm", "Available Width": "Customizable up to 2.4m" }, features: ["Maximum filtration efficiency", "Extended bag life", "Multi-stage treatment", "Low pressure drop", "Premium QA"], applications: ["Power generation", "Hazardous waste incineration", "Cement grinding", "Gypsum production", "Emission control"] },
  { id: 8, name: "Polyester scrim", categoryId: 4, image: "src/assets/images/c4p11.jpg", images: ["src/assets/images/c4p11.jpg", "src/assets/images/c4p12.jpg", "src/assets/images/c4p13.jpg", "src/assets/images/c4p14.jpg"], shortDesc: "Premium PTFE membrane laminated fabric for critical emission control.", description: "The PM-900 features high-density fiberglass laminated with ePTFE membrane delivering surface filtration with exceptional efficiency for sub-micron particles.", specs: { "Material": "High-density Fiberglass + ePTFE", "Operating Temp": "260°C Continuous / 300°C Peak", "Weight": "900 g/m² + membrane", "Thickness": "3.2 mm", "Air Permeability": "5-8 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 3800 N/5cm", "Tensile Strength (Weft)": "> 3000 N/5cm", "Filtration Efficiency": "> 99.995% @ 0.3μm", "Available Width": "Customizable up to 2.4m" }, features: ["True surface filtration", "Sub-micron capture", "Low pressure drop", "Hydrophobic membrane", "Emission compliance"], applications: ["Power plant emission control", "Cement emission standards", "Steel particulate control", "Pharmaceutical clean rooms", "Food processing"] },
  { id: 6, name: "Bag Cap", categoryId: 3, image: "src/assets/images/c3p11.webp", images: ["src/assets/images/c3p11.webp", "src/assets/images/c3p12.webp", "src/assets/images/c3p13.webp", "src/assets/images/c3p14.webp"], shortDesc: "Acid-alkali resistant fiberglass for flue gas desulfurization systems.", description: "The FG-650 is designed for harsh chemical environments of FGD and waste incineration gas streams with protection against SO₂, SO₃, HCl, and NOx.", specs: { "Material": "E-Fiberglass + Acid-Alkali Treatment", "Operating Temp": "200°C Continuous / 240°C Peak", "Weight": "650 g/m²", "Thickness": "2.3 mm", "Air Permeability": "11-15 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2600 N/5cm", "Tensile Strength (Weft)": "> 2100 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Superior acid-alkali resistance", "FGD optimized", "Hydrophobic option", "Condensation resistant", "Long service life"], applications: ["Flue gas desulfurization", "Waste-to-energy", "Coal-fired power", "Chemical incineration", "Biomass combustion"] },
  { id: 7, name: "Revese air filter bag accessaries", categoryId: 3, image: "src/assets/images/c3p21.webp", images: ["src/assets/images/c3p21.webp", "src/assets/images/c3p22.webp", "src/assets/images/c3p23.webp", "src/assets/images/c3p24.webp"], shortDesc: "Next-gen flue gas fabric with PTFE membrane for ultra-low emissions.", description: "The FG-700 Ultra combines acid-resistant fiberglass with ePTFE membrane lamination for near-zero particulate emissions from challenging flue gas streams.", specs: { "Material": "E-Fiberglass + Acid Treatment + ePTFE", "Operating Temp": "220°C Continuous / 260°C Peak", "Weight": "700 g/m² + membrane", "Thickness": "2.5 mm", "Air Permeability": "6-10 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2300 N/5cm", "Filtration Efficiency": "> 99.99% @ 0.3μm", "Available Width": "Customizable up to 2.2m" }, features: ["ePTFE surface filtration", "Ultra-low emissions", "Near-zero dust penetration", "Easy cake release", "Emission compliance"], applications: ["Municipal waste incineration", "Hazardous waste", "Medical waste", "Semiconductor exhaust", "Nuclear ventilation"] },
  { id: 9, name: "Polypropylene scrim", categoryId: 4, image: "src/assets/images/c4p21.jpg", images: ["src/assets/images/c4p21.jpg", "src/assets/images/c4p22.jpg", "src/assets/images/c4p23.jpg", "src/assets/images/c4p24.jpg"], shortDesc: "Chemically treated fiberglass with superior acid and hydrolysis resistance.", description: "The AR-580 Acid Shield features deep-penetrating acid treatment creating a protective barrier against sulfuric acid, hydrochloric acid, and other corrosive compounds.", specs: { "Material": "E-Fiberglass + Deep Acid Treatment", "Operating Temp": "220°C Continuous / 260°C Peak", "Weight": "580 g/m²", "Thickness": "2.0 mm", "Air Permeability": "14-18 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2400 N/5cm", "Tensile Strength (Weft)": "> 1900 N/5cm", "Filtration Efficiency": "> 99.85% @ 2μm", "Available Width": "Customizable up to 2.0m" }, features: ["Deep-penetrating treatment", "Hydrolysis resistant", "Moisture tolerant", "Cost-effective", "Proven performance"], applications: ["Coal-fired boilers", "Sulfuric acid plants", "Chemical processing", "Petrochemical refining", "Waste gas treatment"] },
  { id: 10, name: "Homopolymer acrylic scrim", categoryId: 4, image: "src/assets/images/c4p31.jpg", images: ["src/assets/images/c4p31.jpg", "src/assets/images/c4p32.jpg", "src/assets/images/c4p33.jpg", "src/assets/images/c4p34.jpg"], shortDesc: "Advanced acid-resistant fabric with PTFE coating for extreme environments.", description: "The AR-720 Advanced combines deep-penetrating acid treatment with PTFE surface coating for maximum chemical protection in aggressive environments.", specs: { "Material": "E-Fiberglass + Acid + PTFE Coating", "Operating Temp": "240°C Continuous / 280°C Peak", "Weight": "720 g/m²", "Thickness": "2.5 mm", "Air Permeability": "10-14 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 3000 N/5cm", "Tensile Strength (Weft)": "> 2400 N/5cm", "Filtration Efficiency": "> 99.95% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Dual acid + PTFE protection", "Extreme chemical resistance", "Moisture resistant", "Self-cleaning surface", "Maximum service life"], applications: ["Waste incineration", "Chemical plant exhaust", "Metal smelting", "Paper mill recovery", "Refinery FCC"] },
  { id: 11, name: "340g/m2 woven fiberglass fabric 9oz", categoryId: 0, image: "src/assets/images/c0p31.webp", images: ["src/assets/images/c0p31.webp", "src/assets/images/c0p32.webp", "src/assets/images/c0p33.webp", "src/assets/images/c0p34.webp"], shortDesc: "Mid-weight high-temp bag balancing performance and cost-effectiveness.", description: "The FT-780 fills the gap between standard and premium offerings with balanced weight-to-performance ratio at a competitive price point.", specs: { "Material": "E-Fiberglass + SiO₂ Treatment", "Operating Temp": "240°C Continuous / 270°C Peak", "Weight": "780 g/m²", "Thickness": "2.6 mm", "Air Permeability": "11-15 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2900 N/5cm", "Tensile Strength (Weft)": "> 2300 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Balanced cost-performance", "Silica heat treatment", "Good chemical resistance", "Dimensional stability", "Standard lead time"], applications: ["Cement clinker cooling", "Quicklime production", "Foundry", "Brick manufacturing", "Aggregate processing"] },
  { id: 12, name: "Glass fiber filter cloth high temperature resistant for industrial dust collector", categoryId: 0, image: "src/assets/images/c0p41.webp", images: ["src/assets/images/c0p41.webp", "src/assets/images/c0p42.webp", "src/assets/images/c0p43.webp", "src/assets/images/c0p44.webp"], shortDesc: "Mid-weight high-temp bag balancing performance and cost-effectiveness.", description: "The FT-780 fills the gap between standard and premium offerings with balanced weight-to-performance ratio at a competitive price point.", specs: { "Material": "E-Fiberglass + SiO₂ Treatment", "Operating Temp": "240°C Continuous / 270°C Peak", "Weight": "780 g/m²", "Thickness": "2.6 mm", "Air Permeability": "11-15 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2900 N/5cm", "Tensile Strength (Weft)": "> 2300 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Balanced cost-performance", "Silica heat treatment", "Good chemical resistance", "Dimensional stability", "Standard lead time"], applications: ["Cement clinker cooling", "Quicklime production", "Foundry", "Brick manufacturing", "Aggregate processing"] },
  { id: 13, name: "Blended Polyester Felt with Anti Static Fiber Mixed", categoryId: 1, image: "src/assets/images/c1p31.webp", images: ["src/assets/images/c1p31.webp", "src/assets/images/c1p32.webp", "src/assets/images/c1p33.webp", "src/assets/images/c1p34.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 14, name: "Polypropylene (PP) Needle Felt", categoryId: 1, image: "src/assets/images/c1p41.webp", images: ["src/assets/images/c1p41.webp", "src/assets/images/c1p42.webp", "src/assets/images/c1p43.webp", "src/assets/images/c1p44.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 15, name: "Fiberglass (FMS) needle felt", categoryId: 1, image: "src/assets/images/c1p51.webp", images: ["src/assets/images/c1p51.webp", "src/assets/images/c1p52.webp", "src/assets/images/c1p53.webp", "src/assets/images/c1p54.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 16, name: "PTFE (Teflon) needle felt", categoryId: 1, image: "src/assets/images/c1p61.webp", images: ["src/assets/images/c1p61.webp", "src/assets/images/c1p62.webp", "src/assets/images/c1p63.webp", "src/assets/images/c1p64.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 17, name: "PPS (Ryton) needle felt", categoryId: 1, image: "src/assets/images/c1p71.webp", images: ["src/assets/images/c1p71.webp", "src/assets/images/c1p72.webp", "src/assets/images/c1p73.webp", "src/assets/images/c1p74.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 18, name: "Aramid (Nomex) needle felt", categoryId: 1, image: "src/assets/images/c1p81.webp", images: ["src/assets/images/c1p81.webp", "src/assets/images/c1p82.webp", "src/assets/images/c1p83.webp", "src/assets/images/c1p84.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 19, name: "Nomex Needle Felt Filter Fabric", categoryId: 1, image: "src/assets/images/c1p91.jpeg", images: ["src/assets/images/c1p91.jpeg", "src/assets/images/c1p92.jpeg", "src/assets/images/c1p93.jpeg", "src/assets/images/c1p94.jpeg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 20, name: "Needle Felt with PTFE Membrane", categoryId: 1, image: "src/assets/images/c1p101.jpeg", images: ["src/assets/images/c1p101.jpeg", "src/assets/images/c1p102.jpeg", "src/assets/images/c1p103.jpeg", "src/assets/images/c1p104.jpeg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 21, name: "PTFE & P84 Needle Felt Filter Fabric", categoryId: 1, image: "src/assets/images/c1p111.jpeg", images: ["src/assets/images/c1p111.jpeg", "src/assets/images/c1p112.jpeg", "src/assets/images/c1p113.jpeg", "src/assets/images/c1p114.jpeg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 22, name: "Acrylic Needle Felt Filter Fabric", categoryId: 1, image: "src/assets/images/c1p121.jpeg", images: ["src/assets/images/c1p121.jpeg", "src/assets/images/c1p122.jpeg", "src/assets/images/c1p123.jpeg", "src/assets/images/c1p124.jpeg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 23, name: "PTFE Sewing Thread", categoryId: 2, image: "src/assets/images/c2p31.jpeg", images: ["src/assets/images/c2p31.jpeg", "src/assets/images/c2p32.jpeg", "src/assets/images/c2p33.jpeg", "src/assets/images/c2p34.jpeg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 24, name: "PTFE (Teflon) needle felt", categoryId: 2, image: "src/assets/images/c2p41.webp", images: ["src/assets/images/c2p41.webp", "src/assets/images/c2p42.webp", "src/assets/images/c2p43.webp", "src/assets/images/c2p44.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 25, name: "Anti-static scrim", categoryId: 4, image: "src/assets/images/c4p41.jpg", images: ["src/assets/images/c4p41.jpg", "src/assets/images/c4p42.jpg", "src/assets/images/c4p43.jpg", "src/assets/images/c4p44.jpg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 26, name: "PPS scrim", categoryId: 4, image: "src/assets/images/c4p51.jpg", images: ["src/assets/images/c4p51.jpg", "src/assets/images/c4p52.jpg", "src/assets/images/c4p53.jpg", "src/assets/images/c4p54.jpg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 27, name: "Aramid (Nomex) scrim", categoryId: 4, image: "src/assets/images/c4p61.jpg", images: ["src/assets/images/c4p61.jpg", "src/assets/images/c4p62.jpg", "src/assets/images/c4p63.jpg", "src/assets/images/c4p64.jpg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 28, name: "PTFE scrim", categoryId: 4, image: "src/assets/images/c4p71.webp", images: ["src/assets/images/c4p71.webp", "src/assets/images/c4p72.webp", "src/assets/images/c4p73.webp", "src/assets/images/c4p74.webp"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
  { id: 29, name: "P84 scrim", categoryId: 4, image: "src/assets/images/c4p81.jpg", images: ["src/assets/images/c4p81.jpg", "src/assets/images/c4p82.jpg", "src/assets/images/c4p83.jpg", "src/assets/images/c4p84.jpg"], shortDesc: "Heavy-duty pulse jet fabric for abrasive dust and high air-to-cloth ratios.", description: "The PJ-700 Heavy Duty is built for the toughest pulse-jet applications where abrasive dust, high filtration velocities, and aggressive cleaning pressures are the norm.", specs: { "Material": "E-Fiberglass + PTFE+Sb₂O₃", "Operating Temp": "260°C Continuous / 290°C Peak", "Weight": "700 g/m²", "Thickness": "2.4 mm", "Air Permeability": "12-16 m³/m²/min @ 200Pa", "Tensile Strength (Warp)": "> 2800 N/5cm", "Tensile Strength (Weft)": "> 2200 N/5cm", "Filtration Efficiency": "> 99.9% @ 1μm", "Available Width": "Customizable up to 2.2m" }, features: ["Abrasion resistant weave", "High air-to-cloth ratio", "Enhanced PTFE treatment", "Anti-static option", "Superior bag-to-cage compatibility"], applications: ["Mining and minerals", "Foundry operations", "Coal handling", "Asphalt production", "Recycling facilities"] },
];

const blogPosts = [
  { id: 0, image: "src/assets/images/blog/blog1.webp", title: "Fiberglass filter fabric is a special material made from fiberglass. It helps remove tiny particles and dirt from air or liquids. You can find it in places like cement factories, power plants, metal factories, and chemical plants. It works well because it can handle very hot temperatures and strong chemicals. This material is important because it makes the air cleaner and keeps machines safe.", date: "March 24, 2026", excerpt: "The worldwide fiberglass filter fabrics market might reach about $20 billion by 2028.", category: "Fiberglass" },
  { id: 1, title: "How PTFE Membrane Lamination Achieves Near-Zero Emissions", image: "src/assets/images/blog/blog2.webp", excerpt: "When you look at polyester filters and Fiberglass Filter Fabric, you see that polyester filters usually work better for cleaning air. Polyester filters can catch over 95% of particles at first. They can also hold almost twice as many particles as fiberglass filters. Polyester filters cause less pressure drop, so your air system runs smoother. If you want to save money and only need basic air cleaning, fiberglass is a good choice. You should think about what is most important to you. Do you want high air cleaning, longer filter use, or less air system care? Maybe you do not want to change filters often or you worry about allergies. The best filter depends on what you need for air quality and where you use it. Always check what your air system needs before you pick a filter.", date: "March 20, 2026", category: "Fiberglass" },
  { id: 2, title: "When you choose fiberglass filter fabric, you have to think about a few key things. You should look at the operating temperature, chemical resistance, dust type, air-to-cloth ratio, and if the filter fits your baghouse system. If you match these things to your workplace, you can stop problems during filtration.", image: "src/assets/images/blog/blog3.webp", date: "March 28, 2026", excerpt: "Fiberglass mesh filters are made by weaving or layering thin glass fibers. These fibers make the material strong and bendy. Most industrial fiberglass mesh filters have fibers that are 2 to 4 microns wide.", category: "FiterFebric" },
  { id: 3, title: "PTFE needle felt is made from 100% PTFE fibers, which are mechanically bonded together using a needle-punching process. This creates a strong, durable, and stable three-dimensional structure that is resistant to wear and abrasion. The resulting material offers excellent filtration capabilities, with fine pores that effectively trap particles while maintaining airflow. The unique properties of PTFE, such as its non-stick surface, high chemical resistance, and outstanding temperature tolerance, make PTFE needle felt a premium choice for filtration in demanding environments.", image: "src/assets/images/blog/blog4.webp", excerpt: "How changing environmental regulations are driving innovation in filter media technology.", date: "March 02, 2026", category: "PTFE" },
  { id: 4, title: "When selecting filter media, understanding its temperature tolerance is crucial. Polyester needle felt typically withstands 130–135°C continuously and can endure 149–150°C for short-term exposure. These temperature limits are vital for ensuring the filter’s longevity and performance. Continuous temperature ratings indicate how long the material can perform effectively under constant heat, while surge temperatures represent the short bursts of higher heat the media can tolerate.", image: "src/assets/images/blog/blog5.webp", excerpt: "An in-depth look at unique filtration challenges in cement manufacturing and specialized fiberglass solutions.", date: "April 03, 2026", category: "Polyester" },
  { id: 5, title: "In industrial filtration systems, reverse air filter bags play a vital role in capturing dust and particulate matter from exhaust gases to maintain clean air and ensure environmental compliance. These bags are cleaned using a reverse air flow method, which helps dislodge accumulated dust and keep the filtration system running efficiently. ", image: "src/assets/images/blog/blog6.webp", excerpt: "Step-by-step guidance on correct installation techniques to prevent premature failure.", date: "January 20, 2026", category: "Filter Bags" }
];

// ========== CAROUSEL ==========
let currentSlide = 0;
const totalSlides = 3;
let slideInterval;
const heroTexts = [
  {
    heading: 'High Performance <span class="gold-gradient">Technical Textiles</span>',
    sub: 'Delivering premium technical textile solutions engineered for durability, efficiency, and reliable performance across diverse industrial applications worldwide.'
  },
  {
    heading: 'Filter fabric <span class="gold-gradient">For air filtration</span>',
    sub: 'Advanced filter fabrics designed to ensure high filtration efficiency, low emissions, and long-lasting performance in demanding industrial environments.'
  },
  {
    heading: 'High temperature <span class="gold-gradient">Fabrics for thermal</span>',
    sub: 'Specialized high-temperature fabrics crafted to withstand extreme heat conditions while maintaining strength, stability, and superior thermal protection.'
  }
];

function goToSlide(n) { currentSlide = n; updateCarousel(); resetInterval(); }
function nextSlide() { goToSlide((currentSlide + 1) % totalSlides); }
function prevSlide() { goToSlide((currentSlide - 1 + totalSlides) % totalSlides); }

function updateCarousel() {
  document.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  const c = document.getElementById('heroContent');
  if (c && heroTexts[currentSlide]) {
    c.querySelector('h6').innerHTML = heroTexts[currentSlide].heading;
    c.querySelector('p').textContent = heroTexts[currentSlide].sub;
    c.querySelectorAll('.hero-text-line').forEach((el, i) => { el.style.animation = 'none'; el.offsetHeight; el.style.animation = `heroTextReveal 1s cubic-bezier(0.23,1,0.32,1) ${0.3 + i * 0.2}s forwards`; });
  }
}
function resetInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5500); }
resetInterval();

// ========== NAVIGATION ==========
let currentPage = 'home';

function navigateTo(page, data) {
  document.getElementById('page-home').classList.add('hidden');
  document.getElementById('page-product').classList.add('hidden');
  document.getElementById('page-category').classList.add('hidden');
  if (page === 'home') document.getElementById('page-home').classList.remove('hidden');
  else if (page === 'product') { renderProductPage(data); document.getElementById('page-product').classList.remove('hidden'); }
  else if (page === 'category') { renderCategoryPage(data); document.getElementById('page-category').classList.remove('hidden'); }
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
  setTimeout(() => { initScrollAnimations(); }, 100);
}

function scrollToSection(id) {
  if (currentPage !== 'home') { navigateTo('home'); setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150); }
  else { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

function openProduct(id) { const p = products.find(x => x.id === id); if (p) navigateTo('product', p); }
function openCategory(id) { const c = categories.find(x => x.id === id); if (c) navigateTo('category', c); }
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('menuBackdrop');
  menu.classList.toggle('open');
  backdrop.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

const productDescriptions = {
  0: `<div class="mb-10">
            <p class="text-gray-500 leading-relaxed">Weight: 750g/m2 (22oz)</p>
            <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
            <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
            <p class="text-gray-500 leading-relaxed">Regular width: 1.55m, 1.65m, 1.73m, 1.83m, or customized</p>
            <p class="text-gray-500 leading-relaxed">Roll length: 230m/roll, or customized</p>
        </div>

        <div class="mb-10">
            <p class="text-gray-500 leading-relaxed">Weight: 470g/m2 (14oz)</p>
            <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
            <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
            <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
            <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
        </div>

        <div class="mb-10">
            <p class="text-gray-500 leading-relaxed">Weight: 340g/m2 (9oz)</p>
            <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
            <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
            <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
            <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
        </div>`,
  1: `<div class="mb-10">
            <p class="text-gray-500 leading-relaxed">Weight: 470g/m2 (14oz)</p>
            <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
            <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
            <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
            <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
        </div>`,
  2: `<div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Weight: 340g/m2 (9oz)</p>
          <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
          <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
          <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
      </div>`,
  3: `<div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Weight: 750g/m2 (22oz)</p>
          <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
          <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 1.55m, 1.65m, 1.73m, 1.83m, or customized</p>
          <p class="text-gray-500 leading-relaxed">Roll length: 230m/roll, or customized</p>
      </div>

      <div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Weight: 470g/m2 (14oz)</p>
          <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
          <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
          <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
      </div>

      <div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Weight: 340g/m2 (9oz)</p>
          <p class="text-gray-500 leading-relaxed">Finish: PTFE finish, Acid resistant finish, Silicone Graphite, PTFE finish</p>
          <p class="text-gray-500 leading-relaxed">Membrane: with or without e-PTFE membrane</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 0.98m, 1m, 1.016m, 2m, 2.032m, or customized</p>
          <p class="text-gray-500 leading-relaxed">Roll length: 300m/roll, or customized</p>
      </div>`,
  4: `<div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Layer: Polyester</p>
          <p class="text-gray-500 leading-relaxed">Scrim: Polyester</p>
          <p class="text-gray-500 leading-relaxed">Available weight: 350g/m2, 400g/m2, 450g/m2, 500g/m2, 550g/m2, 600g/m2</p>
          <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, e-PTFE membrane laminated</p>
          <p class="text-gray-500 leading-relaxed">Service temperature: 130°C continue, 150°C maximum</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 2m-2.2m</p>
          <p class="text-gray-500 leading-relaxed">Application: Coal-fired boiler, Power plant, etc.</p>
      </div>

      <div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Layer: Polyester/Polyester + antistatic fiber</p>
          <p class="text-gray-500 leading-relaxed">Scrim: Polyester/Anti-static polyester</p>
          <p class="text-gray-500 leading-relaxed">Available weight: 350g/m2, 400g/m2, 450g/m2, 500g/m2, 550g/m2, 600g/m2</p>
          <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, e-PTFE membrane laminated</p>
          <p class="text-gray-500 leading-relaxed">Electroconductivity: &lt;1010</p>
          <p class="text-gray-500 leading-relaxed">Service temperature: 130°C continue, 150°C maximum</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 2m-2.2m</p>
          <p class="text-gray-500 leading-relaxed">Application: Coal-fired boiler, Power plant, etc.</p>
      </div>`,
  5: `<div class="mb-10">
          <p class="text-gray-500 leading-relaxed">Layer: Polyester/Polyester + antistatic fiber</p>
          <p class="text-gray-500 leading-relaxed">Scrim: Polyester/Anti-static polyester</p>
          <p class="text-gray-500 leading-relaxed">Available weight: 350g/m2, 400g/m2, 450g/m2, 500g/m2, 550g/m2, 600g/m2</p>
          <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, e-PTFE membrane laminated</p>
          <p class="text-gray-500 leading-relaxed">Electroconductivity: &lt;1010</p>
          <p class="text-gray-500 leading-relaxed">Service temperature: 130°C continue, 150°C maximum</p>
          <p class="text-gray-500 leading-relaxed">Regular width: 2m-2.2m</p>
          <p class="text-gray-500 leading-relaxed">Application: Coal-fired boiler, Power plant, etc.</p>
      </div>`,
  6: ``,
  7: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: Polypropylene</p>
        <p class="text-gray-500 leading-relaxed">Scrim: Polypropylene</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 400g/m2, 450g/m2, 500g/m2, 550g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 90&deg;C continuous, 120&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Chemical, food, pharmaceutical, mining, etc.</p>
      </div>`,
  8: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: Fiberglass + Chemical fiber</p>
        <p class="text-gray-500 leading-relaxed">Scrim: Fiberglass</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 900g/m2, 1000g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: PTFE finish, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 240&deg;C continuous, 260&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Coal-fired boiler, Power plant, Cement plants, etc.</p>
      </div>`,
  9: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: PTFE</p>
        <p class="text-gray-500 leading-relaxed">Scrim: PTFE</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 750g/m2, 800g/m2, 850g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: PTFE finish, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 240&deg;C continuous, 260&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Waste incineration, Chemical, etc.</p>
      </div>`,
  10: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: PPS</p>
        <p class="text-gray-500 leading-relaxed">Scrim: PPS</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 350g/m2, 400g/m2, 450g/m2, 500g/m2, 550g/m2, 600g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, PTFE finish, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 160&deg;C continuous, 200&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Thermal power plant, Coal-fired boilers, Waste incineration, Aluminum, etc.</p>
      </div>`,
  11: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: Aramid</p>
        <p class="text-gray-500 leading-relaxed">Scrim: Aramid</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 350g/m2, 400g/m2, 450g/m2, 500g/m2, 550g/m2, 600g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: Heat-set, singed and glazed, Water &amp; Oil repellent, PTFE finish, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 200&deg;C continuous, 240&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Asphalt, Cement, Steel, Power plant, Waste incineration, Chemical, etc.</p>
      </div>`,
  12: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed"><strong>Optional width:</strong> down below 2.2m</p>
        <p class="text-gray-500 leading-relaxed"><strong>Optional thickness:</strong> 1.2mm ~ 20mm</p>
        <p class="text-gray-500 leading-relaxed"><strong>Optional weight:</strong> 300g/m&sup2; ~ 650g/m&sup2; (&plusmn;8%)</p>
        <p class="text-gray-500 leading-relaxed"><strong>Different treatment methods:</strong> waterproof &amp; oil-proof treatment, PTFE coating, PTFE impregnation, etc.</p>
        <p class="text-gray-500 leading-relaxed"><strong>Capacity:</strong> 15,000 m&sup2;/day (standard Nomex (Aramid) product)</p>
      </div>`,
  13: ``,
  14: ``,
  15: ``,
  16: ``,
  17: ``,
  18: ``,
  19: `<div class="mb-10">
        <p class="text-gray-500 leading-relaxed">Layer: PTFE</p>
        <p class="text-gray-500 leading-relaxed">Scrim: PTFE</p>
        <p class="text-gray-500 leading-relaxed">Available weight: 750g/m2, 800g/m2, 850g/m2</p>
        <p class="text-gray-500 leading-relaxed">Treatment: PTFE finish, e-PTFE membrane laminated</p>
        <p class="text-gray-500 leading-relaxed">Service temperature: 240&deg;C continuous, 260&deg;C maximum</p>
        <p class="text-gray-500 leading-relaxed">Regular width: 2m - 2.2m</p>
        <p class="text-gray-500 leading-relaxed">Application: Waste incineration, Chemical, etc.</p>
      </div>`,
  20: ``,
}

const producTable = {
  0:  `<div class="py-6 anim-fade-up">
                <div class="max-w-[98%] mx-auto">
                    <div class="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
                    <table class="min-w-[1900px] w-full border-collapse text-center">
                        <thead class="bg-[#a8884a] text-white">
                        <tr>
                            <th rowspan="2" class="border border-gray-300 px-3 py-5 text-sm font-semibold">No.</th>

                            <th rowspan="2" class="border border-gray-300 px-4 py-5 text-sm font-semibold">
                            Code
                            </th>

                            <th rowspan="2" class="border border-gray-300 px-6 py-5 text-sm font-semibold min-w-[420px]">
                            Finish
                            </th>

                            <th colspan="2" class="border border-gray-300 px-4 py-5 text-sm font-semibold">
                            US glass system
                            </th>

                            <th rowspan="2" class="border border-gray-300 px-5 py-5 text-sm font-semibold min-w-[170px]">
                            Weave
                            </th>

                            <th colspan="2" class="border border-gray-300 px-4 py-5 text-sm font-semibold">
                            Weight
                            </th>

                            <th rowspan="2" class="border border-gray-300 px-5 py-5 text-sm font-semibold min-w-[180px]">
                            Thread count <br>(no./cm)
                            </th>

                            <th colspan="2" class="border border-gray-300 px-5 py-5 text-sm font-semibold">
                            Tensile strength <br>(N/2.5cm)
                            </th>

                            <th colspan="2" class="border border-gray-300 px-5 py-5 text-sm font-semibold">
                            Air permeability
                            </th>

                            <th rowspan="2" class="border border-gray-300 px-4 py-5 text-sm font-semibold min-w-[90px]">
                            LOI <br>(%)
                            </th>
                        </tr>

                        <tr>
                            <th class="border border-gray-300 px-4 py-4 text-sm">Warp</th>
                            <th class="border border-gray-300 px-4 py-4 text-sm">Weft</th>

                            <th class="border border-gray-300 px-4 py-4 text-sm">g/m2</th>
                            <th class="border border-gray-300 px-4 py-4 text-sm">oz/yd2</th>
                            
                            <th class="border border-gray-300 px-4 py-4 text-sm">Warp</th>
                            <th class="border border-gray-300 px-4 py-4 text-sm">Weft</th>

                            <th class="border border-gray-300 px-4 py-4 text-sm">
                            cm3/cm2/s.127Pa
                            </th>

                            <th class="border border-gray-300 px-4 py-4 text-sm">
                            CFM
                            </th>
                        </tr>
                        </thead>

                        <tbody class="text-gray-700 text-sm">
                        <tr class="hover:bg-blue-50">
                            <td class="border px-3 py-4">1</td>
                            <td class="border px-3 py-4 font-medium">MA301</td>
                            <td class="border px-5 py-4">PTFE finished with membrane</td>
                            <td class="border px-3 py-4">DE75 1/2</td>
                            <td class="border px-3 py-4">DE75 2/2(T)</td>
                            <td class="border px-3 py-4">Double twill</td>
                            <td class="border px-3 py-4">740-800</td>
                            <td class="border px-3 py-4">21.7-23</td>
                            <td class="border px-3 py-4">19x16</td>
                            <td class="border px-3 py-4">&gt;2400</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">2-5</td>
                            <td class="border px-3 py-4">4-10</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50">
                            <td class="border px-3 py-4">2</td>
                            <td class="border px-3 py-4 font-medium">MC301</td>
                            <td class="border px-5 py-4">Acid-resistant finished with membrane</td>
                            <td class="border px-3 py-4">DE75 1/2</td>
                            <td class="border px-3 py-4">DE75 2/2(T)</td>
                            <td class="border px-3 py-4">Double twill</td>
                            <td class="border px-3 py-4">740-800</td>
                            <td class="border px-3 py-4">21.7-23</td>
                            <td class="border px-3 py-4">19x16</td>
                            <td class="border px-3 py-4">&gt;2400</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">2-5</td>
                            <td class="border px-3 py-4">4-10</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="hover:bg-blue-50">
                            <td class="border px-3 py-4">3</td>
                            <td class="border px-3 py-4 font-medium">MC302</td>
                            <td class="border px-5 py-4">Acid-resistant with membrane</td>
                            <td class="border px-3 py-4">DE37 1/0</td>
                            <td class="border px-3 py-4">DE75 1/3(T)</td>
                            <td class="border px-3 py-4">1/3 twill</td>
                            <td class="border px-3 py-4">450-500</td>
                            <td class="border px-3 py-4">13.3-14.7</td>
                            <td class="border px-3 py-4">17.5x9.5</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">&gt;1000</td>
                            <td class="border px-3 py-4">2-5</td>
                            <td class="border px-3 py-4">4-10</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50">
                            <td class="border px-3 py-4">4</td>
                            <td class="border px-3 py-4 font-medium">MA303</td>
                            <td class="border px-5 py-4">PTFE with membrane</td>
                            <td class="border px-3 py-4">DE75 1/0</td>
                            <td class="border px-3 py-4">DE75 1/2(T)</td>
                            <td class="border px-3 py-4">1/3 twill</td>
                            <td class="border px-3 py-4">330-370</td>
                            <td class="border px-3 py-4">9.7-10.9</td>
                            <td class="border px-3 py-4">21x12</td>
                            <td class="border px-3 py-4">&gt;1400</td>
                            <td class="border px-3 py-4">&gt;800</td>
                            <td class="border px-3 py-4">2-5</td>
                            <td class="border px-3 py-4">4-10</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="hover:bg-blue-50">
                            <td class="border px-3 py-4">5</td>
                            <td class="border px-3 py-4 font-medium">MC303</td>
                            <td class="border px-5 py-4">Acid-resistant finished with membrane</td>
                            <td class="border px-3 py-4">DE75 1/0</td>
                            <td class="border px-3 py-4">DE75 1/2(T)</td>
                            <td class="border px-3 py-4">1/3 twill</td>
                            <td class="border px-3 py-4">330-370</td>
                            <td class="border px-3 py-4">9.7-10.9</td>
                            <td class="border px-3 py-4">21x12</td>
                            <td class="border px-3 py-4">&gt;1400</td>
                            <td class="border px-3 py-4">&gt;800</td>
                            <td class="border px-3 py-4">2-5</td>
                            <td class="border px-3 py-4">4-10</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50">
                            <td class="border px-3 py-4">6</td>
                            <td class="border px-3 py-4 font-medium">FA301</td>
                            <td class="border px-5 py-4">PTFE finished</td>
                            <td class="border px-3 py-4">DE75 1/2</td>
                            <td class="border px-3 py-4">DE75 2/2(T)</td>
                            <td class="border px-3 py-4">Double twill</td>
                            <td class="border px-3 py-4">740-800</td>
                            <td class="border px-3 py-4">21.7-23</td>
                            <td class="border px-3 py-4">19x16</td>
                            <td class="border px-3 py-4">&gt;2400</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">15-30</td>
                            <td class="border px-3 py-4">30-60</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="hover:bg-blue-50">
                            <td class="border px-3 py-4">7</td>
                            <td class="border px-3 py-4 font-medium">FC301</td>
                            <td class="border px-5 py-4">Acid-resistant finished</td>
                            <td class="border px-3 py-4">DE75 1/2</td>
                            <td class="border px-3 py-4">DE75 2/2(T)</td>
                            <td class="border px-3 py-4">Double twill</td>
                            <td class="border px-3 py-4">740-800</td>
                            <td class="border px-3 py-4">21.7-23</td>
                            <td class="border px-3 py-4">19x16</td>
                            <td class="border px-3 py-4">&gt;2400</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">15-30</td>
                            <td class="border px-3 py-4">30-60</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50">
                            <td class="border px-3 py-4">8</td>
                            <td class="border px-3 py-4 font-medium">FC302</td>
                            <td class="border px-5 py-4">Acid-resistant finished</td>
                            <td class="border px-3 py-4">DE37 1/0</td>
                            <td class="border px-3 py-4">DE75 1/3(T)</td>
                            <td class="border px-3 py-4">1/3 twill</td>
                            <td class="border px-3 py-4">450-500</td>
                            <td class="border px-3 py-4">13.3-14.7</td>
                            <td class="border px-3 py-4">17.5x9.5</td>
                            <td class="border px-3 py-4">&gt;2000</td>
                            <td class="border px-3 py-4">&gt;1000</td>
                            <td class="border px-3 py-4">15-30</td>
                            <td class="border px-3 py-4">30-60</td>
                            <td class="border px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="hover:bg-blue-50 transition duration-200">
                            <td class="border border-gray-200 px-3 py-4">9</td>
                            <td class="border border-gray-200 px-3 py-4 font-medium">FB302</td>
                            <td class="border border-gray-200 px-5 py-4">
                            PTFE & graphite & silicone finished
                            </td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/3(T)</td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/3(T)</td>
                            <td class="border border-gray-200 px-3 py-4">1/3 twill</td>
                            <td class="border border-gray-200 px-3 py-4">440-480</td>
                            <td class="border border-gray-200 px-3 py-4">12.9-14.1</td>
                            <td class="border border-gray-200 px-3 py-4">17.5x9.5</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;1800</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;1000</td>
                            <td class="border border-gray-200 px-3 py-4">15-30</td>
                            <td class="border border-gray-200 px-3 py-4">30-60</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;3</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50 transition duration-200">
                            <td class="border border-gray-200 px-3 py-4">10</td>
                            <td class="border border-gray-200 px-3 py-4 font-medium">FN215</td>
                            <td class="border border-gray-200 px-5 py-4">
                            PTFE & graphite & silicone finished
                            </td>
                            <td class="border border-gray-200 px-3 py-4">G75 1/2</td>
                            <td class="border border-gray-200 px-3 py-4">G75 1/2</td>
                            <td class="border border-gray-200 px-3 py-4">Double weft</td>
                            <td class="border border-gray-200 px-3 py-4">540-570</td>
                            <td class="border border-gray-200 px-3 py-4">15.9-16.8</td>
                            <td class="border border-gray-200 px-3 py-4">21x19</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;2000</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;2000</td>
                            <td class="border border-gray-200 px-3 py-4">20-35</td>
                            <td class="border border-gray-200 px-3 py-4">40-70</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;1.5</td>
                        </tr>

                        <tr class="hover:bg-blue-50 transition duration-200">
                            <td class="border border-gray-200 px-3 py-4">11</td>
                            <td class="border border-gray-200 px-3 py-4 font-medium">FA303</td>
                            <td class="border border-gray-200 px-5 py-4">PTFE finished</td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/0</td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/2(T)</td>
                            <td class="border border-gray-200 px-3 py-4">1/3 twill</td>
                            <td class="border border-gray-200 px-3 py-4">330-370</td>
                            <td class="border border-gray-200 px-3 py-4">9.7-10.9</td>
                            <td class="border border-gray-200 px-3 py-4">21x12</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;1400</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;900</td>
                            <td class="border border-gray-200 px-3 py-4">15-30</td>
                            <td class="border border-gray-200 px-3 py-4">30-60</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;9.5</td>
                        </tr>

                        <tr class="bg-gray-50 hover:bg-blue-50 transition duration-200">
                            <td class="border border-gray-200 px-3 py-4">12</td>
                            <td class="border border-gray-200 px-3 py-4 font-medium">FC303</td>
                            <td class="border border-gray-200 px-5 py-4">Acid-resistant finished</td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/0</td>
                            <td class="border border-gray-200 px-3 py-4">DE75 1/2(T)</td>
                            <td class="border border-gray-200 px-3 py-4">1/3 twill</td>
                            <td class="border border-gray-200 px-3 py-4">330-370</td>
                            <td class="border border-gray-200 px-3 py-4">9.7-10.9</td>
                            <td class="border border-gray-200 px-3 py-4">21x12</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;1400</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;900</td>
                            <td class="border border-gray-200 px-3 py-4">15-30</td>
                            <td class="border border-gray-200 px-3 py-4">30-60</td>
                            <td class="border border-gray-200 px-3 py-4">&gt;9.5</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>`,
}

function assetPath(p) {
  if (!p) return '';
  if (p.startsWith('http') || p.startsWith('//') || p.startsWith('/')) return p;
  return p.replace(/^.*\/?src\/assets\/images\//, '/assets/images/');
}

// ========== PRODUCT PAGE ==========
function renderProductPage(product) {
  let html = '';
  const cat = categories.find(c => c.id === product.categoryId);
  document.getElementById('page-product').innerHTML = `
    <div class="page-transition">
        <div class="bg-cream-50 border-b border-gray-100 py-4 px-4 sm:px-6">
            <div class="max-w-7xl mx-auto flex items-center gap-2 text-sm flex-wrap">
                <button onclick="goBack()" class="text-sm px-3 py-1 rounded-md bg-white/90 hover:bg-white transition">Back</button>
                <a href="javascript:void(0)" onclick="navigateTo('home')" class="text-gray-400 hover:text-gold-600 transition-colors">Home</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-300"></i>
                <a href="javascript:void(0)" onclick="openCategory(${cat.id})" class="text-gray-400 hover:text-gold-600 transition-colors">${cat.name}</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-300"></i>
                <span class="text-gold-600 font-medium">${product.name}</span>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <div class="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div class="anim-slide-left">
                    <div class="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-gray-50 shadow-sm">
                        <img id="mainGalleryImg" src="${assetPath(product.images[0])}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700">
                    </div>
                    <div class="grid grid-cols-4 gap-3">
                        ${product.images.map((img, i) => `<button onclick="changeGalleryImage('${assetPath(img)}',this)" class="gallery-thumb rounded-xl overflow-hidden aspect-square ${i === 0 ? 'active' : ''} bg-gray-50"><img src="${assetPath(img)}" alt="" class="w-full h-full object-cover"></button>`).join('')}
                    </div>
                </div>
                <div class="anim-slide-right delay-2">
                    <span class="text-xs font-semibold uppercase tracking-wider text-gold-600">${cat.name}</span>
                    <h1 class="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">${product.name}</h1>
                    <p class="text-gray-500 leading-relaxed mb-8">${product.description}</p>
                    <div class="flex flex-wrap gap-4 mb-10">
                        <a href="javascript:void(0)" onclick="scrollToSection('quote')" class="btn-gold px-7 py-3 rounded-xl text-sm inline-flex items-center gap-2"><span>Request Quote</span><i data-lucide="arrow-right" class="w-4 h-4 relative z-[2]"></i></a>
                        <a href="javascript:void(0)" onclick="scrollToSection('contact')" class="btn-outline px-7 py-3 rounded-xl text-sm inline-flex items-center gap-2">Contact Us</a>
                    </div>
                     
                    ${productDescriptions[product.id] || ''}

                </div>
            </div>
             ${producTable[product.id] || ''}
            <div class="mt-12 sm:mt-16 anim-fade-up">
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><div class="section-line"></div>Woven fiberglass feature:</h2>
                <div class="mb-5">
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">1. High temperature resistance</p>
                        <p class="text-gray-500 leading-relaxed">Woven fiberglass filter cloth can be used continuously between above the acid dew point and 260&deg;C, and the maximum temperature resistance can reach 280&deg;C. For the burning particles and sparks generated instantly, the filter material will not burn. Glass fiber cloth is baked in an oven at 280&deg;C for 2 hours, and the physical and chemical indicators and color basically remain unchanged, which is not available in other filter materials.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">2. High strength and low elongation, stable size</p>
                        <p class="text-gray-500 leading-relaxed">The warp and weft strength of the woven glass filter fabric is more than 2000N, and it will not shrink under high temperature, almost maintain the original size, and will not affect the filtering and cleaning performance. The elongation rate of woven glass is less than 3%. During the filtration operation, the weight of the filter material plus the weight of the dust layer will not cause the filter bag to elongate, and it also greatly reduces the periodic breakage of the filter bag caused by air pressure cleaning.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">3. High filtering precision</p>
                        <p class="text-gray-500 leading-relaxed">The PTFE membrane on the surface of fiberglass filter fabric are small and uniform (0.10-2.0μm), which can separate all dust larger than the diameter of the micropores, and has a very high collection efficiency for PM10 (respirable dust) and PM2.5 (respirable dust) which seriously damage human health. Therefore, the dust purification efficiency is high and stable, and it is easy to achieve the emission standard of less than 20mg/m&sup3;, 10mg/m&sup3;, even 5mg/m&sup3;.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">4. Thin and soft, easy to clean</p>
                        <p class="text-gray-500 leading-relaxed">The thickness of the woven fiberglass is less than 0.8mm according to different weight of fabric. This is only 1/3 of the needle felt filter material. It is woven with texturized yarn and has a soft texture. The glass fiber cloth shakes in a serpentine shape during dust cleaning, and the dust is easy to peel off; the pressure of dust removal is small, and the number of times of dust removal is small, which effectively reduces the consumption of compressed air, reduces maintenance, and saves operating costs.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">5. Oxidation and corrosion resistance</p>
                        <p class="text-gray-500 leading-relaxed">Fiberglass filter cloth will not be oxidized by oxygen or nitride, so there is no need to consider the problem of high and low oxygen content in the dust collector. The woven glass cloth has outstanding corrosion resistance, and after the filter material is impregnated with PTFE, the PTFE will form a dense protective film on the surface of glass fiber cloth, so the fiberglass cloth is less eroded during operation.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">6. Excellent folding resistance</p>
                        <p class="text-gray-500 leading-relaxed">The base material of woven fiberglass filter fabric is woven with glass yarns, and after scientific chemical post-treatment, the folding resistance is several times higher than that of ordinary filter material, and it can withstand long-term shrinkage and expansion without causing damage to the filter material, ensuring the service life of the filter material.</p>
                    </div>
                    <div class="mb-10">
                        <p class="text-gray-500 leading-relaxed">7. Water and oil repellent, suitable for working conditions with high moisture content</p>
                        <p class="text-gray-500 leading-relaxed">Glass fiber filter cloth has very good hydrolysis resistance. The base material has been treated with water and oil repellent technology. After application testing, the waterproof level is not less than 4.5, which eliminates the adsorption of water by the filter material and effectively reduces the hardening phenomenon after condensation.</p>
                    </div>
                </div>
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><div class="section-line"></div>Manufacturing Roll goods at Hongyuan Envirotech</h2>
                <div class="mb-5">
                    <p class="text-gray-500 leading-relaxed">With experienced production team and high-tech machinery, Hongyuan Envirotech produce roll goods made of fiberglass and chemical fibers. More than 20 years production experience means we make can produce quality materials to meet market needs. Each fiber features specific properties that make the filter medium uniquely suited to its field of application. Filter media can be specially developed according to the needs of customers and different application conditions.</p>
                </div>
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><div class="section-line"></div>Filter Media Roll goods for Dust filtration</h2>
                <div class="mb-5">
                    <ul class="list-disc list-inside text-gray-500 leading-relaxed mb-5">
                        <li>Fiberglass fabric with and without e-PTFE membrane</li>
                        <li>Needle felt with and without e-PTEF membrane</li>
                        <li>Material weight from 250g/m2 to 1000g/m2</li>
                        <li>Roll length from 50m to 300m</li>
                        <li>Shortest delivery time</li>
                        <li>Customized and developed products as customer’s request</li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 anim-fade-up">
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"><div class="section-line"></div>Related Products</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3).map(p => `
                    <a href="/?product=${p.id}" rel="noopener noreferrer" class="card overflow-hidden cursor-pointer">
                        <div class="aspect-[3/2] overflow-hidden"><img src="${assetPath(p.image)}" alt="${p.name}" class="card-img w-full h-full object-cover"></div>
                        <div class="p-5">
                            <p class="text-xs text-gold-600 font-medium mb-1.5">${categories.find(c => c.id === p.categoryId).name}</p>
                            <h3 class="text-gray-800 font-semibold mb-2">${p.name}</h3>
                            <p class="text-gray-400 text-sm line-clamp-2">${p.shortDesc}</p>
                            <div class="mt-4 flex items-center gap-1 text-gold-600 text-sm font-medium">View Details <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
                        </div>
                    </a>`).join('')}
                </div>
            </div>
        </div>
    </div>`;
}

function changeGalleryImage(src, thumb) {
  const img = document.getElementById('mainGalleryImg');
  img.style.opacity = '0'; img.style.transform = 'scale(1.05)';
  setTimeout(() => { img.src = src; img.style.opacity = '1'; img.style.transform = 'scale(1)'; }, 200);
  img.style.transition = 'all 0.5s cubic-bezier(0.23,1,0.32,1)';
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ========== CATEGORY PAGE ==========
function renderCategoryPage(category) {
  const cp = products.filter(p => p.categoryId === category.id);
  document.getElementById('page-category').innerHTML = `
    <div class="page-transition">
        <div class="bg-cream-50 border-b border-gray-100 py-4 px-4 sm:px-6">
            <div class="max-w-7xl mx-auto flex items-center gap-2 text-sm flex-wrap">
                <button onclick="goBack()" class="text-sm px-3 py-1 rounded-md bg-white/90 hover:bg-white transition">Back</button>
                <a href="javascript:void(0)" onclick="navigateTo('home')" class="text-gray-400 hover:text-gold-600 transition-colors">Home</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-300"></i>
                <a href="javascript:void(0)" onclick="scrollToSection('categories')" class="text-gray-400 hover:text-gold-600 transition-colors">Categories</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-gray-300"></i>
                <span class="text-gold-600 font-medium">${category.name}</span>
            </div>
        </div>
        <div class="relative h-[280px] sm:h-[380px] overflow-hidden">
            <img src="${assetPath(category.image)}" alt="${category.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-gray-900/20"></div>
            <div class="absolute inset-0 flex items-end">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-12 h-12 rounded-xl bg-gold-400/20 backdrop-blur flex items-center justify-center border border-gold-400/20"><i data-lucide="${category.icon}" class="w-6 h-6 text-gold-300"></i></div>
                    </div>
                    <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">${category.name}</h1>
                    <p class="text-gray-200 max-w-2xl leading-relaxed">${category.description}</p>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-10">All Products <span class="text-gray-400 font-normal text-lg">(${cp.length})</span></h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ${cp.map((p, i) => `
                <a href="/?product=${p.id}" rel="noopener noreferrer" class="card overflow-hidden cursor-pointer anim-fade-up delay-${i + 1}">
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img src="${assetPath(p.image)}" alt="${p.name}" class="card-img w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                        <div class="absolute top-3 right-3"><span class="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider gold-bg text-white shadow-lg shadow-gold-500/20">${category.name.split(' ').slice(0, 2).join(' ')}</span></div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-gray-800 font-semibold text-lg mb-2">${p.name}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-4">${p.shortDesc}</p>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div class="flex items-center gap-1 text-gray-400 text-xs"><i data-lucide="thermometer" class="w-3.5 h-3.5"></i>${p.specs['Operating Temp'].split(' ')[0]}</div>
                            <div class="flex items-center gap-1 text-gold-600 text-sm font-medium">View Details <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
                        </div>
                    </div>
                </a>`).join('')}
            </div>
        </div>
    </div>`;
}

// ========== RENDER GRIDS ==========
function renderProductsGrid() {
  document.getElementById('productsGrid').innerHTML = products.slice(0, 12).map((p, i) => {
    const cat = categories.find(c => c.id === p.categoryId);
    return `<a href="/?product=${p.id}" rel="noopener noreferrer" class="card overflow-hidden cursor-pointer anim-fade-up delay-${(i % 4) + 1}">
            <div class="aspect-[4/3] overflow-hidden relative">
                <img src="${assetPath(p.image)}" alt="${p.name}" class="card-img w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute top-3 left-3"><span class="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur text-gold-700 border border-gold-200 shadow-sm">${cat.name.split(' ').slice(0, 2).join(' ')}</span></div>
            </div>
            <div class="p-5">
                <h3 class="text-gray-800 font-semibold mb-1.5">${p.name}</h3>
                <p class="text-gray-400 text-sm line-clamp-2 mb-3">${p.shortDesc}</p>
                <div class="flex items-center gap-1 text-gold-600 text-xs font-medium">Learn More <i data-lucide="arrow-right" class="w-3 h-3"></i></div>
            </div>
        </a>`;
  }).join('');
}

function renderCategoriesGrid() {
  document.getElementById('categoriesGrid').innerHTML = categories.map((c, i) => `
    <div class="cat-card p-6 sm:p-8 cursor-pointer anim-fade-up delay-${(i % 3) + 1}" onclick="openCategory(${c.id})">
        <div class="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-5 border border-gold-100"><i data-lucide="${c.icon}" class="w-7 h-7 text-gray-400 cat-icon"></i></div>
        <h3 class="text-gray-800 font-semibold text-lg mb-2">${c.name}</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">${c.shortDesc}</p>
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
            <span class="text-gray-300 text-xs">${products.filter(p => p.categoryId === c.id).length} Products</span>
            <div class="flex items-center gap-1 text-gold-600 text-sm font-medium">View All <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
        </div>
    </div>`).join('');
}

function renderBlogGrid() {
  document.getElementById('blogGrid').innerHTML = blogPosts.map((b, i) => `
    <div class="blog-card anim-fade-up delay-${(i % 3) + 1}">
        <div class="aspect-[16/10] overflow-hidden"><img src="${assetPath(b.image)}" alt="${b.title}" class="blog-img w-full h-full object-cover"></div>
        <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gold-50 text-gold-700 border border-gold-100">${b.category}</span>
                <span class="text-gray-300 text-xs">${b.date}</span>
            </div>
            <h3 class="text-gray-800 font-semibold mb-2 leading-snug line-clamp-2">${b.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">${b.excerpt}</p>
            <div class="flex items-center gap-1 text-gold-600 text-sm font-medium cursor-pointer">Read More <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
        </div>
    </div>`).join('');
}

// ========== FORMS ==========
// function showToast(msg) { const t = document.getElementById('toast'); document.getElementById('toastMsg').textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 4000); }
function handleQuoteForm(e) { e.preventDefault(); showToast('Quote request submitted! We\'ll respond within 24 hours.'); e.target.reset(); }
// function handleContactForm(e) { e.preventDefault(); showToast('Message sent successfully! Our team will get back to you soon.'); e.target.reset(); }


// Initialize EmailJS (replace with your public key)
if (window.emailjs && typeof emailjs.init === 'function') {
  emailjs.init('LhvSi9ofNr_3faJ3a'); // <-- replace
}

// Simple toast helper (uses #toast and #toastMsg in index.html)
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.toggle('border-green-200', !isError);
  toast.classList.toggle('border-red-200', isError);
  toast.querySelector('i')?.classList.toggle('text-green-500', !isError);
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '';
    toast.style.transform = '';
  }, 3500);
}

// Contact form submission - expose to window because form uses inline onsubmit
window.handleContactForm = async function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const templateParams = {
    from_name: data.get('name') || '',
    from_email: data.get('email') || '',
    subject: data.get('subject') || '',
    message: data.get('message') || ''
  };

  const SERVICE_ID = 'service_da04nbi';   // <-- replace
  const TEMPLATE_ID = 'template_e3ihntr'; // <-- replace

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    showToast('Message sent — we will reply shortly.');
    form.reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    showToast('Failed to send message. Please try again later.', true);
  }
};
// ...existing code...

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim-fade-up:not(.visible),.anim-slide-left:not(.visible),.anim-slide-right:not(.visible),.anim-scale-in:not(.visible),.anim-rotate-in:not(.visible),.section-line:not(.visible),.img-reveal:not(.visible)').forEach(el => obs.observe(el));
}

function animateCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const isPercent = el.closest('.stat-card').querySelector('p:last-child').textContent.includes('%');
        let current = 0;
        const duration = 2000;
        const start = performance.now();
        function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          current = Math.floor(easeOutExpo(progress) * target);
          el.textContent = current + (isPercent ? '%' : '+');
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

// ========== SCROLL EFFECTS ==========
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const topBar = document.getElementById('topBar');
  const nav = document.getElementById('navbar');
  const btn = document.getElementById('backToTop');

  if (y > 80) topBar.classList.add('topbar-scroll'); else topBar.classList.remove('topbar-scroll');
  if (y > 50) nav.classList.add('nav-scroll'); else nav.classList.remove('nav-scroll');

  if (y > 500) { btn.style.opacity = '1'; btn.style.transform = 'translateY(0)'; }
  else { btn.style.opacity = '0'; btn.style.transform = 'translateY(16px)'; }

  // Subtle parallax on hero images
  document.querySelectorAll('.hero-slide img').forEach(img => {
    img.style.transform = `scale(1.05) translateY(${y * 0.15}px)`;
  });
});

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderProductsGrid();
  renderCategoriesGrid();
  renderBlogGrid();
  lucide.createIcons();
  initScrollAnimations();
  animateCounters();

  const params = new URLSearchParams(window.location.search);
  const pid = params.get('product');
  if (pid) {
    const prod = products.find(p => String(p.id) === String(pid));
    if (prod) {
      navigateTo('product', prod);
    }
  }
});

function goBack() {
  if (window.history && window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo('home');
  }
}

window.goBack = goBack;
window.navigateTo = navigateTo;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
window.goToSlide = goToSlide;
window.openProduct = openProduct;
window.openCategory = openCategory;
window.changeGalleryImage = changeGalleryImage;
window.handleQuoteForm = handleQuoteForm;
window.handleContactForm = handleContactForm;
window.showToast = showToast;
window.openCategory = openCategory;
window.openProduct = openProduct;
