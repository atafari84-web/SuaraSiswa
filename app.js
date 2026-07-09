const categories = [
  "Lingkungan",
  "Olahraga",
  "Keagamaan",
  "Pendidikan",
  "Seni",
  "Lomba",
  "Sosial",
  "Literasi",
  "Kesehatan",
];

const ADMIN_EMAIL = "atafari84@gmail.com";
const ADMIN_PASSWORD = "Viano134";

const nameIdeas = [
  ["SuaraSiswa", "Suara Siswa untuk Sekolah yang Lebih Baik"],
  ["RuangKita", "Aspirasi Bersama, Sekolah Makin Bermakna"],
  ["ProkerPulse", "Dengar Siswa, Evaluasi Program, Tingkatkan Dampak"],
  ["SiswaBersuara", "Tempat Ide dan Evaluasi Bertemu"],
];

const SUPABASE_URL = "https://ixfkflsplqvvilcvlhrx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZmtmbHNwbHF2dmlsY3ZsaHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MDI2MDksImV4cCI6MjA5OTE3ODYwOX0.PQuFzHb7-NPzTYtuYGE3KyFsQwgTJFHdn0QnUR3zOxw";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const defaultPrograms = [
  {
    id: "green-school",
    name: "Green School Day",
    category: "Lingkungan",
    owner: "Departemen Lingkungan OSIS",
    status: "Sedang Berjalan",
    shortDescription: "Gerakan Jumat bersih, pengelolaan sampah, dan penghijauan sekolah.",
    description:
      "Program rutin untuk membangun budaya sekolah bersih melalui kerja bakti, edukasi pemilahan sampah, dan penanaman tanaman di area sekolah.",
    goal: "Meningkatkan kepedulian siswa terhadap kebersihan dan lingkungan.",
    target: "Seluruh siswa SMA",
  },
  {
    id: "class-meeting",
    name: "Class Meeting Cup",
    category: "Olahraga",
    owner: "Departemen Olahraga OSIS",
    status: "Akan Datang",
    shortDescription: "Kompetisi antarkelas untuk futsal, basket, voli, dan esport edukatif.",
    description:
      "Kegiatan kompetitif antarkelas setelah ujian untuk mempererat solidaritas, sportivitas, dan kreativitas siswa.",
    goal: "Menciptakan suasana sekolah yang sehat, sportif, dan menyenangkan.",
    target: "Kelas X, XI, dan XII",
  },
  {
    id: "literasi-pagi",
    name: "Literasi Pagi",
    category: "Literasi",
    owner: "Departemen Pendidikan OSIS",
    status: "Selesai",
    shortDescription: "Kegiatan membaca singkat dan berbagi rekomendasi buku sebelum pelajaran.",
    description:
      "Program pembiasaan literasi melalui sesi membaca 15 menit, ulasan buku singkat, dan pojok rekomendasi bacaan siswa.",
    goal: "Meningkatkan minat baca serta kemampuan berpikir kritis siswa.",
    target: "Seluruh siswa SMA",
  },
  {
    id: "pentas-seni",
    name: "Pentas Seni Svara",
    category: "Seni",
    owner: "Departemen Seni Budaya OSIS",
    status: "Sedang Berjalan",
    shortDescription: "Panggung ekspresi musik, tari, teater, dan karya visual siswa.",
    description:
      "Ruang apresiasi bakat siswa yang dikemas dalam pertunjukan seni sekolah dengan kurasi karya dan kolaborasi ekstrakurikuler.",
    goal: "Mengembangkan kreativitas dan rasa percaya diri siswa.",
    target: "Siswa peserta ekstrakurikuler dan umum",
  },
  {
    id: "bakti-sosial",
    name: "Bakti Sosial Sekolah",
    category: "Sosial",
    owner: "OSIS dan MPK",
    status: "Akan Datang",
    shortDescription: "Penggalangan donasi dan kegiatan kepedulian untuk masyarakat sekitar.",
    description:
      "Program sosial untuk melatih empati siswa melalui pengumpulan donasi, kunjungan, dan kegiatan berbagi yang terencana.",
    goal: "Membangun karakter peduli dan bertanggung jawab.",
    target: "Seluruh warga sekolah",
  },
  {
    id: "sehat-remaja",
    name: "Sehat Remaja",
    category: "Kesehatan",
    owner: "Departemen Kesehatan OSIS",
    status: "Sedang Berjalan",
    shortDescription: "Edukasi kesehatan mental, gizi, dan kebiasaan hidup sehat untuk siswa.",
    description:
      "Kampanye kesehatan siswa melalui seminar, poster edukatif, dan kolaborasi dengan UKS serta guru BK.",
    goal: "Mendorong siswa menjaga kesehatan fisik dan mental.",
    target: "Kelas X dan XI",
  },
];

const defaultReviews = [
  {
    id: createId(),
    programId: "green-school",
    name: "Anonim",
    className: "XI-C",
    rating: 5,
    reason: "Programnya sangat bermanfaat dan membuat lingkungan sekolah terasa lebih bersih.",
    createdAt: Date.now() - 2 * 86400000,
  },
  {
    id: createId(),
    programId: "literasi-pagi",
    name: "Nadia",
    className: "X-2",
    rating: 4,
    reason: "Bagus untuk membangun kebiasaan membaca, tapi pilihan bukunya bisa dibuat lebih beragam.",
    createdAt: Date.now() - 4 * 86400000,
  },
  {
    id: createId(),
    programId: "pentas-seni",
    name: "Anonim",
    className: "XI-D",
    rating: 5,
    reason: "Kegiatannya seru dan memberi kesempatan siswa tampil di depan banyak orang.",
    createdAt: Date.now() - 1 * 86400000,
  },
];

const defaultAspirations = [
  {
    id: createId(),
    name: "Anonim",
    className: "XI-A",
    category: "Fasilitas",
    title: "Perbaikan area kantin",
    body: "Area kantin perlu tempat duduk tambahan dan jalur antrean yang lebih rapi agar jam istirahat tidak terlalu padat.",
    createdAt: Date.now() - 3 * 86400000,
  },
];

const store = {
  programs: load("programs", defaultPrograms),
  reviews: load("reviews", defaultReviews),
  aspirations: load("aspirations", defaultAspirations),
};

let activeProgramId = store.programs[0]?.id;
let activeReviewFilter = "Semua";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupTheme();
  setupFilters();
  setupForms();
  renderAll();
  route();
});

window.addEventListener("hashchange", route);

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(`suarasiswa:${key}`)) || fallback;
  } catch {
    return fallback;
  }
}

function save() {
  localStorage.setItem("suarasiswa:programs", JSON.stringify(store.programs));
  localStorage.setItem("suarasiswa:reviews", JSON.stringify(store.reviews));
  localStorage.setItem("suarasiswa:aspirations", JSON.stringify(store.aspirations));
}

function setupNavigation() {
  $("#navToggle").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
  $$("#mainNav a").forEach((link) => {
    link.addEventListener("click", () => $("#mainNav").classList.remove("open"));
  });
  $("#backToPrograms").addEventListener("click", () => {
    location.hash = "#program";
  });
  $("#openAddProgram").addEventListener("click", () => {
    location.hash = "#admin";
    setAdminTab("programs");
  });
  $$(".admin-tabs button").forEach((button) => {
    button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
  });
}

function setupTheme() {
  const saved = localStorage.getItem("suarasiswa:theme");
  if (saved) document.documentElement.dataset.theme = saved;
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("suarasiswa:theme", next);
  });
}

function setupFilters() {
  const selects = [$("#categoryFilter"), $("#adminCategory")];
  selects.forEach((select) => {
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      select.append(option);
    });
  });
  $("#searchInput").addEventListener("input", renderPrograms);
  $("#categoryFilter").addEventListener("change", renderPrograms);
}

function setupForms() {
  $("#aspirationForm").addEventListener("submit", handleAspirationSubmit);
  $("#programForm").addEventListener("submit", handleProgramSubmit);
  $("#adminLoginForm").addEventListener("submit", handleAdminLogin);
  $("#adminLogout").addEventListener("click", handleAdminLogout);
}

function route() {
  const hash = location.hash.replace("#", "") || "home";
  const [routeName, id] = hash.split("/");
  const pageMap = {
    home: "homePage",
    program: "programPage",
    detail: "detailPage",
    aspirasi: "aspirasiPage",
    tentang: "tentangPage",
    admin: "adminPage",
  };

  $$(".page").forEach((page) => page.classList.remove("active"));
  $(`#${pageMap[routeName] || "homePage"}`).classList.add("active");
  $$("#mainNav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === routeName);
  });

  if (routeName === "detail" && id) {
    activeProgramId = id;
    renderProgramDetail();
  }

  if (routeName === "admin") {
    renderAdminGate();
  }
}

function renderAll() {
  renderNameIdeas();
  renderPrograms();
  renderFeatured();
  renderAspirations();
  renderAdmin();
  renderStats();
}

function renderNameIdeas() {
  $("#nameGrid").innerHTML = nameIdeas
    .map(([name, slogan]) => `<article class="name-card"><strong>${name}</strong><span>${slogan}</span></article>`)
    .join("");
}

function renderFeatured() {
  const topPrograms = [...store.programs]
    .sort((a, b) => averageRating(b.id) - averageRating(a.id))
    .slice(0, 3);
  $("#featuredPrograms").innerHTML = topPrograms.map(programCard).join("");
}

function renderPrograms() {
  const skeleton = $("#programSkeleton");
  const grid = $("#programGrid");
  skeleton.classList.add("loading");
  grid.style.display = "none";

  setTimeout(() => {
    const keyword = $("#searchInput").value.toLowerCase().trim();
    const category = $("#categoryFilter").value;
    const programs = store.programs.filter((program) => {
      const matchesKeyword =
        program.name.toLowerCase().includes(keyword) || program.category.toLowerCase().includes(keyword);
      const matchesCategory = category === "Semua" || program.category === category;
      return matchesKeyword && matchesCategory;
    });
    grid.innerHTML = programs.length
      ? programs.map(programCard).join("")
      : `<article class="program-card"><div class="program-logo">?</div><div><h3>Tidak ada program</h3><p>Coba kata kunci atau kategori lain.</p></div></article>`;
    skeleton.classList.remove("loading");
    grid.style.display = "grid";
  }, 260);
}

function programCard(program) {
  const reviewCount = reviewsFor(program.id).length;
  const rating = averageRating(program.id);
  return `
    <article class="program-card" onclick="location.hash='#detail/${program.id}'">
      <div class="program-logo">${initials(program.name)}</div>
      <div>
        <h3>${program.name}</h3>
        <div class="program-meta">${program.category}</div>
        <p>${program.shortDescription}</p>
        <div class="program-meta">
          <span class="stars">${stars(Math.round(rating))}</span>
          ${rating.toFixed(1)} · ${reviewCount} ulasan · ${reviewCount} penilai
        </div>
      </div>
    </article>
  `;
}

function renderProgramDetail() {
  const program = store.programs.find((item) => item.id === activeProgramId) || store.programs[0];
  if (!program) return;
  activeProgramId = program.id;
  const programReviews = reviewsFor(program.id);

  $("#programDetail").innerHTML = `
    <div class="detail-shell">
      <article class="detail-main">
        <div class="detail-head">
          <div class="program-logo">${initials(program.name)}</div>
          <div>
            <span class="category-pill">${program.category}</span>
            <h1>${program.name}</h1>
            <p class="program-meta">Penanggung jawab: ${program.owner}</p>
            <p><span class="status-pill ${program.status === "Selesai" ? "maroon" : ""}">${program.status}</span></p>
          </div>
        </div>
        <h2>Deskripsi Lengkap</h2>
        <p>${program.description}</p>
        <h2>Tujuan Program</h2>
        <p>${program.goal}</p>
        <h2>Target Peserta</h2>
        <p>${program.target}</p>
      </article>
      <aside class="review-box">
        <h2>Beri Ulasan</h2>
        <form class="panel-form" id="reviewForm">
          <label>Nama <span>Opsional</span><input name="name" type="text" /></label>
          <label>Kelas<input name="className" type="text" required placeholder="Contoh: XI-A" /></label>
          <div>
            <strong>Rating</strong>
            <div class="rating-input" aria-label="Rating 1 sampai 5">
              ${[5, 4, 3, 2, 1]
                .map(
                  (value) =>
                    `<input id="rate${value}" name="rating" value="${value}" type="radio" required><label for="rate${value}">★</label>`
                )
                .join("")}
            </div>
          </div>
          <label>
            Alasan Penilaian
            <textarea name="reason" minlength="15" required placeholder="Ceritakan pengalaman atau alasan kamu memberikan penilaian terhadap program kerja ini."></textarea>
          </label>
          <button class="primary-button" type="submit">Kirim Ulasan</button>
        </form>
      </aside>
    </div>
    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${programReviews.length} ulasan</p>
          <h2>Ulasan Siswa</h2>
        </div>
      </div>
      <div class="review-filters">
        ${["Semua", "5", "4", "3", "2", "1"]
          .map((value) => `<button class="${activeReviewFilter === value ? "active" : ""}" data-filter="${value}">${value === "Semua" ? "Semua" : stars(Number(value))}</button>`)
          .join("")}
      </div>
      <div class="review-list" id="reviewList"></div>
    </section>
  `;

  $("#reviewForm").addEventListener("submit", handleReviewSubmit);
  $$(".review-filters button").forEach((button) => {
    button.addEventListener("click", () => {
      activeReviewFilter = button.dataset.filter;
      renderProgramDetail();
    });
  });
  renderReviewList();
}

function renderReviewList() {
  const reviews = reviewsFor(activeProgramId).filter((review) => {
    return activeReviewFilter === "Semua" || String(review.rating) === activeReviewFilter;
  });
  $("#reviewList").innerHTML = reviews.length
    ? reviews.map(reviewMarkup).join("")
    : `<article class="review-item"><p>Belum ada ulasan untuk filter ini.</p></article>`;
}

function reviewMarkup(review) {
  return `
    <article class="review-item">
      <div class="stars">${stars(review.rating)}</div>
      <p>${review.reason}</p>
      <small>${review.name || "Anonim"} · Kelas ${review.className} · ${relativeTime(review.createdAt)}</small>
    </article>
  `;
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if ((data.reason || "").trim().length < 15) {
    showToast("Alasan penilaian minimal 15 karakter.");
    return;
  }
  store.reviews.unshift({
    id: createId(),
    programId: activeProgramId,
    name: cleanText(data.name) || "Anonim",
    className: cleanText(data.className),
    rating: Number(data.rating),
    reason: cleanText(data.reason),
    createdAt: Date.now(),
  });
  save();
  renderAll();
  renderProgramDetail();
  showToast("Terima kasih. Penilaianmu sangat membantu kami meningkatkan kualitas Program Kerja.");
}

function handleAspirationSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if ((data.body || "").trim().length < 30) {
    showToast("Isi aspirasi minimal 30 karakter.");
    return;
  }
  store.aspirations.unshift({
    id: createId(),
    name: cleanText(data.name) || "Anonim",
    className: cleanText(data.className),
    category: data.category,
    title: cleanText(data.title),
    body: cleanText(data.body),
    createdAt: Date.now(),
  });
  event.currentTarget.reset();
  save();
  renderAll();
  showToast("Terima kasih telah menyampaikan aspirasi. Suaramu akan menjadi bahan evaluasi bagi OSIS dan MPK.");
}

function renderAspirations() {
  $("#aspirationList").innerHTML = store.aspirations
    .slice(0, 6)
    .map(
      (item) => `
      <article class="aspiration-item">
        <span class="category-pill">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <small>${item.name} · Kelas ${item.className} · ${relativeTime(item.createdAt)}</small>
      </article>`
    )
    .join("");
}

function handleProgramSubmit(event) {
  event.preventDefault();
  if (!isAdminLoggedIn()) {
    showToast("Silakan login sebagai admin terlebih dahulu.");
    renderAdminGate();
    return;
  }
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const payload = {
    id: data.id || slugify(data.name),
    name: cleanText(data.name),
    category: data.category,
    owner: cleanText(data.owner),
    status: data.status,
    shortDescription: cleanText(data.shortDescription),
    description: cleanText(data.description),
    goal: cleanText(data.goal),
    target: cleanText(data.target),
  };
  const index = store.programs.findIndex((program) => program.id === payload.id);
  if (index >= 0) store.programs[index] = payload;
  else store.programs.unshift(payload);
  event.currentTarget.reset();
  save();
  renderAll();
  showToast("Program kerja berhasil disimpan.");
}

function renderAdmin() {
  $("#adminProgramList").innerHTML = store.programs
    .map(
      (program) => `
      <article class="admin-item">
        <strong>${program.name}</strong>
        <small>${program.category} · ${program.status} · ${reviewsFor(program.id).length} ulasan</small>
        <div class="admin-actions">
          <button class="ghost-button small" onclick="editProgram('${program.id}')">Edit</button>
          <button class="danger-button small" onclick="deleteProgram('${program.id}')">Hapus</button>
        </div>
      </article>`
    )
    .join("");

  $("#adminReviewList").innerHTML = store.reviews.map((review) => {
    const program = store.programs.find((item) => item.id === review.programId);
    return `
      <article class="admin-item">
        <strong>${program?.name || "Program dihapus"} · ${stars(review.rating)}</strong>
        <p>${review.reason}</p>
        <small>${review.name} · Kelas ${review.className} · ${relativeTime(review.createdAt)}</small>
        <button class="danger-button small" onclick="deleteReview('${review.id}')">Hapus Ulasan</button>
      </article>`;
  }).join("");

  $("#adminAspirationList").innerHTML = store.aspirations
    .map(
      (item) => `
      <article class="admin-item">
        <strong>${item.title}</strong>
        <p>${item.body}</p>
        <small>${item.category} · ${item.name} · Kelas ${item.className}</small>
      </article>`
    )
    .join("");
}

function renderStats() {
  const totalReviews = store.reviews.length;
  const average = totalReviews
    ? store.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    : 0;
  $$("[data-stat='programs']").forEach((node) => (node.textContent = store.programs.length));
  $$("[data-stat='reviews']").forEach((node) => (node.textContent = totalReviews));
  $$("[data-stat='aspirations']").forEach((node) => (node.textContent = store.aspirations.length));
  $$("[data-stat='satisfaction']").forEach((node) => (node.textContent = `${Math.round((average / 5) * 100)}%`));

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    label: `${rating} bintang`,
    value: store.reviews.filter((review) => review.rating === rating).length,
  }));
  renderBarChart("#ratingChart", ratingCounts);

  const aspirationCounts = ["OSIS", "MPK", "Sekolah", "Fasilitas", "Pembelajaran", "Lainnya"].map((category) => ({
    label: category,
    value: store.aspirations.filter((item) => item.category === category).length,
  }));
  renderBarChart("#aspirationChart", aspirationCounts);

  const ranked = [...store.programs].sort((a, b) => averageRating(b.id) - averageRating(a.id));
  $("#rankSummary").innerHTML = `
    <article class="admin-item"><strong>Rating tertinggi</strong><span>${ranked[0]?.name || "-"} · ${averageRating(ranked[0]?.id).toFixed(1)}</span></article>
    <article class="admin-item"><strong>Rating terendah</strong><span>${ranked[ranked.length - 1]?.name || "-"} · ${averageRating(ranked[ranked.length - 1]?.id).toFixed(1)}</span></article>
  `;
}

function renderBarChart(selector, rows) {
  const max = Math.max(1, ...rows.map((row) => row.value));
  $(selector).innerHTML = rows
    .map(
      (row) => `
      <div class="bar-row">
        <span>${row.label}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${(row.value / max) * 100}%"></div></div>
        <strong>${row.value}</strong>
      </div>`
    )
    .join("");
}

function setAdminTab(tab) {
  if (!isAdminLoggedIn()) {
    renderAdminGate();
    showToast("Silakan login sebagai admin terlebih dahulu.");
    return;
  }
  $$(".admin-tabs button").forEach((button) => button.classList.toggle("active", button.dataset.adminTab === tab));
  $$(".admin-panel").forEach((panel) => panel.classList.remove("active"));
  $(`#${tab}Panel`).classList.add("active");
}

function handleAdminLogin(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const email = data.email.trim().toLowerCase();
  const password = data.password.trim();

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    showToast("Email atau password admin tidak sesuai.");
    return;
  }

  localStorage.setItem(
    "suarasiswa:adminSession",
    JSON.stringify({ email, loginAt: Date.now() })
  );
  event.currentTarget.reset();
  renderAdminGate();
  setAdminTab("stats");
  showToast("Login admin berhasil.");
}

function handleAdminLogout() {
  localStorage.removeItem("suarasiswa:adminSession");
  renderAdminGate();
  showToast("Admin berhasil keluar.");
}

function renderAdminGate() {
  const loggedIn = isAdminLoggedIn();
  $("#adminLoginPanel").classList.toggle("hidden", loggedIn);
  $("#adminContent").classList.toggle("locked", !loggedIn);

  if (loggedIn) {
    const session = getAdminSession();
    $("#adminEmailLabel").textContent = session.email;
  }
}

function isAdminLoggedIn() {
  const session = getAdminSession();
  return session?.email === ADMIN_EMAIL;
}

function getAdminSession() {
  try {
    return JSON.parse(localStorage.getItem("suarasiswa:adminSession"));
  } catch {
    return null;
  }
}

window.editProgram = function editProgram(id) {
  if (!isAdminLoggedIn()) {
    showToast("Silakan login sebagai admin terlebih dahulu.");
    renderAdminGate();
    return;
  }
  const program = store.programs.find((item) => item.id === id);
  if (!program) return;
  const form = $("#programForm");
  Object.entries(program).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value;
  });
  form.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.deleteProgram = function deleteProgram(id) {
  if (!isAdminLoggedIn()) {
    showToast("Silakan login sebagai admin terlebih dahulu.");
    renderAdminGate();
    return;
  }
  if (!confirm("Hapus program kerja ini?")) return;
  store.programs = store.programs.filter((program) => program.id !== id);
  store.reviews = store.reviews.filter((review) => review.programId !== id);
  save();
  renderAll();
};

window.deleteReview = function deleteReview(id) {
  if (!isAdminLoggedIn()) {
    showToast("Silakan login sebagai admin terlebih dahulu.");
    renderAdminGate();
    return;
  }
  store.reviews = store.reviews.filter((review) => review.id !== id);
  save();
  renderAll();
};

function reviewsFor(programId) {
  return store.reviews.filter((review) => review.programId === programId);
}

function averageRating(programId) {
  const reviews = reviewsFor(programId);
  if (!reviews.length) return 0;
  return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
}

function stars(count) {
  return "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, 5 - count);
}

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function cleanText(text = "") {
  return text
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function relativeTime(timestamp) {
  const days = Math.max(0, Math.round((Date.now() - timestamp) / 86400000));
  if (days === 0) return "hari ini";
  if (days === 1) return "1 hari lalu";
  return `${days} hari lalu`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3600);
}

async function fetchProgramsFromSupabase() {
  const { data, error } = await supabaseClient
    .from("program_kerja")
    .select("*, kategori(nama)")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

async function submitReviewToSupabase(review) {
  const { error } = await supabaseClient.from("reviews").insert({
    program_id: review.programId,
    nama: review.name,
    kelas: review.className,
    rating: review.rating,
    alasan: review.reason,
  });

  if (error) throw error;
}

async function submitAspirationToSupabase(aspiration) {
  const { error } = await supabaseClient.from("aspirasi").insert({
    nama: aspiration.name,
    kelas: aspiration.className,
    kategori: aspiration.category,
    judul: aspiration.title,
    isi: aspiration.body,
  });

  if (error) throw error;
}
