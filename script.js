$(document).ready(function(){

    // var cards =["fool", "magician", "priestess", "empress", "emperor", "hierophant", "lovers", "chariot", "strength", "hermit", "fortune", "justice", "hanged", "death", "temperance", "devil", "tower", "star", "moon", "sun", "judgement", "world"];

    function card(name, reading, image){
      this.name = name;
      this.reading = reading;
      this.image = image;
    }

    var deck = [
      new card('THE FOOL.',"find a fresh start and a new beginning. A time of innocence, purity and naivity and the freedom that comes with it.", 'fool'),
      new card('THE MAGICIAN.','time for the discovery of the self. A time of awakening of personal power along with some brashness. Your personal magic is here.', 'magician'),
      new card('THE PRIESTESS.', 'there a deep ideas from your unconsious mind. Feelings beyond language. A sense of going with your gut or following your heart. Sometimes you just know.', 'priestess'),
      new card('THE EMPRESS.', 'welcome the deep power of the divine feminine. Creation and new life. Springtime. Deep love. Something you know for sure in your bones.', 'empress'),
      new card('THE EMPEROR.', 'here is masculine power. Order and rules. Strength and courage. Sacrifice for the greater good. Honour and duty.', 'emperor'),
      new card('THE HIEROPHANT.', 'return to traditional old fashioned values. A time for stability and work, respecting the old ways and honouring your elders.', 'hierophant'),
      new card('THE LOVERS.', 'it is time to find yourself through your connections and your community. Choose love.', 'lovers'),
      new card('THE CHARIOT.', 'a progression and moving on. Passing obstacles and getting closer to your goals. Keeping on keeping on.', 'chariot'),
      new card('STRENGTH.', 'face those fears. Get things in proportion. Deal with those tough challenge and set yourself free.', 'strength'),
      new card('THE HERMIT.', "you've got this. The deep strenght that is inside you. Go and meditate and answers will come. Find a place of peace and listen to what you are trying to tell yourself about this situation.", 'hermit'),
      new card('THE WHEEL of FORTUNE.', 'everything changes. There is a time for everything and your time will come. Life is long and sometimes things have to shift so you can see the pattern.', 'fortune'),
      new card('JUSTICE.', 'what goes around comes around. You will get what you deserve. Sooner or later. Actions have consequences.', 'justice'),
      new card('THE HANGED MAN.', 'let it go. Accept what you cannot change. Sometimes you just have to let it be.', 'hanged'),
      new card('DEATH.', 'big changes. What was is gone. This is the new world now. Year zero. A fresh new star. What\'s gone is gone. Life begins again.', 'death'),
      new card('TEMPERANCE', 'a chance to move beyond old ways of being. A chance to let go of old ways of thinking. Habits that held you in their thrall need not do so forever. You can be a better you.', 'temperance'),
      new card('THE DEVIL.', 'somethings will hurt forever. Somethings jsut have to be lived with. We all have our cross to bear.', 'devil'),
      new card('THE TOWER.', 'walls come tumbling down. Here goes nothing. Time to take that leap of faith because. Nothing will ever be the same again.', 'tower'),
      new card('THE STAR.', "there is always hope. There is always a light. Find that hopeful part of you and bear it aloft. What if everything went right?", 'star'),
      new card('THE MOON.', 'dark powers. The unknown and the cast aside. The power that comes from embracing the darkest part of yourself. That part you keep hidden has power too, more than you know.', 'moon'),
      new card('THE SUN.', 'there is a real joy in facing the truth and calling it out into the sun. Life is light. It\'s all jsut a ride. Ride on.', 'sun'),
      new card('JUDGEMENT.', 'you know in your hear what you are here for. Everything you can be. Can you live your best life? Can you leave the world better than you found it?', 'judgement'),
      new card('THE WORLD.', 'there is a plan, a pattern, a path. You are one with the universe and the universe is perfect.', 'world'),
      new card('ACE of CUPS.', 'a turning point or a breakthrough in your emotional life. Realisations about relationships and people in your life.', 'cups01'),
      new card('2 of CUPS.', 'think about the relationships you have with other people. New relationships. New people who turn out to be special.', 'cups02'),
      new card('3 of CUPS.', 'party time. Ways of marking and celebrating the important people in your life. Dancing and eating together.', 'cups03'),
      new card('4 of CUPS.', 'stillness and stunted emotions. Stuck feelings. Relationships that have grown stale and boring. When you just don\'t care.', 'cups04'),
      new card('5 of CUPS.', 'losing someone special. Heartbreak or grief. Coming to terms with a new relationship situation. Finding out what really matters.', 'cups05'),
      new card('6 of CUPS.', 'bad relationships, coercive or controlling dynamics. Inequality and unhealthy power realtionships between people.', 'cups06'),
      new card('7 of CUPS.', 'being overwhelmed by choices. Frozen by indecision. Unable to move forward because you\'re unsure which way to go. Time for a reality check.', 'cups07'),
      new card('8 of CUPS.', 'the moment to step out of your comfort zone and to give up what you have in favour of what you really want. To accept the things you might lose along the way.', 'cups08'),
      new card('9 of CUPS.', 'happiness. The joy of dreams fulfilled. Satisfaction at a job well done. You deserve this.', 'cups09'),
      new card('10 of CUPS.', 'the deep joy of really connecting with another person. The satisfaction of being part of a solid happy community. Finding your place in the world.', 'cups10'),
      new card('PAGE of CUPS.', 'beginning a piece of work that connects to your emotions. Accepting the need to find a way to grow and take care of yourself.', 'cups11'),
      new card('KNIGHT of CUPS.', 'the hard of work of dealing with difficult emotions for the greater good. Delayed gratification. The work that you know has to be done.', 'cups12'),
      new card('QUEEN of CUPS.', 'deeply connecting with you emotional self. Trusting your feelings. Tuning in to what your heart wants to tell you about how you really feel.', 'cups13'),
      new card('KING of CUPS.', 'emotional maturity and stability. Being able to control your feelings and how you show them to others. Calm in the face of an emotional storm.', 'cups14'),
      new card('ACE of SWORDS.', 'a time of sudden mental clairity. The clouds part and you suddenly see the answer. Getting and amazing idea. A euraka moment.', 'swords01'),
      new card('2 of SWORDS.', 'stuck because you can\'t find the answer. waiting for an idea to strike. Writer\'s block. Being stuck mentally.', 'swords02'),
      new card('3 of SWORDS.', 'when you find out you\'ve made a bad choice. Realising you were wrong. Having to face up to a mistake. Getting you heart broken.', 'Swords03'),
      new card('4 of SWORDS.', 'going on a retreat. Space and time to think. Solitude and meditation. Sleep on it.', 'Swords04'),
      new card('5 of SWORDS.', 'realising you need to make a chance. Finding a new path. Doubling back and going a different way.', 'Swords05'),
      new card('6 of SWORDS.', 'trusting yourself. Knowing that deep down you kow what\'s right. Turning your back on things you know aren\'t for you.', 'Swords06'),
      new card('7 of SWORDS.', 'bad choices. Telling yourself things you know aren\'t true. Holding on to untrue beliefs about yourself.', 'Swords07'),
      new card('8 of SWORDS.', 'holding yourself back. Letting fear define you. Failing to realise your potential. Lost power and missed connections.', 'Swords08'),
      new card('9 of SWORDS.', 'anxiety. Bad dreams. A depressed state. That voice inside that tells you that you\'re terrible.', 'Swords09'),
      new card('10 of SWORDS.', 'this is about reaching the end of a bad time. A struggle that is finally over. Here is the light at the end of the tunnel.', 'Swords10'),
      new card('PAGE of SWORDS.', 'the very early stages of a project that is connected to thoughts and the mind. Starting work on that great idea.', 'Swords11'),
      new card('KNIGHT of SWORDS.', 'getting down to work on something based on a big idea or some serious mental work. Learning a new skill.', 'Swords12'),
      new card('QUEEN of SWORDS.', 'thinking about a situation in a measured and complete way. Seeing all points of view and reachng a rational decision.', 'Swords13'),
      new card('KING of SWORDS.', 'finding the answer using mental focus. Solving a problem with measured, careful though. Cleverness.', 'Swords14'),
      new card('ACE of PENTACLES.', 'a sudden and amazing or unexpected breakthough in career or finances. Finding a way to be more secure.', 'Pents01'),
      new card('2 of PENTACLES.', 'juggling responsibilites. Freelancing or multitasking. Having to deal witha  range of financial issues or demands.', 'Pents02'),
      new card('3 of PENTACLES.', 'starting a business. Collaborating on a work project. Finding solidarity at work. Finding your role.', 'Pents03'),
      new card('4 of PENTACLES.', 'being bad with money. Being scared of money. Worries about money. Finacial problems. Late payment.', 'Pents04'),
      new card('5 of PENTACLES.', 'lack of money. Poverty. Losing a job. Struggling to find work. Bad credit. Unexpected bills. Not seeing an opportunity.', 'Pents05'),
      new card('6 of PENTACLES.', 'complications around giving and recieiving money. Pay gaps. Not being paid what you deserve.', 'Pents06'),
      new card('7 of PENTACLES.', 'working on a new skill. Working hard. Forging a new path. Discovering a new skill. Getting better.', 'Pents07'),
      new card('8 of PENTACLES.', 'practice makes perfect. The long training phase. The hours it takes to learn a new skill. Grinding.', 'Pents08'),
      new card('9 of PENTACLES.', 'reaping the rewards of hard work. Feeling like you\'ve earned the things you have.', 'Pents09'),
      new card('10 of PENTACLES.', 'inheriting money. Real finacial security. Property. Owning a home. Feeling grateful for all you have.', 'Pents10'),
      new card('PAGE of PENTACLES.', 'the very early stages of a project that will take a lot of work and may bring material reward. Changing careers.', 'Pents11'),
      new card('KNIGHT of PENTACLES.', 'starting a new job or new career. Taking the first steps on an exciting new project. A dream job.', 'Pents12'),
      new card('QUEEN of PENTACLES.', 'having money and sharing it with people you love. Giving money away. Caring for those around you.', 'Pents13'),
      new card('KING of PENTACLES.', 'serious money. Being the bread winner. Having a lot of finacial responsibilty. Bringing home the bacon.', 'Pents14'),
      new card('ACE of WANDS.', 'a new shiny idea. A bolt of creativity from the blue. That one perfect idea. The solution to the puzzle.', 'Wands01'),
      new card('2 of WANDS.', 'working out what you really need. Taking the time to puzzle it out. Going to therapy.', 'Wands02'),
      new card('3 of WANDS.', 'finding a better way. Letting go of old ideas that no longer serve you. Breaking away from the past.', 'Wands03'),
      new card('4 of WANDS.', 'finding your place in the world. Discovering your people. Finding a group that gives you life.', 'Wands04'),
      new card('5 of WANDS.', 'finding it hard to know where to focus. Overwhelm. A struggle to know where to put your energy.', 'Wands05'),
      new card('6 of WANDS.', 'triump. Knowing yourself. Achieiving something really good. Taking pride in your work. Doing the thing.', 'Wands06'),
      new card('7 of WANDS.', 'having to take care of yourself. Withdrawing from the conflict. Putting your own mask on first.', 'Wands07'),
      new card('8 of WANDS.', 'not knowing. Having to accept uncertainty. Waiting to hear. Sitting with the waiting and managing expectations.', 'Wands08'),
      new card('9 of WANDS.', 'that final push. The last hurdle. The boss battle. The last thing you need to do before you can rest.', 'Wands09'),
      new card('10 of WANDS.', 'not being able to say what you need to say. Stuggling to express yourself. A mental block.', 'Wands10'),
      new card('PAGE of WANDS.', 'the very first stages of something new. A new energy coming into your life. Excitement and potential.', 'Wands11'),
      new card('KNIGHT of WANDS.', 'new things. The thrill of the new. An exciting new passion. That new thing you can\'t stop thinking about.', 'Wands12'),
      new card('QUEEN of WANDS.', 'leadership. Knowing best. Inspiring others. Being the doyen. Getting the respect you deserve.', 'Wands13'),
      new card('KING of WANDS.', 'long term vision. A five year plan. Knowing you took your time to do it right.', 'Wands14')
    ]

    var cardSet=[];

    $("#flip").click(function(){
      resetCards();
      threeCards();
      $("#showread").css('display','inline-block');
      $('#flip').css('display','none');
      });

    $("#showread").click(function(){
      $("#analysis li").css('display','inline-block');
      $("#showread").css('display','none');
      $("#reset").css('display','inline-block');
      });

    $("#reset").click(function(){
      resetCards();
      newBacks();
      $("#flip").css('display','inline-block');
      $("#showread").css('display','none');
      $("#reset").css('display','none');
      cardSet=[];

    });

    function drawCard(max){
      var newCard = [Math.floor( Math.random() * max )];
      return newCard;
      };

    function newBacks(){
      $("#cards ul").append('<li><img src="cards/back.jpeg" height="300px" width="175px"></li><li><img src="cards/back.jpeg" height="300px" width="175px"></li><li><img src="cards/back.jpeg" height="300px" width="175px"></li>');
    };

    function threeCards(){
        var i
        var index
        var curCard
        // $("#analysis ul").append('<li>in the past...</li><li>in the present...</li><li>in the future...</li>');
        for (i = 1; i < 4;) {
          index = drawCard(deck.length);
          curCard = deck[index];
          if (dupeCheck(curCard.name, cardSet)!==true){
            cardSet.push(curCard.name);
            console.log(cardSet);
            $("#cards ul").append('<li><img src="cards/' + curCard.image +'.jpg" height="300px" width="175px"></li>');
            $("#analysis ul").append('<li><p>' + curCard.reading +'</p></li>');
            i++
          }}
          };
          // <h3>' + curCard.name +'</h3>

    function resetCards(){
          $('#cards li').remove();
          $('#analysis li').remove();
        }

    function dupeCheck(card, set) {
        for (i = 0; i < set.length; i++){
          if (card===set[i]){
          return true;
          }
        };}

        // function showReading(){
        //   for (i=0;i<cardArray.length;i++){
        //     $("reading ul").append(cardArray[i])
        //   }
        // }
});
