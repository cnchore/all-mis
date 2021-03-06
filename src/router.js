const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－首页' }
    },
    '/login': {
        component(resolve) {
            require(['./views/login.vue'], resolve);
        },
        meta: { title:'艾臣营销管理平台－登录' }
    },
    //用户中心
    '/info': {
        component(resolve) {
            require(['./views/user/info.vue'], resolve);
        },
        meta: { title:'艾臣营销管理平台－基本信息' }
    },
    '/info/edit': {
        component(resolve) {
            require(['./views/user/info-edit.vue'], resolve);
        },
        meta: { title:'艾臣营销管理平台－基本信息编辑' }
    },
    '/pwd/update': {
        component(resolve) {
            require(['./views/user/pwd-update.vue'], resolve);
        },
        meta: { title:'艾臣营销管理平台－修改密码' }
    },
    '/memo': {
        component(resolve) {
            require(['./views/user/memo.vue'], resolve);
        },
        meta: { title:'艾臣营销管理平台－备忘录' }
    },
    //安居艾臣
    '/store': {
        component(resolve) {
            require(['./views/aysl/store.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－门店展示管理' }
    },
    '/news': {
        component(resolve) {
            require(['./views/aysl/news.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－艾臣资讯管理' }
    },
    '/product': {
        component(resolve) {
            require(['./views/aysl/product.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－产品介绍' }
    },
    '/feed/back': {
        component(resolve) {
            require(['./views/aysl/feed-back.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－意见反馈管理' }
    },
    '/help': {
        component(resolve) {
            require(['./views/aysl/help.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－常见问题管理' }
    },
    '/coupon': {
        component(resolve) {
            require(['./views/aysl/coupon.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－优惠活动发布' }
    },
    '/coupon/details': {
        component(resolve) {
            require(['./views/aysl/coupon-details.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－优惠券明细配置' }
    },
    '/gift/send': {
        component(resolve) {
            require(['./views/aysl/gift-send.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－领取礼品管理' }
    },
    '/product/interest': {
        component(resolve) {
            require(['./views/aysl/product-interest.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－建博会兴趣名单' }
    }
    //艾臣合伙人
    ,
    '/partner/account': {
        component(resolve) {
            require(['./views/hhr/partner-account.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－合伙人账号管理' }
    },
    '/coupon/config': {
        component(resolve) {
            require(['./views/hhr/coupon-config.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－现金券配置管理' }
    },
    '/coupon/apply': {
        component(resolve) {
            require(['./views/hhr/coupon-apply.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－现金券申请管理' }
    },
    '/partner/coupon': {
        component(resolve) {
            require(['./views/hhr/partner-coupon.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－现金券使用情况管理' }
    },
    '/notice': {
        component(resolve) {
            require(['./views/hhr/notice.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－公告发布管理' }
    },
    '/partner/bonus': {
        component(resolve) {
            require(['./views/hhr/partner-bonus.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－分红管理' }
    },
    //预约管理
    '/waiting': {
        component(resolve) {
            require(['./views/appointment/waiting.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－待办事项' }
    },
    '/appointment/edit': {
        component(resolve) {
            require(['./views/appointment/edit.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订货单编辑' }
    },
    '/appointment/look': {
        component(resolve) {
            require(['./views/appointment/look.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订货单查看' }
    },
    '/appointment/transfer': {
        component(resolve) {
            require(['./views/appointment/transfer.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订货单查看' }
    },
    '/complete': {
        component(resolve) {
            require(['./views/appointment/complete.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－已办事项' }
    },
    '/trash': {
        component(resolve) {
            require(['./views/appointment/trash.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－废弃箱' }
    },
    'owner/waiting': {
        component(resolve) {
            require(['./views/appointment/owner-waiting.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－待办事项' }
    },
    'owner/complete': {
        component(resolve) {
            require(['./views/appointment/owner-complete.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－已办事项' }
    },
    //订单管理－经销商-客户管理
    '/order/ownerInfo': {
        component(resolve) {
            require(['./views/order/ownerInfo.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－客户管理' }
    },
    '/order/owner/edit': {
        component(resolve) {
            require(['./views/order/owner-edit.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－客户编辑' }
    },
    '/order/owner/look': {
        component(resolve) {
            require(['./views/order/owner-look.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－客户资料查看' }
    },
    //总部－客户管理
    '/order/hq/ownerInfo': {
        component(resolve) {
            require(['./views/order/hq-ownerInfo.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－客户管理' }
    },
    '/order/hq/owner/look': {
        component(resolve) {
            require(['./views/order/hq-owner-look.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－客户资料查看' }
    },
    //总部订单管理
    '/order/list': {
        component(resolve) {
            require(['./views/order/list.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单管理' }
    },
    '/order/edit': {
        component(resolve) {
            require(['./views/order/order-edit.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单编辑' }
    },
    '/order/look': {
        component(resolve) {
            require(['./views/order/order-look.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单查看' }
    },
    '/order/state/change':{
        component(resolve) {
            require(['./views/order/state-change.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单状态修改' }
    },
    //经销商-订单管理
    '/owner/order/list': {
        component(resolve) {
            require(['./views/order/owner-order-list.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单管理' }
    },
    '/owner/order/edit': {
        component(resolve) {
            require(['./views/order/owner-order-edit.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单编辑' }
    },
    '/owner/order/look': {
        component(resolve) {
            require(['./views/order/owner-order-look.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－订单查看' }
    },
    //经销商管理
    '/agent/index': {
        component(resolve) {
            require(['./views/agentUser/agent.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－经销商管理' }
    },
    '/agent/edit': {
        component(resolve) {
            require(['./views/agentUser/add-or-edit.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－经销商编辑' }
    },
    //人员管理
    '/staff': {
        component(resolve) {
            require(['./views/agentUser/staff.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－人员管理' }
    },
    //自助学习
    '/study/product/point': {
        component(resolve) {
            require(['./views/study/product-point.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－产品卖点' }
    },
    '/study/customer/service': {
        component(resolve) {
            require(['./views/study/customer-service.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－售后服务' }
    },
    '/study/sys/introduce': {
        component(resolve) {
            require(['./views/study/sys-introduce.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－系统介绍' }
    },
    '/study/operating/system': {
        component(resolve) {
            require(['./views/study/operating-system.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－运营体系' }
    },
    '/report/index': {
        component(resolve) {
            require(['./views/report/index.vue'], resolve);
        },
        meta: { requiresAuth: true,title:'艾臣营销管理平台－统计分析' }
    },

};
export default routers;