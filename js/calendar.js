var dt = new Date();
function RenderDate(){
    var endDate = new Date(dt.getFullYear(), dt.getMonth()+1,0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(),0).getDate();
    var today = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    if(dt.getMonth()==today.getMonth())
        document.getElementById("date_str").innerHTML = today.toDateString();
    else
        document.getElementById("date_str").innerHTML = dt.toDateString();
    dt.setDate(1);
    var day = dt.getDay();
    var y = (prevDate-day)+1;
    var cells = "";
    for(x=day;x>0;x--){
        cells+=`<div class="prev_date">${y}</div>`;
        y++;
    }
    for(i=1;i<=endDate;i++){
        if(i==today.getDate() && dt.getMonth()==today.getMonth()) {
            cells+=`<div class="today">${i}</div>`;
        }
        else{
            cells+=`<div>${i}</div>`;
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para){
    if(para=='prev'){
        dt.setMonth(dt.getMonth()-1);
    }
    else{
        dt.setMonth(dt.getMonth()+1);
    }
    RenderDate();
}