function recurringTask(firstDate, k, daysOfTheWeek, n) {
	var initDate = new Date (firstDate)
    var days= daysOfTheWeek.map(val =>{
		switch (val) {
			case 'Sunday':
				return 0
				break;
			case 'Monday':
				return 1
				break;
			case 'Tuesday':
				return 2
				break;
			case 'Wednesday':
				return 3
				break;
			case 'Thursday':
				return 4
				break;
			case 'Friday':
				return 5
				break;
			case 'Saturday':
				return 6
				break;
			default:

		}
	})
	var recurring = 1
	var interval = k*7

	var createCalendar = function(){
		var calendarDays;
		if (initDate.getFullYear()%4 !== 0){
			calendarDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
		}else{
			[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
		}

		return calendarDays
	}
	console.log(interval)
    return recurring
}


recurringTask("01/04/2015", 2, ["Thursday", "Monday"],4)
//console.log(recurringTask("01/01/2015", 2, ["Thursday", "Monday"],4))
