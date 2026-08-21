const profileContent = {
  energy: {
    brandSubtitle: "NEM intelligence portfolio",
    hero: {
      eyebrow: "Energy market analyst command centre",
      role: "Energy Market Analyst | NEM Analytics | AEMO Data | Forecasting | BESS",
      lead:
        "I convert AEMO/NEM market data into decision-ready insights across price behaviour, constraints, generator performance, forecasting, and storage analytics.",
      primaryCta: "View Projects",
      metrics: [
        ["4", "market dashboards"],
        ["AEMO", "market data foundation"],
        ["5-min", "dispatch interval focus"],
        ["BESS", "trading roadmap"],
      ],
    },
    metricsBand: [
      ["AEMO ETL Pipeline", "Data ingestion, validation, and PostgreSQL-ready tables"],
      ["Price Divergence", "Regional price spread and constraint impact analysis"],
      ["Generator Behaviour", "Dispatch, bidding, and market response intelligence"],
      ["BESS Roadmap", "Storage arbitrage and trading analytics extension"],
    ],
    dashboardHeading: {
      eyebrow: "Dashboard projects",
      title: "Energy market analytics products built around real NEM questions",
      intro:
        "Each dashboard is framed around a market decision problem: what happened, why it happened, and what an analyst or operator can do with the signal.",
    },
    dashboards: [
      {
        key: "aemo-etl",
        visual: "etl-visual",
        type: "Live project",
        title: "AEMO NEMWeb ETL Pipeline",
        problem: "Problem: market files need to become trusted, analysis-ready tables.",
        facts: [["Data", "AEMO NEMWeb files"], ["Method", "Extract, validate, stage, load"], ["Output", "PostgreSQL-ready datasets"]],
        tags: ["Python", "SQL", "PostgreSQL", "Validation"],
        dashboardUrl: "https://vivekarya05.github.io/nemweb-etl-pipeline/",
        repoUrl: "https://github.com/Vivekarya05/nemweb-etl-pipeline",
        featured: true,
      },
      {
        key: "price-divergence",
        visual: "spread-visual",
        type: "Market dashboard",
        title: "Price Divergence Dashboard",
        problem: "Problem: identify regional separation, volatility events, and spread behaviour.",
        facts: [["Data", "NEM regional prices, interconnector and constraint signals"], ["Method", "Spread analysis and event slicing"], ["Value", "Highlights price-risk and congestion patterns"]],
        tags: ["Price spread", "Volatility", "Regional analysis"],
        dashboardUrl: "https://vivekarya05.github.io/nem-network-constraints-price-divergence/",
        repoUrl: "https://github.com/Vivekarya05/nem-network-constraints-price-divergence",
      },
      {
        key: "generator",
        visual: "generator-visual",
        type: "Generator analytics",
        title: "Generator Analysis Dashboard",
        problem: "Problem: explain generator dispatch behaviour and market response patterns.",
        facts: [["Data", "Generator dispatch, output, and market response signals"], ["Method", "Unit behaviour and generation-mix analysis"], ["Value", "Connects operational behaviour to market outcomes"]],
        tags: ["Dispatch", "Generation mix", "Unit behaviour"],
        dashboardUrl: "https://vivekarya05.github.io/nem-generator-behaviour-market-response-intelligence/",
        repoUrl: "https://github.com/Vivekarya05/nem-generator-behaviour-market-response-intelligence",
      },
      {
        key: "constraints",
        visual: "constraint-visual",
        type: "Network constraints",
        title: "Constraint Analysis Dashboard",
        problem: "Problem: surface binding constraints, congestion, and dispatch impact.",
        facts: [["Data", "Constraint and price-event indicators"], ["Method", "Binding-event and congestion intelligence"], ["Value", "Explains operational drivers behind price outcomes"]],
        tags: ["Constraints", "Congestion", "Dispatch impact"],
        dashboardUrl: "https://vivekarya05.github.io/nem-network-constraints-price-divergence/",
        repoUrl: "https://github.com/Vivekarya05/nem-network-constraints-price-divergence",
      },
    ],
    workflowHeading: {
      eyebrow: "Market intelligence workflow",
      title: "From market files to decision intelligence",
    },
    workflow: {
      foundation: {
        label: "Data Foundation",
        title: "Turn raw AEMO/NEM files into trusted analytical data structures.",
        objective: "Build the clean data layer behind analysis and dashboards.",
        inputs: "NEMWeb files, dispatch data, price series, generator and constraint signals.",
        methods: "ETL validation, staging, PostgreSQL modelling, audit checks, repeatable data loading.",
        output: "Clean market tables that support dashboards, forecasting, and operational analysis.",
        value: "Reduces manual data friction and gives analysts a reliable market-data base.",
      },
      understanding: {
        label: "Market Understanding",
        title: "Explain what happened in the market before jumping into models.",
        objective: "Connect price events to operating and network drivers.",
        inputs: "Regional price spreads, dispatch intervals, interconnector behaviour, generation mix, constraints.",
        methods: "Event slicing, divergence analysis, volatility scans, and market driver comparison.",
        output: "Clear narratives on price behaviour, congestion, renewable impact, and operational patterns.",
        value: "Helps stakeholders connect raw market events to practical decision context.",
      },
      modelling: {
        label: "Modelling & Forecasting",
        title: "Build forecast-ready features and scenario views.",
        objective: "Move from descriptive analytics toward forward-looking market views.",
        inputs: "Historical NEM time series, engineered seasonality features, price volatility indicators.",
        methods: "ARIMA, XGBoost, LSTM, feature engineering, validation windows, scenario comparison.",
        output: "Forecasting workflows and benchmark views for market behaviour analysis.",
        value: "Supports forward-looking analysis for trading, operations, and research decisions.",
      },
      decision: {
        label: "Decision Intelligence",
        title: "Convert analysis into actions, trade-offs, and portfolio direction.",
        objective: "Frame insights around operational and commercial decisions.",
        inputs: "Dashboard outputs, model signals, price events, constraints, generator behaviour, BESS scenarios.",
        methods: "Decision framing, KPI selection, risk-event ranking, arbitrage and dispatch logic.",
        output: "Decision-ready insights for market operations, strategy, and storage analytics.",
        value: "Moves the work from descriptive reporting into market intelligence.",
      },
      communication: {
        label: "Dashboard Communication",
        title: "Make complex market behaviour easy to scan, compare, and explain.",
        objective: "Create analyst-ready and executive-ready dashboards.",
        inputs: "Power BI views, web dashboards, research summaries, project decks, stakeholder questions.",
        methods: "Visual hierarchy, interaction design, metric cards, drill-downs, and narrative dashboards.",
        output: "Executive-ready and analyst-ready dashboards for recurring market review.",
        value: "Makes technical work visible, credible, and easier to use in decisions.",
      },
    },
    projectsHeading: {
      eyebrow: "Project storytelling",
      title: "Decision-focused project portfolio",
      intro: "Every project is framed by the analyst question, the data used, the method, and the decision value.",
    },
    projectFilters: [
      ["all", "All"],
      ["forecasting", "Forecasting"],
      ["engineering", "Data Engineering"],
      ["dashboards", "Dashboards"],
      ["trading", "Trading"],
    ],
    projects: [
      {
        title: "AEMO NEMWeb Data Pipeline",
        category: "engineering",
        accent: "teal",
        url: "https://vivekarya05.github.io/nemweb-etl-pipeline/",
        stack: ["AEMO", "Python", "SQL", "PostgreSQL"],
        story: {
          Problem: "NEMWeb data needs repeatable ingestion and validation before analysis.",
          Data: "AEMO NEMWeb market files and structured dispatch datasets.",
          Method: "Automated extraction, validation, staging, and PostgreSQL loading.",
          Insight: "Reliable tables reduce manual handling and enable faster market analytics.",
          "Decision Value": "Creates the foundation for forecasting, dashboards, and operational review.",
          Tools: "Python, SQL, PostgreSQL, AEMO NEMWeb",
        },
      },
      {
        title: "Price Divergence Dashboard",
        category: "dashboards",
        accent: "blue",
        url: "https://vivekarya05.github.io/nem-network-constraints-price-divergence/",
        stack: ["Price spread", "Constraints", "NEM", "Dashboard"],
        story: {
          Problem: "Regional prices can diverge quickly, but the driver is not always obvious.",
          Data: "Regional price series, interconnector behaviour, and constraint indicators.",
          Method: "Spread analysis, volatility event slicing, and congestion signal comparison.",
          Insight: "Highlights regional separation and market-event behaviour.",
          "Decision Value": "Supports fast identification of price-risk and operational stress points.",
          Tools: "Python, JavaScript, AEMO data, dashboard UI",
        },
      },
      {
        title: "Generator Behaviour & Market Response Intelligence",
        category: "dashboards",
        accent: "amber",
        url: "https://vivekarya05.github.io/nem-generator-behaviour-market-response-intelligence/",
        stack: ["Dispatch", "Generators", "Behaviour", "Market response"],
        story: {
          Problem: "Generator dispatch and response patterns need to be connected to market outcomes.",
          Data: "Generation output, dispatch behaviour, and market response indicators.",
          Method: "Unit behaviour comparison, generation-mix analysis, and event review.",
          Insight: "Shows how generation behaviour changes across market conditions.",
          "Decision Value": "Helps interpret supply-side dynamics behind price and dispatch outcomes.",
          Tools: "AEMO data, JavaScript, analytics dashboards",
        },
      },
      {
        title: "Constraint Analysis Dashboard",
        category: "dashboards",
        accent: "coral",
        url: "https://vivekarya05.github.io/nem-network-constraints-price-divergence/",
        stack: ["Binding events", "Congestion", "Dispatch impact", "NEM"],
        story: {
          Problem: "Binding constraints and congestion can shape dispatch and regional prices.",
          Data: "Constraint events, regional price signals, and market event indicators.",
          Method: "Binding-event review, congestion mapping, and impact interpretation.",
          Insight: "Makes network-driven price and dispatch behaviour easier to explain.",
          "Decision Value": "Improves market-event diagnosis for analysts and stakeholders.",
          Tools: "AEMO data, constraint analysis, dashboard UI",
        },
      },
      {
        title: "Electricity Demand Forecasting",
        category: "forecasting",
        accent: "teal",
        stack: ["ARIMA", "XGBoost", "LSTM", "Time series"],
        story: {
          Problem: "Short-term demand patterns need robust features and validation.",
          Data: "AEMO demand time series and operational patterns.",
          Method: "Seasonality features, ARIMA, XGBoost, LSTM, and validation windows.",
          Insight: "Demand peaks and recurring patterns become easier to forecast and explain.",
          "Decision Value": "Supports operational planning and market modelling workflows.",
          Tools: "Python, Pandas, XGBoost, TensorFlow/Keras",
        },
      },
      {
        title: "BESS Trading Intelligence Roadmap",
        category: "trading",
        accent: "blue",
        stack: ["BESS", "Arbitrage", "FCAS", "Trading analytics"],
        story: {
          Problem: "Storage value depends on price timing, constraints, and operating limits.",
          Data: "5-minute prices, dispatch intervals, and future FCAS/storage signals.",
          Method: "Arbitrage simulation, scenario framing, and charge/discharge logic.",
          Insight: "Identifies where storage analytics can become a trading decision layer.",
          "Decision Value": "Positions the portfolio for BESS dispatch and trading strategy analysis.",
          Tools: "Python, AEMO data, scenario analysis",
        },
      },
    ],
    careerHeading: {
      eyebrow: "Career timeline",
      title: "Business Analyst to Energy Systems to Market Analytics",
      intro: "Select a year to see how each role builds toward energy market intelligence and dashboard-led decision support.",
    },
    roadmapHeading: {
      eyebrow: "Strategic roadmap",
      title: "Toward an integrated NEM intelligence dashboard",
    },
    roadmap: [
      ["Phase 1", "AEMO ETL foundation", "Build trusted data ingestion, validation, and PostgreSQL-ready market tables."],
      ["Phase 2", "Price and generator analytics", "Analyse regional divergence, generator response, dispatch behaviour, and market events."],
      ["Phase 3", "Constraint intelligence", "Surface binding constraints, congestion drivers, and price separation signals."],
      ["Phase 4", "BESS and trading analytics", "Extend into storage arbitrage, bid-stack tooling, FCAS paths, and trading scenarios."],
      ["Phase 5", "Integrated NEM intelligence", "Combine pipelines, models, dashboards, and market narratives into one decision layer."],
    ],
    skillsHeading: {
      eyebrow: "Capability pillars",
      title: "Energy analytics stack",
    },
    skills: [
      ["Energy Market Analytics", "AEMO NEM data, dispatch pricing, FCAS markets, renewable integration, price volatility, battery analytics.", "92%"],
      ["Data Engineering", "Python, SQL, PostgreSQL, Pandas, NumPy, ETL validation, auditability, reusable market data structures.", "88%"],
      ["Forecasting & ML", "Time-series features, ARIMA, XGBoost, LSTM, scenario analysis, market behaviour modelling.", "82%"],
      ["Dashboarding", "Power BI, DAX, Tableau, stakeholder reporting, operational dashboards, visual market narratives.", "90%"],
      ["Business Analysis", "Workflow analysis, requirements, executive communication, operations planning, decision-support storytelling.", "86%"],
    ],
    contact: {
      eyebrow: "Open to roles in Australia",
      title: "Energy Market Analyst / Data Analyst / Forecasting Analyst",
      text: "Ready to contribute across NEM analytics, market intelligence dashboards, forecasting, and decision-support reporting.",
    },
  },
  ict: {
    brandSubtitle: "BA transformation portfolio",
    hero: {
      eyebrow: "ICT business analyst command centre",
      role: "ICT Business Analyst | Business Transformation | SaaS/COTS | CRM/ERP | UAT",
      lead:
        "I translate business needs into clear requirements, process models, system integrations, UAT outcomes, reporting dashboards, and business-ready technology solutions.",
      primaryCta: "View BA Projects",
      metrics: [
        ["6+", "years business and operations experience"],
        ["2+", "years SaaS/COTS, CRM and ERP initiatives"],
        ["35%", "workflow response-time reduction"],
        ["UAT", "test planning and business readiness"],
      ],
    },
    metricsBand: [
      ["Requirements & Workshops", "Elicitation, stakeholder sessions, BRD/FRD, user stories"],
      ["SaaS/COTS Delivery", "CRM, ERP, configuration, integration, data migration"],
      ["UAT & Readiness", "Test scenarios, defects, traceability, sign-off, release readiness"],
      ["BI & Reporting", "Power BI, SQL, KPI dashboards, executive reporting"],
    ],
    dashboardHeading: {
      eyebrow: "Business analyst portfolio",
      title: "Enterprise transformation work framed as BA case studies",
      intro:
        "This mode reframes the portfolio for ICT Business Analyst roles while preserving the Energy Analytics version as the default tab.",
    },
    dashboards: [
      {
        key: "enterprise-transformation",
        visual: "etl-visual",
        type: "Enterprise transformation",
        title: "SaaS/COTS CRM & ERP Delivery",
        problem: "Problem: business teams need clear requirements and delivery alignment across enterprise systems.",
        facts: [["Scope", "CRM, ERP, SaaS/COTS initiatives"], ["Method", "BRD/FRD, user stories, workshops"], ["Output", "Functional specifications and delivery traceability"]],
        tags: ["Requirements", "CRM", "ERP", "Jira"],
        featured: true,
      },
      {
        key: "process-mapping",
        visual: "constraint-visual",
        type: "Process analysis",
        title: "Current-State to Future-State Process Mapping",
        problem: "Problem: operational workflows need gap analysis before technology change.",
        facts: [["Data", "Stakeholder workshops and process discovery"], ["Method", "BPMN/UML, workflow diagrams, gap analysis"], ["Value", "Clear future-state process and solution scope"]],
        tags: ["BPMN", "UML", "Gap analysis"],
      },
      {
        key: "uat-readiness",
        visual: "spread-visual",
        type: "Testing and readiness",
        title: "UAT, Defect Management & Business Readiness",
        problem: "Problem: business acceptance needs structured testing and traceability.",
        facts: [["Inputs", "Requirements, scenarios, defects"], ["Method", "UAT planning, issue tracking, sign-off"], ["Output", "Production readiness and stakeholder acceptance"]],
        tags: ["UAT", "Defects", "Traceability"],
      },
      {
        key: "operations-reporting",
        visual: "generator-visual",
        type: "BI and operations",
        title: "Operational KPI Dashboards & SQL Automation",
        problem: "Problem: operations teams need better visibility and faster response.",
        facts: [["Data", "Operational and administrative datasets"], ["Method", "SQL automation, Power BI, KPI reporting"], ["Value", "35% response-time reduction and improved reporting accuracy"]],
        tags: ["SQL", "Power BI", "KPI dashboards"],
      },
    ],
    workflowHeading: {
      eyebrow: "Business analysis workflow",
      title: "From stakeholder need to business-ready solution",
    },
    workflow: {
      foundation: {
        label: "Discovery & Requirements",
        title: "Elicit business needs and convert ambiguity into structured requirements.",
        objective: "Create a clear business problem statement and requirements baseline.",
        inputs: "Stakeholder interviews, workshops, business rules, pain points, current documentation.",
        methods: "Requirements elicitation, BRD/FRD, user stories, acceptance criteria, traceability.",
        output: "Agreed requirements, scope, assumptions, dependencies, and decision logs.",
        value: "Reduces delivery ambiguity and aligns business and technical teams early.",
      },
      understanding: {
        label: "Process & Gap Analysis",
        title: "Map current-state workflows and define the future-state operating model.",
        objective: "Identify process gaps, handoff issues, system dependencies, and improvement opportunities.",
        inputs: "Current processes, enterprise workflows, stakeholder feedback, operational data.",
        methods: "BPMN/UML, process mapping, current-state/future-state analysis, gap analysis.",
        output: "Future-state process maps, gap register, and improvement backlog.",
        value: "Creates a shared operating picture before solution build or configuration.",
      },
      modelling: {
        label: "Solution & Integration",
        title: "Bridge business requirements with SaaS/COTS, CRM, ERP, and integration delivery.",
        objective: "Translate business needs into feasible solution behaviour and system change.",
        inputs: "Business rules, data flows, APIs, interfaces, CRM/ERP configuration needs.",
        methods: "Functional specifications, data mapping, interface analysis, vendor and developer collaboration.",
        output: "Solution-ready specifications and integration requirements.",
        value: "Improves delivery clarity across business, vendor, and technical teams.",
      },
      decision: {
        label: "UAT & Readiness",
        title: "Validate that the solution works for the business before release.",
        objective: "Coordinate test planning, scenarios, defects, sign-off, and readiness activities.",
        inputs: "Requirements, test cases, acceptance criteria, defect logs, stakeholder feedback.",
        methods: "UAT coordination, defect triage, issue management, traceability, readiness checks.",
        output: "Business acceptance, resolved issues, sign-off, and production readiness.",
        value: "Protects delivery quality and supports smooth change adoption.",
      },
      communication: {
        label: "Reporting & Stakeholders",
        title: "Turn delivery status, process metrics, and operational data into decision-ready reporting.",
        objective: "Keep business stakeholders informed and make operational performance visible.",
        inputs: "Power BI dashboards, SQL outputs, KPI metrics, governance updates, action logs.",
        methods: "Dashboarding, executive reporting, documentation, stakeholder communication.",
        output: "Clear reporting packs, operational dashboards, and governance-ready updates.",
        value: "Improves transparency, accountability, and decision-making.",
      },
    },
    projectsHeading: {
      eyebrow: "BA project storytelling",
      title: "Business transformation and enterprise systems portfolio",
      intro: "Each case study shows how requirements, process analysis, systems delivery, and reporting create business value.",
    },
    projectFilters: [
      ["all", "All"],
      ["requirements", "Requirements"],
      ["delivery", "Delivery"],
      ["uat", "UAT"],
      ["reporting", "Reporting"],
    ],
    projects: [
      {
        title: "SaaS/COTS CRM & ERP Implementation Support",
        category: "delivery",
        accent: "teal",
        stack: ["CRM", "ERP", "SaaS/COTS", "Jira"],
        story: {
          Problem: "Enterprise teams needed clear requirements and delivery documentation for system initiatives.",
          Data: "Business rules, stakeholder needs, workflows, system dependencies, and integration points.",
          Method: "Workshops, BRDs, FRDs, user stories, process maps, and functional specifications.",
          Insight: "Structured requirements improved delivery clarity between business and technical teams.",
          "Decision Value": "Supported solution assessment, configuration, dependency management, and delivery sign-off.",
          Tools: "Jira, Confluence, Visio, SQL, CRM/ERP platforms",
        },
      },
      {
        title: "Current-State and Future-State Process Mapping",
        category: "requirements",
        accent: "blue",
        stack: ["BPMN", "UML", "Gap analysis", "Workshops"],
        story: {
          Problem: "Operational workflows needed clearer mapping before business transformation.",
          Data: "Stakeholder interviews, process steps, handoffs, pain points, and control requirements.",
          Method: "Current-state analysis, future-state mapping, gap analysis, workflow diagrams.",
          Insight: "Process gaps and dependencies became visible before solution delivery.",
          "Decision Value": "Helped teams prioritise improvements and reduce delivery ambiguity.",
          Tools: "BPMN, UML, Microsoft Visio, Confluence",
        },
      },
      {
        title: "UAT Coordination and Business Readiness",
        category: "uat",
        accent: "amber",
        stack: ["UAT", "Defects", "Traceability", "Sign-off"],
        story: {
          Problem: "Business users needed confidence that delivered functionality matched requirements.",
          Data: "Requirements, acceptance criteria, test scenarios, defect logs, stakeholder feedback.",
          Method: "UAT planning, scenario writing, defect tracking, issue resolution, traceability.",
          Insight: "Structured UAT improved business acceptance and production readiness.",
          "Decision Value": "Reduced release risk and supported stakeholder sign-off.",
          Tools: "Jira, test scenarios, defect logs, requirements traceability",
        },
      },
      {
        title: "SQL Workflow Automation and KPI Dashboards",
        category: "reporting",
        accent: "coral",
        stack: ["SQL", "JavaScript", "Power BI", "KPI"],
        story: {
          Problem: "Operations teams needed faster response times and better reporting visibility.",
          Data: "Operational workflows, administrative data, KPI metrics, and reporting outputs.",
          Method: "SQL and JavaScript automation, dashboard development, reporting validation.",
          Insight: "Automation reduced response times by 35% and improved accuracy.",
          "Decision Value": "Enabled better operational monitoring and data-driven decisions.",
          Tools: "SQL, JavaScript, Power BI, Excel",
        },
      },
      {
        title: "Higher Education Operations and Procurement Support",
        category: "reporting",
        accent: "teal",
        stack: ["Higher Education", "Procurement", "Assets", "Reporting"],
        story: {
          Problem: "University operations required accurate data, documentation, and stakeholder coordination.",
          Data: "Procurement, travel, asset, administrative, and operational reporting data.",
          Method: "Requirements support, process issue resolution, documentation, reporting analysis.",
          Insight: "Better documentation and data visibility improved service delivery.",
          "Decision Value": "Supported procurement tracking, asset management, approvals, and operational coordination.",
          Tools: "Enterprise systems, Excel, reporting workflows, stakeholder documentation",
        },
      },
      {
        title: "Operations Analytics for Industrial Energy Systems",
        category: "requirements",
        accent: "blue",
        stack: ["SCADA", "ERP", "Root cause", "Operations"],
        story: {
          Problem: "Industrial utility systems required better performance monitoring and reliability analysis.",
          Data: "SCADA/PLC, ERP, maintenance, HVAC, boiler, chiller, and compliance data.",
          Method: "Operational analysis, root-cause review, preventive-maintenance reporting.",
          Insight: "Performance data supported reliability, cost, and compliance decisions.",
          "Decision Value": "Built practical operations analysis experience transferable to enterprise BA work.",
          Tools: "SCADA/PLC, ERP data, Excel, reporting documentation",
        },
      },
    ],
    careerHeading: {
      eyebrow: "Business analyst timeline",
      title: "Enterprise systems to reporting to transformation analysis",
      intro: "Select a year to see how each role contributes to ICT Business Analyst capability.",
    },
    roadmapHeading: {
      eyebrow: "BA delivery roadmap",
      title: "From discovery to business-ready enterprise solution",
    },
    roadmap: [
      ["Phase 1", "Discovery and requirements", "Run workshops, capture business needs, define scope, and create BRD/FRD foundations."],
      ["Phase 2", "Process and gap analysis", "Map current and future states, identify dependencies, and document improvement opportunities."],
      ["Phase 3", "Solution and integration", "Translate requirements into functional specifications, data mapping, and system integration needs."],
      ["Phase 4", "UAT and readiness", "Coordinate test scenarios, defects, traceability, stakeholder acceptance, and release readiness."],
      ["Phase 5", "Reporting and adoption", "Use dashboards, documentation, and governance updates to support adoption and decision-making."],
    ],
    skillsHeading: {
      eyebrow: "BA capability pillars",
      title: "Business analysis and enterprise delivery stack",
    },
    skills: [
      ["Business Analysis", "Requirements elicitation, stakeholder workshops, BRD/FRD, user stories, business cases, traceability.", "94%"],
      ["Process & Transformation", "Current-state/future-state mapping, gap analysis, BPMN/UML, process improvement, business readiness.", "90%"],
      ["Enterprise Systems", "SaaS/COTS, CRM, ERP, system integration, data migration, APIs, vendor collaboration.", "86%"],
      ["UAT & Delivery", "Test planning, test scenarios, defect tracking, issue management, sign-off, Agile and Waterfall.", "88%"],
      ["BI & Reporting", "Power BI, DAX, SQL, KPI dashboards, executive reporting, documentation, data storytelling.", "91%"],
    ],
    contact: {
      eyebrow: "Open to roles in Australia",
      title: "ICT Business Analyst / Business Analyst / Data Analyst",
      text: "Open to ICT Business Analyst roles across SaaS/COTS, CRM/ERP, higher education operations, UAT, reporting, and enterprise transformation.",
    },
  },
};

const careerData = {
  2026: {
    period: "Mar 2026 - Present",
    title: "Research Assistant - Data Analytics, Transforming Energy Markets Research Centre",
    domain: "Data analytics, research reporting, forecasting support",
    summary:
      "Maintains large multi-source datasets and develops reproducible Python, SQL/PostgreSQL, and Power BI workflows for extraction, validation, reporting, and visualisation.",
    relevance: "Shows data custodianship, stakeholder reporting, dashboard translation, and analytical communication.",
    kpis: [["Data", "Multi-source analytics"], ["SQL", "PostgreSQL workflows"], ["Power BI", "Decision support"]],
  },
  2025: {
    period: "Mar 2025 - Apr 2026",
    title: "Finance & Engagement Assistant, Western Sydney University",
    domain: "Higher education operations and stakeholder service delivery",
    summary:
      "Supported procurement, travel, asset management, administrative data, reporting, stakeholder engagement, and university enterprise processes.",
    relevance: "Directly supports BA positioning for higher education operations, process analysis, documentation, and reporting visibility.",
    kpis: [["Higher Ed", "Enterprise processes"], ["Assets", "Procurement tracking"], ["Reporting", "Operational visibility"]],
  },
  2022: {
    period: "Nov 2022 - Jun 2024",
    title: "ICT Business Analyst, CentraHub Pvt Ltd",
    domain: "SaaS/COTS, CRM, ERP, integration and transformation",
    summary:
      "Delivered end-to-end BA across enterprise initiatives, including workshops, requirements, process discovery, BRD/FRD, user stories, integration analysis, UAT, migration validation, and stakeholder sign-off.",
    relevance: "Core ICT BA experience across requirements, delivery documentation, integration, UAT, and business readiness.",
    kpis: [["35%", "Response-time reduction"], ["CRM/ERP", "Enterprise initiatives"], ["UAT", "Sign-off and readiness"]],
  },
  2020: {
    period: "Sep 2020 - Nov 2022",
    title: "Senior Project Engineer - Operations Analytics, Indian Immunologicals Pvt Ltd",
    domain: "Operations analytics and industrial systems",
    summary:
      "Analysed utility, maintenance, HVAC, boiler, chiller, SCADA/PLC, and ERP information for performance monitoring, reporting, validation, and root-cause analysis.",
    relevance: "Adds operational domain depth and practical process-improvement experience.",
    kpis: [["SCADA", "Monitoring"], ["ERP", "Operational data"], ["RCA", "Performance analysis"]],
  },
};

let activeProfile = "energy";
let activeFilter = "all";
let revealObserver;

const panel = document.querySelector("#labPanel");
const grid = document.querySelector("#projectGrid");
const chart = document.querySelector("#marketChart");
const ctx = chart?.getContext("2d");
const careerFocus = document.querySelector("#careerFocus");
const careerTabs = document.querySelectorAll(".career-year-tab");
const careerNodes = document.querySelectorAll(".career-node");
const modal = document.querySelector("#projectModal");
const modalContent = document.querySelector("#modalContent");
const modalClose = document.querySelector(".modal-close");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const profileTabs = document.querySelectorAll(".profile-tab");

function currentProfile() {
  return profileContent[activeProfile];
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function renderProfile(profile = "energy") {
  activeProfile = profile;
  activeFilter = "all";
  const data = currentProfile();
  document.body.dataset.profile = profile;
  profileTabs.forEach((tab) => {
    const isActive = tab.dataset.profile === profile;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  setText("#brand-subtitle", data.brandSubtitle);
  setText(".hero-copy .eyebrow", data.hero.eyebrow);
  setText(".role-line", data.hero.role);
  setText(".lead", data.hero.lead);
  setText(".hero-actions .button.primary", data.hero.primaryCta);

  document.querySelectorAll(".signal-card").forEach((card, index) => {
    const metric = data.hero.metrics[index];
    if (!metric) return;
    const value = card.querySelector(".signal-value");
    const label = card.querySelector(".signal-label");
    value.textContent = metric[0];
    value.classList.toggle("count-up", index === 0 && /^\d+$/.test(metric[0]));
    if (index === 0 && /^\d+$/.test(metric[0])) value.dataset.count = metric[0];
    label.textContent = metric[1];
  });

  const metricsBand = document.querySelector(".metrics-band");
  metricsBand.innerHTML = data.metricsBand.map(([title, text]) => `<div><strong>${title}</strong><span>${text}</span></div>`).join("");

  setText("#dashboards .eyebrow", data.dashboardHeading.eyebrow);
  setText("#dashboard-title", data.dashboardHeading.title);
  setText("#dashboards .section-intro", data.dashboardHeading.intro);
  renderDashboards();

  setText("#methodology .eyebrow", data.workflowHeading.eyebrow);
  setText("#methodology-title", data.workflowHeading.title);
  renderWorkflowTabs();
  renderLab(Object.keys(data.workflow)[0]);

  setText("#projects .eyebrow", data.projectsHeading.eyebrow);
  setText("#projects-title", data.projectsHeading.title);
  setText("#projects .section-intro", data.projectsHeading.intro);
  renderFilterButtons();
  renderProjects();

  setText("#experience .eyebrow", data.careerHeading.eyebrow);
  setText("#experience-title", data.careerHeading.title);
  setText("#experience .section-intro", data.careerHeading.intro);

  setText("#roadmap .eyebrow", data.roadmapHeading.eyebrow);
  setText("#roadmap-title", data.roadmapHeading.title);
  renderRoadmap();

  setText(".skills-section .eyebrow", data.skillsHeading.eyebrow);
  setText("#skills-title", data.skillsHeading.title);
  renderSkills();

  setText("#contact .eyebrow", data.contact.eyebrow);
  setText("#contact-title", data.contact.title);
  const contactText = document.querySelector("#contact-title + p");
  if (contactText) contactText.textContent = data.contact.text;

  renderCareer("2026");
  observeReveals();
  animateCounters();
  updateActiveNav();
}

function renderDashboards() {
  const target = document.querySelector(".dashboard-showcase");
  const dashboards = currentProfile().dashboards;
  target.innerHTML = dashboards
    .map(
      (item) => `
        <article class="analytics-card ${item.featured ? "featured" : ""} reveal" data-project="${item.key}">
          <div class="card-visual ${item.visual}" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <span class="link-type">${item.type}</span>
          <h3>${item.title}</h3>
          <p class="problem">${item.problem}</p>
          <dl>${item.facts.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}</dl>
          <div class="dashboard-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="card-actions">
            ${item.dashboardUrl ? `<a href="${item.dashboardUrl}" target="_blank" rel="noreferrer">View dashboard</a>` : `<a href="#projects">View case study</a>`}
            ${item.repoUrl ? `<a href="${item.repoUrl}" target="_blank" rel="noreferrer">GitHub repo</a>` : `<a href="#projects">BA case study</a>`}
          </div>
        </article>
      `
    )
    .join("");
}

function renderWorkflowTabs() {
  const controls = document.querySelector(".lab-controls");
  const workflow = currentProfile().workflow;
  controls.innerHTML = Object.entries(workflow)
    .map(
      ([key, item], index) =>
        `<button class="lab-tab ${index === 0 ? "active" : ""}" type="button" data-mode="${key}" role="tab" aria-selected="${index === 0 ? "true" : "false"}">${item.label}</button>`
    )
    .join("");
}

function renderLab(mode) {
  const item = currentProfile().workflow[mode];
  if (!panel || !item) return;
  panel.classList.add("switching");
  window.setTimeout(() => {
    panel.innerHTML = `
      <div>
        <span class="link-type">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.objective}</p>
      </div>
      <div class="workflow-grid">
        <div><strong>Inputs</strong><span>${item.inputs}</span></div>
        <div><strong>Methods</strong><span>${item.methods}</span></div>
        <div><strong>Output</strong><span>${item.output}</span></div>
        <div><strong>Business value</strong><span>${item.value}</span></div>
      </div>
    `;
    panel.classList.remove("switching");
  }, 120);
}

function renderFilterButtons() {
  const row = document.querySelector(".filter-row");
  row.innerHTML = currentProfile().projectFilters
    .map(([key, label], index) => `<button class="filter-pill ${index === 0 ? "active" : ""}" type="button" data-filter="${key}">${label}</button>`)
    .join("");
}

function renderProjects(filter = activeFilter) {
  if (!grid) return;
  const projects = currentProfile().projects;
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  grid.innerHTML = visible
    .map((project) => {
      const index = projects.indexOf(project);
      return `
        <article class="project-card reveal" data-accent="${project.accent}" data-project-index="${index}">
          <span class="link-type">${project.category}</span>
          <h3>${project.title}</h3>
          <div class="project-story">
            ${Object.entries(project.story)
              .slice(0, 5)
              .map(([key, value]) => `<div><strong>${key}</strong><p>${value}</p></div>`)
              .join("")}
          </div>
          <div class="project-meta">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <a class="project-link" href="${project.url || "#"}" ${project.url ? 'target="_blank" rel="noreferrer"' : ""}>${project.url ? "Open dashboard" : "Portfolio case study"}</a>
          <button class="button ghost project-detail" type="button" data-project-index="${index}">View details</button>
        </article>
      `;
    })
    .join("");
  observeReveals();
}

function renderCareer(year = "2026") {
  const item = careerData[year];
  if (!careerFocus || !item) return;
  careerFocus.innerHTML = `
    <div>
      <span class="timeline-date">${item.period}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="workflow-grid">
        <div><strong>Domain</strong><span>${item.domain}</span></div>
        <div><strong>${activeProfile === "ict" ? "BA relevance" : "Energy analytics relevance"}</strong><span>${item.relevance}</span></div>
      </div>
    </div>
    <div class="career-kpi-grid">
      ${item.kpis.map(([value, label]) => `<div class="career-kpi"><strong>${value}</strong><span>${label}</span></div>`).join("")}
    </div>
  `;
  careerTabs.forEach((tab) => {
    const isActive = tab.dataset.career === year;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  careerNodes.forEach((node) => node.classList.toggle("active", node.dataset.career === year));
}

function renderRoadmap() {
  const roadmap = document.querySelector(".roadmap");
  roadmap.innerHTML = currentProfile().roadmap.map(([phase, title, text]) => `<article><span>${phase}</span><h3>${title}</h3><p>${text}</p></article>`).join("");
}

function renderSkills() {
  const matrix = document.querySelector(".skill-matrix");
  matrix.innerHTML = currentProfile().skills
    .map(([title, text, width]) => `<div><h3>${title}</h3><p>${text}</p><span class="skill-bar"><i style="width: ${width}"></i></span></div>`)
    .join("");
}

function drawChart(frame = 0) {
  if (!chart || !ctx) return;
  const width = chart.width;
  const height = chart.height;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(95, 215, 255, 0.14)";
  ctx.lineWidth = 1;
  for (let x = 50; x < width; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 34);
    ctx.lineTo(x, height - 44);
    ctx.stroke();
  }
  for (let y = 44; y < height; y += 56) {
    ctx.beginPath();
    ctx.moveTo(42, y);
    ctx.lineTo(width - 32, y);
    ctx.stroke();
  }
  const series = activeProfile === "ict"
    ? [
        { color: "#f4bd5a", offset: 0, amp: 40 },
        { color: "#5fd7ff", offset: 1.8, amp: 28 },
        { color: "#9af5c4", offset: 3.4, amp: 22 },
      ]
    : [
        { color: "#5fd7ff", offset: 0, amp: 42 },
        { color: "#9af5c4", offset: 1.7, amp: 32 },
        { color: "#f4bd5a", offset: 3.1, amp: 24 },
      ];
  series.forEach((line, index) => {
    ctx.beginPath();
    for (let i = 0; i <= 90; i += 1) {
      const x = 44 + (i / 90) * (width - 86);
      const wave = Math.sin(i / 8 + frame / 28 + line.offset) * line.amp;
      const pulse = Math.cos(i / 3.8 + frame / 35) * (line.amp * 0.28);
      const y = height / 2 + wave + pulse + (index - 1) * 34;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = line.color;
    ctx.lineWidth = index === 0 ? 4 : 3;
    ctx.stroke();
  });
  ctx.fillStyle = "rgba(238, 250, 247, 0.9)";
  ctx.font = "700 16px Inter, system-ui, sans-serif";
  ctx.fillText(activeProfile === "ict" ? "Business transformation signal monitor" : "NEM market signal monitor", 44, 34);
  window.requestAnimationFrame(() => drawChart(frame + 1));
}

function openProjectModal(index) {
  const project = currentProfile().projects[index];
  if (!project || !modal || !modalContent) return;
  modalContent.innerHTML = `
    <span class="link-type">${project.category}</span>
    <h2 id="modalTitle">${project.title}</h2>
    <div class="workflow-grid">${Object.entries(project.story).map(([key, value]) => `<div><strong>${key}</strong><span>${value}</span></div>`).join("")}</div>
    <div class="dashboard-tags">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
    ${project.url ? `<div class="card-actions"><a href="${project.url}" target="_blank" rel="noreferrer">Open dashboard</a></div>` : ""}
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
}

function animateCounters() {
  document.querySelectorAll(".count-up").forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    if (!target) return;
    let value = 0;
    const step = () => {
      value += 1;
      counter.textContent = String(value);
      if (value < target) window.setTimeout(step, 120);
    };
    step();
  });
}

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
}

function updateActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navItems = [...document.querySelectorAll(".nav-links a")];
  const current = sections
    .map((section) => ({ id: section.id, top: section.getBoundingClientRect().top }))
    .filter((section) => section.top < 160)
    .pop();
  navItems.forEach((item) => item.classList.toggle("active", current && item.getAttribute("href") === `#${current.id}`));
}

document.addEventListener("click", (event) => {
  const labTab = event.target.closest(".lab-tab");
  if (labTab) {
    document.querySelectorAll(".lab-tab").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    });
    labTab.classList.add("active");
    labTab.setAttribute("aria-selected", "true");
    renderLab(labTab.dataset.mode);
  }

  const filter = event.target.closest(".filter-pill");
  if (filter) {
    activeFilter = filter.dataset.filter;
    document.querySelectorAll(".filter-pill").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    renderProjects(activeFilter);
  }

  const detailButton = event.target.closest(".project-detail");
  if (detailButton) openProjectModal(Number(detailButton.dataset.projectIndex));
});

profileTabs.forEach((tab) => tab.addEventListener("click", () => renderProfile(tab.dataset.profile)));
careerTabs.forEach((tab) => tab.addEventListener("click", () => renderCareer(tab.dataset.career)));
careerNodes.forEach((node) => node.addEventListener("click", () => renderCareer(node.dataset.career)));
modalClose?.addEventListener("click", closeProjectModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeProjectModal();
});
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("open")));
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "Dark" : "Light";
});
window.addEventListener("scroll", updateActiveNav, { passive: true });

renderProfile("energy");
drawChart();
