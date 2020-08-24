
function champPage(champId) {
    $(".champions").fadeOut();
    

    $.ajax({
        type: "GET",
        url: `http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${champId}.json`,
        success: function (data) {

            let champion = data.data[champId];
                console.log(champion);
            $(".lore-page").html(`
            <div>
            <img class="splash" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champId}_0.jpg">
            </div>
            `).fadeIn();
        },
        error:function(){

        }   
    });
}
