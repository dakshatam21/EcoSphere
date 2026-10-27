/**
 * Centralized Static Assignment Data for EcoSphere
 * Semester V: E-Waste & Environmental Management (AY 2026–27)
 * Author: Dakshata Mhatre (Roll No. 24102B0018)
 *
 * All files mapped here reside in `public/assignments/{ISA,ESE,Extras}/`.
 * Multi-deliverable assignments keep all relevant deliverables grouped together.
 */

export interface FileAttachment {
  name: string
  path: string
  size: number
  type: 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'image'
  label?: string
}

export interface ExternalLink {
  label: string
  url: string
}

export interface DeliverableDetail {
  id: string
  label: string
  type: 'report' | 'spreadsheet' | 'presentation' | 'poster' | 'case_study' | 'research_paper' | 'notes' | 'link'
  fileName?: string
  completed: boolean
}

export interface Assignment {
  id: string
  number: number
  title: string
  category: 'ISA' | 'ESE' | 'Extras'
  date: string // YYYY-MM-DD
  description: string // 1-2 concise sentences, fully visible on card without truncation
  submitted: boolean
  deliverables: DeliverableDetail[]
  files: FileAttachment[]
  links: ExternalLink[]
  tags: string[]
}

export const ASSIGNMENTS: Assignment[] = [
  // ─────────────────────────────────────────────────────────────
  // ISA (Internal Semester Assessment) Activities
  // ─────────────────────────────────────────────────────────────
  {
    id: 'isa-01',
    number: 1,
    title: 'Assignment 0: Curriculum Structure & EWEM Course Orientation',
    category: 'ISA',
    date: '2026-07-22',
    description:
      'Introductory assignment examining autonomous academic curriculum buckets, credit distribution, and foundational environmental management topics for Semester V.',
    submitted: true,
    deliverables: [
      {
        id: 'isa-01-d1',
        label: 'Course Orientation & Curriculum Analysis Document',
        type: 'report',
        fileName: 'EWEM_Assignment0 (1).docx',
        completed: true,
      },
    ],
    files: [
      {
        name: 'EWEM_Assignment0 (1).docx',
        path: '/assignments/ISA/EWEM_Assignment0 (1).docx',
        size: 70101,
        type: 'docx',
        label: 'Curriculum & Course Overview Document',
      },
    ],
    links: [],
    tags: ['Curriculum', 'Orientation', 'Syllabus', 'Autonomous'],
  },
  {
    id: 'isa-02',
    number: 2,
    title: 'E-Waste Core Concepts & Classroom Module Study (Module 4–8)',
    category: 'ISA',
    date: '2026-08-04',
    description:
      'Classroom module study and analytical responses covering e-waste characterisation, hazardous element classification, and material streams from consumer electronics.',
    submitted: true,
    deliverables: [
      {
        id: 'isa-02-d1',
        label: 'Module 4–8 Study Notes & Submission',
        type: 'notes',
        fileName: 'EWM_4_8.pdf',
        completed: true,
      },
    ],
    files: [
      {
        name: 'EWM_4_8.pdf',
        path: '/assignments/ISA/EWM_4_8.pdf',
        size: 413939,
        type: 'pdf',
        label: 'Module 4–8 Core Study Notes',
      },
    ],
    links: [],
    tags: ['Module 4–8', 'Characterisation', 'Hazardous Materials'],
  },
  {
    id: 'isa-03',
    number: 3,
    title: 'Class Task: In-Class E-Waste Management Conceptual Write-Up',
    category: 'ISA',
    date: '2026-08-12',
    description:
      'Structured classroom write-up examining electronic product lifecycles, informal recycling hazards, and sustainable disposal mechanisms.',
    submitted: true,
    deliverables: [
      {
        id: 'isa-03-d1',
        label: 'In-Class Handwritten Write-Up Submission',
        type: 'notes',
        fileName: 'Class Task_Upload the Write up done in Class 1.pdf',
        completed: true,
      },
    ],
    files: [
      {
        name: 'Class Task_Upload the Write up done in Class 1.pdf',
        path: '/assignments/ISA/Class Task_Upload the Write up done in Class 1.pdf',
        size: 386295,
        type: 'pdf',
        label: 'Class Task Write-Up',
      },
    ],
    links: [],
    tags: ['Class Task', 'In-Class', 'Product Lifecycle', 'Informal Recycling'],
  },
  {
    id: 'isa-04',
    number: 4,
    title: 'State E-Waste Tracker & Analytical Report (Rajasthan)',
    category: 'ISA',
    date: '2026-08-18',
    description:
      'Statewide monitoring model and report evaluating generation, collection rates, recycling infrastructure, and compliance scores across Rajasthan.',
    submitted: true,
    deliverables: [
      {
        id: 'isa-04-d1',
        label: 'State E-Waste Multi-Tab Excel Tracker',
        type: 'spreadsheet',
        fileName: 'State_EWaste_Tracker(Rajasthan).xlsx',
        completed: true,
      },
      {
        id: 'isa-04-d2',
        label: 'State E-Waste Management Diagnostic Report',
        type: 'report',
        fileName: 'State_EWaste_Management_Report(Rajasthan).PDF',
        completed: true,
      },
    ],
    files: [
      {
        name: 'State_EWaste_Tracker(Rajasthan).xlsx',
        path: '/assignments/ISA/State_EWaste_Tracker(Rajasthan).xlsx',
        size: 38111,
        type: 'xlsx',
        label: 'State E-Waste Tracker Sheet',
      },
      {
        name: 'State_EWaste_Management_Report(Rajasthan).PDF',
        path: '/assignments/ISA/State_EWaste_Management_Report(Rajasthan).PDF',
        size: 269388,
        type: 'pdf',
        label: 'State Management Report',
      },
    ],
    links: [],
    tags: ['Rajasthan', 'Excel Tracker', 'State Diagnostics', 'Compliance', 'Metrics'],
  },
  {
    id: 'isa-05',
    number: 5,
    title: 'State-wise E-Waste Companies & Management Study (Rajasthan Focus)',
    category: 'ISA',
    date: '2026-08-25',
    description:
      'In-depth study of formal recycling facilities, EPR authorisations, and authorised dismantlers operating across Rajasthan and western India.',
    submitted: true,
    deliverables: [
      {
        id: 'isa-05-d1',
        label: 'E-Waste Recovery Companies Comprehensive Report',
        type: 'report',
        fileName: 'Statewise_EWaste_Companies_Rajasthan (1).docx',
        completed: true,
      },
      {
        id: 'isa-05-d2',
        label: 'Rajasthan E-Waste Infrastructure Presentation Deck',
        type: 'presentation',
        fileName: 'Rajasthan_E_Waste_Management_Presentation-1 (1).pptx',
        completed: true,
      },
    ],
    files: [
      {
        name: 'Statewise_EWaste_Companies_Rajasthan (1).docx',
        path: '/assignments/ISA/Statewise_EWaste_Companies_Rajasthan (1).docx',
        size: 53622,
        type: 'docx',
        label: 'Statewise Companies Report',
      },
      {
        name: 'Rajasthan_E_Waste_Management_Presentation-1 (1).pptx',
        path: '/assignments/ISA/Rajasthan_E_Waste_Management_Presentation-1 (1).pptx',
        size: 186058,
        type: 'pptx',
        label: 'Management Presentation Slides',
      },
    ],
    links: [],
    tags: ['EPR Companies', 'Rajasthan', 'Recyclers', 'Dismantlers', 'RSPCB'],
  },

  // ─────────────────────────────────────────────────────────────
  // ESE (End Semester Examination) Activities
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ese-01',
    number: 6,
    title: 'Corporate E-Waste Compliance: Review of 5 Leading Indian Electronics Manufacturers',
    category: 'ESE',
    date: '2026-08-31',
    description:
      'Statutory compliance review of prominent Indian manufacturers against E-Waste (Management) Rules 2022, examining EPR targets and take-back channels.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-01-d1',
        label: 'Company Compliance Audit Report',
        type: 'report',
        fileName: 'EWEM_31st_august_task (1).docx',
        completed: true,
      },
    ],
    files: [
      {
        name: 'EWEM_31st_august_task (1).docx',
        path: '/assignments/ESE/EWEM_31st_august_task (1).docx',
        size: 53366,
        type: 'docx',
        label: '5 Companies Compliance Review',
      },
    ],
    links: [],
    tags: ['E-Waste Rules 2022', 'Corporate Compliance', 'EPR Targets', 'Dixon', 'Kaynes'],
  },
  {
    id: 'ese-02',
    number: 7,
    title: 'E-Waste Awareness Campaign: Campus E-Waste Quiz Initiative',
    category: 'ESE',
    date: '2026-09-07',
    description:
      'Campus-wide sustainability drive and awareness quiz competition designed to educate engineering students on responsible e-waste disposal and recycling.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-02-d1',
        label: 'Official Campus Quiz Event Poster & Registration Campaign',
        type: 'poster',
        fileName: 'WhatsApp Image 2026-09-07 at 12.23.13 PM.jpeg',
        completed: true,
      },
    ],
    files: [
      {
        name: 'WhatsApp Image 2026-09-07 at 12.23.13 PM.jpeg',
        path: '/assignments/ESE/WhatsApp Image 2026-09-07 at 12.23.13 PM.jpeg',
        size: 221944,
        type: 'image',
        label: 'Campus Quiz Campaign Poster',
      },
    ],
    links: [],
    tags: ['Awareness Campaign', 'Campus Initiative', 'Poster', 'Quiz', 'Student Engagement'],
  },
  {
    id: 'ese-03',
    number: 8,
    title: 'LEED Green Building Certification: 10 Indian Case Studies & Detailed Factor Scores',
    category: 'ESE',
    date: '2026-09-15',
    description:
      'Evaluation of India’s foremost green commercial buildings against LEED rating categories, combining quantitative scorecard data with case-study analysis.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-03-d1',
        label: 'LEED Factor Scores & Evaluation Workbook',
        type: 'spreadsheet',
        fileName: 'Indian_Green_Buildings_LEED_Detailed_Factor_Scores-1 (1).xlsx',
        completed: true,
      },
      {
        id: 'ese-03-d2',
        label: '10 Indian Green Buildings Case Study & Rating System Breakdown',
        type: 'case_study',
        fileName: 'LEED Certificate Rating System of Green Building in India 1.jpeg',
        completed: true,
      },
    ],
    files: [
      {
        name: 'Indian_Green_Buildings_LEED_Detailed_Factor_Scores-1 (1).xlsx',
        path: '/assignments/ESE/Indian_Green_Buildings_LEED_Detailed_Factor_Scores-1 (1).xlsx',
        size: 20975,
        type: 'xlsx',
        label: 'Detailed Factor Scores Sheet',
      },
      {
        name: 'LEED Certificate Rating System of Green Building in India 1.jpeg',
        path: '/assignments/ESE/LEED Certificate Rating System of Green Building in India 1.jpeg',
        size: 2160642,
        type: 'image',
        label: '10 Green Buildings Handwritten Case Study',
      },
    ],
    links: [],
    tags: ['LEED', 'Green Buildings', 'Energy Efficiency', 'Suzlon', 'CII Godrej'],
  },
  {
    id: 'ese-04',
    number: 9,
    title: 'Personal Carbon Footprint Calculation & Climate Impact Assessment',
    category: 'ESE',
    date: '2026-09-22',
    description:
      'Quantitative individual carbon audit measuring annual greenhouse gas emissions across household energy, transport, and aviation against national and global averages.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-04-d1',
        label: 'Carbon Footprint Audit Results & Sector Breakdown',
        type: 'poster',
        fileName: 'carbon_footprint (1).jpeg',
        completed: true,
      },
      {
        id: 'ese-04-d2',
        label: 'Online Carbon Footprint Calculator Portal',
        type: 'link',
        completed: true,
      },
    ],
    files: [
      {
        name: 'carbon_footprint (1).jpeg',
        path: '/assignments/ESE/carbon_footprint (1).jpeg',
        size: 56958,
        type: 'image',
        label: 'Carbon Footprint Audit Screenshot',
      },
    ],
    links: [
      {
        label: 'Carbon Footprint Calculator Portal',
        url: 'https://calculator.carbonfootprint.com',
      },
    ],
    tags: ['Carbon Footprint', 'CO2e Audit', 'Emissions', 'Sustainability Metric'],
  },
  {
    id: 'ese-05',
    number: 10,
    title: 'Comparative Study of European E-Waste Regulations Across 5 Countries',
    category: 'ESE',
    date: '2026-10-02',
    description:
      'Cross-national comparative analysis benchmarking WEEE implementation, take-back infrastructure, and recovery quotas across Germany, France, Netherlands, Sweden, and Spain.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-05-d1',
        label: '5-Country European E-Waste Rules Comparison Report',
        type: 'report',
        fileName: 'Europe_EWaste_Rules_Comparison_5_Countries (1).docx',
        completed: true,
      },
    ],
    files: [
      {
        name: 'Europe_EWaste_Rules_Comparison_5_Countries (1).docx',
        path: '/assignments/ESE/Europe_EWaste_Rules_Comparison_5_Countries (1).docx',
        size: 53160,
        type: 'docx',
        label: 'European Rules Comparison Report',
      },
    ],
    links: [],
    tags: ['Europe', 'WEEE Directive', 'Germany', 'France', 'Sweden', 'Policy'],
  },
  {
    id: 'ese-06',
    number: 11,
    title: 'E-Waste Recovery Process: Hydrometallurgy & Suggested Optimizations',
    category: 'ESE',
    date: '2026-10-10',
    description:
      'Three-part research analysis detailing chemical leaching, hydrometallurgical circuit modifications, and state diagnostic signatures for streamlined metal extraction.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-06-d1',
        label: 'Part 1: Hydrometallurgy Process Flow Description',
        type: 'report',
        fileName: '01_Hydrometallurgy_Process (1).docx',
        completed: true,
      },
      {
        id: 'ese-06-d2',
        label: 'Part 2: Proposed Modifications & Minimized Workflow',
        type: 'report',
        fileName: '02_Hydrometallurgy_Modifications (1).docx',
        completed: true,
      },
      {
        id: 'ese-06-d3',
        label: 'Part 3: Rajasthan E-Waste Signature Diagnostic',
        type: 'report',
        fileName: '03_Rajasthan_EWaste_Signature (1).docx',
        completed: true,
      },
    ],
    files: [
      {
        name: '01_Hydrometallurgy_Process (1).docx',
        path: '/assignments/ESE/01_Hydrometallurgy_Process (1).docx',
        size: 118404,
        type: 'docx',
        label: 'Part 1 — Process Description',
      },
      {
        name: '02_Hydrometallurgy_Modifications (1).docx',
        path: '/assignments/ESE/02_Hydrometallurgy_Modifications (1).docx',
        size: 222152,
        type: 'docx',
        label: 'Part 2 — Workflow Modifications',
      },
      {
        name: '03_Rajasthan_EWaste_Signature (1).docx',
        path: '/assignments/ESE/03_Rajasthan_EWaste_Signature (1).docx',
        size: 3018815,
        type: 'docx',
        label: 'Part 3 — Rajasthan Diagnostic Signature',
      },
    ],
    links: [],
    tags: ['Hydrometallurgy', 'Metal Recovery', 'Leaching', 'Process Optimization', 'Precious Metals'],
  },
  {
    id: 'ese-07',
    number: 12,
    title: 'E-Revive: Sustainable Electronics Lifecycle & E-Waste Initiative',
    category: 'ESE',
    date: '2026-10-16',
    description:
      'Comprehensive project presentation proposing E-Revive, a closed-loop platform for consumer electronics collection, refurbishment, and urban mining.',
    submitted: true,
    deliverables: [
      {
        id: 'ese-07-d1',
        label: 'E-Revive Project Presentation Slide Deck',
        type: 'presentation',
        fileName: 'E-Revive Presentation (1) (1).pdf',
        completed: true,
      },
    ],
    files: [
      {
        name: 'E-Revive Presentation (1) (1).pdf',
        path: '/assignments/ESE/E-Revive Presentation (1) (1).pdf',
        size: 665311,
        type: 'pdf',
        label: 'E-Revive Slide Deck',
      },
    ],
    links: [],
    tags: ['E-Revive', 'Refurbishment', 'Circular Economy', 'Startup Model', 'Urban Mining'],
  },

  // ─────────────────────────────────────────────────────────────
  // Extras (Specialized Reports & Research Papers)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'extras-01',
    number: 13,
    title: 'MSE-2: Comprehensive Report on 10 Global & National E-Waste Case Studies',
    category: 'Extras',
    date: '2026-10-20',
    description:
      'Exhaustive semester portfolio report synthesising 10 international and Indian e-waste management benchmarks including Japan, Switzerland, and Indian EPR policies.',
    submitted: true,
    deliverables: [
      {
        id: 'extras-01-d1',
        label: '10 Global & National E-Waste Case Studies Final Report',
        type: 'case_study',
        fileName: 'MSE2_All_10_EWaste_Case_Studies_Report_Dakshata_Mhatre_Final (1).docx',
        completed: true,
      },
    ],
    files: [
      {
        name: 'MSE2_All_10_EWaste_Case_Studies_Report_Dakshata_Mhatre_Final (1).docx',
        path: '/assignments/Extras/MSE2_All_10_EWaste_Case_Studies_Report_Dakshata_Mhatre_Final (1).docx',
        size: 54155,
        type: 'docx',
        label: 'MSE-2 10 Case Studies Report',
      },
    ],
    links: [],
    tags: ['MSE-2', '10 Case Studies', 'Japan', 'Switzerland', 'India Rules 2022', 'Global Policy'],
  },
  {
    id: 'extras-02',
    number: 14,
    title: 'Research Paper: Disclosure Before Trust — Subgroup-Aware Ethical Transparency in AI (CYCRAI 2027)',
    category: 'Extras',
    date: '2026-10-25',
    description:
      'Co-authored research paper on ethical transparency, subgroup-aware calibration, and reliance dynamics in human-AI decision systems submitted to CYCRAI 2027.',
    submitted: true,
    deliverables: [
      {
        id: 'extras-02-d1',
        label: 'Full Research Paper Manuscript (CYCRAI 2027)',
        type: 'research_paper',
        fileName: 'CYCRAI2027_Research_Paper 1.pdf',
        completed: true,
      },
    ],
    files: [
      {
        name: 'CYCRAI2027_Research_Paper 1.pdf',
        path: '/assignments/Extras/CYCRAI2027_Research_Paper 1.pdf',
        size: 427403,
        type: 'pdf',
        label: 'CYCRAI 2027 Research Paper PDF',
      },
    ],
    links: [],
    tags: ['Research Paper', 'CYCRAI 2027', 'Ethical AI', 'Transparency', 'Human-in-the-Loop'],
  },
]
