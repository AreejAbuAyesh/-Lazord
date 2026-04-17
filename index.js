function toggleMenu() {
    document.getElementById('overlay').classList.toggle('active');
    document.getElementById('drawer').classList.toggle('active');
}

const elements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));

const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(item => {
    item.querySelector(".accordion-title").addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            accordionItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});

document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        q.parentElement.classList.toggle('active');
    });
});
    const allArticles = [
        { category: "digital", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", title: "ثورة المسح الضوئي في طب الأسنان", desc: "كيف تغير الماسحات الضوئية داخل الفم طريقة عمل عيادات الأسنان حول العالم...", catName: "طب أسنان رقمي" },
        { category: "tips", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800", title: "5 نصائح لاختيار مختبر الأسنان المناسب", desc: "معايير مهمة يجب مراعاتها عند اختيار مختبر الأسنان الرقمي لعيادتك...", catName: "نصائح مهنية" },
        { category: "news", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=800", title: "لازورد تطلق منصة رقمية جديدة", desc: "منصة متكاملة لإدارة الحالات المخبرية والتواصل مع المختبر...", catName: "أخبار لازورد" },
        { category: "tech", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800", title: "الطباعة ثلاثية الأبعاد في طب الأسنان", desc: "تطبيقات الطباعة ثلاثية الأبعاد في تصنيع التيجان والأطقم...", catName: "تقنيات جديدة" },
        { category: "digital", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", title: "مستقبل طب الأسنان الرقمي", desc: "توقعات وتوجهات مستقبلية في مجال طب الأسنان الرقمي...", catName: "طب أسنان رقمي" },
        { category: "tips", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", title: "كيف تبدأ رحلة التحول الرقمي", desc: "خطوات عملية لتحويل عيادتك من التقليدي إلى الرقمي...", catName: "نصائح مهنية" }
    ];

    const articlesGrid = document.getElementById('articlesGrid');

    function renderArticles(category) {
        let filteredArticles = allArticles;
        if (category !== 'all') {
            filteredArticles = allArticles.filter(article => article.category === category);
        }
        
        articlesGrid.innerHTML = filteredArticles.map(article => `
            <div class="article-card">
                <img src="${article.img}" alt="مقال">
                <div class="article-content">
                    <span class="article-category">${article.catName}</span>
                    <h3>${article.title}</h3>
                    <p>${article.desc}</p>
                    <a href="#" class="read-more">اقرأ المزيد →</a>
                </div>
            </div>
        `).join('');
    }

    const filterBtns = document.querySelectorAll('.category-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderArticles(category);
        });
    });

    // Load all articles on page load
    renderArticles('all');