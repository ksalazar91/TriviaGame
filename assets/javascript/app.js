
$(document).ready(function(){
    var questions = [{ question: "Who is the Gryffindor Ghost?",
            list:["The Grey Lady", "The Fat Fair","Nearly Headless Nick", "The Bloody Baron"],
            answer: 2,
            image:'<img src="assets/images/1.gif" alt="Nearly Headless Nick"/>'},
        
        { question: "What does Hermione transforms affter taking Polyjuice Potion correctly?",
            list:["Draco Malfoy", "cat", "Dog", "Harry Potter"],
            answer: 3,
            image:'<img src="assets/images/1.gif" alt="Nearly Headless Nick"/>'},
            
        { question:"How many Weasley brothers are there?",
        list:["6", "7", "5", "8"],
        answer: 0,
        image:'<img src="assets/images/1.gif" alt="Nearly Headless Nick"/>'           
    }];

    var time = 10;
    var num = 0;
    var win = 0;
    var loss = 0;
    var t;

    // it will hide the game questions only showing the start button and hogwarst pictrue
    function startDisplay(){
        $(".questions").hide();
    }

    function questionsDisplay(){
        $(".start").hide();
        $(".questions").show();
        $("#images").hide();
        $("#answer").hide();
    }

    function display(){
        questionsDisplay();
        console.log(questions[num]);
        $("#timer").html("<p>Time Reminding: " + time + " seconds</p>");
        $("#questions").html("<p>" + questions[num].question + "</p>");
        $("#one").html(questions[num].list[0]);
        $("#two").html(questions[num].list[1]);
        $("#three").html(questions[num].list[2]);
        $("#four").html(questions[num].list[3]);
    }

    function update(){
        display();
        timer();
    }

    function loops(x){
        $("#images").show();
        $("#answer").show();
        $("#images").html(questions[num].image);
        console.log("Question Number: " + questions[num].answer);
        console.log("User selected: " + x);

        if(x === questions[num].answer){
            clearInterval(t)
            $("#answer").html("<p>Correct</p>")
            $(".questions").hide();
            num++;
            win++;
            setTimeout(update, 5000);

        }
        else{
            clearInterval(t)
            $("#answer").html("<p>No The Correct Answer was: " + questions[num].list[questions[num].answer]+ "</p>")
            $(".questions").hide();
            num++;
            loss++;
            setTimeout(update, 5000);
        }
    }

    function timer(){
        var x = 10;
        t = setInterval(function(){
            $("#timer").html("<p>Time Reminding: " + x + " seconds</p>");
            x--;
            if(x === 0){
                $("#timer").html("<p>Time Reminding: " + x + " seconds</p>");
                clearInterval(t);
                num++;
                setTimeout(display, 5000);
            }
        }, 1000);
    }

    

//---------------------------------------------------------------------------------------

// Start game with     
    startDisplay();

    $("#start").on("click", function(){
        display();
        timer();

        $("#one").on("click", function(){
            var a = 0;
            loops(a);
        });

        $("#two").on("click", function(){
            var a = 1;
            loops(a);
        });

        $("#three").on("click", function(){
            var a = 2;
            loops(a);
        });

        $("#four").on("click", function(){
            var a = 3;
            loops(a);
        });
        
    });


});      
            