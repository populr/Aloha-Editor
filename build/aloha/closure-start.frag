var target_window, target_document;

if ($('#pop-frame').length) {
  target_window = $('#pop-frame')[0].contentWindow;
  target_document = $('#pop-frame').contents()[0];
} else if ($('#share-email-preview').length) {
  target_window = $('#share-email-preview')[0].contentWindow;
  target_document = $('#share-email-preview').contents()[0];
} else {
  target_window = window;
  target_document = window.document;
}
(function(window, document, define) {
  if (parent) {
    window.Aloha = parent.window.Aloha;
  } else {
    window.Aloha = window.Aloha;
  }
  Aloha.window = window;
  Aloha.document = document;

