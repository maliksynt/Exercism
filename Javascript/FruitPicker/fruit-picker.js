import { notify } from "./notifier.js";
import { order } from "./grocer.js";

export function onSuccess() {
  const success = {
    message: "SUCCESS",
  };
  notify(success);
}

export function onError() {
  const success = {
    message: "ERROR",
  };
  notify(success);
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

export function postOrder(variety, quantity) {
  const obj = {};
  obj.variety = variety;
  obj.quantity = quantity;
  orderFromGrocer(obj, onSuccess, onError);
}
