// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 创建Vue应用
    const { createApp } = Vue;
    
    createApp({
        data() {
            return {
                hitokoto: '',
                hitokotoAuthor: '',
                article: null,
                loading: true,
                error: null
            };
        },
        mounted() {
            this.fetchHitokoto();
            this.fetchArticle();
        },
        methods: {
            // 获取一言数据
            async fetchHitokoto() {
                try {
                    const response = await axios.get('https://v1.hitokoto.cn');
                    this.hitokoto = response.data.hitokoto;
                    this.hitokotoAuthor = response.data.from;
                } catch (error) {
                    console.error('获取一言失败:', error);
                    this.hitokoto = '生活就像海洋，只有意志坚强的人才能到达彼岸。';
                    this.hitokotoAuthor = '马克思';
                }
            },
            
            // 获取文章数据
            async fetchArticle() {
                try {
                    // 从URL参数获取文章ID
                    const urlParams = new URLSearchParams(window.location.search);
                    const articleId = urlParams.get('id');
                    
                    if (!articleId) {
                        throw new Error('未找到文章ID');
                    }
                    
                    // 请求文章数据
                    const response = await axios.get(`/api/articles/${articleId}`);
                    this.article = response.data;
                    this.loading = false;
                    
                    // 页面标题更新
                    document.title = this.article.title + ' - 博客';
                    
                    // 代码高亮
                    this.$nextTick(() => {
                        if (typeof hljs !== 'undefined') {
                            document.querySelectorAll('pre code').forEach((block) => {
                                hljs.highlightBlock(block);
                            });
                        }
                    });
                    
                } catch (error) {
                    console.error('获取文章失败:', error);
                    this.error = '文章加载失败：' + (error.response?.data?.message || error.message);
                    this.loading = false;
                }
            },
            
            // 格式化日期
            formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });
            },
            
            // 返回目录页
            goBack() {
                window.location.href = 'catalogue.html';
            }
        }
    }).mount('#app');
});