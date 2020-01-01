<template>
	<b-alert show variant="warning" class="text-center">
		<IosInformationCircleIcon w=20 h=20 class="icon" />
		<span class="pl-1" v-html="$t('alert.toLogin')">

		</span>

	</b-alert>
</template>

<script>
import IosInformationCircleIcon from 'vue-ionicons/dist/ios-information-circle.vue'
export default {
	components: {
		IosInformationCircleIcon
	}
}
</script>

<style scoped>
.icon {
	position: relative;
	top: 4px;
}
</style>
