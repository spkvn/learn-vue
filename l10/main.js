Vue.component("k-modal", {
	template: `
		<div class="modal is-active">
			<div class="modal-background" @click="$emit('close')"></div>
			<div class="modal-content">
				<div class="box">
		    		<slot></slot>
				</div>
		  	</div>
		  	<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`
});

var app = new Vue({
	el: "#root", 
	data: {
		showModal: false
	}
})