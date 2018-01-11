Vue.component("k-message", {
	props: ['title', 'body', 'src'],
	data(){
		return {
			isVisible: true
		};
	},
	template: `
	<div class="column" v-show="isVisible">
		<div class="card">
			<div class="card-image">
				<figure class="image is-4by3">
					<img :src="src"/>
				</figure>
			</div>
			<div class="card-content">
				<p @click="toggleVisible" class="is-pulled-right">&times;</p>
				<p class="title">{{title}}</p>
				<p>{{body}}</p>
			</div>
		</div>
	</div>
	`,
	methods: {
		toggleVisible(){
			this.isVisible = !this.isVisible;
		}
	}
});

var app = new Vue({
	el: "#root", 
})