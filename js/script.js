document.addEventListener('DOMContentLoaded', () => {
    // ====== 1. 多语言字典 (i18n) ======
    const translations = {
        zh: {
            "nav.home": "首页概览", "nav.services": "业务领域", "nav.projects": "我们的项目", "nav.join": "加入团队",
            "home.title": "构筑数字世界的<br>底层驱动力。",
            "home.desc": "<strong>Aervan Studio</strong> 是一支独立且专注的先锋技术团队。我们以极致的工程化标准，将创意转化为高可用、高性能的数字产品。",
            "home.btn1": "查看项目", "home.btn2": "加入我们",
            "services.title": "业务领域",
            "s1.title": "全栈软件开发", "s1.desc": "从响应式 Web 应用到跨平台应用，我们提供高标准的交互设计与前端工程化落地。",
            "s2.title": "后端架构设计", "s2.desc": "构建高并发、高可用系统。精通数据库优化、API 网关设计及分布式系统部署。",
            "s3.title": "云原生与运维", "s3.desc": "基于容器化部署与 CI/CD 流水线，让软件交付更加敏捷、安全、丝滑。",
            "projects.title": "我们的项目",
            "join.title": "成为先锋的一员。", "join.desc": "Aervan Studio 正在寻找对技术有极致追求的开发者、设计师或产品极客。",
            "join.li1": "不讲职场厚黑学，只看代码质量", "join.li2": "拥抱开源与前沿技术栈", "join.li3": "支持 Remote 与弹性工作",
            "join.btn": "发送简历与作品集",
            "footer.desc": "由热爱技术的独立团队构建与运营。", "footer.links": "关联站点 / 友情链接"
        },
        en: {
            "nav.home": "Overview", "nav.services": "Services", "nav.projects": "Projects", "nav.join": "Join Us",
            "home.title": "Building the<br>Core Engine of the Digital World.",
            "home.desc": "<strong>Aervan Studio</strong> is an independent and dedicated vanguard tech team. We turn ideas into highly available and high-performance digital products with extreme engineering standards.",
            "home.btn1": "View Projects", "home.btn2": "Join Us",
            "services.title": "Our Expertise",
            "s1.title": "Full-stack Development", "s1.desc": "From responsive web apps to cross-platform applications, we deliver top-tier UI design and frontend engineering.",
            "s2.title": "Backend Architecture", "s2.desc": "Building high-concurrency and high-availability systems. Mastery in DB optimization, API gateways, and distributed deployment.",
            "s3.title": "Cloud Native & Ops", "s3.desc": "Containerized deployment and CI/CD pipelines to make software delivery agile, secure, and smooth.",
            "projects.title": "Our Projects",
            "join.title": "Become a Vanguard.", "join.desc": "Aervan Studio is looking for developers, designers, or product geeks with extreme technical pursuits.",
            "join.li1": "Code quality over office politics", "join.li2": "Embrace open source and cutting-edge tech", "join.li3": "Remote and flexible work supported",
            "join.btn": "Send Resume & Portfolio",
            "footer.desc": "Built and operated by an independent team of tech enthusiasts.", "footer.links": "Associated Sites"
        },
        ja: {
            "nav.home": "概要", "nav.services": "サービス", "nav.projects": "プロジェクト", "nav.join": "採用情報",
            "home.title": "デジタル世界の<br>原動力を構築する。",
            "home.desc": "<strong>Aervan Studio</strong> は独立した先鋭的な技術チームです。極限のエンジニアリング基準でアイデアを高可用・高性能なデジタル製品に変えます。",
            "home.btn1": "プロジェクトを見る", "home.btn2": "一緒に働く",
            "services.title": "専門分野",
            "s1.title": "フルスタック開発", "s1.desc": "レスポンシブWebアプリからクロスプラットフォームアプリまで、高水準なUIデザインとフロントエンドエンジニアリングを提供します。",
            "s2.title": "バックエンド設計", "s2.desc": "高並行・高可用システムの構築。DB最適化、APIゲートウェイ設計、分散システム展開に精通。",
            "s3.title": "クラウドネイティブと運用", "s3.desc": "コンテナ化とCI/CDパイプラインによる、アジャイルで安全かつスムーズなソフトウェアデリバリー。",
            "projects.title": "プロジェクト",
            "join.title": "先鋭の一員になる。", "join.desc": "Aervan Studioは、技術を極める開発者、デザイナー、プロダクトギークを探しています。",
            "join.li1": "オフィス政治よりもコードの質", "join.li2": "オープンソースと最先端技術の受け入れ", "join.li3": "リモートとフレックスタイム制をサポート",
            "join.btn": "履歴書とポートフォリオを送る",
            "footer.desc": "技術を愛する独立したチームによって構築・運営されています。", "footer.links": "関連サイト"
        },
        fr: {
            "nav.home": "Aperçu", "nav.services": "Services", "nav.projects": "Projets", "nav.join": "Rejoindre",
            "home.title": "Construire le<br>Moteur du Monde Numérique.",
            "home.desc": "<strong>Aervan Studio</strong> est une équipe tech indépendante et avant-gardiste. Nous transformons vos idées en produits numériques performants avec des standards d'ingénierie extrêmes.",
            "home.btn1": "Voir les projets", "home.btn2": "Rejoindre",
            "services.title": "Notre Expertise",
            "s1.title": "Développement Full-stack", "s1.desc": "Des applications web réactives aux applications multiplateformes, nous offrons un design UI et une ingénierie frontend de haut niveau.",
            "s2.title": "Architecture Backend", "s2.desc": "Création de systèmes à haute concurrence et haute disponibilité. Maîtrise de l'optimisation des bases de données, des API et du déploiement distribué.",
            "s3.title": "Cloud Native & Ops", "s3.desc": "Déploiement conteneurisé et pipelines CI/CD pour rendre la livraison de logiciels agile, sécurisée et fluide.",
            "projects.title": "Nos Projets",
            "join.title": "Devenez un Vanguard.", "join.desc": "Aervan Studio recherche des développeurs, designers ou passionnés de produits aux exigences techniques extrêmes.",
            "join.li1": "La qualité du code avant la politique de bureau", "join.li2": "Adopter l'open source et les technologies de pointe", "join.li3": "Travail à distance et flexible soutenu",
            "join.btn": "Envoyer CV et Portfolio",
            "footer.desc": "Construit et exploité par une équipe indépendante de passionnés de technologie.", "footer.links": "Sites Associés"
        }
    };

    // ====== 2. 核心逻辑变量 ======
    let projectsData = []; 
    let currentLang = 'zh';

    // ====== 3. 渲染项目列表函数 ======
    function renderProjects(lang) {
        const container = document.getElementById('project-list-container');
        if (!projectsData.length) return;

        container.innerHTML = ''; 

        projectsData.forEach(project => {
            const statusText = project.status[lang] || project.status['en'];
            const descText = project.desc[lang] || project.desc['en'];
            const nameText = typeof project.name === 'string' 
                ? project.name 
                : (project.name[lang] || project.name['en']);

            const activeClass = project.isActive ? 'active' : '';

            const projectHTML = `
                <div class="project-item">
                    <div class="project-info">
                        <span class="project-status ${activeClass}">${statusText}</span>
                        <div>
                            <div class="project-name">${nameText}</div>
                            <div class="project-desc">${descText}</div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', projectHTML);
        });
    }

    // ====== 4. 获取 JSON 数据 (含降级备用方案) ======
    async function fetchProjects() {
        try {
            // 尝试读取外部 JSON
            const response = await fetch('projects.json');
            if (!response.ok) throw new Error('Network response was not ok');
            projectsData = await response.json();
            renderProjects(currentLang);
        } catch (error) {
            // 如果由于双击打开被浏览器拦截，则自动使用内置的备用数据
            console.warn('无法读取外部 projects.json（可能是跨域限制），已自动切换到内置备用数据。');
            renderProjects(currentLang);
        }
    }

    // ====== 5. 多语言切换逻辑 ======
    const langSelect = document.getElementById('langSelect');
    
    function changeLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (projectsData.length > 0) {
            renderProjects(lang);
        }
        
        localStorage.setItem('lang', lang);
        if(langSelect.value !== lang) langSelect.value = lang;
    }

    langSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    // ====== 6. 主题切换逻辑 ======
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            localStorage.setItem('theme', 'light');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });

    // ====== 7. SPA 切换逻辑 ======
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            if (!targetId) return;

            sections.forEach(sec => sec.classList.remove('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            document.querySelectorAll('.side-nav a').forEach(nav => nav.classList.remove('active'));
            if(this.parentElement.classList.contains('side-nav')) {
                this.classList.add('active');
            } else {
                document.querySelector(`.side-nav a[data-target="${targetId}"]`).classList.add('active');
            }

            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });

    // ====== 8. 侧边栏显隐 ======
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // ====== 9. 初始化运行 ======
    const savedLang = localStorage.getItem('lang') || 'zh';
    changeLanguage(savedLang);
    fetchProjects(); // 运行读取
});
