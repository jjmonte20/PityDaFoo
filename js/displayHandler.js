
$(document).ready(function () {

    function newEntry(name, start, role, mRate) {
    //calculate monthsWorked, totalBilled
    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    
    mWork = monthDiff(
        start,
        new Date(2018, 11, 6)
    );
    
    console.log(mWork);
    console.log(tBill);
    tBill = mRate*mWork;

    
        var newRow = $("<tr></tr>"); 
        newRow.append($("<td>"+name+"</td>"));
        newRow.append($("<td>"+start+"</td>"));
        newRow.append($("<td>"+role+"</td>"));
        newRow.append($("<td>"+mRate+"</td>"));
        newRow.append($("<td>"+mWork+"</td>"));
        newRow.append($("<td>"+tBill+"</td>"));
        $("#data-table").append(newRow);
    }

});
