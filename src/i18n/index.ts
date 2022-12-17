import { createI18n } from "vue-i18n";
import cn from "./cn.json";
import en from "./en.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    cn: cn,
  },
});

export default i18n;
