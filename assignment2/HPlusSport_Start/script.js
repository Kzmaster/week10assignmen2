$(function () {
	$("#products h2.product-name[data-type='mineralwater']").css("background-color", "blue");
	$("#products h2.product-name[data-type='vitamin']").css("background-color", "green");
	$("#products h2.product-name[data-type='proteinbar']").css("background-color", "purple");

document.querySelector('#vitamins').addEventListener('change',function (evt) {
                view("vitamins", evt.target.checked);
            });
            document.querySelector('#mineralwater').addEventListener('change',function (evt) {
                view("mineralwater", evt.target.checked);
            });
            document.querySelector('#protein').addEventListener('change',function (evt) {
                view("protein", evt.target.checked);
            });

            $(".product-item").each(function () {
                var prodName = encodeURIComponent($(this).children("h2").text());
                var prodID = encodeURIComponent($(this).data("prod_id"));

                var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
                $(this).children("img").wrap(link);
            })
            
        })

        function view(categoryName, bVisible) {
            // get a list of the product items for the given category.
            // Use the data attributes to narrow the list
            var dataSelectorVal = "";
            switch (categoryName) {
            case "vitamins":
                dataSelectorVal = "h2[data-type='vitamin']";
                break;
            case "mineralwater":
                dataSelectorVal = "h2[data-type='mineralwater']";
                break;
            case "protein":
                dataSelectorVal = "h2[data-type='proteinbar']";
                break;
            }
            // use the has() function to select the li tags that are product items
            // that contain the h2 tag with the corresponding data attribute value
            $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
        }