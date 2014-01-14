var target_window, target_document, aloha_to_use;

if ($('#pop-frame').length) {
  target_window = $('#pop-frame')[0].contentWindow;
  target_document = $('#pop-frame').contents()[0];
  aloha_to_use = parent.window.Aloha;
} else {
  target_window = window;
  target_document = window.document;
  aloha_to_use = window.Aloha;
}

(function(window, aloha_to_use, document, define) {
  window.Aloha = aloha_to_use;
  Aloha.window = window;
  Aloha.document = document;

