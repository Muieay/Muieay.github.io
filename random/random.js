var posts=["2023/02/07/HexoNotes/博客标签/","2023/01/23/HexoNotes/QuickWord/","2023/02/03/HexoNotes/NPM/","2023/02/27/HexoNotes/satrt/","2022/09/02/HexoNotes/音乐组件/","2022/01/29/MD/Cpp核心编程/","2022/08/05/MD/MyBatis/","2022/08/26/MD/Git/","2022/01/29/MD/Cpp提高编程/","2022/12/15/MD/JWT/","2022/08/05/MD/Spring/","2022/08/08/MD/SpringMVC/","2022/06/05/MD/MySQL 基础/","2022/01/08/MD/Visual Basic Scripting Edition/","2022/11/25/Notes/ApiPost若依认证/","2023/01/17/Notes/About/","2022/11/03/Notes/Java基础File/","2023/07/22/Notes/ES备忘清单/","2023/04/07/Notes/CSS 布局/","2022/09/04/Notes/Maven配置/","2023/07/23/Notes/RestClient速记/","2022/10/25/Notes/Mybatis-Plus/","2024/02/29/Notes/Vue深度选择器/","2022/12/14/Notes/Swagger/","2024/03/01/Notes/vue动态渲染问题/","2022/12/15/Notes/注解与反射/","2023/02/09/Notes/Vue学习笔记/","2023/04/26/Notes/防抖与节流/","2023/09/10/Pass/RuoYi集成MybatisPlus/","2023/03/13/Pass/mysql/","2023/03/23/Pass/Feign远程调用/","2023/02/13/Pass/redis/","2023/08/13/Pass/Git识别大小写/","2023/09/10/Pass/WebSocket无法注入属性/","2022/09/14/Diary/2022/03/","2022/09/16/Diary/2022/04/","2022/08/29/Diary/2022/01/","2022/08/30/Diary/2022/02/","2022/10/14/Diary/2022/05/","2023/05/23/Diary/2023/JustAuth集成登陆工具/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}