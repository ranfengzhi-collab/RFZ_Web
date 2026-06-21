const myHtmlLessons = [
    {
        title: "01. HTML 列表基础练习",
        date: "2026-06-18",
        description: "学习了无序列表 <ul> 和有序列表 <ol>，掌握了最基础的排版标签。",
        link: [
            {
                name: "无序列表练习",
                url: "unordered-list.html"
            },
            {
                name: "有序列表练习",
                url: "ordered-list.html"
            }
        ]
    },
    {
        title: "02. HTML 表单与用户输入",
        date: "2026-06-20",
        description: "练习了 input 的各种类型（文本、密码、按钮），实现了基础表单。",
        link: [
            {
                name: "表单练习",
                url: "form.html"
            }
            , {
                name: "表单样式练习",
                url: "form-style.html"
            }
        ]
    }
];

function renderLessons() {
    const container = document.getElementById("cards-container");
    if (!container) return;
    container.innerHTML = "";

    myHtmlLessons.forEach(lesson => {
        let cardHTML = `
            < div class="card" >
                <div class="card-header">
                    <span class="card-date">${lesson.date}</span>
                </div>
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <ul class="lesson-link-list">
        `;

        lesson.links.forEach(item=>{
            cardHTML+=`
            <li>
                <a href="${item.url}" target="_blank" class="nested-link">🔗${item.name}</a>
            </li>
            `;
        });
        cardHTML+=`
                </ul>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}