import { ref } from "vue";

/* 使用者資訊 */
export const isShowInfoUser = ref(false);
export const isShowInfoFriend = ref(false);
/* 使用者編輯 */
export const isShowEdit = ref(false);
/* 建立頻道 */
export const isCreateChannel = ref(false);
/* 伺服器編輯 */
export const isServerInfo = ref(false);
/* 伺服器成員管理 */
export const isServerUser = ref(false);
/* 伺服器成員邀請 */
export const isServerInvite = ref(false);

export default {
  isShowInfoFriend,
  isCreateChannel,
  isShowInfoUser,
  isServerInvite,
  isServerUser,
  isServerInfo,
  isShowEdit,
};
