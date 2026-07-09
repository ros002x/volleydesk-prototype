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

const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const athleteTable = document.querySelector("#athleteTable");
const certificateGrid = document.querySelector("#certificateGrid");
const accountingBoard = document.querySelector("#accountingBoard");
const documentList = document.querySelector("#documentList");
const searchInput = document.querySelector("#athleteSearch");
const accountingSearch = document.querySelector("#accountingSearch");
const accountingFilter = document.querySelector("#accountingFilter");
const accountingStartDate = document.querySelector("#accountingStartDate");
const accountingEndDate = document.querySelector("#accountingEndDate");
const editAccountingButton = document.querySelector("#editAccountingButton");
const selectAccountingButton = document.querySelector("#selectAccountingButton");
const deleteAccountingButton = document.querySelector("#deleteAccountingButton");
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

function showView(viewId) {
  views.forEach((view) => view.classList.toggle("active", view.id === viewId));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
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

function renderAthletes(list = athletes.map((athlete, index) => ({ athlete, index }))) {
  athleteTable.innerHTML = list.map(({ athlete, index }) => `
    <article class="table-row athlete-row ${certificateStateClass(athlete.certificate)} ${selectedAthletes.has(index) ? "selected" : ""}" data-index="${index}" tabindex="0" role="button" aria-label="${selectionMode ? "Seleziona" : "Modifica"} ${athleteName(athlete)}">
      <div>
        <div class="name">${athleteName(athlete)}</div>
        <div class="muted athlete-contact">
          <span>${athlete.email || "Email mancante"}</span>
          <span>${athlete.phone || "Cellulare mancante"}</span>
        </div>
      </div>
      <div>${athlete.category}</div>
      <div class="muted">\u20ac${athlete.balance}</div>
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

function renderCertificates() {
  certificateGrid.innerHTML = athletes
    .filter((athlete) => athlete.certificate !== "Mancante")
    .map((athlete) => `
    <article class="certificate-card ${certificateCardClass(athlete.certificate)}">
      <div>
        <strong>${athleteName(athlete)}</strong>
        <div class="muted">${athlete.category} · ${athlete.email || "Nessuna email"}</div>
      </div>
    </article>
  `).join("");
}

function currentAccountingList() {
  const query = accountingSearch.value.toLowerCase();
  const filter = accountingFilter.value;

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
  selectAccountingButton.textContent = accountingSelectionMode ? `Annulla (${count})` : "Seleziona";
  deleteAccountingButton.hidden = activeCount === 0;
  deleteAccountingButton.textContent = `Elimina ${activeCount}`;
  editAccountingButton.disabled = activeAccountingIndex === null && selectedAccountingRows.size !== 1;
}

function renderAccounting() {
  const rows = currentAccountingList();
  const header = `
    <div class="accounting-cell accounting-head accounting-name">Atleta</div>
    ${seasonMonths.map((month) => `<div class="accounting-cell accounting-head">${month.label}</div>`).join("")}
  `;

  const body = rows.map(({ athlete, index }) => {
    const selected = selectedAccountingRows.has(index) || activeAccountingIndex === index;
    return `
      <div class="accounting-cell accounting-name ${selected ? "accounting-row-selected" : ""}" data-index="${index}">
        ${athleteName(athlete)}
        <span>${athlete.category}</span>
      </div>
      ${seasonMonths.map((month) => {
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

  accountingBoard.innerHTML = `<div class="accounting-grid">${header}${body}</div>`;
  updateAccountingControls();
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
  document.querySelector("#storageSize").textContent = `${Math.ceil(json.length / 1024)} KB`;
  document.querySelector("#storageFill").style.width = `${Math.min(92, json.length / 40)}%`;
  document.querySelector("#dataPreview").textContent = json;
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

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

searchInput.addEventListener("input", (event) => {
  renderCurrentAthletes();
});

accountingSearch.addEventListener("input", () => renderAccounting());
accountingFilter.addEventListener("change", () => renderAccounting());
accountingStartDate.addEventListener("change", () => renderAccounting());
accountingEndDate.addEventListener("change", () => renderAccounting());

accountingBoard.addEventListener("click", (event) => {
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

accountingBoard.addEventListener("dblclick", (event) => {
  const cell = event.target.closest(".accounting-payment");
  if (!cell) return;
  openPaymentModal(Number(cell.dataset.index), cell.dataset.month, true);
});

selectAccountingButton.addEventListener("click", () => {
  accountingSelectionMode = !accountingSelectionMode;
  if (!accountingSelectionMode) {
    selectedAccountingRows.clear();
  }
  renderAccounting();
});

editAccountingButton.addEventListener("click", () => {
  const index = selectedAccountingRows.size ? [...selectedAccountingRows][0] : activeAccountingIndex;
  if (index === null || index === undefined) return;
  openPaymentModal(index, activeAccountingMonth, true);
});

deleteAccountingButton.addEventListener("click", () => {
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

document.querySelector("#addAthleteButton").addEventListener("click", () => {
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

document.querySelector("#exportButton").addEventListener("click", () => {
  const payload = JSON.stringify({ athletes, payments, documents }, null, 2);
  navigator.clipboard?.writeText(payload);
});

function renderAll() {
  ensureAccounting();
  fillPaymentMonthOptions();
  renderCurrentAthletes();
  renderCertificates();
  renderAccounting();
  renderDocuments();
  updateSummary();
  updateSelectionControls();
}

renderAll();
