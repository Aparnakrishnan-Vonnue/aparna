const list_of_holidays = [
  "01-01-2023",
  "01-14-2023",
  "01-26-2023",
  "01-08-2023",
  "01-15-2023",
  "01-22-2023",
  "01-29-2023",
  "02-11-2023",
  "02-18-2023",
  "03-11-2023",
  "04-06-2023",
  "04-07-2023",
  "04-08-2023",
  "04-15-2023",
  "04-22-2023",
  "05-01-2023",
  "05-13-2023",
  "06-10-2023",
  "06-28-2023",
  "07-08-2023",
  "08-12-2023",
  "08-15-2023",
  "08-28-2023",
  "08-29-2023",
  "09-09-2023",
  "10-14-2023",
  "10-23-2023",
  "10-24-2023",
  "11-11-2023",
  "12-09-2023",
  "12-23-2023",
  "12-24-2023",
  "12-25-2023",
  "12-26-2023",
  "12-27-2023",
  "12-28-2023",
  "12-29-2023",
  "12-30-2023",
  "12-31-2023",
  "12-01-2023",
  "01-01-2024",
  "02-05-2023",
  "02-12-2023",
  "02-19-2023",
  "02-26-2023",
  "03-05-2023",
  "03-12-2023",
  "03-19-2023",
  "03-26-2023",
  "04-02-2023",
  "04-09-2023",
  "04-16-2023",
  "04-23-2023",
  "04-30-2023",
  "05-07-2023",
  "05-14-2023",
  "05-21-2023",
  "05-28-2023",
  "06-04-2023",
  "06-11-2023",
  "06-18-2023",
  "06-25-2023",
  "07-02-2023",
  "07-09-2023",
  "07-16-2023",
  "07-23-2023",
  "07-30-2023",
  "08-06-2023",
  "08-13-2023",
  "08-20-2023",
  "08-27-2023",
  "09-03-2023",
  "09-10-2023",
  "09-17-2023",
  "09-24-2023",
  "10-08-2023",
  "10-15-2023",
  "10-22-2023",
  "10-29-2023",
  "11-05-2023",
  "11-12-2023",
  "11-19-2023",
  "11-26-2023",
  "12-03-2023",
  "12-10-2023",
  "12-17-2023",
  "12-24-2023",
  "12-31-2023",
];



const list_of_birthdays = [
  "03-28-1998",
  "11-21-1999",
  "12-05-1994",
  "03-05-1976",
  "12-29-1962",
  "01-31-2000",
  "07-16-2002",
];

const day_to_celebrate = (holidays, bdays) => {

  for (let i = 0; i < bdays.length; i++) {
    for (let j = 0; j < holidays.length; j++) {
      {
    
        const date_of_holiday = new Date(holidays[j]);
        let date_of_bday = new Date(bdays[i])
        let date_to_celebrate = "";
        let saturdays = []
        if(date_of_bday.getDay() !== 6){
          let days_to_be_postponed = 6 - date_of_bday.getDay()
          let month = date_of_bday.getMonth() + 1
          if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            
          }

          date_to_celebrate = new Date(date_of_bday.getDate()+days_to_be_postponed , date_of_bday.getMonth()) 
          // console.log(date_of_bday.getDate()+days_to_be_postponed)
        }
        
      }
    }
  }
};

day_to_celebrate(list_of_holidays, list_of_birthdays);



function postponeDates(startDate, numberOfDays) {
  let postponedDates = [];
  let currentDate = new Date(startDate);
  

  for (var i = 0; i < numberOfDays; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    postponedDates.push(new Date(currentDate));
  }

  return postponedDates;
}


postponeDates("03-28-1998", 31)

function convertToCurrentYear(oldYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let difference = currentYear - oldYear;
  let currentYearNew = oldYear + difference;

  return currentYearNew;
}

console.log(convertToCurrentYear(1998))