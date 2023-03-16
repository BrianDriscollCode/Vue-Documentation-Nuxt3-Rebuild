import { defineStore } from "pinia";

export const useCourseCompletionStore = defineStore("completionStore", {
    state: () => {
        return {
            completionStatus: {},
        };
    },
    actions: {
        changeCompletionStatus(newCompletionStatus) {
            this.completionStatus = newCompletionStatus;
        },
        seeCompletionStatus() {
            console.log(this.completionStatus);
            return this.completionStatus;
        }
    }
});