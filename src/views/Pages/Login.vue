<template>
	<b-container  class="mt-5">
		<b-row>
			<b-col class="mb-5" lg="6" order="2" order-lg="1">
				<DirectionToRegister />
			</b-col>
			<b-col class="mb-5" lg="6" order="1" order-lg="2">
				<ToLoginAlert />
				<LoginForm />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ToLoginAlert from '../../components/Commons/Alert/ToLogin.vue'
import LoginForm from '../../components/Commons/Form/LoginForm.vue'
import DirectionToRegister from '../../components/Commons/Direction/DirectionToRegister.vue'

export default {
	data(){return {};},
	components: {
		ToLoginAlert,
		LoginForm,
		DirectionToRegister
	}
}
</script>


