<script>
    
    
    import { store } from '../store.js';
    export default {
        data() {
            return { 

                store
            
            }
            
        }
    }

</script>

<template>

<div v-for="project in this.store.projects" :key="project.id" class="card mx-2 w-25">
                    
    <div class="card-body">

        <div>
                            
            <h5>{{ project.id }})  {{ project.name }}</h5>
                                
        </div>

        <div>

            <h5 class="text-secondary d-inline-block me-2">Tipo:</h5>
                                
            <h5 v-if="project.type != null" class="d-inline-block">

                {{ project.type.name }}

            </h5>

            <h5 v-else class="text-secondary d-inline-block">

                Non tipizzato

            </h5>

        </div>
        <div>

            <h5 class="text-secondary d-inline-block">Tecnologie: </h5>
                                
            <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill text-bg-primary m-1">
                {{ technology.name }}
            </span>
                            
                                
                            

        </div>
    </div>
</div>
    
</template>

<style lang="scss" scoped>

.card{

    .card-body{
        
        span{

            width: fit-content;
            padding: 4px 8px;
        }
        
    }
}
</style>