export default {

	verifyAccessToken() {
		//verify the token expiry by accessing the token expiry date from the store and comparing it with the current timestamp
		 return moment().tz("Europe/Istanbul").format('HH:MM') < moment(appsmith.store.Exp).tz("Europe/Istanbul").format('HH:MM');
	},

	signIn: async () => {
		const password = inpPassword.text;
		const [user] = await findUser.run();
		if ( user?.Sifre == password ) {
				storeValue('Kullanici', user?.KullaniciAdi);
				storeValue('Exp', moment().add('hours',2).tz("Europe/Istanbul").format('HH:MM'));
			  storeValue('Mgz', user?.KKullanici);
				storeValue('Yetki', user?.YetkiTur)
				.then(() => showAlert('Giriş Başarılı', 'success'))
			  .then(() => {user?.YetkiTur==3 ? (navigateTo('Dashboard', {}, 'SAME_WINDOW')) : user?.YetkiTur==2?(navigateTo('Toplam Puanlar', {}, 'SAME_WINDOW')):user?.YetkiTur==1?(navigateTo('Kategori Düzenleme', {}, 'SAME_WINDOW')):(navigateTo('Reyon Puan', {}, 'SAME_WINDOW'))});
	
		} else {
			return showAlert('Giriş Başarısız', 'error');
		}
	}
	
}