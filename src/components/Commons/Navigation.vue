<template>
	<b-navbar
		class="cus-nav"
		toggleable="md"
		type="dark"
		variant="warning"
		sticky
	>
		<b-navbar-brand href="#" class="text-white">
			AarWarDarr Realestate
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-text>
					<span class="en-right">
						<img class="img" :src="EnIcon" alt="en" @click="setlang('en')" />
					</span>

					<span class="en-right">
						<img class="img" :src="CnIcon" alt="mm" @click="setlang('cn')" />
					</span>

					<span>
						<img class="img" :src="MmIcon" alt="mm" @click="setlang('mm')" />
					</span>
				</b-nav-text>

				<b-navbar-nav>
					<b-nav-item :to="`/${$i18n.locale}`">
						<MdHome class="icon" />{{ $t("navbar.home") }}</b-nav-item
					>
					<b-nav-item :to="`/${$i18n.locale}/post-ad`">
						<IosAppsIcon class="icon" />{{ $t("navbar.postAndAd") }}</b-nav-item
					>
					<b-nav-item :to="`/${$i18n.locale}/contact`">
						<IosCallIcon class="icon" />{{ $t("navbar.contact") }}</b-nav-item
					>
					<b-nav-item :to="`/${$i18n.locale}/about`">
						<MdInformationCircleIcon class="icon" />{{
							$t("navbar.about")
						}}</b-nav-item
					>
					<b-nav-item :to="`/${$i18n.locale}/signup`">
						<MdPersonAddIcon class="icon" />{{
							$t("navbar.signUp")
						}}</b-nav-item
					>
				</b-navbar-nav>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import EnIcon from "@/assets/language_icon/english.png";
import MmIcon from "@/assets/language_icon/myanmar.png";
import CnIcon from "@/assets/language_icon/china.png";

import MdHome from "vue-ionicons/dist/md-home.vue";
import IosCallIcon from "vue-ionicons/dist/ios-call.vue";
import MdInformationCircleIcon from "vue-ionicons/dist/md-information-circle.vue";
import IosAppsIcon from "vue-ionicons/dist/ios-apps.vue";
import MdPersonAddIcon from "vue-ionicons/dist/md-person-add.vue";

export default {
	data() {
		return {
			EnIcon,
			MmIcon,
			CnIcon
		};
	},
	methods: {
		setlang(lang) {
			this.$i18n.locale = lang;
		}
	},
	components: {
		MdHome,
		IosCallIcon,
		IosAppsIcon,
		MdInformationCircleIcon,
		MdPersonAddIcon
	}
};
</script>

<style scoped>
.cus-nav {
	box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.67);
}

.nav-link {
	color: #fff !important;
}

.icon {
	position: relative;
	top: 3px;
	right: 1px;
}

.img {
	max-width: 24px;
	height: 20px;
	margin: 0 7px;
	cursor: pointer;
}

.en-right::after {
	content: "";
	width: 100%;
	border-right: 1px solid #fff;
	position: relative;
	top: 3px;
	transform: translateY(-50%);
}
</style>
