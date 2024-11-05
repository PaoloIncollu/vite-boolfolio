<script>
    
    
    import { store } from '../store.js';
    export default {
        data() {
            return { 

                store
            
            }
            
        },

        props:{

            
            id: Number,
            name: String,
            technologies: Array,
            type: Object
            
        }
    }

</script>

<template>


                    
    <div class="card-body">

        <div>
                            
            <h5>{{ id }})  {{ name }}</h5>
                                
        </div>

        <div>

            <h5 class="text-secondary d-inline-block me-2">Tipo:</h5>
                                
            <h5 v-if="type != null" class="d-inline-block">

                {{ type.name }}

            </h5>

            <h5 v-else class="text-secondary d-inline-block">

                Non tipizzato

            </h5>

        </div>
        <div>

            <h5 class="text-secondary d-inline-block">Tecnologie: </h5>
                                
            <span v-for="technology in technologies" :key="technology.id" class="badge rounded-pill text-bg-primary m-1">
                {{ technology.name }}
            </span>
                            
                                
                            

        </div>
    </div>

    
</template>

<style lang="scss" scoped>



    .card-body{
        
        span{

            width: fit-content;
            padding: 4px 8px;
        }
        
    }

</style>