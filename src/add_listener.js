
export const addEventPayWithMyBank = (onSuccess, onCancel) => {
  window.PayWithMyBank.addPanelListener(function(command, event) {
    if (command === 'event' && event.type === 'new_location') {
      event.preventDefault();
      if (event.data.indexOf('#success') === 0) {
        console.log('sucess');
        onSuccess && onSuccess();
      } else {
        console.log('cancel');
        onCancel && onCancel();
      }
      return false;
    }
  });
};


