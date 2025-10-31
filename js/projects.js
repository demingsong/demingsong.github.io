// 项目数据 - 宋德明个人简历网站
const projectsData = [
    {
        id: "mya-cards",
        title: "集换式卡牌游戏平台",
        titleEn: "Trading Card Game Platform",
        period: "2024.01-至今",
        periodEn: "2024.01-Present",
        role: "首席架构师/技术部负责人",
        roleEn: "Chief Architect/Head of Technology",
        scenario: "教育+游戏赛道，海外+国内双规发布",
        scenarioEn: "Education + Gaming track, overseas + domestic dual release",
        metrics: [
            {
                value: "3个月",
                valueEn: "3 Months",
                label: "Web/H5上线时间",
                labelEn: "Web/H5 launch time"
            },
            {
                value: "99.95%",
                valueEn: "99.95%",
                label: "系统可用性",
                labelEn: "System availability"
            },
            {
                value: "<0.1%",
                valueEn: "<0.1%",
                label: "客诉率",
                labelEn: "Customer complaint rate"
            }
        ],
        actions: [
            "统一网关：自研 Global-API-Gateway，支持多区域就近接入 & 灰度分流",
            "卡片确权链：采用「数据库事务 + 幂等队列」实现二级确权，确权耗时 <200 ms",
            "合规加速：国内版平滑移植至阿里云，一周完成双云在线"
        ],
        actionsEn: [
            "Unified Gateway: Self-developed Global-API-Gateway supporting multi-region proximity access & gray scaling",
            "Card Ownership Chain: Using \"database transaction + idempotent queue\" for secondary ownership, <200ms confirmation time",
            "Compliance Acceleration: Domestic version smoothly migrated to Alibaba Cloud, dual-cloud online in one week"
        ],
        value: "从0到1打通「卡牌展示 → 确权 → 交换 → 争议仲裁」闭环",
        valueEn: "From 0 to 1, built a closed loop of \"card display → ownership → exchange → dispute arbitration\""
    },
    
    {
        id: "shanghai-smart-city",
        title: "城市智理时空一体化大系统",
        titleEn: "Smart City Spatial-Temporal Integration System",
        period: "2023.05 – 2023.12",
        periodEn: "2023.05 – 2023.12",
        role: "高级架构师（带 2 人预研组）",
        roleEn: "Senior Architect (leading 2-person research team)",
        scenario: "政府时空一体化底座，40+ 委办局共用",
        scenarioEn: "Government spatial-temporal integration infrastructure, shared by 40+ bureaus",
        metrics: [
            {
                value: "18h → 2h",
                valueEn: "18h → 2h",
                label: "600GB影像切片生成时间",
                labelEn: "600GB image slicing generation time"
            },
            {
                value: "<500ms",
                valueEn: "<500ms",
                label: "地图服务平均响应",
                labelEn: "Map service average response"
            },
            {
                value: "2k",
                valueEn: "2k",
                label: "并发用户无降级",
                labelEn: "Concurrent users without degradation"
            }
        ],
        actions: [
            "架构选型：GeoScene + 3D瓦片 + MinIO对象存储，采用「金字塔分层 + 边缘缓存」策略",
            "可研方案：主导编写《上海市城市智理时空一体化大系统可研报告》草案"
        ],
        actionsEn: [
            "Architecture selection: GeoScene + 3D tiles + MinIO object storage, using \"pyramid layering + edge caching\" strategy",
            "Feasibility study: Led writing of \"Shanghai Smart City Spatial-Temporal Integration System Feasibility Report\" draft"
        ],
        value: "项目通过市发改委「可研」评审，拿到 4k万建设指标",
        valueEn: "Project passed municipal development and reform commission \"feasibility\" review, secured 40M construction target"
    },
    
    {
        id: "iot-platform",
        title: "智慧物联网平台（燃气物联网）",
        titleEn: "Smart IoT Platform (Gas IoT)",
        period: "2020.05 – 2023.05",
        periodEn: "2020.05 – 2023.05",
        role: "高级技术经理（带 6 人）",
        roleEn: "Senior Technical Manager (leading 6 people)",
        scenario: "集团下属燃气公司所有燃气表/报警器上云",
        scenarioEn: "All gas meters/alarms of subsidiary gas companies in the group go to cloud",
        metrics: [
            {
                value: "1k→1w",
                valueEn: "1k→1w",
                label: "峰值QPS提升（10倍）",
                labelEn: "Peak QPS improvement (10x)"
            },
            {
                value: "200万台",
                valueEn: "200w",
                label: "已接入物联网燃气表",
                labelEn: "Connected IoT gas meters"
            },
            {
                value: "30万台",
                valueEn: "30w",
                label: "已接入报警器",
                labelEn: "Connected alarms"
            }
        ],
        actions: [
            "自研百万级长连接网关（Netty + MQTT），单节点50w设备，横向扩展5节点",
            "采用「按号段分片 + 一致性 Hash」解决海量上下行消息乱序问题，消息乱序率 <0.01%"
        ],
        actionsEn: [
            "Self-developed million-level long connection gateway (Netty + MQTT), 500k devices per node, horizontally scaled to 5 nodes",
            "Using \"segment-based sharding + consistent hash\" to solve massive upstream/downstream message ordering issues, message disorder rate <0.01%"
        ],
        value: "平台成为集团「智慧厨房」战略底座，后续智能灶具等直接复用，节省重复投入",
        valueEn: "Platform became group's \"Smart Kitchen\" strategic infrastructure, subsequent smart stoves directly reused, saving duplicate investment"
    },
    
    {
        id: "hanwei-mall",
        title: "社交新零售线上商城",
        titleEn: "Social New Retail Online Mall",
        period: "2018.07 – 2020.05",
        periodEn: "2018.07 – 2020.05",
        role: "高级研发经理（带 6 人）",
        roleEn: "Senior R&D Manager (leading 6 people)",
        scenario: "社交裂变 + 电商自营",
        scenarioEn: "Social fission + e-commerce self-operation",
        metrics: [
            {
                value: "2000→3000万",
                valueEn: "2000→3000w",
                label: "10个月GMV增长",
                labelEn: "10-month GMV growth"
            },
            {
                value: "0.8万",
                valueEn: "0.8w",
                label: "大促峰值QPS",
                labelEn: "Peak QPS during promotion"
            },
            {
                value: "<200ms",
                valueEn: "<200ms",
                label: "核心接口P99延迟",
                labelEn: "Core interface P99 latency"
            }
        ],
        actions: [
            "中台拆分：商品、订单、库存、营销4大中心，Spring + MyBatis-Plus + ShardingSphere",
            "成本优化：数据库冷热分表 + 图片转 WebP"
        ],
        actionsEn: [
            "Middleware split: 4 major centers - product, order, inventory, marketing, Spring + MyBatis-Plus + ShardingSphere",
            "Cost optimization: database cold-hot partitioning + image to WebP conversion"
        ],
        value: "商城升级后助力集团直销业绩提升27%",
        valueEn: "After mall upgrade, helped group direct sales performance improve by 27%"
    },
    
    {
        id: "feifan-ad",
        title: "广告投放平台",
        titleEn: "Advertising Platform",
        period: "2016.04 – 2018.06",
        periodEn: "2016.04 – 2018.06",
        role: "广告研发组 组长（带 10 人）",
        roleEn: "Advertising R&D Group Leader (leading 10 people)",
        scenario: "自有 App 流量变现 + 站外 DSP 对接",
        scenarioEn: "Own app traffic monetization + external DSP integration",
        metrics: [
            {
                value: "600万",
                valueEn: "600w",
                label: "日均请求",
                labelEn: "Daily requests"
            },
            {
                value: "99.2%",
                valueEn: "99.2%",
                label: "填充率",
                labelEn: "Fill rate"
            },
            {
                value: "25%",
                value: "25%",
                label: "CPM提升",
                labelEn: "CPM improvement"
            }
        ],
        actions: [
            "引入微服务：Dubbo + Zookeeper，核心接口扩容时间从 2h 降到 10 min",
            "实时风控：Flink CEP规则引擎，恶意点击识别准确率98%"
        ],
        actionsEn: [
            "Introduced microservices: Dubbo + Zookeeper, core interface scaling time reduced from 2h to 10 min",
            "Real-time risk control: Flink CEP rule engine, malicious click recognition accuracy 98%"
        ],
        value: "平台成为集团年度「创新金奖」项目，后续对接兄弟业态流量",
        valueEn: "Platform became group's annual \"Innovation Gold Award\" project, subsequent integration with sibling business traffic"
    },
    
    {
        id: "suning-ad",
        title: "聚客宝（站内广告子产品）",
        titleEn: "JukeBao (In-site Advertising Sub-product)",
        period: "2015.03 – 2016.04",
        periodEn: "2015.03 – 2016.04",
        role: "技术经理（带 2 人）",
        roleEn: "Technical Manager (leading 2 people)",
        scenario: "电商大促广告投放",
        scenarioEn: "E-commerce promotion advertising",
        metrics: [
            {
                value: "2000万",
                valueEn: "2000w",
                label: "双11当天PV",
                labelEn: "Double 11 daily PV"
            },
            {
                value: "78%",
                valueEn: "78%",
                label: "系统负载峰值",
                labelEn: "System load peak"
            },
            {
                value: "0.3%→0.08%",
                valueEn: "0.3%→0.08%",
                label: "缺陷率下降",
                labelEn: "Defect rate reduction"
            }
        ],
        actions: [
            "重构：拆除15个祖传DAO工具类，缺陷率由 0.3% 降到 0.08%",
            "资金结算：引入「批量 + 事务分段」方案，单日3000万资金对账 10 min 内完成"
        ],
        actionsEn: [
            "Refactoring: Removed 15 legacy DAO utility classes, defect rate reduced from 0.3% to 0.08%",
            "Fund settlement: Introduced \"batch + transaction segmentation\" solution, 30M daily fund reconciliation completed within 10 min"
        ],
        value: "保障 618、双 11、双旦 3 场大促，广告收入同比增长 20%",
        valueEn: "Secured 3 major promotions (618, Double 11, New Year), advertising revenue increased 20% year-over-year"
    },
    
    {
        id: "env-monitoring-exam",
        title: "环境监测人员持证上岗考试系统",
        titleEn: "Environmental Monitoring Personnel Certification Examination System",
        period: "2014.08 – 2015.03",
        periodEn: "2014.08 – 2015.03",
        role: "研发经理（带 10 人）",
        roleEn: "R&D Manager (leading 10 people)",
        scenario: "政府垂直行业 SaaS（考试全流程）",
        scenarioEn: "Government vertical industry SaaS (full exam process)",
        metrics: [
            {
                value: "10省市",
                valueEn: "10 Provinces",
                label: "同时在线考试，单场3000人",
                labelEn: "Simultaneous online exams, 3000 people per session"
            },
            {
                value: "5min→15s",
                valueEn: "5min→15s",
                label: "证书自动生成耗时",
                labelEn: "Certificate auto-generation time"
            },
            {
                value: "<3%",
                valueEn: "<3%",
                label: "相邻考生重复率",
                labelEn: "Adjacent candidate repetition rate"
            }
        ],
        actions: [
            "题库随机算法：基于「知识点覆盖率 + 难度系数」双重权重，确保相邻考生重复率 < 3%",
            "加密防作弊：PDF 证书加水印 + 二维码在线验真，仿制难度提升 95%"
        ],
        actionsEn: [
            "Question bank random algorithm: Based on \"knowledge point coverage + difficulty coefficient\" dual weights, ensuring adjacent candidate repetition rate < 3%",
            "Anti-cheating encryption: PDF certificate watermarking + QR code online verification, counterfeiting difficulty increased by 95%"
        ],
        value: "产品化后 1 年内新增 5 省市采购，为公司带来 500 万营收",
        valueEn: "After productization, 5 new provinces/cities purchased within 1 year, bringing 5M revenue to the company"
    },
    
    {
        id: "guizhou-land-supervision",
        title: "省国土资源执法监察管理系统",
        titleEn: "Provincial Land Resources Law Enforcement Management System",
        period: "2013.05 – 2014.05",
        periodEn: "2013.05 – 2014.05",
        role: "研发经理（带 5 人）",
        roleEn: "R&D Manager (leading 5 people)",
        scenario: "省级国土执法巡查",
        scenarioEn: "Provincial land law enforcement inspection",
        scenarioDetail: "基于贵州省国土资源一张图以及第二代OA办公平台，充分利用地理信息、位置导航、移动通讯、云服务等技术，实现全省土地违法、矿产违法、地质灾害的快速发现、准确定位，提高国土资源巡查效率和执法监察水平。",
        scenarioDetailEn: "Based on Guizhou Province Land Resources One Map and second-generation OA office platform, fully utilizing geographic information, location navigation, mobile communications, cloud services and other technologies to achieve rapid discovery and accurate positioning of land violations, mineral violations, and geological disasters across the province, improving land resources inspection efficiency and law enforcement supervision level.",
        metrics: [
            {
                value: "9地市88县",
                valueEn: "9 Cities 88 Counties",
                label: "覆盖范围，巡查上报时间由3天缩到2小时",
                labelEn: "Coverage of 9 cities and 88 counties, inspection reporting time reduced from 3 days to 2 hours"
            },
            {
                value: "200图层",
                valueEn: "200 Layers",
                label: "离线移动端支持最多图层数，野外0信号仍可流畅看图",
                labelEn: "Offline mobile supports up to 200 layers, smooth map viewing in 0-signal wilderness"
            },
            {
                value: "1m",
                valueEn: "1m",
                label: "北斗定位精度，帮助执法队员现场取证",
                labelEn: "Beidou positioning accuracy, helping law enforcement officers collect evidence on-site"
            }
        ],
        actions: [
            "离线切片：ArcGIS 切片包 → SQLite 压缩，平均 50 MB/县",
            "北斗定位：结合差分基站，定位精度 1 m，帮助执法队员现场取证"
        ],
        actionsEn: [
            "Offline slicing: ArcGIS tile package → SQLite compression, average 50 MB/county",
            "Beidou positioning: Combined with differential base station, 1m positioning accuracy, helping law enforcement officers collect evidence on-site"
        ],
        value: "项目通过省国土资源部验收，后续推广到省内多个地市",
        valueEn: "Project passed provincial land resources department acceptance, subsequently promoted to multiple cities within the province"
    },
    
    {
        id: "unicom-ucloud",
        title: "U-Cloud 地理信息服务平台",
        titleEn: "U-Cloud Geographic Information Service Platform",
        period: "2011.10 – 2013.05",
        periodEn: "2011.10 – 2013.05",
        role: "高级软件工程师",
        roleEn: "Senior Software Engineer",
        scenario: "运营商位置服务基础平台",
        scenarioEn: "Operator location service infrastructure platform",
        metrics: [
            {
                value: "31省市",
                valueEn: "31 Provinces",
                label: "联通位置能力调用，日均约2000万次，可用性99.9%",
                labelEn: "Unicom location capability calls across 31 provinces/cities, ~20M daily calls, 99.9% availability"
            },
            {
                value: "98%",
                valueEn: "98%",
                label: "瓦片命中率，回源流量下降80%",
                labelEn: "Tile hit rate, backsource traffic reduced by 80%"
            },
            {
                value: "99.9%",
                valueEn: "99.9%",
                label: "平台可用性",
                labelEn: "Platform availability"
            }
        ],
        actions: [
            "地图瓦片预生成 + CDN 边缘缓存，瓦片命中率 98%，回源流量下降 80%"
        ],
        actionsEn: [
            "Map tile pre-generation + CDN edge caching, 98% tile hit rate, backsource traffic reduced by 80%"
        ],
        value: "平台成为联通集团「位置基地」核心系统，后续为内部其他应用提供LBS接口",
        valueEn: "Platform became Unicom Group's \"Location Base\" core system, subsequently providing LBS interfaces for other internal applications"
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}