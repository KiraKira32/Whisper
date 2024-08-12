import { ref } from "vue";

/* 使用者資訊 */
export const isShowInfoUser = ref(false);
export const isShowInfoFriend = ref(false);
/* 使用者編輯 */
export const isShowEdit = ref(false);

/* 建立頻道 */
export const isCreateChannel = ref(false);

export default {
  isShowInfoFriend,
  isCreateChannel,
  isShowInfoUser,
  isShowEdit,
};
