import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import * as yup from "yup";

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
  });

  //使用 useForm 建立表單驗證 form context，並設置表單初始狀態、驗證規則
  const { handleSubmit, defineField, errors } = useForm({
    validationSchema,
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
  });

  // 定義表單欄位，從中取得該欄位的 ref 值
  const [email] = defineField("email");
  const [userName] = defineField("userName");
  const [password] = defineField("password");

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
  };
});
