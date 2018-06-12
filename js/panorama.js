var sliceWidth = 1366;
var currentFloor = getUrlParameter('floor') || 0;

function items(offset) {
  console.log(offset.x); // Logs the current horizontal scroll offset

  if (currentFloor == 0) {

    if (offset.x >= 1366) { spawnItem('AuthenticationMethOne'); }
    if (offset.x >= 1366) { spawnItem('AuthenticationMethTwo'); }
    if (offset.x >= 1366) { spawnItem('AuthenticationMethThree'); }

    if (offset.x >= 2732) { spawnItem('eIDASNode'); }
    if (offset.x >= 2732) { spawnItem('eIDASNodeOK'); }
    if (offset.x >= 2732) { spawnItem('MaxsAuthenticated'); }

    if (offset.x >= 4098) { spawnItem('GetCompanyInfo'); }
    if (offset.x >= 4098) { spawnItem('GetCompanyInfoOk'); }
    if (offset.x >= 4098) { spawnItem('Consent'); }



    // if (offset.x >= 5464) { spawnItem('FreePackageTwo'); }
    //if (offset.x >= 5464) { spawnItem('TruckTOOPBMTwo'); }
    //if (offset.x >= 5464) { spawnItem('FreePackageThree'); }
    if (offset.x >= 5464) { spawnItem('TruckFreeBMOne'); }
    if (offset.x >= 5464) { spawnItem('SemanticMappingOne'); }
    if (offset.x >= 5464) { spawnItem('TruckTOOPBMOne', 'TruckTOOPBMMoveOne'); }
    if (offset.x >= 5464) { spawnItem('FreePackageOne', 'FreePackageMoveOne'); }
    if (offset.x >= 5464) { spawnItem('TOOPPackageOne', 'TOOPPackageMoveOne'); }

    //if (offset.x >= 6830) { spawnItem('TruckTOOPBMThree'); }
    //if (offset.x >= 6830) { spawnItem('FreePackageFour'); }
    //if (offset.x >= 6830) { spawnItem('FreePackageFive'); }
    if (offset.x >= 6830) { spawnItem('DataDiscoveryOne'); }
    if (offset.x >= 6830) { spawnItem('TOOPPackageThree'); }
    if (offset.x >= 6830) { spawnItem('BaloonOne'); }
    if (offset.x >= 6830) { spawnItem('TOOPPackageFour'); }
    if (offset.x >= 6830) { spawnItem('TOOPPackageFive'); }

    if (offset.x >= 6830) { spawnItem('WaveOne'); }
    if (offset.x >= 6830) { spawnItem('WaveTwo'); }
    if (offset.x >= 6830) { spawnItem('WaveThree'); }
    if (offset.x >= 6830) { spawnItem('WaveFour'); }
    if (offset.x >= 6830) { spawnItem('WaveFive'); }
    if (offset.x >= 6830) { spawnItem('WaveSix'); }
    if (offset.x >= 6830) { spawnItem('BoatOne'); }
    if (offset.x >= 6830) { spawnItem('BoatTwo'); }
    if (offset.x >= 6830) { spawnItem('BoatThree'); }
    if (offset.x >= 6830) { spawnItem('BoatFour'); }

    if (offset.x >= 6830) { spawnItem('TOOPPackageTwo', 'TOOPPackageMoveTwoTwo'); }
    if (offset.x >= 6830) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveTwo'); }
    if (offset.x >= 6830) { changeAnimation('FreePackageOne', 'FreePackageMoveTwo'); }
    if (offset.x >= 6830) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveTwo'); }

    //if (offset.x >= 8196) { spawnItem('TruckTOOPBMFour'); }
    //if (offset.x >= 8196) { spawnItem('FreePackageSix'); }
    //if (offset.x >= 8196) { spawnItem('TOOPPackageSix'); }
    //if (offset.x >= 8196) { spawnItem('TOOPPackageSeven'); }
    //if (offset.x >= 8196) { spawnItem('TruckTOOPBMFive'); }
    //if (offset.x >= 8196) { spawnItem('TOOPPackageEight'); }
    //if (offset.x >= 8196) { spawnItem('TOOPPackageNine'); }

    if (offset.x >= 8196) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveThree'); }
    if (offset.x >= 8196) { changeAnimation('FreePackageOne', 'FreePackageMoveThree'); }
    if (offset.x >= 8196) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveThree'); }
    if (offset.x >= 8196) { changeAnimation('TOOPPackageTwo', 'TOOPPackageMoveThreeThree'); }
    if (offset.x >= 8196) { spawnItem('EloniaPackageOne', 'EloniaPackageMoveOne'); }

    if (offset.x >= 8196) { spawnItem('SemanticMappingTwo'); }
    if (offset.x >= 8196) { spawnItem('FreePackageSeven'); }

    //if (offset.x >= 9562) { spawnItem('TruckTOOPBMSix'); }
    //if (offset.x >= 9562) { spawnItem('FreePackageEight'); }
    //if (offset.x >= 9562) { spawnItem('TOOPPackageTen'); }
    //if (offset.x >= 9562) { spawnItem('TOOPPackageTenOPPackageEleven'); }
    //if (offset.x >= 9562) { spawnItem('EloniaPackageTwo'); }
    // if (offset.x >= 9562) { spawnItem('FreePackageNine'); }
    // if (offset.x >= 9562) { spawnItem('EloniaPackageThree'); }


    if (offset.x >= 9562) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveFour'); }
    if (offset.x >= 9562) { changeAnimation('FreePackageOne', 'FreePackageMoveFour'); }
    if (offset.x >= 9562) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveFour'); }
    if (offset.x >= 9562) { changeAnimation('TOOPPackageTwo', 'TOOPPackageMoveFourFour'); }
    if (offset.x >= 9562) { changeAnimation('EloniaPackageOne', 'EloniaPackageMoveTwo'); }
    if (offset.x >= 9562) { spawnItem('TruckEloniaBMOne', 'TruckEloniaBMMoveOne'); }
    if (offset.x >= 9562) { spawnItem('DataPackageOne', 'DataPackageOneMoveOne'); }

    if (offset.x >= 9562) { spawnItem('TOOPPackageTwelve'); }

    //if (offset.x >= 10928) { spawnItem('FreePackageTen'); }
    //if (offset.x >= 10928) { spawnItem('TOOPPackageThirteen'); }
    //if (offset.x >= 10928) { spawnItem('EloniaPackageFour'); }
    //if (offset.x >= 10928) { spawnItem('TruckTOOPBMSeven'); }
    //if (offset.x >= 10928) { spawnItem('FreePackageEleven'); }
    //if (offset.x >= 10928) { spawnItem('TOOPPackageFourteen'); }
    //if (offset.x >= 10928) { spawnItem('EloniaPackageFive'); }
    //if (offset.x >= 10928) { spawnItem('DataPackageTwo'); }

    //if (offset.x >= 12294) { spawnItem('DataDiscoveryTwo'); }
    //if (offset.x >= 12294) { spawnItem('BaloonTwo'); }
   // if (offset.x >= 12294) { spawnItem('FreePackageTwelve'); }
    //if (offset.x >= 12294) { spawnItem('TOOPPackageFifteen'); }
   // if (offset.x >= 12294) { spawnItem('TOOPPackageSixteen'); }
    //if (offset.x >= 12294) { spawnItem('EloniaPackageSix'); }
    //if (offset.x >= 12294) { spawnItem('DataPackageThree'); }

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

  if (currentFloor == 1) {

    if (offset.x <= 9562) { spawnItem('TruckEloniaBMF', 'TruckEloniaBMFMoveOne'); }
    if (offset.x <= 9562) { spawnItem('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveOne'); }
    if (offset.x <= 9562) { spawnItem('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveOne'); }
    if (offset.x <= 9562) { spawnItem('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveOne'); }
    if (offset.x <= 9562) { spawnItem('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveOne'); }
    if (offset.x <= 9562) { spawnItem('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveOne'); }

    if (offset.x <= 8196) { spawnItem('DataDiscoveryFloorOne', 'DataDiscoveryFloorOneMoveOne'); }
    if (offset.x <= 8196) { changeAnimation('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveTwo'); }
    if (offset.x <= 8196) { changeAnimation('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveTwo'); }
    if (offset.x <= 8196) { changeAnimation('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveTwo'); }
    if (offset.x <= 8196) { changeAnimation('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveTwo'); }
    if (offset.x <= 8196) { changeAnimation('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveTwo'); }
    if (offset.x <= 8196) { spawnItem('TOOPPackageFloorOneTwo', 'TOOPPackageFloorOneMoveTwoTwo'); }
    if (offset.x <= 8196) { spawnItem('BaloonTwoFloorOne', 'BaloonTwoMoveOne'); }

    if (offset.x <= 8196) { spawnItem('WaveFloorOneOne'); }
    if (offset.x <= 8196) { spawnItem('WaveFloorOneTwo'); }
    if (offset.x <= 8196) { spawnItem('WaveFloorOneThree'); }
    if (offset.x <= 8196) { spawnItem('WaveFloorOneFour'); }
    if (offset.x <= 8196) { spawnItem('WaveFloorOneFive'); }
    if (offset.x <= 8196) { spawnItem('WaveFloorOneSix'); }

        if (offset.x <= 8196) { spawnItem('BoatFloorOneOne'); }
    if (offset.x <= 8196) { spawnItem('BoatFloorOneTwo'); }
    if (offset.x <= 8196) { spawnItem('BoatFloorOneThree'); }
    if (offset.x <= 8196) { spawnItem('BoatFloorOneFour'); }

    if (offset.x <= 6830) { changeAnimation('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveThree'); }
    if (offset.x <= 6830) { changeAnimation('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveThree'); }
    if (offset.x <= 6830) { changeAnimation('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveThree'); }
    if (offset.x <= 6830) { changeAnimation('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveThree'); }
    if (offset.x <= 6830) { changeAnimation('TOOPPackageFloorOneTwo', 'TOOPPackageFloorOneMoveTwoThree'); }
    if (offset.x <= 6830) { changeAnimation('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveThree'); }
    if (offset.x <= 6830) { spawnItem('TruckFreedoniaBMF', 'TruckFreedoniaBMFMoveOne'); }
    if (offset.x <= 6830) { spawnItem('RegWEEEOne', 'RegWEEEOneMoveOne'); }
    if (offset.x <= 6830) { spawnItem('eIDASNodeOKFloorOne', 'eIDASNodeOKFloorOneMoveOne'); }

    //if (offset.x <= 5464) { spawnItem('RegWEEETwo', 'RegWEEETwoFloorOneMoveOne'); }
    //if (offset.x <= 5464) { spawnItem('SubmissionFloorOne', 'SubmissionFloorOneMoveOne'); }

    if (offset.x <= 5464) { spawnItem('SuccessScr', 'SuccessScrMoveOne'); }
    if (offset.x <= 5464) { spawnItem('SuccessScrOkLeft', 'SuccessScrOkLeftMoveOne'); }
    if (offset.x <= 5464) { spawnItem('SuccessScrOkRight', 'SuccessScrOkRightMoveOne'); }
    if (offset.x <= 5464) { spawnItem('Applause', 'ApplauseMoveOne'); }

    if (offset.x <= 4098) { spawnItem('TOOPLogo'); }

    if (offset.x <= 4098) { changeAnimation('CreditsSU', 'CreditsSUSE'); }
    if (offset.x <= 4098) { changeAnimation('CreditsEditors', 'CreditsEditorsAll'); }
    if (offset.x <= 4098) { changeAnimation('newssub', 'newssubAll'); }
    if (offset.x <= 4098) { changeAnimation('brand', 'brandAll'); }
  }
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

function spawnItem(id, defaultAnimationClass) {
  if ($('#' + id).length == 0) {
    var newDiv = $('<div>');
    newDiv.attr('id', id);
    if (defaultAnimationClass) {
      newDiv.addClass(defaultAnimationClass);
    }
    if (currentFloor == 0) {
      $('#panoramaContent').append(newDiv);
    } else if (currentFloor == 1) {
      $('#panoramaContent2').append(newDiv);
    }
    return newDiv;
  } else {
    return $('#' + id);
  }
}

function changeAnimation(id, animationClass) {

  var elm = $('#'+id);

  if (elm.hasClass(animationClass)) {
    return;
  }

  elm.addClass(animationClass);
  var newone = elm.clone(true);
  elm.replaceWith(newone);
}

function scrollToNextSlice() {

  var viewportWidth = $(window).width();
  var edgeWidth = Math.floor((viewportWidth - sliceWidth) / 2);
  var currentSliceIndex = Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth);

  if (currentFloor == 0) {
    var newScrollLeft = currentSliceIndex * sliceWidth + sliceWidth;
    if (newScrollLeft >= $('#panoramaContent').width()) {
      scrollToBottom();
      currentFloor = 1;
      items({x: newScrollLeft - sliceWidth});
    } else {
      $('html, body').animate({scrollLeft: newScrollLeft - edgeWidth}, 800);
      items({x: newScrollLeft});
    }
  } else {
    var newScrollLeft = currentSliceIndex * sliceWidth - sliceWidth;
    $('html, body').animate({scrollLeft: newScrollLeft - edgeWidth}, 800);
    items({x: newScrollLeft});
  }
}

$(document).ready(function() {
  panorama($('#panoramaContent'));
});

function scrollToBottom() {
  var newScrollTop = $(window).height() - ($(window).height() - $('#panoramaContent').height()) / 2;
  $('html, body').animate({scrollTop: newScrollTop}, 800);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
