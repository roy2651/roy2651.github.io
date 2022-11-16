# Element 的日历组件

## 基础用法

设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。

<div>
  <el-calendar v-model="value"/>
</div>

<script lang="ts" setup>
    import { calendar } from 'element-plus'
    import { ref } from 'vue'
    const value = ref(new Date())
</script>

## 源码
```html
    <div>
        <el-calendar v-model="value"/>
    </div>

    <script lang="ts" setup>
        import { calendar } from 'element-plus'
        import { ref } from 'vue'
        const value = ref(new Date())
    </script>
```