<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <div class="error">{{ error }}</div>
        <!-- ko can v-if -->
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
    setup(props, context) {
        //refs
        const email = ref("");
        const password = ref("");

        // call composable
        const { login, error } = useLogin();

        const handleSubmit = async () => {
            await login(email.value, password.value);
            if (!error.value) {
                context.emit("login");
                // pass emit to Welcome.vue
            }
        };

        return { email, password, handleSubmit, error };
    },
};
</script>

<style></style>
