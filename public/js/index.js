$(".nav-link").mouseenter(function() {

    $(".dropdown-container").addClass("dropdown-action");
});

$(".navbar").on("mouseleave", ".navbar, .dropdown-container", function() {
    $(".dropdown-container").removeClass("dropdown-action");
});



$(".nav-link").mouseenter(function(){
    var eventValue = $(this).text();
    console.log(eventValue);
    $.ajax({
        type:"POST",
        url:"/record-mouseenter",
        data:{eventValue: eventValue},
        success: function(response){
            $('.drop-down-header').empty();
            $('.dd').empty()
            var i=0;
            response.name.forEach(function(item){
                $(`.dh${i}`).append(item);
                k=i+1;
                var cont= "content"+k;
                response.content1.forEach(function(item){
                    $(`.ddl${i}`).append(`<li class='shop-items items items${i}'>` +item+ "</li>");
                })
                i++;

            })

            var contentHeight = $('.ddl').height();
            console.log(contentHeight);
            $('.dropdown-container').css('height', contentHeight + 200); 

        },
        error: function(response){
            console.log("error");
        }
    });
});
