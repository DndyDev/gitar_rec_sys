<template>
    <div class="container" style="margin-top: 10px">
        <h5>Список гитар</h5>
        <div class="">
            <router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit', params: {id: 0}}">
                Добавить
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>№</th>
                <th style="width: 65%">Название</th>
                <th style="width: 10%">Источник картинки</th>
                <th>Описание</th>
                <th style="width: 20px"></th>
                <th style="width: 20px"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in guitars" :key="index">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td><a :href="item.link" target="_blank">{{ item.url }}</a></td>
                <td>{{item.description}}</td>
                <td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit', params: {id: item.id}}">
                    <i class="material-icons ">edit</i>


                </router-link></td>
                <td>
                    <button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
                        <i class="material-icons ">delete</i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import {mapActions, mapState} from 'vuex';

    export default {
        methods: {
            async handleRemoveClick(e, id) {
                await this.removeItem(id);
            },

            ...mapActions([
                'removeItem',
                'initialize'
            ])
        },
        computed: {
            ...mapState({
                guitars: state => state.guitars
            }),
            resultQuery(){
			  if(this.searchQuery){
			  return this.guitars.filter((item)=>{
				return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
			  })
			  }else{
				return this.resources;
			  }
    		}
        },
         mounted: async function () {
            await this.initialize();
        }
    }
</script>

<style scoped>

</style>