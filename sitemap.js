function buildMap(elementId){
    var theMap=document.getElementById(elementId);
    var list=document.createElement("ul");
    var sublist=document.createElement("ul");
    var classStuff = document.createElement("li");
    classStuff.textContent="Class Stuff";
   
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("About Me", "about_me.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("Epilepsy", "im_feeling_lucky"));
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("Surprise", "suprise.html"));
    classStuff.appendChild(sublist);
    
    list.appendChild(buildList("Breakout", "breakout.html"));
    theMap.appendChild(list);
    
    list.appendChild(classStuff);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("To Do List", "todolist.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("HTML test", "HTMLtest.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Events", "changingElements.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic Tac Toe", "tictactoe.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Times Table", "timesTable.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Times Table Mk 2", "timesTable2.html"));
    classStuff.appendChild(sublist);
    
    sublist.appendChild(buildList("Volume", "volume.html"));
    classStuff.appendChild(sublist);
    }

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href= link;
    element.textContent= title;
    li.appendChild(element);
    return(li);
}
    


