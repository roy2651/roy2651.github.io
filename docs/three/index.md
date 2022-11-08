# 什么是 Three.js

Three.js 是基于原生 WebGL 封装运行的三维引擎，在所有 WebGL 引擎中，Three.js 是国内文资料最多、使用最广泛的三维引擎。

# Three.js 资源

github 官方链接：[https://github.com/mrdoob/three.js](https://github.com/mrdoob/three.js)

官网：[https://threejs.org/](https://threejs.org/)

中文官网：[http://www.webgl3d.cn/Three.js/](http://www.webgl3d.cn/Three.js/)

B 站学习视频：[https://www.bilibili.com/video/BV1Gg411X7FY](https://www.bilibili.com/video/BV1Gg411X7FY)

# Three.js 简单上手

<div ref="threeDom">
</div>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
export default defineComponent({
     setup () {
        const threeDom = ref<HTMLElement | null>(null);

        function init(instance: HTMLElement | null) {
            var height = instance.clientHeight + 400;
            var width = instance.clientWidth - 25; 
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000
            );
            camera.position.set(0, 0, 10);
            scene.add(camera);
            const geometry = new THREE.BoxGeometry(1, 2, 3);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            const reander = new THREE.WebGLRenderer();
            reander.setSize(width, height);
            instance.append(reander.domElement);
            const controls = new OrbitControls(camera, reander.domElement);
            controls.enableDamping = true;
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);
            gsap.to(cube.position, {
                x: 5,
                duration: 5,
                ease: "power1.inOut",
                repeat: 2,
                yoyo: true,
            });
            function render() {
                controls.update();
                reander.render(scene, camera);
                requestAnimationFrame(render);
            } 
            render()
        }

        onMounted(()=>{
            init(threeDom.value)
        })
        return {
            threeDom,
        }
     }
})
</script>
<style scoped>
#threeDom {
    height: 600px;
}
</style>

## 代码示例
```html
<div ref="threeDom">
</div>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
export default defineComponent({
     setup () {
        //获取canvas
        const threeDom = ref<HTMLElement | null>(null);
        //初始化方法
        function init(instance: HTMLElement | null) {
            //获取对象的高度与宽度
            var height = instance.clientHeight + 400;
            var width = instance.clientWidth - 25; 
            //创建场景
            const scene = new THREE.Scene();
            //创建一个摄像机
            const camera = new THREE.PerspectiveCamera(
                75,
                width / height,
                0.1,
                1000
            );
            camera.position.set(0, 0, 10);
            scene.add(camera);
            //创建一个物体
            const geometry = new THREE.BoxGeometry(1, 2, 3);
            const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            //渲染器
            const reander = new THREE.WebGLRenderer();
            reander.setSize(width, height);
            //渲染器在canvas里面渲染
            instance.append(reander.domElement);
            //创建一个轨道
            const controls = new OrbitControls(camera, reander.domElement);
            controls.enableDamping = true;
            //创建坐标
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);
            //gsap动画库
            gsap.to(cube.position, {
                x: 5,
                duration: 5,
                ease: "power1.inOut",
                repeat: 2,
                yoyo: true,
            });
            //渲染函数
            function render() {
                controls.update();
                reander.render(scene, camera);
                //js原生方法
                requestAnimationFrame(render);
            } 
            render()
        }

        onMounted(()=>{
            init(threeDom.value)
        })
        return {
            threeDom,
        }
     }
})
</script>
<style scoped>
#threeDom {
    height: 600px;
}
</style>

```

