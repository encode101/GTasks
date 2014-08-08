jQuery(function($){
    var apiKey = "496099751340-jgi0h26rpeqva74h66a0igmp73mut462.apps.googleusercontent.com";
    var url = "https://www.googleapis.com/tasks/v1/users/@me/lists?key=496099751340-jgi0h26rpeqva74h66a0igmp73mut462.apps.googleusercontent.com";
    $("#getTasks").on({
        click:function(){
            alert('ökay');
            $.ajax({
                url:url,
                success:function(data){
                    $("#tasksList").html(data)
                }
            })
        }
    })
})