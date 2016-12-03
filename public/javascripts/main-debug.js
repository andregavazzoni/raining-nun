$(function () {
    highscore();
    setInterval(highscore, 10000);
});

function highscore() {
    $.ajax({
        url: '/highscore'
    }).done(function (data) {
        var table = $('table');
        var rows = table.find('tr:not(.table-header)');
        rows.remove();

        $.each(data, function (key, score) {
            var row = "<tr><td>"+score.name+"</td><td>"+score.score+"</td></tr>";
            table.append(row);
        });
    })
    ;
}
//# sourceMappingURL=maps/main-debug.js.map
