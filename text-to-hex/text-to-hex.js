const input = " ها لهیم مه "
//ب با اپ پا ات تا اث ثا اج جا اچ چا اح حا اخ خا اس سا اش شا اص صا اض ضا اف فا اق قا اک کا اگ گا لا ال 
let charactersArray = input
//.split('');

console.log(charactersArray);
let outPut = []
for (let i = 0; charactersArray.length > i; i++) {
    switch (charactersArray[i]) {
        case 'ا':
            outPut.push("90")
            break;
        case 'آ':
            outPut.push("8D")
            break;
        case 'ب':
            if(charactersArray[i+1]==undefined){
                outPut.push("92")
            }else{
                outPut.push("93")
            }
            break;
        case 'پ':
            if(charactersArray[i+1]==undefined){
                outPut.push("94")
            }else{
                outPut.push("95")
            }
            break;
        case 'ت':
            if(charactersArray[i+1]==undefined){
                outPut.push("96")
            }else{
                outPut.push("97")
            }
            break;
        case 'ث':
            if(charactersArray[i+1]==undefined){
                outPut.push("98")
            }else{
                outPut.push("99")
            }
            break;
        case 'ج':
            if(charactersArray[i+1]==undefined){
                outPut.push("9A")
            }else{
                outPut.push("9B")
            }
            break;

        case 'چ':
            if(charactersArray[i+1]==undefined){
                outPut.push("9C")
            }else{
                outPut.push("9D")
            }
            break;

        case 'ح':
            if(charactersArray[i+1]==undefined){
                outPut.push("9E")
            }else{
                outPut.push("9F")
            }
            break;

        case 'خ':
            if(charactersArray[i+1]==undefined){
                outPut.push("A0")
            }else{
                outPut.push("A1")
            }
            break;

        case 'د':
            outPut.push("A2")
            break;
        case 'ذ':
            outPut.push("A3")
            break;

        case 'ر':
            outPut.push("A4")
            break;
        case 'ز':
            outPut.push("A5")
            break;

        case 'ژ':
            outPut.push("A6")
            break;

        case 'س':
            if(charactersArray[i+1]==undefined){
                outPut.push("A7")
            }else{
                outPut.push("A8")
            }
            break;


        case 'ش':
            if(charactersArray[i+1]==undefined){
                outPut.push("A9")
            }else{
                outPut.push("AA")
            }
            break;

        case 'ص':
            if(charactersArray[i+1]==undefined){
                outPut.push("AB")
            }else{
                outPut.push("AC")
            }
            break;

        case 'ض':
            if(charactersArray[i+1]==undefined){
                outPut.push("AD")
            }else{
                outPut.push("AE")
            }
            break;

        case 'ط':
            outPut.push("AF")
            break;
        case 'ظ':
            outPut.push("E0")
            break;
//------------------------------------------------
        case 'ع':
            if(charactersArray[i-1]=="ب"){
                outPut.push("E2")
                console.log("a akhar zomle");
            }else if(charactersArray.indexOf(charactersArray[i])==0){
                outPut.push("E4")
                console.log("a aval zomle");
            }else if(charactersArray[i+1] ==undefined){
                outPut.push("E1")
            }else{
                outPut.push("E3")
                            console.log(charactersArray[i]);
            }
            break;
//-------------------------------------------------------
        case 'غ':
            if(charactersArray[i+1] ==undefined){
                outPut.push("E5")
                console.log("gh akhar zomle");
            }else if(charactersArray[i]==0){
                outPut.push("E8")
                console.log("a aval zomle");
            }else{
                outPut.push("E1")
                console.log("a jomle");

            }
            break;
        case 'ـغ':
            outPut.push("E6")
            break;
        case 'ـغـ':
            outPut.push("E7")
            break;
        case 'غـ':
            outPut.push("E8")
            break;


        case 'ف':
            if(charactersArray[i+1]==undefined){
                outPut.push("E9")
            }else{
                outPut.push("EA")
            }
            break;

        case 'ق':
            if(charactersArray[i+1]==undefined){
                outPut.push("EB")
            }else{
                outPut.push("EC")
            }
            break;

        case 'ک':
            if(charactersArray[i+1]==undefined){
                outPut.push("ED")
            }else{
                outPut.push("EE")
            }
            break;

        case 'گ':
            if(charactersArray[i+1]==undefined){
                outPut.push("FF")
            }else{
                outPut.push("F0")
            }
            break;

        case 'ل':
            if(charactersArray[i+1]==undefined){
                outPut.push("F1")
                
            }else if(charactersArray[i+1]=="ا"){
                charactersArray = charactersArray.slice(i + 1);
                outPut.push("F2")
            }
            else if(charactersArray.indexOf(charactersArray[i])==0){
                outPut.push("F3")
            }
            break;

        case 'م':
            if(charactersArray[i+1]==undefined){
                outPut.push("F4")
            }else{
                outPut.push("F5")
            }
            break;

        case 'ن':
            if(charactersArray[i+1]==undefined){
                outPut.push("F6")
            }else{
                outPut.push("F7")
            }
            break;

        case 'و':
            outPut.push("F8")
            break;

        case 'ه':
            if(charactersArray[i+1]==undefined){
                outPut.push("F9")
            }else if(charactersArray.indexOf(charactersArray[i])==0){
                outPut.push("FB")
            }else{
                outPut.push("FA")
            }
            break;


        case 'ی':
            if (charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ا' || charactersArray[i + 1] === ' ') {
          outPut.push("FD")
            }else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ب' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'پ' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ت' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ث' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ج' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'چ' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ح' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'خ' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'د' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ذ' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ر' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }
            else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ز' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }   else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ژ' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ط' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ظ' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ع' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'غ' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ف' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ق' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ک' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ل' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'م' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ن' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'و' || charactersArray[i + 1] === ' '){
                outPut.push("FD")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ه' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }  else if(charactersArray[i + 1] === undefined && charactersArray[i - 1] === 'ی' || charactersArray[i + 1] === ' '){
                outPut.push("FC")
            }else{
                outPut.push("FE")

            }
            break;


        case '0':
            outPut.push("80")
            break;
        case '1':
            outPut.push("81")
            break;
        case '2':
            outPut.push("82")
            break;
        case '3':
            outPut.push("83")
            break;
        case '4':
            outPut.push("84")
            break;
        case '5':
            outPut.push("85")
            break;
        case '6':
            outPut.push("86")
            break;
        case '7':
            outPut.push("87")
            break;
        case '8':
            outPut.push("88")
            break;
        case '9':
            outPut.push("89")
            break;

        case '،':
            outPut.push("8A")
            break;

        case '_':
            outPut.push("8B")
            break;

        case '؟':
            outPut.push("8C")
            break;


        case ' ':
            outPut.push("20")
            break;
        default: console.log("!");
            break;
    }
}
console.log(outPut.reverse().toString());