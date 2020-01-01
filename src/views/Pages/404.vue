<template>
	<b-container>
		<b-row class="justify-content-center">
			<b-col sm="8" md="6">
				<NotFoundSVG class="notFoundSVG" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import NotFoundSVG from '@/components/Commons/SVG/404SVG.vue'
export default {
	components: {
		NotFoundSVG
	}
}
</script>

<style scoped>
	.notFoundSVG {
		width: 100%;
	}
</style>
