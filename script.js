// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const previewContainer = document.getElementById('preview-container');
previewContainer.appendChild(renderer.domElement);

// 创建 GLTF 加载器
const loader = new GLTFLoader();

// 加载模型
loader.load(
    'path/to/your/model.gltf',
    (gltf) => {
        const model = gltf.scene;
        scene.add(model);
    },
    undefined,
    (error) => {
        console.error('模型加载失败:', error);
    }
);

// 渲染循环
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
// 处理窗口大小变化
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});