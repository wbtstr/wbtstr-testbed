<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="dropdown navigation">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <span class="navbar-link">
                        Menu
                    </span>
                    <div class="navbar-dropdown is-boxed">
                        <router-link class="navbar-item" to="/">Home</router-link>
                        <router-link class="navbar-item" to="/counter">Counter</router-link>
                        <a class="navbar-item" href="/login">Login</a>
                    </div>
                </div>
            </div>            

            <div class="navbar-end">
                <div class="navbar-item">
                    <!-- Add mouse position. -->
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>