<template>
  <div>
    <p>Header Component</p>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <NuxtLink to="/" tag="li" class="nav-item" active-class="active-item" exact>
            <a class="nav-link">Home <span class="sr-only">(current)</span></a>
          </NuxtLink>
          <NuxtLink to="/page2" tag="li" class="nav-item" active-class="active-item">
            <a class="nav-link">Page2</a>
          </NuxtLink>
          <NuxtLink to="/page4" tag="li" class="nav-item" active-class="active-item">
            <a class="nav-link">Page4</a>
          </NuxtLink>
          <NuxtLink to="/page5" tag="li" custom class="nav-item" active-class="active-item">
            <a class="nav-link">Page5</a>
          </NuxtLink>
 <!--         <NuxtLink to="/login" tag="li" custom class="nav-item" active-class="active-item">
            <a class="nav-link">login</a>
          </NuxtLink>
          <NuxtLink to="/register" tag="li" custom class="nav-item" active-class="active-item">
            <a class="nav-link">register</a>
          </NuxtLink>-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span :class="{'d-none':!this.$store.getters['auth/isAuthenticated']}">Hesap</span>
              <span :class="{'d-none':this.$store.getters['auth/isAuthenticated']}">Giriş Yap /Üye Ol</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NuxtLink to="/login" tag="a" class="dropdown-item" :class="{'d-none':this.$store.getters['auth/isAuthenticated']}">
                Giriş Yap
              </NuxtLink>
              <NuxtLink to="/register" tag="a" class="dropdown-item" :class="{'d-none':this.$store.getters['auth/isAuthenticated']}">
                Üye Ol
              </NuxtLink>
              <a href="#" @click.prevent="logout" class="dropdown-item" :class="{'d-none':!this.$store.getters['auth/isAuthenticated']}">Çıkış Yap</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('auth/logout');
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped lang="scss">
.active-item {
  .nav-link {
    color: red;
  }
}


</style>
