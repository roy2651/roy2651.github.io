# Element-Plus 代码测试

## 基本用法

<div>
  <el-button type="primary" @click="alert">按钮</el-button>
</div>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    function alert () {
      window.alert('1234')
    }
    return {
      alert
    }
  }
})
</script>

## 代码示例

```vue
<div>
  <el-button type="primary" @click="alert">按钮</el-button>
</div>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    function alert() {
      window.alert("1234");
    }
    return {
      alert,
    };
  },
});
</script>

```
