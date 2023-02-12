import { ref, onMounted, onUnmounted} from "vue";

export default function useWindowSizeListener() {
    let windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1136);

    function update() {
        windowWidth.value = window.innerWidth;
        console.log(windowWidth, windowWidth.value);
    }

    onMounted(() => window.addEventListener("resize", update));
    onUnmounted(() => window.removeEventListener("resize", update));

    return windowWidth;
}
