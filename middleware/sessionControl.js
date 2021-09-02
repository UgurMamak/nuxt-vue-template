//Kullanıcının oturum bilgilerini kontrol ederek state günceller.
export default function (context) {
  if (process.client) {
    console.log("sessionControl client run");
    context.store.dispatch('auth/initAuth');
  } else {
    console.log("sessionControl SSR run");
    context.store.dispatch('auth/initAuth', context.req);
  }
}
