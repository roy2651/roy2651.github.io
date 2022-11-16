# FullCalendar

之前我们介绍了一遍关于 `Element`的关于 [Calendar](../examples/calendar.md) 的文章，这个组件非常的简单，关于一些日历的操作无法执行，现在我们来看看这个 FullCalendar 这个日历插件

## 介绍

FullCalendar 一款轻量级的免费开源的日历插件，适用于日程安排，工作计划等场景，标记重要事项以及绑定点击拖动事件，能够快速的整合到项目中去。

它支持 `react` ，`vue`，`Angular`，`Javascript`

## 资源

[官网](https://fullcalendar.io/)

[Github](https://github.com/fullcalendar/fullcalendar)

## 用法

我们这边以 `vue3` 为例

```bash
npm install --save @fullcalendar/vue3 @fullcalendar/core
```

然后安装任何其他 `FullCalendar` 插件，例如`@fullcalendar/daygrid`

然后我们来编写一个关于`FullCalendar`的组件

## 基础使用

不知为何我的显示一直有问题，我会尝试用vue2再测试一遍，我vue3的代码如下

```html
<div class='demo-app'>
    <div class='demo-app-main'>
        <full-calendar class='demo-app-calendar' ref="fullCalendar" :options="calendarOptions"  />
    </div>
</div>

<script lang="ts">
    import { defineComponent } from 'vue'
    import '@fullcalendar/core/vdom'
    import FullCalendar, { CalendarOptions } from '@fullcalendar/vue3'
    import cnLocale from '@fullcalendar/core/locales/zh-cn';
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    export default defineComponent({ 
        components: {
            FullCalendar,
        }, 
        data() {
            return {
                calendarOptions:{
                    height: "800px",
                    plugins: [
                        dayGridPlugin,
                        interactionPlugin
                    ],
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    initialView: 'dayGridMonth',
                    locale: cnLocale, 
                } as CalendarOptions,
            }
        },  
        methods:{
            handleDateSelect() {
                ElMessage('select') 
            },
            handleEventClick() {
                ElMessage('click') 
            }
        }
    })
</script>

<style lang="css">
.demo-app {
    display: flex;
    min-height: 100%;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
}

.demo-app-main {
  flex-grow: 1;
}
.fc {
    max-width: 1100px;
    margin: 0 auto;
}
</style>
```