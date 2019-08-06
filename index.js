var categories = {
    1 : 'abecedario',
    2 : 'numeros',
    3 : 'profesiones',
    4 : 'frases comones',
    5 : 'alimentatos'
}

window.onload = function () {
    list = '';
    $.each(categories, function (order, category) {
        video = '<div class="video"><a href="/bibliolabs/aprender.php?category=' + category + '"><video class="mini" controls><source src="/bibliolabs/numeros.mp4" type="video/mp4"></video><label>' + category + '</label></a></div>';
        $('#main-wrap').append(video);
    });
}