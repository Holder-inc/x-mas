/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { KAKAO_JS_KEY, KAKAO_MESSAGE_TEMPLATE_KEY } from "src/config/secretKey";

export const initKakao = () => {
	if (!window.__kakao__.isInitialized()) {
		Kakao.init(KAKAO_JS_KEY);
	}
}

export const shareWithKakao = (uri, message) => {
	window.__kakao__.Link.sendDefault({
		objectType: 'feed',
		content: {
		  title: '크리스마스 카드가 왔어요!',
		  description: message,
		  imageUrl:
			'https://github.com/swimmingkiim/blog-comments/blob/main/assets/images/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-12-17_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6_39_18_AdobeExpress.gif?raw=true',
		  imageWidth: 1920,
		  imageHeight: 1080,
		  link: {
			mobileWebUrl: uri,
		  },
		},
		buttons: [
		  {
			title: '카드보기',
			link: {
			  mobileWebUrl: uri,
			  webUrl: uri,
			},
		  },
		],
	  });
}