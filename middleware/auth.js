//Login yapılmamışsa login sayfasına yönlendirir.
export default function (context){
  if(!context.store.getters.isAuthenticated){
    context.redirect('/login');
  }
}
