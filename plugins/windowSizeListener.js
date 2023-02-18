import { ref, onMounted, onUnmounted} from "vue";

export default function useWindowSizeListener() {
    let windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1136);
    //let windowHeight = ref(typeof window !== "undefined" ? window.innerHeight : 500);

    function update() {
        windowWidth.value = window.innerWidth;
        //windowHeight.value = window.innerHeight;
        console.log(windowWidth.value, " -width");
        ///console.log(windowHeight.value, " -height");
    }

    onMounted(() => window.addEventListener("resize", update));
    onUnmounted(() => window.removeEventListener("resize", update));

    return windowWidth;
}
