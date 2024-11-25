import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import chongwu from '@/views/modules/chongwu/list'
    import chongwuYuyue from '@/views/modules/chongwuYuyue/list'
    import chongwuyongpin from '@/views/modules/chongwuyongpin/list'
    import chongwuyongpinCollection from '@/views/modules/chongwuyongpinCollection/list'
    import chongwuyongpinOrder from '@/views/modules/chongwuyongpinOrder/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import liuyan from '@/views/modules/liuyan/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChongwu from '@/views/modules/dictionaryChongwu/list'
    import dictionaryChongwuYuyue from '@/views/modules/dictionaryChongwuYuyue/list'
    import dictionaryChongwuYuyueYesno from '@/views/modules/dictionaryChongwuYuyueYesno/list'
    import dictionaryChongwuleix from '@/views/modules/dictionaryChongwuleix/list'
    import dictionaryChongwuyongpin from '@/views/modules/dictionaryChongwuyongpin/list'
    import dictionaryChongwuyongpinCollection from '@/views/modules/dictionaryChongwuyongpinCollection/list'
    import dictionaryChongwuyongpinOrder from '@/views/modules/dictionaryChongwuyongpinOrder/list'
    import dictionaryChongwuyongpinOrderPayment from '@/views/modules/dictionaryChongwuyongpinOrderPayment/list'
    import dictionaryDongwu from '@/views/modules/dictionaryDongwu/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryXingbie from '@/views/modules/dictionaryXingbie/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChongwu',
        name: '宠物品种',
        component: dictionaryChongwu
    }
    ,{
        path: '/dictionaryChongwuYuyue',
        name: '领养状态',
        component: dictionaryChongwuYuyue
    }
    ,{
        path: '/dictionaryChongwuYuyueYesno',
        name: '领养审核',
        component: dictionaryChongwuYuyueYesno
    }
    ,{
        path: '/dictionaryChongwuleix',
        name: '宠物类型',
        component: dictionaryChongwuleix
    }
    ,{
        path: '/dictionaryChongwuyongpin',
        name: '宠物用品类型',
        component: dictionaryChongwuyongpin
    }
    ,{
        path: '/dictionaryChongwuyongpinCollection',
        name: '收藏表类型',
        component: dictionaryChongwuyongpinCollection
    }
    ,{
        path: '/dictionaryChongwuyongpinOrder',
        name: '订单类型',
        component: dictionaryChongwuyongpinOrder
    }
    ,{
        path: '/dictionaryChongwuyongpinOrderPayment',
        name: '订单支付类型',
        component: dictionaryChongwuyongpinOrderPayment
    }
    ,{
        path: '/dictionaryDongwu',
        name: '宠物状态',
        component: dictionaryDongwu
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryXingbie',
        name: '宠物性别',
        component: dictionaryXingbie
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/chongwu',
        name: '宠物',
        component: chongwu
      }
    ,{
        path: '/chongwuYuyue',
        name: '宠物领养申请',
        component: chongwuYuyue
      }
    ,{
        path: '/chongwuyongpin',
        name: '宠物用品',
        component: chongwuyongpin
      }
    ,{
        path: '/chongwuyongpinCollection',
        name: '宠物用品收藏',
        component: chongwuyongpinCollection
      }
    ,{
        path: '/chongwuyongpinOrder',
        name: '宠物用品订单',
        component: chongwuyongpinOrder
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '萌宠讨论',
        component: forum
      }
    ,{
        path: '/liuyan',
        name: '留言反馈',
        component: liuyan
      }
    ,{
        path: '/news',
        name: '通知公告',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
