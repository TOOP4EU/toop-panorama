var sliceWidth = 1366;

function items(offset) {
  console.log(offset.x); // Logs the current horizontal scroll offset

  if (offset.x >= 200) { spawnItem('smiley'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethOne'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethTwo'); }
  if (offset.x >= 1000) { spawnItem('AuthenticationMethThree'); }

  if (offset.x >= 2000) { spawnItem('eIDASNode'); }
  if (offset.x >= 2000) { spawnItem('eIDASNodeOK'); }

  if (offset.x >= 3000) { spawnItem('MaxsAuthenticated'); }
  if (offset.x >= 3000) { spawnItem('GetCompanyInfo'); }
  if (offset.x >= 3000) { spawnItem('GetCompanyInfoOk'); }

  if (offset.x >= 4000) { spawnItem('Consent'); }

  if (offset.x >= 5000) { spawnItem('TruckFreeBMOne'); }
  if (offset.x >= 5000) { spawnItem('FreePackageOne'); }
  if (offset.x >= 5000) { spawnItem('TruckTOOPBMOne'); }
  if (offset.x >= 5000) { spawnItem('FreePackageTwo'); }

  if (offset.x >= 5500) { spawnItem('SemanticMappingOne'); }

  if (offset.x >= 6000) { spawnItem('TruckTOOPBMTwo'); }
  if (offset.x >= 6000) { spawnItem('FreePackageThree'); }
  if (offset.x >= 6000) { spawnItem('TOOPPackageOne'); }

  if (offset.x >= 7000) { spawnItem('DataDiscoveryOne'); }

  if (offset.x >= 7000) { spawnItem('TruckTOOPBMThree'); }
  if (offset.x >= 7000) { spawnItem('FreePackageFour'); }
  if (offset.x >= 7000) { spawnItem('TOOPPackageTwo'); }
  if (offset.x >= 7000) { spawnItem('TOOPPackageThree'); }

  if (offset.x >= 8000) { spawnItem('BaloonOne'); }
  if (offset.x >= 8000) { spawnItem('FreePackageFive'); }
  if (offset.x >= 8000) { spawnItem('TOOPPackageFour'); }
  if (offset.x >= 8000) { spawnItem('TOOPPackageFive'); }

  if (offset.x >= 9000) { spawnItem('TruckTOOPBMFour'); }
  if (offset.x >= 9000) { spawnItem('FreePackageSix'); }
  if (offset.x >= 9000) { spawnItem('TOOPPackageSix'); }
  if (offset.x >= 9000) { spawnItem('TOOPPackageSeven'); }

  if (offset.x >= 10000) { spawnItem('SemanticMappingTwo'); }

  if (offset.x >= 11000) { spawnItem('TruckTOOPBMFive'); }
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
  var currentSliceIndex = Math.floor(($("body").scrollLeft() + 250) / sliceWidth);
  var newScrollLeft = currentSliceIndex * sliceWidth + sliceWidth;

  $('html, body').animate({scrollLeft: newScrollLeft - 250}, 800);
  items({x: newScrollLeft});
}

$(document).ready(function() {
  panorama($('#panoramaContent'));
});
