var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    // Parse the input dates to obtain the number of milliseconds since the UTC epoch
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4)),
        parseInt(date1.substring(5, 7)) - 1,
        parseInt(date1.substring(8, 10))
    );

    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4)),
        parseInt(date2.substring(5, 7)) - 1,
        parseInt(date2.substring(8, 10))
    );

    // Calculate the difference in milliseconds between the two dates
    const timeDifference = utcDate2 - utcDate1;

    // Convert the difference to days
    const daysDifference = Math.round(timeDifference / oneDay);

    return daysDifference;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
