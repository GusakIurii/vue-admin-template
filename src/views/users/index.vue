<template>
    <div>
        <h1>Привет {{user.firstName}}!</h1>
        <h3>Список зарегестрированніх пользователей:</h3>
        <em v-if="users.loading">Loading users...</em> 
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <!--
        <ul v-if="users.items">
            <li v-for="user in users.items" :key="user.id">
                {{'Username: ' + user.username + ' ' + 'First Name: ' + user.firstName + ' ' + 'Last Name: ' + user.lastName + ' '  + 'createdAt: ' + user.createdAt}} 
                <span v-if="user.deleting"><em> - Deleting...</em></span>
                <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span> 
            </li>
        </ul> -->
        <table class="table" v-if="users.items">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users.items" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>{{user.firstName }}</td>
            <td>{{ user.lastName}}</td>
            <td v-if="user.username != 'superadmin'">
            <span v-if="user.deleting"><em> - Deleting...</em></span>
            <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
            <span v-else>  <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
            </td>
            </tr>
        </tbody>
        </table> 
      <!--  <p>
            <router-link to="/login">Logout</router-link>
        </p> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: state => state.user,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
}

</script>