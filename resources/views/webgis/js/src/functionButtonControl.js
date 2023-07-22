import $ from "jquery";

export const disableAllFunction = (parent) => {
  if (parent.attr("data-function-active") == "true") {
    return;
  }
  $("#clear").click();
  $("button[data-function-active=true]").each((id, el) => {
    el.click();
    el.setAttribute("data-function-active", false);
  });
};