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
    },
  {
    firstName: "Chiara",
    lastName: "Lombardi",
    email: "chiara.lombardi@example.com",
    phone: "+39 333 101 4401",
    gender: "F",
    category: "U14",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "Stefano", lastName: "Lombardi", email: "stefano.lombardi@example.com", phone: "+39 333 101 4411" },
      two: { firstName: "Ilaria", lastName: "Moretti", email: "ilaria.moretti@example.com", phone: "+39 333 101 4412" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Federica",
    lastName: "Greco",
    email: "federica.greco@example.com",
    phone: "+39 333 102 4402",
    gender: "F",
    category: "U16",
    certificate: "Scade",
    balance: 45,
    parents: {
      one: { firstName: "Luigi", lastName: "Greco", email: "", phone: "+39 333 102 4411" },
      two: { firstName: "Daniela", lastName: "Rizzo", email: "daniela.rizzo@example.com", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Arianna",
    lastName: "Leone",
    email: "arianna.leone@example.com",
    phone: "+39 333 103 4403",
    gender: "F",
    category: "U18",
    certificate: "Mancante",
    balance: 90,
    parents: {
      one: { firstName: "Vito", lastName: "Leone", email: "", phone: "+39 333 103 4411" },
      two: { firstName: "Serena", lastName: "Mancini", email: "", phone: "+39 333 103 4412" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Valentina",
    lastName: "Mancini",
    email: "valentina.mancini@example.com",
    phone: "+39 333 104 4404",
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
    firstName: "Francesca",
    lastName: "Romano",
    email: "francesca.romano@example.com",
    phone: "+39 333 105 4405",
    gender: "F",
    category: "U15",
    certificate: "Scade",
    balance: 30,
    parents: {
      one: { firstName: "Antonio", lastName: "Romano", email: "antonio.romano@example.com", phone: "+39 333 105 4411" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Simone",
    lastName: "Vitale",
    email: "simone.vitale@example.com",
    phone: "+39 333 201 5501",
    gender: "M",
    category: "U16",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "Raffaele", lastName: "Vitale", email: "", phone: "+39 333 201 5511" },
      two: { firstName: "Claudia", lastName: "Serra", email: "claudia.serra@example.com", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Andrea",
    lastName: "Gallo",
    email: "andrea.gallo@example.com",
    phone: "+39 333 202 5502",
    gender: "M",
    category: "U18",
    certificate: "Mancante",
    balance: 120,
    parents: {
      one: { firstName: "Pietro", lastName: "Gallo", email: "", phone: "+39 333 202 5511" },
      two: { firstName: "Maria", lastName: "Ferrara", email: "", phone: "+39 333 202 5512" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Tommaso",
    lastName: "Serra",
    email: "tommaso.serra@example.com",
    phone: "+39 333 203 5503",
    gender: "M",
    category: "U19",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "", lastName: "", email: "", phone: "" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Nicolo",
    lastName: "Ferrara",
    email: "nicolo.ferrara@example.com",
    phone: "+39 333 204 5504",
    gender: "M",
    category: "Serie C",
    certificate: "Scade",
    balance: 60,
    parents: {
      one: { firstName: "Domenico", lastName: "Ferrara", email: "domenico.ferrara@example.com", phone: "+39 333 204 5511" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  },
  {
    firstName: "Gabriele",
    lastName: "Martino",
    email: "gabriele.martino@example.com",
    phone: "+39 333 205 5505",
    gender: "M",
    category: "U17",
    certificate: "Valido",
    balance: 0,
    parents: {
      one: { firstName: "Michele", lastName: "Martino", email: "", phone: "+39 333 205 5511" },
      two: { firstName: "Teresa", lastName: "Caruso", email: "teresa.caruso@example.com", phone: "+39 333 205 5512" }
    },
    files: { certificate: [], documents: [] }
  }
];

const DOCUMENT_STORAGE_KEY = "ns-volley-documents";

const documents = [
  {
    id: "registration-form",
    title: "Modulo iscrizione atleta",
    type: "Modulo",
    owner: "NS Volley",
    description: "Modulo completo da compilare."
  }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function documentTypeLabel(file) {
  const name = file?.name || "";
  const extension = name.includes(".") ? name.split(".").pop().toUpperCase() : "FILE";
  if (file?.type === "application/pdf") return "PDF";
  if (file?.type?.startsWith("image/")) return "IMG";
  if (file?.type?.startsWith("text/")) return "TXT";
  return extension || "FILE";
}

function humanFileSize(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
}

function loadStoredDocuments() {
  try {
    const stored = JSON.parse(localStorage.getItem(DOCUMENT_STORAGE_KEY) || "[]");
    stored
      .filter((item) => item?.id && item?.dataUrl)
      .forEach((item) => documents.push(item));
  } catch (error) {
    localStorage.removeItem(DOCUMENT_STORAGE_KEY);
  }
}

function persistImportedDocuments() {
  const imported = documents.filter((item) => item.source === "upload");
  try {
    localStorage.setItem(DOCUMENT_STORAGE_KEY, JSON.stringify(imported));
  } catch (error) {
    showNotificationToast("Archivio pieno", "Il file resta visibile ora, ma il browser non ha spazio per salvarlo in modo permanente.");
  }
}

loadStoredDocuments();

const payments = [
  { athlete: "Sara Conti", amount: 320, state: "Pagato" },
  { athlete: "Marta Riva", amount: 200, state: "Aperto" },
  { athlete: "Giulia Ferri", amount: 320, state: "Pagato" },
  { athlete: "Elena Costa", amount: 240, state: "Aperto" }
];

const primaNotaMovements = [
  { date: "2026-09-01", method: "Bonifico", who: "Sponsor locale", reason: "Acconto sponsorizzazione", type: "in", amount: 500 },
  { date: "2026-09-03", method: "Carta", who: "FIPAV", reason: "Affiliazione stagione", type: "out", amount: 180 },
  { date: "2026-09-05", method: "Bonifico", who: "Sara Conti", reason: "Quota iscrizione U18", type: "in", amount: 120 },
  { date: "2026-09-06", method: "Contanti", who: "Luca Marino", reason: "Quota iscrizione U17", type: "in", amount: 120 },
  { date: "2026-09-08", method: "Carta", who: "NS Volley", reason: "Materiale allenamento", type: "out", amount: 86 },
  { date: "2026-09-10", method: "Bonifico", who: "Noemi Villa", reason: "Quota settembre", type: "in", amount: 30 },
  { date: "2026-09-12", method: "Contanti", who: "Marta Riva", reason: "Acconto quota mensile", type: "in", amount: 60 },
  { date: "2026-09-14", method: "Bonifico", who: "Matteo Russo", reason: "Quota settembre", type: "in", amount: 30 },
  { date: "2026-09-15", method: "Carta", who: "Farmacia", reason: "Kit primo soccorso", type: "out", amount: 48 },
  { date: "2026-09-18", method: "Bonifico", who: "Palazzetto", reason: "Affitto campo", type: "out", amount: 140 },
  { date: "2026-09-20", method: "Bonifico", who: "Chiara Lombardi", reason: "Quota settembre", type: "in", amount: 30 },
  { date: "2026-09-22", method: "Contanti", who: "Andrea Gallo", reason: "Acconto quota", type: "in", amount: 45 },
  { date: "2026-09-24", method: "Carta", who: "Fornitore divise", reason: "Anticipo completi gara", type: "out", amount: 260 },
  { date: "2026-10-02", method: "Bonifico", who: "Giulia Ferri", reason: "Quota ottobre", type: "in", amount: 30 },
  { date: "2026-10-03", method: "Bonifico", who: "Simone Vitale", reason: "Quota ottobre", type: "in", amount: 30 },
  { date: "2026-10-05", method: "Contanti", who: "Valentina Mancini", reason: "Quota ottobre", type: "in", amount: 30 },
  { date: "2026-10-07", method: "Carta", who: "Tipografia", reason: "Locandine partita", type: "out", amount: 72 },
  { date: "2026-10-09", method: "Bonifico", who: "Tommaso Serra", reason: "Quota ottobre", type: "in", amount: 30 },
  { date: "2026-10-11", method: "Bonifico", who: "Gabriele Martino", reason: "Quota ottobre", type: "in", amount: 30 },
  { date: "2026-10-14", method: "Carta", who: "Arbitri", reason: "Rimborso gara interna", type: "out", amount: 95 }
];

const patchNotes = {
  "beta-1": {
    version: "Beta 1",
    title: "Demo ufficiale",
    sections: [
      { title: "Stato progetto", items: ["Demo front-end consolidata e pronta per validazione operativa su dati statici.", "Navigazione principale stabilizzata tra home, atleti, certificati, documenti, classifiche, scadenziario, prima nota e comunicazioni.", "Layout delle aree dati bloccato a viewport: la pagina non genera overflow verticale e lo scroll resta confinato ai contenitori lista/tabella."] },
      { title: "Architettura interfaccia", items: ["Separazione tra shell applicativa, viste operative e componenti dati riutilizzabili.", "Stato di navigazione centralizzato con classe di layout dedicata per distinguere Home e viste gestionali.", "Cache degli asset aggiornata per ridurre problemi di visualizzazione dopo il deploy su GitHub Pages."] },
      { title: "Preparazione lancio", items: ["Resta da collegare il database definitivo e sostituire i dataset demo con persistenza reale.", "Le strutture dati sono gia predisposte per atleti, certificati, quote mensili, documenti e movimenti contabili.", "Il prodotto e pronto per una demo ufficiale prima della configurazione backend.", "Le notifiche reali a schermo spento richiedono PWA installata, service worker e backend push con scheduler server-side."] }
    ]
  },
  "qa-data": {
    version: "QA",
    title: "Dataset demo esteso",
    sections: [
      { title: "Copertura dati", items: ["Roster demo portato a 20 atleti con categorie, sesso, recapiti, stato certificato e situazione quota.", "Area Documenti semplificata su un solo fac simile di iscrizione, con preview dedicata e azioni stampa/condivisione.", "Prima nota popolata con 20 movimenti ordinabili e filtrabili su entrate, uscite, date e ricerca testuale."] },
      { title: "Validazione liste", items: ["Atleti, certificati, scadenziario, prima nota e comunicazioni dispongono di abbastanza record per verificare overflow interno; Documenti resta volutamente focalizzata sul modulo iscrizione.", "I limiti visibili sono differenziati per area: piu righe negli elenchi compatti, meno righe nelle viste con contenuto piu alto.", "Le card mantengono altezza naturale e non vengono stirate quando il contenitore ha spazio residuo."] }
    ]
  },
  "responsive-ui": {
    version: "Release UI",
    title: "Layout adattivo e mobile",
    sections: [
      { title: "Responsive system", items: ["Esperienza distinta per telefono, tablet e desktop, con toolbar e navigazione adattate al contesto.", "Bottom navigation mobile limitata alle sezioni principali e menu superiore dedicato alle voci secondarie.", "Home tablet riorganizzata con hero, prossima partita, azioni rapide e ultime notizie in composizione dedicata."] },
      { title: "Componenti operativi", items: ["Card atleti e certificati rese compatte su mobile con apertura progressiva dove serve.", "Toolbar di atleti, certificati, scadenziario e prima nota allineate nello stile e nei touch target.", "Modali ridimensionati per evitare zoom indesiderato, contenuti tagliati e scroll del retro pagina su iOS/iPadOS."] },
      { title: "Bug fix aggregati", items: ["Risolte sovrapposizioni dei filtri data nello scadenziario desktop/tablet.", "Corretto il comportamento dei controlli selezione su mobile nello scadenziario.", "Rimosse ridondanze visuali e azioni non pertinenti dalle aree operative."] }
    ]
  },
  "alpha-1": {
    version: "Update Alpha 1",
    title: "Definizione struttura",
    sections: [
      { title: "Struttura prodotto", items: ["Definite le aree operative principali e rimosse sezioni ridondanti come dati, altro e contabilita separata.", "Prima nota e scadenziario separati in modo funzionale: registro movimenti da una parte, quote mensili per atleta dall'altra.", "Comunicazioni configurata come area developer per changelog, note tecniche e aggiornamenti di prodotto."] },
      { title: "Dominio gestionale", items: ["Atleti, certificati, documenti, classifiche, scadenziario e prima nota sono mantenuti come aree autonome.", "Scadenziario impostato sulla stagione settembre-agosto con lettura mensile per atleta.", "Prima nota ordinata cronologicamente con separazione tra dare e avere e rimozione di indicatori laterali non necessari."] },
      { title: "Direzione design", items: ["Impostato un linguaggio visivo premium, chiaro, mobile-first e senza dark mode.", "Ridotta la sensazione da dashboard classica evitando griglie di card ripetitive dove non servono.", "Priorita alla consultazione rapida da mobile e alla gestione completa da desktop."] }
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
const importDocumentButton = document.querySelector("#importDocumentButton");
const documentImportInput = document.querySelector("#documentImportInput");
const documentPreviewModal = document.querySelector("#documentPreviewModal");
const documentPreviewTitle = document.querySelector("#documentPreviewTitle");
const documentPreviewBody = document.querySelector("#documentPreviewBody");
const deadlineList = document.querySelector("#deadlineList");
const deadlineTotal = document.querySelector("#deadlineTotal");
const calendarCta = document.querySelector("#calendarCta");
const matchCard = document.querySelector("#matchCard");
const matchModal = document.querySelector("#matchModal");
const matchForm = document.querySelector("#matchForm");
const addMatchToCalendarButton = document.querySelector("#addMatchToCalendarButton");
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
const confirmDeleteModal = document.querySelector("#confirmDeleteModal");
const confirmDeleteTitle = document.querySelector("#confirmDeleteTitle");
const confirmDeleteMessage = document.querySelector("#confirmDeleteMessage");
const confirmDeleteWarning = document.querySelector("#confirmDeleteWarning");
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
let activeAthleteDraft = null;
let selectionMode = false;
const selectedAthletes = new Set();
let accountingSelectionMode = false;
const selectedAccountingRows = new Set();
const hiddenAccountingRows = new Set();
let activeAccountingIndex = null;
let activeAccountingMonth = "sep";
let paymentBulkMode = false;
let paymentChooseAthleteMode = false;
let pendingCertificateFiles = [];
let activeDocumentId = "registration-form";

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

function createEmptyAthlete(index = athletes.length) {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    category: "Da assegnare",
    certificate: "Mancante",
    balance: 0,
    accounting: createDefaultAccounting(index),
    parents: {
      one: { firstName: "", lastName: "", email: "", phone: "" },
      two: { firstName: "", lastName: "", email: "", phone: "" }
    },
    files: { certificate: [], documents: [] }
  };
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
  const targetView = viewId || "overview";
  const viewExists = [...views].some((view) => view.id === targetView);
  const activeView = viewExists ? targetView : "overview";
  const isDataView = activeView !== "overview";

  views.forEach((view) => view.classList.toggle("active", view.id === activeView));
  document.body.dataset.viewActive = activeView;
  document.body.classList.toggle("data-view-open", isDataView);
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === activeView));
  bottomNavItems.forEach((item) => item.classList.toggle("active", item.dataset.view === activeView));
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
    .filter(({ athlete }) => !hiddenAccountingRows.has(athleteName(athlete)))
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
function requestDeleteConfirmation(subject) {
  if (!confirmDeleteModal) return Promise.resolve(false);
  if (confirmDeleteTitle) confirmDeleteTitle.textContent = "Eliminare definitivamente?";
  if (confirmDeleteMessage) confirmDeleteMessage.textContent = `Sei sicuro di voler eliminare ${subject}?`;
  if (confirmDeleteWarning) confirmDeleteWarning.textContent = "Questa azione rimuove solo la riga dallo scadenziario. Anagrafica, certificati e documenti restano invariati.";
  confirmDeleteModal.returnValue = "";

  return new Promise((resolve) => {
    confirmDeleteModal.addEventListener("close", () => resolve(confirmDeleteModal.returnValue === "confirm"), { once: true });
    openLockedDialog(confirmDeleteModal);
  });
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
  if (!documentList) return;
  documentList.innerHTML = documents.map((item) => `
    <button class="doc-row document-preview-trigger" type="button" data-document-id="${escapeHtml(item.id)}">
      <strong>${escapeHtml(item.title)}</strong>
      <span class="muted">${escapeHtml(item.description)}</span>
      <span class="badge">${escapeHtml(item.type)}</span>
    </button>
  `).join("");
}

function registrationFormPreview() {
  return `
    <section class="registration-preview" aria-label="Fac simile modulo iscrizione">
      <header class="registration-letterhead">
        <div>
          <strong>NS Volley</strong>
          <span>Associazione sportiva dilettantistica</span>
        </div>
        <div>
          <em>Stagione sportiva</em>
          <strong>2026 / 2027</strong>
        </div>
      </header>
      <div class="registration-heading">
        <span>Domanda di iscrizione atleta</span>
        <h3>Tesseramento e partecipazione attivita sportiva</h3>
        <p>Modulo fac simile da compilare in stampatello e consegnare alla segreteria con documento d'identita, codice fiscale e certificato medico sportivo in corso di validita.</p>
      </div>
      <section class="registration-section">
        <h4>Dati atleta</h4>
        <div class="registration-grid">
          <label>Nome <span></span></label>
          <label>Cognome <span></span></label>
          <label>Data di nascita <span></span></label>
          <label>Luogo di nascita <span></span></label>
          <label>Codice fiscale <span></span></label>
          <label>Nazionalita <span></span></label>
          <label>Indirizzo residenza <span></span></label>
          <label>Comune e CAP <span></span></label>
          <label>Email atleta <span></span></label>
          <label>Cellulare atleta <span></span></label>
          <label>Categoria richiesta <span></span></label>
          <label>Ruolo / note tecniche <span></span></label>
        </div>
      </section>
      <section class="registration-section">
        <h4>Genitori o tutori</h4>
        <div class="registration-grid">
          <label>Genitore / tutore 1 <span></span></label>
          <label>Telefono <span></span></label>
          <label>Email <span></span></label>
          <label>Codice fiscale <span></span></label>
          <label>Genitore / tutore 2 <span></span></label>
          <label>Telefono <span></span></label>
          <label>Email <span></span></label>
          <label>Codice fiscale <span></span></label>
        </div>
      </section>
      <section class="registration-section registration-checks">
        <h4>Dichiarazioni</h4>
        <p>Il richiedente dichiara di conoscere e accettare regolamento societario, calendario allenamenti, procedure di pagamento quote e disposizioni sanitarie previste per l'attivita sportiva.</p>
        <div><span></span>Certificato medico sportivo consegnato o da consegnare prima dell'inizio attivita.</div>
        <div><span></span>Consenso al trattamento dei dati personali secondo GDPR e informativa societaria.</div>
        <div><span></span>Autorizzazione all'utilizzo di immagini e video per comunicazioni sportive della societa.</div>
      </section>
      <div class="registration-signatures">
        <label>Data <span></span></label>
        <label>Firma atleta <span></span></label>
        <label>Firma genitore / tutore 1 <span></span></label>
        <label>Firma genitore / tutore 2 <span></span></label>
      </div>
    </section>
  `;
}


function registrationPrintStyles() {
  return `
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; }
    html, body {
      width: 210mm;
      min-height: 297mm;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #061936;
      font-family: Inter, "Segoe UI", Arial, sans-serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body { display: block; }
    .registration-preview {
      width: 210mm;
      height: 297mm;
      display: grid;
      grid-template-rows: auto auto auto auto 1fr auto;
      gap: 4.8mm;
      padding: 14mm 15mm;
      overflow: hidden;
      border: 0;
      border-radius: 0;
      background: #fff;
      box-shadow: none;
    }
    .registration-letterhead {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8mm;
      align-items: start;
      padding-bottom: 5mm;
      border-bottom: .35mm solid #dbe4f1;
    }
    .registration-letterhead div { display: grid; gap: 1.2mm; }
    .registration-letterhead strong { font-size: 13pt; font-weight: 900; line-height: 1.05; }
    .registration-letterhead span,
    .registration-letterhead em { color: #52647f; font-size: 7.3pt; font-style: normal; font-weight: 800; }
    .registration-heading { display: grid; gap: 1.4mm; }
    .registration-heading span,
    .registration-section h4 { margin: 0; color: #2867ff; font-size: 7pt; font-weight: 900; letter-spacing: .03em; text-transform: uppercase; }
    .registration-heading h3 { margin: 0; font-size: 14pt; line-height: 1.08; }
    .registration-heading p,
    .registration-checks p { margin: 0; color: #52647f; font-size: 7.2pt; font-weight: 700; line-height: 1.28; }
    .registration-section { display: grid; gap: 2.6mm; }
    .registration-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3.2mm 6mm; }
    .registration-grid label,
    .registration-signatures label { display: grid; gap: 1.6mm; color: #52647f; font-size: 6.7pt; font-weight: 900; line-height: 1; text-transform: uppercase; }
    .registration-grid label span,
    .registration-signatures label span { display: block; height: 7.4mm; border-bottom: .3mm solid #b8c4d6; }
    .registration-checks { display: grid; gap: 2.1mm; padding: 4mm; border-radius: 3mm; background: #f8faff; box-shadow: inset 0 0 0 .3mm #dfe7f5; }
    .registration-checks div { display: grid; grid-template-columns: 4mm 1fr; gap: 2.5mm; align-items: start; color: #263858; font-size: 6.8pt; font-weight: 750; line-height: 1.25; }
    .registration-checks div span { width: 3.5mm; height: 3.5mm; border: .3mm solid #8fa0bb; border-radius: .8mm; background: #fff; }
    .registration-signatures { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4mm 7mm; align-self: end; }
    @media print {
      html, body { width: 210mm; height: 297mm; }
      .registration-preview { page-break-after: avoid; }
    }
  `;
}

function printRegistrationDocument() {
  const currentDocument = documents.find((item) => item.id === activeDocumentId) || documents[0];
  if (currentDocument?.id !== "registration-form") {
    window.print();
    return;
  }

  const printWindow = window.open("", "_blank", "width=900,height=1100");
  if (!printWindow) {
    showNotificationToast("Stampa bloccata", "Consenti i popup per stampare il modulo in formato A4.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(`
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Modulo iscrizione atleta - NS Volley</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>${registrationPrintStyles()}</style>
</head>
<body>${registrationFormPreview()}</body>
</html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 180);
}
function unsupportedDocumentPreview(item) {
  return `
    <section class="uploaded-document-empty">
      <strong>${escapeHtml(item.type)}</strong>
      <h3>${escapeHtml(item.title)}</h3>
      <p>Anteprima non disponibile per questo formato nel browser. Puoi aprire o scaricare il file originale.</p>
      <a class="primary-action inline" href="${item.dataUrl}" download="${escapeHtml(item.fileName || item.title)}" target="_blank" rel="noopener">Apri file</a>
    </section>
  `;
}

function documentPreviewHtml(item) {
  if (item.id === "registration-form") return registrationFormPreview();
  if (item.mime?.startsWith("image/")) {
    return `<figure class="uploaded-document-preview"><img src="${item.dataUrl}" alt="${escapeHtml(item.title)}"></figure>`;
  }
  if (item.mime === "application/pdf") {
    return `<iframe class="uploaded-document-frame" src="${item.dataUrl}" title="${escapeHtml(item.title)}"></iframe>`;
  }
  if (item.mime?.startsWith("text/")) {
    const payload = item.dataUrl.includes(",") ? item.dataUrl.split(",")[1] : "";
    const bytes = Uint8Array.from(atob(payload), (char) => char.charCodeAt(0));
    const text = new TextDecoder("utf-8").decode(bytes);
    return `<pre class="uploaded-document-text">${escapeHtml(text)}</pre>`;
  }
  return unsupportedDocumentPreview(item);
}

function openDocumentPreview(documentId) {
  const item = documents.find((documentItem) => documentItem.id === documentId) || documents[0];
  if (!item || !documentPreviewModal || !documentPreviewBody || !documentPreviewTitle) return;
  activeDocumentId = item.id;
  documentPreviewTitle.textContent = item.title;
  documentPreviewBody.classList.toggle("registration-document-body", item.id === "registration-form");
  documentPreviewBody.innerHTML = documentPreviewHtml(item);
  openLockedDialog(documentPreviewModal);
}

function readImportedFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve({
        id: `uploaded-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title: file.name.replace(/\.[^.]+$/, ""),
        fileName: file.name,
        type: documentTypeLabel(file),
        owner: "Archivio documenti",
        description: `Caricato oggi - ${humanFileSize(file.size)}`,
        source: "upload",
        mime: file.type || "application/octet-stream",
        size: file.size,
        dataUrl: reader.result
      });
    });
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function updateSummary() {
  const validCertificates = athletes.filter((athlete) => athlete.certificate === "Valido").length;
  const openDebts = athletes.filter((athlete) => athlete.balance > 0).length;
  const balance = athletes.reduce((total, athlete) => {
    return total + seasonMonths.reduce((monthTotal, month) => monthTotal + athlete.accounting[month.key].paid, 0);
  }, 0);
  const archive = { athletes, payments, documents };
  const json = JSON.stringify(archive, null, 2);

  document.querySelector("#athleteCount").textContent = athletes.length;
  document.querySelector("#certificateCount").textContent = validCertificates;
  document.querySelector("#debtCount").textContent = openDebts;
  document.querySelector("#documentCount").textContent = documents.length;
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
  activeAthleteDraft = null;
  fillForm(athletes[index]);
  openLockedDialog(modal);
}

function openNewAthleteModal() {
  setSelectionMode(false);
  activeAthleteIndex = null;
  activeAthleteDraft = createEmptyAthlete(athletes.length);
  fillForm(activeAthleteDraft);
  showView("athletes");
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
  const athlete = activeAthleteIndex === null ? activeAthleteDraft : athletes[activeAthleteIndex];
  if (!athlete) return;

  const target = athlete.files[fileType];
  Array.from(fileList).forEach((file) => {
    target.push({ name: file.name, size: file.size, type: file.type || "file" });
  });

  if (fileType === "certificate" && target.length > 0) {
    athlete.certificate = "Valido";
  }

  renderModalFiles(athlete);
  if (activeAthleteIndex !== null) renderAll();
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
  const userAgent = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(userAgent);
  const isTouchTablet = window.matchMedia("(pointer: coarse) and (max-width: 1366px)").matches;
  return isIOS || isAndroid || isTouchTablet;
}

function getMatchPayloadFromForm() {
  if (!matchForm) return { ...matchData };
  const form = new FormData(matchForm);
  return {
    date: String(form.get("date") || matchData.date),
    time: String(form.get("time") || matchData.time),
    homeTeam: String(form.get("homeTeam") || matchData.homeTeam).trim().toUpperCase(),
    awayTeam: String(form.get("awayTeam") || matchData.awayTeam).trim().toUpperCase()
  };
}

function openMobileCalendar(match = matchData) {
  const title = `${match.homeTeam} vs ${match.awayTeam}`;
  const description = "Prossima partita NS Volley - promemoria consigliato 1 ora prima";
  const location = "Palestra Scuole Medie Luigi Settembrini - Nova Siri";
  const start = parseLocalDate(match.date, match.time) || new Date();
  const end = new Date(start.getTime() + (2 * 60 * 60 * 1000));
  const userAgent = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1);

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

  if (isIOS) {
    window.location.href = "calshow://";
    return;
  }

  showNotificationToast("Feature Mobile", "Apri questa funzione da telefono o tablet per usare il calendario del dispositivo.");
}

patchNoteButtons.forEach((button) => {
  button.addEventListener("click", () => openPatchNoteModal(button.dataset.patchNote));
});
closePatchNoteButton?.addEventListener("click", () => patchNoteModal?.close());
importDocumentButton?.addEventListener("click", () => documentImportInput?.click());
documentImportInput?.addEventListener("change", async () => {
  const files = [...documentImportInput.files || []];
  if (!files.length) return;

  try {
    const imported = await Promise.all(files.map(readImportedFile));
    documents.push(...imported);
    persistImportedDocuments();
    renderDocuments();
    updateSummary();
    showNotificationToast("Documenti importati", `${imported.length} file aggiunti all'archivio documenti.`);
  } catch (error) {
    showNotificationToast("Import non riuscito", "Uno dei file selezionati non puo essere letto dal browser.");
  } finally {
    documentImportInput.value = "";
  }
});

documentList?.addEventListener("click", (event) => {
  const trigger = event.target.closest(".document-preview-trigger");
  if (!trigger) return;
  openDocumentPreview(trigger.dataset.documentId);
});
document.querySelector("#closeDocumentPreviewButton")?.addEventListener("click", () => documentPreviewModal?.close());
document.querySelector("#printRegistrationFormButton")?.addEventListener("click", printRegistrationDocument);
document.querySelector("#shareRegistrationFormButton")?.addEventListener("click", async () => {
  const currentDocument = documents.find((item) => item.id === activeDocumentId) || documents[0];
  const shareData = {
    title: currentDocument?.title || "Documento NS Volley",
    text: currentDocument?.description || "Documento NS Volley.",
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      showNotificationToast("Link copiato", "Il link al modulo iscrizione e stato copiato negli appunti.");
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      showNotificationToast("Condivisione non disponibile", "Usa il comando stampa o riprova dal browser del dispositivo.");
    }
  }
});
notificationToggle?.addEventListener("click", () => showNotificationToast(undefined, undefined, true));
calendarCta?.addEventListener("click", () => {
  if (isMobileCalendarDevice()) {
    openMobileCalendar();
    return;
  }
  showNotificationToast("Feature Mobile", "Apri questa funzione dal telefono per aggiungere la partita al calendario.");
});
addMatchToCalendarButton?.addEventListener("click", () => {
  const payload = getMatchPayloadFromForm();
  if (isMobileCalendarDevice()) {
    openMobileCalendar(payload);
    return;
  }
  showNotificationToast("Feature Mobile", "Salva la partita e apri questa funzione da iPhone o iPad per creare l evento nel calendario.");
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

deleteAccountingButton?.addEventListener("click", async () => {
  const targets = selectedAccountingRows.size ? [...selectedAccountingRows] : [activeAccountingIndex];
  const indexes = targets.filter((index) => Number.isInteger(index) && athletes[index]);
  if (!indexes.length) return;

  const names = indexes.map((index) => athleteName(athletes[index]));
  const subject = names.length === 1 ? `la riga di ${names[0]}` : `${names.length} righe selezionate`;
  const confirmed = await requestDeleteConfirmation(subject);
  if (!confirmed) return;

  names.forEach((name) => hiddenAccountingRows.add(name));
  selectedAccountingRows.clear();
  accountingSelectionMode = false;
  activeAccountingIndex = null;
  renderAccounting();
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

document.querySelector("#addAthleteButton").addEventListener("click", openNewAthleteModal);
document.querySelector("#mobileAddButton")?.addEventListener("click", openNewAthleteModal);

[modal, paymentModal, matchModal, primaNotaModal, certificateUploadModal, patchNoteModal, documentPreviewModal, confirmDeleteModal].forEach((dialog) => {
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
  const form = new FormData(athleteForm);
  const isNewAthlete = activeAthleteIndex === null;
  const athlete = isNewAthlete ? activeAthleteDraft : athletes[activeAthleteIndex];
  if (!athlete) return;
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
  if (isNewAthlete) {
    athletes.push(athlete);
    activeAthleteIndex = athletes.length - 1;
    activeAthleteDraft = null;
  }

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
    hiddenAccountingRows.delete(athleteName(athletes[index]));
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
