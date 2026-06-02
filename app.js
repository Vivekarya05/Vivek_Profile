const labContent = {
  pipeline: {
    title: "AEMO NEMWeb ETL pipeline",
    copy:
      "Automated extraction, validation, staging, and PostgreSQL loading for NEMWeb datasets. The workflow is built around data integrity checks, retry logic, traceability, and market-ready structures for forecasting and operational analytics.",
    stat: "ETL",
    statText: "Raw AEMO market files transformed into analysis-ready tables.",
    flow: ["Extract NEMWeb files", "Validate and stage", "Load PostgreSQL", "Power dashboards and models"],
  },
  forecasting: {
    title: "Demand and price forecasting",
    copy:
      "Short-term electricity demand and 5-minute price forecasting using ARIMA, XGBoost, and LSTM models. Feature engineering captures seasonality, demand peaks, renewable intermittency, negative pricing, and volatility patterns.",
    stat: "5-min",
    statText: "Dispatch interval focus for price behaviour and market volatility.",
    flow: ["Build time features", "Train ARIMA/XGBoost/LSTM", "Validate against recent data", "Explain market drivers"],
  },
  trading: {
    title: "BESS trading intelligence",
    copy:
      "Battery storage strategy work focused on price-signal analysis, arbitrage simulation, operational constraints, and future extensions into FCAS co-optimisation and virtual power plant dispatch pathways.",
    stat: "BESS",
    statText: "Trading simulations linked to operational market constraints.",
    flow: ["Read price signals", "Model charge windows", "Simulate dispatch", "Compare arbitrage value"],
  },
  research: {
    title: "Capstone and research direction",
    copy:
      "The capstone pathway connects market data pipelines, forecasting models, bid-stack tooling, and dashboard delivery into a stronger contribution on NSW wholesale electricity market drivers.",
    stat: "NSW",
    statText: "Wholesale electricity market driver analysis as the capstone anchor.",
    flow: ["Validate models", "Update Q1 2026 data", "Package dashboards", "Publish research findings"],
  },
};

const projects = [
  {
    title: "NEM Market Intelligence & BESS Trading Platform",
    category: "trading",
    accent: "teal",
    summary:
      "End-to-end energy market analytics platform integrating AEMO data pipelines, forecasting models, operational dashboards, and BESS arbitrage simulations.",
    stack: ["AEMO", "Python", "BESS", "Trading analytics"],
  },
  {
    title: "AEMO NEMWeb Data Pipeline",
    category: "engineering",
    accent: "blue",
    summary:
      "Automated ETL workflow that extracts, validates, structures, and loads NEMWeb datasets into PostgreSQL for forecasting and market analysis.",
    stack: ["SQL", "PostgreSQL", "ETL", "Validation"],
    url: "https://vivekarya05.github.io/nemweb-etl-pipeline/",
  },
  {
    title: "Electricity Demand Forecasting",
    category: "forecasting",
    accent: "amber",
    summary:
      "Short-term NEM demand forecasting with ARIMA, XGBoost, and LSTM models using seasonality, peak-demand, and operational time-series features.",
    stack: ["ARIMA", "XGBoost", "LSTM", "AEMO"],
  },
  {
    title: "Electricity Price Forecasting & Market Behaviour",
    category: "forecasting",
    accent: "coral",
    summary:
      "5-minute price forecasting and volatility analysis focused on negative pricing, renewable intermittency, and supply-demand imbalance impacts.",
    stack: ["LSTM", "Volatility", "Negative pricing", "NEM"],
  },
  {
    title: "Power BI Market and Operations Dashboards",
    category: "dashboards",
    accent: "teal",
    summary:
      "Research and business dashboards that improve visibility into electricity market insights, renewable integration, finance, and operational performance.",
    stack: ["Power BI", "DAX", "Reporting", "Stakeholders"],
  },
  {
    title: "NSW Wholesale Market Capstone",
    category: "trading",
    accent: "blue",
    summary:
      "Research pathway to validate forecasting models, integrate Streamlit and bid-stack tools, and publish findings on NSW market drivers.",
    stack: ["Capstone", "Streamlit", "Bid stack", "NSW"],
  },
  {
    title: "Industrial Energy Systems Optimisation",
    category: "dashboards",
    accent: "amber",
    summary:
      "Operational energy performance analysis for HVAC and utility systems, supported by monitoring, validation, and SCADA/PLC exposure.",
    stack: ["Energy systems", "SCADA", "HVAC", "Performance"],
  },
];

const panel = document.querySelector("#labPanel");
const tabs = document.querySelectorAll(".lab-tab");
const grid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-pill");
const chart = document.querySelector("#marketChart");
const ctx = chart.getContext("2d");

function renderLab(mode) {
  const item = labContent[mode];
  panel.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
      <div class="process-flow">
        ${item.flow.map((step) => `<span>${step}</span>`).join("")}
      </div>
    </div>
    <div class="lab-stat">
      <strong>${item.stat}</strong>
      <span>${item.statText}</span>
    </div>
  `;
}

function renderProjects(filter = "all") {
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  grid.innerHTML = visible
    .map(
      (project) => `
        <article class="project-card" data-accent="${project.accent}">
          <div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-meta">
              ${project.stack.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
          ${
            project.url
              ? `<a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">Open demo</a>`
              : `<span class="project-link">Portfolio project</span>`
          }
        </article>
      `
    )
    .join("");
}

function drawChart(frame = 0) {
  const width = chart.width;
  const height = chart.height;
  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
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
    { color: "#f1aa31", offset: 0, amp: 42, label: "Price" },
    { color: "#8ff0c2", offset: 1.7, amp: 32, label: "Demand" },
    { color: "#ffffff", offset: 3.1, amp: 24, label: "Renewables" },
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

  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  ctx.font = "700 16px Inter, system-ui, sans-serif";
  ctx.fillText("NEM market signal monitor", 44, 34);

  series.forEach((line, index) => {
    const x = width - 170;
    const y = 32 + index * 28;
    ctx.fillStyle = line.color;
    ctx.fillRect(x, y - 10, 18, 4);
    ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
    ctx.font = "700 13px Inter, system-ui, sans-serif";
    ctx.fillText(line.label, x + 28, y - 4);
  });

  window.requestAnimationFrame(() => drawChart(frame + 1));
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

renderLab("pipeline");
renderProjects();
drawChart();
