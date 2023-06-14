for(var a = 0; a < document.querySelectorAll("td:empty").length; a++)
    {
        document.querySelectorAll("td:empty")[a].style.backgroundColor="rgb(11, 10, 73)";
    }


var tab_all = [];
for(var i = 1; i <= 64; i++)
{
    tab_all.push(i);
}

var tab_A = [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19, 20, 25, 26, 27, 28, 33, 34, 35, 36, 41, 42, 43, 44, 49, 50, 51, 52, 57, 58, 59, 60];
var tab_B = [1, 2, 3, 4, 9, 10, 11, 12, 17, 18, 19, 20, 25, 26, 27, 28, 37, 38, 39, 40, 45, 46, 47, 48, 53, 54, 55, 56, 61, 62, 63, 64];
var tab_C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
var tab_D = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 33, 34, 37, 38, 41, 42, 45, 46, 49, 50, 53, 54, 57, 58, 61, 62];
var tab_E = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63];
var tab_F = [1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 20, 21, 22, 23, 24, 33, 34, 35, 36, 37, 38, 39, 40, 49, 50, 51, 52, 53, 54, 55, 56];
var s_quest = [];
var repet = 0;

s_quest = tab_all;

var clicBtnYes = false;
var clicBtnNo = false;

var clic_1 = false;
var clic_2 = false;
var clic_3 = false;
var clic_4 = false;
var clic_5 = false;
var clic_6 = false;

var tableaux = [".table_A", ".table_B", ".table_C", ".table_D", ".table_E", ".table_F"];

var btnYes = document.querySelectorAll(".yes");
var btnNo = document.querySelectorAll(".no");

document.getElementById("btn1-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_A);
    clic_1 = true;
    clic_2 = false;
    clic_3 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn1-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_A);
    clic_1 = true;
    clic_2 = false;
    clic_3 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn2-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_B);
    clic_2 = true;
    clic_1 = false;
    clic_3 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn2-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_B);
    clic_2 = true;
    clic_1 = false;
    clic_3 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn3-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_C);
    clic_3 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn3-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_C);
    clic_3 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn4-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_D);
    clic_4 = true;
    clic_1 = false;
    clic_2 = false;
    clic_3 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn4-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_D);
    clic_4 = true;
    clic_1 = false;
    clic_2 = false;
    clic_3 = false;
    clic_5 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn5-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_E);
    clic_5 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_3 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn5-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_E);
    clic_5 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_3 = false;
    clic_6 = false;
    condition_true();
});

document.getElementById("btn6-yes").addEventListener("click", function()
{
    clicBtnYes = true;
    clicBtnNo = false;
    clicBtn_f(tab_F);
    clic_6 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_5 = false;
    clic_3 = false;
    condition_true();
});

document.getElementById("btn6-no").addEventListener("click", function()
{
    clicBtnNo = true;
    clicBtnYes = false;
    clicBtn_f(tab_F);
    clic_6 = true;
    clic_1 = false;
    clic_2 = false;
    clic_4 = false;
    clic_5 = false;
    clic_3 = false;
    condition_true();
});


function clicBtn_f(tab)
    {
        if(clicBtnYes)
        {
            s_quest = s_quest.filter(function(element) {
                return tab.includes(element);
        })}
        else if (clicBtnNo)
        {
            s_quest = s_quest.filter(function(element) {
                return !tab.includes(element);
        })};
        repet++;

        if(repet == 6)
        {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            for(var e = 0; e < s_quest.length; e++)
            {
                 resultDiv.innerHTML += s_quest[e] + "<br>";
            }
            // document.querySelector("body").style.display="none"
            repet = 0;
            s_quest = tab_all;
        }
};


function animation(className, nameClass) {
    setTimeout(function() {
      document.querySelector("." + className).style.opacity = "0";
    }, 500);
  
    setTimeout(function() {
      document.querySelector("." + className).style.display = "none";
    }, 1000);
    setTimeout(function() {
        document.querySelector(".spinner_all").style.display = "flex";
      }, 1000);
  
    setTimeout(function() {
      document.querySelector(".spinner_all").style.display = "none";
    }, 3000);

    setTimeout(function() {
        document.querySelector("." + nameClass).style.display = "flex";
      }, 3000);
  
    setTimeout(function() {
      document.querySelector("." + nameClass).style.opacity = "1";
    }, 3100);
};
  
document.querySelector(".tuto").addEventListener("click", function() {
    animation("table_all", "tutoriel");
});
document.querySelector(".close").addEventListener("click", function() {
    animation("tutoriel", "table_all");
});
document.querySelector(".demarage").addEventListener("click", function() {
    animation_2("table_all", "table_A");
});
document.querySelector(".restart").addEventListener("click", function() {
    animation("resultat", "table_all");
});

function animation_2(className, nameClass) {
    setTimeout(function() {
      document.querySelector("." + className).style.opacity = "0";
    }, 500);
  
    setTimeout(function() {
      document.querySelector("." + className).style.display = "none";
    }, 1000);
    setTimeout(function() {
        document.querySelector(".spinner_all").style.display = "flex";
      }, 1000);
  
    setTimeout(function() {
      document.querySelector(".spinner_all").style.display = "none";
    }, 3000);

    setTimeout(function() {
        document.querySelector("." + nameClass).style.display = "flex";
      }, 3000);
  
    setTimeout(function() {
      document.querySelector("." + nameClass).style.transform = "scale(1)";
    }, 3100);
};

function condition_true(){
    if(clic_1)
    {
        animation_3("table_A", "table_B")
    }
    if(clic_2)
    {
        animation_3("table_B", "table_C")
    }
    if(clic_3)
    {
        animation_3("table_C", "table_D")
    }
    if(clic_4)
    {
        animation_3("table_D", "table_E")
    }
    if(clic_5)
    {
        animation_3("table_E", "table_F")
    }
    if(clic_6)
    {
        animation_4("table_F", "resultat")
    }
};

function animation_3(className, nameClass) {
    setTimeout(function() {
      document.querySelector("." + className).style.transform = "scale(0)";
    }, 500);
  
    setTimeout(function() {
      document.querySelector("." + className).style.display = "none";
    }, 1000);

    setTimeout(function() {
        document.querySelector("." + nameClass).style.display = "flex";
      }, 1000);
  
    setTimeout(function() {
      document.querySelector("." + nameClass).style.transform = "scale(1)";
    }, 1100);
};

function animation_4(className, nameClass) {
    setTimeout(function() {
      document.querySelector("." + className).style.transform = "scale(0)";
    }, 500);
  
    setTimeout(function() {
      document.querySelector("." + className).style.display = "none";
    }, 1000);
    setTimeout(function() {
        document.querySelector(".spinner_all").style.display = "flex";
      }, 1000);
  
    setTimeout(function() {
      document.querySelector(".spinner_all").style.display = "none";
    }, 3000);

    setTimeout(function() {
        document.querySelector("." + nameClass).style.display = "flex";
      }, 3000);
  
    setTimeout(function() {
      document.querySelector("." + nameClass).style.opacity = "1";
    }, 3100);
};








/*document.querySelector(".tuto").addEventListener("click", function() {
    setTimeout(function(){
        document.querySelector(".table_all").style.display = "none";
    }, 1000);
    
    setTimeout(function(){
        document.querySelector(".tutoriel").style.display = "flex";
    }, 2000);
    
});*/




/*function AuClick(className, nameClass)
{
    document.querySelector("." + className).addEventListener("click", function()
    {
        document.querySelector("." + nameClass).style 
    }
    );
};*/

/*for(var b = 0; b < document.querySelectorAll(".btn").length; b++)
{
    document.querySelectorAll(".btn")[b].querySelector(".yes").addEventListener("click", btn_true);
    document.querySelectorAll(".btn")[b].querySelector(".no").addEventListener("click", btn_false);
}*/