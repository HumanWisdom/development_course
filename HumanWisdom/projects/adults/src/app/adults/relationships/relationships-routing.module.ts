import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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
import { S47370p1Page } from './s47370p1/s47370p1.page';  
import { S47370p2Page } from './s47370p2/s47370p2.page';  
import { S47370p3Page } from './s47370p3/s47370p3.page';  
import { S47371Page } from './s47371/s47371.page';  

const routes: Routes = [
  {
    path: '',   
    component: S47000Page,
  },
  {
    path: 's47000',   
    component: S47000Page,
  },
  {
    path: 's47001',   
    component: S47001Page,
  },
  {
    path: 's47002',   
   canActivate:[ActiveGuard],  
    component: S47002Page,
  },
  {
    path: 's47002t',   
   canActivate:[ActiveGuard],  
    component: S47002tPage,
  },
  {
    path: 's47003',   
   canActivate:[ActiveGuard],  
    component: S47003Page,
  },
  {
    path: 's47004',   
   canActivate:[ActiveGuard],  
    component: S47004Page,
  }, 
  {
    path: 's47005',   
   canActivate:[ActiveGuard],  
    component: S47005Page,
  },
  {
    path: 's47006',   
   canActivate:[ActiveGuard],  
    component: S47006Page,
  },
  {
    path: 's47007',   
   canActivate:[ActiveGuard],  
    component: S47007Page,
  }, 
  {
    path: 's47008',   
   canActivate:[ActiveGuard],  
    component: S47008Page,
  },
  {
    path: 's47008t',   
   canActivate:[ActiveGuard],  
    component: S47008tPage,
  },
  {
    path: 's47009',   
   canActivate:[ActiveGuard],  
    component: S47009Page,
  },
  {
    path: 's47010',   
   canActivate:[ActiveGuard],  
    component: S47010Page,
  },
  {
    path: 's47011',   
   canActivate:[ActiveGuard],  
    component: S47011Page,
  }, 
  {
    path: 's47012',   
   canActivate:[ActiveGuard],  
    component: S47012Page,
  },
  {
    path: 's47013',   
   canActivate:[ActiveGuard],  
    component: S47013Page,
  },
  {
    path: 's47013t',   
   canActivate:[ActiveGuard],  
    component: S47013tPage,
  },
  {
    path: 's47014',   
   canActivate:[ActiveGuard],  
    component: S47014Page,
  },  
  {
    path: 's47015',   
   canActivate:[ActiveGuard],  
    component: S47015Page,
  },
  {
    path: 's47016',   
   canActivate:[ActiveGuard],  
    component: S47016Page,
  },
  {
    path: 's47017',   
   canActivate:[ActiveGuard],  
    component: S47017Page,
  },
  {
    path: 's47018',   
   canActivate:[ActiveGuard],  
    component: S47018Page,
  }, 
  {
    path: 's47019',   
   canActivate:[ActiveGuard],  
    component: S47019Page,
  },
  {
    path: 's47020',   
   canActivate:[ActiveGuard],  
    component: S47020Page,
  },
  {
    path: 's47021',   
   canActivate:[ActiveGuard],  
    component: S47021Page,
  },
  {
    path: 's47022',   
   canActivate:[ActiveGuard],  
    component: S47022Page,
  },
  {
    path: 's47023',   
   canActivate:[ActiveGuard],  
    component: S47023Page,
  },
  {
    path: 's47024',   
   canActivate:[ActiveGuard],  
    component: S47024Page,
  },
  {
    path: 's47025',   
   canActivate:[ActiveGuard],  
    component: S47025Page,
  },
  {
    path: 's47026',   
   canActivate:[ActiveGuard],  
    component: S47026Page,
  },
  {
    path: 's47027',   
   canActivate:[ActiveGuard],  
    component: S47027Page,
  },
  {
    path: 's47028',   
   canActivate:[ActiveGuard],  
    component: S47028Page,
  },
  {
    path: 's47029',   
   canActivate:[ActiveGuard],  
    component: S47029Page,
  },
  {
    path: 's47030',   
   canActivate:[ActiveGuard],  
    component: S47030Page,
  },
  {
    path: 's47030t',   
   canActivate:[ActiveGuard],  
    component: S47030tPage,
  },
  {
    path: 's47031',   
   canActivate:[ActiveGuard],  
    component: S47031Page,
  },
  {
    path: 's47031t',   
   canActivate:[ActiveGuard],  
    component: S47031tPage,
  },
  {
    path: 's47032',   
   canActivate:[ActiveGuard],  
    component: S47032Page,
  },
  {
    path: 's47033',   
   canActivate:[ActiveGuard],  
    component: S47033Page,
  },
 
  {
    path: 's47034',   
   canActivate:[ActiveGuard],  
    component: S47034Page,
  },
  {
    path: 's47034t',   
   canActivate:[ActiveGuard],  
    component: S47034tPage,
  },
  
  {
    path: 's47035',   
   canActivate:[ActiveGuard],  
    component: S47035Page,
  },
  
  {
    path: 's47036',   
   canActivate:[ActiveGuard],  
    component: S47036Page,
  },
  {
    path: 's47036t',   
   canActivate:[ActiveGuard],  
    component: S47036tPage,
  },
  {
    path: 's47037',   
   canActivate:[ActiveGuard],  
    component: S47037Page,
  }, 
  {
    path: 's47038',   
   canActivate:[ActiveGuard],  
    component: S47038Page,
  },  
  {
    path: 's47039',   
   canActivate:[ActiveGuard],  
    component: S47039Page,
  },
  {
    path: 's47040',   
   canActivate:[ActiveGuard],  
    component: S47040Page,
  },  
  {
    path: 's47041',   
   canActivate:[ActiveGuard],  
    component: S47041Page,
  },
  {
    path: 's47042',   
   canActivate:[ActiveGuard],  
    component: S47042Page,
  },
  {
    path: 's47043',   
   canActivate:[ActiveGuard],  
    component: S47043Page,
  }, 
  {
    path: 's47044',   
   canActivate:[ActiveGuard],  
    component: S47044Page,
  },
  {
    path: 's47045',   
   canActivate:[ActiveGuard],  
    component: S47045Page,
  },
  {
    path: 's47046',   
   canActivate:[ActiveGuard],  
    component: S47046Page,
  },
  {
    path: 's47047',   
   canActivate:[ActiveGuard],  
    component: S47047Page,
  }, 
  {
    path: 's47048',   
   canActivate:[ActiveGuard],  
    component: S47048Page,
  },
  {
    path: 's47049',   
   canActivate:[ActiveGuard],  
    component: S47049Page,
  },
  {
    path: 's47049t',   
   canActivate:[ActiveGuard],  
    component: S47049tPage,
  },
  {
    path: 's47050',   
   canActivate:[ActiveGuard],  
    component: S47050Page,
  },
  {
    path: 's47051',   
   canActivate:[ActiveGuard],  
    component: S47051Page,
  },  
  {
    path: 's47052',   
   canActivate:[ActiveGuard],  
    component: S47052Page,
  },
  {
    path: 's47053',   
   canActivate:[ActiveGuard],  
    component: S47053Page,
  },
  {
    path: 's47054',   
   canActivate:[ActiveGuard],  
    component: S47054Page,
  },
  {
    path: 's47055',   
   canActivate:[ActiveGuard],  
    component: S47055Page,
  },
  {
    path: 's47056',   
   canActivate:[ActiveGuard],  
    component: S47056Page,
  },
  {
    path: 's47057',   
   canActivate:[ActiveGuard],  
    component: S47057Page,
  },
  {
    path: 's47058',   
   canActivate:[ActiveGuard],  
    component: S47058Page,
  },
  {
    path: 's47059',   
   canActivate:[ActiveGuard],  
    component: S47059Page,
  },
  {
    path: 's47059t',   
   canActivate:[ActiveGuard],  
    component: S47059tPage,
  },
  {
    path: 's47060',   
   canActivate:[ActiveGuard],  
    component: S47060Page,
  },
  {
    path: 's47060t',   
   canActivate:[ActiveGuard],  
    component: S47060tPage,
  },
  {
    path: 's47061',   
   canActivate:[ActiveGuard],  
    component: S47061Page,
  },
  {
    path: 's47062',   
   canActivate:[ActiveGuard],  
    component: S47062Page,
  },
  {
    path: 's47063',   
   canActivate:[ActiveGuard],  
    component: S47063Page,
  }, 
  {
    path: 's47064',   
   canActivate:[ActiveGuard],  
    component: S47064Page,
  },
  {
    path: 's47065',   
   canActivate:[ActiveGuard],  
    component: S47065Page,
  },
  {
    path: 's47066',   
   canActivate:[ActiveGuard],  
    component: S47066Page,
  }, 
  {
    path: 's47067',   
   canActivate:[ActiveGuard],  
    component: S47067Page,
  },
  {
    path: 's47068',   
   canActivate:[ActiveGuard],  
    component: S47068Page,
  },
  {
    path: 's47069',   
   canActivate:[ActiveGuard],  
    component: S47069Page,
  },
  {
    path: 's47070',   
   canActivate:[ActiveGuard],  
    component: S47070Page,
  },
  {
    path: 's47070t',   
   canActivate:[ActiveGuard],  
    component: S47070tPage,
  },
  {
    path: 's47071',   
   canActivate:[ActiveGuard],  
    component: S47071Page,
  }, 
  {
    path: 's47072',   
   canActivate:[ActiveGuard],  
    component: S47072Page,
  },
  {
    path: 's47073',   
   canActivate:[ActiveGuard],  
    component: S47073Page,
  },
  {
    path: 's47074',   
   canActivate:[ActiveGuard],  
    component: S47074Page,
  }, 
  {
    path: 's47075',   
   canActivate:[ActiveGuard],  
    component: S47075Page,
  },
  {
    path: 's47076',   
   canActivate:[ActiveGuard],  
    component: S47076Page,
  }, 
  {
    path: 's47077',   
   canActivate:[ActiveGuard],  
    component: S47077Page,
  },
  {
    path: 's47078',   
   canActivate:[ActiveGuard],  
    component: S47078Page,
  },
  {
    path: 's47078t',   
   canActivate:[ActiveGuard],  
    component: S47078tPage,
  },
  {
    path: 's47079',   
   canActivate:[ActiveGuard],  
    component: S47079Page,
  },
  {
    path: 's47080',   
   canActivate:[ActiveGuard],  
    component: S47080Page,
  }, 
  {
    path: 's47081',   
   canActivate:[ActiveGuard],  
    component: S47081Page,
  },
  {
    path: 's47082',   
   canActivate:[ActiveGuard],  
    component: S47082Page,
  },  
  {
    path: 's47083',   
   canActivate:[ActiveGuard],  
    component: S47083Page,
  },
  {
    path: 's47084',   
   canActivate:[ActiveGuard],  
    component: S47084Page,
  }, 
  {
    path: 's47085',   
   canActivate:[ActiveGuard],  
    component: S47085Page,
  }, 
  {
    path: 's47086',   
   canActivate:[ActiveGuard],  
    component: S47086Page,
  },
  {
    path: 's47087',   
   canActivate:[ActiveGuard],  
    component: S47087Page,
  }, 
  {
    path: 's47088',   
   canActivate:[ActiveGuard],  
    component: S47088Page,
  }, 
  {
    path: 's47089',   
   canActivate:[ActiveGuard],  
    component: S47089Page,
  },
  {
    path: 's47090',   
   canActivate:[ActiveGuard],  
    component: S47090Page,
  },
  {
    path: 's47090t',   
   canActivate:[ActiveGuard],  
    component: S47090tPage,
  },
  {
    path: 's47091',   
   canActivate:[ActiveGuard],  
    component: S47091Page,
  }, 
  {
    path: 's47092',   
   canActivate:[ActiveGuard],  
    component: S47092Page,
  },
  {
    path: 's47093',   
   canActivate:[ActiveGuard],  
    component: S47093Page,
  },
  {
    path: 's47094',   
   canActivate:[ActiveGuard],  
    component: S47094Page,
  }, 
  {
    path: 's47095',   
   canActivate:[ActiveGuard],  
    component: S47095Page,
  },
  {
    path: 's47096',   
   canActivate:[ActiveGuard],  
    component: S47096Page,
  }, 
  {
    path: 's47097',   
   canActivate:[ActiveGuard],  
    component: S47097Page,
  },
  {
    path: 's47098',   
   canActivate:[ActiveGuard],  
    component: S47098Page,
  },
  {
    path: 's47099',   
   canActivate:[ActiveGuard],  
    component: S47099Page,
  },
  {
    path: 's47099t',   
   canActivate:[ActiveGuard],  
    component: S47099tPage,
  }, 
  {
    path: 's47100',   
   canActivate:[ActiveGuard],  
    component: S47100Page,
  },
  {
    path: 's47101',   
   canActivate:[ActiveGuard],  
    component: S47101Page,
  },
  {
    path: 's47102',   
   canActivate:[ActiveGuard],  
    component: S47102Page,
  },
  {
    path: 's47103',   
   canActivate:[ActiveGuard],  
    component: S47103Page,
  }, 
  {
    path: 's47104',   
   canActivate:[ActiveGuard],  
    component: S47104Page,
  }, 
  {
    path: 's47105',   
   canActivate:[ActiveGuard],  
    component: S47105Page,
  },
  {
    path: 's47105t',   
   canActivate:[ActiveGuard],  
    component: S47105tPage,
  },
  {
    path: 's47106',   
   canActivate:[ActiveGuard],  
    component: S47106Page,
  },  
  {
    path: 's47107',   
   canActivate:[ActiveGuard],  
    component: S47107Page,
  },  
  {
    path: 's47108',   
   canActivate:[ActiveGuard],  
    component: S47108Page,
  },
  {
    path: 's47109',   
   canActivate:[ActiveGuard],  
    component: S47109Page,
  },
  
  {
    path: 's47110',   
   canActivate:[ActiveGuard],  
    component: S47110Page,
  },
  {
    path: 's47111',   
   canActivate:[ActiveGuard],  
    component: S47111Page,
  },
  {
    path: 's47112',   
   canActivate:[ActiveGuard],  
    component: S47112Page,
  },
  {
    path: 's47113',   
   canActivate:[ActiveGuard],  
    component: S47113Page,
  },
  {
    path: 's47114',   
   canActivate:[ActiveGuard],  
    component: S47114Page,
  },  
  {
    path: 's47115',   
   canActivate:[ActiveGuard],  
    component: S47115Page,
  },
  {
    path: 's47116',   
   canActivate:[ActiveGuard],  
    component: S47116Page,
  }, 
  {
    path: 's47117',   
   canActivate:[ActiveGuard],  
    component: S47117Page,
  },
  {
    path: 's47118',   
   canActivate:[ActiveGuard],  
    component: S47118Page,
  },
  {
    path: 's47119',   
   canActivate:[ActiveGuard],  
    component: S47119Page,
  }, 
  {
    path: 's47120',   
   canActivate:[ActiveGuard],  
    component: S47120Page,
  },
  {
    path: 's47121',   
   canActivate:[ActiveGuard],  
    component: S47121Page,
  },  
  {
    path: 's47122',   
   canActivate:[ActiveGuard],  
    component: S47122Page,
  }, 
  {
    path: 's47123',   
   canActivate:[ActiveGuard],  
    component: S47123Page,
  },
  {
    path: 's47124',   
   canActivate:[ActiveGuard],  
    component: S47124Page,
  }, 
  {
    path: 's47125',   
   canActivate:[ActiveGuard],  
    component: S47125Page,
  }, 
  {
    path: 's47126',   
   canActivate:[ActiveGuard],  
    component: S47126Page,
  },
  {
    path: 's47127',   
   canActivate:[ActiveGuard],  
    component: S47127Page,
  },
  {
    path: 's47128',   
   canActivate:[ActiveGuard],  
    component: S47128Page,
  }, 
  {
    path: 's47129',   
   canActivate:[ActiveGuard],  
    component: S47129Page,
  },
  {
    path: 's47130',   
   canActivate:[ActiveGuard],  
    component: S47130Page,
  },
  {
    path: 's47131',   
   canActivate:[ActiveGuard],  
    component: S47131Page,
  },
  {
    path: 's47132',   
   canActivate:[ActiveGuard],  
    component: S47132Page,
  },
  {
    path: 's47133',   
   canActivate:[ActiveGuard],  
    component: S47133Page,
  },
  {
    path: 's47133t',   
   canActivate:[ActiveGuard],  
    component: S47133tPage,
  }, 
  {
    path: 's47134',   
   canActivate:[ActiveGuard],  
    component: S47134Page,
  },  
  {
    path: 's47135',   
   canActivate:[ActiveGuard],  
    component: S47135Page,
  },
  {
    path: 's47135t',   
   canActivate:[ActiveGuard],  
    component: S47135tPage,
  },
  {
    path: 's47136',   
   canActivate:[ActiveGuard],  
    component: S47136Page,
  },
  {
    path: 's47137',   
   canActivate:[ActiveGuard],  
    component: S47137Page,
  },
  {
    path: 's47138',   
   canActivate:[ActiveGuard],  
    component: S47138Page,
  },  
  {
    path: 's47139',   
   canActivate:[ActiveGuard],  
    component: S47139Page,
  },
  {
    path: 's47139t',   
   canActivate:[ActiveGuard],  
    component: S47139tPage,
  },
  {
    path: 's47140',   
   canActivate:[ActiveGuard],  
    component: S47140Page,
  }, 
  {
    path: 's47141',   
   canActivate:[ActiveGuard],  
    component: S47141Page,
  },
  {
    path: 's47142',   
   canActivate:[ActiveGuard],  
    component: S47142Page,
  },
  {
    path: 's47142t',   
   canActivate:[ActiveGuard],  
    component: S47142tPage,
  },
  {
    path: 's47143',   
   canActivate:[ActiveGuard],  
    component: S47143Page,
  },  
  {
    path: 's47144',   
   canActivate:[ActiveGuard],  
    component: S47144Page,
  },
  {
    path: 's47144t',   
   canActivate:[ActiveGuard],  
    component: S47144tPage,
  },
  {
    path: 's47145',   
   canActivate:[ActiveGuard],  
    component: S47145Page,
  },
  {
    path: 's47146',   
   canActivate:[ActiveGuard],  
    component: S47146Page,
  }, 
  {
    path: 's47147',   
   canActivate:[ActiveGuard],  
    component: S47147Page,
  },
  {
    path: 's47147t',   
   canActivate:[ActiveGuard],  
    component: S47147tPage,
  },
  {
    path: 's47148',   
   canActivate:[ActiveGuard],  
    component: S47148Page,
  },  
  {
    path: 's47149',   
   canActivate:[ActiveGuard],  
    component: S47149Page,
  },  
  {
    path: 's47150',   
   canActivate:[ActiveGuard],  
    component: S47150Page,
  },
  {
    path: 's47151',   
   canActivate:[ActiveGuard],  
    component: S47151Page,
  },
  {
    path: 's47152',   
   canActivate:[ActiveGuard],  
    component: S47152Page,
  },
  {
    path: 's47153',   
   canActivate:[ActiveGuard],  
    component: S47153Page,
  },
  {
    path: 's47154',   
   canActivate:[ActiveGuard],  
    component: S47154Page,
  }, 
  {
    path: 's47155',   
   canActivate:[ActiveGuard],  
    component: S47155Page,
  },
  {
    path: 's47156',   
   canActivate:[ActiveGuard],  
    component: S47156Page,
  }, 
  {
    path: 's47157',   
   canActivate:[ActiveGuard],  
    component: S47157Page,
  }, 
  {
    path: 's47158',   
   canActivate:[ActiveGuard],  
    component: S47158Page,
  },
  {
    path: 's47159',   
   canActivate:[ActiveGuard],  
    component: S47159Page,
  }, 
  {
    path: 's47160',   
   canActivate:[ActiveGuard],  
    component: S47160Page,
  },
  {
    path: 's47161',   
   canActivate:[ActiveGuard],  
    component: S47161Page,
  }, 
  {
    path: 's47162',   
   canActivate:[ActiveGuard],  
    component: S47162Page,
  },
  {
    path: 's47163',   
   canActivate:[ActiveGuard],  
    component: S47163Page,
  },
  {
    path: 's47164',   
   canActivate:[ActiveGuard],  
    component: S47164Page,
  },
  {
    path: 's47165',   
   canActivate:[ActiveGuard],  
    component: S47165Page,
  },
  {
    path: 's47166',   
   canActivate:[ActiveGuard],  
    component: S47166Page,
  }, 
  {
    path: 's47167',   
   canActivate:[ActiveGuard],  
    component: S47167Page,
  },  
  {
    path: 's47168',   
   canActivate:[ActiveGuard],  
    component: S47168Page,
  },
  {
    path: 's47169',   
   canActivate:[ActiveGuard],  
    component: S47169Page,
  },
  {
    path: 's47170',   
   canActivate:[ActiveGuard],  
    component: S47170Page,
  }, 
  {
    path: 's47171',   
   canActivate:[ActiveGuard],  
    component: S47171Page,
  },
  {
    path: 's47172',   
   canActivate:[ActiveGuard],  
    component: S47172Page,
  }, 
  {
    path: 's47173',   
   canActivate:[ActiveGuard],  
    component: S47173Page,
  }, 
  {
    path: 's47174',   
   canActivate:[ActiveGuard],  
    component: S47174Page,
  },
  {
    path: 's47174t',   
   canActivate:[ActiveGuard],  
    component: S47174tPage,
  },  
  {
    path: 's47175',   
   canActivate:[ActiveGuard],  
    component: S47175Page,
  },  
  {
    path: 's47176',   
   canActivate:[ActiveGuard],  
    component: S47176Page,
  },
  {
    path: 's47177',   
   canActivate:[ActiveGuard],  
    component: S47177Page,
  },
  {
    path: 's47178',   
   canActivate:[ActiveGuard],  
    component: S47178Page,
  },  
  {
    path: 's47179',   
   canActivate:[ActiveGuard],  
    component: S47179Page,
  },
  {
    path: 's47179t',   
   canActivate:[ActiveGuard],  
    component: S47179tPage,
  },
  {
    path: 's47180',   
   canActivate:[ActiveGuard],  
    component: S47180Page,
  },
  {
    path: 's47181',   
   canActivate:[ActiveGuard],  
    component: S47181Page,
  },  
  {
    path: 's47182',   
   canActivate:[ActiveGuard],  
    component: S47182Page,
  },
  {
    path: 's47183',   
   canActivate:[ActiveGuard],  
    component: S47183Page,
  },
  {
    path: 's47184',   
   canActivate:[ActiveGuard],  
    component: S47184Page,
  },
  {
    path: 's47185',   
   canActivate:[ActiveGuard],  
    component: S47185Page,
  },
  {
    path: 's47186',   
   canActivate:[ActiveGuard],  
    component: S47186Page,
  },  
  {
    path: 's47187',   
   canActivate:[ActiveGuard],  
    component: S47187Page,
  },
  {
    path: 's47188',   
   canActivate:[ActiveGuard],  
    component: S47188Page,
  },
  {
    path: 's47188t',   
   canActivate:[ActiveGuard],  
    component: S47188tPage,
  },
  {
    path: 's47189',   
   canActivate:[ActiveGuard],  
    component: S47189Page,
  }, 
  {
    path: 's47190',   
   canActivate:[ActiveGuard],  
    component: S47190Page,
  },
  {
    path: 's47191',   
   canActivate:[ActiveGuard],  
    component: S47191Page,
  },
  {
    path: 's47192',   
   canActivate:[ActiveGuard],  
    component: S47192Page,
  },  
  {
    path: 's47193',   
   canActivate:[ActiveGuard],  
    component: S47193Page,
  },
  {
    path: 's47194',   
   canActivate:[ActiveGuard],  
    component: S47194Page,
  }, 
  {
    path: 's47195',   
   canActivate:[ActiveGuard],  
    component: S47195Page,
  },  
  {
    path: 's47196',   
   canActivate:[ActiveGuard],  
    component: S47196Page,
  },
  {
    path: 's47197',   
   canActivate:[ActiveGuard],  
    component: S47197Page,
  },  
  {
    path: 's47198',   
   canActivate:[ActiveGuard],  
    component: S47198Page,
  },
  {
    path: 's47199',   
   canActivate:[ActiveGuard],  
    component: S47199Page,
  },
  {
    path: 's47200',   
   canActivate:[ActiveGuard],  
    component: S47200Page,
  }, 
  {
    path: 's47201',   
   canActivate:[ActiveGuard],  
    component: S47201Page,
  },
  {
    path: 's47202',   
   canActivate:[ActiveGuard],  
    component: S47202Page,
  },
  {
    path: 's47202t',   
   canActivate:[ActiveGuard],  
    component: S47202tPage,
  },
  {
    path: 's47203',   
   canActivate:[ActiveGuard],  
    component: S47203Page,
  },
  {
    path: 's47204',   
   canActivate:[ActiveGuard],  
    component: S47204Page,
  },
  {
    path: 's47204t',   
   canActivate:[ActiveGuard],  
    component: S47204tPage,
  },
  {
    path: 's47205',   
   canActivate:[ActiveGuard],  
    component: S47205Page,
  },
  {
    path: 's47206',   
   canActivate:[ActiveGuard],  
    component: S47206Page,
  },
  {
    path: 's47207',   
   canActivate:[ActiveGuard],  
    component: S47207Page,
  }, 
  {
    path: 's47208',   
   canActivate:[ActiveGuard],  
    component: S47208Page,
  },
  {
    path: 's47209',   
   canActivate:[ActiveGuard],  
    component: S47209Page,
  },
  {
    path: 's47210',   
   canActivate:[ActiveGuard],  
    component: S47210Page,
  }, 
  {
    path: 's47211',   
   canActivate:[ActiveGuard],  
    component: S47211Page,
  },
  {
    path: 's47212',   
   canActivate:[ActiveGuard],  
    component: S47212Page,
  },
  {
    path: 's47213',   
   canActivate:[ActiveGuard],  
    component: S47213Page,
  }, 
  {
    path: 's47214',   
   canActivate:[ActiveGuard],  
    component: S47214Page,
  },  
  {
    path: 's47215',   
   canActivate:[ActiveGuard],  
    component: S47215Page,
  },
  {
    path: 's47216',   
   canActivate:[ActiveGuard],  
    component: S47216Page,
  }, 
  {
    path: 's47217',   
   canActivate:[ActiveGuard],  
    component: S47217Page,
  },
  {
    path: 's47218',   
   canActivate:[ActiveGuard],  
    component: S47218Page,
  },  
  {
    path: 's47219',   
   canActivate:[ActiveGuard],  
    component: S47219Page,
  },  
  {
    path: 's47220',   
   canActivate:[ActiveGuard],  
    component: S47220Page,
  },
  {
    path: 's47221',   
   canActivate:[ActiveGuard],  
    component: S47221Page,
  },
  {
    path: 's47222',   
   canActivate:[ActiveGuard],  
    component: S47222Page,
  },
  {
    path: 's47222t',   
   canActivate:[ActiveGuard],  
    component: S47222tPage,
  },
  {
    path: 's47223',   
   canActivate:[ActiveGuard],  
    component: S47223Page,
  },
  {
    path: 's47224',   
   canActivate:[ActiveGuard],  
    component: S47224Page,
  },
  {
    path: 's47225',   
   canActivate:[ActiveGuard],  
    component: S47225Page,
  }, 
  {
    path: 's47226',   
   canActivate:[ActiveGuard],  
    component: S47226Page,
  }, 
  {
    path: 's47227',   
   canActivate:[ActiveGuard],  
    component: S47227Page,
  },
  {
    path: 's47228',   
   canActivate:[ActiveGuard],  
    component: S47228Page,
  },  
  {
    path: 's47229',   
   canActivate:[ActiveGuard],  
    component: S47229Page,
  },
  {
    path: 's47229t',   
   canActivate:[ActiveGuard],  
    component: S47229tPage,
  },
  {
    path: 's47230',   
   canActivate:[ActiveGuard],  
    component: S47230Page,
  },
  {
    path: 's47231',   
   canActivate:[ActiveGuard],  
    component: S47231Page,
  },
  {
    path: 's47231t',   
   canActivate:[ActiveGuard],  
    component: S47231tPage,
  },
  {
    path: 's47232',   
   canActivate:[ActiveGuard],  
    component: S47232Page,
  }, 
  {
    path: 's47233',   
   canActivate:[ActiveGuard],  
    component: S47233Page,
  }, 
  {
    path: 's47234',   
   canActivate:[ActiveGuard],  
    component: S47234Page,
  },  
  {
    path: 's47235',   
   canActivate:[ActiveGuard],  
    component: S47235Page,
  },
  {
    path: 's47236',   
   canActivate:[ActiveGuard],  
    component: S47236Page,
  },
  {
    path: 's47237',   
   canActivate:[ActiveGuard],  
    component: S47237Page,
  },
  {
    path: 's47238',   
   canActivate:[ActiveGuard],  
    component: S47238Page,
  },
  {
    path: 's47239',   
   canActivate:[ActiveGuard],  
    component: S47239Page,
  },
  {
    path: 's47240',   
   canActivate:[ActiveGuard],  
    component: S47240Page,
  },
  {
    path: 's47241',   
   canActivate:[ActiveGuard],  
    component: S47241Page,
  },
  {
    path: 's47242',   
   canActivate:[ActiveGuard],  
    component: S47242Page,
  },
  {
    path: 's47243',   
   canActivate:[ActiveGuard],  
    component: S47243Page,
  },
  {
    path: 's47244',   
   canActivate:[ActiveGuard],  
    component: S47244Page,
  },
  {
    path: 's47245',   
   canActivate:[ActiveGuard],  
    component: S47245Page,
  },
  {
    path: 's47246',   
   canActivate:[ActiveGuard],  
    component: S47246Page,
  },
  {
    path: 's47247',   
   canActivate:[ActiveGuard],  
    component: S47247Page,
  },
  {
    path: 's47247t',   
   canActivate:[ActiveGuard],  
    component: S47247tPage,
  },
  {
    path: 's47248',   
   canActivate:[ActiveGuard],  
    component: S47248Page,
  },
  {
    path: 's47249',   
   canActivate:[ActiveGuard],  
    component: S47249Page,
  },
  {
    path: 's47249t',   
   canActivate:[ActiveGuard],  
    component: S47249tPage,
  },
  {
    path: 's47250',   
   canActivate:[ActiveGuard],  
    component: S47250Page,
  },
  {
    path: 's47251',   
   canActivate:[ActiveGuard],  
    component: S47251Page,
  },
  {
    path: 's47252',   
   canActivate:[ActiveGuard],  
    component: S47252Page,
  },
  {
    path: 's47253',   
   canActivate:[ActiveGuard],  
    component: S47253Page,
  },
  {
    path: 's47254',   
   canActivate:[ActiveGuard],  
    component: S47254Page,
  },
  {
    path: 's47255',   
   canActivate:[ActiveGuard],  
    component: S47255Page,
  },
  {
    path: 's47256',   
   canActivate:[ActiveGuard],  
    component: S47256Page,
  },
  {
    path: 's47257',   
   canActivate:[ActiveGuard],  
    component: S47257Page,
  },
  {
    path: 's47258',   
   canActivate:[ActiveGuard],  
    component: S47258Page,
  },
  {
    path: 's47258t',   
   canActivate:[ActiveGuard],  
    component: S47258tPage,
  },
  {
    path: 's47259',   
   canActivate:[ActiveGuard],  
    component: S47259Page,
  },
  {
    path: 's47260',   
   canActivate:[ActiveGuard],  
    component: S47260Page,
  },
  {
    path: 's47261',   
   canActivate:[ActiveGuard],  
    component: S47261Page,
  },
  {
    path: 's47261t',   
   canActivate:[ActiveGuard],  
    component: S47261tPage,
  },
  {
    path: 's47262',   
   canActivate:[ActiveGuard],  
    component: S47262Page,
  },
  {
    path: 's47263',   
   canActivate:[ActiveGuard],  
    component: S47263Page,
  },
  {
    path: 's47264',   
   canActivate:[ActiveGuard],  
    component: S47264Page,
  },
  {
    path: 's47264t',   
   canActivate:[ActiveGuard],  
    component: S47264tPage,
  },
  {
    path: 's47265',   
   canActivate:[ActiveGuard],  
    component: S47265Page,
  },
  {
    path: 's47266',   
   canActivate:[ActiveGuard],  
    component: S47266Page,
  },
  {
    path: 's47267',   
   canActivate:[ActiveGuard],  
    component: S47267Page,
  },
  {
    path: 's47267t',   
   canActivate:[ActiveGuard],  
    component: S47267tPage,
  },
  {
    path: 's47268',   
   canActivate:[ActiveGuard],  
    component: S47268Page,
  },  
  {
    path: 's47269',   
   canActivate:[ActiveGuard],  
    component: S47269Page,
  },
  {
    path: 's47270',   
   canActivate:[ActiveGuard],  
    component: S47270Page,
  },
  {
    path: 's47271',   
   canActivate:[ActiveGuard],  
    component: S47271Page,
  },
  {
    path: 's47272',   
   canActivate:[ActiveGuard],  
    component: S47272Page,
  },
  {
    path: 's47273',   
   canActivate:[ActiveGuard],  
    component: S47273Page,
  },
  {
    path: 's47274',   
   canActivate:[ActiveGuard],  
    component: S47274Page,
  },
  {
    path: 's47275',   
   canActivate:[ActiveGuard],  
    component: S47275Page,
  },
  {
    path: 's47276',   
   canActivate:[ActiveGuard],  
    component: S47276Page,
  },
  {
    path: 's47277',   
   canActivate:[ActiveGuard],  
    component: S47277Page,
  },
  {
    path: 's47278',   
   canActivate:[ActiveGuard],  
    component: S47278Page,
  },
  {
    path: 's47279',   
   canActivate:[ActiveGuard],  
    component: S47279Page,
  },  
  {
    path: 's47279t',   
   canActivate:[ActiveGuard],  
    component: S47279tPage,
  },
  {
    path: 's47280',   
   canActivate:[ActiveGuard],  
    component: S47280Page,
  },
  {
    path: 's47281',   
   canActivate:[ActiveGuard],  
    component: S47281Page,
  },
  {
    path: 's47282',   
   canActivate:[ActiveGuard],  
    component: S47282Page,
  },
  {
    path: 's47283',   
   canActivate:[ActiveGuard],  
    component: S47283Page,
  },
  {
    path: 's47284',   
   canActivate:[ActiveGuard],  
    component: S47284Page,
  },
  {
    path: 's47285',   
   canActivate:[ActiveGuard],  
    component: S47285Page,
  },
  {
    path: 's47286',   
   canActivate:[ActiveGuard],  
    component: S47286Page,
  },
  {
    path: 's47287',   
   canActivate:[ActiveGuard],  
    component: S47287Page,
  },
  {
    path: 's47288',   
   canActivate:[ActiveGuard],  
    component: S47288Page,
  },
  {
    path: 's47289',   
   canActivate:[ActiveGuard],  
    component: S47289Page,
  },  
  {
    path: 's47290',   
   canActivate:[ActiveGuard],  
    component: S47290Page,
  },
  {
    path: 's47291',   
   canActivate:[ActiveGuard],  
    component: S47291Page,
  },
  {
    path: 's47292',   
   canActivate:[ActiveGuard],  
    component: S47292Page,
  },
  {
    path: 's47293',   
   canActivate:[ActiveGuard],  
    component: S47293Page,
  },
  {
    path: 's47294',   
   canActivate:[ActiveGuard],  
    component: S47294Page,
  },
  {
    path: 's47295',   
   canActivate:[ActiveGuard],  
    component: S47295Page,
  },
  {
    path: 's47296',   
   canActivate:[ActiveGuard],  
    component: S47296Page,
  },
  {
    path: 's47297',   
   canActivate:[ActiveGuard],  
    component: S47297Page,
  },
  {
    path: 's47298',   
   canActivate:[ActiveGuard],  
    component: S47298Page,
  },
  {
    path: 's47299',   
   canActivate:[ActiveGuard],  
    component: S47299Page,
  },
  {
    path: 's47299t',   
   canActivate:[ActiveGuard],  
    component: S47299tPage,
  },
  {
    path: 's47300',   
   canActivate:[ActiveGuard],  
    component: S47300Page,
  },
  {
    path: 's47301',   
   canActivate:[ActiveGuard],  
    component: S47301Page,
  },
  {
    path: 's47302',   
   canActivate:[ActiveGuard],  
    component: S47302Page,
  },
  {
    path: 's47303',   
   canActivate:[ActiveGuard],  
    component: S47303Page,
  },
  {
    path: 's47304',   
   canActivate:[ActiveGuard],  
    component: S47304Page,
  },
  {
    path: 's47305',   
   canActivate:[ActiveGuard],  
    component: S47305Page,
  },
  {
    path: 's47306',   
   canActivate:[ActiveGuard],  
    component: S47306Page,
  },
  {
    path: 's47307',   
   canActivate:[ActiveGuard],  
    component: S47307Page,
  },
  {
    path: 's47308',   
   canActivate:[ActiveGuard],  
    component: S47308Page,
  },
  {
    path: 's47309',   
   canActivate:[ActiveGuard],  
    component: S47309Page,
  },
  {
    path: 's47310',   
   canActivate:[ActiveGuard],  
    component: S47310Page,
  },
  {
    path: 's47311',   
   canActivate:[ActiveGuard],  
    component: S47311Page,
  },
  {
    path: 's47312',   
   canActivate:[ActiveGuard],  
    component: S47312Page,
  },
  {
    path: 's47313',   
   canActivate:[ActiveGuard],  
    component: S47313Page,
  },
  {
    path: 's47314',   
   canActivate:[ActiveGuard],  
    component: S47314Page,
  },
  {
    path: 's47315',   
   canActivate:[ActiveGuard],  
    component: S47315Page,
  },
  {
    path: 's47316',   
   canActivate:[ActiveGuard],  
    component: S47316Page,
  },
  {
    path: 's47317',   
   canActivate:[ActiveGuard],  
    component: S47317Page,
  },
  {
    path: 's47318',   
   canActivate:[ActiveGuard],  
    component: S47318Page,
  },
  {
    path: 's47319',   
   canActivate:[ActiveGuard],  
    component: S47319Page,
  },
  {
    path: 's47320',   
   canActivate:[ActiveGuard],  
    component: S47320Page,
  },
  {
    path: 's47320t',   
   canActivate:[ActiveGuard],  
    component: S47320tPage,
  },
  {
    path: 's47321',   
   canActivate:[ActiveGuard],  
    component: S47321Page,
  },
  {
    path: 's47322',   
   canActivate:[ActiveGuard],  
    component: S47322Page,
  },
  {
    path: 's47323',   
   canActivate:[ActiveGuard],  
    component: S47323Page,
  },
  {
    path: 's47324',   
   canActivate:[ActiveGuard],  
    component: S47324Page,
  },
  {
    path: 's47325',   
   canActivate:[ActiveGuard],  
    component: S47325Page,
  },
  {
    path: 's47326',   
   canActivate:[ActiveGuard],  
    component: S47326Page,
  },
  {
    path: 's47327',   
   canActivate:[ActiveGuard],  
    component: S47327Page,
  },
  {
    path: 's47328',   
   canActivate:[ActiveGuard],  
    component: S47328Page,
  },
  {
    path: 's47328t',   
   canActivate:[ActiveGuard],  
    component: S47328tPage,
  },
  {
    path: 's47329',   
   canActivate:[ActiveGuard],  
    component: S47329Page,
  },
  {
    path: 's47330',   
   canActivate:[ActiveGuard],  
    component: S47330Page,
  },
  {
    path: 's47331',   
   canActivate:[ActiveGuard],  
    component: S47331Page,
  },
  {
    path: 's47332',   
   canActivate:[ActiveGuard],  
    component: S47332Page,
  },
  {
    path: 's47333',   
   canActivate:[ActiveGuard],  
    component: S47333Page,
  },
  {
    path: 's47334',   
   canActivate:[ActiveGuard],  
    component: S47334Page,
  },
  {
    path: 's47335',   
   canActivate:[ActiveGuard],  
    component: S47335Page,
  },
  {
    path: 's47336',   
   canActivate:[ActiveGuard],  
    component: S47336Page,
  },
  {
    path: 's47337',   
   canActivate:[ActiveGuard],  
    component: S47337Page,
  },
  {
    path: 's47338',   
   canActivate:[ActiveGuard],  
    component: S47338Page,
  },
  {
    path: 's47339',   
   canActivate:[ActiveGuard],  
    component: S47339Page,
  },
  {
    path: 's47340',   
   canActivate:[ActiveGuard],  
    component: S47340Page,
  },
  {
    path: 's47341',   
   canActivate:[ActiveGuard],  
    component: S47341Page,
  },
  {
    path: 's47342',   
   canActivate:[ActiveGuard],  
    component: S47342Page,
  },
  {
    path: 's47343',   
   canActivate:[ActiveGuard],  
    component: S47343Page,
  },
  {
    path: 's47344',   
   canActivate:[ActiveGuard],  
    component: S47344Page,
  },
  {
    path: 's47345',   
   canActivate:[ActiveGuard],  
    component: S47345Page,
  },
  {
    path: 's47346',   
   canActivate:[ActiveGuard],  
    component: S47346Page,
  },
  {
    path: 's47347',   
   canActivate:[ActiveGuard],  
    component: S47347Page,
  },
  {
    path: 's47348',   
   canActivate:[ActiveGuard],  
    component: S47348Page,
  },
  {
    path: 's47349',   
   canActivate:[ActiveGuard],  
    component: S47349Page,
  },
  {
    path: 's47350',   
   canActivate:[ActiveGuard],  
    component: S47350Page,
  },
  {
    path: 's47351',   
   canActivate:[ActiveGuard],  
    component: S47351Page,
  },
  {
    path: 's47352',   
   canActivate:[ActiveGuard],  
    component: S47352Page,
  },
  {
    path: 's47353',   
   canActivate:[ActiveGuard],  
    component: S47353Page,
  },
  {
    path: 's47354',   
   canActivate:[ActiveGuard],  
    component: S47354Page,
  },
  {
    path: 's47355',   
   canActivate:[ActiveGuard],  
    component: S47355Page,
  },
  {
    path: 's47356',   
   canActivate:[ActiveGuard],  
    component: S47356Page,
  },
  {
    path: 's47357',   
   canActivate:[ActiveGuard],  
    component: S47357Page,
  },
  {
    path: 's47358',   
   canActivate:[ActiveGuard],  
    component: S47358Page,
  },
  {
    path: 's47358t',   
   canActivate:[ActiveGuard],  
    component: S47358tPage,
  },
  {
    path: 's47359',   
   canActivate:[ActiveGuard],  
    component: S47359Page,
  },
  {
    path: 's47360',   
   canActivate:[ActiveGuard],  
    component: S47360Page,
  },
  {
    path: 's47361',   
   canActivate:[ActiveGuard],  
    component: S47361Page,
  },
  {
    path: 's47362',   
   canActivate:[ActiveGuard],  
    component: S47362Page,
  },
  {
    path: 's47363',   
   canActivate:[ActiveGuard],  
    component: S47363Page,
  },
  {
    path: 's47364',   
   canActivate:[ActiveGuard],  
    component: S47364Page,
  },
  {
    path: 's47365',   
   canActivate:[ActiveGuard],  
    component: S47365Page,
  },
  {
    path: 's47366',   
   canActivate:[ActiveGuard],  
    component: S47366Page,
  },
  {
    path: 's47367',   
   canActivate:[ActiveGuard],  
    component: S47367Page,
  },
  {
    path: 's47368',   
   canActivate:[ActiveGuard],  
    component: S47368Page,
  },
  {
    path: 's47369',   
   canActivate:[ActiveGuard],  
    component: S47369Page,
  }, 
  {
    path: 's47370',   
   canActivate:[ActiveGuard],  
    component: S47370Page,
  },
  {
    path: 's47370p1',   
   canActivate:[ActiveGuard],  
    component: S47370p1Page,
  },
  {
    path: 's47370p2',   
   canActivate:[ActiveGuard],  
    component: S47370p2Page,
  },
  {
    path: 's47370p3',   
   canActivate:[ActiveGuard],  
    component: S47370p3Page,
  },
  {
    path: 's47371',   
   canActivate:[ActiveGuard],  
    component: S47371Page,
  },   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshipsRoutingModule { }
