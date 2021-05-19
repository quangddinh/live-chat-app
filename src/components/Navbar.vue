<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{ user.displayName }}</p>
            <p class="email">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

// nhận composable
export default {
    setup() {
        const { logout, error } = useLogout();
        const { user } = getUser();
        const router = useRouter();

        // nhận composable

        const handleClick = async () => {
            //gọi hàm giống composable, phải có async giống composable

            await logout();
            if (!error.value) {
                console.log("user loged out!!!");
            }
            if (user.value === null) {
                router.push({ name: "Welcome" });
            }
        };

        // xử lý cookie session -> route guard

        return { handleClick, user };
    },
};
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>
