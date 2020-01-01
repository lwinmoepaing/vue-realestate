<template>
	<b-container class="mt-3">
		<b-row class="justify-content-center">
				<b-col lg="4">
						<b-card
							:title="`${$t('navbar.home')}`"
							img-src="https://picsum.photos/600/300/?image=25"
							img-alt="Image"
							img-top
							tag="article"
							class="mb-2"
						>
						<b-card-text>
							{{$t('message')}}
						</b-card-text>

						<b-button href="#" variant="warning">{{$t('btn.go')}}</b-button>
					</b-card>
				</b-col>
		</b-row>
	</b-container>
</template>
