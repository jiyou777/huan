import Vue from 'vue'
import Vuex from 'vuex'
import Metadata from 'src/store/metadata'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
let Config = require('../config/index')

const debug = process.env.NODE_ENV !== 'production'

if (debug) Vue.use(Vuex)
var nodeInfo = {}

const state = {
  app: {
    userInfo: {}
  },
  setting: Object.assign({
    demoMode: false,
    tvSize: {
      name: 'TV S',
      width: '1280px',
      height: '720px'
    },
    open: true, // 网格开关
    line: true, // 智能参考线显示
    color: '#409EFF', // 参考线颜色
    phoneline: true, // 手机框
    sorb: true // 是否拖拽吸附
  }, (() => {
    let editorSetting = {}
    try {
      editorSetting = JSON.parse(window.localStorage.getItem('EditorSetting')) || {}
    } catch (error) { }
    delete editorSetting.tvSize
    delete editorSetting.demoMode
    return editorSetting
  })()),
  RootNodeInfo: nodeInfo,
  componentList: {},
  componentMap: {},
  pageInfo: {
    lastPage: '',
    currentPage: ''
  },
  DataHub: {},
  Config,
  Metadata,
  viewOption: {
    currentLayout: (() => window.localStorage.getItem('dockLayout_type') || 'default')(),
    pageType: 0,
    layouts: [
      {
        type: 'default',
        name: '默认布局'
      },
      {
        type: 'desktop',
        name: 'TV 布局'
      }
    ],
    widgets: {
      'widgetComponent': '组件列表',
      'widgetCombinedComponents': '组合组件',
      'widgetComponentTree': '组件树',
      'widgetPageTemplate': '页面模板',
      'widgetScene': '场景',
      'widgetAttribute': '属性',
      'widgetStyleEditor': '样式',
      'widgetScriptEditor': '脚本',
      'widgetCodePanel': '脚本编辑',
    }
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  actions,
  getters,
  mutations
})
