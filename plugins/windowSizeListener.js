
import { ref, onMounted, onUnmounted} from "vue";

export default function useWindowSizeListener() {
    let windowWidth = ref(2000);

    function update() {
        windowWidth.value = window.innerWidth;
    }

    onMounted(() => window.addEventListener("resize", update));
    onUnmounted(() => window.removeEventListener("resize", update));

    return windowWidth;
}
