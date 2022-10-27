# Element-Plus 代码测试

## 基本用法

<div>
  <el-button type="primary" @click="alert">按钮</el-button>
</div>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ElMessage,Button } from 'element-plus'


export default defineComponent({
  setup () {
    function alert () {
      ElMessage('this is a message.')
    }
    return {
      alert
    }
  }
})
</script>

## 代码示例

```html
<div>
  <el-button type="primary" @click="alert">按钮</el-button>
</div>

<script lang="ts">
  import { defineComponent, reactive } from "vue";
  import { ElMessage, Button } from "element-plus";

  export default defineComponent({
    setup() {
      function alert() {
        ElMessage("this is a message.");
      }
      return {
        alert,
      };
    },
  });
</script>
```
