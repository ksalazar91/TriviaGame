
$(document).ready(function(){
    var questions = [{ question: "Who is the Gryffindor Ghost?",
            list:["The Grey Lady", "The Fat Fair","Nearly Headless Nick", "The Bloody Baron"],
            answer: 2,
            image:'<img src="assets/images/1.gif" id="image" alt="Nearly Headless Nick"/>'},
        
        { question: "What does Hermione transforms affter taking Polyjuice Potion correctly?",
            list:["Draco Malfoy", "cat", "Dog", "Harry Potter"],
            answer: 3,
            image:'<img src="assets/images/2.gif" id="image" alt="Nearly Headless Nick"/>'},
            
        { question:"How many Weasley brothers are there?",
        list:["6", "7", "5", "8"],
        answer: 0,
        image:'<img src="assets/images/3.png" id="image" alt="Nearly Headless Nick"/>'           
    }];

    var time = 10;
    var num = 0;
    var win = 0;
    var loss = 0;
    var t;
    var count = 0;

    // it will hide the game questions only showing the start button and hogwarst pictrue
    function startDisplay(){
        $(".questions").hide(); 
        $(".restart").hide();
    }

    function questionsDisplay(){
        $(".start").hide();
        $(".questions").show();
        $("#images").hide();
        $("#answer").hide();
        $(".restart").hide();
    }

    function display(){
        questionsDisplay();
        console.log(questions[num]);
        $("#timer").html("<p>Time Reminding: </p>");
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
    
    function results(){
        clearInterval(t)
        $(".questions").hide();
        $("#images").hide();
        $("#answer").hide();
        $("#timer").hide();
        $(".restart").show();
    
       
        if(win > loss){
            $("#h2").text("Congragulations YOU Won");
        } 
        
        else if(win === loss){
            $("#h2").text("YOU Tie");
        }
        else{
            $("#h2").text("Sorry!... YOU Lost");
        }
        
        $("#correct").html("<p> Correct Answers: " + win + "</p>");
        $("#incorrect").html("<p> Correct Answers: " + loss + "</p>");

        $("#restart").on("click", function(){
            display();
            timer();
        });

    }

    function loops(x){
        $("#images").show();
        $("#answer").show();
        $("#images").html(questions[num].image);
        console.log(count);
        console.log(questions.length);

        if(x === questions[num].answer){
            clearInterval(t)
            $("#answer").html("<p>Correct</p>")
            $(".questions").hide();
            num++;
            win++;
            count++;
            setTimeout(update, 5000);

            if(count == questions.length){
                clearInterval(t);              
                setTimeout(results, 5000);
            }

        }
        else{
            clearInterval(t)
            $("#answer").html("<p>No The Correct Answer was: " + questions[num].list[questions[num].answer]+ "</p>")
            $(".questions").hide();
            num++;
            loss++;
            count++;
            setTimeout(update, 5000);

            if(count == questions.length){
                clearInterval(t);              
                setTimeout(results, 5000);
            }
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
                $("#timer").html("<h2>SORRY TIME HAS RUN OUT</h2>");
                $("#answer").html("<p>No The Correct Answer was: " + questions[num].list[questions[num].answer]+ "</p>")
                $("#images").html(questions[num].image);
                $("#answer").show();
                $("#images").show();
                $(".questions").hide();

                num++;
                count++;
                console.log(count);
                 console.log(questions.length);
                setTimeout(update, 5000); 

                if(count === questions.length){
                    clearInterval(t);              
                    setTimeout(results, 5000);
                }
                
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
            