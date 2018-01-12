Vue.component("k-modal",{
	template:`
	<div class="modal is-active">
	  <div class="modal-background" @click="$emit('close')"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">
	      	<slot name="header"></slot>
      	  </p>
	      <button class="delete" @click="$emit('close')" aria-label="close"></button>
	    </header>

	    <section class="modal-card-body">
	      <slot>There's no content passed to this.</slot>
	    </section>
	    
	    <footer class="modal-card-foot">
	      <slot name="footer">
			<button class="button is-success">Save changes</button>
	        <button class="button">Cancel</button>
	      </slot>
	    </footer>
	  </div>
	</div>
	`
});

var app = new Vue({
	el: "#root", 
	data: {
		showModal: false
	}
})