const PORTRAIT_SRC = "portrait.webp";

const CONTACT_SCREEN = "data/cre/homepage";

const CONTACT = {
  email: "m87957411@gmail.com",
  whatsapp: "201004508451",
  facebook: "https://www.facebook.com/share/18QyGVyH3J/",
  craftFacebook: "https://www.facebook.com/share/1C5vGQjHfs/",
  github: "https://github.com/ABdodo-code",
  youtube: "http://www.youtube.com/@CraftEgyptOfficial",
};

const PROJECTS = [
  {
    id: "craft-egypt",
    number: "01",
    title: {
      en: "Craft Egypt",
      ar: "Craft Egypt",
    },
    category: {
      en: "Digital experience / Web / Design",
      ar: "تجربة رقمية / ويب / تصميم",
    },
    description: {
      en: "A digital concept celebrating Egyptian craft through a clear, contemporary online experience.",
      ar: "فكرة منصة رقمية بتقدّم الحِرف المصرية بروح معاصرة، وبتقرّب التراث من تجربة أونلاين واضحة.",
    },
    role: {
      en: "",
      ar: "",
    },
    tools: "",
    year: "2026",
    images: ["data/cre/homepage", "data/cre/poster CRE", "data/cre/intro"],
    videos: ["data/cre/1", "data/cre/2"],
    logo: "data/cre/CRE",
    thumb: "data/cre/CRE",
    thumbFit: "contain",
    thumbPad: "9%",
    thumbBg: "#fff",
    presentation: {
      cover: "data/cre/poster CRE",
      file: "",
      slides: Array.from({ length: 16 }, (_, i) => "data/cre/presentation CRE/" + (i + 1)),
    },
    externalLink: "",
  },
  {
    id: "video-editing",
    number: "02",
    title: {
      en: "Video Editing",
      ar: "مونتاج الفيديو",
    },
    category: {
      en: "Video / Editing",
      ar: "فيديو / مونتاج",
    },
    description: {
      en: "Videos I edited, focused on pacing, cuts and visual storytelling.",
      ar: "فيديوهات اشتغلت عليها مونتاج، بتركّز على الإيقاع والقطعات والسرد البصري.",
    },
    role: {
      en: "",
      ar: "",
    },
    tools: "",
    year: "2026",
    images: [],
    videos: ["data/video/1", "data/video/2", "data/video/3"],
    thumbTime: 2,
    externalLink: "",
  },
  {
    id: "learnexa",
    number: "03",
    title: {
      en: "Learnexa",
      ar: "Learnexa",
    },
    category: {
      en: "Web / Digital experience",
      ar: "ويب / تجربة رقمية",
    },
    description: {
      en: "An educational platform concept focused on making learning resources easier for students to explore.",
      ar: "فكرة منصة تعليمية رقمية بتسهّل على الطلاب استكشاف مصادر التعلّم.",
    },
    role: {
      en: "",
      ar: "",
    },
    tools: "",
    year: "2026",
    logo: "data/lex/lex",
    images: ["data/lex/Ho lex", "data/lex/home lex", "data/lex/ED lex"],
    videos: [],
    externalLink: "https://abdodo-code.github.io/LEARNEXA/",
    thumb: "data/lex/lex",
    thumbFit: "contain",
    thumbPad: "9%",
    thumbBg: "#fff",
  },
  {
    id: "selected-design",
    number: "04",
    title: {
      en: "Selected Design",
      ar: "تصاميم مختارة",
    },
    category: {
      en: "Visual design",
      ar: "تصميم بصري",
    },
    description: {
      en: "A selection of visual design work, including posters, ads, social media graphics, cards and identity concepts.",
      ar: "نماذج من شغل التصميم البصري: بوسترات وإعلانات وتصاميم سوشيال وكروت وأفكار للهويات.",
    },
    role: {
      en: "",
      ar: "",
    },
    tools: "",
    year: "2026",
    images: [
      "data/Design/ZX",
      "data/Design/Amona",
      "data/Design/karate",
      "data/Design/Athr",
      "data/Design/1",
      "data/Design/2",
      "data/Design/logo zx",
    ],
    videos: [],
    externalLink: "",
    thumb: "data/Design/logo zx",
    thumbFit: "contain",
    thumbPad: "0",
    thumbBg: "#e6ffc6",
  },
];

const CERT_DATA = [
  {
    title: {
      en: "Digital Egypt Cubs Initiative — Level 1",
      ar: "مبادرة أشبال مصر الرقمية — المستوى الأول",
    },
    issuer: {
      en: "Ministry of Communications and Information Technology",
      ar: "وزارة الاتصالات وتكنولوجيا المعلومات",
    },
    date: { en: "Oct 2024", ar: "أكتوبر 2024" },
    description: {
      en: "Certificate of Completion for Level 1 of the Digital Egypt Cubs Initiative (DECI), a scholarship sponsored by Egypt and managed by almentor.",
      ar: "شهادة إتمام المستوى الأول من مبادرة أشبال مصر الرقمية (DECI)، منحة برعاية الدولة وتديرها almentor.",
    },
  },
  {
    title: {
      en: "Digital Egypt Cubs Initiative — Level 2",
      ar: "مبادرة أشبال مصر الرقمية — المستوى الثاني",
    },
    issuer: {
      en: "Ministry of Communications and Information Technology",
      ar: "وزارة الاتصالات وتكنولوجيا المعلومات",
    },
    date: { en: "Sep 2025", ar: "سبتمبر 2025" },
    description: {
      en: "Certificate of Completion for Level 2 of the Digital Egypt Cubs Initiative (DECI), Batch 3, managed by almentor.",
      ar: "شهادة إتمام المستوى الثاني من مبادرة أشبال مصر الرقمية (DECI) الدفعة الثالثة، وتديرها almentor.",
    },
  },
  {
    title: { en: "JavaScript Level 1 — TOFAS", ar: "JavaScript المستوى الأول — TOFAS" },
    issuer: {
      en: "TOFAS · SPRIX · Hiroshima University",
      ar: "TOFAS · سبريكس · جامعة هيروشيما",
    },
    date: { en: "Mar 24, 2026", ar: "24 مارس 2026" },
    description: {
      en: "Certificate of Achievement in JavaScript Level 1 from the International Test of Fundamental Academic Skills.",
      ar: "شهادة إنجاز في JavaScript المستوى الأول من الاختبار الدولي للمهارات الأكاديمية الأساسية.",
    },
  },
  {
    title: { en: "JavaScript Level 2 — TOFAS", ar: "JavaScript المستوى الثاني — TOFAS" },
    issuer: {
      en: "TOFAS · SPRIX · Hiroshima University",
      ar: "TOFAS · سبريكس · جامعة هيروشيما",
    },
    date: { en: "Jun 11, 2026", ar: "11 يونيو 2026" },
    description: {
      en: "Certificate of Achievement in JavaScript Level 2 from the International Test of Fundamental Academic Skills.",
      ar: "شهادة إنجاز في JavaScript المستوى الثاني من الاختبار الدولي للمهارات الأكاديمية الأساسية.",
    },
  },
  {
    title: { en: "JavaScript Level 3 — TOFAS", ar: "JavaScript المستوى الثالث — TOFAS" },
    issuer: {
      en: "TOFAS · SPRIX · Hiroshima University",
      ar: "TOFAS · سبريكس · جامعة هيروشيما",
    },
    date: { en: "Jul 30, 2026", ar: "30 يوليو 2026" },
    description: {
      en: "Certificate of Achievement in JavaScript Level 3 from the International Test of Fundamental Academic Skills.",
      ar: "شهادة إنجاز في JavaScript المستوى الثالث من الاختبار الدولي للمهارات الأكاديمية الأساسية.",
    },
  },
];

const CERT_META = [
  { tag: "DECI", ratio: 1.78 },
  { tag: "DECI", ratio: 1.45 },
  { tag: "TOFAS", ratio: 1.414 },
  { tag: "TOFAS", ratio: 1.414 },
  { tag: "TOFAS", ratio: 1.414 },
];

const CERTS = CERT_DATA.map((c, k) => ({
  id: "c" + (k + 1),
  ...c,
  ...CERT_META[k],
  image: "",
  pdf: "data/الشهادات/" + (k + 1) + ".pdf",
  credentialLink: "",
}));

const T = {
  en: {
    nWork: "Work",
    brand: "Abd El Rahman",
    navCta: "Let's talk",
    logoAria: "AD — Abd El Rahman, back to top",
    nAbout: "About",
    nExp: "Experiments",
    nContact: "Contact",
    hMeta1: "Creative work across visual design, video and digital projects",
    hMeta2: "Creative projects and visual ideas",
    hName1: "Abd",
    hName2: "El Rahman",
    hHello: "Hello, I'm",
    hStmt: "I shape <mark>ideas</mark> into clear, engaging <mark>visual experiences</mark>.",
    hS1: "Visual stories",
    hS2: "Digital experiences",
    hS3: "Creative projects",
    apT: "Approach",
    ap0: "Ideas",
    ap1: "Visual direction",
    ap2: "Execution",
    ap3: "Refinement",
    cfT: "Current focus",
    cf0: "Creative projects",
    cf1: "Digital experiences",
    cf2: "Visual storytelling",
    hWord: "Portfolio",
    vlL: "Creative / Digital / Visual",
    vlR: "Based in Egypt",
    hNote:
      "Abd El Rahman Mohammed is a creator from Egypt, exploring visual design, video and digital projects.",
    hSide: "Ideas brought to life through visuals, video and digital experiences.",
    hLoc: "Egypt",
    sig: "Abd El Rahman",
    hScroll: "Scroll to explore",
    wTitle: "<mark>Projects</mark>",
    wSub: "A selection of creative projects across visual design, video and digital experiences.",
    explore: "View project",
    role: "Role",
    tools: "Tools",
    year: "Year",
    ph: "Project image",
    pv: "Video preview",
    phDesign: "Selected design",
    cTitle: "What I <mark>work on</mark>",
    c1: "Visual stories",
    c1d: "Video creation, editing and visual storytelling.",
    c2: "Visual systems",
    c2d: "Graphic design for layouts, visual identities and clear communication.",
    c3: "Digital experiences",
    c3d: "Website concepts, interfaces and digital experiences.",
    tTitle: "Tools",
    pTitle: "Work process",
    s: [
      ["Discover", "Understand the idea and requirements."],
      ["Explore", "Research visual directions and possibilities."],
      ["Create", "Build the visual experience."],
      ["Refine", "Improve details, pacing and presentation."],
      ["Deliver", "Prepare the final result."],
    ],
    tEnd: "Turning ideas into something real.",
    w: ["Idea", "Design", "Build", "Refine"],
    eTitle: "Experiments",
    eSub: "Not everything starts as a project.",
    e1: "Motion",
    e2: "Typography",
    e3: "Web",
    e4: "Visual",
    x1: "Timing and easing",
    x2: "Weight and width",
    x3: "Code and structure",
    x4: "Contrast and form",
    aTitle: "About",
    aText:
      "I'm Abd El Rahman Mohammed, a creator from Egypt interested in visual design, video and digital projects. This portfolio brings together selected work and ideas.",
    phPortrait: "Portrait",
    jTitle: "Journey",
    j1: "Digital project concept.",
    j2t: "Video editing",
    j2: "Edited videos and visual storytelling.",
    j3t: "Learnexa",
    j3: "Educational platform concept.",
    ceTitle: "Certificates",
    ceSub: "Courses, certifications and learning milestones.",
    viewCert: "View certificate",
    avail: "Creative projects and visual ideas",
    ctTitle: "Let's make something <mark>meaningful</mark>.",
    ctSub: "Have a creative project in mind? Get in touch and tell me about it.",
    top: "Back to top",
    presT: "Presentation",
    presN: "Craft Egypt presentation",
    presOpen: "View presentation",
    prev: "Previous",
    next: "Next",
    soonLink: "Link coming soon",
    ariaP: "Portrait of Abd El Rahman",
    ui: "UI",
    navL: "Navigation",
    pk: "Packaging",
    certPrev: "Certificate preview",
    emailSoon: "Email coming soon",
    fName: "ABD EL RAHMAN",
    fCopy: "© 2026",
    docTitle: "Abd El Rahman — Creative Portfolio",
  },
  ar: {
    nWork: "الأعمال",
    brand: "عبد الرحمن",
    navCta: "لنتحدث",
    logoAria: "AD — عبد الرحمن، العودة إلى الأعلى",
    nAbout: "من أنا",
    nExp: "تجارب",
    nContact: "تواصل",
    hMeta1: "تصميم بصري وفيديو ومشاريع رقمية",
    hMeta2: "مشاريع إبداعية وأفكار بصرية",
    hName1: "عبد",
    hName2: "الرحمن",
    hHello: "أهلاً، أنا",
    hStmt: "بحوّل <mark>الأفكار</mark> لـ<mark>تجارب بصرية</mark> واضحة ومعبّرة.",
    hS1: "قصص بصرية",
    hS2: "تجارب رقمية",
    hS3: "مشاريع إبداعية",
    apT: "أسلوبي",
    ap0: "الأفكار",
    ap1: "الاتجاه البصري",
    ap2: "التنفيذ",
    ap3: "إعادة صياغة الأفكار",
    cfT: "أركّز الآن على",
    cf0: "مشاريع إبداعية",
    cf1: "تجارب رقمية",
    cf2: "السرد البصري",
    hWord: "أعمالي",
    vlL: "إبداع / رقمي / بصري",
    vlR: "من مصر",
    hNote:
      "عبد الرحمن محمد، صانع محتوى إبداعي من مصر، بيهتم بالتصميم البصري والفيديو والمشاريع الرقمية.",
    hSide: "أفكار بتتحوّل لمحتوى بصري وفيديو وتجارب رقمية.",
    sig: "عبد الرحمن",
    hLoc: "مصر",
    hScroll: "مرّر للأسفل",
    wTitle: "<mark>المشاريع</mark>",
    wSub: "مجموعة من المشاريع الإبداعية في التصميم البصري والفيديو والتجارب الرقمية.",
    explore: "عرض المشروع",
    role: "الدور",
    tools: "الأدوات",
    year: "السنة",
    ph: "صورة المشروع",
    pv: "معاينة الفيديو",
    phDesign: "تصميم مختار",
    cTitle: "مجالات <mark>شغلي</mark>",
    c1: "قصص بصرية",
    c1d: "مونتاج وفيديو وإيقاع وسرد بصري.",
    c2: "أنظمة بصرية",
    c2d: "تصميم جرافيك وتنسيق بصري وهويات وتواصل واضح.",
    c3: "تجارب رقمية",
    c3d: "أفكار مواقع وواجهات وتجارب رقمية.",
    tTitle: "الأدوات",
    pTitle: "مراحل العمل",
    s: [
      ["اكتشاف", "فهم الفكرة وما المطلوب منها."],
      ["استكشاف", "البحث عن اتجاهات بصرية وحلول ممكنة."],
      ["إنشاء", "بناء التجربة البصرية."],
      ["إعادة صياغة الأفكار وتحويلها إلى شيء ما", "تحسين التفاصيل والإيقاع وطريقة العرض."],
      ["تسليم", "تجهيز النتيجة النهائية."],
    ],
    tEnd: "من الفكرة إلى شيء حقيقي.",
    w: ["فكرة", "تصميم", "بناء", "إعادة صياغة الأفكار"],
    eTitle: "تجارب",
    eSub: "ليس كل شيء يبدأ كمشروع.",
    e1: "حركة",
    e2: "خطوط",
    e3: "ويب",
    e4: "بصري",
    x1: "توقيت وانسيابية",
    x2: "وزن وعرض الخط",
    x3: "كود وتركيب",
    x4: "تباين وشكل",
    aTitle: "من أنا",
    aText:
      "أنا عبد الرحمن محمد من مصر. مهتم بالتصميم البصري والفيديو والمشاريع الرقمية، وده بورتفوليو بيجمع نماذج من شغلي وأفكاري.",
    phPortrait: "صورة شخصية",
    jTitle: "الرحلة",
    j1: "فكرة مشروع رقمي.",
    j2t: "مونتاج الفيديو",
    j2: "فيديوهات مونتاج وسرد بصري.",
    j3t: "Learnexa",
    j3: "فكرة منصة تعليمية رقمية.",
    ceTitle: "الشهادات",
    ceSub: "الدورات والشهادات ومحطات التعلّم.",
    viewCert: "عرض الشهادة",
    avail: "مشاريع إبداعية وأفكار بصرية",
    ctTitle: "يلا نعمل حاجة <mark>مميزة</mark>.",
    ctSub: "عندك فكرة أو مشروع إبداعي؟ ابعتلي واحكيلي عنه.",
    top: "العودة للأعلى",
    presT: "عرض تقديمي",
    presN: "العرض التقديمي لـ Craft Egypt",
    presOpen: "مشاهدة العرض التقديمي",
    prev: "السابق",
    next: "التالي",
    soonLink: "الرابط قريباً",
    ariaP: "صورة عبد الرحمن",
    ui: "الواجهة",
    navL: "التنقل",
    pk: "التغليف",
    certPrev: "معاينة الشهادة",
    emailSoon: "البريد الإلكتروني قريباً",
    fName: "عبد الرحمن",
    fCopy: "© 2026",
    docTitle: "عبد الرحمن محمد — بورتفوليو إبداعي",
  },
};

let L = "en";

const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];

const t = (k) => T[L][k];

function ph(label) {
  return `<div class="ph" role="img" aria-label="${label}"><span>${label}</span></div>`;
}

const IMG_EXT = ["png", "jpg", "jpeg", "webp"];

const VID_EXT = ["mp4", "mov", "webm", "m4v"];

const hasExt = (s) => /\.[a-z0-9]{2,5}$/i.test(s);

function mediaTag(src, label, kind) {
  const u = encodeURI(src);
  if (kind === "vid" || /\.(mp4|webm|mov|m4v)$/i.test(src)) {
    const list = hasExt(src) ? [u] : VID_EXT.map((e) => `${u}.${e}`);
    return `<video aria-label="${label}" controls playsinline preload="metadata">${list.map((s) => `<source src="${s}">`).join("")}</video>`;
  }
  return hasExt(src)
    ? `<img src="${u}" alt="${label}" loading="lazy" decoding="async">`
    : `<img src="${u}.${IMG_EXT[0]}" data-b="${u}" data-x="0" alt="${label}" loading="lazy" decoding="async">`;
}

function sl(id, i, label, plain, kind) {
  const p = PROJECTS.find((x) => x.id === id);
  const imgs = p.images.map((s) => [s, "img"]);
  const vids = p.videos.map((s) => [s, "vid"]);
  const item = (kind === "vid" ? vids : kind === "img" ? imgs : [...imgs, ...vids])[i];
  if (item) return mediaTag(item[0], label, item[1]);
  return plain ? `<div class="ph"><span>${label}</span></div>` : ph(label);
}

function presCard(p) {
  const d = p.presentation;
  const body = `${d.cover ? `<span class="pc">${mediaTag(d.cover, "", "img")}</span>` : ""}<span class="pt"><span class="meta">${t("presT")}</span><b class="disp">${p.title[L]}</b><span class="go">${t("presOpen")} <span class="flip">→</span></span></span>`;
  return d.file || d.slides.length
    ? `<button class="pres clip" type="button" data-pres>${body}</button>`
    : `<div class="pres clip off">${body}</div>`;
}

function thumb(p) {
  const lab = p.title[L];
  if (p.thumb || p.images.length) {
    const st =
      (p.thumbPos ? `object-position:${p.thumbPos};` : "") +
      (p.thumbFit ? `object-fit:${p.thumbFit};padding:${p.thumbPad || "0"};` : "");
    return mediaTag(p.thumb || p.images[0], lab, "img").replace("<img ", `<img style="${st}" `);
  }
  if (p.videos.length) {
    const u = encodeURI(p.videos[0]);
    const list = hasExt(p.videos[0]) ? [u] : VID_EXT.map((e) => `${u}.${e}`);
    return `<video aria-label="${lab}" muted playsinline preload="metadata" tabindex="-1">${list.map((s) => `<source src="${s}#t=${p.thumbTime || 1}">`).join("")}</video><span class="pl" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z"/></svg></span>`;
  }
  return "";
}

function renderProjects() {
  const P = PROJECTS;
  const lab = t("ph");
  const media = {
    "craft-egypt": `<div class="craft"><div class="m a clip">${sl("craft-egypt", 0, lab, false, "img")}</div></div><div class="craft-pair"><div class="m b clip">${sl("craft-egypt", 1, t("ui"), false, "img")}</div><div class="m c clip">${sl("craft-egypt", 2, t("pk"), false, "img")}</div></div><div class="craft-extra"><div class="m vid clip" data-v>${sl("craft-egypt", 0, t("pv") + " 1", false, "vid")}</div><div class="m vid clip" data-v>${sl("craft-egypt", 1, t("pv") + " 2", false, "vid")}</div>${presCard(P[0])}</div>`,
    "video-editing": `<div class="reels">${[0, 1, 2].map((i) => `<div class="m vid clip" data-v>${sl("video-editing", i, t("pv") + " " + (i + 1), false, "vid")}</div>`).join("")}</div>`,
    learnexa: `<div class="lx">${[0, 1, 2].map((i) => `<div class="browser lx-c clip"><div class="bar"><i></i><i></i><i></i></div>${sl("learnexa", i, [t("navL"), lab, t("ui")][i], true)}</div>`).join("")}</div>`,
    "selected-design": `<div class="gal">${[1, 2, 3, 4, 5, 6, 7].map((i) => `<div class="m clip">${sl("selected-design", i - 1, t("phDesign") + " " + i)}</div>`).join("")}</div>`,
  };
  $("#projects").innerHTML = P.map(
    (p) =>
      `<article class="proj" id="p-${p.id}" data-view><div class="ptitle"><span class="n">${p.number} / 04</span><h3 class="disp">${p.title[L]}</h3>${p.logo ? `<span class="plogo">${mediaTag(p.logo, "", "img")}</span>` : ""}</div>\n <div class="pinfo"><div><p class="meta">${p.category[L]}</p><p class="d" style="margin-top:12px">${p.description[L]}</p>${p.externalLink ? `<a class="cta" href="${p.externalLink}" target="_blank" rel="noopener">${t("explore")} <span class="flip">→</span></a>` : ""}</div>\n <dl>${p.role[L] ? `<dt>${t("role")}</dt><dd>${p.role[L]}</dd>` : ""}${p.tools ? `<dt>${t("tools")}</dt><dd>${p.tools}</dd>` : ""}<dt>${t("year")}</dt><dd>${p.year}</dd></dl></div>${media[p.id]}</article>`,
  ).join("");
  $("#idx").innerHTML = P.map(
    (p) =>
      `<a class="ix" href="#p-${p.id}"><div class="th"${p.thumbBg ? ` style="background:${p.thumbBg}"` : ""}>${thumb(p)}</div><div class="r"><b>${p.number}</b><div style="flex:1"><span>${p.title[L]}</span><small>${p.category[L]}</small></div></div></a>`,
  ).join("");
  $$("[data-pres]").forEach((b) => (b.onclick = openPres));
  observe();
}

function renderSteps() {
  const ic = [
    '<circle cx="18" cy="18" r="10"/><path d="M26 26l7 7"/>',
    '<path d="M6 30L30 6M20 6h10v10"/>',
    '<path d="M8 28l14-14 6 6-14 14H8zM24 12l4-4 6 6-4 4"/>',
    '<circle cx="18" cy="18" r="11"/><path d="M12 18l4 4 8-8"/>',
    '<path d="M18 6v20M9 18l9 9 9-9M6 32h24"/>',
  ];
  $("#steps").innerHTML = t("s")
    .map(
      (s, i) =>
        `<div class="step"><span class="ic"><svg viewBox="0 0 36 36" aria-hidden="true">${ic[i]}</svg></span><span class="n">0${i + 1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`,
    )
    .join("");
  observe();
}

function renderCerts() {
  $("#certs").innerHTML = CERTS.map(
    (c, i) =>
      `<button class="cert rv" data-c="${i}" aria-label="${c.title[L]}"><span class="ctop"><span class="num meta">0${i + 1}</span><span class="ctag">${c.tag}</span></span><span class="cbody"><b class="ct">${c.title[L]}</b><span class="meta">${c.issuer[L]} · ${c.date[L]}</span></span><span class="cgo" aria-hidden="true"><span class="flip">→</span></span></button>`,
  ).join("");
  $$(".cert").forEach(
    (b) =>
      (b.onclick = () => {
        const c = CERTS[b.dataset.c];
        $("#mt").textContent = c.title[L];
        $("#mm").textContent = c.issuer[L] + " · " + c.date[L];
        $("#md").textContent = c.description[L];
        $("#mph").innerHTML = c.image
          ? `<img src="${encodeURI(c.image)}" alt="${c.title[L]}" style="width:100%;height:100%;object-fit:contain">`
          : c.pdf
            ? `<iframe src="${encodeURI(c.pdf)}#toolbar=0&navpanes=0&scrollbar=0&view=Fit" title="${c.title[L]}"></iframe>`
            : `<span>${t("certPrev")}</span>`;
        $("#mph").style.setProperty("--cr", c.ratio || 1.414);
        $("#modal").classList.add("o");
        $("#mx").focus();
      }),
  );
  observe();
}

const ICON = {
  email:
    '<path d="M3 5h18v14H3zM3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  whatsapp:
    '<path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.2 1.4z"/>',
  facebook:
    '<path d="M14 8V6.5c0-.7.2-1 1.1-1H17V2h-2.8C11 2 10 3.700 10 6v2H7.500v3.500H10V22h4v-10.500h2.800L17.200 8z"/>',
  craftFacebook:
    '<path d="M14 8V6.5c0-.7.2-1 1.1-1H17V2h-2.8C11 2 10 3.700 10 6v2H7.500v3.500H10V22h4v-10.500h2.800L17.200 8z"/>',
  github:
    '<path d="M12 2a10 10 0 00-3.200 19.500c.5.1.7-.2.7-.5v-1.800c-2.800.6-3.400-1.300-3.400-1.300-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.1-.6.1-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.6.3-1.100.6-1.300-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.500 9.500 0 015 0c1.900-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0012 2z"/>',
  youtube:
    '<path d="M21.600 7.200a2.500 2.500 0 00-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 002.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 001.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"/>',
};

function renderSoc() {
  const url = {
    whatsapp: CONTACT.whatsapp && "https://wa.me/" + CONTACT.whatsapp,
    facebook: CONTACT.facebook,
    craftFacebook: CONTACT.craftFacebook,
    github: CONTACT.github,
    youtube: CONTACT.youtube,
  };
  $("#soc").innerHTML = Object.keys(url)
    .map((k) => {
      const u = url[k];
      const n = k === "craftFacebook" ? "Facebook · Craft Egypt" : k[0].toUpperCase() + k.slice(1);
      return `<a href="${u || "#contact"}" ${u ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'} aria-label="${n}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg>${n}${u ? "" : ` <small>${t("soonLink")}</small>`}</a>`;
    })
    .join("");
  if (CONTACT.email) {
    $("#mail").href = "mailto:" + CONTACT.email;
    $("#mail").textContent = CONTACT.email.toUpperCase();
  }
}

function sil(a) {
  return `<div class="sil" role="img" aria-label="${a}"><svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2a2a"/><stop offset="1" stop-color="#11110F"/></linearGradient></defs><path d="M200 50c-58 0-92 46-92 108 0 52 26 88 58 103-78 22-136 78-146 259h360c-10-181-68-237-146-259 32-15 58-51 58-103 0-62-34-108-92-108z" fill="url(#sg)" stroke="#C6F135" stroke-opacity=".35"/></svg><span class="meta">${t("phPortrait")}</span></div>`;
}

function renderPortrait() {
  $("#portrait").innerHTML = PORTRAIT_SRC
    ? `<img src="${PORTRAIT_SRC}" alt="${t("ariaP")}" loading="eager">`
    : sil(t("ariaP"));
  const sc = $(".lap .scr2");
  if (sc && CONTACT_SCREEN) {
    sc.classList.add("has");
    sc.innerHTML = `${mediaTag(CONTACT_SCREEN, "Craft Egypt", "img")}<span class="sc-t"><b>Craft Egypt</b></span>`;
  }
  const cv = $(".cvis > .ph");
  if (cv && PORTRAIT_SRC)
    cv.innerHTML = `<img src="${PORTRAIT_SRC}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top;filter:none">`;
  const a = $(".about .ph");
  if (a && PORTRAIT_SRC) {
    a.innerHTML = `<img src="${PORTRAIT_SRC}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top;filter:none">`;
  }
}

function setLang(l) {
  L = l;
  const h = document.documentElement;
  h.lang = l;
  h.dir = l === "ar" ? "rtl" : "ltr";
  $$("[data-i]").forEach((e) => {
    const v = t(e.dataset.i);
    if (v) e[e.hasAttribute("data-html") ? "innerHTML" : "textContent"] = v;
  });
  const tp = $("[data-badge]");
  if (tp) {
    L === "en" ? tp.setAttribute("textLength", "270") : tp.removeAttribute("textLength");
  }
  $$("[data-w]:not([data-i])").forEach((e, i) => (e.textContent = t("w")[i]));
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === l));
  renderProjects();
  renderSteps();
  renderCerts();
  renderSoc();
  $(".track").innerHTML = [t("hS1"), t("hS2"), t("hS3")]
    .map((x) => `<span>${x}</span>`)
    .join("")
    .repeat(6);
  if (!CONTACT.email) $("#mail").textContent = t("emailSoon");
  document.title = t("docTitle");
  renderPortrait();
  try {
    localStorage.setItem("lang", l);
  } catch (e) {}
}

$$(".lang button").forEach((b) => (b.onclick = () => setLang(b.dataset.l)));

let io, cio;

function observe() {
  io =
    io ||
    new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      {
        threshold: 0.15,
      },
    );
  $$(".rv:not(.in),.step:not(.in)").forEach((e) => io.observe(e));
  cio =
    cio ||
    new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".clip").forEach((c) => c.classList.add("in"));
            cio.unobserve(e.target);
          }
        }),
      {
        threshold: 0.1,
      },
    );
  new Set($$(".clip:not(.in)").map((c) => c.parentElement)).forEach((p) => cio.observe(p));
}

const nav = $("#nav"),
  menu = $("#menu");

function menuToggle(o) {
  document.body.classList.toggle("mo", o);
  menu.classList.toggle("o", o);
  $("#burger").setAttribute("aria-expanded", o);
}

$("#burger").onclick = () => menuToggle(!menu.classList.contains("o"));

$$("#menu a").forEach((a) => (a.onclick = () => menuToggle(false)));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuToggle(false);
    $("#modal").classList.remove("o");
    closePres();
  }
  if ($("#pmodal").classList.contains("o") && ps.length > 1) {
    const d = L === "ar" ? -1 : 1;
    if (e.key === "ArrowRight") pStep(d);
    if (e.key === "ArrowLeft") pStep(-d);
  }
});

$("#mx").onclick = () => $("#modal").classList.remove("o");

let ps = [],
  pi = 0,
  pAlt = "";

function pShow() {
  $("#pstage").innerHTML = mediaTag(ps[pi], pAlt || t("presN") + " " + (pi + 1), "img");
  $("#pcount").textContent = pi + 1 + " / " + ps.length;
  $("#pnav").hidden = ps.length < 2;
}

function pStep(d) {
  pi = (pi + d + ps.length) % ps.length;
  pShow();
}

function openPres() {
  const d = PROJECTS[0].presentation;
  pAlt = "";
  if (d.slides.length) {
    ps = d.slides;
    pi = 0;
    pShow();
  } else if (/\.pdf$/i.test(d.file)) {
    ps = [];
    $("#pstage").innerHTML = `<iframe src="${encodeURI(d.file)}" title="${t("presN")}"></iframe>`;
    $("#pnav").hidden = true;
  } else if (d.file) {
    window.open(encodeURI(d.file), "_blank", "noopener");
    return;
  } else return;
  $("#pmodal").classList.add("o");
  $("#pmx").focus();
}

function closePres() {
  $("#pmodal").classList.remove("o");
  $("#pstage").innerHTML = "";
}

$("#pmx").onclick = closePres;

$("#pprev").onclick = () => pStep(-1);

$("#pnext").onclick = () => pStep(1);

const IMG_SEL = ".craft img,.craft-pair img,.gal img,.lx img";

function openImg(img) {
  const art = img.closest("article");
  const list = [...art.querySelectorAll(IMG_SEL)];
  ps = list.map((i) => decodeURI(i.currentSrc || i.src));
  pi = Math.max(0, list.indexOf(img));
  pAlt = img.alt || "";
  pShow();
  $("#pmodal").classList.add("o");
  $("#pmx").focus();
}

$("#projects").addEventListener("click", (e) => {
  const img = e.target.closest(IMG_SEL);
  if (img) openImg(img);
});

$("#pmodal").onclick = (e) => {
  if (e.target.id === "pmodal") closePres();
};

$("#modal").onclick = (e) => {
  if (e.target.id === "modal") e.target.classList.remove("o");
};

const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;

const tr = $("#tr"),
  words = () => $$("#tr [data-w]"),
  pt = $("#portrait");

function onScroll() {
  const y = scrollY;
  nav.classList.toggle("s", y > 40);
  const doc = document.documentElement;
  $("#progress").style.setProperty("--p", (y / (doc.scrollHeight - innerHeight || 1)).toFixed(4));
  let activeId = "";
  ["work", "about", "experiments", "contact"].forEach((id) => {
    const s = document.getElementById(id);
    if (s && s.getBoundingClientRect().top < innerHeight * 0.4) activeId = id;
  });
  $$(".links a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + activeId),
  );
  if (!RM && y < innerHeight * 1.2) pt.style.transform = `translateY(${y * 0.05}px)`;
  const r = tr.getBoundingClientRect(),
    p = Math.min(0.999, Math.max(0, -r.top / (r.height - innerHeight)));
  const i = Math.floor(p * 5);
  words().forEach((w, k) =>
    w.classList.toggle("on", k === i && r.top < innerHeight && r.bottom > 0),
  );
  $("#trc").textContent = "0" + (i + 1);
}

addEventListener("scroll", onScroll, {
  passive: true,
});

const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

if (fine) {
  const root = document.documentElement,
    dot = $("#cur"),
    ring = $("#cur-ring");
  root.classList.add("has-cur");
  let x = 0,
    y = 0,
    rx = 0,
    ry = 0,
    seen = false;
  addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!seen) {
      seen = true;
      rx = x;
      ry = y;
      root.classList.add("cur-on");
    }
  });
  document.addEventListener("mouseleave", () => root.classList.remove("cur-on"));
  document.addEventListener("mouseenter", () => seen && root.classList.add("cur-on"));
  (function loop() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate(${x}px,${y}px)`;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    const view = e.target.closest(".clip,.cert,.vid"),
      link = e.target.closest("a,button,.sticker,.cta");
    ring.classList.toggle("v", !!view);
    ring.classList.toggle("a", !view && !!link);
    ring.dataset.t = view ? (L === "ar" ? "عرض" : "VIEW") : "";
  });
  document.addEventListener("mousemove", (e) => {
    const b = e.target.closest(".cta,.mail,.nav-cta");
    if (b && !RM) {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px,${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
    }
  });
  document.addEventListener("mouseout", (e) => {
    const b = e.target.closest(".cta,.mail,.nav-cta");
    if (b) b.style.transform = "";
  });
  if (!RM) {
    const hero = $(".hero"),
      layers = [
        [".portrait", -8],
        [".disc", 14],
        [".ring", -18],
        [".swoosh", 10],
        [".seal", -22],
      ].map(([s, k]) => [$(s), k]);
    let raf = 0;
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect(),
        nx = (e.clientX - r.left) / r.width - 0.5,
        ny = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        layers.forEach(([el, k]) => el && (el.style.translate = `${nx * k}px ${ny * k}px`)),
      );
    });
    hero.addEventListener("mouseleave", () =>
      layers.forEach(([el]) => el && (el.style.translate = "")),
    );
  }
}

$$(".sticker").forEach((el) => {
  let sx = 0,
    sy = 0,
    ox = 0,
    oy = 0;
  el.addEventListener("pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    sx = e.clientX - ox;
    sy = e.clientY - oy;
    el.classList.add("drag");
  });
  el.addEventListener("pointermove", (e) => {
    if (!el.classList.contains("drag")) return;
    ox = e.clientX - sx;
    oy = e.clientY - sy;
    el.style.translate = `${ox}px ${oy}px`;
  });
  ["pointerup", "pointercancel"].forEach((ev) =>
    el.addEventListener(ev, () => el.classList.remove("drag")),
  );
});

function fitHero() {
  const st = $(".stage"),
    w = $(".word");
  if (!st || !w) return;
  st.style.removeProperty("--wsize");
  const base = parseFloat(getComputedStyle(w).fontSize);
  const rg = document.createRange();
  rg.selectNodeContents(w);
  const textW =
    typeof rg.getBoundingClientRect === "function" ? rg.getBoundingClientRect().width : 0;
  if (textW > 0)
    st.style.setProperty(
      "--wsize",
      Math.min(base * (st.clientWidth / textW) * 0.98, innerWidth * (L === "ar" ? 0.27 : 0.3)) +
        "px",
    );
}

const setLangBase = setLang;

setLang = function (lang) {
  setLangBase(lang);
  fitHero();
};

addEventListener("resize", fitHero);

if (document.fonts) document.fonts.ready.then(fitHero);

document.addEventListener(
  "error",
  (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (img.dataset.b) {
      const n = +img.dataset.x + 1;
      if (n < IMG_EXT.length) {
        img.dataset.x = n;
        img.src = `${img.dataset.b}.${IMG_EXT[n]}`;
      } else if (img.closest(".plogo")) img.closest(".plogo").remove();
      else
        img.replaceWith(
          Object.assign(document.createElement("div"), {
            className: "ph",
            innerHTML: `<span>${img.alt}</span>`,
          }),
        );
      return;
    }
    if (/portrait/.test(img.src))
      img.replaceWith(
        Object.assign(document.createElement("div"), {
          className: "ph",
          innerHTML: "<span>portrait.webp</span>",
        }),
      );
  },
  true,
);

let saved = "en";

try {
  saved = localStorage.getItem("lang") || "en";
} catch (e) {}

setLang(saved === "ar" ? "ar" : "en");

onScroll();