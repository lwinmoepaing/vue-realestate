<template>
	<b-container class="mt-3">
		<b-row class="justify-content-center">
				<b-col lg="4">
						<b-card
							:title="`${$t('navbar.contact')}`"
							img-src="https://i.picsum.photos/id/1/536/354.jpg?blur=2"
							img-alt="Image"
							img-top
							tag="article"
							class="mb-2"
						>
						<b-card-text>
							{{$t('address.no')}}
						</b-card-text>
						<b-card-text>
							{{$t('address.road')}}
						</b-card-text>
						<b-card-text>
							{{$t('address.township')}}
						</b-card-text>

						<b-button href="#" variant="warning">{{$t('btn.contact')}}</b-button>
					</b-card>
				</b-col>
		</b-row>
	</b-container>
</template>
