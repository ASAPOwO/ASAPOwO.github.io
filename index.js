$('button').on('click', function(){
// 取得身高與體重值
var W = $('#weight').val()
var H = $('#height').val()
// 將取得的文字值轉換成數字
W = Number(W)
H = Number(H)/100
bmi = W/H/H
// 將BMI值填入計算結果
$('#result').val(bmi)
})
