<template>
	<div class="text-center">
		<img
			:src="img_src"
			class="m-auto max-w-20rem "
		/>
		<div class="mt-3">
			<h5 v-html="$t('explorePlaces')">
			</h5>
		</div>
	</div>
</template>

<script>
import RegisterSVG from '@/assets/undraw_illu/register.svg';

export default {
	data() {
		return {
			img_src: RegisterSVG
		}
	},
	components: {
	}
}
</script>

<style scoped>
	.max-w-20rem {
		max-width: 23rem;
	}
</style>
