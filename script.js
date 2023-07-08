function GetPrint()
{
    window.print();
}
function AddRow(){
    var v =  $("#Trow").clone().appendTo("#Tbody");
    $(v).find('input').val('');
    $(v).removeClass("d-none");
}
function Deleter(v){
    $(v).parent().parent().remove();
}
function GetTot(v)
{
    var index = $(v).parent().parent().index();
    
    var qty = document.getElementsByName("Qty")[index].value;
    var rate = document.getElementsByName("Rate")[index].value;

    var amt = qty * rate
    document.getElementsByName("Amount")[index].value = amt
    GetTotal();
}
function GetTotal()
{
    var  sum = 0;
    var amts= document.getElementsByName("Amount")

    for(let index = 0; index <amts.length; index++)
    {
        var amt = amts[index].value
        sum = + (sum)+ +(amt);
    }
document.getElementById("Ftotal").value = sum
}