<template>
    <div>
        
    </div>
</template>
<script setup lang="ts">
import { useQuery } from "vue-query";
import axios from "axios";
const route = useRoute()
const props = defineProps<{
    source: BeatIndividual;
}>()
const { isLoading, isError, data, error }: any = useQuery(
  "commentsData",
  () => axios.get(`http://localhost:3000/api/beats/`)
);
</script>
