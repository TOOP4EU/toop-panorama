function panorama(content) {
  console.log("Panorama: ", content);

  $('body').scrollLeft(0);

  scrollConverter.activate(function (offset) {
    console.log(offset.x); // Logs the current horizontal scroll offset

    if (offset.x >= 100) { spawnItem('toopLogo'); }
    if (offset.x >= 200) { spawnItem('smiley'); }
  });
}

function spawnItem(id) {
  if ($('#' + id).length == 0) {
    var newDiv = $('<div>');
    newDiv.attr('id', id);
    $('#panoramaContent').append(newDiv);
  }
}

$(document).ready(function() {
  panorama($('#panoramaContent'));
});
