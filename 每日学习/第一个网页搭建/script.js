// ==========================================================================
// 📦 1. 作业数据清单（以后写了新作业，只在这里加 {} 即可）
// ==========================================================================
const myHtmlLessons = [
    {
        title: "01. HTML 列表基础练习",
        date: "2026-06-18",
        description: "学习了无序列表 <ul> 和有序列表 <ol>，掌握了最基础的排版标签。",
        link: "lesson1.html" // 指向同目录下的作业文件
    },
    {
        title: "02. HTML 表单与用户输入",
        date: "2026-06-20",
        description: "练习了 input 的各种类型（文本、密码、按钮），实现了基础表单。",
        link: "#" // 先用 # 占位，写好了可以换成对应的文件名
    }
];

// ==========================================================================
// 🤖 2. 动态生成作业卡片的逻辑
// ==========================================================================
function renderLessons() {
    const container = document.getElementById('cards-container');
    
    // 如果当前页面没有检测到 'cards-container'（比如在大首页 index.html 上），就跳过不执行
    if (!container) return; 

    container.innerHTML = ""; // 清空架子

    // 循环清单数据，组装成 HTML 塞进页面
    myHtmlLessons.forEach(lesson => {
        const cardHTML = `
            <a href="${lesson.link}" class="card-wrapper">
                <div class="study-card">
                    <div class="card-header">
                        <span class="card-date">${lesson.date}</span>
                    </div>
                    <h3>${lesson.title}</h3>
                    <p>${lesson.description}</p>
                </div>
            </a>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================================================
// ⚡ 3. 动态时间刷新逻辑
// ==========================================================================
function showTime() {
    const now = new Date();
    
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateText = now.toLocaleDateString('zh-CN', dateOptions);
    const timeText = now.toLocaleTimeString('zh-CN', { hour12: false });

    // 检查页面上有没有对应 id 标签，有的话就写入时间
    const dateEl = document.getElementById('current-date');
    const timeEl = document.getElementById('current-time');
    
    if (dateEl && timeEl) {
        dateEl.innerText = dateText;
        timeEl.innerText = timeText;
    }
}

// ==========================================================================
// 🔘 4. 点赞小按钮交互
// ==========================================================================
let likes = 0;
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
        likes++;
        likeCount.innerText = likes;
    });
}

// ==========================================================================
// 🚀 5. 页面加载完毕，立刻启动程序
// ==========================================================================
setInterval(showTime, 1000); // 启动每秒时间刷新
showTime();                  // 立即显示时间，不留 1 秒空白
renderLessons();             // 渲染作业卡片（只在专项页生效）