import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S47000Page } from './s47000/s47000.page';  
import { S47001Page } from './s47001/s47001.page';  
import { S47002Page } from './s47002/s47002.page';  
import { S47002tPage } from './s47002t/s47002t.page';  
import { S47003Page } from './s47003/s47003.page';  
import { S47004Page } from './s47004/s47004.page';  
import { S47005Page } from './s47005/s47005.page';  
import { S47006Page } from './s47006/s47006.page';  
import { S47007Page } from './s47007/s47007.page'; 
import { S47008Page } from './s47008/s47008.page';  
import { S47008tPage } from './s47008t/s47008t.page';  
import { S47009Page } from './s47009/s47009.page';  
import { S47010Page } from './s47010/s47010.page';  
import { S47011Page } from './s47011/s47011.page';  
import { S47012Page } from './s47012/s47012.page';  
import { S47013Page } from './s47013/s47013.page';  
import { S47013tPage } from './s47013t/s47013t.page';  
import { S47014Page } from './s47014/s47014.page';  
import { S47015Page } from './s47015/s47015.page';  
import { S47016Page } from './s47016/s47016.page';  
import { S47017Page } from './s47017/s47017.page';  
import { S47018Page } from './s47018/s47018.page'; 
import { S47019Page } from './s47019/s47019.page';  
import { S47020Page } from './s47020/s47020.page';  
import { S47021Page } from './s47021/s47021.page';  
import { S47022Page } from './s47022/s47022.page';  
import { S47023Page } from './s47023/s47023.page';  
import { S47024Page } from './s47024/s47024.page';  
import { S47025Page } from './s47025/s47025.page';  
import { S47026Page } from './s47026/s47026.page';  
import { S47027Page } from './s47027/s47027.page';  
import { S47028Page } from './s47028/s47028.page';  
import { S47029Page } from './s47029/s47029.page';  
import { S47030Page } from './s47030/s47030.page';  
import { S47030tPage } from './s47030t/s47030t.page';  
import { S47031Page } from './s47031/s47031.page';
import { S47031tPage } from './s47031t/s47031t.page';    
import { S47032Page } from './s47032/s47032.page';  
import { S47033Page } from './s47033/s47033.page';  
import { S47034Page } from './s47034/s47034.page';  
import { S47034tPage } from './s47034t/s47034t.page';  
import { S47035Page } from './s47035/s47035.page';  
import { S47036Page } from './s47036/s47036.page';  
import { S47036tPage } from './s47036t/s47036t.page';  
import { S47037Page } from './s47037/s47037.page';  
import { S47038Page } from './s47038/s47038.page';  
import { S47039Page } from './s47039/s47039.page';  
import { S47040Page } from './s47040/s47040.page';  
import { S47041Page } from './s47041/s47041.page';  
import { S47042Page } from './s47042/s47042.page';  
import { S47043Page } from './s47043/s47043.page';  
import { S47044Page } from './s47044/s47044.page';  
import { S47045Page } from './s47045/s47045.page';  
import { S47046Page } from './s47046/s47046.page';  
import { S47047Page } from './s47047/s47047.page';
import { S47048Page } from './s47048/s47048.page';  
import { S47049Page } from './s47049/s47049.page';  
import { S47049tPage } from './s47049t/s47049t.page';  
import { S47050Page } from './s47050/s47050.page';  
import { S47051Page } from './s47051/s47051.page';  
import { S47052Page } from './s47052/s47052.page';  
import { S47053Page } from './s47053/s47053.page';  
import { S47054Page } from './s47054/s47054.page';  
import { S47055Page } from './s47055/s47055.page';  
import { S47056Page } from './s47056/s47056.page';  
import { S47057Page } from './s47057/s47057.page';  
import { S47058Page } from './s47058/s47058.page';  
import { S47059Page } from './s47059/s47059.page';  
import { S47059tPage } from './s47059t/s47059t.page';  
import { S47060Page } from './s47060/s47060.page';  
import { S47060tPage } from './s47060t/s47060t.page';  
import { S47061Page } from './s47061/s47061.page';  
import { S47062Page } from './s47062/s47062.page';  
import { S47063Page } from './s47063/s47063.page';  
import { S47064Page } from './s47064/s47064.page';  
import { S47065Page } from './s47065/s47065.page';  
import { S47066Page } from './s47066/s47066.page'; 
import { S47067Page } from './s47067/s47067.page';  
import { S47068Page } from './s47068/s47068.page'; 
import { S47069Page } from './s47069/s47069.page';  
import { S47070Page } from './s47070/s47070.page';  
import { S47070tPage } from './s47070t/s47070t.page';  
import { S47071Page } from './s47071/s47071.page';  
import { S47072Page } from './s47072/s47072.page';  
import { S47073Page } from './s47073/s47073.page';  
import { S47074Page } from './s47074/s47074.page';  
import { S47075Page } from './s47075/s47075.page';  
import { S47076Page } from './s47076/s47076.page';  
import { S47077Page } from './s47077/s47077.page';  
import { S47078Page } from './s47078/s47078.page';  
import { S47078tPage } from './s47078t/s47078t.page';  
import { S47079Page } from './s47079/s47079.page';  
import { S47080Page } from './s47080/s47080.page';  
import { S47081Page } from './s47081/s47081.page';  
import { S47082Page } from './s47082/s47082.page';  
import { S47083Page } from './s47083/s47083.page';  
import { S47084Page } from './s47084/s47084.page';  
import { S47085Page } from './s47085/s47085.page';  
import { S47086Page } from './s47086/s47086.page';  
import { S47087Page } from './s47087/s47087.page';  
import { S47088Page } from './s47088/s47088.page';
import { S47089Page } from './s47089/s47089.page';  
import { S47090Page } from './s47090/s47090.page';  
import { S47090tPage } from './s47090t/s47090t.page';  
import { S47091Page } from './s47091/s47091.page'; 
import { S47092Page } from './s47092/s47092.page';  
import { S47093Page } from './s47093/s47093.page';  
import { S47094Page } from './s47094/s47094.page';  
import { S47095Page } from './s47095/s47095.page';  
import { S47096Page } from './s47096/s47096.page';  
import { S47097Page } from './s47097/s47097.page'; 
import { S47098Page } from './s47098/s47098.page';  
import { S47099Page } from './s47099/s47099.page';  
import { S47099tPage } from './s47099t/s47099t.page';  
import { S47100Page } from './s47100/s47100.page';
import { S47101Page } from './s47101/s47101.page';  
import { S47102Page } from './s47102/s47102.page';  
import { S47103Page } from './s47103/s47103.page'; 
import { S47104Page } from './s47104/s47104.page';  
import { S47105Page } from './s47105/s47105.page'; 
import { S47105tPage } from './s47105t/s47105t.page';  
import { S47106Page } from './s47106/s47106.page'; 
import { S47107Page } from './s47107/s47107.page';  
import { S47108Page } from './s47108/s47108.page';  
import { S47109Page } from './s47109/s47109.page';  
import { S47110Page } from './s47110/s47110.page';  
import { S47111Page } from './s47111/s47111.page';  
import { S47112Page } from './s47112/s47112.page';  
import { S47113Page } from './s47113/s47113.page';  
import { S47114Page } from './s47114/s47114.page';  
import { S47115Page } from './s47115/s47115.page';  
import { S47116Page } from './s47116/s47116.page';  
import { S47117Page } from './s47117/s47117.page';  
import { S47118Page } from './s47118/s47118.page';  
import { S47119Page } from './s47119/s47119.page';  
import { S47120Page } from './s47120/s47120.page';  
import { S47121Page } from './s47121/s47121.page';  
import { S47122Page } from './s47122/s47122.page';  
import { S47123Page } from './s47123/s47123.page';  
import { S47124Page } from './s47124/s47124.page';  
import { S47125Page } from './s47125/s47125.page';  
import { S47126Page } from './s47126/s47126.page';  
import { S47127Page } from './s47127/s47127.page';  
import { S47128Page } from './s47128/s47128.page';  
import { S47129Page } from './s47129/s47129.page';  
import { S47130Page } from './s47130/s47130.page';  
import { S47131Page } from './s47131/s47131.page';  
import { S47132Page } from './s47132/s47132.page';  
import { S47133Page } from './s47133/s47133.page'; 
import { S47133tPage } from './s47133t/s47133t.page';  
import { S47134Page } from './s47134/s47134.page';  
import { S47135Page } from './s47135/s47135.page';  
import { S47135tPage } from './s47135t/s47135t.page';  
import { S47136Page } from './s47136/s47136.page';  
import { S47137Page } from './s47137/s47137.page';  
import { S47138Page } from './s47138/s47138.page';  
import { S47139Page } from './s47139/s47139.page';  
import { S47139tPage } from './s47139t/s47139t.page';  
import { S47140Page } from './s47140/s47140.page';  
import { S47141Page } from './s47141/s47141.page';  
import { S47142Page } from './s47142/s47142.page';  
import { S47142tPage } from './s47142t/s47142t.page';  
import { S47143Page } from './s47143/s47143.page';  
import { S47144Page } from './s47144/s47144.page'; 
import { S47144tPage } from './s47144t/s47144t.page';  
import { S47145Page } from './s47145/s47145.page';  
import { S47146Page } from './s47146/s47146.page'; 
import { S47147Page } from './s47147/s47147.page';  
import { S47147tPage } from './s47147t/s47147t.page';  
import { S47148Page } from './s47148/s47148.page';  
import { S47149Page } from './s47149/s47149.page';  
import { S47150Page } from './s47150/s47150.page';  
import { S47151Page } from './s47151/s47151.page';  
import { S47152Page } from './s47152/s47152.page';  
import { S47153Page } from './s47153/s47153.page';  
import { S47154Page } from './s47154/s47154.page';  
import { S47155Page } from './s47155/s47155.page';  
import { S47156Page } from './s47156/s47156.page';  
import { S47157Page } from './s47157/s47157.page';
import { S47158Page } from './s47158/s47158.page';  
import { S47159Page } from './s47159/s47159.page';  
import { S47160Page } from './s47160/s47160.page';  
import { S47161Page } from './s47161/s47161.page';  
import { S47162Page } from './s47162/s47162.page';  
import { S47163Page } from './s47163/s47163.page';  
import { S47164Page } from './s47164/s47164.page';  
import { S47165Page } from './s47165/s47165.page';  
import { S47166Page } from './s47166/s47166.page'; 
import { S47167Page } from './s47167/s47167.page';  
import { S47168Page } from './s47168/s47168.page';  
import { S47169Page } from './s47169/s47169.page';  
import { S47170Page } from './s47170/s47170.page'; 
import { S47171Page } from './s47171/s47171.page';  
import { S47172Page } from './s47172/s47172.page';  
import { S47173Page } from './s47173/s47173.page'; 
import { S47174Page } from './s47174/s47174.page';  
import { S47174tPage } from './s47174t/s47174t.page';  
import { S47175Page } from './s47175/s47175.page';  
import { S47176Page } from './s47176/s47176.page';  
import { S47177Page } from './s47177/s47177.page';  
import { S47178Page } from './s47178/s47178.page';  
import { S47179Page } from './s47179/s47179.page'; 
import { S47179tPage } from './s47179t/s47179t.page';  
import { S47180Page } from './s47180/s47180.page';
import { S47181Page } from './s47181/s47181.page';  
import { S47182Page } from './s47182/s47182.page';  
import { S47183Page } from './s47183/s47183.page';  
import { S47184Page } from './s47184/s47184.page';  
import { S47185Page } from './s47185/s47185.page';  
import { S47186Page } from './s47186/s47186.page';  
import { S47187Page } from './s47187/s47187.page';  
import { S47188Page } from './s47188/s47188.page';  
import { S47188tPage } from './s47188t/s47188t.page';  
import { S47189Page } from './s47189/s47189.page';
import { S47190Page } from './s47190/s47190.page';  
import { S47191Page } from './s47191/s47191.page';  
import { S47192Page } from './s47192/s47192.page';  
import { S47193Page } from './s47193/s47193.page';  
import { S47194Page } from './s47194/s47194.page';  
import { S47195Page } from './s47195/s47195.page';  
import { S47196Page } from './s47196/s47196.page';  
import { S47197Page } from './s47197/s47197.page';
import { S47198Page } from './s47198/s47198.page';  
import { S47199Page } from './s47199/s47199.page'; 
import { S47200Page } from './s47200/s47200.page';
import { S47201Page } from './s47201/s47201.page';  
import { S47202Page } from './s47202/s47202.page';  
import { S47202tPage } from './s47202t/s47202t.page';  
import { S47203Page } from './s47203/s47203.page';  
import { S47204Page } from './s47204/s47204.page';  
import { S47204tPage } from './s47204t/s47204t.page';  
import { S47205Page } from './s47205/s47205.page';  
import { S47206Page } from './s47206/s47206.page';  
import { S47207Page } from './s47207/s47207.page'; 
import { S47208Page } from './s47208/s47208.page';  
import { S47209Page } from './s47209/s47209.page';  
import { S47210Page } from './s47210/s47210.page'; 
import { S47211Page } from './s47211/s47211.page';  
import { S47212Page } from './s47212/s47212.page';  
import { S47213Page } from './s47213/s47213.page'; 
import { S47214Page } from './s47214/s47214.page';  
import { S47215Page } from './s47215/s47215.page';  
import { S47216Page } from './s47216/s47216.page'; 
import { S47217Page } from './s47217/s47217.page';  
import { S47218Page } from './s47218/s47218.page';  
import { S47219Page } from './s47219/s47219.page';
import { S47220Page } from './s47220/s47220.page';  
import { S47221Page } from './s47221/s47221.page';  
import { S47222Page } from './s47222/s47222.page'; 
import { S47222tPage } from './s47222t/s47222t.page';  
import { S47223Page } from './s47223/s47223.page';  
import { S47224Page } from './s47224/s47224.page';  
import { S47225Page } from './s47225/s47225.page';  
import { S47226Page } from './s47226/s47226.page';  
import { S47227Page } from './s47227/s47227.page';  
import { S47228Page } from './s47228/s47228.page';  
import { S47229Page } from './s47229/s47229.page';  
import { S47229tPage } from './s47229t/s47229t.page';  
import { S47230Page } from './s47230/s47230.page';  
import { S47231Page } from './s47231/s47231.page'; 
import { S47231tPage } from './s47231t/s47231t.page';
import { S47232Page } from './s47232/s47232.page';   
import { S47233Page } from './s47233/s47233.page';  
import { S47234Page } from './s47234/s47234.page';  
import { S47235Page } from './s47235/s47235.page';  
import { S47236Page } from './s47236/s47236.page';  
import { S47237Page } from './s47237/s47237.page';  
import { S47238Page } from './s47238/s47238.page';  
import { S47239Page } from './s47239/s47239.page';  
import { S47240Page } from './s47240/s47240.page';  
import { S47241Page } from './s47241/s47241.page';
import { S47242Page } from './s47242/s47242.page';  
import { S47243Page } from './s47243/s47243.page';  
import { S47244Page } from './s47244/s47244.page';  
import { S47245Page } from './s47245/s47245.page'; 
import { S47246Page } from './s47246/s47246.page';  
import { S47247Page } from './s47247/s47247.page';  
import { S47247tPage } from './s47247t/s47247t.page';  
import { S47248Page } from './s47248/s47248.page'; 
import { S47249Page } from './s47249/s47249.page';  
import { S47249tPage } from './s47249t/s47249t.page';  
import { S47250Page } from './s47250/s47250.page';  
import { S47251Page } from './s47251/s47251.page';  
import { S47252Page } from './s47252/s47252.page';  
import { S47253Page } from './s47253/s47253.page';  
import { S47254Page } from './s47254/s47254.page';  
import { S47255Page } from './s47255/s47255.page';  
import { S47256Page } from './s47256/s47256.page';  
import { S47257Page } from './s47257/s47257.page';  
import { S47258Page } from './s47258/s47258.page';  
import { S47258tPage } from './s47258t/s47258t.page';  
import { S47259Page } from './s47259/s47259.page';  
import { S47260Page } from './s47260/s47260.page';  
import { S47261Page } from './s47261/s47261.page';  
import { S47261tPage } from './s47261t/s47261t.page';  
import { S47262Page } from './s47262/s47262.page';  
import { S47263Page } from './s47263/s47263.page';  
import { S47264Page } from './s47264/s47264.page';  
import { S47264tPage } from './s47264t/s47264t.page';  
import { S47265Page } from './s47265/s47265.page';  
import { S47266Page } from './s47266/s47266.page';  
import { S47267Page } from './s47267/s47267.page';  
import { S47267tPage } from './s47267t/s47267t.page';  
import { S47268Page } from './s47268/s47268.page';  
import { S47269Page } from './s47269/s47269.page';  
import { S47270Page } from './s47270/s47270.page';  
import { S47271Page } from './s47271/s47271.page';  
import { S47272Page } from './s47272/s47272.page';  
import { S47273Page } from './s47273/s47273.page';  
import { S47274Page } from './s47274/s47274.page';  
import { S47275Page } from './s47275/s47275.page';  
import { S47276Page } from './s47276/s47276.page';  
import { S47277Page } from './s47277/s47277.page';  
import { S47278Page } from './s47278/s47278.page';  
import { S47279Page } from './s47279/s47279.page';  
import { S47279tPage } from './s47279t/s47279t.page';  
import { S47280Page } from './s47280/s47280.page';  
import { S47281Page } from './s47281/s47281.page';  
import { S47282Page } from './s47282/s47282.page';  
import { S47283Page } from './s47283/s47283.page';  
import { S47284Page } from './s47284/s47284.page';  
import { S47285Page } from './s47285/s47285.page';  
import { S47286Page } from './s47286/s47286.page';  
import { S47287Page } from './s47287/s47287.page';  
import { S47288Page } from './s47288/s47288.page';  
import { S47289Page } from './s47289/s47289.page';  
import { S47290Page } from './s47290/s47290.page'; 
import { S47291Page } from './s47291/s47291.page';  
import { S47292Page } from './s47292/s47292.page';  
import { S47293Page } from './s47293/s47293.page'; 
import { S47294Page } from './s47294/s47294.page';  
import { S47295Page } from './s47295/s47295.page';  
import { S47296Page } from './s47296/s47296.page';  
import { S47297Page } from './s47297/s47297.page';  
import { S47298Page } from './s47298/s47298.page';  
import { S47299Page } from './s47299/s47299.page';  
import { S47299tPage } from './s47299t/s47299t.page';  
import { S47300Page } from './s47300/s47300.page';  
import { S47301Page } from './s47301/s47301.page';  
import { S47302Page } from './s47302/s47302.page';  
import { S47303Page } from './s47303/s47303.page';  
import { S47304Page } from './s47304/s47304.page';  
import { S47305Page } from './s47305/s47305.page';  
import { S47306Page } from './s47306/s47306.page';  
import { S47307Page } from './s47307/s47307.page';  
import { S47308Page } from './s47308/s47308.page';  
import { S47309Page } from './s47309/s47309.page';  
import { S47310Page } from './s47310/s47310.page';  
import { S47311Page } from './s47311/s47311.page';  
import { S47312Page } from './s47312/s47312.page';  
import { S47313Page } from './s47313/s47313.page';  
import { S47314Page } from './s47314/s47314.page';  
import { S47315Page } from './s47315/s47315.page';  
import { S47316Page } from './s47316/s47316.page';  
import { S47317Page } from './s47317/s47317.page';  
import { S47318Page } from './s47318/s47318.page';  
import { S47319Page } from './s47319/s47319.page';  
import { S47320Page } from './s47320/s47320.page';  
import { S47320tPage } from './s47320t/s47320t.page';  
import { S47321Page } from './s47321/s47321.page';  
import { S47322Page } from './s47322/s47322.page';  
import { S47323Page } from './s47323/s47323.page';  
import { S47324Page } from './s47324/s47324.page';  
import { S47325Page } from './s47325/s47325.page';  
import { S47326Page } from './s47326/s47326.page';  
import { S47327Page } from './s47327/s47327.page';  
import { S47328Page } from './s47328/s47328.page';  
import { S47328tPage } from './s47328t/s47328t.page';  
import { S47329Page } from './s47329/s47329.page';  
import { S47330Page } from './s47330/s47330.page';  
import { S47331Page } from './s47331/s47331.page';  
import { S47332Page } from './s47332/s47332.page';  
import { S47333Page } from './s47333/s47333.page';  
import { S47334Page } from './s47334/s47334.page';  
import { S47335Page } from './s47335/s47335.page';  
import { S47336Page } from './s47336/s47336.page';  
import { S47337Page } from './s47337/s47337.page';  
import { S47338Page } from './s47338/s47338.page';  
import { S47339Page } from './s47339/s47339.page';  
import { S47340Page } from './s47340/s47340.page';  
import { S47341Page } from './s47341/s47341.page';  
import { S47342Page } from './s47342/s47342.page';  
import { S47343Page } from './s47343/s47343.page';  
import { S47344Page } from './s47344/s47344.page';  
import { S47345Page } from './s47345/s47345.page';  
import { S47346Page } from './s47346/s47346.page';  
import { S47347Page } from './s47347/s47347.page';  
import { S47348Page } from './s47348/s47348.page';  
import { S47349Page } from './s47349/s47349.page';  
import { S47350Page } from './s47350/s47350.page';  
import { S47351Page } from './s47351/s47351.page';  
import { S47352Page } from './s47352/s47352.page';  
import { S47353Page } from './s47353/s47353.page';  
import { S47354Page } from './s47354/s47354.page';  
import { S47355Page } from './s47355/s47355.page';  
import { S47356Page } from './s47356/s47356.page';  
import { S47357Page } from './s47357/s47357.page';  
import { S47358Page } from './s47358/s47358.page';  
import { S47358tPage } from './s47358t/s47358t.page';  
import { S47359Page } from './s47359/s47359.page';  
import { S47360Page } from './s47360/s47360.page';  
import { S47361Page } from './s47361/s47361.page';  
import { S47362Page } from './s47362/s47362.page';  
import { S47363Page } from './s47363/s47363.page';  
import { S47364Page } from './s47364/s47364.page';  
import { S47365Page } from './s47365/s47365.page';  
import { S47366Page } from './s47366/s47366.page';  
import { S47367Page } from './s47367/s47367.page';  
import { S47368Page } from './s47368/s47368.page';  
import { S47369Page } from './s47369/s47369.page';  
import { S47370Page } from './s47370/s47370.page';  
import { S47371Page } from './s47371/s47371.page';  

import { RelationshipsRoutingModule } from './relationships-routing.module';

@NgModule({
  declarations: [
    S47000Page ,
    S47001Page ,
    S47002Page ,
    S47002tPage ,
    S47003Page ,
    S47004Page ,
    S47005Page ,
    S47006Page ,
    S47007Page ,
    S47008Page ,
    S47008tPage ,
    S47009Page ,
    S47010Page ,
    S47011Page ,
    S47012Page ,
    S47013Page ,
    S47013tPage ,   
    S47014Page ,
    S47015Page ,
    S47016Page ,
    S47017Page ,
    S47018Page ,
    S47019Page ,
    S47020Page ,
    S47021Page ,
    S47022Page ,
    S47023Page ,
    S47024Page ,
    S47025Page ,
    S47026Page ,
    S47027Page ,
    S47028Page ,
    S47029Page ,
    S47030Page ,
    S47030tPage ,
    S47031Page ,
    S47031tPage ,
    S47032Page ,
    S47033Page ,
    S47034Page ,
    S47034tPage ,
    S47035Page ,
    S47036Page ,
    S47036tPage ,
    S47037Page ,
    S47038Page ,
    S47039Page ,
    S47040Page ,
    S47041Page ,
    S47042Page ,
    S47043Page ,
    S47044Page ,
    S47045Page ,
    S47046Page ,
    S47047Page ,
    S47048Page ,
    S47049Page ,
    S47049tPage ,
    S47050Page ,
    S47051Page ,
    S47052Page ,
    S47053Page ,
    S47054Page ,
    S47055Page ,
    S47056Page ,
    S47057Page ,
    S47058Page ,
    S47059Page ,
    S47059tPage ,
    S47060Page ,
    S47060tPage ,
    S47061Page ,
    S47062Page ,
    S47063Page ,
    S47064Page ,
    S47065Page ,
    S47066Page ,
    S47067Page ,
    S47068Page ,
    S47069Page ,
    S47070Page ,
    S47070tPage ,
    S47071Page ,
    S47072Page ,
    S47073Page ,
    S47074Page ,
    S47075Page ,
    S47076Page ,
    S47077Page ,
    S47078Page ,
    S47078tPage ,
    S47079Page ,
    S47080Page ,
    S47081Page ,
    S47082Page ,
    S47083Page ,
    S47084Page ,
    S47085Page ,
    S47086Page ,
    S47087Page ,
    S47088Page ,
    S47089Page ,
    S47090Page ,
    S47090tPage ,
    S47091Page ,
    S47092Page ,
    S47093Page ,
    S47094Page ,
    S47095Page ,
    S47096Page ,
    S47097Page ,
    S47098Page ,
    S47099Page ,
    S47099tPage ,
    S47100Page ,
    S47101Page ,
    S47102Page ,
    S47103Page ,
    S47104Page ,
    S47105Page ,
    S47105tPage ,
    S47106Page ,
    S47107Page ,
    S47108Page ,
    S47109Page ,
    S47110Page ,
    S47111Page ,
    S47112Page ,
    S47113Page ,
    S47114Page ,
    S47115Page ,
    S47116Page ,
    S47117Page ,
    S47118Page ,
    S47119Page ,
    S47120Page ,
    S47121Page ,
    S47122Page ,
    S47123Page ,
    S47124Page ,
    S47125Page ,
    S47126Page ,
    S47127Page ,
    S47128Page ,
    S47129Page ,
    S47130Page ,
    S47131Page ,
    S47132Page ,
    S47133Page ,
    S47133tPage ,
    S47134Page ,
    S47135Page ,
    S47135tPage ,
    S47136Page ,
    S47137Page ,
    S47138Page ,
    S47139Page ,
    S47139tPage ,
    S47140Page ,
    S47141Page ,
    S47142Page ,
    S47142tPage ,
    S47143Page ,
    S47144Page ,
    S47144tPage ,    
    S47145Page ,
    S47146Page ,
    S47147Page ,
    S47147tPage ,
    S47148Page ,
    S47149Page ,
    S47150Page ,
    S47151Page ,
    S47152Page ,
    S47153Page ,
    S47154Page ,
    S47155Page ,
    S47156Page ,
    S47157Page ,
    S47158Page ,
    S47159Page ,
    S47160Page ,
    S47161Page ,
    S47162Page ,
    S47163Page ,
    S47164Page ,
    S47165Page ,
    S47166Page ,
    S47167Page ,
    S47168Page ,
    S47169Page ,
    S47170Page ,
    S47171Page ,
    S47172Page ,
    S47173Page ,
    S47174Page ,
    S47174tPage ,
    S47175Page ,
    S47176Page ,
    S47177Page ,
    S47178Page ,
    S47179Page ,
    S47179tPage ,
    S47180Page ,
    S47181Page ,
    S47182Page ,
    S47183Page ,
    S47184Page ,
    S47185Page ,
    S47186Page ,
    S47187Page ,
    S47188Page ,
    S47188tPage ,
    S47189Page ,
    S47190Page ,
    S47191Page ,
    S47192Page ,
    S47193Page ,
    S47194Page ,
    S47195Page ,
    S47196Page ,
    S47197Page ,
    S47198Page ,
    S47199Page ,
    S47200Page ,
    S47201Page ,
    S47202Page ,
    S47202tPage ,
    S47203Page ,
    S47204Page ,
    S47204tPage ,
    S47205Page ,
    S47206Page ,
    S47207Page ,
    S47208Page ,
    S47209Page ,
    S47210Page ,
    S47211Page ,
    S47212Page ,
    S47213Page ,
    S47214Page ,
    S47215Page ,
    S47216Page ,
    S47217Page ,
    S47218Page ,
    S47219Page ,
    S47220Page ,
    S47221Page ,
    S47222Page ,
    S47222tPage ,
    S47223Page ,
    S47224Page ,
    S47225Page ,
    S47226Page ,
    S47227Page ,
    S47228Page ,
    S47229Page ,
    S47229tPage ,
    S47230Page ,
    S47231Page ,
    S47231tPage ,
    S47232Page ,
    S47233Page ,
    S47234Page ,
    S47235Page ,
    S47236Page ,
    S47237Page ,
    S47238Page ,
    S47239Page ,
    S47240Page ,
    S47241Page ,
    S47242Page ,
    S47243Page ,
    S47244Page ,
    S47245Page ,
    S47246Page ,
    S47247Page ,
    S47247tPage ,
    S47248Page ,
    S47249Page ,
    S47249tPage ,
    S47250Page ,
    S47251Page ,
    S47252Page ,
    S47253Page ,
    S47254Page ,
    S47255Page ,
    S47256Page ,
    S47257Page ,
    S47258Page ,
    S47258tPage ,
    S47259Page ,
    S47260Page ,
    S47261Page ,
    S47261tPage ,
    S47262Page ,
    S47263Page ,
    S47264Page ,
    S47264tPage ,
    S47265Page ,
    S47266Page ,
    S47267Page ,
    S47267tPage ,
    S47268Page ,
    S47269Page ,
    S47270Page ,
    S47271Page ,
    S47272Page ,
    S47273Page ,
    S47274Page ,
    S47275Page ,
    S47276Page ,
    S47277Page ,
    S47278Page ,
    S47279Page ,
    S47279tPage ,
    S47280Page ,
    S47281Page ,
    S47282Page ,
    S47283Page ,
    S47284Page ,
    S47285Page ,
    S47286Page ,
    S47287Page ,
    S47288Page ,
    S47289Page ,
    S47290Page ,
    S47291Page ,
    S47292Page ,
    S47293Page ,
    S47294Page ,
    S47295Page ,
    S47296Page ,
    S47297Page ,
    S47298Page ,
    S47299Page ,
    S47299tPage ,
    S47300Page ,
    S47301Page , 
     S47302Page , 
     S47303Page , 
     S47304Page , 
     S47305Page , 
     S47306Page , 
     S47307Page , 
     S47308Page , 
     S47309Page , 
     S47310Page , 
     S47311Page , 
     S47312Page , 
     S47313Page , 
     S47314Page , 
     S47315Page , 
     S47316Page , 
     S47317Page , 
     S47318Page , 
     S47319Page , 
     S47320Page , 
     S47320tPage , 
     S47321Page , 
     S47322Page , 
     S47323Page , 
     S47324Page , 
     S47325Page , 
     S47326Page , 
     S47327Page , 
     S47328Page , 
     S47328tPage , 
     S47329Page , 
     S47330Page , 
     S47331Page , 
     S47332Page , 
     S47333Page , 
     S47334Page , 
     S47335Page , 
     S47336Page , 
     S47337Page , 
     S47338Page , 
     S47339Page , 
     S47340Page , 
     S47341Page , 
     S47342Page , 
     S47343Page , 
     S47344Page , 
     S47345Page , 
     S47346Page , 
     S47347Page , 
     S47348Page , 
     S47349Page , 
     S47350Page , 
     S47351Page , 
     S47352Page , 
     S47353Page , 
     S47354Page , 
     S47355Page , 
     S47356Page , 
     S47357Page , 
     S47358Page , 
     S47358tPage , 
     S47359Page , 
     S47360Page , 
     S47361Page , 
     S47362Page , 
     S47363Page , 
     S47364Page , 
     S47365Page , 
     S47366Page , 
     S47367Page , 
     S47368Page , 
     S47369Page , 
     S47370Page , 
     S47371Page , 
 ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RelationshipsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class RelationshipsModule { }
