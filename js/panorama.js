var sliceWidth = 1366;

function items(offset) {
  console.log(offset.x); // Logs the current horizontal scroll offset

  if (offset.x >= 200) { spawnItem('smiley'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethOne'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethTwo'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethThree'); }

  if (offset.x >= 2000) { spawnItem('eIDASNode'); }
  if (offset.x >= 2000) { spawnItem('eIDASNodeOK'); }
  if (offset.x >= 2000) { spawnItem('MaxsAuthenticated'); }

  if (offset.x >= 3000) { spawnItem('GetCompanyInfo'); }
  if (offset.x >= 3000) { spawnItem('GetCompanyInfoOk'); }

  if (offset.x >= 4000) { spawnItem('Consent'); }

  if (offset.x >= 5000) { spawnItem('TruckFreeBMOne'); }
  if (offset.x >= 5000) { spawnItem('FreePackageOne'); }
  if (offset.x >= 5000) { spawnItem('TruckTOOPBMOne'); }
  if (offset.x >= 5000) { spawnItem('FreePackageTwo'); }
  if (offset.x >= 5000) { spawnItem('SemanticMappingOne'); }
  if (offset.x >= 5000) { spawnItem('TruckTOOPBMTwo'); }
  if (offset.x >= 5000) { spawnItem('FreePackageThree'); }
  if (offset.x >= 5000) { spawnItem('TOOPPackageOne'); }

  if (offset.x >= 6000) { spawnItem('DataDiscoveryOne'); }
  if (offset.x >= 6000) { spawnItem('TruckTOOPBMThree'); }
  if (offset.x >= 6000) { spawnItem('FreePackageFour'); }
  if (offset.x >= 6000) { spawnItem('TOOPPackageTwo'); }
  if (offset.x >= 6000) { spawnItem('TOOPPackageThree'); }
  if (offset.x >= 6000) { spawnItem('BaloonOne'); }
  if (offset.x >= 6000) { spawnItem('FreePackageFive'); }
  if (offset.x >= 6000) { spawnItem('TOOPPackageFour'); }
  if (offset.x >= 6000) { spawnItem('TOOPPackageFive'); }

  if (offset.x >= 7000) { spawnItem('TruckTOOPBMFour'); }
  if (offset.x >= 7000) { spawnItem('FreePackageSix'); }
  if (offset.x >= 7000) { spawnItem('TOOPPackageSix'); }
  if (offset.x >= 7000) { spawnItem('TOOPPackageSeven'); }

  if (offset.x >= 8000) { spawnItem('SemanticMappingTwo'); }
  if (offset.x >= 8000) { spawnItem('TruckTOOPBMFive'); }
  if (offset.x >= 8000) { spawnItem('FreePackageSeven'); }
  if (offset.x >= 8000) { spawnItem('TOOPPackageEight'); }
  if (offset.x >= 8000) { spawnItem('TOOPPackageNine'); }
  if (offset.x >= 8000) { spawnItem('EloniaPackageOne'); }

  if (offset.x >= 9000) { spawnItem('TruckTOOPBMSix'); }
  if (offset.x >= 9000) { spawnItem('FreePackageEight'); }
  if (offset.x >= 9000) { spawnItem('TOOPPackageTen'); }
  if (offset.x >= 9000) { spawnItem('TOOPPackageEleven'); }
  if (offset.x >= 9000) { spawnItem('EloniaPackageTwo'); }

  if (offset.x >= 9000) { spawnItem('TruckEloniaBMOne'); }
  if (offset.x >= 9000) { spawnItem('FreePackageNine'); }
  if (offset.x >= 9000) { spawnItem('TOOPPackageTwelve'); }
  if (offset.x >= 9000) { spawnItem('EloniaPackageThree'); }
}

function panorama(content) {
  console.log("Panorama: ", content);

  $('body').scrollLeft(0);

  scrollConverter.activate(items);

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

  var viewportWidth = $(window).width();
  var edgeWidth = Math.floor((viewportWidth - sliceWidth) / 2);
  var currentSliceIndex = Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth);
  var newScrollLeft = currentSliceIndex * sliceWidth + sliceWidth;

  $('html, body').animate({scrollLeft: newScrollLeft - edgeWidth}, 800);
  items({x: newScrollLeft});
}

$(document).ready(function() {
  panorama($('#panoramaContent'));
});
