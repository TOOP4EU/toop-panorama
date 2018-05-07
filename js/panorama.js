var sliceWidth = 1366;

function items(offset) {
  console.log(offset.x); // Logs the current horizontal scroll offset

  if (offset.x >= 1366) { spawnItem('AuthenticationMethOne'); }
  if (offset.x >= 1366) { spawnItem('AuthenticationMethTwo'); }
  if (offset.x >= 1366) { spawnItem('AuthenticationMethThree'); }

  if (offset.x >= 2732) { spawnItem('eIDASNode'); }
  if (offset.x >= 2732) { spawnItem('eIDASNodeOK'); }
  if (offset.x >= 2732) { spawnItem('MaxsAuthenticated'); }

  if (offset.x >= 4098) { spawnItem('GetCompanyInfo'); }
  if (offset.x >= 4098) { spawnItem('GetCompanyInfoOk'); }
  if (offset.x >= 4098) { spawnItem('Consent'); }

  if (offset.x >= 5464) { spawnItem('TruckFreeBMOne'); }
  if (offset.x >= 5464) { spawnItem('FreePackageOne'); }
  if (offset.x >= 5464) { spawnItem('TruckTOOPBMOne'); }
  if (offset.x >= 5464) { spawnItem('FreePackageTwo'); }
  if (offset.x >= 5464) { spawnItem('SemanticMappingOne'); }
  if (offset.x >= 5464) { spawnItem('TruckTOOPBMTwo'); }
  if (offset.x >= 5464) { spawnItem('FreePackageThree'); }
  if (offset.x >= 5464) { spawnItem('TOOPPackageOne'); }

  if (offset.x >= 6830) { spawnItem('DataDiscoveryOne'); }
  if (offset.x >= 6830) { spawnItem('TruckTOOPBMThree'); }
  if (offset.x >= 6830) { spawnItem('FreePackageFour'); }
  if (offset.x >= 6830) { spawnItem('TOOPPackageTwo'); }
  if (offset.x >= 6830) { spawnItem('TOOPPackageThree'); }
  if (offset.x >= 6830) { spawnItem('BaloonOne'); }
  if (offset.x >= 6830) { spawnItem('FreePackageFive'); }
  if (offset.x >= 6830) { spawnItem('TOOPPackageFour'); }
  if (offset.x >= 6830) { spawnItem('TOOPPackageFive'); }

  if (offset.x >= 8196) { spawnItem('TruckTOOPBMFour'); }
  if (offset.x >= 8196) { spawnItem('FreePackageSix'); }
  if (offset.x >= 8196) { spawnItem('TOOPPackageSix'); }
  if (offset.x >= 8196) { spawnItem('TOOPPackageSeven'); }
  if (offset.x >= 8196) { spawnItem('SemanticMappingTwo'); }
  if (offset.x >= 8196) { spawnItem('TruckTOOPBMFive'); }
  if (offset.x >= 8196) { spawnItem('FreePackageSeven'); }
  if (offset.x >= 8196) { spawnItem('TOOPPackageEight'); }
  if (offset.x >= 8196) { spawnItem('TOOPPackageNine'); }
  if (offset.x >= 8196) { spawnItem('EloniaPackageOne'); }

  if (offset.x >= 9562) { spawnItem('TruckTOOPBMSix'); }
  if (offset.x >= 9562) { spawnItem('FreePackageEight'); }
  if (offset.x >= 9562) { spawnItem('TOOPPackageTen'); }
  if (offset.x >= 9562) { spawnItem('TOOPPackageEleven'); }
  if (offset.x >= 9562) { spawnItem('EloniaPackageTwo'); }
  if (offset.x >= 9562) { spawnItem('TruckEloniaBMOne'); }
  if (offset.x >= 9562) { spawnItem('FreePackageNine'); }
  if (offset.x >= 9562) { spawnItem('TOOPPackageTwelve'); }
  if (offset.x >= 9562) { spawnItem('EloniaPackageThree'); }

  if (offset.x >= 10928) { spawnItem('TruckEloniaBMTwo'); }
  if (offset.x >= 10928) { spawnItem('FreePackageTen'); }
  if (offset.x >= 10928) { spawnItem('TOOPPackageThirteen'); }
  if (offset.x >= 10928) { spawnItem('EloniaPackageFour'); }
  if (offset.x >= 10928) { spawnItem('DataPackageOne'); }
  if (offset.x >= 10928) { spawnItem('TruckTOOPBMSeven'); }
  if (offset.x >= 10928) { spawnItem('FreePackageEleven'); }
  if (offset.x >= 10928) { spawnItem('TOOPPackageFourteen'); }
  if (offset.x >= 10928) { spawnItem('EloniaPackageFive'); }
  if (offset.x >= 10928) { spawnItem('DataPackageTwo'); }

  if (offset.x >= 12294) { spawnItem('DataDiscoveryTwo'); }
  if (offset.x >= 12294) { spawnItem('BaloonTwo'); }
  if (offset.x >= 12294) { spawnItem('FreePackageTwelve'); }
  if (offset.x >= 12294) { spawnItem('TOOPPackageFifteen'); }
  if (offset.x >= 12294) { spawnItem('TOOPPackageSixteen'); }
  if (offset.x >= 12294) { spawnItem('EloniaPackageSix'); }
  if (offset.x >= 12294) { spawnItem('DataPackageThree'); }

  if (offset.x >= 13660) { spawnItem('TruckTOOPBMEight'); }
  if (offset.x >= 13660) { spawnItem('FreePackageThirteen'); }
  if (offset.x >= 13660) { spawnItem('TOOPPackageSeventeen'); }
  if (offset.x >= 13660) { spawnItem('TOOPPackageEighteen'); }
  if (offset.x >= 13660) { spawnItem('EloniaPackageSeven'); }
  if (offset.x >= 13660) { spawnItem('DataPackageFour'); }
  if (offset.x >= 13660) { spawnItem('TruckFreeBMTwo'); }
  if (offset.x >= 13660) { spawnItem('FreePackageFourteen'); }
  if (offset.x >= 13660) { spawnItem('DataPackageFive'); }
  if (offset.x >= 13660) { spawnItem('RegWEEEOne'); }

  if (offset.x >= 15026) { spawnItem('RegWEEETwo'); }
  if (offset.x >= 15026) { spawnItem('SubmissionScr'); }

  if (offset.x >= 16392) { spawnItem('SuccessScr'); }
  if (offset.x >= 16392) { spawnItem('eIDASNodeOKTwo'); }
  if (offset.x >= 16392) { spawnItem('eIDASNodeOKTwoLeft'); }
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
