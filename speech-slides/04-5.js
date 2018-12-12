const user = {
  lang: {
    current: 'ru'
  }
};

if (user) {
  if (user.lang) {
    if (user.lang.default) {
      
    }
  }
}


const userDefaultLang = Maybe.fromNull(user.lang.default)
  .orElse(Some('en'))
  .val;
