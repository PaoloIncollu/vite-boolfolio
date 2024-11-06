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
			<h5 v-if="project.type != null">
				{{ project.type.name }}
			</h5>
			<h5 v-else>
				Non tipizzato
			</h5>

			<div>
				<div v-for="technology in project.technologies" :key="technology.id">
					{{ technology.name }}
				</div>
			</div>

			<p>
				{{ project.content }}
			</p>
			
			<div>
				<img :src="project.full_cover_url" :alt="project.name">
			</div>

            
		</div>
	</div>
</template>

<style scoped>

</style>