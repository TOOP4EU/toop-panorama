var sliceWidth = 1000;

function panorama(content) {
  console.log("Panorama: ", content);

  $('body').scrollLeft(0);

  scrollConverter.activate(function (offset) {
    console.log(offset.x); // Logs the current horizontal scroll offset

    if (offset.x >= 200) { spawnItem('smiley'); }
    if (offset.x >= 900) { spawnItem('AuthenticationMethOne'); }
    if (offset.x >= 900) { spawnItem('AuthenticationMethTwo'); }
    if (offset.x >= 900) { spawnItem('AuthenticationMethThree'); }
    if (offset.x >= 1800) { spawnItem('eIDASNode'); }
    if (offset.x >= 1800) { spawnItem('eIDASNodeOK'); }
    if (offset.x >= 2800) { spawnItem('MaxsAuthenticated'); }
    if (offset.x >= 3200) { spawnItem('GetCompanyInfo'); }
    if (offset.x >= 3200) { spawnItem('GetCompanyInfoOk'); }
    if (offset.x >= 4700) { spawnItem('Consent'); }
    if (offset.x >= 5000) { spawnItem('TruckFreeBMOne'); }
    if (offset.x >= 5000) { spawnItem('FreePackageOne'); }
    if (offset.x >= 5600) { spawnItem('TruckTOOPBMOne'); }
    if (offset.x >= 5600) { spawnItem('FreePackageTwo'); }
    if (offset.x >= 6100) { spawnItem('SemanticMappingOne'); }

    if (offset.x >= 6400) { spawnItem('TruckTOOPBMTwo'); }
    if (offset.x >= 6400) { spawnItem('FreePackageThree'); }
    if (offset.x >= 6400) { spawnItem('TOOPPackageOne'); }
  });

  $(document).click(function(e) { 
    // Check for left button
    if (e.button == 0) {
      scrollToNextSlice();
    }
  });
}

function spawnItem(id) {
  if ($('#' + id).length == 0) {
    var newDiv = $('<div>');
    newDiv.attr('id', id);
    $('#panoramaContent').append(newDiv);
  }
}

function scrollToNextSlice() {
  var currentSliceIndex = Math.floor($("body").scrollLeft() / sliceWidth);
  var newScrollLeft = currentSliceIndex * sliceWidth + sliceWidth;

  $('html, body').animate({scrollLeft: newScrollLeft}, 800);
}

$(document).ready(function() {
  panorama($('#panoramaContent'));
});
