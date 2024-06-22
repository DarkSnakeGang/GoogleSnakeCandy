window.CandyMod = {};

window.CandyMod.runCodeBefore = function () {
    window.PuddingMod.runCodeBefore();
    console.log("Adding Candy Mode");
    candy_icon = "https://i.postimg.cc/rsSFx6gg/candy.png"
    
    window.uiImage = function (src) {
        let img = new Image();
        img.src = src;
        img.classList.add('DqMRee');
        img.classList.add('SsAred'); // Hardcoded, need to figure out what this is and how to make it dynamic or something.
        return img;
    };

    document.querySelector('#trophy').appendChild(uiImage(candy_icon));

    trophy_jsname = document.querySelector('img[src$="trophy_00.png"]').getAttribute("jsname")
    window.trophy_src = `document.querySelector('img[jsname="${trophy_jsname}"]').src `
    deathscreen_trophy_jsname = 'LpoWPe'

}


window.CandyMod.alterSnakeCode = function (code) {
    code = window.PuddingMod.alterSnakeCode(code);
    console.log("Coding Candy Mode into the game");

    window.updateTrophySRC = function updateTrophySRC() {
        eval(window.trophy_src + `= "https://i.postimg.cc/rsSFx6gg/candy.png"`);
    }
    
    deathscreen_trophy = new RegExp(/a.[a-zA-Z0-9_$]{1,2}.src=a.settings.[a-zA-Z0-9_$]{1,2}\);var/)
    ds_trophy = code.match(deathscreen_trophy)[0].split("=")[0]
    deathscreen_trophy_code = `${code.match(deathscreen_trophy)[0].replace("var", "")}
    if(window.CurrentModeNum === 19) {
        ${ds_trophy}="${candy_icon}"
    };
    var
    `
    code = code.assertReplace(deathscreen_trophy, deathscreen_trophy_code);

    reset_regex = new RegExp(/;this\.reset\(\)\}\}/)

    set_on_reset = `;
    if(window.CurrentModeNum === 19) {
        window.updateTrophySRC(); 
    }
    $&`
    code = code.assertReplace(reset_regex, set_on_reset)

    candy_logic = new RegExp(/this\.[a-zA-Z0-9_$]{1,2}\.[a-zA-Z0-9_$]{1,2}\+=2:this\.[a-zA-Z0-9_$]{1,2}\.[a-zA-Z0-9_$]{1,2}\+=1;/)
    snake_length = code.match(candy_logic)[0].split('+')[0]

    candy_logic_set = `$&
    ${snake_length} += Math.floor(Math.random() * 6);
    ;
    `
    code = code.assertReplace(candy_logic, candy_logic_set)

    console.log(code)

    return code;
}


window.CandyMod.runCodeAfter = function () {
    let modIndicator = document.createElement('div');
    modIndicator.style = 'position:absolute;font-family:roboto;color:white;font-size:14px;padding-top:4px;padding-left:30px;user-select: none;';
    modIndicator.textContent = 'Candy Mod';
    let canvasNode = document.getElementsByClassName('jNB0Ic')[0];
    document.getElementsByClassName('EjCLSb')[0].insertBefore(modIndicator, canvasNode);
  };