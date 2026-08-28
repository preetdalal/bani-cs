// ICSI CS Executive Syllabus 2022 - Complete Structured Data
// Note: Strictly no em dashes used in text content.

const SYLLABUS_DATA = {
  groups: [
    {
      id: "group-1",
      name: "Group 1",
      description: "Foundational & Corporate Core Laws (4 Papers - 400 Marks)",
      papers: [
        {
          id: "paper-1",
          code: "P1",
          name: "Jurisprudence, Interpretation & General Laws",
          shortName: "JIGL",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "Understanding legal theory, constitutional foundation, civil/criminal laws, statutory interpretation, and procedural codes.",
          parts: [
            {
              name: "General Laws & Jurisprudence (100 Marks)",
              marks: 100,
              chapters: [
                {
                  id: "p1-c1",
                  number: 1,
                  title: "Sources of Law",
                  subtopics: "Jurisprudence, Schools of Law (Austin, Pound, Salmond, Kelsen), Precedents, Custom, Statutes, Stare Decisis",
                  important: true
                },
                {
                  id: "p1-c2",
                  number: 2,
                  title: "Constitution of India",
                  subtopics: "Preamble, Fundamental Rights (Articles 12 to 35), Directive Principles, Fundamental Duties, Writ Jurisdiction",
                  important: true
                },
                {
                  id: "p1-c3",
                  number: 3,
                  title: "Interpretation of Statutes",
                  subtopics: "Primary & Secondary Rules of Construction, Mischief Rule, Golden Rule, Harmonious Construction, Internal & External Aids",
                  important: true
                },
                {
                  id: "p1-c4",
                  number: 4,
                  title: "Administrative Laws",
                  subtopics: "Delegated Legislation, Principles of Natural Justice (Nemo Judex, Audi Alteram Partem), Judicial Review, Ombudsman",
                  important: false
                },
                {
                  id: "p1-c5",
                  number: 5,
                  title: "Law of Torts",
                  subtopics: "General Principles, Negligence, Nuisance, Defamation, Strict & Absolute Liability (Rylands v. Fletcher, M.C. Mehta)",
                  important: false
                },
                {
                  id: "p1-c6",
                  number: 6,
                  title: "Law relating to Civil Procedure (CPC, 1908)",
                  subtopics: "Jurisdiction, Res Sub Judice, Res Judicata, Pleadings, Plaint, Written Statement, Execution, Appeals, Revision & Review",
                  important: true
                },
                {
                  id: "p1-c7",
                  number: 7,
                  title: "Laws relating to Crime and its Procedure (BNSS / CrPC & BNS)",
                  subtopics: "Cognizable & Non-Cognizable Offences, Bailable & Non-Bailable, FIR, Arrest, Bail Provisions, Trial Procedures",
                  important: true
                },
                {
                  id: "p1-c8",
                  number: 8,
                  title: "Law relating to Evidence (BSA / Indian Evidence Act)",
                  subtopics: "Relevancy and Admissibility of Facts, Primary & Secondary Evidence, Burden of Proof, Estoppel, Electronic Records",
                  important: true
                },
                {
                  id: "p1-c9",
                  number: 9,
                  title: "Law relating to Limitation (Limitation Act, 1963)",
                  subtopics: "Period of Limitation, Condonation of Delay (Section 5), Continuous Running of Time, Computation of Limitation",
                  important: false
                },
                {
                  id: "p1-c10",
                  number: 10,
                  title: "Law relating to Arbitration, Mediation and Conciliation",
                  subtopics: "Arbitration Agreement, Appointment of Arbitrators, Arbitral Awards, Fast Track Arbitration, Mediation Act Provisions",
                  important: true
                },
                {
                  id: "p1-c11",
                  number: 11,
                  title: "Right to Information Law (RTI Act, 2005)",
                  subtopics: "Public Authorities, PIO Obligations, Exemption from Disclosure (Section 8), First & Second Appeals, Penalties",
                  important: false
                },
                {
                  id: "p1-c12",
                  number: 12,
                  title: "Law relating to Information Technology (IT Act, 2000)",
                  subtopics: "Digital Signatures, Electronic Governance, Attribution, Cyber Offences, Intermediary Guidelines, Cyber Appellate Tribunal",
                  important: false
                },
                {
                  id: "p1-c13",
                  number: 13,
                  title: "Contract Law (Indian Contract Act, 1872 & Specific Relief Act)",
                  subtopics: "Offer, Acceptance, Consideration, Capacity, Free Consent, Quasi-Contracts, Breach & Damages, Specific Relief Remedies",
                  important: true
                },
                {
                  id: "p1-c14",
                  number: 14,
                  title: "Law relating to Negotiable Instruments (NI Act, 1881)",
                  subtopics: "Promissory Notes, Bills of Exchange, Cheques, Holder in Due Course, Dishonour of Cheques (Section 138 to 142)",
                  important: true
                }
              ]
            }
          ]
        },
        {
          id: "paper-2",
          code: "P2",
          name: "Company Law & Practice",
          shortName: "CLP",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "In-depth study of corporate formation, administration, board practices, general meetings, governance and secretarial standards.",
          parts: [
            {
              name: "Part I: Company Law - Principles & Concepts (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p2-c1",
                  number: 1,
                  title: "Introduction to Company Law",
                  subtopics: "Meaning, Nature, Characteristics of Company, Lifting the Corporate Veil, Applicable Framework under Companies Act 2013",
                  important: true
                },
                {
                  id: "p2-c2",
                  number: 2,
                  title: "Legal Status & Types of Registered Companies",
                  subtopics: "Private, Public, OPC, Small Company, Section 8 Company, Holding-Subsidiary, Associate & Foreign Companies",
                  important: true
                },
                {
                  id: "p2-c3",
                  number: 3,
                  title: "Memorandum and Articles of Association & Alteration",
                  subtopics: "MOA Clauses, AOA Clauses, Doctrine of Ultra Vires, Constructive Notice, Indoor Management (Turquand Rule), Alteration Process",
                  important: true
                },
                {
                  id: "p2-c4",
                  number: 4,
                  title: "Share and Share Capital - Concepts",
                  subtopics: "Equity Shares (DVR), Preference Shares, Rights Issue, Private Placement, Bonus Shares, Sweat Equity, ESOPs",
                  important: true
                },
                {
                  id: "p2-c5",
                  number: 5,
                  title: "Members and Shareholders",
                  subtopics: "Modes of Acquiring Membership, Rights of Members, Register of Members, Beneficial Ownership (SBO Provisions)",
                  important: false
                },
                {
                  id: "p2-c6",
                  number: 6,
                  title: "Debt Instruments & Creation and Registration of Charges",
                  subtopics: "Debentures, Types of Charges, Registration of Charges (Section 77), Rectification, Satisfaction of Charges, Penalties",
                  important: true
                },
                {
                  id: "p2-c7",
                  number: 7,
                  title: "Distribution of Profits & Dividend",
                  subtopics: "Ascertainment of Profits, Declaration & Payment of Dividend, Interim Dividend, IEPF Rules and Compliance",
                  important: true
                },
                {
                  id: "p2-c8",
                  number: 8,
                  title: "Corporate Social Responsibility (CSR)",
                  subtopics: "Applicability Criteria (Section 135), CSR Committee, Permissible Activities (Schedule VII), Unspent CSR Account, Penalties",
                  important: true
                },
                {
                  id: "p2-c9",
                  number: 9,
                  title: "Accounts, Audit & Auditors",
                  subtopics: "Books of Account, Financial Statements, Appointment & Removal of Auditors, Internal Audit, Secretarial Audit (Section 204)",
                  important: true
                },
                {
                  id: "p2-c10",
                  number: 10,
                  title: "Transparency & Disclosures",
                  subtopics: "Board Report Disclosures, Annual Return (MGT-7), Directors' Responsibility Statement, Corporate Governance Disclosures",
                  important: false
                },
                {
                  id: "p2-c11",
                  number: 11,
                  title: "Inter-Corporate Loans, Investments, Guarantees & Security",
                  subtopics: "Loans to Directors (Section 185), Inter-corporate Loans & Investments (Section 186), Related Party Transactions (Section 188)",
                  important: true
                },
                {
                  id: "p2-c12",
                  number: 12,
                  title: "Registers and Records",
                  subtopics: "Statutory Registers, Preservation of Documents, Electronic Maintenance of Records, Annual Filings to ROC",
                  important: false
                }
              ]
            },
            {
              name: "Part II: Company Administration & Meetings (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p2-c13",
                  number: 13,
                  title: "Board of Directors - Composition & Powers",
                  subtopics: "Director Types (Independent, Woman, Resident, Small Shareholder), DIN, Appointment, Resignation, Removal, Powers & Duties",
                  important: true
                },
                {
                  id: "p2-c14",
                  number: 14,
                  title: "Key Managerial Personnel (KMP) & Remuneration",
                  subtopics: "Appointment of MD/WTD/Manager/CS/CFO, Managerial Remuneration Limits (Section 197 & Schedule V), Role of Company Secretary",
                  important: true
                },
                {
                  id: "p2-c15",
                  number: 15,
                  title: "Meetings of the Board and its Committees",
                  subtopics: "Notice, Quorum, Frequency, Board Committees (Audit, NRC, SRC, CSR), Resolutions by Circulation, Secretarial Standard 1 (SS-1)",
                  important: true
                },
                {
                  id: "p2-c16",
                  number: 16,
                  title: "General Meetings - Law and Practice",
                  subtopics: "AGM, EGM, Notice Period, Explanatory Statement, Quorum, Chairman, Proxies, Voting, Postal Ballot, E-voting, SS-2",
                  important: true
                },
                {
                  id: "p2-c17",
                  number: 17,
                  title: "Virtual Meetings & Governance Practices",
                  subtopics: "Video Conferencing Protocol for Board and General Meetings, Minutes Preparation, Signing & Preservation Procedures",
                  important: false
                }
              ]
            }
          ]
        },
        {
          id: "paper-3",
          code: "P3",
          name: "Setting Up of Business, Industrial & Labour Laws",
          shortName: "SBILL",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "Entity incorporation, licensing, foreign business expansion, and comprehensive labor legislation under new labor codes.",
          parts: [
            {
              name: "Part I: Setting Up of Business (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p3-c1",
                  number: 1,
                  title: "Selection of Business Organization",
                  subtopics: "Factors determining form of entity, Sole Proprietorship, Partnership, HUF, Society, Trust",
                  important: false
                },
                {
                  id: "p3-c2",
                  number: 2,
                  title: "Corporate Entities - Promotion and Incorporation",
                  subtopics: "SPICe+ Process, Name Reservation (RUN), AGILE-PRO-S, Articles, Drafting of Object Clause",
                  important: true
                },
                {
                  id: "p3-c3",
                  number: 3,
                  title: "Limited Liability Partnership (LLP) Act, 2008",
                  subtopics: "Nature of LLP, LLP Agreement, Designated Partners, Incorporation Process, Annual Compliance (Form 8 & Form 11)",
                  important: true
                },
                {
                  id: "p3-c4",
                  number: 4,
                  title: "Startups and Their Registration",
                  subtopics: "DPIIT Recognition, Tax Exemptions (Section 80-IAC, Section 56 Angel Tax), Government Schemes & Funding Avenues",
                  important: true
                },
                {
                  id: "p3-c5",
                  number: 5,
                  title: "Micro, Small and Medium Enterprises (MSMEs)",
                  subtopics: "MSMED Act 2006, Classification Criteria (Investment & Turnover), Udyam Registration, Delayed Payments Protection",
                  important: true
                },
                {
                  id: "p3-c6",
                  number: 6,
                  title: "Conversion of Business Entities",
                  subtopics: "Private to Public, Public to Private, OPC to Private, Partnership/LLP into Company (Part XXI)",
                  important: true
                },
                {
                  id: "p3-c7",
                  number: 7,
                  title: "Non-Corporate Entities & Special Forms",
                  subtopics: "Trusts, Societies, Section 8 Companies, Producer Companies, Co-operative Societies",
                  important: false
                },
                {
                  id: "p3-c8",
                  number: 8,
                  title: "Financial Services Organizations & Registration",
                  subtopics: "NBFCs Classification & RBI Registration, Payment Banks, Small Finance Banks, Housing Finance Companies",
                  important: true
                },
                {
                  id: "p3-c9",
                  number: 9,
                  title: "Business Collaborations, JVs & SPVs",
                  subtopics: "Foreign Direct Investment, Joint Venture Agreements, Technology Transfers, Special Purpose Vehicles",
                  important: false
                },
                {
                  id: "p3-c10",
                  number: 10,
                  title: "Branch, Liaison & Project Office by Foreign Companies",
                  subtopics: "RBI Guidelines, Eligibility, Approval Route vs Automatic Route, Permitted Activities, Annual Activity Certificate",
                  important: true
                },
                {
                  id: "p3-c11",
                  number: 11,
                  title: "Setting up Business Outside India",
                  subtopics: "Overseas Direct Investment (ODI) Rules, Automatic Route, Financial Commitment, Reporting to RBI",
                  important: false
                },
                {
                  id: "p3-c12",
                  number: 12,
                  title: "Industry Specific Laws & Initial Compliances",
                  subtopics: "Environmental Clearances (Pollution Control Boards), Factory Setup, Real Estate Regulatory Framework",
                  important: false
                },
                {
                  id: "p3-c13",
                  number: 13,
                  title: "Initial Registrations and Licences",
                  subtopics: "PAN, TAN, GST Registration, Shops & Commercial Establishments, FSSAI Licence, Import Export Code (IEC)",
                  important: true
                }
              ]
            },
            {
              name: "Part II: Industrial & Labour Laws (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p3-c14",
                  number: 14,
                  title: "Constitution and Labour Laws",
                  subtopics: "Fundamental Rights and Directive Principles related to Labour, Equal Pay for Equal Work, Forced Labour Prohibitions",
                  important: false
                },
                {
                  id: "p3-c15",
                  number: 15,
                  title: "Evolution of Labour Legislation & Labour Codes",
                  subtopics: "Rationalization of 29 Central Labour Acts into 4 Modern Codes, Objectives & Impact on Industry",
                  important: true
                },
                {
                  id: "p3-c16",
                  number: 16,
                  title: "Occupational Safety, Health & Working Conditions Code, 2020",
                  subtopics: "Duties of Employers, Health & Safety Standards, Working Hours, Leave with Wages, Contract Labour Regulations",
                  important: true
                },
                {
                  id: "p3-c17",
                  number: 17,
                  title: "The Industrial Relations Code, 2020",
                  subtopics: "Trade Unions Registration, Standing Orders, Layoff, Retrenchment, Closure, Strike & Lockout Provisions, Dispute Resolution",
                  important: true
                },
                {
                  id: "p3-c18",
                  number: 18,
                  title: "The Code on Wages, 2019",
                  subtopics: "Minimum Wages Determination, Floor Wage, Payment of Wages Timelines, Deductions, Annual Bonus Calculation",
                  important: true
                },
                {
                  id: "p3-c19",
                  number: 19,
                  title: "The Code on Social Security, 2020",
                  subtopics: "EPF, ESI, Gratuity, Maternity Benefits, Social Security Fund for Gig and Platform Workers, Cess Provisions",
                  important: true
                },
                {
                  id: "p3-c20",
                  number: 20,
                  title: "Child and Adolescent Labour (Prohibition) Act, 1986",
                  subtopics: "Prohibition in Hazardous Occupations, Regulations on Work Conditions, Penalties and Rehabilitation",
                  important: false
                },
                {
                  id: "p3-c21",
                  number: 21,
                  title: "Apprentices Act, 1961",
                  subtopics: "Contract of Apprenticeship, Obligations of Employers, Working Hours, Stipend, Dispute Settlements",
                  important: false
                },
                {
                  id: "p3-c22",
                  number: 22,
                  title: "Labour Law Compliances & Simplification of Procedures",
                  subtopics: "Shram Suvidha Portal, Electronic Registers, Single Web Returns, Exemption for Small Establishments",
                  important: false
                }
              ]
            }
          ]
        },
        {
          id: "paper-4",
          code: "P4",
          name: "Corporate Accounting & Financial Management",
          shortName: "CAFM",
          marks: 100,
          pattern: "100% Descriptive (Theoretical & Numerical)",
          duration: "3 Hours",
          description: "Company accounts under Schedule III, Ind AS, consolidation, alongside capital budgeting, valuation, cost of capital, and working capital.",
          parts: [
            {
              name: "Part I: Corporate Accounting (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p4-c1",
                  number: 1,
                  title: "Introduction to Financial Accounting & Ind AS",
                  subtopics: "Accounting Concepts, Conventions, Indian Accounting Standards (Ind AS) Framework, Applicability & Roadmap",
                  important: true
                },
                {
                  id: "p4-c2",
                  number: 2,
                  title: "Accounting for Share Capital",
                  subtopics: "Issue of Shares at Par/Premium/Discount, Forfeiture, Reissue, Right Issue, Bonus Shares, Buy-back of Shares, ESOPs",
                  important: true
                },
                {
                  id: "p4-c3",
                  number: 3,
                  title: "Accounting for Debentures & Preference Shares",
                  subtopics: "Issue & Redemption of Debentures (DRR, DRI), Sinking Fund Method, Redemption of Preference Shares (CRR Creation)",
                  important: true
                },
                {
                  id: "p4-c4",
                  number: 4,
                  title: "Financial Statements of Companies (Schedule III)",
                  subtopics: "Preparation of Statement of Profit & Loss and Balance Sheet as per Companies Act 2013, Managerial Remuneration",
                  important: true
                },
                {
                  id: "p4-c5",
                  number: 5,
                  title: "Cash Flow Statement & Financial Analysis",
                  subtopics: "Operating, Investing & Financing Activities (Ind AS 7 / AS 3), Ratio Analysis, Comparative Statements",
                  important: true
                },
                {
                  id: "p4-c6",
                  number: 6,
                  title: "Corporate Restructuring & Consolidation of Accounts",
                  subtopics: "Amalgamation, Absorption, Reconstruction, Holding-Subsidiary Consolidation (Ind AS 110), Minority Interest",
                  important: true
                },
                {
                  id: "p4-c7",
                  number: 7,
                  title: "Overview of Corporate Valuation",
                  subtopics: "Valuation of Shares (Net Asset, Yield, Dual Method), Business Valuation, Intangibles & Goodwill Valuation",
                  important: true
                }
              ]
            },
            {
              name: "Part II: Financial Management (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p4-c8",
                  number: 8,
                  title: "Introduction to FM & Time Value of Money",
                  subtopics: "Objectives of FM (Profit vs Wealth Maximization), Compounding, Discounting, Annuities, Present & Future Value",
                  important: true
                },
                {
                  id: "p4-c9",
                  number: 9,
                  title: "Capital Budgeting Decisions",
                  subtopics: "Payback Period, ARR, NPV, IRR, Profitability Index (PI), Capital Rationing, Risk Analysis in Capital Budgeting",
                  important: true
                },
                {
                  id: "p4-c10",
                  number: 10,
                  title: "Cost of Capital & Capital Structure",
                  subtopics: "Cost of Debt, Equity, Preference & Retained Earnings, WACC, Capital Structure Theories (NI, NOI, MM, Traditional)",
                  important: true
                },
                {
                  id: "p4-c11",
                  number: 11,
                  title: "Leverage Analysis",
                  subtopics: "Operating Leverage (DOL), Financial Leverage (DFL), Combined Leverage (DCL), EBIT-EPS Analysis & Indifference Point",
                  important: true
                },
                {
                  id: "p4-c12",
                  number: 12,
                  title: "Dividend Policy & Decisions",
                  subtopics: "Walter's Model, Gordon's Model, Modigliani-Miller (MM) Hypothesis, Determinants of Dividend Policy",
                  important: true
                },
                {
                  id: "p4-c13",
                  number: 13,
                  title: "Working Capital Management",
                  subtopics: "Operating Cycle, Estimation of Working Capital, Cash Management, Receivables Management (Factoring), Inventory Control",
                  important: true
                },
                {
                  id: "p4-c14",
                  number: 14,
                  title: "Security Analysis & Portfolio Management Basics",
                  subtopics: "Risk and Return, Systematic vs Unsystematic Risk, Capital Asset Pricing Model (CAPM), Portfolio Diversification",
                  important: false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "group-2",
      name: "Group 2",
      description: "Securities, Commercial, IP & Tax Laws (3 Papers - 300 Marks)",
      papers: [
        {
          id: "paper-5",
          code: "P5",
          name: "Capital Market & Securities Laws",
          shortName: "CMSL",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "Primary & secondary market mechanics, SEBI regulatory frameworks, listing obligations, takeovers, and insider trading.",
          parts: [
            {
              name: "Part I: Capital Market (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p5-c1",
                  number: 1,
                  title: "Basics of Capital Market & Financial System",
                  subtopics: "Primary Market, Secondary Market, Stock Exchanges, Market Infrastructure Institutions (MIIs), Trading & Settlement",
                  important: true
                },
                {
                  id: "p5-c2",
                  number: 2,
                  title: "Secondary Market Operations & Intermediaries",
                  subtopics: "Brokers, Sub-brokers, Merchant Bankers, Underwriters, Credit Rating Agencies, Market Makers, KYC Norms",
                  important: true
                },
                {
                  id: "p5-c3",
                  number: 3,
                  title: "Mutual Funds & Collective Investment Schemes",
                  subtopics: "Structure of Mutual Funds (AMC, Trustees, Sponsor), Types of Schemes, NAV Calculation, SEBI (MF) Regulations",
                  important: true
                },
                {
                  id: "p5-c4",
                  number: 4,
                  title: "Alternative Investment Funds, REITs & InvITs",
                  subtopics: "AIF Categories (I, II, III), Real Estate Investment Trusts, Infrastructure Investment Trusts, Angel Funds, Social Stock Exchange",
                  important: true
                },
                {
                  id: "p5-c5",
                  number: 5,
                  title: "Foreign Portfolio Investors & IFSC",
                  subtopics: "FPI Regulations, Eligibility, Investment Limits, International Financial Services Centres Authority (IFSCA) Rules",
                  important: false
                }
              ]
            },
            {
              name: "Part II: Securities Laws (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p5-c6",
                  number: 6,
                  title: "Securities Contracts (Regulation) Act, 1956 & Rules",
                  subtopics: "Recognition of Stock Exchanges, Contracts in Securities, Derivatives, Delisting, Right to Appeal (SAT)",
                  important: true
                },
                {
                  id: "p5-c7",
                  number: 7,
                  title: "SEBI Act, 1992 & Regulatory Powers",
                  subtopics: "Functions of SEBI, Powers of Investigation & Adjudication, Penalties, Securities Appellate Tribunal (SAT)",
                  important: true
                },
                {
                  id: "p5-c8",
                  number: 8,
                  title: "Depositories Act, 1996 & Depository System",
                  subtopics: "Dematerialisation, Fungibility, Rights of Beneficiaries, NSDL, CDSL, Depository Participants (DP)",
                  important: true
                },
                {
                  id: "p5-c9",
                  number: 9,
                  title: "SEBI (ICDR) Regulations - Issue of Capital",
                  subtopics: "IPO, FPO, Rights Issue, Preferential Issue, QIP, Promoters' Contribution, Lock-in, Book Building, ASBA, Underwriting",
                  important: true
                },
                {
                  id: "p5-c10",
                  number: 10,
                  title: "SEBI (LODR) Regulations - Listing Obligations",
                  subtopics: "Corporate Governance Requirements, Board Composition, Audit Committee, Prior Intimations, Disclosure of Event/Info (Reg 30)",
                  important: true
                },
                {
                  id: "p5-c11",
                  number: 11,
                  title: "SEBI (SAST) Regulations - Substantial Acquisition & Takeovers",
                  subtopics: "Acquisition Triggers (25%), Mandatory Open Offer, Voluntary Offer, Exemptions, Creeping Acquisition, Escrow Account",
                  important: true
                },
                {
                  id: "p5-c12",
                  number: 12,
                  title: "SEBI (PIT) Regulations - Prohibition of Insider Trading",
                  subtopics: "UPSI, Connected Person, Insider, Trading Window, Pre-clearance, Code of Conduct, Structured Digital Database (SDD)",
                  important: true
                },
                {
                  id: "p5-c13",
                  number: 13,
                  title: "SEBI (Buy-Back of Securities) & Delisting",
                  subtopics: "Methods of Buyback (Tender Offer, Open Market), Escrow Mechanism, Voluntary and Compulsory Delisting (RBB Process)",
                  important: true
                },
                {
                  id: "p5-c14",
                  number: 14,
                  title: "SEBI (SBEB & Sweat Equity) Regulations",
                  subtopics: "ESOP, ESPS, SARs, General Employee Benefits, Sweat Equity Issue Rules, Valuation and Disclosures",
                  important: false
                }
              ]
            }
          ]
        },
        {
          id: "paper-6",
          code: "P6",
          name: "Economic, Commercial & Intellectual Property Laws",
          shortName: "ECIPL",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "Foreign exchange regulations, competition, consumer protection, property laws, and intellectual property rights (IPR).",
          parts: [
            {
              name: "Part I: Economic and Commercial Laws (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p6-c1",
                  number: 1,
                  title: "Foreign Exchange Management Act, 1999 (FEMA)",
                  subtopics: "Current Account vs Capital Account Transactions, Residential Status under FEMA, Authorized Persons, Penalties",
                  important: true
                },
                {
                  id: "p6-c2",
                  number: 2,
                  title: "Foreign Direct Investment (FDI) Regulations",
                  subtopics: "Automatic Route vs Government Approval Route, Prohibited Sectors, Downstream Investment, FC-GPR & FC-TRS Filings",
                  important: true
                },
                {
                  id: "p6-c3",
                  number: 3,
                  title: "Overseas Direct Investment (ODI) & External Commercial Borrowings (ECB)",
                  subtopics: "ODI Limits, Financial Commitment, ECB Parameters (Maturity, All-in-cost Ceiling, End-use restrictions)",
                  important: true
                },
                {
                  id: "p6-c4",
                  number: 4,
                  title: "Prevention of Money Laundering Act, 2002 (PMLA)",
                  subtopics: "Offence of Money Laundering, Attachment of Property, Obligations of Banking Companies & Intermediaries, FIU-IND",
                  important: true
                },
                {
                  id: "p6-c5",
                  number: 5,
                  title: "Fugitive Economic Offenders & Benami Transactions Law",
                  subtopics: "Declaration of Fugitive Economic Offender, Confiscation of Property, Prohibition of Benami Property Transactions Act",
                  important: true
                },
                {
                  id: "p6-c6",
                  number: 6,
                  title: "Competition Act, 2002",
                  subtopics: "Anti-Competitive Agreements (Section 3), Abuse of Dominant Position (Section 4), Regulation of Combinations (Section 5/6), CCI",
                  important: true
                },
                {
                  id: "p6-c7",
                  number: 7,
                  title: "Consumer Protection Act, 2019",
                  subtopics: "Consumer Rights, Central Consumer Protection Authority (CCPA), Product Liability, Dispute Redressal Commissions (District, State, National)",
                  important: true
                },
                {
                  id: "p6-c8",
                  number: 8,
                  title: "Real Estate (Regulation and Development) Act, 2016 (RERA)",
                  subtopics: "Registration of Real Estate Projects, Functions of Promoters, Allottee Rights, RERA Authority & Appellate Tribunal",
                  important: true
                },
                {
                  id: "p6-c9",
                  number: 9,
                  title: "Special Economic Zones Act, 2005 (SEZ)",
                  subtopics: "Establishment of SEZ, Setting up of Units, Fiscal Concessions and Incentives, Single Window Clearance Mechanism",
                  important: false
                }
              ]
            },
            {
              name: "Part II: Intellectual Property Laws (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p6-c10",
                  number: 10,
                  title: "Law relating to Patents (Patents Act, 1970)",
                  subtopics: "Patentability Criteria (Novelty, Inventive Step, Industrial Application), Non-patentable Inventions (Section 3), Infringement & Remedies",
                  important: true
                },
                {
                  id: "p6-c11",
                  number: 11,
                  title: "Law relating to Trade Marks (Trade Marks Act, 1999)",
                  subtopics: "Absolute & Relative Grounds for Refusal, Registration Procedure, Well-Known Trademarks, Infringement vs Passing Off",
                  important: true
                },
                {
                  id: "p6-c12",
                  number: 12,
                  title: "Law relating to Copyrights (Copyright Act, 1957)",
                  subtopics: "Works protected, Ownership of Copyright, Moral Rights, Fair Dealing Provisions, Term of Copyright, Copyright Societies",
                  important: true
                },
                {
                  id: "p6-c13",
                  number: 13,
                  title: "Law relating to Geographical Indications (GI Act, 1999)",
                  subtopics: "Meaning of GI, Registration Process, Authorized Users, Infringement, Distinction between Trademark & GI",
                  important: false
                },
                {
                  id: "p6-c14",
                  number: 14,
                  title: "Law relating to Industrial Designs (Designs Act, 2000)",
                  subtopics: "Definition of Design, Novelty & Originality, Prohibition of Registration, Piracy of Registered Design",
                  important: false
                },
                {
                  id: "p6-c15",
                  number: 15,
                  title: "Trade Secrets, Cyber IPR & International Treaties",
                  subtopics: "Protection of Confidential Information, Domain Name Disputes (UDRP), Overview of TRIPS Agreement, Paris Convention, WIPO",
                  important: false
                }
              ]
            }
          ]
        },
        {
          id: "paper-7",
          code: "P7",
          name: "Tax Laws & Practice",
          shortName: "TLP",
          marks: 100,
          pattern: "20% Case-based Objective + 80% Descriptive",
          duration: "3 Hours",
          description: "Direct taxation under Income Tax Act (all five heads and entity assessments) and Indirect taxation under GST and Customs Act.",
          parts: [
            {
              name: "Part I: Direct Tax (60 Marks)",
              marks: 60,
              chapters: [
                {
                  id: "p7-c1",
                  number: 1,
                  title: "Basic Concepts of Income Tax & Basis of Charge",
                  subtopics: "Assessment Year, Previous Year, Person, Assessee, Gross Total Income, Tax Rates under Old vs New Tax Regime (Section 115BAC)",
                  important: true
                },
                {
                  id: "p7-c2",
                  number: 2,
                  title: "Residential Status and Scope of Total Income",
                  subtopics: "Residential Status of Individuals, HUF, Companies (POEM), Scope of Total Income based on Residence, Deemed Residency",
                  important: true
                },
                {
                  id: "p7-c3",
                  number: 3,
                  title: "Incomes Exempt from Tax (Section 10)",
                  subtopics: "Agricultural Income, Gratuity, Leave Encashment, Retrenchment Compensation, Incomes of Minor, Exempt Allowances",
                  important: true
                },
                {
                  id: "p7-c4",
                  number: 4,
                  title: "Heads of Income: Salaries",
                  subtopics: "Allowances (HRA, Children Education), Perquisites Valuation (Accommodation, Motor Car), Standard Deduction, Gratuity, Pension, PF",
                  important: true
                },
                {
                  id: "p7-c5",
                  number: 5,
                  title: "Heads of Income: Income from House Property",
                  subtopics: "Gross Annual Value (GAV), Municipal Taxes, Net Annual Value (NAV), Deductions under Section 24 (Standard & Interest on Loan)",
                  important: true
                },
                {
                  id: "p7-c6",
                  number: 6,
                  title: "Heads of Income: Profits & Gains of Business or Profession (PGBP)",
                  subtopics: "Admissible Deductions (Depreciation Section 32, Section 37), Inadmissible Expenses, Presumptive Taxation (44AD, 44ADA, 44AE), Tax Audit (44AB)",
                  important: true
                },
                {
                  id: "p7-c7",
                  number: 7,
                  title: "Heads of Income: Capital Gains",
                  subtopics: "Short Term vs Long Term Capital Assets, Indexation, Special Rates (111A, 112, 112A), Exemptions under Section 54, 54EC, 54F",
                  important: true
                },
                {
                  id: "p7-c8",
                  number: 8,
                  title: "Heads of Income: Income from Other Sources (IFOS)",
                  subtopics: "Dividend Income, Casual Income (Lottery, Betting), Gift Taxation (Section 56(2)(x)), Family Pension, Share Premium (56(2)(viib))",
                  important: true
                },
                {
                  id: "p7-c9",
                  number: 9,
                  title: "Clubbing of Income",
                  subtopics: "Income of Spouse, Minor Child, Son's Wife, Cross Transfers, Revocable Transfer of Assets (Section 60 to 65)",
                  important: true
                },
                {
                  id: "p7-c10",
                  number: 10,
                  title: "Set-off and Carry Forward of Losses",
                  subtopics: "Inter-source vs Inter-head Set-off Rules, Carry Forward Periods and Conditions for Business, Capital & Speculation Losses",
                  important: true
                },
                {
                  id: "p7-c11",
                  number: 11,
                  title: "Deductions from Gross Total Income (Chapter VI-A)",
                  subtopics: "Section 80C, 80CCC, 80CCD, 80D (Health Insurance), 80DD, 80DDB, 80E, 80G (Donations), 80TTA/80TTB, 80U",
                  important: true
                },
                {
                  id: "p7-c12",
                  number: 12,
                  title: "Computation of Total Income & Tax Liability of Individuals",
                  subtopics: "Rebate under Section 87A, Surcharge Slabs, Health & Education Cess, Marginal Relief, Alternate Minimum Tax (AMT Section 115JC)",
                  important: true
                },
                {
                  id: "p7-c13",
                  number: 13,
                  title: "Procedural Compliance: TDS, TCS, Advance Tax & Returns",
                  subtopics: "TDS Provisions (194A, 194C, 194H, 194I, 194J, 194Q), TCS (206C), Advance Tax Installments, ITR Types, Due Dates, Updated Return (ITR-U)",
                  important: true
                },
                {
                  id: "p7-c14",
                  number: 14,
                  title: "Taxation of Various Entities",
                  subtopics: "Taxation of Partnership Firms & Partners (Section 184/40(b)), LLPs, Hindu Undivided Family (HUF), AOP/BOI, Charitable & Religious Trusts (Section 11-13), Co-operative Societies (Section 115BAD/115BAE)",
                  important: true
                }
              ]
            },
            {
              name: "Part II: Indirect Tax - GST & Customs (40 Marks)",
              marks: 40,
              chapters: [
                {
                  id: "p7-c15",
                  number: 1,
                  title: "Introduction to GST & Constitutional Framework",
                  subtopics: "Need for GST, 101st Constitutional Amendment Act, Article 246A, Dual GST Model (CGST, SGST, IGST, UTGST), GST Council",
                  important: false
                },
                {
                  id: "p7-c16",
                  number: 2,
                  title: "Supply under GST (Concept & Classification)",
                  subtopics: "Scope of Supply (Section 7), Schedule I (without consideration), Schedule II, Schedule III non-supplies, Composite vs Mixed Supplies (Section 8)",
                  important: true
                },
                {
                  id: "p7-c17",
                  number: 3,
                  title: "Charge of GST, Reverse Charge (RCM) & Composition Levy",
                  subtopics: "Forward Charge (Section 9(1)), Reverse Charge Mechanism (Section 9(3)/9(4)), Composition Scheme (Section 10), Eligibility & Ineligibility",
                  important: true
                },
                {
                  id: "p7-c18",
                  number: 4,
                  title: "Exemptions from GST",
                  subtopics: "Power to Grant Exemptions (Section 11), Mega Exemption Notification, Exemptions on Healthcare, Education, Government Services, Agriculture & Transport",
                  important: true
                },
                {
                  id: "p7-c19",
                  number: 5,
                  title: "Place of Supply of Goods and Services",
                  subtopics: "Place of Supply under IGST Act (Section 10 to 14), Domestic vs Cross-border Supplies, Determination of B2B and B2C Supply Location",
                  important: true
                },
                {
                  id: "p7-c20",
                  number: 6,
                  title: "Time and Value of Supply",
                  subtopics: "Time of Supply for Goods (Section 12) & Services (Section 13), Valuation of Supply (Section 15 & Rules), Transaction Value, Inclusions & Exclusions",
                  important: true
                },
                {
                  id: "p7-c21",
                  number: 7,
                  title: "Input Tax Credit (ITC) Mechanism & Computation",
                  subtopics: "Eligibility & Conditions for ITC (Section 16), Blocked Credit (Section 17(5)), Reversal of ITC (Rule 42/43), Utilization Order of ITC",
                  important: true
                },
                {
                  id: "p7-c22",
                  number: 8,
                  title: "Registration under GST",
                  subtopics: "Threshold Limits for Registration (Section 22 & 24), Mandatory Registration, Deemed Registration, Revocation & Cancellation Procedures",
                  important: true
                },
                {
                  id: "p7-c23",
                  number: 9,
                  title: "Tax Invoice, Credit & Debit Notes, Accounts & Records",
                  subtopics: "Tax Invoice Rules (Section 31), E-Invoicing System, Credit Notes (Section 34), Debit Notes, Statutory Maintenance of Accounts & Records (Section 35/36)",
                  important: true
                },
                {
                  id: "p7-c24",
                  number: 10,
                  title: "Payment of Tax, Returns, Refunds & E-Way Bill",
                  subtopics: "Electronic Ledgers (Cash, Credit, Liability), TDS (Section 51) & TCS (Section 52), Returns (GSTR-1, GSTR-3B, GSTR-9), Refund Process (Section 54), E-Way Bill Rules (Rule 138)",
                  important: true
                },
                {
                  id: "p7-c25",
                  number: 11,
                  title: "Overview of Customs Law & Procedures",
                  subtopics: "Levy of Customs Duty, Types of Duties (BCD, SWS, Anti-dumping, Safeguard), Valuation of Imported & Exported Goods, Baggage Rules, Duty Drawback",
                  important: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
