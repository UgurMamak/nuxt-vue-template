//Login yapılmamışsa login sayfasına yönlendirir.
export default function (context) {
  if (!context.store.getters['auth/isAuthenticated']) {
    context.redirect('/login');
  }
}
