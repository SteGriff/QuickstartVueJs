Vue.component('my-input', {
  props: ['value', 'name'],
  template: `<div>
			<label :for="name">
				{{name}}
			</label>
			<input
				:id="name"
				:name="name"
				:value="value"
				v-on:input="$emit('input', $event.target.value)"/>
			</div>`
});

Vue.component('number-list', {
  props: ['value'],
  methods : {
	  highPassFilter : function(input)
	  {
		  return input.filter(x=>x<=5);
	  }
  },
  template: `<ul>
			<li v-for="item in highPassFilter(value)">
				{{item}}
			</li>
			</ul>`
});

Vue.component('field-list', {
  props: ['value'],
  methods : {
	  fieldFilter : function(input)
	  {
		  return input;
	  }
  },
  template: `<ul>
			<li v-for="item in fieldFilter(value)">
				{{item}}
			</li>
			</ul>`
});

var app = new Vue({
  el: '#app',
  data: {
	aName: '',
	numbers: [1,2,3,4,5,6,7,8,9,10],
	fields: {"name":"ann", "age":34, "pet":{"name":"fido"}}
  }
})