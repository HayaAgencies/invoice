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
    GetTotal()
}
function gtem(v)
{
    var index = $(v).parent().parent().index();
    
    var qty = document.getElementsByName("qty")[index].value;
    var rate = document.getElementsByName("rate")[index].value;

    var amt = qty * rate
    document.getElementsByName("amount")[index].value = amt
    GetTotal();
}
function GetTotal()
{
    var  sum = 0;
    var amts= document.getElementsByName("amount")

    for(let index = 0; index <amts.length; index++)
    {
        var amt = amts[index].value
        sum = + (sum)+ +(amt);
    }
document.getElementById("Ftotal").value = sum;
}