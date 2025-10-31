// 主逻辑 - 宋德明个人简历网站

// 全局变量
let currentLang = 'zh';
let isCounting = false;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 应用初始化
function initializeApp() {
    // 初始化Lucide图标
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // 初始化国际化
    initializeI18n();
    
    // 初始化项目展示
    initializeProjects(currentLang);
    
    // 初始化滚动动画
    initializeScrollAnimations();
    
    // 初始化数字计数
    initializeCounters();
    
    // 初始化导航
    initializeNavigation();
    
    // 初始化移动端菜单
    initializeMobileMenu();
    
    // 初始化语言切换
    initializeLanguageToggle();
    
    // 初始化首页按钮导航
    initializeHeroButtons();
    
    // 初始化滚动监听
    initializeScrollListener();
    
    // 初始化雷达图
    initSkillsRadar();
}

// 国际化功能
function initializeI18n() {
    // 检查本地存储的语言偏好
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && i18nData[savedLang]) {
        currentLang = savedLang;
    } else {
        // 检测浏览器语言
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    // 应用语言
    applyLanguage(currentLang);
    
    // 更新语言切换器显示
    updateLanguageDisplay();
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(i18nData[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新项目内容
    updateProjectsLanguage(lang);
    
    // 更新语言切换器状态
    updateLanguageToggleState(lang);
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

function updateLanguageDisplay() {
    const currentLangElement = document.getElementById('current-language');
    if (currentLangElement) {
        const key = currentLangElement.getAttribute('data-i18n');
        const translation = getNestedTranslation(i18nData[currentLang], key);
        if (translation) {
            currentLangElement.textContent = translation;
        }
    }
}

function updateLanguageToggleState(lang) {
    const currentLangElement = document.getElementById('current-language');
    if (currentLangElement) {
        const key = currentLangElement.getAttribute('data-i18n');
        const translation = getNestedTranslation(i18nData[lang], key);
        if (translation) {
            currentLangElement.textContent = translation;
        }
    }
}

function updateProjectsLanguage(lang) {
    // 确保currentLang已更新
    currentLang = lang;
    
    // 重新生成项目卡片以确保完全更新
    initializeProjects(lang);
    
    // 强制刷新DOM，确保项目卡片可见
    setTimeout(() => {
        const projectCards = document.querySelectorAll('#projects-grid .project-card');
        projectCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.classList.add('active');
        });
    }, 50);
    
    // 如果有打开的项目详情弹窗，也需要更新
    const modal = document.getElementById('project-modal');
    if (modal) {
        updateProjectModalLanguage(lang);
    }
}

function updateProjectModalLanguage(lang) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // 获取当前项目ID
    const projectTitleElement = modal.querySelector('.project-modal-title');
    if (!projectTitleElement) return;
    
    const projectTitle = projectTitleElement.textContent;
    // 查找对应的项目数据 - 使用传入的lang参数
    const project = projectsData.find(p => 
        (lang === 'zh' ? p.title : p.titleEn) === projectTitle
    );
    
    if (!project) return;
    
    const isZh = lang === 'zh';
    
    // 更新项目标题
    projectTitleElement.textContent = isZh ? project.title : project.titleEn;
    
    // 更新角色
    const roleElement = modal.querySelector('.project-modal-role');
    if (roleElement) {
        roleElement.textContent = isZh ? project.role : project.roleEn;
    }
    
    // 更新时间
    const periodElement = modal.querySelector('.project-modal-period');
    if (periodElement) {
        periodElement.textContent = isZh ? project.period : project.periodEn;
    }
    
    // 更新业务场景
    const scenarioElement = modal.querySelector('.project-modal-scenario');
    if (scenarioElement) {
        scenarioElement.textContent = isZh ? project.scenario : project.scenarioEn;
    }
    
    // 更新峰值数据标签
    const metricElements = modal.querySelectorAll('.project-modal-metrics .text-sm');
    metricElements.forEach((element, index) => {
        if (project.metrics[index]) {
            element.textContent = isZh ? project.metrics[index].label : project.metrics[index].labelEn;
        }
    });
    
    // 更新技术动作
    const actionElements = modal.querySelectorAll('.project-modal-actions li span');
    const actions = isZh ? project.actions : project.actionsEn;
    actionElements.forEach((element, index) => {
        if (actions[index]) {
            element.textContent = actions[index];
        }
    });
    
    // 更新业务价值
    const valueElement = modal.querySelector('.project-modal-value');
    if (valueElement) {
        valueElement.textContent = isZh ? project.value : project.valueEn;
    }
}

// 项目展示初始化
function initializeProjects(lang = 'zh') {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    // 清空现有项目
    projectsGrid.innerHTML = '';
    
    // 生成项目卡片
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index, lang);
        projectsGrid.appendChild(projectCard);
        
        // 立即添加active类，确保卡片可见
        projectCard.classList.add('active');
    });
    
    // 重新初始化滚动动画观察器
    setTimeout(() => {
        initializeScrollAnimations();
    }, 100);
}

function createProjectCard(project, index, lang = 'zh') {
    const card = document.createElement('div');
    card.className = 'project-card card-hover reveal';
    card.style.animationDelay = `${index * 100}ms`;
    
    const isZh = lang === 'zh';
    
    card.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <h3 class="project-title text-2xl font-display font-semibold text-primary-500 flex-1">
                ${isZh ? project.title : project.titleEn}
            </h3>
            <span class="time-badge">
                ${isZh ? project.period : project.periodEn}
            </span>
        </div>
        
        <div class="role-tag">
            <i data-lucide="user" class="w-4 h-4"></i>
            <span data-i18n="projects.role">${isZh ? "角色" : "Role"}</span>：${isZh ? project.role : project.roleEn}
        </div>
        
        <div class="mt-6">
            <button class="view-details-btn w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" data-project-id="${project.id}">
                <i data-lucide="eye" class="w-4 h-4 inline mr-2"></i>
                <span data-i18n="projects.viewDetails">${isZh ? "查看详情" : "View Details"}</span>
            </button>
        </div>
    `;
    
    // 添加查看详情按钮事件监听
    const viewBtn = card.querySelector('.view-details-btn');
    viewBtn.addEventListener('click', () => {
        showProjectModal(project);
    });
    
    // 重新初始化图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 0);
    
    return card;
}

// 滚动动画初始化
function initializeScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// 数字计数动画初始化
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isCounting) {
                isCounting = true;
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1000;
        const start = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用easeOut缓动函数
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        // 延迟启动计数动画
        setTimeout(() => {
            requestAnimationFrame(updateCounter);
        }, index * 200);
    });
}

// 导航功能初始化
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 更新活跃状态
                updateActiveNavLink(this);
                
                // 关闭移动端菜单
                closeMobileMenu();
            }
        });
    });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-primary-500');
        link.classList.add('text-neutral-700');
    });
    
    activeLink.classList.remove('text-neutral-700');
    activeLink.classList.add('text-primary-500');
}

// 移动端菜单初始化
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // 切换图标
            const icon = this.querySelector('[data-lucide]');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            
            // 重新初始化图标
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        
        // 重置菜单图标
        const menuToggle = document.getElementById('mobile-menu-toggle');
        if (menuToggle) {
            const icon = menuToggle.querySelector('[data-lucide]');
            icon.setAttribute('data-lucide', 'menu');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }
}

// 首页按钮导航初始化
function initializeHeroButtons() {
    // 由于已经移除了Hero section，这里不再需要初始化按钮功能
    // 保留函数以防将来需要
}

// 语言切换初始化
function initializeLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    
    if (languageToggle) {
        // 点击切换语言
        languageToggle.addEventListener('click', function() {
            const selectedLang = currentLang === 'zh' ? 'en' : 'zh';
            currentLang = selectedLang;
            localStorage.setItem('preferred-language', selectedLang);
            applyLanguage(selectedLang);
            updateLanguageDisplay();
            updateLanguageToggleState(selectedLang);
        });
    }
}

// 滚动监听
function initializeScrollListener() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        // 更新导航活跃状态
        updateActiveNavOnScroll();
    });
}

function updateActiveNavOnScroll() {
    const sections = ['about', 'core-skills', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-primary-500');
        link.classList.add('text-neutral-700');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.remove('text-neutral-700');
            link.classList.add('text-primary-500');
        }
    });
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 性能优化：使用节流优化滚动事件
window.addEventListener('scroll', throttle(function() {
    // 滚动相关处理已在initializeScrollListener中处理
}, 16));

// 导出主要函数供外部使用
window.SongDemingResume = {
    initializeApp,
    applyLanguage,
    initializeProjects,
    updateProjectsLanguage
};

// 项目弹窗功能
function showProjectModal(project) {
    const isZh = currentLang === 'zh';
    
    // 创建弹窗HTML
    const modalHTML = `
        <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div class="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
                <div class="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
                    <h2 class="text-2xl font-display font-bold text-neutral-900 project-modal-title">
                        ${isZh ? project.title : project.titleEn}
                    </h2>
                    <button id="close-modal" class="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200">
                        <i data-lucide="x" class="w-6 h-6 text-neutral-500"></i>
                    </button>
                </div>
                
                <div class="p-6 space-y-8">
                    <!-- 基本信息 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900 mb-3" data-i18n="projects.role">${isZh ? "角色" : "Role"}</h3>
                            <p class="text-neutral-700 project-modal-role">${isZh ? project.role : project.roleEn}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900 mb-3" data-i18n="projects.period">${isZh ? "时间" : "Period"}</h3>
                            <p class="text-neutral-700 project-modal-period">${isZh ? project.period : project.periodEn}</p>
                        </div>
                    </div>
                    
                    <!-- 业务场景 -->
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-3" data-i18n="projects.scenario">${isZh ? "业务场景" : "Scenario"}</h3>
                        <p class="text-neutral-700 leading-relaxed project-modal-scenario">${isZh ? project.scenario : project.scenarioEn}</p>
                    </div>
                    
                    <!-- 峰值数据 -->
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-4" data-i18n="projects.metrics">${isZh ? "峰值数据" : "Metrics"}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 project-modal-metrics">
                            ${project.metrics.map(metric => `
                                <div class="bg-neutral-50 rounded-lg p-4">
                                    <div class="text-2xl font-bold text-primary-500 mb-1">${isZh ? metric.value : metric.valueEn}</div>
                                    <div class="text-sm text-neutral-600">${isZh ? metric.label : metric.labelEn}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 技术动作 -->
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900 mb-4" data-i18n="projects.actions">${isZh ? "技术动作" : "Actions"}</h3>
                        <ul class="space-y-3 project-modal-actions">
                            ${(isZh ? project.actions : project.actionsEn).map(action => `
                                <li class="flex items-start space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span class="text-neutral-700 leading-relaxed">${action}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <!-- 业务价值 -->
                    <div class="bg-success bg-opacity-10 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-success mb-3" data-i18n="projects.value">${isZh ? "业务价值" : "Value"}</h3>
                        <p class="text-neutral-700 leading-relaxed project-modal-value">${isZh ? project.value : project.valueEn}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // 添加弹窗到页面
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 初始化弹窗图标
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 0);
    
    // 添加关闭事件
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // 点击关闭按钮关闭弹窗
    closeBtn.addEventListener('click', hideProjectModal);
    
    // 点击背景关闭弹窗
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideProjectModal();
        }
    });
    
    // ESC键关闭弹窗
    const handleEsc = (e) => {
        if (e.key === 'Escape') {
            hideProjectModal();
            document.removeEventListener('keydown', handleEsc);
        }
    };
    document.addEventListener('keydown', handleEsc);
    
    // 阻止背景滚动
    document.body.style.overflow = 'hidden';
}

function hideProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.remove();
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// 技能雷达图
function initSkillsRadar() {
    const chartDom = document.getElementById('skills-radar');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    const isZh = currentLang === 'zh';
    
    i18nData
    
    const option = {
        title: {
            text: '技术能力评估',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        radar: {
            indicator: [
                { name: 'Java开发', max: 100 },
                { name: '架构设计', max: 100 },
                { name: '团队管理', max: 100 },
                { name: '高并发', max: 100 },
                { name: '微服务', max: 100 },
                { name: '云计算', max: 100 },
                { name: 'GIS技术', max: 100 },
                { name: '物联网', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 5,
            axisName: {
                color: '#666',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(0, 212, 255, 0.1)', 'rgba(0, 212, 255, 0.05)']
                }
            }
        },
        series: [{
            name: '技能水平',
            type: 'radar',
            data: [{
                value: [95, 90, 85, 90, 88, 82, 80, 85],
                name: '技术能力',
                areaStyle: {
                    color: 'rgba(0, 212, 255, 0.3)'
                },
                lineStyle: {
                    color: '#00d4ff',
                    width: 2
                },
                itemStyle: {
                    color: '#00d4ff'
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}