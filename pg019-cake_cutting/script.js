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
  "01-13-2024",
  "05-02-2023",
  "05-03-2023",
  "05-04-2023",
  "05-05-2023",
  "05-06-2023",
  "05-07-2023",
  "05-08-2023",
  "05-09-2023",
  "05-10-2023",
  "05-11-2023",
  "05-12-2023",
];

const list_of_birthdays = [
  "02-26-1994",
  "05-01-2023",
  "01-12-1999",
  "03-28-1998",
  "12-22-1995",
  "04-01-1998",
  "12-05-1994",
  "03-05-1976",
  "12-29-1962",
  "01-31-2000",
  "07-16-2002",
  "07-18-2002",
  "12-01-1992"
];



const day_to_celebrate = (bdays) => {
  for (let i = 0; i < bdays.length; i++) {
    let date_of_bday = new Date(bdays[i]);

    const current_year_equivalent = convert_to_current_year(
      date_of_bday.getFullYear()
    );

    let current_bday = new Date(
      current_year_equivalent,
      date_of_bday.getMonth(),
      date_of_bday.getDate()
    );

    if (current_bday.getDay() !== 6) {
      console.log(postpone_date(current_bday, 365));
    } 
    else {
      console.log(
        `${current_bday} is appropriate  for cake cutting for bdays on ${current_bday}`
      );
    }
  }
};

day_to_celebrate(list_of_birthdays);

function postpone_date(current_bday, number_of_days) {
  let postponed_dates = [];
  let current_date = new Date(current_bday);
  let sorted_list_of_holidays = list_of_holidays.sort(date_comparison);

  for (let i = 0; i < number_of_days; i++) {
    current_date.setDate(current_date.getDate() + 1);

    postponed_dates.push(new Date(current_date));
    

    if (postponed_dates[i].getDay() === 6) {

      for (let k = 0; k < sorted_list_of_holidays.length; k++) {
        
        let date_of_holiday = new Date(sorted_list_of_holidays[k]);
        if (postponed_dates[i].getTime() !== date_of_holiday.getTime()) {
          if (date_of_holiday.getTime() > postponed_dates[i].getTime()) {
            return `${postponed_dates[i]} is appropriate  for cake cutting for bdays on ${current_bday}`;
          }
          continue;
        } 
        else {
          break;
        }
        
      }
    }
  }
}

function convert_to_current_year(old_year) {
  let current_date = new Date();
  let current_year = current_date.getFullYear();
  let difference = current_year - old_year;
  let current_year_new = old_year + difference;

  return current_year_new;
}

function date_comparison(a, b) {
  const date_1 = new Date(a)
  const date_2 = new Date(b)
  
  return date_1 - date_2;
}


