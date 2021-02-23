import { _checkUserExists } from "../utils/utils";


export const validateUsername = async (username) => {
  if (username === "") {
    return [false, "The username field cannot be empty!"];
  }
  const userExists = await _checkUserExists(username);
  if (!userExists) {
    //console.log('this user does not exist!');
    return [false, "This user does not exist on Chess.com!" ];
  }
  return [true, "success"];
};


export const validateDateRange = (dateRangeFrom, dateRangeTo) => {
  try {
    if (dateRangeFrom.length !== 7 || dateRangeTo.length !== 7) {
      return [false, "The length of the date field must be 7:  YYYY/MM"];
    }
    const [yearFrom, monthFrom] = dateRangeFrom.split("/");
    const [yearTo, monthTo] = dateRangeTo.split("/");
    //console.log('yeexport defaultm:', yearFrom, 'monthFrom:', monthFrom, 'yearTo:', yearTo, 'monthTo:', monthTo);
    if (
      yearFrom === undefined ||
      monthFrom === undefined ||
      yearTo === undefined ||
      monthTo === undefined
    ) {
      return [false, "The date format is incorrect. It must be YYYY/MM"];
    }
    const yrRegex = /^2[0-9]{3}$/;
    const monthRegex = /^(0?[1-9]|1[012])$/;
    const regExPassed =
      yrRegex.test(yearFrom) &&
      monthRegex.test(monthFrom) &&
      yrRegex.test(yearTo) &&
      monthRegex.test(monthTo);
    //console.log('regEx passed:', regExPassed);
    if (!regExPassed) {
      return [false, "The date format is invalid. It must be YYYY/MM"];
    }
    if (yearFrom > yearTo) {
      return [false, "yearFrom cannot be greater than yearTo!"];
    }
    if (yearFrom === yearTo && parseInt(monthFrom) > parseInt(monthTo)) {
      return [false, "monthFrom cannot be greater than monthTo for the same year!"];
    }
    return [true, "success"];
  } catch (e) {
    return [false, "Date could not be validated. Please check and try again."];
  }
};


export const validateRatingRange = (opponentRatingFrom, opponentRatingTo) => {
  try {
    if (opponentRatingFrom.length === 0 || opponentRatingTo.length === 0) {
      return [false, "The field cannot be empty!"];
    };
    if ( isNaN(+opponentRatingFrom) || isNaN(+opponentRatingTo) ) { 
      return [false, "Rating must only contain digits!"] 
    };
    if (opponentRatingFrom.length > 4 || opponentRatingTo.length > 4) {
      return [false, "Rating length cannot exceed 4, at least not yet :)"];
    };
    const intFrom = parseInt(opponentRatingFrom);
    const intTo = parseInt(opponentRatingTo);
    return (intFrom >= 0 && intTo <= 4000 && intFrom <= intTo) ? [true, "success"] : [false, "Rating must be between 0 and 4000!"]
  } catch (e) {
    return [false, "Rating could not be validated. Please check and try again."];
  }
};