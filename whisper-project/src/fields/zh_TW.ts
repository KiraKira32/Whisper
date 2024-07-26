import { localize } from "@vee-validate/i18n";

localize("en", {
  fields: {
    password: {
      required: "Hey! Password cannot be empty",
    },
  },
});



// Or update multiple languages
localize({
  en: {
    fields: {
      password: {
        required: "Hey! Password cannot be empty",
      },
    },
  },
});
