var sliceWidth = 1366;
var currentFloor = getUrlParameter('floor') || 0;
var stopScrollingLeftAtX = 4098;
var lastSlideReached = false;
var panoramaStarted = true;

var audioFiles = [
 // "audio/wav/Slide 1.wav",
  //"audio/wav/Slide 2.wav",
 // "audio/wav/Slide 3.wav",
  //"audio/wav/Slide 4.wav",
 // "audio/wav/Slide 5.wav",
 // "audio/wav/Slide 6.wav",
 // "audio/wav/Slide 7.wav",
 // "audio/wav/Slide 8.wav",
 // "audio/wav/Slide 9.wav",
 // "audio/wav/Slide 10.wav",
 // "audio/wav/Slide 11.wav",
 // "audio/wav/Slide 12.wav",
 // "audio/wav/that was easy.wav",
];



function items(offset) {
  console.log(offset.x); // Logs the current horizontal scroll offset

  if (currentFloor == 0) {

    if (offset.x >= 1366*1) { spawnItem('AuthenticationMethOne'); }
    if (offset.x >= 1366*1) { spawnItem('AuthenticationMethTwo'); }
    if (offset.x >= 1366*1) { spawnItem('AuthenticationMethThree'); }

    if (offset.x >= 1366*2) { spawnItem('eIDASNode'); }
    if (offset.x >= 1366*2) { spawnItem('eIDASNodeOK'); }
    if (offset.x >= 1366*2) { spawnItem('MaxsAuthenticated'); }

    if (offset.x >= 1366*3) { spawnItem('GetCompanyInfo'); }
    if (offset.x >= 1366*3) { spawnItem('GetCompanyInfoOk'); }
    if (offset.x >= 1366*3) { spawnItem('Consent'); }

    if (offset.x >= 1366*4) { spawnItem('TruckFreeBMOne'); }
    if (offset.x >= 1366*4) { spawnItem('SemanticMappingOne'); }
    if (offset.x >= 1366*4) { spawnItem('TruckTOOPBMOne', 'TruckTOOPBMMoveOne'); }
    if (offset.x >= 1366*4) { spawnItem('FreePackageOne', 'FreePackageMoveOne'); }
    if (offset.x >= 1366*4) { spawnItem('TOOPPackageOne', 'TOOPPackageMoveOne'); }

    if (offset.x >= 1366*5) { spawnItem('DataDiscoveryOne'); }
    if (offset.x >= 1366*5) { spawnItem('TOOPPackageThree'); }
    if (offset.x >= 1366*5) { spawnItem('BaloonOne'); }
    if (offset.x >= 1366*5) { spawnItem('TOOPPackageFour'); }
    if (offset.x >= 1366*5) { spawnItem('TOOPPackageFive'); }
    if (offset.x >= 1366*5) { spawnItem('WaveOne'); }
    if (offset.x >= 1366*5) { spawnItem('WaveTwo'); }
    if (offset.x >= 1366*5) { spawnItem('WaveThree'); }
    if (offset.x >= 1366*5) { spawnItem('WaveFour'); }
    if (offset.x >= 1366*5) { spawnItem('WaveFive'); }
    if (offset.x >= 1366*5) { spawnItem('WaveSix'); }
    if (offset.x >= 1366*5) { spawnItem('BoatOne'); }
    if (offset.x >= 1366*5) { spawnItem('BoatTwo'); }
    if (offset.x >= 1366*5) { spawnItem('BoatThree'); }
    if (offset.x >= 1366*5) { spawnItem('BoatFour'); }
    if (offset.x >= 1366*5) { spawnItem('TOOPPackageTwo', 'TOOPPackageMoveTwoTwo'); }
    if (offset.x >= 1366*5) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveTwo'); }
    if (offset.x >= 1366*5) { changeAnimation('FreePackageOne', 'FreePackageMoveTwo'); }
    if (offset.x >= 1366*5) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveTwo'); }

    if (offset.x >= 1366*6) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveThree'); }
    if (offset.x >= 1366*6) { changeAnimation('FreePackageOne', 'FreePackageMoveThree'); }
    if (offset.x >= 1366*6) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveThree'); }
    if (offset.x >= 1366*6) { changeAnimation('TOOPPackageTwo', 'TOOPPackageMoveThreeThree'); }
    if (offset.x >= 1366*6) { spawnItem('EloniaPackageOne', 'EloniaPackageMoveOne'); }
    if (offset.x >= 1366*6) { spawnItem('SemanticMappingTwo'); }
    if (offset.x >= 1366*6) { spawnItem('FreePackageSeven'); }

    if (offset.x >= 1366*7) { changeAnimation('TruckTOOPBMOne', 'TruckTOOPBMMoveFour'); }
    if (offset.x >= 1366*7) { changeAnimation('FreePackageOne', 'FreePackageMoveFour'); }
    if (offset.x >= 1366*7) { changeAnimation('TOOPPackageOne', 'TOOPPackageMoveFour'); }
    if (offset.x >= 1366*7) { changeAnimation('TOOPPackageTwo', 'TOOPPackageMoveFourFour'); }
    if (offset.x >= 1366*7) { changeAnimation('EloniaPackageOne', 'EloniaPackageMoveTwo'); }
    if (offset.x >= 1366*7) { spawnItem('TruckEloniaBMOne', 'TruckEloniaBMMoveOne'); }
    if (offset.x >= 1366*7) { spawnItem('DataPackageOne', 'DataPackageOneMoveOne'); }
    if (offset.x >= 1366*7) { spawnItem('TOOPPackageTwelve'); }

    if (offset.x >= 1366*10) { spawnItem('TruckTOOPBMEight'); }
    if (offset.x >= 1366*10) { spawnItem('FreePackageThirteen'); }
    if (offset.x >= 1366*10) { spawnItem('TOOPPackageSeventeen'); }
    if (offset.x >= 1366*10) { spawnItem('TOOPPackageEighteen'); }
    if (offset.x >= 1366*10) { spawnItem('EloniaPackageSeven'); }
    if (offset.x >= 1366*10) { spawnItem('DataPackageFour'); }
    if (offset.x >= 1366*10) { spawnItem('TruckFreeBMTwo'); }
    if (offset.x >= 1366*10) { spawnItem('FreePackageFourteen'); }
    if (offset.x >= 1366*10) { spawnItem('DataPackageFive'); }
    if (offset.x >= 1366*10) { spawnItem('RegWEEEOne'); }

    if (offset.x >= 1366*11) { spawnItem('RegWEEETwo'); }
    if (offset.x >= 1366*11) { spawnItem('SubmissionScr'); }

    if (offset.x >= 1366*12) { spawnItem('SuccessScr'); }
    if (offset.x >= 1366*12) { spawnItem('eIDASNodeOKTwo'); }
    if (offset.x >= 1366*12) { spawnItem('eIDASNodeOKTwoLeft'); }

  }

  if (currentFloor == 1) {

    if (offset.x <= 1366*7) { spawnItem('TruckEloniaBMF', 'TruckEloniaBMFMoveOne'); }
    if (offset.x <= 1366*7) { spawnItem('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveOne'); }
    if (offset.x <= 1366*7) { spawnItem('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveOne'); }
    if (offset.x <= 1366*7) { spawnItem('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveOne'); }
    if (offset.x <= 1366*7) { spawnItem('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveOne'); }
    if (offset.x <= 1366*7) { spawnItem('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveOne'); }

    if (offset.x <= 1366*6) { spawnItem('DataDiscoveryFloorOne', 'DataDiscoveryFloorOneMoveOne'); }
    if (offset.x <= 1366*6) { changeAnimation('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveTwo'); }
    if (offset.x <= 1366*6) { changeAnimation('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveTwo'); }
    if (offset.x <= 1366*6) { changeAnimation('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveTwo'); }
    if (offset.x <= 1366*6) { changeAnimation('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveTwo'); }
    if (offset.x <= 1366*6) { changeAnimation('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveTwo'); }
    if (offset.x <= 1366*6) { spawnItem('TOOPPackageFloorOneTwo', 'TOOPPackageFloorOneMoveTwoTwo'); }
    if (offset.x <= 1366*6) { spawnItem('BaloonTwoFloorOne', 'BaloonTwoMoveOne'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneOne'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneTwo'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneThree'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneFour'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneFive'); }
    if (offset.x <= 1366*6) { spawnItem('WaveFloorOneSix'); }
    if (offset.x <= 1366*6) { spawnItem('BoatFloorOneOne'); }
    if (offset.x <= 1366*6) { spawnItem('BoatFloorOneTwo'); }
    if (offset.x <= 1366*6) { spawnItem('BoatFloorOneThree'); }
    if (offset.x <= 1366*6) { spawnItem('BoatFloorOneFour'); }

    if (offset.x <= 1366*5) { changeAnimation('TruckTOOPFloorOneOne', 'TruckTOOPFloorOneOneMoveThree'); }
    if (offset.x <= 1366*5) { changeAnimation('DataPackageOneFloorOne', 'DataPackageOneFloorOneMoveThree'); }
    if (offset.x <= 1366*5) { changeAnimation('FreePackageOneFloorOne', 'FreePackageOneFloorOneMoveThree'); }
    if (offset.x <= 1366*5) { changeAnimation('TOOPPackageFloorOne', 'TOOPPackageFloorOneMoveThree'); }
    if (offset.x <= 1366*5) { changeAnimation('TOOPPackageFloorOneTwo', 'TOOPPackageFloorOneMoveTwoThree'); }
    if (offset.x <= 1366*5) { changeAnimation('EloniaPackageOneFloorOne', 'EloniaPackageFloorOneMoveThree'); }
    if (offset.x <= 1366*5) { spawnItem('TruckFreedoniaBMF', 'TruckFreedoniaBMFMoveOne'); }
    if (offset.x <= 1366*5) { spawnItem('RegWEEEOne', 'RegWEEEOneMoveOne'); }
    if (offset.x <= 1366*5) { spawnItem('eIDASNodeOKFloorOne', 'eIDASNodeOKFloorOneMoveOne'); }

    if (offset.x <= 1366*4) { spawnItem('SuccessScr', 'SuccessScrMoveOne'); }
    if (offset.x <= 1366*4) { spawnItem('SuccessScrOkLeft', 'SuccessScrOkLeftMoveOne'); }
    if (offset.x <= 1366*4) { spawnItem('SuccessScrOkRight', 'SuccessScrOkRightMoveOne'); }
    if (offset.x <= 1366*4) { spawnItem('Applause', 'ApplauseMoveOne'); }

    if (offset.x <= 1366*3) { spawnItem('TOOPLogo'); }
    if (offset.x <= 1366*3) { changeAnimation('CreditsSU', 'CreditsSUSE'); }
    if (offset.x <= 1366*3) { changeAnimation('CreditsEditors', 'CreditsEditorsAll'); }
    if (offset.x <= 1366*3) { changeAnimation('newssub', 'newssubAll'); }
    if (offset.x <= 1366*3) { changeAnimation('restart', 'restartAll'); }
    if (offset.x <= 1366*3) { changeAnimation('brand', 'brandAll'); }
  }
}

function panorama(content) {
  console.log("Panorama: ", content);

  $('body').scrollLeft(0);

  scrollConverter.activate(items);

  $( "#restart" ).click(function() {
    $('body').scrollLeft(0);
    $('body').scrollTop(0);
    location.reload();
    return;
  });

  $(document).click(function(e) {

    if (!panoramaStarted) {

      panoramaStarted = true;
    } else if (!lastSlideReached) {
        // Check for left button
        if (e.button == 0) {
          scrollToNextSlice();
        }
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

  var nSlices = $('#panoramaContent').width() / sliceWidth;
  var currentSlice = Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth);
  currentSlice += (currentFloor === 1 ? 1 : 0);
  currentSlice = (currentFloor === 1 ? nSlices + nSlices - currentSlice : currentSlice);
  var nextSlice = currentSlice + 1;

  if (audioFiles[nextSlice] !== undefined) {
    playAudio(audioFiles[nextSlice]);
  }

  //Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth);
  //currentSlice += currentFloor * (numberOfSlices-Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth));

  //console.log("numberOfSlices", numberOfSlices);

  var currentSliceIndex = Math.floor(($("body").scrollLeft() + edgeWidth) / sliceWidth);
  //var currentSliceIndexCorrected = currentSliceIndex +
  //console.log("currentSliceIndex", currentSliceIndex);

  console.log("currentSlice: " + currentSlice + " -> " + nextSlice);

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
    if (newScrollLeft <= stopScrollingLeftAtX) {
        lastSlideReached = true;
        newScrollLeft = stopScrollingLeftAtX;
    }

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
