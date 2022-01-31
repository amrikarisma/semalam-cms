<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
            <router-link :to="{ name: 'home' }" class="navbar-brand">Logo</router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link px-lg-3 py-3 py-lg-4">Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="/dashboard" target="_blank" class="nav-link px-lg-3 py-3 py-lg-4">Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>