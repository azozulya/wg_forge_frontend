import Users from "../../data/users";

class Utils {
  static DateFormat(UNIX_timestamp) {
    return dateFormat(UNIX_timestamp, true);
  }

  static BirthdayFormat(UNIX_timestamp) {
     return dateFormat(UNIX_timestamp);
  }

  static getUsersIdsByGender(gender) {
    return Users.filter( user => user.gender === gender ).map( user => user.id );
  }
}

const addZero = n => n > 9 ? n : '0' + n;

const dateFormat = (UNIX_timestamp, time = false) => { // DD/MM/YYYY || DD/MM/YYYY hh:mm:ss
  const date = new Date(UNIX_timestamp * 1000);
  const d = `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
  return time ? d + ` ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}` : d;
};


export default Utils;
