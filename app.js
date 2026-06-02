const workflowContent = {
  foundation: {
    title: "Data Foundation",
    objective: "Turn raw AEMO/NEM files into trusted analytical data structures.",
    inputs: "NEMWeb files, dispatch data, price series, generator and constraint signals.",
    methods: "ETL validation, staging, PostgreSQL modelling, audit checks, repeatable data loading.",
    output: "Clean market tables that support dashboards, forecasting, and operational analysis.",
    value: "Reduces manual data friction and gives analysts a reliable market-data base.",
  },
  understanding: {
    title: "Market Understanding",
    objective: "Explain what happened in the market before jumping into models.",
    inputs: "Regional price spreads, dispatch intervals, interconnector behaviour, generation mix, constraints.",
    methods: "Event slicing, divergence analysis, volatility scans, and market driver comparison.",
    output: "Clear narratives on price behaviour, congestion, renewable impact, and operational patterns.",
    value: "Helps stakeholders connect raw market events to practical decision context.",
  },
  modelling: {
    title: "Modelling & Forecasting",
    objective: "Build forecast-ready features and scenario views for demand and price behaviour.",
    inputs: "Historical NEM time series, engineered seasonality features, price volatility indicators.",
    methods: "ARIMA, XGBoost, LSTM, feature engineering, validation windows, scenario comparison.",
    output: "Forecasting workflows and benchmark views for market behaviour analysis.",
    value: "Supports forward-looking analysis for trading, operations, and research decisions.",
  },
  decision: {
    title: "Decision Intelligence",
    objective: "Convert analysis into actions, trade-offs, and portfolio direction.",
    inputs: "Dashboard outputs, model signals, price events, constraints, generator behaviour, BESS scenarios.",
    methods: "Decision framing, KPI selection, risk-event ranking, arbitrage and dispatch logic.",
    output: "Decision-ready insights for market operations, strategy, and storage analytics.",
    value: "Moves the work from descriptive reporting into market intelligence.",
  },
  communication: {
    title: "Dashboard Communication",
    objective: "Make complex market behaviour easy to scan, compare, and explain.",
    inputs: "Power BI views, web dashboards, research summaries, project decks, stakeholder questions.",
    methods: "Visual hierarchy, interaction design, metric cards, drill-downs, and narrative dashboards.",
    output: "Executive-ready and analyst-ready dashboards for recurring market review.",
    value: "Makes technical work visible, credible, and easier to use in decisions.",
  },
};

const projects = [
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
];

const careerData = {
  2026: {
    period: "Mar 2026 - Present",
    title: "Research Assistant, Transforming Energy Markets Research Centre",
    domain: "Energy market analytics and research",
    summary:
      "Maintains AEMO datasets, supports forecasting and market modelling workflows, and builds analytical reporting for renewable integration, dispatch pricing, demand trends, and volatility.",
    relevance: "Directly anchors the portfolio in NEM data, forecasting, constraints, and dashboard-led market intelligence.",
    kpis: [
      ["AEMO", "Market data processing"],
      ["NEM", "Dispatch and volatility analysis"],
      ["Power BI", "Research reporting"],
    ],
  },
  2025: {
    period: "Mar 2025 - Apr 2026",
    title: "Business Analyst - Finance & Operations, Western Sydney University",
    domain: "Business analytics and stakeholder reporting",
    summary:
      "Built Power BI dashboards and analysed workflows to improve visibility across finance, operations, and decision-making.",
    relevance: "Strengthened dashboard storytelling, KPI design, and stakeholder-facing analytics.",
    kpis: [
      ["Power BI", "Operational dashboards"],
      ["DAX", "Performance metrics"],
      ["WSU", "Planning support"],
    ],
  },
  2022: {
    period: "Nov 2022 - Jun 2024",
    title: "ICT Business Analyst, CentraHub Pvt Ltd",
    domain: "Data systems and operational analytics",
    summary:
      "Automated SQL-driven workflows, delivered KPI dashboards across multiple regions, and reduced response times by 35%.",
    relevance: "Built the data automation and reporting foundation used in current energy analytics work.",
    kpis: [
      ["35%", "Response-time reduction"],
      ["SQL", "Workflow automation"],
      ["3 regions", "Operations reporting"],
    ],
  },
  2020: {
    period: "Sep 2020 - Nov 2022",
    title: "Senior Project Engineer - Energy Systems, Indian Immunologicals Pvt Ltd",
    domain: "Energy systems and operations",
    summary:
      "Optimised HVAC and energy-intensive utility systems, monitored industrial energy performance, and worked with SCADA/PLC systems for operations and compliance.",
    relevance: "Gives the portfolio a practical energy-systems base behind the analytics layer.",
    kpis: [
      ["HVAC", "Energy optimisation"],
      ["SCADA", "Operational monitoring"],
      ["Utilities", "Performance analysis"],
    ],
  },
};

const panel = document.querySelector("#labPanel");
const tabs = document.querySelectorAll(".lab-tab");
const grid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-pill");
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

function renderLab(mode = "foundation") {
  const item = workflowContent[mode];
  if (!panel || !item) return;

  panel.classList.add("switching");
  window.setTimeout(() => {
    panel.innerHTML = `
      <div>
        <span class="link-type">${item.title}</span>
        <h3>${item.objective}</h3>
        <p>${item.value}</p>
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

function renderProjects(filter = "all") {
  if (!grid) return;
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  grid.innerHTML = visible
    .map(
      (project, index) => `
        <article class="project-card reveal" data-accent="${project.accent}" data-project-index="${projects.indexOf(project)}">
          <span class="link-type">${project.category}</span>
          <h3>${project.title}</h3>
          <div class="project-story">
            ${Object.entries(project.story)
              .slice(0, 5)
              .map(([key, value]) => `<div><strong>${key}</strong><p>${value}</p></div>`)
              .join("")}
          </div>
          <div class="project-meta">
            ${project.stack.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a class="project-link" href="${project.url || "#"}" ${project.url ? 'target="_blank" rel="noreferrer"' : ""}>
            ${project.url ? "Open dashboard" : "Portfolio project"}
          </a>
          <button class="button ghost project-detail" type="button" data-project-index="${projects.indexOf(project)}">View details</button>
        </article>
      `
    )
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
        <div><strong>Energy analytics relevance</strong><span>${item.relevance}</span></div>
      </div>
    </div>
    <div class="career-kpi-grid">
      ${item.kpis
        .map(
          ([value, label]) => `
            <div class="career-kpi">
              <strong>${value}</strong>
              <span>${label}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  careerTabs.forEach((tab) => {
    const isActive = tab.dataset.career === year;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  careerNodes.forEach((node) => node.classList.toggle("active", node.dataset.career === year));
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

  const series = [
    { color: "#5fd7ff", offset: 0, amp: 42, label: "Price" },
    { color: "#9af5c4", offset: 1.7, amp: 32, label: "Demand" },
    { color: "#f4bd5a", offset: 3.1, amp: 24, label: "Renewables" },
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
  ctx.fillText("NEM market signal monitor", 44, 34);

  window.requestAnimationFrame(() => drawChart(frame + 1));
}

function openProjectModal(index) {
  const project = projects[index];
  if (!project || !modal || !modalContent) return;
  modalContent.innerHTML = `
    <span class="link-type">${project.category}</span>
    <h2 id="modalTitle">${project.title}</h2>
    <div class="workflow-grid">
      ${Object.entries(project.story).map(([key, value]) => `<div><strong>${key}</strong><span>${value}</span></div>`).join("")}
    </div>
    <div class="dashboard-tags">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
    ${
      project.url
        ? `<div class="card-actions"><a href="${project.url}" target="_blank" rel="noreferrer">Open dashboard</a></div>`
        : ""
    }
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
    let value = 0;
    const step = () => {
      value += 1;
      counter.textContent = String(value);
      if (value < target) window.setTimeout(step, 120);
    };
    step();
  });
}

let revealObserver;
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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderLab(tab.dataset.mode);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

careerTabs.forEach((tab) => tab.addEventListener("click", () => renderCareer(tab.dataset.career)));
careerNodes.forEach((node) => node.addEventListener("click", () => renderCareer(node.dataset.career)));

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest(".project-detail");
  if (detailButton) openProjectModal(Number(detailButton.dataset.projectIndex));
});

modalClose?.addEventListener("click", closeProjectModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeProjectModal();
});

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "Dark" : "Light";
});

window.addEventListener("scroll", updateActiveNav, { passive: true });

renderLab("foundation");
renderProjects();
renderCareer("2026");
observeReveals();
animateCounters();
updateActiveNav();
drawChart();
