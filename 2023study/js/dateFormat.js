function dateFormate(dateInput,format){
    let day = dateInput.getDate()
    let month = dateInput.getMonth()+1
    let year = dateInput.getFullYear()
    console.log(day,month,year);
    format=format.replace(/yyyy/,year)
    format=format.replace(/MM/,month)
    format=format.replace(/dd/,day)
    console.log(format);
    return format
}
dateFormate(new Date(),'yyyy年MM年dd')