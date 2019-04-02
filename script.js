var items = [];

var prices = [];

$('.add').click(function() {
    var newitem = $(".name").val();
    var newprice = $(".price").val();
    items.push(newitem);
    prices.push(newprice);
    $(".lists").append("<div class='something'><p>" + newitem + "</p><p>" + newprice + "</p></div>");
    $(".finalItems").text("Total Items:" + items.length);

    var totalPrice = 0;

    prices.forEach(function(price) {
        var priceAsNumber = parseInt(price);
        totalPrice = totalPrice + priceAsNumber;
    });
    console.log(totalPrice);
    $(".finalPrice").text("Total Price:" + totalPrice);

});

$(".purchase").click(function(){
    alert("Thank you for making buying" + items[0] + "and several other items");
});