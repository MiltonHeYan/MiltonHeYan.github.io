document.addEventListener('DOMContentLoaded', function() {
    // 获取浏览器语言
    const userLang = navigator.language || navigator.userLanguage;
    const isEnglish = !userLang.toLowerCase().startsWith('zh');

    // 所有需要翻译的文本
    const translations = {
        'zh': {
            // 导航栏
            'home': '首页',
            'projects': '项目',
            'academic': '学术',
            'awards': '奖项',
            'gallery': '相册',
            'videos': '视频',
            // 首页预览标题
            'recent_projects': '最近项目',
            'latest_research': '最新研究',
            'life_moments': '生活点滴',
            'view_more_projects': '查看更多项目',
            'learn_more': '了解更多',
            'view_more_photos': '浏览更多照片',
            'contact': '联系方式',
            'wechat': '微信',
            'email': '邮箱',
            'intro_line1': 'Hello World, 我是Milton严訸，核速径影的CEO',
            'intro_line2': '开发了一些软件，发表过一些文章',
            'intro_line3': '你也可以在这个网站上看看我工作生活的照片和视频。',
            // 项目页面
            'zhizhi_title': '知之 (ZhiZhi)',
            'zhizhi_desc': '打开一个课件或者一篇论文，每翻到新的一页，就会一脸问号，太多的陌生学术词汇，看着十分艰难，这时候如果有个陪读老师给你用一分钟时间讲解一下每一页，文件就会很容易理解了。知之 Zhizhi提供多个行业的人工智能专家，在新文件的每个页面右上角等待着您，为您生成AI播客解读当页内容！',
            'keting_title': '可听',
            'keting_desc': 'AI驱动的播客生成工具，多种大模型支持的AI主持人可供选择，将任何文件内容转化为精品AI播客，并且帮助用户随时随地收听高质量的学术与专业知识。支持后台播放、锁屏显示和灵动岛显示等功能。',
            'glowi_title': 'Glowi',
            'glowi_desc': '你的终极灯光应用。Glowi 专为帮助你在自拍中闪耀、完善美食照片、创造完美视觉效果而设计。支持智能亮度控制以增强自然肤色，快速屏幕亮度调节实现随时完美，手势控制实现轻松亮度调整。具备精确的 RGB 调节以找到完美的灯光效果，实时颜色预览以匹配每个心情和时刻，支持十六进制颜色代码，智能文本颜色匹配保持整体视觉和谐。',
            'meepai_title': 'Meep.ai',
            'meepai_desc': '一款基于地图的社交应用，通过深度学习算法推荐附近的用户并在地图上显示。采用"Group by Group"和"Club by Club"的方式促进线上成长，确保小范围内有足够密集的用户群体，同时保持用户之间的互信和基本了解。支持俱乐部成员和高质量社群成员线下见面和面对面交流。',
            'smarton_title': 'Smarton Technology',
            'smarton_subtitle': 'Power Supply EDA Software Platform',
            'smarton_desc': '专业的电源设计自动化软件平台，致力于提供智能化的电源设计解决方案。',
            'zhizhi_preview': 'AI陪读专家，让学习更轻松',
            'keting_preview': 'AI播客生成工具',
            'glowi_preview': '智能灯光控制应用'
        },
        'en': {
            // 导航栏
            'home': 'Home',
            'projects': 'Projects',
            'academic': 'Academic',
            'awards': 'Awards',
            'gallery': 'Gallery',
            'videos': 'Videos',
            // 首页预览标题
            'recent_projects': 'Recent Projects',
            'latest_research': 'Latest Research',
            'life_moments': 'Life Moments',
            'view_more_projects': 'View More Projects',
            'learn_more': 'Learn More',
            'view_more_photos': 'View More Photos',
            'contact': 'Contact',
            'wechat': 'WeChat',
            'email': 'Email',
            'intro_line1': "Hello World, I'm Milton, the CEO@CoreSpeed",
            'intro_line2': 'developed some software, published several articles',
            'intro_line3': 'and you can also explore photos and videos of my life.',
            // 项目页面
            'zhizhi_title': 'ZhiZhi',
            'zhizhi_desc': 'When opening a lecture slide or academic paper, each new page can be overwhelming with unfamiliar academic terms, making comprehension challenging. Imagine having a tutor who could explain each page to you in just one minute - that would make the content much easier to understand! ZhiZhi offers AI experts from various fields, waiting in the top-right corner of each new page, ready to generate AI podcast explanations of the content for you!',
            'keting_title': 'KeTing (Listening)',
            'keting_desc': 'An AI-driven podcast generation tool featuring multiple AI hosts powered by large language models. Convert any content into high-quality AI podcasts, enabling users to listen to academic and professional knowledge anytime, anywhere. Supports background playback, lock screen display, and Dynamic Island features.',
            'glowi_title': 'Glowi',
            'glowi_desc': 'Your ultimate lighting app. Glowi is designed to help you shine in selfies, perfect food photography, and create stunning visual effects. Features smart brightness control for enhanced natural skin tones, quick screen brightness adjustment for instant perfection, and gesture control for easy brightness adjustments. Includes precise RGB adjustment for perfect lighting effects, real-time color preview to match every mood and moment, supports hex color codes, and smart text color matching for visual harmony.',
            'meepai_title': 'Meep.ai',
            'meepai_desc': 'A map-based social networking app that uses deep learning algorithms to recommend nearby users and display them on the map. Promotes online growth through a "Group by Group" and "Club by Club" approach, ensuring dense user communities within small areas while maintaining trust and basic understanding between users. Supports offline meetups and face-to-face interactions for club members and high-quality community members.',
            'smarton_title': 'Smarton Technology',
            'smarton_subtitle': 'Power Supply EDA Software Platform',
            'smarton_desc': 'A professional power supply design automation software platform dedicated to providing intelligent power design solutions.',
            'zhizhi_preview': 'AI Study Companion, Making Learning Easier',
            'keting_preview': 'AI Podcast Generation Tool',
            'glowi_preview': 'Smart Lighting Control App'
        }
    };

    // 选择语言
    const lang = isEnglish ? 'en' : 'zh';
    const items = translations[lang];

    // 导航栏 HTML
    const navHTML = `
        <nav>
            <div class="nav-brand">
                <img src="images/heyanprofile.jpg" alt="Milton He Yan" class="nav-avatar">
                <span class="nav-name">He (Milton) Yan</span>
            </div>
            <div class="hamburger-menu">☰</div>
            <ul>
                <li><a href="index.html">${items.home}</a></li>
                <li><a href="projects.html">${items.projects}</a></li>
                <li><a href="academic.html">${items.academic}</a></li>
                <li><a href="awards.html">${items.awards}</a></li>
                <li><a href="gallery.html">${items.gallery}</a></li>
                <li><a href="videos.html">${items.videos}</a></li>
            </ul>
        </nav>
    `;

    // 插入导航栏
    document.querySelector('header').innerHTML = navHTML;
    
    // 初始化汉堡菜单功能
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 高亮当前页面对应的导航项
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelector(`nav ul li a[href="${currentPage}"]`)?.parentElement.classList.add('active');

    // 设置页面语言
    document.documentElement.lang = lang;

    // 如果是首页或项目页面，翻译内容
    if (currentPage === 'index.html' || currentPage === '' || currentPage === 'projects.html') {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (items[key]) {
                element.textContent = items[key];
            }
        });

        // 更新链接文本
        document.querySelectorAll('[data-translate-href]').forEach(element => {
            const key = element.getAttribute('data-translate-href');
            if (items[key]) {
                element.textContent = items[key] + ' →';
            }
        });
    }
}); 