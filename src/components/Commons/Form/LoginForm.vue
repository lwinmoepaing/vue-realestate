<template>
  <b-container>
		<b-row class="justify-content-center">
			<b-col lg=8>
				<b-form @submit="onSubmit" @reset="onReset" v-if="show">

					<b-form-group
						id="input-group-1"
						:label="$t('form.email')+' :'"
						label-for="input-1"
					>
						<b-form-input
							id="input-1"
							v-model="form.email"
							type="email"
							required
							:placeholder="$t('form.email')"
						></b-form-input>
					</b-form-group>

					<b-form-group
						id="input-group-2"
						:label="$t('form.password')+' :'"
						label-for="input-2"
					>
						<b-form-input
							id="input-2"
							v-model="form.name"
							required
							type="password"
							:placeholder="$t('form.password')"
						></b-form-input>
					</b-form-group>

					<div class="text-right">
						<b-button size="sm" type="submit" variant="primary" class="mr-1"> {{$t('btn.login')}} </b-button>
						<b-button size="sm" variant="outline-warning" class="mr-1"> {{$t('btn.register')}}? </b-button>
					</div>

				</b-form>
			</b-col>
		</b-row>

  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
	.w-80 {
		margin-left: auto;
		width: 80%;
	}
</style>
