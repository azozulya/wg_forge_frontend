
class Utils {
  static DateFormat(UNIX_timestamp) {
    return dateFormat(UNIX_timestamp, true);
  }

  static BirthdayFormat(UNIX_timestamp) {
     return dateFormat(UNIX_timestamp);
  }
}

const addZero = n => n > 9 ? n : '0' + n;

const dateFormat = (UNIX_timestamp, time = false) => { // DD/MM/YYYY || DD/MM/YYYY hh:mm:ss
  const date = new Date(UNIX_timestamp * 1000);
  const d = `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
  return time ? d + ` ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}` : d;
};


export default Utils;
