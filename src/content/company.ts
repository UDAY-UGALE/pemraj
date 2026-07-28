// Every fact here is sourced directly from the Pemraj Industries company
// profile (PDF) or ISO certificate. Nothing in this file is invented.

export const company = {
  name: "Pemraj Industries",
  founded: 1983,
  location: "Pune, Maharashtra, India",
  tagline: "Precision CNC components, made in Pune since 1983.",

  offices: {
    head: {
      label: "Head Office",
      lines: ["1194/18A, Ghole Road, Shivajinagar", "Pune – 411005"],
      phone: "+91-20-25535663",
    },
    work: {
      label: "Work Office / Factory",
      lines: [
        "Survey No. 132/1/4/1, Dalvi Vasti",
        "Near Nanded Phata, Vadgaon Dhayari",
        "Sinhagad Road, Pune – 411041",
      ],
      phone: "+91-20-24381242",
    },
  },

  contacts: [
    { name: "Pradeep Dhore", phone: "+91-9822007645", email: "pnd@pemraj.com" },
    { name: "Rahul Dhore", phone: "+91-9850424242", email: "rahul@pemraj.com" },
  ],

  // NOTE: "photo" below is a placeholder (AI-generated, not a real photograph)
  // used at the client's explicit request until real portraits are supplied —
  // swap both to real photos as soon as they're available.
  leadership: [
    {
      name: "Pradeep Dhore",
      title: "Founder",
      phone: "+91-9822007645",
      email: "pnd@pemraj.com",
      bio: "Pradeep Dhore founded Pemraj Industries in 1983, building it from Pune's industrial belt into a strategic manufacturer of high-precision CNC machined components — today an ISO 9001:2015 certified supplier to automotive, defence, hydraulics and electronics customers worldwide.",
      photo: "/images/leadership-placeholder.jpg",
    },
    {
      name: "Rahul Dhore",
      title: "CEO",
      phone: "+91-9850424242",
      email: "rahul@pemraj.com",
      bio: "Rahul Dhore is part of the second generation carrying Pemraj Industries forward, and is a direct point of contact for customer enquiries.",
      photo: "/images/leadership-placeholder.jpg",
    },
  ],

  legal: {
    gst: "27AAOPD8572G1ZD",
    iec: "3103014791",
    pan: "AAOPD8572G",
    msme: "UDYAM-MH-26-0006953",
  },

  certification: {
    standard: "ISO 9001:2015",
    registrationNo: "85 100 001 16050",
    body: "TÜV Rheinland (India) Pvt. Ltd.",
    validFrom: "2025-01-29",
    validTo: "2028-01-28",
    firstCertified: "2019-01-29",
    scope:
      "Manufacture of Precision Machined Components & Assemblies for Automotive and Engineering Industries",
  },

  stats: [
    { value: "1983", label: "Founded" },
    { value: "20", label: "CNC Machines" },
    { value: "10μ", label: "Typical Accuracy" },
    { value: "ISO 9001", label: "Certified since 2019" },
  ],

  vision:
    "To be the first preferred choice of customers for high precision CNC components in both domestic and international markets, by providing best quality, on-time delivery and prompt service at all times.",

  mission:
    "To ensure complete customer satisfaction by continuously improving in-house as well as customer end quality through proactive planning and effective implementation, while maintaining a high level of ethics and teamwork.",

  values: [
    {
      name: "Honesty",
      body: "We conduct our business with utmost honesty to build trust and confidence in our partners throughout the value chain.",
    },
    {
      name: "Commitment",
      body: "We believe in finishing what is started and are always prepared to do what is needed to complete a task or a challenge.",
    },
    {
      name: "Integrity & Teamwork",
      body: "We strive hard to provide a conducive atmosphere for teamwork and work unitedly as a family.",
    },
    {
      name: "Continuous Improvement",
      body: "We are always willing to adopt new technologies and processes and develop new skills by taking on challenging tasks.",
    },
  ],

  industries: [
    "Defence",
    "Hydraulics",
    "Automotive",
    "Electronics",
    "Industrial Equipment",
  ],

  capabilities: [
    {
      name: "CNC Sliding Headstock (Swiss Turning)",
      body: "Moving, programmable headstock with bar feeder — suited to components needing complex machining in a single setup, using cross drilling, milling and C-axis.",
      specs: [
        ["Accuracy", "Within 10 microns"],
        ["Max. machinable diameter", "Ø20mm"],
        ["Milling capability", "On both main & sub"],
      ],
      image: "/images/process-sliding-headstock.jpg",
    },
    {
      name: "CNC Turn-Mill",
      body: "Turn-mill centres streamline turning and milling in one setup — fewer setups, higher accuracy.",
      specs: [
        ["Accuracy", "Within 10 microns"],
        ["Max. turning diameter", "200mm"],
        ["Max. center distance", "580mm"],
        ["Programmable tailstock", "Yes"],
      ],
      image: "/images/process-turn-mill.jpg",
    },
    {
      name: "CNC Turning",
      body: "35+ years of combined experience turning precision components to tight tolerance.",
      specs: [
        ["Accuracy", "Within 10 microns"],
        ["Max. turning diameter", "260mm"],
        ["Max. center distance", "500mm"],
        ["Programmable tailstock", "Yes"],
      ],
      image: "/images/process-cnc-turning.jpg",
    },
    {
      name: "CNC Polygon Turning",
      body: "Machines any polygonal profile in under 75% of the time a conventional milling process would take.",
      specs: [
        ["Accuracy", "Within 10 microns"],
        ["Max. machinable diameter", "Ø100mm"],
        ["Max. machining length", "80mm"],
        ["Controller", "Fanuc"],
      ],
      image: "/images/process-polygon-turning.jpg",
    },
  ],

  flagshipMachines: [
    {
      name: "Nakamura-Tome NT-Flex",
      origin: "Made in Japan",
      type: "2 Spindle · 2 Turret · Y-Axis Turnmill CNC Multitasking Machine",
      features: [
        "Simultaneous machining on both spindles to reduce cycle time",
        "Y-axis milling for complex operations",
      ],
      specs: [
        ["Max. turning diameter", "150mm"],
        ["Distance between spindles", "655mm"],
        ["Max. bar feeding capacity", "38mm"],
        ["Max. number of tools", "96"],
      ],
      image: "/images/machine-nt-flex.jpg",
    },
    {
      name: "Tornos DT26-S",
      origin: "Made in Switzerland",
      type: "Swiss Type CNC Sliding Head Machine",
      features: ["Simultaneous machining on main & back spindle to reduce cycle time"],
      specs: [
        ["Max. turning diameter", "26mm"],
        ["Max. turning length", "225mm"],
        ["Max. turning tools", "24"],
        ["Max. milling tools", "10"],
      ],
      image: "/images/machine-tornos.jpg",
    },
    {
      name: "Tsugami B0325 & B0205",
      origin: "Made in Japan",
      type: "Swiss Type CNC Sliding Head Machine",
      features: ["Simultaneous machining on main & back spindle to reduce cycle time"],
      specs: [
        ["Max. turning diameter", "32mm"],
        ["Max. turning length", "225mm"],
        ["Max. turning tools", "24"],
        ["Max. milling tools", "10"],
      ],
      image: "/images/machine-tsugami-b0325.jpg",
    },
  ],

  machineInventory: [
    { desc: "CNC Turn Mill Centre, 2 Spindle 2 Turret", make: "Nakamura-Tome", model: "NT-Flex", dia: "150mm", length: "655mm", controller: "Fanuc", qty: 1 },
    { desc: "CNC Swiss Turning – Sliding Head", make: "Tornos", model: "DT-26S", dia: "26mm", length: "—", controller: "Fanuc", qty: 2 },
    { desc: "CNC Swiss Turning – Sliding Head", make: "Tsugami", model: "B0-325III", dia: "32mm", length: "—", controller: "Fanuc", qty: 1 },
    { desc: "CNC Swiss Turning – Sliding Head", make: "Tsugami", model: "B0-205III", dia: "20mm", length: "—", controller: "Fanuc", qty: 3 },
    { desc: "CNC Turn Mill Centre", make: "DMG (Deckel Maho Gildemeister)", model: "CTX-310 ECO", dia: "Ø200mm", length: "580mm", controller: "Fanuc", qty: 1 },
    { desc: "CNC Linear Turn-Mill Machine", make: "Askar Micron", model: "Turnmik Master", dia: "Ø100mm", length: "No tailstock", controller: "Siemens", qty: 3 },
    { desc: "CNC Turning Machine", make: "Tsugami", model: "M06-JC", dia: "Ø200mm", length: "No tailstock", controller: "Fanuc", qty: 1 },
    { desc: "CNC Turning Machine", make: "LMW", model: "Starturn", dia: "Ø150mm", length: "No tailstock", controller: "Fanuc", qty: 2 },
    { desc: "CNC Turning Machine", make: "LMW", model: "Smarturn", dia: "Ø185mm", length: "230mm", controller: "Fanuc", qty: 2 },
    { desc: "CNC Turning Machine", make: "Galaxy", model: "Midas-4i", dia: "Ø200mm", length: "Ø280mm", controller: "Fanuc", qty: 3 },
    { desc: "CNC Turning Machine", make: "Jyoti", model: "DX160", dia: "Ø260mm", length: "500mm", controller: "Siemens", qty: 1 },
    { desc: "CNC Turning Machine", make: "Lokesh", model: "TL-160", dia: "Ø200mm", length: "230mm", controller: "Fanuc", qty: 1 },
    { desc: "CNC Turning Machine", make: "Sands", model: "SLT135", dia: "Ø135mm", length: "200mm", controller: "Fanuc", qty: 1 },
  ],

  inHouse: [
    { name: "Automatic Lathe (Traub)", detail: "Models PMT A25 & A32 · 32mm round bar capacity · 70mm max turning length · 8 machines", icon: "/images/icons/inhouse-automatic-lathe.png" },
    { name: "Lathe", detail: "177mm centre height · 335mm swing over bed · 4 machines", icon: "/images/icons/inhouse-lathe.png" },
    { name: "Thread Rolling", detail: "50mm max job diameter · 12 tonnes max rolling thrust · 1 machine", icon: "/images/icons/inhouse-thread-rolling.png" },
    { name: "Radial Drilling", detail: "25mm drilling capacity · 610×940mm table · 10 machines", icon: "/images/icons/inhouse-radial-drilling.png" },
    { name: "Bandsaw Cutting", detail: "Horizontal semi-automatic · up to 200mm cutting capacity · 1 machine", icon: "/images/icons/inhouse-bandsaw.png" },
    { name: "Milling", detail: "900×200mm table · 150mm cross traverse · 2 machines", icon: "/images/icons/inhouse-milling.png" },
  ],

  outsourced: {
    "Heat Treatment": ["Hardening & Tempering", "Carburising", "Carbonitriding", "Nitriding", "Nitro-Carburising", "SS Hardening", "Austempering", "Tufftride Treatment", "Gas Nitriding", "Vacuum Heat Treatment", "Plasma Nitriding", "Cryogenic Sub-Zero Treatment"],
    "Surface Treatment": ["Zinc Plating", "Nickel Plating", "Chrome Plating (all types)", "Tin Plating", "Passivation (all types)", "Anodising", "Blackodising", "Phosphating", "Copper Plating", "Powder Coating", "Teflon Coating"],
    "Testing & Calibration": ["Chemical Analysis", "Mechanical Analysis", "Ultrasonic Testing", "Magnetic Particle Inspection (MPI)", "Non-Destructive Testing (NDT)", "Salt-Spray Testing", "Measuring Equipment Calibration", "Spark Testing"],
    "Machining": ["Deep Drawing", "OD & ID Grinding & Lapping", "Polygonal Turning", "Welding", "Wire Cutting", "Laser Cutting", "CNC Milling", "Sheet Metal Working", "EDM", "CMM", "Engraving", "Burnishing"],
  },

  measuringEquipment: [
    { name: "Form Measuring Machine", make: "Mahr (MarForm MMQ-150)", detail: "Roundness / cylindricity measurement, 0.02µm accuracy", image: "/images/measure-form.jpg" },
    { name: "Video Measuring Machine", make: "Carmar", detail: "260×160mm, 3µm accuracy, CCD camera with CAD output", image: "/images/measure-video.jpg" },
    { name: "Profile Projector", make: "Mitoya (India)", detail: "300mm screen, up to 100x magnification", image: "/images/measure-profile-projector.jpg" },
    { name: "Surface Roughness Tester", make: "Mitutoyo (Japan) SJ-201", detail: "Portable, detachable probe", image: "/images/measure-roughness.jpg" },
    { name: "Trimos 2D Height Gauge", make: "Trimos (Switzerland)", detail: "406mm measuring speed, 3 micron repeatability", image: "/images/measure-height-gauge.jpg" },
  ],

  qualityDocs: [
    { stage: "Approval", docs: "APQP — Advanced Product Quality Planning" },
    { stage: "Quality Control", docs: "CP — Control Plan, PFMEA — Process Failure Mode Effects Analysis" },
    { stage: "Problem Solving", docs: "CAPA — Corrective Action Preventive Action" },
  ],

  materials: [
    { group: "Steel", grades: "EN1A, EN1A(Pb), EN8, EN19, EN5, EN24, EN32, 16MnCr5, SAE8620, SAE1144, MS, 4140" },
    { group: "Stainless Steel", grades: "303, 304, 410, 416, 420, 431, 430F, 440C, 17-4PH" },
    { group: "Aluminium", grades: "2014, 2024, 6061 — temper as per alloy" },
    { group: "Brass", grades: "Free cutting, Manganese Bronze" },
    { group: "Plastics", grades: "Nylon, Teflon (PTFE)" },
    { group: "Exotic Alloys", grades: "Inconel, Hastelloy, Gun Metal, Silver" },
    { group: "Other", grades: "Bronze, Copper, Titanium" },
  ],

  customers: ["Eaton", "Crane", "Barksdale (USA) — ATEX approved supplier"],
} as const;

export const images = {
  factoryExterior: "/images/factory-exterior.jpg",
  isoCertificate: "/images/iso-certificate.jpg",
  exportComponents: [
    "/images/export-components-1.jpg",
    "/images/export-components-2.jpg",
    "/images/export-components-3.jpg",
  ],
  defenceComponents: [
    "/images/defence-components-1.jpg",
    "/images/defence-components-2.jpg",
  ],
  polygonTurning: ["/images/polygon-turning-1.jpg", "/images/polygon-turning-2.jpg"],
  machineDetails: {
    ntFlex: "/images/machine-nt-flex-detail.jpg",
    tornos: "/images/machine-tornos-detail.jpg",
    tsugami: "/images/machine-tsugami-b0325-detail.jpg",
  },
  machineThumbs: [
    { name: "Tsugami M06-JCT", src: "/images/machine-tsugami-m06jct.jpg" },
    { name: "DMG CTX 310 ECO", src: "/images/machine-dmg-ctx310.jpg" },
    { name: "Tsugami B205-III", src: "/images/machine-tsugami-b205.jpg" },
  ],
};
