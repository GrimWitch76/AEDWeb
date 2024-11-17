// Copyright (c) 2024 Curtis Reynolds
'use strict';

var anomalyShowPercent = 25;
var normalContent = document.getElementById('normal-content');
var anomalyContent = document.getElementById('anomaly-content');



if(ShouldShowAnomaly(anomalyShowPercent)){
    anomalyContent.style.display = 'block';
}else{
    normalContent.style.display = 'block';
}



function ShouldShowAnomaly(percentChanceForAnomly)
{
    var num = Math.floor(Math.random() * 100);
    return num <= percentChanceForAnomly;
}



