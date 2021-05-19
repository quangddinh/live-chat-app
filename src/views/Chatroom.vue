<template>
    <div class="container">
        <Navbar />
        <NewChatForm />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
    components: { Navbar, NewChatForm },
};
</script>

<style></style>
