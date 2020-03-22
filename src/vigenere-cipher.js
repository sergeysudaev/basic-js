class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect === false ? false : true;
  }
  encrypt(message, key) {
    if (message && key) {
      if (!this.isDirect) {
        message = message
          .split("")
          .reverse()
          .join("");
      }
      let encryptedMessage = "";
      let index = 0;
      for (let i = 0; i < message.length; i++) {
        if (
          message.toUpperCase().codePointAt(i) > 64 &&
          message.toUpperCase().codePointAt(i) < 91
        ) {
          encryptedMessage += String.fromCodePoint(
            ((message.toUpperCase().codePointAt(i) -
              65 +
              (key.toUpperCase().codePointAt(index % key.length) - 65)) %
              26) +
              65
          );
          index++;
        } else {
          encryptedMessage += message[i];
        }
      }
      return encryptedMessage;
    } else {
      throw new Error();
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {
      if (!this.isDirect) {
        encryptedMessage = encryptedMessage
          .split("")
          .reverse()
          .join("");
      }

      let message = "";
      let index = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (
          encryptedMessage.toUpperCase().codePointAt(i) > 64 &&
          encryptedMessage.toUpperCase().codePointAt(i) < 91
        ) {
          message += String.fromCodePoint(
            ((encryptedMessage.toUpperCase().codePointAt(i) -
              65 +
              26 -
              (key.toUpperCase().codePointAt(index % key.length) - 65)) %
              26) +
              65
          );
          index++;
        } else {
          message += encryptedMessage[i];
        }
      }
      return message;
    } else {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
