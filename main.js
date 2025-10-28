// 全局变量
let particles = [];
let particleSystem;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initParticleBackground();
    initHeroAnimations();
    initSkillsRadar();
    initProjectCarousel();
    initScrollAnimations();
    initCounterAnimations();
    initMobileMenu();
    initSmoothScrolling();
});

// 粒子背景系统
function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    // p5.js sketch
    new p5(function(p) {
        let particles = [];
        const numParticles = 100;
        
        p.setup = function() {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent('particle-canvas');
            
            // 创建粒子
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 4),
                    opacity: p.random(0.3, 0.8)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // 更新和绘制粒子
            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 边界检测
                if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;
                
                // 绘制粒子
                p.fill(255, 255, 255, particle.opacity * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // 绘制连接线
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const distance = p.dist(particle.x, particle.y, other.x, other.y);
                    
                    if (distance < 100) {
                        const alpha = p.map(distance, 0, 100, 0.3, 0);
                        p.stroke(255, 255, 255, alpha * 255);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    });
}

// 英雄区域动画
function initHeroAnimations() {
    // 标题动画
    anime({
        targets: '#hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
    });
    
    // 副标题动画
    anime({
        targets: '#hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 800,
        easing: 'easeOutExpo'
    });
    
    // 描述动画
    anime({
        targets: '#hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1100,
        easing: 'easeOutExpo'
    });
    
    // 统计动画
    anime({
        targets: '#hero-stats',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1400,
        easing: 'easeOutExpo'
    });
    
    // 按钮动画
    anime({
        targets: '#hero-buttons',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1700,
        easing: 'easeOutExpo'
    });
    
    // 图片动画
    anime({
        targets: '#hero-image',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        delay: 2000,
        easing: 'easeOutExpo'
    });
}

// 技能雷达图
function initSkillsRadar() {
    const chartDom = document.getElementById('skills-radar');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
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

// 项目轮播
function initProjectCarousel() {
    const carousel = document.getElementById('projects-carousel');
    if (!carousel) return;
    
    new Splide('#projects-carousel', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
                gap: '1rem'
            }
        }
    }).mount();
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.section-reveal').forEach(el => {
        observer.observe(el);
    });
}

// 数字计数动画
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.count);
                
                anime({
                    targets: { value: 0 },
                    value: finalValue,
                    duration: 2000,
                    easing: 'easeOutExpo',
                    update: function(anim) {
                        target.textContent = Math.round(anim.animatables[0].target.value);
                    }
                });
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// 移动端菜单
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        // 这里可以添加移动端菜单的展开/收起逻辑
        alert('移动端菜单功能开发中...');
    });
}

// 平滑滚动
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 技能卡片悬停效果
function initSkillCardHover() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// 项目卡片悬停效果
function initProjectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// 技术标签悬停效果
function initTechTagHover() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        tag.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
}

// 导航链接活跃状态
function initNavActiveState() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 页面加载完成后的额外初始化
window.addEventListener('load', function() {
    initSkillCardHover();
    initProjectCardHover();
    initTechTagHover();
    initNavActiveState();
    
    // 隐藏加载动画（如果有的话）
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// 窗口大小改变时的处理
window.addEventListener('resize', function() {
    // 重新计算粒子系统
    if (typeof particleSystem !== 'undefined') {
        particleSystem.resize();
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}