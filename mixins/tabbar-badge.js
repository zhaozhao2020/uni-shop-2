import { mapGetters } from 'vuex'

// 导出一个 mixin 对象
export default {
  computed: {
    ...mapGetters('m_cart', ['total']),
  },
  onShow() {
    // 在页面刚展示的时候，设置数字徽标
    this.setBadge()
  },
  watch: {
      // 定义 total 侦听器，指向一个配置对象
         total: {
            // handler 属性用来定义侦听器的 function 处理函数
            handler(newVal) {
              this.setBadge()
            },
            // immediate 属性用来声明此侦听器，是否在页面初次加载完毕后立即调用
            immediate: true
         }
    },
  methods: {
    setBadge() {
      // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
      uni.setTabBarBadge({
        index: 2,
        text: this.total + '', // 注意：text 的值必须是字符串，不能是数字
      })
    },
  },
}