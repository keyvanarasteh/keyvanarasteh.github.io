(() => {
  const tr = {
    navHome: "Ana sayfa", navWork: "Çalışmalar", navProjects: "Projeler", navTeaching: "Eğitim", navApproach: "Yaklaşım", navWriting: "Yazılar", navAbout: "Hakkımda",
    heroEyebrow: "BAĞIMSIZ GELİŞTİRİCİ · İSTANBUL", heroLine1: "Geleceği", heroLine2: "inşa ediyorum.",
    heroIntro: "Güvenlik, yapay zekâ ve kullanışlı geliştirici deneyimlerinin kesişiminde yazılımlar geliştiriyorum. Alttaki sistemden öndeki arayüze kadar her parçanın nasıl çalıştığıyla ilgileniyorum.",
    exploreWork: "Seçili projeleri keşfet", viewGithub: "GitHub'ı görüntüle", heroNote: "Kod, fikir ve deneylerden oluşan pratik bir portfolyo.",
    workTitle: "Kullanılmak için üretildi.", workIntro: "Güvenlik, yapay zekâ altyapısı ve günlük araçlar alanındaki açık projeler. Her biri kaynak koduna bağlanır.",
    filterAll: "Tüm projeler", filterSecurity: "Güvenlik", filterTools: "Araçlar",
    projectOsLab: "Yalıtılmış Android, iOS, Windows, Linux, macOS ve güvenlik duvarı laboratuvarları için yerel bir konsol.",
    projectQai: "Birden çok yapay zekâ sağlayıcısı için tek API sunan modüler ve tip güvenli Rust SDK'sı.",
    projectWebq: "Tauri, Svelte ve Rust ile platformlar arası güvenlik analizi ve bilgi toplama aracı.",
    projectQleaner: "Rust, Svelte ve Tauri ile geliştirilmiş platformlar arası disk temizleyici.",
    allRepos: "Tüm projeleri keşfet", approachTitle: "Merak,<br>düzenle birlikte.",
    ecosystemTitle: "Araçlar ve bilgi<br>birlikte ilerler.", ecosystemIntro: "QLine Technology Solutions'daki çalışmalarım açık kaynak mühendisliğini uygulamalı öğrenmeyle buluşturuyor. Qrofessor dersleri, laboratuvarları ve teknik kaynakları aynı ekosistemde bir araya getiriyor.",
    teachingPage: "Eğitim çalışmalarını keşfet", ecosystemCourse: "Dersler ve uygulamalı laboratuvarlar", ecosystemTools: "Açık kaynak paketler", ecosystemResearch: "Güvenlik analiz laboratuvarı",
    approachIntro: "Farklı disiplinler arasında çalışmayı seviyorum; ama süreç somut kalıyor: sistemi anlamak, açık bir model kurmak, sonra insanların gerçekten kullanabileceği bir şey üretmek.",
    principle1Title: "Sınırları anla", principle1Body: "Güvenlik çalışması, sistemlerin sınırlarında ve baskı altında nasıl davrandığını görerek başlar.",
    principle2Title: "Karmaşıklığı anlaşılır kıl", principle2Body: "İyi araçlar, her kararı zorlaştırmadan önemli ayrıntıları görünür kılar.",
    principle3Title: "Açıkta geliştir", principle3Body: "Başkalarının inceleyip geliştirebileceği açık kod, yararlı belgeler ve fikirler.",
    writingTitle: "Düşünürken yazıyorum.", writingIntro: "Tasarım ve renk teorisi üzerine İngilizce ve Türkçe uzun notlar.",
    article1Title: "Renk teorisinin temelleri", article2Title: "Pratikte renk kullanımı", readArticle: "Yazıyı oku ↗",
    aboutTitle: "Projelerin<br>arkasındaki kişi.",
    aboutBody1: "İstanbul'da yaşayan bir geliştirici ve QLine Technology Solutions'ın kurucusuyum. Çalışmalarım sistem mimarisi, güvenlik araştırması ve eğitimi kapsıyor.",
    aboutBody2: "İnsanların karmaşık sistemleri anlamasına, sınamasına ve iyileştirmesine yardımcı olan açık araçlar ve öğrenme alanları geliştiriyorum.", fullStory: "Hikâyenin tamamı ↗",
    connectTitle: "Web'de başka yerlerde de buluşalım.", connectIntro: "Araştırmalar, kod, videolar ve profesyonel güncellemeler için herkese açık profillerim.",
    closingTitle: "İnşa etmeye değer bir<br>fikriniz mi var?", connectGithub: "GitHub'da bağlantı kur", connectLinkedin: "LinkedIn'de bağlantı kur", footerNote: "Özenle tasarlandı ve geliştirildi.", backTop: "Başa dön ↑"
  };
  const formatted = new Set(['approachTitle', 'aboutTitle', 'closingTitle', 'ecosystemTitle']);
  const en = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map((node) => [node.dataset.i18n, formatted.has(node.dataset.i18n) ? node.innerHTML : node.textContent]));
  const englishTitle = document.title;
  const safeStorage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage can be unavailable. */ } }
  };
  const languageButton = document.getElementById('language-switch');
  function setLanguage(language) {
    const selected = language === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = selected;
    for (const node of document.querySelectorAll('[data-i18n]')) {
      const value = selected === 'tr' ? (tr[node.dataset.i18n] || node.dataset.tr) : en[node.dataset.i18n];
      if (value) {
        if (formatted.has(node.dataset.i18n)) node.innerHTML = value;
        else node.textContent = value;
      }
    }
    const articlePaths = { foundation: ['foundation-of-color-theory.en.md', 'renk-teorisi-temelleri.tr.md'], practice: ['color-in-practice.en.md', 'paratikte-renk-kullanimi.tr.md'] };
    for (const card of document.querySelectorAll('[data-article]')) {
      const [english, turkish] = articlePaths[card.dataset.article];
      card.href = `https://github.com/keyvanarasteh/keyvanarasteh.github.io/blob/main/knowledge/design/color/${selected === 'tr' ? turkish : english}`;
      card.querySelector('span').textContent = `${card.dataset.article === 'foundation' ? 'DESIGN SYSTEMS' : 'DESIGN PRACTICE'} · ${selected.toUpperCase()}`;
    }
    languageButton.textContent = selected === 'en' ? 'TR ↗' : 'EN ↗';
    languageButton.setAttribute('aria-label', selected === 'en' ? 'Türkçeye geç' : 'Switch to English');
    document.title = selected === 'en' ? englishTitle : (document.body.dataset.titleTr || 'Keyvan Arasteh — Yazılım, güvenlik ve yapay zekâ');
    safeStorage.set('keyvan-language', selected);
  }
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(requestedLanguage || safeStorage.get('keyvan-language') || (navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en'));
  languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'tr' : 'en'));

  const themeButton = document.getElementById('theme-switch');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    safeStorage.set('keyvan-theme', theme);
  }
  setTheme(safeStorage.get('keyvan-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  const menuButton = document.getElementById('menu-switch');
  const menu = document.getElementById('mobile-nav');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
  menuButton.addEventListener('click', () => { menu.hidden = !menu.hidden; menuButton.setAttribute('aria-expanded', String(!menu.hidden)); menuButton.setAttribute('aria-label', menu.hidden ? 'Open navigation' : 'Close navigation'); });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  addEventListener('resize', () => { if (innerWidth > 700) closeMenu(); });

  document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach((item) => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    document.querySelectorAll('.project-card').forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter); });
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.desktop-nav a')];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
    }, { rootMargin: '-20% 0px -65% 0px' });
    ['work', 'approach', 'writing', 'about'].forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
  }
})();
