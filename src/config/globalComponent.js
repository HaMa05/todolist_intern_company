import { defineAsyncComponent } from 'vue';

export const registerGlobalComponents = (app) => {
	app.component(
		'Auth',
		defineAsyncComponent(() => import('@/layouts/Auth.vue'))
	);
	app.component(
		'Default',
		defineAsyncComponent(() => import('@/layouts/Default.vue'))
	);
};
