<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
	data() {
		return {
			store,
			project: null
		};
	},
	mounted() {
		this.getProject();
	},
	methods: {
		getProject() {
			axios
				.get(this.store.defaultUrl + '/' + this.$route.params.slug)
				.then((res) => {
					console.log(res.data.project);

					this.project = res.data.project;
					console.log(this.project);
				})
				.catch((err) => {
					console.error(err);

					this.$router.push({ name: 'not-found' });
				});
		}
	}
}
</script>

<template>
	<div class="container" v-if="project != null">
		<h1>
			{{ project.id }}) {{ project.name }}
		</h1>

		<div>

			<h5 class="text-secondary d-inline-block me-2">Tipo:</h5>
			<h5 v-if="project.type != null" class="d-inline-block">
				{{ project.type.name }}
			</h5>
			<h5 v-else>
				Non tipizzato
			</h5>

			<div>

				<h5 class="text-secondary d-inline-block">Tecnologie: </h5>
				<span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill text-bg-primary m-1">
					{{ technology.name }}
				</span>
			</div>

			<div>

				<h5 class="text-secondary d-inline-block me-2">Contenuto: </h5>
				<p class="d-inline-block">
					{{ project.content }}
				</p>
			</div>

			
			
			<div>
				<img :src="project.full_cover_url" :alt="project.name">
			</div>

            
		</div>
	</div>
</template>

<style scoped>

</style>