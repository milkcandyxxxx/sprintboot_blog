
function filterArticles(event, category) {
    const buttons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-card');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    articles.forEach(article => {
        article.style.display = category === 'all' || article.dataset.category === category ? 'block' : 'none';
    });
}

// 添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为分类按钮添加点击事件监听
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const category = this.getAttribute('data-category');
            filterArticles(event, category);
        });
    });
});


const { ref, onMounted, nextTick } = Vue;
const app = Vue.createApp({
    setup() {
        const articles = ref([]);

        const getArticles = async () => {
            try {

                const res = await axios.get('/article/all');
                articles.value = res.data;

                await nextTick();
                triggerDefaultFilter();
            } catch (e) {
                console.error('获取文章失败：', e);

                await nextTick();
                triggerDefaultFilter();
            }
        };

        const triggerDefaultFilter = () => {
            const activeBtn = document.querySelector('.category-btn.active');
            if (activeBtn) {
                activeBtn.click();
            }
        };
        const goarticle = (id) =>{
            window.location.href = `article.html?id=${id}`
        }

        onMounted(getArticles);
        return { articles,goarticle};
    },
});
app.mount('#app');