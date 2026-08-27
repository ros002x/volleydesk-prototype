let lockedScrollY = 0;

function lockDocumentScroll() {
  if (document.body.classList.contains("modal-open")) return;
  lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
  document.body.style.top = `-${lockedScrollY}px`;
}

function unlockDocumentScroll() {
  const hasOpenDialog = [...document.querySelectorAll("dialog")].some((dialog) => dialog.open);
  if (hasOpenDialog) return;
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
}

function openLockedDialog(dialog) {
  if (!dialog) return;
  lockDocumentScroll();
  dialog.showModal();
}
function setDeviceLayoutClass() {
  const width = window.innerWidth || document.documentElement.clientWidth;
  const isTabletRange = width >= 700 && width <= 1366;
  const looksLikeIPad = /iPad|Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  document.documentElement.classList.toggle("tablet-layout", isTabletRange || looksLikeIPad);
}
setDeviceLayoutClass();
window.addEventListener("resize", setDeviceLayoutClass);
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
  },
    {
      firstName: "Luca",
      lastName: "Marino",
      email: "luca.marino@example.com",
      phone: "+39 333 555 1177",
      gender: "M",
      category: "U17",
      certificate: "Valido",
      balance: 0,
      parents: {
        one: { firstName: "Roberto", lastName: "Marino", email: "roberto.marino@example.com", phone: "+39 333 555 1180" },
        two: { firstName: "Anna", lastName: "Greco", email: "anna.greco@example.com", phone: "+39 333 555 1181" }
      },
      files: { certificate: [], documents: [] }
    },
    {
      firstName: "Matteo",
      lastName: "Russo",
      email: "matteo.russo@example.com",
      phone: "+39 333 666 2244",
      gender: "M",
      category: "Serie C",
      certificate: "Scade",
      balance: 60,
      parents: {
        one: { firstName: "Carlo", lastName: "Russo", email: "", phone: "+39 333 666 2250" },
        two: { firstName: "", lastName: "", email: "", phone: "" }
      },
      files: { certificate: [], documents: [] }
    },
    {
      firstName: "Davide",
      lastName: "Esposito",
      email: "davide.esposito@example.com",
      phone: "+39 333 777 3344",
      gender: "M",
      category: "U19",
      certificate: "Valido",
      balance: 0,
      parents: {
        one: { firstName: "Gianni", lastName: "Esposito", email: "gianni.esposito@example.com", phone: "+39 333 777 3350" },
        two: { firstName: "Rosa", lastName: "Lombardi", email: "", phone: "+39 333 777 3351" }
      },
      files: { certificate: [], documents: [] }
    },
    {
      firstName: "Alessandro",
      lastName: "Bruno",
      email: "alessandro.bruno@example.com",
      phone: "+39 333 888 4411",
      gender: "M",
      category: "U15",
      certificate: "Mancante",
      balance: 90,
      parents: {
        one: { firstName: "Nicola", lastName: "Bruno", email: "", phone: "+39 333 888 4420" },
        two: { firstName: "Francesca", lastName: "Leone", email: "francesca.leone@example.com", phone: "" }
      },
      files: { certificate: [], documents: [] }
    },
    {
      firstName: "Marco",
      lastName: "De Santis",
      email: "marco.desantis@example.com",
      phone: "+39 333 999 5522",
      gender: "M",
      category: "Serie D",
      certificate: "Valido",
      balance: 30,
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

const patchNotes = {
  "beta-1": {
    version: "Beta 1",
    title: "Demo ufficiale",
    sections: [
      { title: "Stato progetto", items: ["Demo front-end pronta per revisione commerciale e test operativi.", "Navigazione principale consolidata tra home, atleti, certificati, documenti, classifiche, scadenziario, prima nota e comunicazioni.", "Interfaccia pronta per essere collegata al database definitivo."] },
      { title: "Miglioramenti", items: ["Flussi principali ordinati per uso gestionale reale.", "Comandi di creazione evidenziati in blu per rendere immediata l'azione primaria.", "Patch notes dedicate agli aggiornamenti developer, separate dai contenuti operativi della societa."] },
      { title: "Prossimi passi", items: ["Configurazione database.", "Persistenza dati reali.", "Preparazione lancio ufficiale."] }
    ]
  },
  "layout-mobile": {
    version: "Release",
    title: "Layout Mobile",
    sections: [
      { title: "Miglioramenti", items: ["Esperienza adattiva per smartphone, tablet e desktop con layout dedicati per ogni formato.", "Scadenziario e certificati ottimizzati su mobile con card compatte e apertura progressiva dei dettagli.", "Prima nota riorganizzata per lettura rapida dei movimenti economici su schermi piccoli."] },
      { title: "Interfaccia", items: ["Toolbar rese piu coerenti tra le aree operative.", "Bottom navigation mobile semplificata sulle sezioni principali.", "Modali adattati per evitare zoom indesiderato e contenuti tagliati su iOS/iPadOS."] },
      { title: "Bug fix", items: ["Risolti problemi di sovrapposizione nei filtri dello scadenziario.", "Corretto lo scroll del contenuto dietro ai modali.", "Migliorata la leggibilita delle card su mobile."] }
    ]
  },
  "alpha-1": {
    version: "Update Alpha 1",
    title: "Definizione struttura",
    sections: [
      { title: "Struttura", items: ["Definite le aree operative principali e il loro ruolo nel gestionale.", "Rimosse sezioni ridondanti per mantenere l'app piu pulita e focalizzata.", "Separata l'area Comunicazioni come spazio developer per note di rilascio e aggiornamenti."] },
      { title: "Base dati", items: ["Impostati dati demo per atleti, certificati, quote mensili e prima nota.", "Preparata la logica di visualizzazione per stato certificati, scadenze e movimenti.", "Predisposte le basi per sostituire i dati statici con database reale."] },
      { title: "Direzione prodotto", items: ["Design premium chiaro, senza dark mode e senza struttura da gestionale tradizionale.", "Priorita alla consultazione veloce da mobile e alla gestione completa da desktop."] }
    ]
  }
};
const matchData = {
  date: "2026-02-08",
  time: "17:30",
  homeTeam: "A.S.D. VOLLEY NOVA SIRI",
  awayTeam: "VOLLEY MATERA",
};

const productShell = document.querySelector(".product-shell");
const sideNav = document.querySelector(".side-nav");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarMenu = document.querySelector(".pill-nav");
const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const bottomNavItems = document.querySelectorAll(".bottom-nav-item, .bottom-nav-home");
const athleteTable = document.querySelector("#athleteTable");
const certificateGrid = document.querySelector("#certificateGrid");
const certificateSearch = document.querySelector("#certificateSearch");
const certificateFilter = document.querySelector("#certificateFilter");
const openCertificateUploadButton = document.querySelector("#openCertificateUploadButton");
const certificateUploadModal = document.querySelector("#certificateUploadModal");
const certificateUploadForm = document.querySelector("#certificateUploadForm");
const certificateUploadAthlete = document.querySelector("#certificateUploadAthlete");
const certificateUploadZone = document.querySelector("#certificateUploadZone");
const certificateUploadFile = document.querySelector("#certificateUploadFile");
const certificateUploadFiles = document.querySelector("#certificateUploadFiles");
const certValidTotal = document.querySelector("#certValidTotal");
const certExpiringTotal = document.querySelector("#certExpiringTotal");
const certMissingTotal = document.querySelector("#certMissingTotal");
const accountingBoard = document.querySelector("#accountingBoard");
const documentList = document.querySelector("#documentList");
const deadlineList = document.querySelector("#deadlineList");
const deadlineTotal = document.querySelector("#deadlineTotal");
const calendarCta = document.querySelector("#calendarCta");
const matchCard = document.querySelector("#matchCard");
const matchModal = document.querySelector("#matchModal");
const matchForm = document.querySelector("#matchForm");
const matchDateLabel = document.querySelector("#matchDateLabel");
const matchTimeLabel = document.querySelector("#matchTimeLabel");
const matchHomeTeam = document.querySelector("#matchHomeTeam");
const matchAwayTeam = document.querySelector("#matchAwayTeam");
const matchDays = document.querySelector("#matchDays");
const matchHours = document.querySelector("#matchHours");
const matchMinutes = document.querySelector("#matchMinutes");
const matchSeconds = document.querySelector("#matchSeconds");
const patchNoteButtons = document.querySelectorAll("[data-patch-note]");
const patchNoteModal = document.querySelector("#patchNoteModal");
const patchNoteVersion = document.querySelector("#patchNoteVersion");
const patchNoteTitle = document.querySelector("#patchNoteTitle");
const patchNoteBody = document.querySelector("#patchNoteBody");
const closePatchNoteButton = document.querySelector("#closePatchNoteButton");
const notificationToggle = document.querySelector("#notificationToggle");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationClose = document.querySelector("#notificationClose");
const searchInput = document.querySelector("#athleteSearch");
const accountingSearch = document.querySelector("#accountingSearch");
const accountingFilter = document.querySelector("#accountingFilter");
const accountingStartDate = document.querySelector("#accountingStartDate");
const accountingEndDate = document.querySelector("#accountingEndDate");
const editAccountingButton = document.querySelector("#editAccountingButton");
const addAccountingMonthsButton = document.querySelector("#addAccountingMonthsButton");
const selectAccountingButton = document.querySelector("#selectAccountingButton");
const resetAccountingFiltersButton = document.querySelector("#resetAccountingFiltersButton");
const deleteAccountingButton = document.querySelector("#deleteAccountingButton");
const primaNotaSearch = document.querySelector("#primaNotaSearch");
const primaNotaType = document.querySelector("#primaNotaType");
const primaNotaDate = document.querySelector("#primaNotaDate");
const addPrimaNotaButton = document.querySelector("#addPrimaNotaButton");
const primaNotaModal = document.querySelector("#primaNotaModal");
const primaNotaForm = document.querySelector("#primaNotaForm");
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
const paymentAthleteField = document.querySelector("#paymentAthleteField");
const paymentAthlete = document.querySelector("#paymentAthlete");
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
let paymentChooseAthleteMode = false;
let pendingCertificateFiles = [];

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

function twoDigits(value) {
  return String(Math.max(0, Number(value) || 0)).padStart(2, "0");
}

function parseLocalDate(dateValue, timeValue = "00:00") {
  const [year, month, day] = String(dateValue || "").split("-").map(Number);
  const [hours, minutes] = String(timeValue || "00:00").split(":").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, hours || 0, minutes || 0, 0, 0);
}

function formatMatchDateLabel(dateValue) {
  const date = parseLocalDate(dateValue);
  if (!date) return "Data da definire";
  const day = new Intl.DateTimeFormat("it-IT", { weekday: "short" }).format(date).replace(".", "");
  const month = new Intl.DateTimeFormat("it-IT", { month: "short" }).format(date).replace(".", "");
  return `${day.charAt(0).toUpperCase()}${day.slice(1)} ${date.getDate()} ${month.charAt(0).toUpperCase()}${month.slice(1)}`;
}

function getMatchCountdown() {
  const target = parseLocalDate(matchData.date, matchData.time);
  const remaining = Math.max(0, target ? target.getTime() - Date.now() : 0);
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

function renderMatchCard() {
  const countdown = getMatchCountdown();
  if (matchDateLabel) matchDateLabel.textContent = formatMatchDateLabel(matchData.date);
  if (matchTimeLabel) matchTimeLabel.textContent = matchData.time;
  if (matchHomeTeam) matchHomeTeam.textContent = matchData.homeTeam;
  if (matchAwayTeam) matchAwayTeam.textContent = matchData.awayTeam;
  if (matchDays) matchDays.textContent = `${twoDigits(countdown.days)} GIORNI`;
  if (matchHours) matchHours.textContent = `${twoDigits(countdown.hours)} ORE`;
  if (matchMinutes) matchMinutes.textContent = `${twoDigits(countdown.minutes)} MIN`;
  if (matchSeconds) matchSeconds.textContent = `${twoDigits(countdown.seconds)} SEC`;
}

function fillMatchForm() {
  if (!matchForm) return;
  matchForm.elements.date.value = matchData.date;
  matchForm.elements.time.value = matchData.time;
  matchForm.elements.homeTeam.value = matchData.homeTeam;
  matchForm.elements.awayTeam.value = matchData.awayTeam;
}

function openMatchModal() {
  fillMatchForm();
  openLockedDialog(matchModal);
}
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
  const collapsed = productShell.classList.contains("sidebar-collapsed");
  const gridColumns = window.getComputedStyle(productShell).gridTemplateColumns.split(" ");
  const measuredTrack = Number.parseFloat(gridColumns[0]);
  const fallbackWidth = document.documentElement.classList.contains("tablet-layout") ? 220 : 264;
  const sidebarWidth = Math.max(0, measuredTrack || sideNav.offsetWidth || fallbackWidth);
  const sidebarEdge = collapsed ? shellRect.left : shellRect.left + sidebarWidth;
  const left = collapsed ? sidebarEdge + 14 : sidebarEdge - 28;
  sidebarToggle.style.setProperty("--sidebar-toggle-left", `${Math.max(12, left)}px`);
  sidebarToggle.style.removeProperty("--sidebar-toggle-top");
}

function queueSidebarTogglePositionUpdates() {
  updateSidebarTogglePosition();
  window.requestAnimationFrame(updateSidebarTogglePosition);
  window.setTimeout(updateSidebarTogglePosition, 120);
  window.setTimeout(updateSidebarTogglePosition, 340);
}

function setSidebarCollapsed(collapsed, persist = true) {
  if (!productShell || !sidebarToggle) return;
  productShell.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.setAttribute("aria-label", collapsed ? "Mostra sidebar" : "Nascondi sidebar");
  if (persist) localStorage.setItem("nsVolleySidebarCollapsed", collapsed ? "1" : "0");
  queueSidebarTogglePositionUpdates();
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
  renderMatchCard();
  renderCurrentAthletes();
  updateSelectionControls();
}

function toggleAthleteSelection(index) {
  if (selectedAthletes.has(index)) {
    selectedAthletes.delete(index);
  } else {
    selectedAthletes.add(index);
  }
  renderMatchCard();
  renderCurrentAthletes();
  updateSelectionControls();
}

function certificateStatusMeta(value, index, athlete = null) {
  const expiry = athlete?.certificateExpiry ? formatDateIt(athlete.certificateExpiry) : "";
  if (value === "Valido") {
    return { key: "valid", label: "Valido", date: expiry || `15/${String((index % 4) + 2).padStart(2, "0")}/2027`, note: athlete?.files?.certificate?.length ? "Certificato caricato" : "Idoneita sportiva completa" };
  }
  if (value === "Scade") {
    return { key: "expiring", label: "In scadenza", date: expiry || `2${index}/09/2026`, note: "Rinnovo da programmare" };
  }
  return { key: "expired", label: "Mancante", date: expiry || "Da caricare", note: "Documento non presente" };
}

function currentCertificateList() {
  const query = (certificateSearch?.value || "").trim().toLowerCase();
  const filter = certificateFilter?.value || "all";

  return athletes
    .map((athlete, index) => ({ athlete, index, meta: certificateStatusMeta(athlete.certificate, index, athlete) }))
    .filter(({ athlete }) => {
      if (!query) return true;
      return [athleteName(athlete), athlete.email, athlete.phone, athlete.category]
        .some((value) => String(value || "").toLowerCase().includes(query));
    })
    .filter(({ meta }) => filter === "all" || meta.key === filter);
}

function renderCertificates() {
  if (!certificateGrid) return;
  const all = athletes.map((athlete, index) => certificateStatusMeta(athlete.certificate, index, athlete));
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
  const compactAccountingToolbar = window.matchMedia("(max-width: 699px)").matches;
  selectAccountingButton.textContent = accountingSelectionMode ? (compactAccountingToolbar ? `Fine ${count}` : `Annulla (${count})`) : "Seleziona";
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
      <details class="accounting-mobile-card accounting-athlete-toggle ${selected ? "accounting-row-selected" : ""}" data-index="${index}">
        <summary data-index="${index}">
          <strong>${athleteName(athlete)}</strong>
          <span class="accounting-expand-control" aria-hidden="true">+</span>
        </summary>
        <div class="accounting-month-list" aria-label="Stato quote ${athleteName(athlete)}">
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
      </details>
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
    .sort((a, b) => a.date.localeCompare(b.date) || a.who.localeCompare(b.who) || a.reason.localeCompare(b.reason));
}

function updatePrimaNotaDateField() {
  primaNotaDate?.parentElement?.classList.toggle("date-has-value", Boolean(primaNotaDate.value));
}

function openPrimaNotaModal() {
  if (!primaNotaForm) return;
  const today = new Date().toISOString().slice(0, 10);
  primaNotaForm.elements.date.value = today;
  primaNotaForm.elements.type.value = "in";
  primaNotaForm.elements.method.value = "Bonifico";
  primaNotaForm.elements.who.value = "";
  primaNotaForm.elements.reason.value = "";
  primaNotaForm.elements.amount.value = "";
  openLockedDialog(primaNotaModal);
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
  openLockedDialog(modal);
}

function fillPaymentAthleteOptions() {
  if (!paymentAthlete) return;
  paymentAthlete.innerHTML = athletes
    .map((athlete, index) => `<option value="${index}">${athleteName(athlete)} - ${athlete.category || "Categoria"}</option>`)
    .join("");
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

  paymentChooseAthleteMode = false;
  if (paymentAthleteField) paymentAthleteField.hidden = true;
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
  openLockedDialog(paymentModal);
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
  productShell.addEventListener("transitionend", queueSidebarTogglePositionUpdates);
  window.addEventListener("resize", queueSidebarTogglePositionUpdates);
  window.addEventListener("scroll", updateSidebarTogglePosition, { passive: true });
  window.addEventListener("load", queueSidebarTogglePositionUpdates);
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
let notificationLastDeltaY = 0;

function resetNotificationDrag() {
  if (!notificationPanel) return;
  notificationPanel.classList.remove("dragging");
  notificationPanel.style.removeProperty("--toast-drag-y");
  notificationPanel.style.removeProperty("--toast-drag-opacity");
  notificationStartY = null;
  notificationLastDeltaY = 0;
}

function hideNotificationToast() {
  if (!notificationPanel) return;
  notificationPanel.classList.remove("show", "dragging");
  notificationPanel.classList.add("hide");
  notificationToggle?.classList.remove("active");
  notificationToggle?.setAttribute("aria-expanded", "false");
  window.clearTimeout(notificationTimer);
  window.setTimeout(() => {
    notificationPanel.hidden = true;
    notificationPanel.classList.remove("hide");
    resetNotificationDrag();
  }, 260);
}

function openPatchNoteModal(noteKey) {
  const note = patchNotes[noteKey];
  if (!note || !patchNoteModal) return;
  patchNoteVersion.textContent = note.version;
  patchNoteTitle.textContent = note.title;
  patchNoteBody.innerHTML = note.sections.map((section) => `
    <section>
      <h3>${section.title}</h3>
      <ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `).join("");
  openLockedDialog(patchNoteModal);
}
function showNotificationToast(title = "Notifiche attive", message = "Avvisi attivati per scadenze, certificati e quote aperte.", activateBell = false) {
  if (!notificationPanel) return;
  const titleEl = notificationPanel.querySelector("strong");
  const messageEl = notificationPanel.querySelector("p");
  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  window.clearTimeout(notificationTimer);
  resetNotificationDrag();
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
  const title = `${matchData.homeTeam} vs ${matchData.awayTeam}`;
  const description = "Prossima partita NS Volley";
  const location = "Palestra Scuole Medie Luigi Settembrini - Nova Siri";
  const start = new Date(`2026-02-08T${matchData.time}:00+01:00`);
  const end = new Date("2026-02-08T19:30:00+01:00");
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

patchNoteButtons.forEach((button) => {
  button.addEventListener("click", () => openPatchNoteModal(button.dataset.patchNote));
});
closePatchNoteButton?.addEventListener("click", () => patchNoteModal?.close());
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
  notificationLastDeltaY = 0;
  notificationPanel.classList.add("dragging");
  notificationPanel.setPointerCapture?.(event.pointerId);
});
notificationPanel?.addEventListener("pointermove", (event) => {
  if (notificationStartY === null) return;
  notificationLastDeltaY = Math.min(0, event.clientY - notificationStartY);
  notificationPanel.style.setProperty("--toast-drag-y", `${notificationLastDeltaY}px`);
  notificationPanel.style.setProperty("--toast-drag-opacity", String(Math.max(.35, 1 + notificationLastDeltaY / 95)));
});
notificationPanel?.addEventListener("pointerup", () => {
  if (notificationStartY === null) return;
  if (notificationLastDeltaY < -34) {
    hideNotificationToast();
    return;
  }
  resetNotificationDrag();
});
notificationPanel?.addEventListener("pointercancel", resetNotificationDrag);
deadlineList?.addEventListener("click", (event) => {
  const chip = event.target.closest(".season-month");
  if (!chip) return;
  openPaymentModal(Number(chip.dataset.index), chip.dataset.month, false);
});

searchInput.addEventListener("input", (event) => {
  renderMatchCard();
  renderCurrentAthletes();
});

certificateSearch?.addEventListener("input", renderCertificates);
certificateFilter?.addEventListener("change", renderCertificates);
openCertificateUploadButton?.addEventListener("click", openCertificateUploadModal);
function isMobileCertificateView() {
  return window.matchMedia("(max-width: 699px)").matches;
}

function toggleCertificateMobileCard(row) {
  if (!row) return;
  certificateGrid?.querySelectorAll(".certificate-row.cert-expanded").forEach((item) => {
    if (item !== row) item.classList.remove("cert-expanded");
  });
  row.classList.toggle("cert-expanded");
}
function renderCertificateUploadFiles() {
  if (!certificateUploadFiles) return;
  certificateUploadFiles.innerHTML = pendingCertificateFiles
    .map((file) => `<li>${file.name}</li>`)
    .join("");
}

function addCertificateUploadFiles(fileList) {
  pendingCertificateFiles = Array.from(fileList || []).map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type || "file"
  }));
  renderCertificateUploadFiles();
}

function populateCertificateUploadAthletes() {
  if (!certificateUploadAthlete) return;
  certificateUploadAthlete.innerHTML = athletes
    .map((athlete, index) => `<option value="${index}">${athleteName(athlete)} - ${athlete.category || "Categoria"}</option>`)
    .join("");
}

function openCertificateUploadModal() {
  if (!certificateUploadForm) return;
  populateCertificateUploadAthletes();
  pendingCertificateFiles = [];
  renderCertificateUploadFiles();
  certificateUploadForm.elements.status.value = "Valido";
  certificateUploadForm.elements.expiry.value = "";
  openLockedDialog(certificateUploadModal);
}


certificateGrid?.addEventListener("click", (event) => {
  const row = event.target.closest(".certificate-row");
  if (!row) return;
  if (isMobileCertificateView()) {
    toggleCertificateMobileCard(row);
    return;
  }
  showView("athletes");
  openAthleteModal(Number(row.dataset.index));
});
certificateGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const row = event.target.closest(".certificate-row");
  if (!row) return;
  event.preventDefault();
  if (isMobileCertificateView()) {
    toggleCertificateMobileCard(row);
    return;
  }
  showView("athletes");
  openAthleteModal(Number(row.dataset.index));
});

function openNativeDatePicker(input) {
  if (!input) return;
  if (typeof input.showPicker === "function") {
    try { input.showPicker(); } catch (error) { input.focus(); }
  } else {
    input.focus();
  }
}

accountingSearch?.addEventListener("input", () => renderAccounting());
accountingFilter?.addEventListener("change", () => renderAccounting());
accountingStartDate?.addEventListener("change", () => renderAccounting());
accountingStartDate?.addEventListener("click", () => openNativeDatePicker(accountingStartDate));
accountingStartDate?.addEventListener("focus", () => openNativeDatePicker(accountingStartDate));
accountingEndDate?.addEventListener("change", () => renderAccounting());
accountingEndDate?.addEventListener("click", () => openNativeDatePicker(accountingEndDate));
accountingEndDate?.addEventListener("focus", () => openNativeDatePicker(accountingEndDate));
resetAccountingFiltersButton?.addEventListener("click", () => {
  if (accountingSearch) accountingSearch.value = "";
  if (accountingFilter) accountingFilter.value = "all";
  if (accountingStartDate) accountingStartDate.value = "2026-09-01";
  if (accountingEndDate) accountingEndDate.value = "2027-08-31";
  renderAccounting();
});
primaNotaSearch?.addEventListener("input", renderPrimaNota);
primaNotaType?.addEventListener("change", renderPrimaNota);
primaNotaDate?.addEventListener("change", () => {
  updatePrimaNotaDateField();
  renderPrimaNota();
});
primaNotaDate?.addEventListener("input", updatePrimaNotaDateField);
addPrimaNotaButton?.addEventListener("click", openPrimaNotaModal);

accountingBoard?.addEventListener("click", (event) => {
  const editButton = event.target.closest(".mobile-edit-payment");
  if (editButton) {
    const index = Number(editButton.dataset.index);
    activeAccountingIndex = index;
    openPaymentModal(index, activeAccountingMonth, true);
    return;
  }

  const mobileSummary = event.target.closest(".accounting-athlete-toggle > summary");
  if (mobileSummary && window.matchMedia("(max-width: 699px)").matches) {
    accountingSelectionMode = false;
    selectedAccountingRows.clear();
    activeAccountingIndex = null;
    updateAccountingControls();
    return;
  }

  const paymentChip = event.target.closest(".mobile-payment-chip");
  if (paymentChip) {
    const index = Number(paymentChip.dataset.index);
    activeAccountingMonth = paymentChip.dataset.month;
    if (accountingSelectionMode) {
      if (selectedAccountingRows.has(index)) {
        selectedAccountingRows.delete(index);
        if (activeAccountingIndex === index) activeAccountingIndex = null;
      } else {
        selectedAccountingRows.add(index);
        activeAccountingIndex = index;
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
  if (cell.dataset.month) {
    activeAccountingMonth = cell.dataset.month;
  }

  if (accountingSelectionMode) {
    if (selectedAccountingRows.has(index)) {
      selectedAccountingRows.delete(index);
      if (activeAccountingIndex === index) activeAccountingIndex = null;
    } else {
      selectedAccountingRows.add(index);
      activeAccountingIndex = index;
    }
  } else {
    activeAccountingIndex = activeAccountingIndex === index ? null : index;
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
  if (accountingSelectionMode) {
    activeAccountingIndex = null;
    selectedAccountingRows.clear();
  } else {
    selectedAccountingRows.clear();
    activeAccountingIndex = null;
  }
  renderAccounting();
});

editAccountingButton?.addEventListener("click", () => {
  const index = selectedAccountingRows.size ? [...selectedAccountingRows][0] : activeAccountingIndex;
  if (index === null || index === undefined) return;
  openPaymentModal(index, activeAccountingMonth, true);
});

addAccountingMonthsButton?.addEventListener("click", () => {
  fillPaymentAthleteOptions();
  const index = activeAccountingIndex ?? 0;
  activeAccountingIndex = index;
  activeAccountingMonth = "sep";
  paymentBulkMode = true;
  paymentChooseAthleteMode = true;
  selectedAccountingRows.clear();
  paymentModalTitle.textContent = "Nuove mensilita";
  if (paymentAthleteField) paymentAthleteField.hidden = false;
  if (paymentAthlete) paymentAthlete.value = String(index);
  paymentStartMonth.parentElement.hidden = false;
  paymentEndMonth.parentElement.hidden = false;
  paymentMonth.parentElement.hidden = true;
  paymentStartMonth.value = "sep";
  paymentEndMonth.value = "aug";
  paymentForm.elements.month.value = "sep";
  paymentForm.elements.expected.value = 30;
  paymentForm.elements.paid.value = 0;
  paymentForm.elements.days.value = 2;
  openLockedDialog(paymentModal);
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

[modal, paymentModal, matchModal, primaNotaModal, certificateUploadModal, patchNoteModal].forEach((dialog) => {
  dialog?.addEventListener("close", () => window.setTimeout(unlockDocumentScroll, 0));
  dialog?.addEventListener("cancel", () => window.setTimeout(unlockDocumentScroll, 0));
});
matchCard?.addEventListener("click", openMatchModal);
matchCard?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openMatchModal();
});
document.querySelector("#closeMatchButton")?.addEventListener("click", () => matchModal.close());
document.querySelector("#cancelMatchButton")?.addEventListener("click", () => matchModal.close());
document.querySelector("#closePrimaNotaButton")?.addEventListener("click", () => primaNotaModal.close());
document.querySelector("#cancelPrimaNotaButton")?.addEventListener("click", () => primaNotaModal.close());
document.querySelector("#closeCertificateUploadButton")?.addEventListener("click", () => certificateUploadModal.close());
document.querySelector("#cancelCertificateUploadButton")?.addEventListener("click", () => certificateUploadModal.close());
matchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(matchForm);
  matchData.date = String(form.get("date") || matchData.date);
  matchData.time = String(form.get("time") || matchData.time);
  matchData.homeTeam = String(form.get("homeTeam") || "").trim().toUpperCase() || matchData.homeTeam;
  matchData.awayTeam = String(form.get("awayTeam") || "").trim().toUpperCase() || matchData.awayTeam;
  renderMatchCard();
  matchModal.close();
});
primaNotaForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(primaNotaForm);
  const amount = Number(String(form.get("amount") || "0").replace(",", "."));
  primaNotaMovements.unshift({
    date: String(form.get("date") || new Date().toISOString().slice(0, 10)),
    method: String(form.get("method") || "").trim() || "Bonifico",
    who: String(form.get("who") || "").trim() || "Movimento",
    reason: String(form.get("reason") || "").trim() || "Prima nota",
    type: String(form.get("type") || "in") === "out" ? "out" : "in",
    amount: Number.isFinite(amount) ? amount : 0
  });
  renderPrimaNota();
  primaNotaModal.close();
  showNotificationToast("Movimento aggiunto", "Prima nota aggiornata con i dati inseriti.");
});
certificateUploadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(certificateUploadForm);
  const index = Number(form.get("athlete"));
  const athlete = athletes[index];
  if (!athlete) return;
  athlete.certificate = String(form.get("status") || "Valido");
  athlete.certificateExpiry = String(form.get("expiry") || "");
  if (pendingCertificateFiles.length) {
    athlete.files.certificate.push(...pendingCertificateFiles);
    if (athlete.certificate === "Mancante") athlete.certificate = "Valido";
  }
  pendingCertificateFiles = [];
  renderAll();
  certificateUploadModal.close();
  showNotificationToast("Certificato salvato", `${athleteName(athlete)} aggiornato nell'area certificati.`);
});

certificateUploadZone?.addEventListener("dragover", (event) => {
  event.preventDefault();
  certificateUploadZone.classList.add("drag-over");
});
certificateUploadZone?.addEventListener("dragleave", () => {
  certificateUploadZone.classList.remove("drag-over");
});
certificateUploadZone?.addEventListener("drop", (event) => {
  event.preventDefault();
  certificateUploadZone.classList.remove("drag-over");
  addCertificateUploadFiles(event.dataTransfer.files);
});
certificateUploadFile?.addEventListener("change", () => {
  addCertificateUploadFiles(certificateUploadFile.files);
  certificateUploadFile.value = "";
});
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
  if (activeAccountingIndex === null && !paymentChooseAthleteMode) return;

  const form = new FormData(paymentForm);
  const monthKeys = paymentBulkMode ? monthRange(form.get("startMonth"), form.get("endMonth")) : [form.get("month")];
  const targets = (paymentChooseAthleteMode ? [Number(form.get("athleteIndex"))] : paymentBulkMode ? selectedAccountingTargets() : [activeAccountingIndex])
    .filter((index) => Number.isInteger(index) && athletes[index]);
  const expected = Number(form.get("expected")) || 0;
  const paid = Number(form.get("paid")) || 0;
  const days = Number(form.get("days")) || 0;

  if (!targets.length) return;

  targets.forEach((index) => {
    monthKeys.forEach((monthKey) => {
      athletes[index].accounting[monthKey] = { expected, paid, days };
    });
  });

  activeAccountingIndex = targets[0];
  activeAccountingMonth = monthKeys[0];
  paymentChooseAthleteMode = false;

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
  fillPaymentAthleteOptions();
  renderMatchCard();
  renderCurrentAthletes();
  renderCertificates();
  renderAccounting();
  renderPrimaNota();
  renderDocuments();
  updateSummary();
  updateSelectionControls();
}

renderAll();
window.setInterval(renderMatchCard, 1000);
updatePrimaNotaDateField();
