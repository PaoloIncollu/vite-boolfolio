<script>
    import ProjectCard from '../components/subComponents/ProjectCard.vue';
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
    data() {
        return { 

            store,
            prevPage:null,
            nextPage:null
        }
        
    },

    mounted(){
        this.getProjects(this.store.defaultUrl);

    },

    components:{
        ProjectCard,
    },
    
    methods:{

        getProjects(url) {
        axios
            .get(url)
            .then((res) => {
            
            console.log('DATI CHE CI HA RISPOSTO IL SERVER:', res.data.projects.data);
            
            this.store.projects = res.data.projects.data;
            this.prevPage = res.data.projects.prev_page_url;
            this.nextPage = res.data.projects.next_page_url;
            
            });
        },
        getPrevPage(){

            this.getProjects(this.prevPage);
        },

        getNextPage(){

            this.getProjects(this.nextPage);
        }
    }
    }
</script>

<template>
    <main>


        
        <div class="container">

            <div class="d-flex justify-content-between project-container">

                <div v-for="project in this.store.projects" :key="project.id" class="card mx-2 w-25">

                    <ProjectCard 
                    
                        :id="project.id"
                        :name="project.name"
                        :cover="project.full_cover_url"
                        :slug="project.slug"
                        :technologies="project.technologies"
                        :type="project.type"/>
                        
                </div>    
                
                

                
                
                
            </div>

            <div class="container-buttons d-flex justify-content-center mt-5">

                <button @click="getPrevPage()" :disabled="prevPage == null" class="prev-button me-3">
                    &lt; Precedente
                </button>
                
                <button @click="getNextPage()" :disabled="nextPage == null" class="next-button">
                    Successiva &gt;
                </button>
            </div>
        </div>
        
    
    </main>
</template>

<style lang="scss" scoped>
    

    .project-container{

        height: fit-content;

        .card{

            height: fit-content;
        }

    }

    

</style>
