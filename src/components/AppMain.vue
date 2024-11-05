<script>
    import ProjectCard from './ProjectCard.vue';
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
    data() {
        return { 

            store,
            defaultUrl:'http://127.0.0.1:8000/api/projects',
            prevPage:null,
            nextPage:null
        }
        
    },

    mounted(){
        this.getProjects(this.defaultUrl);

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
    main{

    background-color: lightcoral;
    padding: 50px 0;

        .project-container{

            height: 200px;

        }

    }

</style>
