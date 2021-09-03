//Kullanıcının oturum bilgilerini kontrol ederek state günceller.
//Sayfa ilk önce SSR tarafında çalıştığı için kullanıcının daha önce login olup olmadığını kontrol ederken SSR tarafında localStorege'i kullanamayız.
// Bunun için cookie kullanıldı. SSR tarafında cookie Client tarafında localStorege'den bilgileri çekerek state güncellenir ve kontrol işlemleri yapılır.
export default function (context) {
  if (process.client) {
    console.log("sessionControl client run");
    context.store.dispatch('auth/initAuth');
  } else {
    console.log("sessionControl SSR run");
     context.store.dispatch('auth/initAuth', context.req);
  }
}
