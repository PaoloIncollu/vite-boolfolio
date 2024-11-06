<script>
    export default {
    data() {
        return { 
        message: 'Laravel Boolfolio - API',

        menuItems: [
				{
					routeName: 'home',
					label: 'Home'
				},
				{
					routeName: 'about',
					label: 'Chi siamo'
				},
				{
					routeName: 'projects-index',
					label: 'Projects'
				}
              
			]
        }
    }
    }
</script>

<template>
    <header>
        <h1>
        {{ message }}
        </h1>

        <ul class="d-flex justify-content-center">
				<li v-for="(item, index) in menuItems" :key="index" class="list-group-item mx-2 ">
					<router-link :to="{ name: item.routeName }" class="nav-link btn btn-warning p-2">
						{{ item.label }}
					</router-link>
				</li>

				 
			</ul>
    </header>
</template>

<style lang="scss" scoped>

    header {
    
    text-align: center;
    padding: 20px 0;

    
    }


</style>
