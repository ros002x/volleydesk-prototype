const athletes = [
  {
    firstName: "Sara",
    lastName: "Conti",
    email: "sara.conti@example.com",
    phone: "+39 333 111 2233",
    gender: "F",
    category: "U18",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "Marco", lastName: "Conti", email: "marco.conti@example.com", phone: "+39 333 222 1100" },
      two: { firstName: "Laura", lastName: "Bianchi", email: "laura.bianchi@example.com", phone: "+39 333 222 1101" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Marta",
    lastName: "Riva",
    email: "marta.riva@example.com",
    phone: "+39 333 444 5566",
    gender: "F",
    category: "Serie D",
    certificate: "Scade",
    balance: 120,
    parents: {
      one: { firstName: "Paolo", lastName: "Riva", email: "", phone: "+39 333 555 4400" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Giulia",
    lastName: "Ferri",
    email: "giulia.ferri@example.com",
    phone: "+39 333 777 8899",
    gender: "F",
    category: "U16",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "Andrea", lastName: "Ferri", email: "", phone: "" },
      two: { firstName: "Michela", lastName: "Rossi", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Elena",
    lastName: "Costa",
    email: "elena.costa@example.com",
    phone: "+39 333 222 8899",
    gender: "F",
    category: "U18",
    certificate: "Mancante",
    balance: 80,
    parents: {
      one: { firstName: "", lastName: "", email: "", phone: "" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Noemi",
    lastName: "Villa",
    email: "noemi.villa@example.com",
    phone: "+39 333 111 9900",
    gender: "F",
    category: "Serie D",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "", lastName: "", email: "", phone: "" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  }
];

const documents = [
  { title: "Documento identita", type: "PDF", owner: "Sara Conti" },
  { title: "Modulo iscrizione", type: "PDF", owner: "Marta Riva" },
  { title: "Privacy", type: "DOC", owner: "Giulia Ferri" },
  { title: "Ricevuta quota", type: "PDF", owner: "Elena Costa" }
];

const payments = [
  { athlete: "Sara Conti", amount: 320, state: "Pagato" },
  { athlete: "Marta Riva", amount: 200, state: "Aperto" },
  { athlete: "Giulia Ferri", amount: 320, state: "Pagato" },
  { athlete: "Elena Costa", amount: 240, state: "Aperto" }
];

const primaNotaMovements = [
  { date: "2026-09-05", method: "Bonifico", who: "Sara Conti", reason: "Quota iscrizione U18", type: "in", amount: 120 },
  { date: "2026-09-08", method: "Carta", who: "NS Volley", reason: "Materiale allenamento", type: "out", amount: 86 },
  { date: "2026-09-12", method: "Contanti", who: "Marta Riva", reason: "Acconto quota mensile", type: "in", amount: 60 },
  { date: "2026-09-18", method: "Bonifico", who: "Palazzetto", reason: "Affitto campo", type: "out", amount: 140 },
  { date: "2026-10-02", method: "Bonifico", who: "Giulia Ferri", reason: "Quota ottobre", type: "in", amount: 30 }
];

const productShell = document.querySelector(".product-shell");
const sideNav = document.querySelector(".side-nav");
const sidebarToggle = document.querySelector("#sidebarToggle");
const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const bottomNavItems = document.querySelectorAll(".bottom-nav-item, .bottom-nav-home");
const athleteTable = document.querySelector("#athleteTable");
const certificateGrid = document.querySelector("#certificateGrid");
const certificateSearch = document.querySelector("#certificateSearch");
const certificateFilter = document.querySelector("#certificateFilter");
const certValidTotal = document.querySelector("#certValidTotal");
const certExpiringTotal = document.querySelector("#certExpiringTotal");
const certMissingTotal = document.querySelector("#certMissingTotal");
const accountingBoard = document.querySelector("#accountingBoard");
const documentList = document.querySelector("#documentList");
const deadlineList = document.querySelector("#deadlineList");
const deadlineTotal = document.querySelector("#deadlineTotal");
const calendarCta = document.querySelector("#calendarCta");
const notificationToggle = document.querySelector("#notificationToggle");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationClose = document.querySelector("#notificationClose");
const searchInput = document.querySelector("#athleteSearch");
const accountingSearch = document.querySelector("#accountingSearch");
const accountingFilter = document.querySelector("#accountingFilter");
const accountingStartDate = document.querySelector("#accountingStartDate");
const accountingEndDate = document.querySelector("#accountingEndDate");
const editAccountingButton = document.querySelector("#editAccountingButton");
const selectAccountingButton = document.querySelector("#selectAccountingButton");
const deleteAccountingButton = document.querySelector("#deleteAccountingButton");
const primaNotaSearch = document.querySelector("#primaNotaSearch");
const primaNotaType = document.querySelector("#primaNotaType");
const primaNotaDate = document.querySelector("#primaNotaDate");
const addPrimaNotaButton = document.querySelector("#addPrimaNotaButton");
const primaNotaTableBody = document.querySelector("#primaNotaTableBody");
const primaNotaTotalIn = document.querySelector("#primaNotaTotalIn");
const primaNotaTotalOut = document.querySelector("#primaNotaTotalOut");
const primaNotaBalance = document.querySelector("#primaNotaBalance");
const modal = document.querySelector("#athleteModal");
const athleteForm = document.querySelector("#athleteForm");
const modalTitle = document.querySelector("#modalTitle");
const paymentModal = document.querySelector("#paymentModal");
const paymentForm = document.querySelector("#paymentForm");
const paymentModalTitle = document.querySelector("#paymentModalTitle");
const paymentMonth = document.querySelector("#paymentMonth");
const paymentStartMonth = document.querySelector("#paymentStartMonth");
const paymentEndMonth = document.querySelector("#paymentEndMonth");
const selectAthletesButton = document.querySelector("#selectAthletesButton");
const deleteSelectedButton = document.querySelector("#deleteSelectedButton");
let activeAthleteIndex = null;
let selectionMode = false;
const selectedAthletes = new Set();
let accountingSelectionMode = false;
const selectedAccountingRows = new Set();
let activeAccountingIndex = null;
let activeAccountingMonth = "sep";
let paymentBulkMode = false;

const seasonMonths = [
  { key: "sep", label: "Set" },
  { key: "oct", label: "Ott" },
  { key: "nov", label: "Nov" },
  { key: "dec", label: "Dic" },
  { key: "jan", label: "Gen" },
  { key: "feb", label: "Feb" },
  { key: "mar", label: "Mar" },
  { key: "apr", label: "Apr" },
  { key: "may", label: "Mag" },
  { key: "jun", label: "Giu" },
  { key: "jul", label: "Lug" },
  { key: "aug", label: "Ago" }
];

function athleteName(athlete) {
  return `${athlete.firstName} ${athlete.lastName}`.trim();
}

function createDefaultAccounting(index) {
  return seasonMonths.reduce((months, month, monthIndex) => {
    const isPaid = index % 3 === 0 || monthIndex < 2;
    const isPartial = index % 3 === 1 && monthIndex === 2;
    months[month.key] = {
      expected: 30,
      paid: isPaid ? 30 : isPartial ? 15 : 0,
      days: isPartial ? 1 : 2
    };
    return months;
  }, {});
}

function ensureAccounting() {
  athletes.forEach((athlete, index) => {
    if (!athlete.accounting) {
      athlete.accounting = createDefaultAccounting(index);
    }
  });
}

function paymentState(payment) {
  if (payment.paid >= payment.expected) return "paid";
  if (payment.paid > 0) return "partial";
  return "unpaid";
}

function isDesktopSidebar() {
  return window.matchMedia("(min-width: 1180px)").matches;
}

function updateSidebarTogglePosition() {
  if (!productShell || !sideNav || !sidebarToggle || !isDesktopSidebar()) return;
  const shellRect = productShell.getBoundingClientRect();
  const navRect = sideNav.getBoundingClientRect();
  const collapsed = productShell.classList.contains("sidebar-collapsed");
  const left = collapsed ? shellRect.left + 10 : navRect.right - 18;
  sidebarToggle.style.setProperty("--sidebar-toggle-left", `${Math.max(10, left)}px`);
}

function setSidebarCollapsed(collapsed, persist = true) {
  if (!productShell || !sidebarToggle) return;
  productShell.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", collapsed ? "Mostra sidebar" : "Nascondi sidebar");
  const icon = sidebarToggle.querySelector("span");
  if (icon) icon.textContent = collapsed ? ">" : "<";
  if (persist) localStorage.setItem("nsVolleySidebarCollapsed", collapsed ? "1" : "0");
  window.requestAnimationFrame(updateSidebarTogglePosition);
}
function showView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  bottomNavItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
}

function badgeClass(value) {
  return value === "Valido" || value === "Pagato" ? "badge" : "badge warning";
}

function certificateStateClass(value) {
  return value === "Valido" ? "cert-valid" : "cert-invalid";
}

function certificateCardClass(value) {
  if (value === "Valido") return "certificate-valid";
  if (value === "Scade") return "certificate-expiring";
  return "certificate-expired";
}

function currentAthleteList() {
  const query = searchInput.value.toLowerCase();
  return athletes
    .map((athlete, index) => ({ athlete, index }))
    .filter(({ athlete }) => athleteName(athlete).toLowerCase().includes(query));
}

function genderCardClass(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "f" || normalized.startsWith("fem")) return "gender-female";
  if (normalized === "m" || normalized.startsWith("mas")) return "gender-male";
  return "gender-neutral";
}
function renderAthletes(list = athletes.map((athlete, index) => ({ athlete, index }))) {
  athleteTable.innerHTML = list.map(({ athlete, index }) => `
    <article class="table-row athlete-row person-card ${genderCardClass(athlete.gender)} ${certificateStateClass(athlete.certificate)} ${selectedAthletes.has(index) ? "selected" : ""}" data-index="${index}" tabindex="0" role="button" aria-label="${selectionMode ? "Seleziona" : "Modifica"} ${athleteName(athlete)}">
      <header class="person-card-head">
        <strong>${athleteName(athlete)}</strong>
        <span>${athlete.category || "Categoria"}</span>
      </header>
      <div class="person-card-meta">
        <span>${athlete.email || "Email mancante"}</span>
        <span>${athlete.phone || "Cellulare mancante"}</span>
      </div>

    </article>
  `).join("");
}

function updateSelectionControls() {
  const count = selectedAthletes.size;
  selectAthletesButton.textContent = selectionMode ? `Annulla (${count})` : "Seleziona";
  deleteSelectedButton.hidden = !selectionMode || count === 0;
  deleteSelectedButton.textContent = `Elimina ${count}`;
}

function renderCurrentAthletes() {
  renderAthletes(currentAthleteList());
}

function setSelectionMode(enabled) {
  selectionMode = enabled;
  if (!selectionMode) {
    selectedAthletes.clear();
  }
  renderCurrentAthletes();
  updateSelectionControls();
}

function toggleAthleteSelection(index) {
  if (selectedAthletes.has(index)) {
    selectedAthletes.delete(index);
  } else {
    selectedAthletes.add(index);
  }
  renderCurrentAthletes();
  updateSelectionControls();
}

function certificateStatusMeta(value, index) {
  if (value === "Valido") {
    return { key: "valid", label: "Valido", date: `15/${String((index % 4) + 2).padStart(2, "0")}/2027`, note: "Idoneita sportiva completa" };
  }
  if (value === "Scade") {
    return { key: "expiring", label: "In scadenza", date: `2${index}/09/2026`, note: "Rinnovo da programmare" };
  }
  return { key: "expired", label: "Mancante", date: "Da caricare", note: "Documento non presente" };
}

function currentCertificateList() {
  const query = (certificateSearch?.value || "").trim().toLowerCase();
  const filter = certificateFilter?.value || "all";

  return athletes
    .map((athlete, index) => ({ athlete, index, meta: certificateStatusMeta(athlete.certificate, index) }))
    .filter(({ athlete }) => {
      if (!query) return true;
      return [athleteName(athlete), athlete.email, athlete.phone, athlete.category]
        .some((value) => String(value || "").toLowerCase().includes(query));
    })
    .filter(({ meta }) => filter === "all" || meta.key === filter);
}

function renderCertificates() {
  if (!certificateGrid) return;
  const all = athletes.map((athlete, index) => certificateStatusMeta(athlete.certificate, index));
  if (certValidTotal) certValidTotal.textContent = all.filter((item) => item.key === "valid").length;
  if (certExpiringTotal) certExpiringTotal.textContent = all.filter((item) => item.key === "expiring").length;
  if (certMissingTotal) certMissingTotal.textContent = all.filter((item) => item.key === "expired").length;

  const rows = currentCertificateList();
  certificateGrid.innerHTML = rows.map(({ athlete, index, meta }) => `
    <article class="certificate-row certificate-${meta.key}" data-index="${index}" tabindex="0" role="button" aria-label="Apri certificato ${athleteName(athlete)}">
      <div class="certificate-status-dot" aria-hidden="true"></div>
      <div class="certificate-main">
        <strong>${athleteName(athlete)}</strong>
        <span>${athlete.email || "Email mancante"}</span>
      </div>
      <div class="certificate-contact">
        <span>${athlete.phone || "Cellulare mancante"}</span>
        <em>${athlete.category || "Categoria"}</em>
      </div>
      <div class="certificate-expiry">
        <span>${meta.label}</span>
        <strong>${meta.date}</strong>
      </div>
      <p>${meta.note}</p>
    </article>
  `).join("") || `<article class="certificate-empty">Nessun certificato trovato</article>`;
}

function currentAccountingList() {
  const query = accountingSearch?.value?.toLowerCase() || "";
  const filter = accountingFilter?.value || "all";

  return athletes
    .map((athlete, index) => ({ athlete, index }))
    .filter(({ athlete }) => athleteName(athlete).toLowerCase().includes(query))
    .filter(({ athlete }) => {
      if (filter === "all") return true;
      return seasonMonths.some((month) => paymentState(athlete.accounting[month.key]) === filter);
    });
}

function updateAccountingControls() {
  const count = selectedAccountingRows.size;
  const activeCount = count || (activeAccountingIndex === null ? 0 : 1);
  if (!selectAccountingButton || !deleteAccountingButton || !editAccountingButton) return;
  selectAccountingButton.textContent = accountingSelectionMode ? `Annulla (${count})` : "Seleziona";
  deleteAccountingButton.hidden = activeCount === 0;
  deleteAccountingButton.textContent = `Elimina ${activeCount}`;
  editAccountingButton.disabled = activeAccountingIndex === null && selectedAccountingRows.size !== 1;
}

function visibleAccountingMonths() {
  const startValue = accountingStartDate?.value || "2026-09-01";
  const endValue = accountingEndDate?.value || "2027-08-31";
  const start = new Date(`${startValue}T00:00:00`);
  const end = new Date(`${endValue}T23:59:59`);

  return seasonMonths.filter((month, index) => {
    const year = index <= 3 ? 2026 : 2027;
    const monthNumber = [8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7][index];
    const monthStart = new Date(year, monthNumber, 1);
    const monthEnd = new Date(year, monthNumber + 1, 0, 23, 59, 59);
    return monthEnd >= start && monthStart <= end;
  });
}

function renderAccounting() {
  if (!accountingBoard) return;
  const rows = currentAccountingList();
  const visibleMonths = visibleAccountingMonths();
  const header = `
    <div class="accounting-cell accounting-head accounting-name">Atleta</div>
    ${visibleMonths.map((month) => `<div class="accounting-cell accounting-head">${month.label}</div>`).join("")}
  `;

  const body = rows.map(({ athlete, index }) => {
    const selected = selectedAccountingRows.has(index) || activeAccountingIndex === index;
    return `
      <div class="accounting-cell accounting-name ${selected ? "accounting-row-selected" : ""}" data-index="${index}">
        ${athleteName(athlete)}
        <span>${athlete.category}</span>
      </div>
      ${visibleMonths.map((month) => {
        const payment = athlete.accounting[month.key];
        const state = paymentState(payment);
        return `
          <div class="accounting-cell accounting-payment payment-${state} ${selected ? "accounting-row-selected" : ""}" data-index="${index}" data-month="${month.key}">
            <strong>\u20ac${payment.paid}/${payment.expected}</strong>
            <span>${payment.days}g/set</span>
          </div>
        `;
      }).join("")}
    `;
  }).join("");

  const mobileCards = rows.map(({ athlete, index }) => {
    const selected = selectedAccountingRows.has(index) || activeAccountingIndex === index;
    return `
      <article class="accounting-mobile-card ${selected ? "accounting-row-selected" : ""}" data-index="${index}">
        <header>
          <div>
            <strong>${athleteName(athlete)}</strong>
            <span>${athlete.category}</span>
          </div>
          <button class="soft-button mobile-edit-payment" type="button" data-index="${index}">Modifica</button>
        </header>
        <div class="accounting-month-list">
          ${visibleMonths.map((month) => {
            const payment = athlete.accounting[month.key];
            const state = paymentState(payment);
            return `
              <button class="mobile-payment-chip payment-${state}" type="button" data-index="${index}" data-month="${month.key}">
                <span>${month.label}</span>
                <strong>\u20ac${payment.paid}/${payment.expected}</strong>
              </button>
            `;
          }).join("")}
        </div>
      </article>
    `;
  }).join("");

  accountingBoard.innerHTML = `
    <div class="accounting-desktop-grid accounting-grid">${header}${body}</div>
    <div class="accounting-mobile-list">${mobileCards}</div>
  `;
  updateAccountingControls();
}


function renderDeadlines() {
  if (!deadlineList || !deadlineTotal) return;

  const openPayments = athletes.reduce((total, athlete) => {
    return total + seasonMonths.filter((month) => paymentState(athlete.accounting[month.key]) !== "paid").length;
  }, 0);

  const paidPayments = athletes.reduce((total, athlete) => {
    return total + seasonMonths.filter((month) => paymentState(athlete.accounting[month.key]) === "paid").length;
  }, 0);
  const dueAmountTotal = athletes.reduce((total, athlete) => {
    return total + seasonMonths.reduce((monthTotal, month) => {
      const payment = athlete.accounting[month.key];
      return monthTotal + Math.max(0, payment.expected - payment.paid);
    }, 0);
  }, 0);
  const paidTotal = document.querySelector("#deadlinePaidTotal");
  const dueTotal = document.querySelector("#deadlineDueTotal");

  deadlineTotal.textContent = openPayments;
  if (paidTotal) paidTotal.textContent = paidPayments;
  if (dueTotal) dueTotal.textContent = `Euro ${dueAmountTotal}`;
  deadlineList.innerHTML = athletes.map((athlete, index) => {
    const paidMonths = seasonMonths.filter((month) => paymentState(athlete.accounting[month.key]) === "paid").length;
    const dueAmount = seasonMonths.reduce((total, month) => {
      const payment = athlete.accounting[month.key];
      return total + Math.max(0, payment.expected - payment.paid);
    }, 0);

    return `
      <article class="season-row" data-index="${index}">
        <header class="season-athlete">
          <div>
            <strong>${athleteName(athlete)}</strong>
            <span>${athlete.category || "Categoria"}</span>
          </div>
          <em>${paidMonths}/12</em>
        </header>
        <div class="season-months" aria-label="Quote mensili ${athleteName(athlete)}">
          ${seasonMonths.map((month) => {
            const payment = athlete.accounting[month.key];
            const state = paymentState(payment);
            return `
              <button class="season-month season-${state}" type="button" data-index="${index}" data-month="${month.key}" aria-label="${athleteName(athlete)} ${month.label} euro ${payment.paid} su ${payment.expected}">
                <span>${month.label}</span>
                <strong>${payment.paid}/${payment.expected}</strong>
              </button>
            `;
          }).join("")}
        </div>
        <footer class="season-summary">
          <span>Residuo</span>
          <strong>Euro ${dueAmount}</strong>
        </footer>
      </article>
    `;
  }).join("");
}
function formatEuro(value) {
  return `Euro ${Number(value || 0).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDateIt(value) {
  if (!value) return "-";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function currentPrimaNotaRows() {
  const query = (primaNotaSearch?.value || "").trim().toLowerCase();
  const type = primaNotaType?.value || "all";
  const date = primaNotaDate?.value || "";

  return primaNotaMovements
    .filter((movement) => type === "all" || movement.type === type)
    .filter((movement) => !date || movement.date === date)
    .filter((movement) => {
      if (!query) return true;
      return [movement.date, movement.method, movement.who, movement.reason]
        .some((value) => String(value).toLowerCase().includes(query));
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function renderPrimaNota() {
  if (!primaNotaTableBody) return;
  const rows = currentPrimaNotaRows();
  const totalIn = rows.reduce((total, movement) => total + (movement.type === "in" ? movement.amount : 0), 0);
  const totalOut = rows.reduce((total, movement) => total + (movement.type === "out" ? movement.amount : 0), 0);

  if (primaNotaTotalIn) primaNotaTotalIn.textContent = formatEuro(totalIn);
  if (primaNotaTotalOut) primaNotaTotalOut.textContent = formatEuro(totalOut);
  if (primaNotaBalance) primaNotaBalance.textContent = formatEuro(totalIn - totalOut);

  primaNotaTableBody.innerHTML = rows.map((movement) => `
    <tr class="prima-nota-row movement-${movement.type}">
      <td data-label="Data">${formatDateIt(movement.date)}</td>
      <td data-label="Metodo"><span class="method-pill">${movement.method}</span></td>
      <td data-label="Chi"><strong>${movement.who}</strong></td>
      <td data-label="Causale">${movement.reason}</td>
      <td data-label="Dare" class="money-col negative-value">${movement.type === "out" ? formatEuro(movement.amount) : "-"}</td>
      <td data-label="Avere" class="money-col positive-value">${movement.type === "in" ? formatEuro(movement.amount) : "-"}</td>
    </tr>
  `).join("") || `
    <tr class="prima-nota-empty">
      <td colspan="6">Nessun movimento trovato</td>
    </tr>
  `;
}
function renderDocuments() {
  const uploadedDocuments = athletes.flatMap((athlete) => [
    ...athlete.files.certificate.map((file) => ({ title: file.name, type: "CERT", owner: athleteName(athlete) })),
    ...athlete.files.documents.map((file) => ({ title: file.name, type: "FILE", owner: athleteName(athlete) }))
  ]);
  const archiveDocuments = [...documents, ...uploadedDocuments];

  documentList.innerHTML = archiveDocuments.map((document) => `
    <article class="doc-row">
      <strong>${document.title}</strong>
      <span class="muted">${document.owner}</span>
      <span class="badge">${document.type}</span>
    </article>
  `).join("");
}

function updateSummary() {
  const validCertificates = athletes.filter((athlete) => athlete.certificate === "Valido").length;
  const openDebts = athletes.filter((athlete) => athlete.balance > 0).length;
  const balance = athletes.reduce((total, athlete) => {
    return total + seasonMonths.reduce((monthTotal, month) => monthTotal + athlete.accounting[month.key].paid, 0);
  }, 0);
  const uploadedFileCount = athletes.reduce((total, athlete) => {
    return total + athlete.files.certificate.length + athlete.files.documents.length;
  }, 0);
  const archive = { athletes, payments, documents };
  const json = JSON.stringify(archive, null, 2);

  document.querySelector("#athleteCount").textContent = athletes.length;
  document.querySelector("#certificateCount").textContent = validCertificates;
  document.querySelector("#debtCount").textContent = openDebts;
  document.querySelector("#documentCount").textContent = documents.length + uploadedFileCount;
  document.querySelector("#seasonBalance").textContent = `\u20ac${balance}`;
  const storageSize = document.querySelector("#storageSize");
  const storageFill = document.querySelector("#storageFill");
  const dataPreview = document.querySelector("#dataPreview");
  if (storageSize) storageSize.textContent = `${Math.ceil(json.length / 1024)} KB`;
  if (storageFill) storageFill.style.width = `${Math.min(92, json.length / 40)}%`;
  if (dataPreview) dataPreview.textContent = json;
}

function setFormValue(name, value) {
  athleteForm.elements[name].value = value || "";
}

function fillForm(athlete) {
  modalTitle.textContent = athleteName(athlete) || "Nuovo atleta";
  setFormValue("firstName", athlete.firstName);
  setFormValue("lastName", athlete.lastName);
  setFormValue("email", athlete.email);
  setFormValue("phone", athlete.phone);
  setFormValue("gender", athlete.gender);
  setFormValue("category", athlete.category);
  setFormValue("parentOneFirstName", athlete.parents.one.firstName);
  setFormValue("parentOneLastName", athlete.parents.one.lastName);
  setFormValue("parentOneEmail", athlete.parents.one.email);
  setFormValue("parentOnePhone", athlete.parents.one.phone);
  setFormValue("parentTwoFirstName", athlete.parents.two.firstName);
  setFormValue("parentTwoLastName", athlete.parents.two.lastName);
  setFormValue("parentTwoEmail", athlete.parents.two.email);
  setFormValue("parentTwoPhone", athlete.parents.two.phone);
  renderModalFiles(athlete);
}

function renderModalFiles(athlete) {
  document.querySelector("#certificateFiles").innerHTML = athlete.files.certificate
    .map((file) => `<li>${file.name}</li>`)
    .join("");
  document.querySelector("#registrationFiles").innerHTML = athlete.files.documents
    .map((file) => `<li>${file.name}</li>`)
    .join("");
}

function openAthleteModal(index) {
  activeAthleteIndex = index;
  fillForm(athletes[index]);
  modal.showModal();
}

function fillPaymentMonthOptions() {
  const options = seasonMonths
    .map((month) => `<option value="${month.key}">${month.label}</option>`)
    .join("");
  paymentMonth.innerHTML = options;
  paymentStartMonth.innerHTML = options;
  paymentEndMonth.innerHTML = options;
}

function monthRange(startKey, endKey) {
  const start = seasonMonths.findIndex((month) => month.key === startKey);
  const end = seasonMonths.findIndex((month) => month.key === endKey);
  const from = Math.min(start, end);
  const to = Math.max(start, end);
  return seasonMonths.slice(from, to + 1).map((month) => month.key);
}

function selectedAccountingTargets() {
  if (selectedAccountingRows.size) return [...selectedAccountingRows];
  return activeAccountingIndex === null ? [] : [activeAccountingIndex];
}

function openPaymentModal(index, monthKey = activeAccountingMonth, bulk = true) {
  activeAccountingIndex = index;
  activeAccountingMonth = monthKey;
  paymentBulkMode = bulk;
  const athlete = athletes[index];
  const payment = athlete.accounting[monthKey];
  const targetCount = selectedAccountingTargets().length || 1;

  paymentModalTitle.textContent = bulk && targetCount > 1 ? `${targetCount} atleti` : athleteName(athlete);
  paymentStartMonth.parentElement.hidden = !bulk;
  paymentEndMonth.parentElement.hidden = !bulk;
  paymentMonth.parentElement.hidden = bulk;
  paymentStartMonth.value = monthKey;
  paymentEndMonth.value = monthKey;
  paymentForm.elements.month.value = monthKey;
  paymentForm.elements.expected.value = payment.expected;
  paymentForm.elements.paid.value = payment.paid;
  paymentForm.elements.days.value = payment.days;
  paymentModal.showModal();
}

function addFiles(fileType, fileList) {
  if (activeAthleteIndex === null) return;

  const target = athletes[activeAthleteIndex].files[fileType];
  Array.from(fileList).forEach((file) => {
    target.push({ name: file.name, size: file.size, type: file.type || "file" });
  });

  if (fileType === "certificate" && target.length > 0) {
    athletes[activeAthleteIndex].certificate = "Valido";
  }

  renderModalFiles(athletes[activeAthleteIndex]);
  renderAll();
}

if (productShell && sidebarToggle) {
  setSidebarCollapsed(localStorage.getItem("nsVolleySidebarCollapsed") === "1", false);
  sidebarToggle.addEventListener("click", () => {
    setSidebarCollapsed(!productShell.classList.contains("sidebar-collapsed"));
  });
  window.addEventListener("resize", updateSidebarTogglePosition);
  window.addEventListener("scroll", updateSidebarTogglePosition, { passive: true });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

document.querySelectorAll(".nav-item-proxy").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    showView(item.dataset.target);
    item.closest("details")?.removeAttribute("open");
  });
});

bottomNavItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});
let notificationTimer;
let notificationStartY = null;

function hideNotificationToast() {
  if (!notificationPanel) return;
  notificationPanel.classList.remove("show");
  notificationPanel.classList.add("hide");
  notificationToggle?.classList.remove("active");
  notificationToggle?.setAttribute("aria-expanded", "false");
  window.clearTimeout(notificationTimer);
  window.setTimeout(() => {
    notificationPanel.hidden = true;
    notificationPanel.classList.remove("hide");
  }, 260);
}

function showNotificationToast(title = "Notifiche attive", message = "Avvisi attivati per scadenze, certificati e quote aperte.", activateBell = false) {
  if (!notificationPanel) return;
  const titleEl = notificationPanel.querySelector("strong");
  const messageEl = notificationPanel.querySelector("p");
  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  window.clearTimeout(notificationTimer);
  notificationPanel.hidden = false;
  notificationPanel.classList.remove("hide");
  notificationPanel.classList.add("show");
  notificationToggle?.classList.toggle("active", activateBell);
  notificationToggle?.setAttribute("aria-expanded", String(activateBell));
  notificationTimer = window.setTimeout(hideNotificationToast, 4200);
}

function isMobileCalendarDevice() {
  return window.matchMedia("(max-width: 820px) and (pointer: coarse)").matches;
}

function openMobileCalendar() {
  const title = "Bari Volley vs Monza Volley";
  const description = "Prossima partita NS Volley";
  const location = "Palazzetto";
  const start = new Date("2027-05-26T18:00:00+02:00");
  const end = new Date("2027-05-26T20:00:00+02:00");
  const userAgent = navigator.userAgent || "";

  if (/Android/i.test(userAgent)) {
    const params = new URLSearchParams({
      title,
      description,
      eventLocation: location,
      beginTime: String(start.getTime()),
      endTime: String(end.getTime())
    });
    window.location.href = `intent://insert?${params.toString()}#Intent;scheme=content;action=android.intent.action.INSERT;type=vnd.android.cursor.item/event;end`;
    return;
  }

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NS Volley//Calendario//IT",
    "BEGIN:VEVENT",
    "UID:ns-volley-bari-monza@example.local",
    "DTSTAMP:20260823T000000Z",
    "DTSTART:20270526T160000Z",
    "DTEND:20270526T180000Z",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ns-volley-partita.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}

notificationToggle?.addEventListener("click", () => showNotificationToast(undefined, undefined, true));
calendarCta?.addEventListener("click", () => {
  if (isMobileCalendarDevice()) {
    openMobileCalendar();
    return;
  }
  showNotificationToast("Feature Mobile", "Apri questa funzione dal telefono per aggiungere la partita al calendario.");
});
notificationClose?.addEventListener("click", hideNotificationToast);
notificationPanel?.addEventListener("pointerdown", (event) => {
  notificationStartY = event.clientY;
});
notificationPanel?.addEventListener("pointerup", (event) => {
  if (notificationStartY === null) return;
  const deltaY = event.clientY - notificationStartY;
  notificationStartY = null;
  if (deltaY < -24) hideNotificationToast();
});
deadlineList?.addEventListener("click", (event) => {
  const chip = event.target.closest(".season-month");
  if (!chip) return;
  openPaymentModal(Number(chip.dataset.index), chip.dataset.month, false);
});

searchInput.addEventListener("input", (event) => {
  renderCurrentAthletes();
});

certificateSearch?.addEventListener("input", renderCertificates);
certificateFilter?.addEventListener("change", renderCertificates);
certificateGrid?.addEventListener("click", (event) => {
  const row = event.target.closest(".certificate-row");
  if (!row) return;
  showView("athletes");
  openAthleteModal(Number(row.dataset.index));
});
certificateGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const row = event.target.closest(".certificate-row");
  if (!row) return;
  event.preventDefault();
  showView("athletes");
  openAthleteModal(Number(row.dataset.index));
});

accountingSearch?.addEventListener("input", () => renderAccounting());
accountingFilter?.addEventListener("change", () => renderAccounting());
accountingStartDate?.addEventListener("change", () => renderAccounting());
accountingEndDate?.addEventListener("change", () => renderAccounting());
primaNotaSearch?.addEventListener("input", renderPrimaNota);
primaNotaType?.addEventListener("change", renderPrimaNota);
primaNotaDate?.addEventListener("change", renderPrimaNota);
addPrimaNotaButton?.addEventListener("click", () => {
  const nextIsIncome = primaNotaMovements.length % 2 === 0;
  primaNotaMovements.unshift({
    date: new Date().toISOString().slice(0, 10),
    method: nextIsIncome ? "Bonifico" : "Carta",
    who: nextIsIncome ? "Nuovo atleta" : "NS Volley",
    reason: nextIsIncome ? "Nuova entrata" : "Nuova uscita",
    type: nextIsIncome ? "in" : "out",
    amount: nextIsIncome ? 30 : 25
  });
  renderPrimaNota();
  showNotificationToast("Movimento aggiunto", "Prima nota aggiornata con una nuova riga modificabile nei dati.");
});

accountingBoard?.addEventListener("click", (event) => {
  const editButton = event.target.closest(".mobile-edit-payment");
  if (editButton) {
    const index = Number(editButton.dataset.index);
    activeAccountingIndex = index;
    openPaymentModal(index, activeAccountingMonth, true);
    return;
  }

  const paymentChip = event.target.closest(".mobile-payment-chip");
  if (paymentChip) {
    const index = Number(paymentChip.dataset.index);
    activeAccountingIndex = index;
    activeAccountingMonth = paymentChip.dataset.month;
    if (accountingSelectionMode) {
      if (selectedAccountingRows.has(index)) {
        selectedAccountingRows.delete(index);
      } else {
        selectedAccountingRows.add(index);
      }
      renderAccounting();
      return;
    }
    openPaymentModal(index, activeAccountingMonth, true);
    return;
  }

  const cell = event.target.closest("[data-index]");
  if (!cell) return;

  const index = Number(cell.dataset.index);
  activeAccountingIndex = index;
  if (cell.dataset.month) {
    activeAccountingMonth = cell.dataset.month;
  }

  if (accountingSelectionMode) {
    if (selectedAccountingRows.has(index)) {
      selectedAccountingRows.delete(index);
    } else {
      selectedAccountingRows.add(index);
    }
  }

  renderAccounting();
});

accountingBoard?.addEventListener("dblclick", (event) => {
  const cell = event.target.closest(".accounting-payment");
  if (!cell) return;
  openPaymentModal(Number(cell.dataset.index), cell.dataset.month, true);
});

selectAccountingButton?.addEventListener("click", () => {
  accountingSelectionMode = !accountingSelectionMode;
  if (!accountingSelectionMode) {
    selectedAccountingRows.clear();
  }
  renderAccounting();
});

editAccountingButton?.addEventListener("click", () => {
  const index = selectedAccountingRows.size ? [...selectedAccountingRows][0] : activeAccountingIndex;
  if (index === null || index === undefined) return;
  openPaymentModal(index, activeAccountingMonth, true);
});

deleteAccountingButton?.addEventListener("click", () => {
  const targets = selectedAccountingRows.size ? selectedAccountingRows : new Set([activeAccountingIndex]);
  const indexes = [...targets].filter((index) => index !== null && index !== undefined).sort((a, b) => b - a);
  indexes.forEach((index) => {
    const removedName = athleteName(athletes[index]);
    athletes.splice(index, 1);

    for (let i = payments.length - 1; i >= 0; i -= 1) {
      if (payments[i].athlete === removedName) payments.splice(i, 1);
    }

    for (let i = documents.length - 1; i >= 0; i -= 1) {
      if (documents[i].owner === removedName) documents.splice(i, 1);
    }
  });

  selectedAccountingRows.clear();
  accountingSelectionMode = false;
  activeAccountingIndex = null;
  renderAll();
});

athleteTable.addEventListener("click", (event) => {
  const row = event.target.closest(".athlete-row");
  if (!row) return;
  const index = Number(row.dataset.index);
  if (selectionMode) {
    toggleAthleteSelection(index);
    return;
  }
  openAthleteModal(index);
});

athleteTable.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const row = event.target.closest(".athlete-row");
  if (!row) return;
  event.preventDefault();
  const index = Number(row.dataset.index);
  if (selectionMode) {
    toggleAthleteSelection(index);
    return;
  }
  openAthleteModal(index);
});

selectAthletesButton.addEventListener("click", () => {
  setSelectionMode(!selectionMode);
});

deleteSelectedButton.addEventListener("click", () => {
  const indexes = [...selectedAthletes].sort((a, b) => b - a);
  indexes.forEach((index) => {
    const removedName = athleteName(athletes[index]);
    athletes.splice(index, 1);

    for (let i = payments.length - 1; i >= 0; i -= 1) {
      if (payments[i].athlete === removedName) payments.splice(i, 1);
    }

    for (let i = documents.length - 1; i >= 0; i -= 1) {
      if (documents[i].owner === removedName) documents.splice(i, 1);
    }
  });

  setSelectionMode(false);
  renderAll();
});

function createAthleteFromUi() {
  setSelectionMode(false);
  athletes.push({
    firstName: "Nuovo",
    lastName: `Atleta ${athletes.length + 1}`,
    email: "",
    phone: "",
    gender: "",
    category: "Da assegnare",
    certificate: "Mancante",
    balance: 0,
    accounting: createDefaultAccounting(athletes.length),
    parents: {
      one: { firstName: "", lastName: "", email: "", phone: "" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  });
  renderAll();
  showView("athletes");
  openAthleteModal(athletes.length - 1);
}

document.querySelector("#addAthleteButton").addEventListener("click", createAthleteFromUi);
document.querySelector("#mobileAddButton")?.addEventListener("click", createAthleteFromUi);

document.querySelector("#closeModalButton").addEventListener("click", () => modal.close());
document.querySelector("#cancelModalButton").addEventListener("click", () => modal.close());
document.querySelector("#closePaymentButton").addEventListener("click", () => paymentModal.close());
document.querySelector("#cancelPaymentButton").addEventListener("click", () => paymentModal.close());

athleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeAthleteIndex === null) return;

  const form = new FormData(athleteForm);
  const athlete = athletes[activeAthleteIndex];
  athlete.firstName = form.get("firstName").trim();
  athlete.lastName = form.get("lastName").trim();
  athlete.email = form.get("email").trim();
  athlete.phone = form.get("phone").trim();
  athlete.gender = form.get("gender");
  athlete.category = form.get("category").trim();
  athlete.parents.one = {
    firstName: form.get("parentOneFirstName").trim(),
    lastName: form.get("parentOneLastName").trim(),
    email: form.get("parentOneEmail").trim(),
    phone: form.get("parentOnePhone").trim()
  };
  athlete.parents.two = {
    firstName: form.get("parentTwoFirstName").trim(),
    lastName: form.get("parentTwoLastName").trim(),
    email: form.get("parentTwoEmail").trim(),
    phone: form.get("parentTwoPhone").trim()
  };

  renderAll();
  modal.close();
});

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (activeAccountingIndex === null) return;

  const form = new FormData(paymentForm);
  const monthKeys = paymentBulkMode ? monthRange(form.get("startMonth"), form.get("endMonth")) : [form.get("month")];
  const targets = paymentBulkMode ? selectedAccountingTargets() : [activeAccountingIndex];
  const expected = Number(form.get("expected")) || 0;
  const paid = Number(form.get("paid")) || 0;
  const days = Number(form.get("days")) || 0;

  targets.forEach((index) => {
    monthKeys.forEach((monthKey) => {
      athletes[index].accounting[monthKey] = { expected, paid, days };
    });
  });

  activeAccountingMonth = monthKeys[0];

  renderAll();
  paymentModal.close();
});

document.querySelectorAll(".drop-zone").forEach((zone) => {
  const input = zone.querySelector("input");
  const fileType = zone.dataset.fileType;

  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("drag-over");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("drag-over");
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("drag-over");
    addFiles(fileType, event.dataTransfer.files);
  });

  input.addEventListener("change", () => {
    addFiles(fileType, input.files);
    input.value = "";
  });
});

document.querySelector("#exportButton")?.addEventListener("click", () => {
  const payload = JSON.stringify({ athletes, payments, documents }, null, 2);
  navigator.clipboard?.writeText(payload);
});

function renderAll() {
  ensureAccounting();
  fillPaymentMonthOptions();
  renderCurrentAthletes();
  renderCertificates();
  renderAccounting();
  renderPrimaNota();
  renderDocuments();
  updateSummary();
  updateSelectionControls();
}

renderAll();





