<template>
    <div>
        <input type="file" webkitdirectory @change="setSourceFolder" />
        <input type="file" webkitdirectory @change="setDestinationFolder" />
        <button class="btn btn-dark" @click="executeRenaming">Execute Renaming</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const sourceFolder = ref<string | null>(null);
        const destinationFolder = ref<string | null>(null);

        const setSourceFolder = (event: Event) => {
            const files = (event.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                sourceFolder.value = files[0].webkitRelativePath.split("/")[0];
            }
        };

        const setDestinationFolder = (event: Event) => {
            const files = (event.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                destinationFolder.value = files[0].webkitRelativePath.split("/")[0];
            }
        };

        const executeRenaming = () => {
            // Logic to execute renaming and update Vuex state
            console.log("Executing renaming...");
        };

        return {
            sourceFolder,
            destinationFolder,
            setSourceFolder,
            setDestinationFolder,
            executeRenaming,
        };
    },
});
</script>
