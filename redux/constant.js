export const BASE_URL = "https://rsrobotic.in/index.php";

export const LOGIN_STAFF = "LOGIN_STAFF";
export const LOGOUT_STAFF = "LOGOUT_STAFF";
export const CHANGE_PASSWORD_STAFF = "CHANGE_PASSWORD_STAFF";
export const VIEW_PROFILE_STAFF = "VIEW_PROFILE_STAFF";
export const PUNCH_IN = "PUNCH_IN";

export const VIEW_TASK = "VIEW_TASK";
export const UPDATE_TASK = "UPDATE_TASK,";

export const VIEW_SITE = "VIEW_SITE";
export const SEARCH_SITE = "SEARCH_SITE";

export const VIEW_PROJECT = "VIEW_PROJECT";
export const SEARCH_PROJECT = "SEARCH_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const COUNT_PROJECTS = "COUNT_PROJECTS";
export const CHANGE_PROJECT_STATUS = "CHANGE_PROJECT_STATUS";

export const VIEW_PAYMENT = "VIEW_PAYMENT";
export const SEARCH_PAYMENT = "SEARCH_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const DELETE_PAYMENT = "DELETE_PAYMENT";
export const COUNT_PAYMENTS = "COUNT_PAYMENTS";

export const initialState = {
  userId: null,
  currentTask: null,
  currentSite: null,
  currentProject: null,
  currentPayment: null,
};
