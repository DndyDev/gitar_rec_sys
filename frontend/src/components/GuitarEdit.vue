<template>
	<div class="container" style="margin-top: 10px">
		<div class="panel-heading">Редактирование формы</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputName">Название</label>
					<input type="text" class="form-control" id="inputName" v-model="name">
				</div>
				<div class="form-group">
					<label for="inputLink">Источник картинки</label>
					<input type="url" class="form-control" id="inputLink" v-model="url">
				</div>
				<div class="form-group">
					<label for="inputDescription">Описание</label>
					<input type="text" class="form-control" id="inputDescription" v-model="description">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>

	import {mapActions} from "vuex";

	export default {
		data() {
			return {
				id: parseInt(this.$route.params.id),
				name: "",
				url: "",
				description: "",
				searchQuery:null

			};
		},
		created() {
			if (this.id !== 0 && this.guitars) {
				this.name = this.guitar.name;
				this.url = this.guitar.url;
				this.description = this.guitar.description;

			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					name: this.name,
					url: this.url,
					description: this.description,
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem(item);
				} else {
					await this.addItem(item);
				}
				await this.$router.push({name: "app"});
			},
			...mapActions([
				'addItem',
				'editItem'
			])
		},
		computed: {

			guitar() {
				return this.id !== 0 ?
					this.$store.state.guitars.find(item => item.id === this.id):
					null;
			},
		}
	}
</script>