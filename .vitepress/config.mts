import { defineConfig } from 'vitepress'

// VitePress 配置文件
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/dv/',
  // markdown文件的根目录
  srcDir: 'docs',
  markdown: {
    config(md) {
      const defaultCodeInline = md.renderer.rules.code_inline!
      md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
        // 禁止将{{}}解析为JS表达式
        tokens[idx].attrSet('v-pre', '')
        return defaultCodeInline(tokens, idx, options, env, self)
      }
    },
    // 支持html
    html: true,
    // 显示行号
    lineNumbers: true,
    // npm add -D markdown-it-mathjax3 可以显示latex
    math: true,
  },
  // 忽略死链（没有被引用的文件）
  ignoreDeadLinks: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '目录', link: '/toc' }
    ],

    sidebar: [
      {
        "text": "IT",
        "collapsed": true,
        "items": [
          {
            "text": "编程语言",
            "collapsed": true,
            "items": [
              {
                "text": "C",
                "collapsed": true,
                "items": [
                  {
                    "text": "介绍",
                    "link": "/InfoTech/ProgramingLanguages/C/introduce.md"
                  },
                  {
                    "text": "程序结构",
                    "link": "/InfoTech/ProgramingLanguages/C/program-structure.md"
                  },
                  {
                    "text": "基本语法",
                    "link": "/InfoTech/ProgramingLanguages/C/basic-syntax.md"
                  },
                  {
                    "text": "数据类型",
                    "link": "/InfoTech/ProgramingLanguages/C/data-types.md"
                  },
                  {
                    "text": "变量",
                    "link": "/InfoTech/ProgramingLanguages/C/variables.md"
                  },
                  {
                    "text": "常量",
                    "link": "/InfoTech/ProgramingLanguages/C/constants.md"
                  },
                  {
                    "text": "存储类",
                    "link": "/InfoTech/ProgramingLanguages/C/storage-classes.md"
                  },
                  {
                    "text": "运算符",
                    "link": "/InfoTech/ProgramingLanguages/C/operators.md"
                  },
                  {
                    "text": "判断",
                    "link": "/InfoTech/ProgramingLanguages/C/decision.md"
                  },
                  {
                    "text": "循环",
                    "link": "/InfoTech/ProgramingLanguages/C/loops.md"
                  },
                  {
                    "text": "函数",
                    "link": "/InfoTech/ProgramingLanguages/C/functions.md"
                  },
                  {
                    "text": "作用域规则",
                    "link": "/InfoTech/ProgramingLanguages/C/scope-rules.md"
                  },
                  {
                    "text": "数组",
                    "link": "/InfoTech/ProgramingLanguages/C/arrays.md"
                  },
                  {
                    "text": "枚举",
                    "link": "/InfoTech/ProgramingLanguages/C/enum.md"
                  },
                  {
                    "text": "指针",
                    "link": "/InfoTech/ProgramingLanguages/C/pointers.md"
                  },
                  {
                    "text": "函数指针与回调函数",
                    "link": "/InfoTech/ProgramingLanguages/C/fun-pointer-callback.md"
                  },
                  {
                    "text": "字符串",
                    "link": "/InfoTech/ProgramingLanguages/C/strings.md"
                  },
                  {
                    "text": "结构体",
                    "link": "/InfoTech/ProgramingLanguages/C/structures.md"
                  },
                  {
                    "text": "共用体",
                    "link": "/InfoTech/ProgramingLanguages/C/unions.md"
                  },
                  {
                    "text": "位域",
                    "link": "/InfoTech/ProgramingLanguages/C/bit-fields.md"
                  },
                  {
                    "text": "typedef",
                    "link": "/InfoTech/ProgramingLanguages/C/typedef.md"
                  },
                  {
                    "text": "输入输出",
                    "link": "/InfoTech/ProgramingLanguages/C/input-output.md"
                  },
                  {
                    "text": "文件读写",
                    "link": "/InfoTech/ProgramingLanguages/C/file-io.md"
                  },
                  {
                    "text": "预处理器",
                    "link": "/InfoTech/ProgramingLanguages/C/preprocessors.md"
                  },
                  {
                    "text": "头文件",
                    "link": "/InfoTech/ProgramingLanguages/C/header-files.md"
                  },
                  {
                    "text": "强制类型转换",
                    "link": "/InfoTech/ProgramingLanguages/C/type-casting.md"
                  },
                  {
                    "text": "错误处理",
                    "link": "/InfoTech/ProgramingLanguages/C/error-handling.md"
                  },
                  {
                    "text": "递归",
                    "link": "/InfoTech/ProgramingLanguages/C/recursion.md"
                  },
                  {
                    "text": "可变参数",
                    "link": "/InfoTech/ProgramingLanguages/C/variable-arguments.md"
                  },
                  {
                    "text": "内存管理",
                    "link": "/InfoTech/ProgramingLanguages/C/memory-management.md"
                  },
                  {
                    "text": "未定义行为",
                    "link": "/InfoTech/ProgramingLanguages/C/undefined-behavior.md"
                  },
                  {
                    "text": "命令行参数",
                    "link": "/InfoTech/ProgramingLanguages/C/command-line-arguments.md"
                  }
                ]
              },
              {
                "text": "Java",
                "collapsed": true,
                "items": [
                  {
                    "text": "ByteBuffer",
                    "link": "/InfoTech/ProgramingLanguages/Java/ByteBuffer.md"
                  },
                  {
                    "text": "JDK8的时间类",
                    "link": "/InfoTech/ProgramingLanguages/Java/JDK8Time.md"
                  }
                ]
              },
              {
                "text": "JavaScript",
                "collapsed": true,
                "items": [
                  {
                    "text": "Object.defineProperty",
                    "link": "/InfoTech/ProgramingLanguages/JavaScript/defineProperty.md"
                  },
                  {
                    "text": "yarn",
                    "link": "/InfoTech/ProgramingLanguages/JavaScript/yarn.md"
                  }
                ]
              },
              {
                "text": "Kotlin",
                "collapsed": true,
                "items": [
                  {
                    "text": "lambda",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/lambda.md"
                  },
                  {
                    "text": "不使用泛型的型变",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/Variance%20without%20Generics.md"
                  },
                  {
                    "text": "协变逆变",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/covariance_contravariance.md"
                  },
                  {
                    "text": "5种有趣的扩展函数",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/5%20Fun%20Ways%20to%20Use%20Extension%20Functions.md"
                  },
                  {
                    "text": "contact用于智能类型转换的例子",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/Smart%20Casts%20with%20Kotlin%20Contracts.md"
                  },
                  {
                    "text": "杂记",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/misc.md"
                  },
                  {
                    "text": "引用",
                    "link": "/InfoTech/ProgramingLanguages/Kotlin/references.md"
                  }
                ]
              },
              {
                "text": "Rust",
                "collapsed": true,
                "items": [
                  {
                    "text": "介绍",
                    "link": "/InfoTech/ProgramingLanguages/Rust/introduce.md"
                  },
                  {
                    "text": "入门",
                    "link": "/InfoTech/ProgramingLanguages/Rust/get-started.md"
                  },
                  {
                    "text": "猜数游戏",
                    "link": "/InfoTech/ProgramingLanguages/Rust/guessing-game.md"
                  },
                  {
                    "text": "常见编程概念",
                    "link": "/InfoTech/ProgramingLanguages/Rust/common-programming-concepts.md"
                  }
                ]
              },
              {
                "text": "TypeScript",
                "collapsed": true,
                "items": [
                  {
                    "text": "简介",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/introduce.md"
                  },
                  {
                    "text": "安装",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/install.md"
                  },
                  {
                    "text": "类型",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/type.md"
                  },
                  {
                    "text": "编译选项",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/compile_options.md"
                  },
                  {
                    "text": "用webpack打包ts代码",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/webpack.md"
                  },
                  {
                    "text": "类、属性和方法",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/class_property_function.md"
                  },
                  {
                    "text": "构造函数和this",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/constructor_this.md"
                  },
                  {
                    "text": "继承和super关键字",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/extends.md"
                  },
                  {
                    "text": "抽象类",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/abstract_class.md"
                  },
                  {
                    "text": "接口",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/interface.md"
                  },
                  {
                    "text": "get和set",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/get_set.md"
                  },
                  {
                    "text": "可选参数、可选属性",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/optional_parameters_properties.md"
                  },
                  {
                    "text": "typeof",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/typeof.md"
                  },
                  {
                    "text": "类型兼容性",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/compatible.md"
                  },
                  {
                    "text": "交叉类型",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/intersection_types.md"
                  },
                  {
                    "text": "泛型",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/generics.md"
                  },
                  {
                    "text": "索引签名类型",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/index_types.md"
                  },
                  {
                    "text": "映射类型",
                    "link": "/InfoTech/ProgramingLanguages/TypeScript/mapping_types.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "概念",
            "collapsed": true,
            "items": [
              {
                "text": "阻塞非阻塞 同步异步",
                "link": "/InfoTech/Concepts/blocking_non-blocking_sync_async.md"
              },
              {
                "text": "并发并行",
                "link": "/InfoTech/Concepts/concurrency_parallelism.md"
              },
              {
                "text": "进程 线程 协程",
                "link": "/InfoTech/Concepts/process_thread_coroutine.md"
              },
              {
                "text": "软件设计原则",
                "link": "/InfoTech/Concepts/software_design_principles.md"
              }
            ]
          },
          {
            "text": "力扣算法题",
            "collapsed": true,
            "items": [
              {
                "text": "简单",
                "collapsed": true,
                "items": [
                  {
                    "text": "两数之和",
                    "link": "/InfoTech/AlgorithmProblems/easy/two-sum.md"
                  },
                  {
                    "text": "回文数",
                    "link": "/InfoTech/AlgorithmProblems/easy/palindrome-number.md"
                  },
                  {
                    "text": "罗马数字转整数",
                    "link": "/InfoTech/AlgorithmProblems/easy/roman-to-integer.md"
                  },
                  {
                    "text": "最长公共前缀",
                    "link": "/InfoTech/AlgorithmProblems/easy/longest-common-prefix.md"
                  },
                  {
                    "text": "有效的括号",
                    "link": "/InfoTech/AlgorithmProblems/easy/valid-parentheses.md"
                  },
                  {
                    "text": "合并两个有序链表",
                    "link": "/InfoTech/AlgorithmProblems/easy/merge-two-sorted-lists.md"
                  },
                  {
                    "text": "删除有序数组中的重复项",
                    "link": "/InfoTech/AlgorithmProblems/easy/remove-duplicates-from-sorted-array.md"
                  },
                  {
                    "text": "移除元素",
                    "link": "/InfoTech/AlgorithmProblems/easy/remove-element.md"
                  },
                  {
                    "text": "实现 strStr()",
                    "link": "/InfoTech/AlgorithmProblems/easy/implement-strstr.md"
                  },
                  {
                    "text": "搜索插入位置",
                    "link": "/InfoTech/AlgorithmProblems/easy/search-insert-position.md"
                  },
                  {
                    "text": "最大子数组和",
                    "link": "/InfoTech/AlgorithmProblems/easy/maximum-subarray.md"
                  },
                  {
                    "text": "重复字符串n次",
                    "link": "/InfoTech/AlgorithmProblems/easy/string_n_times.md"
                  },
                  {
                    "text": "最后一个单词的长度",
                    "link": "/InfoTech/AlgorithmProblems/easy/length-of-last-word.md"
                  },
                  {
                    "text": "加一",
                    "link": "/InfoTech/AlgorithmProblems/easy/plus-one.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "Android",
            "collapsed": true,
            "items": [
              {
                "text": "基础",
                "collapsed": true,
                "items": [
                  {
                    "text": "Android和 MVC 架构模式",
                    "link": "/InfoTech/Android/Basics/Android-MVC.md"
                  },
                  {
                    "text": "屏幕像素密度",
                    "link": "/InfoTech/Android/Basics/screen_pixel_density.md"
                  },
                  {
                    "text": "Activity",
                    "link": "/InfoTech/Android/Basics/Activity.md"
                  },
                  {
                    "text": "Service",
                    "link": "/InfoTech/Android/Basics/Service.md"
                  },
                  {
                    "text": "ViewModel",
                    "link": "/InfoTech/Android/Basics/ViewModel.md"
                  },
                  {
                    "text": "布局",
                    "link": "/InfoTech/Android/Basics/layout.md"
                  },
                  {
                    "text": "日志",
                    "link": "/InfoTech/Android/Basics/log.md"
                  },
                  {
                    "text": "Fragment",
                    "link": "/InfoTech/Android/Basics/Fragment.md"
                  },
                  {
                    "text": "BuildConfig",
                    "link": "/InfoTech/Android/Basics/build_config.md"
                  }
                ]
              },
              {
                "text": "Jetpack",
                "collapsed": true,
                "items": [
                  {
                    "text": "Jetpack 简介",
                    "link": "/InfoTech/Android/Jetpack/Jetpack.md"
                  },
                  {
                    "text": "Jetpack Compose",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "官网教程代码",
                        "link": "/InfoTech/Android/Jetpack/Compose/official_tutorial.md"
                      },
                      {
                        "text": "编程思想",
                        "link": "/InfoTech/Android/Jetpack/Compose/mental_model.md"
                      },
                      {
                        "text": "基础",
                        "link": "/InfoTech/Android/Jetpack/Compose/basic.md"
                      },
                      {
                        "text": "基本布局",
                        "link": "/InfoTech/Android/Jetpack/Compose/basic_layout.md"
                      },
                      {
                        "text": "临时",
                        "link": "/InfoTech/Android/Jetpack/Compose/temp.md"
                      }
                    ]
                  },
                  {
                    "text": "Dagger-Hilt",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "控制反转和依赖注入",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/ioc_di.md"
                      },
                      {
                        "text": "使用Dagger依赖注入简单示例",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/dagger_sample.md"
                      },
                      {
                        "text": "使用Module提供对象实例",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/dagger_module_sample.md"
                      },
                      {
                        "text": "Dagger作用域",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/scope.md"
                      },
                      {
                        "text": "Dagger组件依赖",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/component_dependcies.md"
                      },
                      {
                        "text": "Dagger子组件",
                        "link": "/InfoTech/Android/Jetpack/Dagger-Hilt/subcomponents.md"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "阿里Android开发规范",
                "collapsed": true,
                "items": [
                  {
                    "text": "一、Android 资源文件命名与使用",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/asset.md"
                  },
                  {
                    "text": "二、Android 基本组件",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/component.md"
                  },
                  {
                    "text": "三、UI 与布局",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/ui-layout.md"
                  },
                  {
                    "text": "四、进程、线程与消息通信",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/process-thread-meassage.md"
                  },
                  {
                    "text": "五、文件与数据库",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/file-db.md"
                  },
                  {
                    "text": "六、Bitmap、Drawable 与动画",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/bitmap-drawable-animation.md"
                  },
                  {
                    "text": "七、安全",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/safety.md"
                  },
                  {
                    "text": "八、其他",
                    "link": "/InfoTech/Android/AliAndroidDevelopmentStandard/others.md"
                  }
                ]
              },
              {
                "text": "其他",
                "collapsed": true,
                "items": [
                  {
                    "text": "执行root命令",
                    "link": "/InfoTech/Android/others/root.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "前端",
            "collapsed": true,
            "items": [
              {
                "text": "HTML",
                "collapsed": true,
                "items": [
                  {
                    "text": "简介",
                    "link": "/InfoTech/Front-end/HTML/introduce.md"
                  },
                  {
                    "text": "标签列表（功能排序）",
                    "link": "/InfoTech/Front-end/HTML/byfunc.md"
                  },
                  {
                    "text": "全局属性",
                    "link": "/InfoTech/Front-end/HTML/standard_attributes.md"
                  },
                  {
                    "text": "事件属性",
                    "link": "/InfoTech/Front-end/HTML/event_attributes.md"
                  }
                ]
              },
              {
                "text": "CSS",
                "collapsed": true,
                "items": [
                  {
                    "text": "简介",
                    "link": "/InfoTech/Front-end/CSS/introduce.md"
                  },
                  {
                    "text": "语法",
                    "link": "/InfoTech/Front-end/CSS/syntax.md"
                  },
                  {
                    "text": "创建",
                    "link": "/InfoTech/Front-end/CSS/howto.md"
                  },
                  {
                    "text": "选择器",
                    "link": "/InfoTech/Front-end/CSS/selectors.md"
                  }
                ]
              },
              {
                "text": "Vue2",
                "collapsed": true,
                "items": [
                  {
                    "text": "初识",
                    "link": "/InfoTech/Front-end/Vue/start.md"
                  },
                  {
                    "text": "数据代理",
                    "link": "/InfoTech/Front-end/Vue/delegate.md"
                  },
                  {
                    "text": "绑定样式",
                    "link": "/InfoTech/Front-end/Vue/bind_class_style.md"
                  },
                  {
                    "text": "条件渲染",
                    "link": "/InfoTech/Front-end/Vue/conditional_rendering.md"
                  },
                  {
                    "text": "列表渲染",
                    "link": "/InfoTech/Front-end/Vue/list_rendering.md"
                  },
                  {
                    "text": "key的作用与原理",
                    "link": "/InfoTech/Front-end/Vue/key.md"
                  },
                  {
                    "text": "列表过滤",
                    "link": "/InfoTech/Front-end/Vue/list_filter.md"
                  },
                  {
                    "text": "列表排序",
                    "link": "/InfoTech/Front-end/Vue/list_sort.md"
                  },
                  {
                    "text": "监视数据",
                    "link": "/InfoTech/Front-end/Vue/watch_data.md"
                  },
                  {
                    "text": "收集表单数据",
                    "link": "/InfoTech/Front-end/Vue/collect_form_data.md"
                  },
                  {
                    "text": "过滤器",
                    "link": "/InfoTech/Front-end/Vue/filters.md"
                  },
                  {
                    "text": "内置指令",
                    "link": "/InfoTech/Front-end/Vue/Built-in_instructions.md"
                  },
                  {
                    "text": "自定义指令",
                    "link": "/InfoTech/Front-end/Vue/custom_instructions.md"
                  },
                  {
                    "text": "生命周期",
                    "link": "/InfoTech/Front-end/Vue/lifecycle.md"
                  },
                  {
                    "text": "非单文件组件",
                    "link": "/InfoTech/Front-end/Vue/non_sfc.md"
                  }
                ]
              },
              {
                "text": "Vue3",
                "collapsed": true,
                "items": [
                  {
                    "text": "简介",
                    "link": "/InfoTech/Front-end/Vue3/introduce.md"
                  },
                  {
                    "text": "一、创建Vue3.0工程",
                    "link": "/InfoTech/Front-end/Vue3/create.md"
                  },
                  {
                    "text": "二、常用 Composition API",
                    "link": "/InfoTech/Front-end/Vue3/composition_api.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "Git",
            "collapsed": true,
            "items": [
              {
                "text": "什么是版本控制",
                "link": "/InfoTech/Git/what_is_version_control.md"
              },
              {
                "text": "常见的版本控制系统",
                "link": "/InfoTech/Git/tools.md"
              },
              {
                "text": "版本控制分类",
                "link": "/InfoTech/Git/category.md"
              },
              {
                "text": "Git与SVN的主要区别",
                "link": "/InfoTech/Git/git-vs-svn.md"
              },
              {
                "text": "Git历史",
                "link": "/InfoTech/Git/history.md"
              },
              {
                "text": "工作区、暂存区和版本库",
                "link": "/InfoTech/Git/workspace-stage-repo.md"
              },
              {
                "text": "工作流程",
                "link": "/InfoTech/Git/procedure.md"
              },
              {
                "text": "创建仓库",
                "link": "/InfoTech/Git/create-repo.md"
              },
              {
                "text": "文件操作",
                "link": "/InfoTech/Git/file-operation.md"
              },
              {
                "text": "管理分支",
                "link": "/InfoTech/Git/branches-management.md"
              },
              {
                "text": "查看提交历史",
                "link": "/InfoTech/Git/log-blame.md"
              },
              {
                "text": "标签",
                "link": "/InfoTech/Git/commands/tag.md"
              },
              {
                "text": "45个 GIT 经典操作场景，专治不会合代码",
                "link": "/InfoTech/Git/45situations.md"
              },
              {
                "text": "命令",
                "collapsed": true,
                "items": [
                  {
                    "text": "add",
                    "link": "/InfoTech/Git/commands/add.md"
                  },
                  {
                    "text": "blame",
                    "link": "/InfoTech/Git/commands/blame.md"
                  },
                  {
                    "text": "branch",
                    "link": "/InfoTech/Git/commands/branch.md"
                  },
                  {
                    "text": "clone",
                    "link": "/InfoTech/Git/commands/clone.md"
                  },
                  {
                    "text": "commit",
                    "link": "/InfoTech/Git/commands/commit.md"
                  },
                  {
                    "text": "config",
                    "link": "/InfoTech/Git/commands/config.md"
                  },
                  {
                    "text": "diff",
                    "link": "/InfoTech/Git/commands/diff.md"
                  },
                  {
                    "text": "fetch",
                    "link": "/InfoTech/Git/commands/fetch.md"
                  },
                  {
                    "text": "init",
                    "link": "/InfoTech/Git/commands/init.md"
                  },
                  {
                    "text": "log",
                    "link": "/InfoTech/Git/commands/log.md"
                  },
                  {
                    "text": "mv",
                    "link": "/InfoTech/Git/commands/mv.md"
                  },
                  {
                    "text": "pull",
                    "link": "/InfoTech/Git/commands/pull.md"
                  },
                  {
                    "text": "push",
                    "link": "/InfoTech/Git/commands/push.md"
                  },
                  {
                    "text": "rebase",
                    "link": "/InfoTech/Git/commands/rebase.md"
                  },
                  {
                    "text": "remote",
                    "link": "/InfoTech/Git/commands/remote.md"
                  },
                  {
                    "text": "reset",
                    "link": "/InfoTech/Git/commands/reset.md"
                  },
                  {
                    "text": "rm",
                    "link": "/InfoTech/Git/commands/rm.md"
                  },
                  {
                    "text": "status",
                    "link": "/InfoTech/Git/commands/status.md"
                  },
                  {
                    "text": "tag",
                    "link": "/InfoTech/Git/commands/tag.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "Gradle",
            "collapsed": true,
            "items": [
              {
                "text": "介绍和安装",
                "link": "/InfoTech/Gradle/intro-install.md"
              },
              {
                "text": "构建 Kotlin 应用程序示例",
                "link": "/InfoTech/Gradle/sample_building_kotlin_applications.md"
              },
              {
                "text": "临时笔记",
                "link": "/InfoTech/Gradle/tmp.md"
              }
            ]
          },
          {
            "text": "Linux",
            "collapsed": true,
            "items": [
              {
                "text": "基础",
                "collapsed": true,
                "items": [
                  {
                    "text": "Linux 系统目录结构",
                    "link": "/InfoTech/Linux/bases/dirs.md"
                  },
                  {
                    "text": "bash",
                    "link": "/InfoTech/Linux/bases/bash.md"
                  },
                  {
                    "text": "远程登录",
                    "link": "/InfoTech/Linux/bases/remote-login.md"
                  },
                  {
                    "text": "Linux 文件基本属性",
                    "link": "/InfoTech/Linux/bases/file-attr-permission.md"
                  },
                  {
                    "text": "管理文件和目录",
                    "link": "/InfoTech/Linux/bases/manage-files-and-dirs.md"
                  },
                  {
                    "text": "管理用户和用户组",
                    "link": "/InfoTech/Linux/bases/manage-users.md"
                  },
                  {
                    "text": "管理磁盘",
                    "link": "/InfoTech/Linux/bases/manage-disks.md"
                  },
                  {
                    "text": "apt命令",
                    "link": "/InfoTech/Linux/bases/apt.md"
                  },
                  {
                    "text": "其他",
                    "link": "/InfoTech/Linux/bases/others.md"
                  }
                ]
              },
              {
                "text": "Docker",
                "link": "/InfoTech/Linux/docker.md"
              },
              {
                "text": "ufw防火墙",
                "link": "/InfoTech/Linux/ufw.md"
              },
              {
                "text": "Nginx Proxy Manager",
                "link": "/InfoTech/Linux/nginx-proxy-manager.md"
              },
              {
                "text": "tmux终端复用",
                "link": "/InfoTech/Linux/tmux.md"
              }
            ]
          },
          {
            "text": "SQLite",
            "collapsed": true,
            "items": [
              {
                "text": "安装",
                "link": "/InfoTech/SQLite/intall.md"
              },
              {
                "text": "命令",
                "link": "/InfoTech/SQLite/commands.md"
              },
              {
                "text": "语法",
                "link": "/InfoTech/SQLite/syntax.md"
              },
              {
                "text": "数据类型",
                "link": "/InfoTech/SQLite/data-types.md"
              },
              {
                "text": "创建数据库",
                "link": "/InfoTech/SQLite/create-database.md"
              },
              {
                "text": "附加数据库",
                "link": "/InfoTech/SQLite/attach-database.md"
              },
              {
                "text": "分离数据库",
                "link": "/InfoTech/SQLite/detach-database.md"
              },
              {
                "text": "创建表",
                "link": "/InfoTech/SQLite/create-table.md"
              },
              {
                "text": "删除表",
                "link": "/InfoTech/SQLite/drop-table.md"
              },
              {
                "text": "Insert 语句",
                "link": "/InfoTech/SQLite/insert.md"
              },
              {
                "text": "Select 语句",
                "link": "/InfoTech/SQLite/select.md"
              },
              {
                "text": "运算符",
                "link": "/InfoTech/SQLite/operators.md"
              },
              {
                "text": "表达式",
                "link": "/InfoTech/SQLite/expressions.md"
              },
              {
                "text": "别名",
                "link": "/InfoTech/SQLite/alias.md"
              },
              {
                "text": "Where 子句",
                "link": "/InfoTech/SQLite/where-clause.md"
              },
              {
                "text": "AND/OR 运算符",
                "link": "/InfoTech/SQLite/and-or-clauses.md"
              },
              {
                "text": "Update 语句",
                "link": "/InfoTech/SQLite/update.md"
              },
              {
                "text": "Delete 语句",
                "link": "/InfoTech/SQLite/delete.md"
              },
              {
                "text": "Like 子句",
                "link": "/InfoTech/SQLite/like-clause.md"
              },
              {
                "text": "Glob 子句",
                "link": "/InfoTech/SQLite/glob-clause.md"
              },
              {
                "text": "Limit 子句",
                "link": "/InfoTech/SQLite/limit-clause.md"
              },
              {
                "text": "Order By",
                "link": "/InfoTech/SQLite/order-by.md"
              },
              {
                "text": "Group By",
                "link": "/InfoTech/SQLite/group-by.md"
              },
              {
                "text": "Having 子句",
                "link": "/InfoTech/SQLite/having.md"
              },
              {
                "text": "Distinct 关键字",
                "link": "/InfoTech/SQLite/distinct.md"
              },
              {
                "text": "PRAGMA",
                "link": "/InfoTech/SQLite/pragma.md"
              },
              {
                "text": "约束",
                "link": "/InfoTech/SQLite/constraints.md"
              },
              {
                "text": "Join",
                "link": "/InfoTech/SQLite/join.md"
              },
              {
                "text": "UNION",
                "link": "/InfoTech/SQLite/union.md"
              },
              {
                "text": "在安卓中使用 SQLite",
                "link": "/InfoTech/SQLite/sqlite-in-android.md"
              }
            ]
          },
          {
            "text": "杂项",
            "collapsed": true,
            "items": [
              {
                "text": "最佳编码实践",
                "link": "/InfoTech/Misc/best_coding_practice.md"
              },
              {
                "text": "Markdown",
                "link": "/InfoTech/Misc/marrkdown.md"
              },
              {
                "text": "LaTeX",
                "link": "/InfoTech/Misc/latex.md"
              },
              {
                "text": "如何在局域网的其他主机上中访问本机的WSL2",
                "link": "/InfoTech/Misc/LAN_WSL2/LAN_WSL2.md"
              },
              {
                "text": "新版 WSL2 2.0 设置 Windows 和 WSL 镜像网络教程",
                "link": "/InfoTech/Misc/WSL2_net.md"
              },
              {
                "text": "Playwright",
                "link": "/InfoTech/Misc/playwright.md"
              },
              {
                "text": "OpenCV",
                "link": "/InfoTech/Misc/OpenCV/OpenCV.md"
              }
            ]
          }
        ]
      },
      {
        "text": "数学",
        "collapsed": true,
        "items": [
          {
            "text": "高等数学",
            "collapsed": true,
            "items": [
              {
                "text": "第1讲 函数极限与连续",
                "collapsed": true,
                "items": [
                  {
                    "text": "1.1 函数的概念和特性",
                    "link": "/数学/高等数学/1.%20函数极限与连续/1.1%20函数的概念与特性.md"
                  },
                  {
                    "text": "1.2 函数的图像",
                    "link": "/数学/高等数学/1.%20函数极限与连续/1.2%20函数的图像.md"
                  },
                  {
                    "text": "1.3 函数极限的概念与性质",
                    "link": "/数学/高等数学/1.%20函数极限与连续/1.3%20函数极限的概念与性质.md"
                  },
                  {
                    "text": "1.4 计算",
                    "link": "/数学/高等数学/1.%20函数极限与连续/1.4%20计算.md"
                  },
                  {
                    "text": "1.5 函数的连续与间断",
                    "link": "/数学/高等数学/1.%20函数极限与连续/1.5%20函数的连续与间断.md"
                  }
                ]
              },
              {
                "text": "必背1",
                "link": "/数学/高等数学/必背1.md"
              }
            ]
          }
        ]
      },
      {
        "text": "408",
        "collapsed": true,
        "items": [
          {
            "text": "数据结构",
            "collapsed": true,
            "items": [
              {
                "text": "第1章 绪论",
                "collapsed": true,
                "items": [
                  {
                    "text": "1. 绪论",
                    "link": "/408/数据结构/1.%20绪论/1.%20绪论.md"
                  },
                  {
                    "text": "1.1 数据结构的基本概念",
                    "link": "/408/数据结构/1.%20绪论/1.1%20数据结构的基本概念.md"
                  },
                  {
                    "text": "1.2 算法和算法评价",
                    "link": "/408/数据结构/1.%20绪论/1.2%20算法和算法评价.md"
                  },
                  {
                    "text": "1.3 归纳总结 思维拓展",
                    "link": "/408/数据结构/1.%20绪论/1.3%20归纳总结%20思维拓展.md"
                  }
                ]
              },
              {
                "text": "第2章 线性表",
                "collapsed": true,
                "items": [
                  {
                    "text": "2. 线性表",
                    "link": "/408/数据结构/2.%20线性表/2.%20线性表.md"
                  },
                  {
                    "text": "2.1 线性表的定义和基本操作",
                    "link": "/408/数据结构/2.%20线性表/2.1%20线性表的定义和基本操作.md"
                  },
                  {
                    "text": "2.2 线性表的顺序表示",
                    "link": "/408/数据结构/2.%20线性表/2.2%20线性表的顺序表示.md"
                  },
                  {
                    "text": "2.3 线性表的链式表示",
                    "link": "/408/数据结构/2.%20线性表/2.3%20线性表的链式表示.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "操作系统",
            "collapsed": true,
            "items": [
              {
                "text": "第1章 计算机系统概述",
                "collapsed": true,
                "items": [
                  {
                    "text": "1. 计算机系统概述",
                    "link": "/408/操作系统/1.%20计算机系统概述/计算机系统概述.md"
                  },
                  {
                    "text": "1.1 操作系统的基本概念",
                    "link": "/408/操作系统/1.%20计算机系统概述/1.1%20操作系统的基本概念.md"
                  },
                  {
                    "text": "1.2 操作系统的发展历程",
                    "link": "/408/操作系统/1.%20计算机系统概述/1.2%20操作系统的发展历程.md"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "text": "书",
        "collapsed": true,
        "items": [
          {
            "text": "断舍离",
            "link": "/Books/duansheli.md"
          }
        ]
      },
      {
        "text": "其他",
        "collapsed": true,
        "items": [
          {
            "text": "小鹤双拼",
            "link": "/Misc/xiaohe.md"
          },
          {
            "text": "学习与认知",
            "link": "/Misc/LearningAndCognition.md"
          },
          {
            "text": "三星刷机必装",
            "link": "/Misc/三星刷机必装.md"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '请勿转载',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} SoClear`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: 'deep',
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示结果详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '没有找到',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选择',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上一个',
              navigateDownKeyAriaLabel: '下一个',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭'
            }
          }
        }
      }
    }
  }
})
