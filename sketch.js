function preload() {

  data = loadTable('FoodWaste_ConfidenceAB.csv', 'ssv', 'header');
  breadFull = loadImage('Bread/00.png');
  breadNine = loadImage('Bread/90.png');
  breadEight = loadImage('Bread/80.png');
  breadSeven = loadImage('Bread/70.png');
  breadSix = loadImage('Bread/60.png');
  breadFive = loadImage('Bread/50.png');
  breadFour = loadImage('Bread/40.png');
  breadThree = loadImage('Bread/30.png');
  breadTwo = loadImage('Bread/20.png');
  breadOne = loadImage('Bread/10.png');


}



function setup() {
  createCanvas(5000, 5000);
  background("white")
  console.log("Rowcount= " + data.getRowCount());
  console.log(data.columns);

  //Titel
  textStyle (BOLD);
  textSize (125);
  text ('Daily Global Foodwaste', 15, 120);
  
  textStyle (NORMAL);
  textSize (40);
  text ('This graphic shows the daily foodwaste in selected countries around the world.', 20, 200);
  text ('The breadloafs (1 loaf = 500g) visualize the weight of food wasted by one person a day.', 20, 250);
  text ('The selection of countries is based on confidence of the given data.', 20, 300);
  text ('Unrepresented countries in this graphic lack in data.', 20, 350);

  textStyle (ITALIC);
  text ('Source: United Nations Environment Programme, Food Waste Index, 2021', 20, 400);
  textStyle (BOLD);

  for (var i = 0; i < data.getRowCount(); i++) {
    
    //Textspalte
    noStroke();
    fill("black");
    textSize (40);
    let zeile = 500 + i * 80;

    let columnName = data.getString(i, "Country");
    text(columnName, 20,zeile);
    

    //Wertespalte
    let wertspalte = data.getString(i, " Household estimate (Brote/capita/Woche) Brot=500g");
    text(wertspalte, 600, zeile);


    let brotwidth = 150;
    let startwidth = 800;


    let werte = parseFloat(wertspalte.replace(",","."));
    let ganzebrote =  parseInt(werte);
    let bruchbrot = parseInt(Math.round((werte - ganzebrote)*10));
console.log(bruchbrot);


    //Brotspalte
    for(let brote = 0; brote < ganzebrote; brote++){
      image(breadFull, startwidth + brote*brotwidth, zeile-40, 117, 70);
    }

    switch(bruchbrot){
      case 1:
        image(breadOne, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 2:
        image(breadTwo, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 3:
        image(breadThree, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 4:
        image(breadFour, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 5:
        image(breadFive, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 6:
        image(breadSix, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 7:
        image(breadSeven, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 8:
        image(breadEight, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;

      case 9:
        image(breadNine, startwidth + ganzebrote*brotwidth, zeile-40, 117, 70);
      break;
    }

    
    //columnBread = data.getNum(i, " Household estimate (Brote/capita/Woche) Brot=500g");
    //let ColumnBread = image(columnBread; 800+i*150; 210+i*80; 117, 70)

    //console.log(columnBread)

  }

}

function draw() {
  strokeWeight(15);


}