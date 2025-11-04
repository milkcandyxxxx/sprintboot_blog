// 先声明筛选函数（确保全局可访问）
function filterArticles(event, category) {
    const buttons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-card');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    articles.forEach(article => {
        article.style.display = category === 'all' || article.dataset.category === category ? 'block' : 'none';
    });
}

// Vue实例逻辑
const { ref, onMounted, nextTick } = Vue;
const app = Vue.createApp({
    setup() {
        const articles = ref([]);

        const getArticles = async () => {
            try {
                // 实际环境使用API获取数据
                const res = await axios.get('http://127.0.0.1:8080/article/all');
                articles.value = res.data;

                // 数据加载完 + DOM渲染完后，主动触发默认按钮的点击
                await nextTick();
                triggerDefaultFilter();
            } catch (e) {
                console.error('获取文章失败：', e);
                // 本地调试用：如果API不通，可临时加模拟数据测试筛选
                await nextTick();
                triggerDefaultFilter();
            }
        };

        // 触发默认分类的点击（模拟用户点击，最稳妥）
        const triggerDefaultFilter = () => {
            const activeBtn = document.querySelector('.category-btn.active');
            if (activeBtn) {
                activeBtn.click(); // 直接触发按钮的点击事件，无需提取分类值
            }
        };

        onMounted(getArticles);
        return { articles };
    },
});
app.mount('#app');