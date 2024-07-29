import { defineStore } from "pinia";
import { useForm } from "vee-validate";
// 引入VeeValidate 元件跟功能
import { defineRule, configure } from "vee-validate";
// 引入 VeeValidate 的驗證規則
import { required, email, min, confirmed } from "@vee-validate/rules";
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from "@vee-validate/i18n";
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import * as yup from "yup";
configure({
  generateMessage: localize({ zh_TW: zhTW }),
});
setLocale("zh_TW");

// 定義驗證規則
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// 密碼自定義規則
defineRule("regex", (value: string) => {
  // 檢查是否包含至少一個大寫字母
  const hasUpperCase = /[A-Z]/.test(value);
  // 檢查是否包含至少一個數字
  const hasNumber = /[0-9]/.test(value);
  // 檢查是否包含至少一個小寫字母
  const hasSymobol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

  if (hasUpperCase && hasNumber && hasSymobol) {
    return true;
  }
  if (value.length < 8) {
    return "密碼長度需至少8個字元";
  }
  if (value.length >= 21) {
    return "密碼長度不能超過20個字元";
  }
  return "密碼需至少包含一個大寫字母、一個特殊符號和一個數字";
});
// 密碼雙重驗證
defineRule("confirmed", (value, [target]: [string], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return "密碼不一致，請重新輸入";
});

export const useFormStore = defineStore("form", () => {
  //表單驗證規則
  const validationSchema = yup.object({
    email: yup.string().email("請輸入有效的電子郵件").required("此欄位為必填"),
    userName: yup.string().required("使用者名稱是必填項"),
    password: yup
      .string()
      .matches(/^[A-Za-z0-9]+$/, "密碼只能包含數字和英文字符")
      .required("密碼是必填項")
      .min(6, "密碼長度需至少6個字元"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "兩次輸入密碼不同")
      .required("再次輸入密碼是必填項"),
  });
  //使用 useForm 建立表單驗證 form context，並設置表單初始狀態、驗證規則
  const { handleSubmit, defineField, errors } = useForm({
    validationSchema,
    initialValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });
  //定義表單欄位，從中取得該欄位的 ref 值
  const [email] = defineField("email");
  const [userName] = defineField("userName");
  const [password] = defineField("password");
  const [confirmPassword] = defineField("confirmPassword");
  //使用從 useForm 取得的 handleSubmit 來建立 submit 處理函式，透過該方法建立的處理函式會在驗證成功後才會執行
  const onSubmit = handleSubmit((values, { resetForm }) => {
    console.log("success submit");
    resetForm();
  });
  return {
    email,
    userName,
    password,
    errors,
    onSubmit,
    confirmPassword,
  };
});
