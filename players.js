/*
 * players.js — Official 2026 FIFA World Cup squads
 * Source: Al Jazeera / FIFA official lists (June 2, 2026)
 * 
 * Format: SQUADS["País"] = [
 *   {name:"Nombre", pos:"GK"|"DF"|"MF"|"FW", dob:"YYYY-MM-DD"}
 * ]
 * 
 * Upload to GitHub alongside index.html. No changes to other files needed.
 */

const SQUADS = {
"Argelia": [
  {name:"Oussama Benbot",pos:"GK"},{name:"Melvin Masstil",pos:"GK"},{name:"Luca Zidane",pos:"GK"},
  {name:"Achraf Abada",pos:"DF"},{name:"Rayan Ait Nouri",pos:"DF"},{name:"Zinedine Belaid",pos:"DF"},{name:"Rafik Belghali",pos:"DF"},{name:"Ramy Bensebaini",pos:"DF"},{name:"Samir Chergui",pos:"DF"},{name:"Jaouen Hadjam",pos:"DF"},{name:"Aissa Mandi",pos:"DF"},{name:"Mohamed Amine Tougai",pos:"DF"},
  {name:"Houssem Aouar",pos:"MF"},{name:"Nabil Bentaleb",pos:"MF"},{name:"Hicham Boudaoui",pos:"MF"},{name:"Fares Chaibi",pos:"MF"},{name:"Ibrahim Maza",pos:"MF"},{name:"Yassine Titraoui",pos:"MF"},{name:"Ramiz Zerrouki",pos:"MF"},
  {name:"Mohamed Amine Amoura",pos:"FW"},{name:"Nadir Benbouali",pos:"FW"},{name:"Adil Boulbina",pos:"FW"},{name:"Fares Ghedjemis",pos:"FW"},{name:"Amine Gouiri",pos:"FW"},{name:"Riyad Mahrez",pos:"FW"},{name:"Anis Hadj Moussa",pos:"FW"}
],
"Argentina": [
  {name:"Emiliano Martinez",pos:"GK"},{name:"Geronimo Rulli",pos:"GK"},{name:"Juan Musso",pos:"GK"},
  {name:"Leonardo Balerdi",pos:"DF"},{name:"Gonzalo Montiel",pos:"DF"},{name:"Nicolas Tagliafico",pos:"DF"},{name:"Lisandro Martinez",pos:"DF"},{name:"Cristian Romero",pos:"DF"},{name:"Nicolas Otamendi",pos:"DF"},{name:"Facundo Medina",pos:"DF"},{name:"Nahuel Molina",pos:"DF"},
  {name:"Leandro Paredes",pos:"MF"},{name:"Rodrigo De Paul",pos:"MF"},{name:"Valentin Barco",pos:"MF"},{name:"Giovani Lo Celso",pos:"MF"},{name:"Exequiel Palacios",pos:"MF"},{name:"Alexis Mac Allister",pos:"MF"},{name:"Enzo Fernandez",pos:"MF"},
  {name:"Julian Alvarez",pos:"FW"},{name:"Lionel Messi",pos:"FW"},{name:"Nicolas Gonzalez",pos:"FW"},{name:"Thiago Almada",pos:"FW"},{name:"Giuliano Simeone",pos:"FW"},{name:"Nicolas Paz",pos:"FW"},{name:"Jose Manuel Lopez",pos:"FW"},{name:"Lautaro Martinez",pos:"FW"}
],
"Australia": [
  {name:"Patrick Beach",pos:"GK"},{name:"Paul Izzo",pos:"GK"},{name:"Mathew Ryan",pos:"GK"},
  {name:"Aziz Behich",pos:"DF"},{name:"Jordan Bos",pos:"DF"},{name:"Cameron Burgess",pos:"DF"},{name:"Alessandro Circati",pos:"DF"},{name:"Milos Degenek",pos:"DF"},{name:"Jason Geria",pos:"DF"},{name:"Lucas Herrington",pos:"DF"},{name:"Jacob Italiano",pos:"DF"},{name:"Harry Souttar",pos:"DF"},{name:"Kai Trewin",pos:"DF"},
  {name:"Cameron Devlin",pos:"MF"},{name:"Ajdin Hrustic",pos:"MF"},{name:"Jackson Irvine",pos:"MF"},{name:"Connor Metcalfe",pos:"MF"},{name:"Aiden O'Neill",pos:"MF"},{name:"Paul Okon-Engstler",pos:"MF"},
  {name:"Nestory Irankunda",pos:"FW"},{name:"Mathew Leckie",pos:"FW"},{name:"Awer Mabil",pos:"FW"},{name:"Mohamed Toure",pos:"FW"},{name:"Nishan Velupillay",pos:"FW"},{name:"Cristian Volpato",pos:"FW"},{name:"Tete Yengi",pos:"FW"}
],
"Austria": [
  {name:"Patrick Pentz",pos:"GK"},{name:"Alexander Schlager",pos:"GK"},{name:"Florian Wiegele",pos:"GK"},
  {name:"David Affengruber",pos:"DF"},{name:"David Alaba",pos:"DF"},{name:"Kevin Danso",pos:"DF"},{name:"Marco Friedl",pos:"DF"},{name:"Philipp Lienhart",pos:"DF"},{name:"Phillipp Mwene",pos:"DF"},{name:"Stefan Posch",pos:"DF"},{name:"Alexander Prass",pos:"DF"},{name:"Michael Svoboda",pos:"DF"},
  {name:"Christoph Baumgartner",pos:"MF"},{name:"Carney Chukwuemeka",pos:"MF"},{name:"Florian Grillitsch",pos:"MF"},{name:"Konrad Laimer",pos:"MF"},{name:"Marcel Sabitzer",pos:"MF"},{name:"Xaver Schlager",pos:"MF"},{name:"Romano Schmid",pos:"MF"},{name:"Alessandro Schopf",pos:"MF"},{name:"Nicolas Seiwald",pos:"MF"},{name:"Paul Wanner",pos:"MF"},{name:"Patrick Wimmer",pos:"MF"},
  {name:"Marko Arnautovic",pos:"FW"},{name:"Michael Gregoritsch",pos:"FW"},{name:"Sasa Kalajdzic",pos:"FW"}
],
"Bélgica": [
  {name:"Thibaut Courtois",pos:"GK"},{name:"Senne Lammens",pos:"GK"},{name:"Mike Penders",pos:"GK"},
  {name:"Timothy Castagne",pos:"DF"},{name:"Zeno Debast",pos:"DF"},{name:"Maxim De Cuyper",pos:"DF"},{name:"Koni De Winter",pos:"DF"},{name:"Brandon Mechele",pos:"DF"},{name:"Thomas Meunier",pos:"DF"},{name:"Nathan Ngoy",pos:"DF"},{name:"Joaquin Seys",pos:"DF"},{name:"Arthur Theate",pos:"DF"},
  {name:"Kevin De Bruyne",pos:"MF"},{name:"Amadou Onana",pos:"MF"},{name:"Nicolas Raskin",pos:"MF"},{name:"Youri Tielemans",pos:"MF"},{name:"Hans Vanaken",pos:"MF"},{name:"Axel Witsel",pos:"MF"},
  {name:"Charles De Ketelaere",pos:"FW"},{name:"Jeremy Doku",pos:"FW"},{name:"Matias Fernandez-Pardo",pos:"FW"},{name:"Romelu Lukaku",pos:"FW"},{name:"Dodi Lukebakio",pos:"FW"},{name:"Diego Moreira",pos:"FW"},{name:"Alexis Saelemaekers",pos:"FW"},{name:"Leandro Trossard",pos:"FW"}
],
"Bosnia-Herz.": [
  {name:"Nikola Vasilj",pos:"GK"},{name:"Martin Zlomislic",pos:"GK"},{name:"Osman Hadzikic",pos:"GK"},
  {name:"Sead Kolasinac",pos:"DF"},{name:"Amar Dedic",pos:"DF"},{name:"Nihad Mujakic",pos:"DF"},{name:"Nikola Katic",pos:"DF"},{name:"Tarik Muharemovic",pos:"DF"},{name:"Stjepan Radeljic",pos:"DF"},{name:"Dennis Hadzikadunic",pos:"DF"},{name:"Nidal Celik",pos:"DF"},
  {name:"Amir Hadziahmetovic",pos:"MF"},{name:"Ivan Sunjic",pos:"MF"},{name:"Ivan Basic",pos:"MF"},{name:"Dzenis Burnic",pos:"MF"},{name:"Ermin Mahmic",pos:"MF"},{name:"Benjamin Tahirovic",pos:"MF"},{name:"Amar Memic",pos:"MF"},{name:"Armin Gigovic",pos:"MF"},{name:"Kerim Alajbegovic",pos:"MF"},{name:"Esmir Bajraktarevic",pos:"MF"},
  {name:"Ermedin Demirovic",pos:"FW"},{name:"Jovo Lukic",pos:"FW"},{name:"Samed Bazdar",pos:"FW"},{name:"Haris Tabakovic",pos:"FW"},{name:"Edin Dzeko",pos:"FW"}
],
"Brasil": [
  {name:"Alisson",pos:"GK"},{name:"Ederson",pos:"GK"},{name:"Weverton",pos:"GK"},
  {name:"Alex Sandro",pos:"DF"},{name:"Bremer",pos:"DF"},{name:"Danilo",pos:"DF"},{name:"Douglas Santos",pos:"DF"},{name:"Gabriel Magalhaes",pos:"DF"},{name:"Ibanez",pos:"DF"},{name:"Leo Pereira",pos:"DF"},{name:"Marquinhos",pos:"DF"},{name:"Wesley",pos:"DF"},
  {name:"Bruno Guimaraes",pos:"MF"},{name:"Casemiro",pos:"MF"},{name:"Danilo Santos",pos:"MF"},{name:"Fabinho",pos:"MF"},{name:"Lucas Paqueta",pos:"MF"},
  {name:"Endrick",pos:"FW"},{name:"Gabriel Martinelli",pos:"FW"},{name:"Igor Thiago",pos:"FW"},{name:"Luiz Henrique",pos:"FW"},{name:"Matheus Cunha",pos:"FW"},{name:"Neymar Jr",pos:"FW"},{name:"Raphinha",pos:"FW"},{name:"Rayan",pos:"FW"},{name:"Vinicius Jr",pos:"FW"}
],
"Canadá": [
  {name:"Dayne St Clair",pos:"GK"},{name:"Maxime Crepeau",pos:"GK"},{name:"Owen Goodman",pos:"GK"},
  {name:"Alistair Johnston",pos:"DF"},{name:"Derek Cornelius",pos:"DF"},{name:"Richie Laryea",pos:"DF"},{name:"Niko Sigur",pos:"DF"},{name:"Joel Waterman",pos:"DF"},{name:"Luc de Fougerolles",pos:"DF"},{name:"Moise Bombito",pos:"DF"},{name:"Alphonso Davies",pos:"DF"},{name:"Alfie Jones",pos:"DF"},
  {name:"Stephen Eustaquio",pos:"MF"},{name:"Ismael Kone",pos:"MF"},{name:"Tajon Buchanan",pos:"MF"},{name:"Mathieu Choiniere",pos:"MF"},{name:"Ali Ahmed",pos:"MF"},{name:"Nathan Saliba",pos:"MF"},{name:"Liam Millar",pos:"MF"},{name:"Jacob Shaffelburg",pos:"MF"},{name:"Jonathan Osorio",pos:"MF"},
  {name:"Jonathan David",pos:"FW"},{name:"Cyle Larin",pos:"FW"},{name:"Tani Oluwaseyi",pos:"FW"},{name:"Promise David",pos:"FW"}
],
"Cabo Verde": [
  {name:"CJ dos Santos",pos:"GK"},{name:"Marcio Rosa",pos:"GK"},{name:"Vozinha",pos:"GK"},
  {name:"Sidny Cabral",pos:"DF"},{name:"Diney Borges",pos:"DF"},{name:"Logan Costa",pos:"DF"},{name:"Roberto Lopes",pos:"DF"},{name:"Steven Moreira",pos:"DF"},{name:"Wagner Pina",pos:"DF"},{name:"Kelvin Pires",pos:"DF"},{name:"Joao Paulo Fernandes",pos:"DF"},{name:"Ianique Stopira",pos:"DF"},
  {name:"Telmo Arcanjo",pos:"MF"},{name:"Deroy Duarte",pos:"MF"},{name:"Laros Duarte",pos:"MF"},{name:"Jamiro Monteiro",pos:"MF"},{name:"Kevin Pina",pos:"MF"},{name:"Yannick Semedo",pos:"MF"},
  {name:"Gilson Benchimol",pos:"FW"},{name:"Jovane Cabral",pos:"FW"},{name:"Dailon Livramento",pos:"FW"},{name:"Ryan Mendes",pos:"FW"},{name:"Nuno da Costa",pos:"FW"},{name:"Garry Rodrigues",pos:"FW"},{name:"Willy Semedo",pos:"FW"},{name:"Helio Varela",pos:"FW"}
],
"Colombia": [
  {name:"Camilo Vargas",pos:"GK"},{name:"Alvaro Montero",pos:"GK"},{name:"David Ospina",pos:"GK"},
  {name:"Davinson Sanchez",pos:"DF"},{name:"Jhon Lucumi",pos:"DF"},{name:"Yerry Mina",pos:"DF"},{name:"Willer Ditta",pos:"DF"},{name:"Daniel Munoz",pos:"DF"},{name:"Santiago Arias",pos:"DF"},{name:"Johan Mojica",pos:"DF"},{name:"Deiver Machado",pos:"DF"},
  {name:"Richard Rios",pos:"MF"},{name:"Jefferson Lerma",pos:"MF"},{name:"Kevin Castano",pos:"MF"},{name:"Juan Camilo Portilla",pos:"MF"},{name:"Gustavo Puerta",pos:"MF"},{name:"Jhon Arias",pos:"MF"},{name:"Jorge Carrascal",pos:"MF"},{name:"Juan Fernando Quintero",pos:"MF"},{name:"James Rodriguez",pos:"MF"},{name:"Jaminton Campaz",pos:"MF"},
  {name:"Juan Camilo Hernandez",pos:"FW"},{name:"Luis Diaz",pos:"FW"},{name:"Luis Suarez",pos:"FW"},{name:"Carlos Gomez",pos:"FW"},{name:"Jhon Cordoba",pos:"FW"}
],
"Croacia": [
  {name:"Dominik Livakovic",pos:"GK"},{name:"Dominik Kotarski",pos:"GK"},{name:"Ivor Pandur",pos:"GK"},
  {name:"Josko Gvardiol",pos:"DF"},{name:"Duje Caleta-Car",pos:"DF"},{name:"Josip Sutalo",pos:"DF"},{name:"Josip Stanisic",pos:"DF"},{name:"Marin Pongracic",pos:"DF"},{name:"Martin Erlic",pos:"DF"},{name:"Luka Vuskovic",pos:"DF"},
  {name:"Luka Modric",pos:"MF"},{name:"Mateo Kovacic",pos:"MF"},{name:"Mario Pasalic",pos:"MF"},{name:"Nikola Vlasic",pos:"MF"},{name:"Luka Sucic",pos:"MF"},{name:"Martin Baturina",pos:"MF"},{name:"Kristijan Jakic",pos:"MF"},{name:"Petar Sucic",pos:"MF"},{name:"Nikola Moro",pos:"MF"},{name:"Toni Fruk",pos:"MF"},
  {name:"Ivan Perisic",pos:"FW"},{name:"Andrej Kramaric",pos:"FW"},{name:"Ante Budimir",pos:"FW"},{name:"Marco Pasalic",pos:"FW"},{name:"Petar Musa",pos:"FW"},{name:"Igor Matanovic",pos:"FW"}
],
"Curazao": [
  {name:"Tyrick Bodack",pos:"GK"},{name:"Trevor Doornbusch",pos:"GK"},{name:"Eloy Room",pos:"GK"},
  {name:"Riechedly Bazoer",pos:"DF"},{name:"Joshua Brenet",pos:"DF"},{name:"Roshon van Eijma",pos:"DF"},{name:"Sherel Floranus",pos:"DF"},{name:"Deveron Fonville",pos:"DF"},{name:"Jurien Gaari",pos:"DF"},{name:"Armando Obispo",pos:"DF"},{name:"Shurandy Sambo",pos:"DF"},
  {name:"Juninho Bacuna",pos:"MF"},{name:"Leandro Bacuna",pos:"MF"},{name:"Livano Comenencia",pos:"MF"},{name:"Kevin Felida",pos:"MF"},{name:"Ar'jany Martha",pos:"MF"},{name:"Tyrese Noslin",pos:"MF"},{name:"Godfried Roemeratoe",pos:"MF"},
  {name:"Jeremy Antonisse",pos:"FW"},{name:"Tahith Chong",pos:"FW"},{name:"Kenji Gorre",pos:"FW"},{name:"Sontje Hansen",pos:"FW"},{name:"Gervane Kastaneer",pos:"FW"},{name:"Brandley Kuwas",pos:"FW"},{name:"Jurgen Locadia",pos:"FW"},{name:"Jearl Margaritha",pos:"FW"}
],
"Chequia": [
  {name:"Lukas Hornicek",pos:"GK"},{name:"Matej Kovar",pos:"GK"},{name:"Jindrich Stanek",pos:"GK"},
  {name:"Vladimir Coufal",pos:"DF"},{name:"David Doudera",pos:"DF"},{name:"Tomas Holes",pos:"DF"},{name:"Robin Hranac",pos:"DF"},{name:"Stepan Chaloupek",pos:"DF"},{name:"David Jurasek",pos:"DF"},{name:"Ladislav Krejci",pos:"DF"},{name:"Jaroslav Zeleny",pos:"DF"},{name:"David Zima",pos:"DF"},
  {name:"Lukas Cerv",pos:"MF"},{name:"Vladimir Darida",pos:"MF"},{name:"Lukas Provod",pos:"MF"},{name:"Michal Sadilek",pos:"MF"},{name:"Hugo Sochurek",pos:"MF"},{name:"Alexandr Sojka",pos:"MF"},{name:"Tomas Soucek",pos:"MF"},{name:"Pavel Sulc",pos:"MF"},{name:"Denis Visinsky",pos:"MF"},
  {name:"Adam Hlozek",pos:"FW"},{name:"Tomas Chory",pos:"FW"},{name:"Mojmir Chytil",pos:"FW"},{name:"Jan Kuchta",pos:"FW"},{name:"Patrik Schick",pos:"FW"}
],
"R.D. Congo": [
  {name:"Matthieu Epolo",pos:"GK"},{name:"Timothy Fayulu",pos:"GK"},{name:"Lionel Mpasi",pos:"GK"},
  {name:"Dylan Batubinsika",pos:"DF"},{name:"Gedeon Kalulu",pos:"DF"},{name:"Steve Kapuadi",pos:"DF"},{name:"Joris Kayembe",pos:"DF"},{name:"Arthur Masuaku",pos:"DF"},{name:"Chancel Mbemba",pos:"DF"},{name:"Axel Tuanzebe",pos:"DF"},{name:"Aaron Wan-Bissaka",pos:"DF"},
  {name:"Brian Cipenga",pos:"MF"},{name:"Meshack Elia",pos:"MF"},{name:"Gael Kakuta",pos:"MF"},{name:"Edo Kayembe",pos:"MF"},{name:"Nathanael Mbuku",pos:"MF"},{name:"Samuel Moutoussamy",pos:"MF"},{name:"Ngal'ayel Mukau",pos:"MF"},{name:"Charles Pickel",pos:"MF"},{name:"Noah Sadiki",pos:"MF"},{name:"Aaron Tshibola",pos:"MF"},
  {name:"Cedric Bakambu",pos:"FW"},{name:"Simon Banza",pos:"FW"},{name:"Fiston Mayele",pos:"FW"},{name:"Yoane Wissa",pos:"FW"},{name:"Theo Bongonda",pos:"FW"}
],
"Ecuador": [
  {name:"Hernan Galindez",pos:"GK"},{name:"Moises Ramirez",pos:"GK"},{name:"Gonzalo Valle",pos:"GK"},
  {name:"Piero Hincapie",pos:"DF"},{name:"Willian Pacho",pos:"DF"},{name:"Pervis Estupinan",pos:"DF"},{name:"Felix Torres",pos:"DF"},{name:"Joel Ordonez",pos:"DF"},{name:"Jackson Porozo",pos:"DF"},{name:"Angelo Preciado",pos:"DF"},{name:"Yaimar Medina",pos:"DF"},
  {name:"Moises Caicedo",pos:"MF"},{name:"Alan Franco",pos:"MF"},{name:"Kendry Paez",pos:"MF"},{name:"Gonzalo Plata",pos:"MF"},{name:"Pedro Vite",pos:"MF"},{name:"Jordy Alcivar",pos:"MF"},{name:"Denil Castillo",pos:"MF"},{name:"John Yeboah",pos:"MF"},{name:"Nilson Angulo",pos:"MF"},{name:"Alan Minda",pos:"MF"},
  {name:"Enner Valencia",pos:"FW"},{name:"Kevin Rodriguez",pos:"FW"},{name:"Jordy Caicedo",pos:"FW"},{name:"Anthony Valencia",pos:"FW"},{name:"Jeremy Arevalo",pos:"FW"}
],
"Egipto": [
  {name:"Mohamed El Shenawy",pos:"GK"},{name:"Mostafa Shobeir",pos:"GK"},{name:"El Mahdy Soliman",pos:"GK"},
  {name:"Mohamed Abdelmonem",pos:"DF"},{name:"Mohamed Hany",pos:"DF"},{name:"Yasser Ibrahim",pos:"DF"},{name:"Hossam Abdelmaguid",pos:"DF"},{name:"Ahmed Fattouh",pos:"DF"},{name:"Tarek Alaa",pos:"DF"},{name:"Rami Rabia",pos:"DF"},{name:"Karim Hafez",pos:"DF"},
  {name:"Marwan Attia",pos:"MF"},{name:"Ahmed Sayed Zizo",pos:"MF"},{name:"Mahmoud Hassan Trezeguet",pos:"MF"},{name:"Emam Ashour",pos:"MF"},{name:"Mostafa Abdel Raouf",pos:"MF"},{name:"Mohannad Lasheen",pos:"MF"},{name:"Haitham Hassan",pos:"MF"},{name:"Mahmoud Saber",pos:"MF"},{name:"Ibrahim Adel",pos:"MF"},{name:"Nabil Emad",pos:"MF"},{name:"Hamdi Fathi",pos:"MF"},
  {name:"Mohamed Salah",pos:"FW"},{name:"Omar Marmoush",pos:"FW"},{name:"Hamza Abdel Karim",pos:"FW"}
],
"Inglaterra": [
  {name:"Jordan Pickford",pos:"GK"},{name:"Dean Henderson",pos:"GK"},{name:"James Trafford",pos:"GK"},
  {name:"Reece James",pos:"DF"},{name:"Ezri Konsa",pos:"DF"},{name:"Jarell Quansah",pos:"DF"},{name:"John Stones",pos:"DF"},{name:"Marc Guehi",pos:"DF"},{name:"Dan Burn",pos:"DF"},{name:"Nico O'Reilly",pos:"DF"},{name:"Djed Spence",pos:"DF"},{name:"Tino Livramento",pos:"DF"},
  {name:"Declan Rice",pos:"MF"},{name:"Elliot Anderson",pos:"MF"},{name:"Kobbie Mainoo",pos:"MF"},{name:"Jordan Henderson",pos:"MF"},{name:"Morgan Rogers",pos:"MF"},{name:"Jude Bellingham",pos:"MF"},{name:"Eberechi Eze",pos:"MF"},
  {name:"Harry Kane",pos:"FW"},{name:"Ivan Toney",pos:"FW"},{name:"Ollie Watkins",pos:"FW"},{name:"Bukayo Saka",pos:"FW"},{name:"Marcus Rashford",pos:"FW"},{name:"Anthony Gordon",pos:"FW"},{name:"Noni Madueke",pos:"FW"}
],
"España": [
  {name:"Unai Simon",pos:"GK"},{name:"David Raya",pos:"GK"},{name:"Joan Garcia",pos:"GK"},
  {name:"Marc Cucurella",pos:"DF"},{name:"Pau Cubarsi",pos:"DF"},{name:"Aymeric Laporte",pos:"DF"},{name:"Alejandro Grimaldo",pos:"DF"},{name:"Pedro Porro",pos:"DF"},{name:"Eric Garcia",pos:"DF"},{name:"Marcos Llorente",pos:"DF"},{name:"Marc Pubill",pos:"DF"},
  {name:"Gavi",pos:"MF"},{name:"Rodri",pos:"MF"},{name:"Pedri",pos:"MF"},{name:"Martin Zubimendi",pos:"MF"},{name:"Fabian Ruiz",pos:"MF"},{name:"Alex Baena",pos:"MF"},{name:"Mikel Merino",pos:"MF"},
  {name:"Lamine Yamal",pos:"FW"},{name:"Nico Williams",pos:"FW"},{name:"Dani Olmo",pos:"FW"},{name:"Ferran Torres",pos:"FW"},{name:"Mikel Oyarzabal",pos:"FW"},{name:"Yeremy Pino",pos:"FW"},{name:"Borja Iglesias",pos:"FW"},{name:"Victor Munoz",pos:"FW"}
],
"Francia": [
  {name:"Mike Maignan",pos:"GK"},{name:"Robin Risser",pos:"GK"},{name:"Brice Samba",pos:"GK"},
  {name:"Lucas Digne",pos:"DF"},{name:"Malo Gusto",pos:"DF"},{name:"Lucas Hernandez",pos:"DF"},{name:"Theo Hernandez",pos:"DF"},{name:"Ibrahima Konate",pos:"DF"},{name:"Maxence Lacroix",pos:"DF"},{name:"Jules Kounde",pos:"DF"},{name:"William Saliba",pos:"DF"},{name:"Dayot Upamecano",pos:"DF"},
  {name:"N'Golo Kante",pos:"MF"},{name:"Manu Kone",pos:"MF"},{name:"Adrien Rabiot",pos:"MF"},{name:"Aurelien Tchouameni",pos:"MF"},{name:"Warren Zaire-Emery",pos:"MF"},
  {name:"Maghnes Akliouche",pos:"FW"},{name:"Bradley Barcola",pos:"FW"},{name:"Rayan Cherki",pos:"FW"},{name:"Ousmane Dembele",pos:"FW"},{name:"Desire Doue",pos:"FW"},{name:"Michael Olise",pos:"FW"},{name:"Kylian Mbappe",pos:"FW"},{name:"Jean-Philippe Mateta",pos:"FW"},{name:"Marcus Thuram",pos:"FW"}
],
"Alemania": [
  {name:"Manuel Neuer",pos:"GK"},{name:"Oliver Baumann",pos:"GK"},{name:"Alexander Nuebel",pos:"GK"},
  {name:"Nico Schlotterbeck",pos:"DF"},{name:"David Raum",pos:"DF"},{name:"Nathaniel Brown",pos:"DF"},{name:"Jonathan Tah",pos:"DF"},{name:"Waldemar Anton",pos:"DF"},{name:"Joshua Kimmich",pos:"DF"},{name:"Malick Thiaw",pos:"DF"},{name:"Antonio Rudiger",pos:"DF"},
  {name:"Pascal Gross",pos:"MF"},{name:"Leon Goretzka",pos:"MF"},{name:"Felix Nmecha",pos:"MF"},{name:"Jamal Musiala",pos:"MF"},{name:"Nadiem Amiri",pos:"MF"},{name:"Jamie Leweling",pos:"MF"},{name:"Lennart Karl",pos:"MF"},{name:"Florian Wirtz",pos:"MF"},{name:"Leroy Sane",pos:"MF"},{name:"Aleksandar Pavlovic",pos:"MF"},{name:"Angelo Stiller",pos:"MF"},
  {name:"Kai Havertz",pos:"FW"},{name:"Nick Woltemade",pos:"FW"},{name:"Deniz Undav",pos:"FW"},{name:"Maximilian Beier",pos:"FW"}
],
"Ghana": [
  {name:"Joseph Anang",pos:"GK"},{name:"Benjamin Asare",pos:"GK"},{name:"Lawrence Ati-Zigi",pos:"GK"},
  {name:"Jonas Adjetey",pos:"DF"},{name:"Derrick Luckassen",pos:"DF"},{name:"Gideon Mensah",pos:"DF"},{name:"Abdul Mumin",pos:"DF"},{name:"Jerome Opoku",pos:"DF"},{name:"Kojo Oppong Preprah",pos:"DF"},{name:"Baba Abdul Rahman",pos:"DF"},{name:"Alidu Seidu",pos:"DF"},{name:"Marvin Senaya",pos:"DF"},
  {name:"Augustine Boakye",pos:"MF"},{name:"Abdul Fatawu Issahaku",pos:"MF"},{name:"Elisha Owusu",pos:"MF"},{name:"Thomas Partey",pos:"MF"},{name:"Kwasi Sibo",pos:"MF"},{name:"Kamal Deen Sulemana",pos:"MF"},{name:"Caleb Yirenkyi",pos:"MF"},
  {name:"Prince Kwabena Adu",pos:"FW"},{name:"Jordan Ayew",pos:"FW"},{name:"Christopher Bonsu Baah",pos:"FW"},{name:"Ernest Nuamah",pos:"FW"},{name:"Antoine Semenyo",pos:"FW"},{name:"Brandon Thomas-Asante",pos:"FW"},{name:"Inaki Williams",pos:"FW"}
],
"Haití": [
  {name:"Josue Duverger",pos:"GK"},{name:"Alexandre Pierre",pos:"GK"},{name:"Johny Placide",pos:"GK"},
  {name:"Ricardo Ade",pos:"DF"},{name:"Carlens Arcus",pos:"DF"},{name:"Hannes Delcroix",pos:"DF"},{name:"Jean-Kevin Duverne",pos:"DF"},{name:"Martin Experience",pos:"DF"},{name:"Duke Lacroix",pos:"DF"},{name:"Wilguens Paugain",pos:"DF"},{name:"Keeto Thermoncy",pos:"DF"},
  {name:"Carl Fred Sainte",pos:"MF"},{name:"Jean-Ricner Bellegarde",pos:"MF"},{name:"Leverton Pierre",pos:"MF"},{name:"Danley Jean Jacques",pos:"MF"},{name:"Woodensky Pierre",pos:"MF"},{name:"Dominique Simon",pos:"MF"},
  {name:"Josue Casimir",pos:"FW"},{name:"Louicius Deedson",pos:"FW"},{name:"Derrick Etienne Jr.",pos:"FW"},{name:"Yassin Fortune",pos:"FW"},{name:"Wilson Isidor",pos:"FW"},{name:"Lenny Joseph",pos:"FW"},{name:"Duckens Nazon",pos:"FW"},{name:"Frantzdy Pierrot",pos:"FW"},{name:"Ruben Providence",pos:"FW"}
],
"Irán": [
  {name:"Alireza Beiranvand",pos:"GK"},{name:"Seyed Hossein Hosseini",pos:"GK"},{name:"Payam Niazmand",pos:"GK"},
  {name:"Danial Eiri",pos:"DF"},{name:"Ehsan Hajsafi",pos:"DF"},{name:"Saleh Hardani",pos:"DF"},{name:"Hossein Kanaani",pos:"DF"},{name:"Shoja Khalilzadeh",pos:"DF"},{name:"Milad Mohammadi",pos:"DF"},{name:"Ali Nemati",pos:"DF"},{name:"Ramin Rezaeian",pos:"DF"},
  {name:"Rouzbeh Cheshmi",pos:"MF"},{name:"Saeid Ezatolahi",pos:"MF"},{name:"Mehdi Ghaedi",pos:"MF"},{name:"Saman Ghoddos",pos:"MF"},{name:"Mohammad Ghorbani",pos:"MF"},{name:"Alireza Jahanbakhsh",pos:"MF"},{name:"Mohammad Mohebi",pos:"MF"},{name:"Amir Mohammad Razzaghinia",pos:"MF"},{name:"Mehdi Torabi",pos:"MF"},{name:"Aria Yousefi",pos:"MF"},
  {name:"Ali Alipour",pos:"FW"},{name:"Dennis Dargahi",pos:"FW"},{name:"Amirhossein Hosseinzadeh",pos:"FW"},{name:"Mehdi Taremi",pos:"FW"},{name:"Shahriar Moghanlou",pos:"FW"}
],
"Irak": [
  {name:"Fahad Talib",pos:"GK"},{name:"Jalal Hassan",pos:"GK"},{name:"Ahmed Basil",pos:"GK"},
  {name:"Hussein Ali",pos:"DF"},{name:"Manaf Younis",pos:"DF"},{name:"Zaid Tahseen",pos:"DF"},{name:"Rebin Sulaka",pos:"DF"},{name:"Akam Hashem",pos:"DF"},{name:"Merchas Doski",pos:"DF"},{name:"Ahmed Yahya",pos:"DF"},{name:"Zaid Ismail",pos:"DF"},{name:"Frans Putros",pos:"DF"},{name:"Mustafa Saadoon",pos:"DF"},
  {name:"Amir Al Ammari",pos:"MF"},{name:"Kevin Yakob",pos:"MF"},{name:"Zidane Iqbal",pos:"MF"},{name:"Aimar Sher",pos:"MF"},{name:"Ibrahim Bayesh",pos:"MF"},{name:"Ahmed Qasim",pos:"MF"},{name:"Youssef Amyn",pos:"MF"},{name:"Marko Farji",pos:"MF"},
  {name:"Ali Jassim",pos:"FW"},{name:"Ali Al Hamadi",pos:"FW"},{name:"Ali Yousef",pos:"FW"},{name:"Aymen Hussein",pos:"FW"},{name:"Mohanad Ali",pos:"FW"}
],
"Costa de Marfil": [
  {name:"Yahia Fofana",pos:"GK"},{name:"Mohamed Kone",pos:"GK"},{name:"Alban Lafont",pos:"GK"},
  {name:"Emmanuel Agbadou",pos:"DF"},{name:"Christopher Operi",pos:"DF"},{name:"Ousmane Diomande",pos:"DF"},{name:"Guela Doue",pos:"DF"},{name:"Ghislain Konan",pos:"DF"},{name:"Odilon Kossounou",pos:"DF"},{name:"Wilfried Singo",pos:"DF"},{name:"Evan Ndicka",pos:"DF"},
  {name:"Seko Fofana",pos:"MF"},{name:"Parfait Guiagon",pos:"MF"},{name:"Christ Inao Oulai",pos:"MF"},{name:"Franck Kessie",pos:"MF"},{name:"Ibrahim Sangare",pos:"MF"},{name:"Jean Michael Seri",pos:"MF"},
  {name:"Simon Adingra",pos:"FW"},{name:"Ange-Yoan Bonny",pos:"FW"},{name:"Amad Diallo",pos:"FW"},{name:"Oumar Diakite",pos:"FW"},{name:"Yan Diomande",pos:"FW"},{name:"Evann Guessand",pos:"FW"},{name:"Nicolas Pepe",pos:"FW"},{name:"Bazoumana Toure",pos:"FW"},{name:"Elye Wahi",pos:"FW"}
],
"Japón": [
  {name:"Tomoki Hayakawa",pos:"GK"},{name:"Keisuke Osako",pos:"GK"},{name:"Zion Suzuki",pos:"GK"},
  {name:"Ko Itakura",pos:"DF"},{name:"Hiroki Ito",pos:"DF"},{name:"Yuto Nagatomo",pos:"DF"},{name:"Ayumu Seko",pos:"DF"},{name:"Yukinari Sugawara",pos:"DF"},{name:"Junnosuke Suzuki",pos:"DF"},{name:"Shogo Taniguchi",pos:"DF"},{name:"Takehiro Tomiyasu",pos:"DF"},{name:"Tsuyoshi Watanabe",pos:"DF"},
  {name:"Ritsu Doan",pos:"MF"},{name:"Wataru Endo",pos:"MF"},{name:"Junya Ito",pos:"MF"},{name:"Daichi Kamada",pos:"MF"},{name:"Takefusa Kubo",pos:"MF"},{name:"Keito Nakamura",pos:"MF"},{name:"Kaishu Sano",pos:"MF"},{name:"Ao Tanaka",pos:"MF"},
  {name:"Keisuke Goto",pos:"FW"},{name:"Daizen Maeda",pos:"FW"},{name:"Koki Ogawa",pos:"FW"},{name:"Kento Shiogai",pos:"FW"},{name:"Yuito Suzuki",pos:"FW"},{name:"Ayase Ueda",pos:"FW"}
],
"Jordania": [
  {name:"Yazid Abulaila",pos:"GK"},{name:"Noor Bani Attiah",pos:"GK"},{name:"Abdallah Al Fakhouri",pos:"GK"},
  {name:"Mohammad Abu Hashish",pos:"DF"},{name:"Abdullah Nasib",pos:"DF"},{name:"Hussam Abu Dhahab",pos:"DF"},{name:"Yazan Al Arab",pos:"DF"},{name:"Mohammad Abu Alnadi",pos:"DF"},{name:"Salem Obaid",pos:"DF"},{name:"Saed Al Rosan",pos:"DF"},{name:"Ehsan Haddad",pos:"DF"},{name:"Anas Badawi",pos:"DF"},
  {name:"Amer Jamous",pos:"MF"},{name:"Noor Al Rawabdeh",pos:"MF"},{name:"Rajaei Ayed",pos:"MF"},{name:"Ibrahim Sadeh",pos:"MF"},{name:"Mohannad Abu Taha",pos:"MF"},{name:"Nizar Al Rashdan",pos:"MF"},{name:"Mohammad Al Dawoud",pos:"MF"},{name:"Mahmoud Mardahi",pos:"MF"},
  {name:"Mohammad Abu Zraiq",pos:"FW"},{name:"Ali Olwan",pos:"FW"},{name:"Mousa Al Tamari",pos:"FW"},{name:"Odeh Fakhoury",pos:"FW"},{name:"Ibrahim Sabra",pos:"FW"},{name:"Ali Azaizeh",pos:"FW"}
],
"México": [
  {name:"Raul Rangel",pos:"GK"},{name:"Guillermo Ochoa",pos:"GK"},{name:"Carlos Acevedo",pos:"GK"},
  {name:"Jorge Sanchez",pos:"DF"},{name:"Israel Reyes",pos:"DF"},{name:"Cesar Montes",pos:"DF"},{name:"Johan Vasquez",pos:"DF"},{name:"Jesus Gallardo",pos:"DF"},{name:"Mateo Chavez",pos:"DF"},{name:"Edson Alvarez",pos:"DF"},
  {name:"Erik Lira",pos:"MF"},{name:"Orbelin Pineda",pos:"MF"},{name:"Alvaro Fidalgo",pos:"MF"},{name:"Brian Gutierrez",pos:"MF"},{name:"Luis Romo",pos:"MF"},{name:"Obed Vargas",pos:"MF"},{name:"Gilberto Mora",pos:"MF"},{name:"Luis Chavez",pos:"MF"},
  {name:"Roberto Alvarado",pos:"FW"},{name:"Cesar Huerta",pos:"FW"},{name:"Alexis Vega",pos:"FW"},{name:"Julian Quinones",pos:"FW"},{name:"Guillermo Martinez",pos:"FW"},{name:"Armando Gonzalez",pos:"FW"},{name:"Santiago Gimenez",pos:"FW"},{name:"Raul Jimenez",pos:"FW"}
],
"Marruecos": [
  {name:"Yassine Bounou",pos:"GK"},{name:"Munir El Kajoui",pos:"GK"},{name:"Ahmed Reda Tagnaouti",pos:"GK"},
  {name:"Noussair Mazraoui",pos:"DF"},{name:"Anas Salah-Eddine",pos:"DF"},{name:"Youssef Bellammari",pos:"DF"},{name:"Achraf Hakimi",pos:"DF"},{name:"Zakaria El Ouahdi",pos:"DF"},{name:"Nayef Aguerd",pos:"DF"},{name:"Chadi Riad",pos:"DF"},{name:"Redouane Halhal",pos:"DF"},{name:"Issa Diop",pos:"DF"},
  {name:"Samir El Mourabet",pos:"MF"},{name:"Ayoub Bouaddi",pos:"MF"},{name:"Neil El Aynaoui",pos:"MF"},{name:"Sofyan Amrabat",pos:"MF"},{name:"Azzedine Ounahi",pos:"MF"},{name:"Bilal El Khannouss",pos:"MF"},{name:"Ismael Saibari",pos:"MF"},
  {name:"Abdesamad Ezzalzouli",pos:"FW"},{name:"Chemsdine Talbi",pos:"FW"},{name:"Soufiane Rahimi",pos:"FW"},{name:"Ayoub El Kaabi",pos:"FW"},{name:"Brahim Diaz",pos:"FW"},{name:"Yassine Gessim",pos:"FW"},{name:"Ayoube Amaimouni-Echghouyab",pos:"FW"}
],
"Países Bajos": [
  {name:"Mark Flekken",pos:"GK"},{name:"Robin Roefs",pos:"GK"},{name:"Bart Verbruggen",pos:"GK"},
  {name:"Nathan Ake",pos:"DF"},{name:"Virgil van Dijk",pos:"DF"},{name:"Denzel Dumfries",pos:"DF"},{name:"Jan Paul van Hecke",pos:"DF"},{name:"Jurrien Timber",pos:"DF"},{name:"Jorrel Hato",pos:"DF"},{name:"Micky van de Ven",pos:"DF"},
  {name:"Ryan Gravenberch",pos:"MF"},{name:"Frenkie de Jong",pos:"MF"},{name:"Teun Koopmeiners",pos:"MF"},{name:"Tijjani Reijnders",pos:"MF"},{name:"Marten de Roon",pos:"MF"},{name:"Guus Til",pos:"MF"},{name:"Quinten Timber",pos:"MF"},{name:"Mats Wieffer",pos:"MF"},
  {name:"Brian Brobbey",pos:"FW"},{name:"Memphis Depay",pos:"FW"},{name:"Cody Gakpo",pos:"FW"},{name:"Noa Lang",pos:"FW"},{name:"Donyell Malen",pos:"FW"},{name:"Crysencio Summerville",pos:"FW"},{name:"Wout Weghorst",pos:"FW"},{name:"Justin Kluivert",pos:"FW"}
],
"Nueva Zelanda": [
  {name:"Max Crocombe",pos:"GK"},{name:"Alex Paulsen",pos:"GK"},{name:"Michael Woud",pos:"GK"},
  {name:"Tyler Bindon",pos:"DF"},{name:"Michael Boxall",pos:"DF"},{name:"Liberato Cacace",pos:"DF"},{name:"Francis de Vries",pos:"DF"},{name:"Callan Elliot",pos:"DF"},{name:"Tim Payne",pos:"DF"},{name:"Nando Pijnaker",pos:"DF"},{name:"Tommy Smith",pos:"DF"},{name:"Finn Surman",pos:"DF"},
  {name:"Lachlan Bayliss",pos:"MF"},{name:"Joe Bell",pos:"MF"},{name:"Matt Garbett",pos:"MF"},{name:"Eli Just",pos:"MF"},{name:"Callum McCowatt",pos:"MF"},{name:"Ben Old",pos:"MF"},{name:"Alex Rufer",pos:"MF"},{name:"Marko Stamenic",pos:"MF"},{name:"Sarpreet Singh",pos:"MF"},{name:"Ryan Thomas",pos:"MF"},
  {name:"Kosta Barbarouses",pos:"FW"},{name:"Jesse Randall",pos:"FW"},{name:"Ben Waine",pos:"FW"},{name:"Chris Wood",pos:"FW"}
],
"Noruega": [
  {name:"Orjan Haskjold Nyland",pos:"GK"},{name:"Egil Selvik",pos:"GK"},{name:"Sander Tangvik",pos:"GK"},
  {name:"Kristoffer Vassbakk Ajer",pos:"DF"},{name:"Fredrik Bjorkan",pos:"DF"},{name:"Henrik Falchener",pos:"DF"},{name:"Sondre Langas",pos:"DF"},{name:"Torbjorn Heggem",pos:"DF"},{name:"Marcus Holmgren Pedersen",pos:"DF"},{name:"Julian Ryerson",pos:"DF"},{name:"David Moller Wolfe",pos:"DF"},{name:"Leo Ostigard",pos:"DF"},
  {name:"Thelonious Aasgaard",pos:"MF"},{name:"Fredrik Aursnes",pos:"MF"},{name:"Patrick Berg",pos:"MF"},{name:"Sander Berge",pos:"MF"},{name:"Oscar Bobb",pos:"MF"},{name:"Jens Petter Hauge",pos:"MF"},{name:"Antonio Nusa",pos:"MF"},{name:"Andreas Schjelderup",pos:"MF"},{name:"Morten Thorsby",pos:"MF"},{name:"Kristian Thorstvedt",pos:"MF"},{name:"Martin Odegaard",pos:"MF"},
  {name:"Erling Haaland",pos:"FW"},{name:"Alexander Sorloth",pos:"FW"},{name:"Jorgen Strand Larsen",pos:"FW"}
],
"Panamá": [
  {name:"Orlando Mosquera",pos:"GK"},{name:"Luis Mejia",pos:"GK"},{name:"Cesar Samudio",pos:"GK"},
  {name:"Cesar Blackman",pos:"DF"},{name:"Jorge Gutierrez",pos:"DF"},{name:"Amir Murillo",pos:"DF"},{name:"Fidel Escobar",pos:"DF"},{name:"Andres Andrade",pos:"DF"},{name:"Edgardo Farina",pos:"DF"},{name:"Jose Cordoba",pos:"DF"},{name:"Eric Davis",pos:"DF"},{name:"Jiovany Ramos",pos:"DF"},{name:"Roderick Miller",pos:"DF"},
  {name:"Anibal Godoy",pos:"MF"},{name:"Adalberto Carrasquilla",pos:"MF"},{name:"Carlos Harvey",pos:"MF"},{name:"Cristian Martinez",pos:"MF"},{name:"Jose Luis Rodriguez",pos:"MF"},{name:"Cesar Yanis",pos:"MF"},{name:"Yoel Barcenas",pos:"MF"},{name:"Alberto Quintero",pos:"MF"},{name:"Azarias Londono",pos:"MF"},
  {name:"Ismael Diaz",pos:"FW"},{name:"Cecilio Waterman",pos:"FW"},{name:"Jose Fajardo",pos:"FW"},{name:"Tomas Rodriguez",pos:"FW"}
],
"Paraguay": [
  {name:"Orlando Gill",pos:"GK"},{name:"Roberto Fernandez",pos:"GK"},{name:"Gaston Olveira",pos:"GK"},
  {name:"Juan Caceres",pos:"DF"},{name:"Gustavo Velazquez",pos:"DF"},{name:"Gustavo Gomez",pos:"DF"},{name:"Junior Alonso",pos:"DF"},{name:"Jose Canale",pos:"DF"},{name:"Omar Alderete",pos:"DF"},{name:"Alexandro Maidana",pos:"DF"},{name:"Fabian Balbuena",pos:"DF"},
  {name:"Diego Gomez",pos:"MF"},{name:"Mauricio Magalhaes",pos:"MF"},{name:"Damian Bobadilla",pos:"MF"},{name:"Braian Ojeda",pos:"MF"},{name:"Andres Cubas",pos:"MF"},{name:"Matias Galarza",pos:"MF"},{name:"Alejandro Gamarra",pos:"MF"},
  {name:"Gustavo Caballero",pos:"FW"},{name:"Ramon Sosa",pos:"FW"},{name:"Alex Arce",pos:"FW"},{name:"Isidro Pitta",pos:"FW"},{name:"Gabriel Avalos",pos:"FW"},{name:"Miguel Almiron",pos:"FW"},{name:"Julio Enciso",pos:"FW"},{name:"Antonio Sanabria",pos:"FW"}
],
"Portugal": [
  {name:"Diogo Costa",pos:"GK"},{name:"Jose Sa",pos:"GK"},{name:"Rui Silva",pos:"GK"},
  {name:"Tomas Araujo",pos:"DF"},{name:"Joao Cancelo",pos:"DF"},{name:"Diogo Dalot",pos:"DF"},{name:"Ruben Dias",pos:"DF"},{name:"Goncalo Inacio",pos:"DF"},{name:"Nuno Mendes",pos:"DF"},{name:"Matheus Nunes",pos:"DF"},{name:"Nelson Semedo",pos:"DF"},{name:"Renato Veiga",pos:"DF"},
  {name:"Samuel Costa",pos:"MF"},{name:"Bruno Fernandes",pos:"MF"},{name:"Joao Neves",pos:"MF"},{name:"Ruben Neves",pos:"MF"},{name:"Bernardo Silva",pos:"MF"},{name:"Vitinha",pos:"MF"},
  {name:"Francisco Conceicao",pos:"FW"},{name:"Joao Felix",pos:"FW"},{name:"Goncalo Guedes",pos:"FW"},{name:"Rafael Leao",pos:"FW"},{name:"Pedro Neto",pos:"FW"},{name:"Goncalo Ramos",pos:"FW"},{name:"Cristiano Ronaldo",pos:"FW"},{name:"Francisco Trincao",pos:"FW"}
],
"Qatar": [
  {name:"Salah Zakaria",pos:"GK"},{name:"Meshaal Barsham",pos:"GK"},{name:"Mahmoud Abunada",pos:"GK"},
  {name:"Boualem Khoukhi",pos:"DF"},{name:"Pedro Miguel",pos:"DF"},{name:"Sultan Al Brake",pos:"DF"},{name:"Al Hashmi Al Hussain",pos:"DF"},{name:"Ayoub Al Alawi",pos:"DF"},{name:"Issa Laye",pos:"DF"},{name:"Lucas Mendes",pos:"DF"},{name:"Homam Al Amin",pos:"DF"},
  {name:"Ahmed Fathi",pos:"MF"},{name:"Jassim Gaber",pos:"MF"},{name:"Assim Madibo",pos:"MF"},{name:"Abdulaziz Hatem",pos:"MF"},{name:"Karim Boudiaf",pos:"MF"},{name:"Mohammed Mannai",pos:"MF"},
  {name:"Almoez Ali",pos:"FW"},{name:"Akram Afif",pos:"FW"},{name:"Tahsin Mohammed",pos:"FW"},{name:"Edmilson Junior",pos:"FW"},{name:"Ahmed Al-Janehi",pos:"FW"},{name:"Ahmed Alaa",pos:"FW"},{name:"Hassan Al Haydos",pos:"FW"},{name:"Mohammed Muntari",pos:"FW"},{name:"Yusuf Abdurisag",pos:"FW"}
],
"Arabia Saudita": [
  {name:"Nawaf Al Aqidi",pos:"GK"},{name:"Mohamed Al Owais",pos:"GK"},{name:"Ahmed Alkassar",pos:"GK"},
  {name:"Saud Abdulhamid",pos:"DF"},{name:"Jehad Thakri",pos:"DF"},{name:"Abdulelah Al Amri",pos:"DF"},{name:"Hassan Tambakti",pos:"DF"},{name:"Ali Lajami",pos:"DF"},{name:"Hassan Kadesh",pos:"DF"},{name:"Moteb Al Harbi",pos:"DF"},{name:"Nawaf Boushal",pos:"DF"},{name:"Ali Majrashi",pos:"DF"},{name:"Mohammed Abu Alshamat",pos:"DF"},
  {name:"Ziyad Al Johani",pos:"MF"},{name:"Nasser Al Dawsari",pos:"MF"},{name:"Mohamed Kanno",pos:"MF"},{name:"Abdullah Al Khaibari",pos:"MF"},{name:"Alaa Al Hejji",pos:"MF"},{name:"Musab Al Juwayr",pos:"MF"},{name:"Sultan Mandash",pos:"MF"},{name:"Ayman Yahya",pos:"MF"},{name:"Khalid Al Ghannam",pos:"MF"},
  {name:"Salem Al Dawsari",pos:"FW"},{name:"Abdullah Al Hamdan",pos:"FW"},{name:"Feras Al Brikan",pos:"FW"},{name:"Saleh Al Shehri",pos:"FW"}
],
"Escocia": [
  {name:"Craig Gordon",pos:"GK"},{name:"Angus Gunn",pos:"GK"},{name:"Liam Kelly",pos:"GK"},
  {name:"Grant Hanley",pos:"DF"},{name:"Jack Hendry",pos:"DF"},{name:"Aaron Hickey",pos:"DF"},{name:"Dom Hyam",pos:"DF"},{name:"Scott McKenna",pos:"DF"},{name:"Nathan Patterson",pos:"DF"},{name:"Anthony Ralston",pos:"DF"},{name:"Andy Robertson",pos:"DF"},{name:"John Souttar",pos:"DF"},{name:"Kieran Tierney",pos:"DF"},
  {name:"Ryan Christie",pos:"MF"},{name:"Findlay Curtis",pos:"MF"},{name:"Lewis Ferguson",pos:"MF"},{name:"Tyler Fletcher",pos:"MF"},{name:"Ben Gannon-Doak",pos:"MF"},{name:"John McGinn",pos:"MF"},{name:"Kenny McLean",pos:"MF"},{name:"Scott McTominay",pos:"MF"},
  {name:"Che Adams",pos:"FW"},{name:"Lyndon Dykes",pos:"FW"},{name:"George Hirst",pos:"FW"},{name:"Lawrence Shankland",pos:"FW"},{name:"Ross Stewart",pos:"FW"}
],
"Senegal": [
  {name:"Edouard Mendy",pos:"GK"},{name:"Mory Diaw",pos:"GK"},{name:"Yehvann Diouf",pos:"GK"},
  {name:"Krepin Diatta",pos:"DF"},{name:"Antoine Mendy",pos:"DF"},{name:"Kalidou Koulibaly",pos:"DF"},{name:"El Hadji Malick Diouf",pos:"DF"},{name:"Mamadou Sarr",pos:"DF"},{name:"Moussa Niakhate",pos:"DF"},{name:"Abdoulaye Seck",pos:"DF"},{name:"Ismail Jakobs",pos:"DF"},
  {name:"Idrissa Gana Gueye",pos:"MF"},{name:"Pape Gueye",pos:"MF"},{name:"Lamine Camara",pos:"MF"},{name:"Habib Diarra",pos:"MF"},{name:"Pathe Ciss",pos:"MF"},{name:"Pape Matar Sarr",pos:"MF"},{name:"Bara Sapoko Ndiaye",pos:"MF"},
  {name:"Sadio Mane",pos:"FW"},{name:"Ismaila Sarr",pos:"FW"},{name:"Iliman Ndiaye",pos:"FW"},{name:"Assane Diao",pos:"FW"},{name:"Ibrahim Mbaye",pos:"FW"},{name:"Nicolas Jackson",pos:"FW"},{name:"Bamba Dieng",pos:"FW"},{name:"Cherif Ndiaye",pos:"FW"}
],
"Sudáfrica": [
  {name:"Ronwen Williams",pos:"GK"},{name:"Ricardo Goss",pos:"GK"},{name:"Sipho Chaine",pos:"GK"},
  {name:"Aubrey Modiba",pos:"DF"},{name:"Khuliso Mudau",pos:"DF"},{name:"Khulumani Ndamane",pos:"DF"},{name:"Kamogelo Sebelebele",pos:"DF"},{name:"Nkosinathi Sibisi",pos:"DF"},{name:"Bradley Cross",pos:"DF"},{name:"Samukele Kabini",pos:"DF"},{name:"Olwethu Makhanya",pos:"DF"},{name:"Thabang Matuludi",pos:"DF"},{name:"Mbekezeli Mbokazi",pos:"DF"},{name:"Ime Okon",pos:"DF"},
  {name:"Oswin Appollis",pos:"MF"},{name:"Thalente Mbatha",pos:"MF"},{name:"Relebohile Mofokeng",pos:"MF"},{name:"Jayden Adams",pos:"MF"},{name:"Teboho Mokoena",pos:"MF"},{name:"Themba Zwane",pos:"MF"},{name:"Sphephelo Sithole",pos:"MF"},
  {name:"Evidence Makgopa",pos:"FW"},{name:"Tshepang Moremi",pos:"FW"},{name:"Lyle Foster",pos:"FW"},{name:"Thapelo Maseko",pos:"FW"},{name:"Iqraam Rayners",pos:"FW"}
],
"Corea del Sur": [
  {name:"Song Bumkeun",pos:"GK"},{name:"Jo Hyeonwoo",pos:"GK"},{name:"Kim Seung-gyu",pos:"GK"},
  {name:"Jens Castrop",pos:"DF"},{name:"Lee Hanbeom",pos:"DF"},{name:"Park Jinseob",pos:"DF"},{name:"Lee Kihyuk",pos:"DF"},{name:"Kim Minjae",pos:"DF"},{name:"Kim Moonhwan",pos:"DF"},{name:"Kim Taehyeon",pos:"DF"},{name:"Lee Taeseok",pos:"DF"},{name:"Seol Youngwoo",pos:"DF"},{name:"Cho Wije",pos:"DF"},
  {name:"Lee Donggyeong",pos:"MF"},{name:"Hwang Heechan",pos:"MF"},{name:"Yang Hyunjun",pos:"MF"},{name:"Hwang Inbeom",pos:"MF"},{name:"Lee Jaesung",pos:"MF"},{name:"Kim Jingyu",pos:"MF"},{name:"Eom Jisung",pos:"MF"},{name:"Bae Junho",pos:"MF"},{name:"Lee Kangin",pos:"MF"},{name:"Paik Seungho",pos:"MF"},
  {name:"Cho Guesung",pos:"FW"},{name:"Son Heungmin",pos:"FW"},{name:"Oh Hyeongyu",pos:"FW"}
],
"Suecia": [
  {name:"Robin Olsen",pos:"GK"},{name:"Viktor Johansson",pos:"GK"},{name:"Kristoffer Nordfeldt",pos:"GK"},
  {name:"Victor Lindelof",pos:"DF"},{name:"Gabriel Gudmundsson",pos:"DF"},{name:"Hjalmar Ekdal",pos:"DF"},{name:"Isak Hien",pos:"DF"},{name:"Emil Holm",pos:"DF"},{name:"Ludwig Augustinsson",pos:"DF"},{name:"Carl Starfelt",pos:"DF"},{name:"Linus Wahlqvist",pos:"DF"},{name:"Daniel Svensson",pos:"DF"},
  {name:"Emil Forsberg",pos:"MF"},{name:"Dejan Kulusevski",pos:"MF"},{name:"Jens Cajuste",pos:"MF"},{name:"Hugo Larsson",pos:"MF"},{name:"Samuel Gustafson",pos:"MF"},{name:"Mattias Svanberg",pos:"MF"},{name:"Sebastian Nanasi",pos:"MF"},{name:"Lucas Bergvall",pos:"MF"},
  {name:"Alexander Isak",pos:"FW"},{name:"Viktor Gyokeres",pos:"FW"},{name:"Anthony Elanga",pos:"FW"},{name:"Jesper Karlsson",pos:"FW"},{name:"Ken Sema",pos:"FW"},{name:"Jordan Larsson",pos:"FW"}
],
"Suiza": [
  {name:"Marvin Keller",pos:"GK"},{name:"Gregor Kobel",pos:"GK"},{name:"Yvon Mvogo",pos:"GK"},
  {name:"Manuel Akanji",pos:"DF"},{name:"Aurele Amenda",pos:"DF"},{name:"Eray Comert",pos:"DF"},{name:"Nico Elvedi",pos:"DF"},{name:"Luca Jaquez",pos:"DF"},{name:"Miro Muheim",pos:"DF"},{name:"Ricardo Rodriguez",pos:"DF"},{name:"Silvan Widmer",pos:"DF"},
  {name:"Michel Aebischer",pos:"MF"},{name:"Christian Fassnacht",pos:"MF"},{name:"Remo Freuler",pos:"MF"},{name:"Ardon Jashari",pos:"MF"},{name:"Fabian Rieder",pos:"MF"},{name:"Djibril Sow",pos:"MF"},{name:"Cedric Itten",pos:"MF"},{name:"Granit Xhaka",pos:"MF"},{name:"Denis Zakaria",pos:"MF"},
  {name:"Ruben Vargas",pos:"FW"},{name:"Zeki Amdouni",pos:"FW"},{name:"Breel Embolo",pos:"FW"},{name:"Dan Ndoye",pos:"FW"},{name:"Noah Okafor",pos:"FW"},{name:"Johan Manzambi",pos:"FW"}
],
"Túnez": [
  {name:"Sabri Ben Hessen",pos:"GK"},{name:"Abdelmouhib Chamakh",pos:"GK"},{name:"Aymen Dahman",pos:"GK"},
  {name:"Ali Abdi",pos:"DF"},{name:"Adem Arous",pos:"DF"},{name:"Mohamed Amine Ben Hamida",pos:"DF"},{name:"Dylan Bronn",pos:"DF"},{name:"Raed Chikhaoui",pos:"DF"},{name:"Moutaz Neffati",pos:"DF"},{name:"Omar Rekik",pos:"DF"},{name:"Montassar Talbi",pos:"DF"},{name:"Yan Valery",pos:"DF"},
  {name:"Mortadha Ben Ouanes",pos:"MF"},{name:"Anis Ben Slimane",pos:"MF"},{name:"Ismael Gharbi",pos:"MF"},{name:"Rani Khedira",pos:"MF"},{name:"Mohamed Hadj Mahmoud",pos:"MF"},{name:"Hannibal Mejbri",pos:"MF"},{name:"Ellyes Skhiri",pos:"MF"},
  {name:"Elias Achouri",pos:"FW"},{name:"Khalil Ayari",pos:"FW"},{name:"Firas Chaouat",pos:"FW"},{name:"Rayan Elloumi",pos:"FW"},{name:"Hazem Mastouri",pos:"FW"},{name:"Elias Saad",pos:"FW"},{name:"Sebastian Tounekti",pos:"FW"}
],
"Turquía": [
  {name:"Altay Bayindir",pos:"GK"},{name:"Mert Gunok",pos:"GK"},{name:"Ugurcan Cakir",pos:"GK"},
  {name:"Abdulkerim Bardakci",pos:"DF"},{name:"Caglar Soyuncu",pos:"DF"},{name:"Eren Elmali",pos:"DF"},{name:"Ferdi Kadioglu",pos:"DF"},{name:"Merih Demiral",pos:"DF"},{name:"Mert Muldur",pos:"DF"},{name:"Ozan Kabak",pos:"DF"},{name:"Samet Akaydin",pos:"DF"},{name:"Zeki Celik",pos:"DF"},
  {name:"Hakan Calhanoglu",pos:"MF"},{name:"Ismail Yuksek",pos:"MF"},{name:"Kaan Ayhan",pos:"MF"},{name:"Orkun Kokcu",pos:"MF"},{name:"Salih Ozcan",pos:"MF"},
  {name:"Arda Guler",pos:"FW"},{name:"Baris Alper Yilmaz",pos:"FW"},{name:"Can Uzun",pos:"FW"},{name:"Deniz Gul",pos:"FW"},{name:"Irfan Can Kahveci",pos:"FW"},{name:"Kenan Yildiz",pos:"FW"},{name:"Kerem Akturkoglu",pos:"FW"},{name:"Oguz Aydin",pos:"FW"},{name:"Yunus Akgun",pos:"FW"}
],
"Uruguay": [
  {name:"Sergio Rochet",pos:"GK"},{name:"Fernando Muslera",pos:"GK"},{name:"Santiago Mele",pos:"GK"},
  {name:"Guillermo Varela",pos:"DF"},{name:"Ronald Araujo",pos:"DF"},{name:"Jose Maria Gimenez",pos:"DF"},{name:"Santiago Bueno",pos:"DF"},{name:"Sebastian Caceres",pos:"DF"},{name:"Mathias Olivera",pos:"DF"},{name:"Joaquin Piquerez",pos:"DF"},{name:"Matias Vina",pos:"DF"},
  {name:"Maximiliano Araujo",pos:"MF"},{name:"Giorgian de Arrascaeta",pos:"MF"},{name:"Rodrigo Bentancur",pos:"MF"},{name:"Agustin Canobbio",pos:"MF"},{name:"Nicolas de la Cruz",pos:"MF"},{name:"Emiliano Martinez",pos:"MF"},{name:"Facundo Pellistri",pos:"MF"},{name:"Brian Rodriguez",pos:"MF"},{name:"Juan Manuel Sanabria",pos:"MF"},{name:"Manuel Ugarte",pos:"MF"},{name:"Federico Valverde",pos:"MF"},{name:"Rodrigo Zalazar",pos:"MF"},
  {name:"Rodrigo Aguirre",pos:"FW"},{name:"Federico Vinas",pos:"FW"},{name:"Darwin Nunez",pos:"FW"}
],
"EE.UU.": [
  {name:"Chris Brady",pos:"GK"},{name:"Matt Freese",pos:"GK"},{name:"Matt Turner",pos:"GK"},
  {name:"Max Arfsten",pos:"DF"},{name:"Sergino Dest",pos:"DF"},{name:"Alex Freeman",pos:"DF"},{name:"Mark McKenzie",pos:"DF"},{name:"Tim Ream",pos:"DF"},{name:"Chris Richards",pos:"DF"},{name:"Antonee Robinson",pos:"DF"},{name:"Miles Robinson",pos:"DF"},{name:"Joe Scally",pos:"DF"},{name:"Auston Trusty",pos:"DF"},
  {name:"Tyler Adams",pos:"MF"},{name:"Sebastian Berhalter",pos:"MF"},{name:"Weston McKennie",pos:"MF"},{name:"Cristian Roldan",pos:"MF"},{name:"Brenden Aaronson",pos:"MF"},{name:"Christian Pulisic",pos:"MF"},{name:"Gio Reyna",pos:"MF"},{name:"Malik Tillman",pos:"MF"},{name:"Tim Weah",pos:"MF"},{name:"Alejandro Zendejas",pos:"MF"},
  {name:"Folarin Balogun",pos:"FW"},{name:"Ricardo Pepi",pos:"FW"},{name:"Haji Wright",pos:"FW"}
],
"Uzbekistán": [
  {name:"Botirali Ergashev",pos:"GK"},{name:"Abduvohid Nematov",pos:"GK"},{name:"Utkir Yusupov",pos:"GK"},
  {name:"Abdukodir Khusanov",pos:"DF"},{name:"Khojiakbar Alijonov",pos:"DF"},{name:"Rustamjon Ashurmatov",pos:"DF"},{name:"Farrukh Sayfiev",pos:"DF"},{name:"Sherzod Nasrullaev",pos:"DF"},{name:"Umarbek Eshmuradov",pos:"DF"},{name:"Avazbek Ulmasaliev",pos:"DF"},{name:"Jakhongir Urozov",pos:"DF"},{name:"Bekhruz Karimov",pos:"DF"},{name:"Abdulla Abdullaev",pos:"DF"},
  {name:"Akmal Mozgovoy",pos:"MF"},{name:"Otabek Shukurov",pos:"MF"},{name:"Jamshid Iskanderov",pos:"MF"},{name:"Odiljon Hamrobekov",pos:"MF"},{name:"Jaloliddin Masharipov",pos:"MF"},{name:"Azizbek Ganiev",pos:"MF"},{name:"Sherzod Esanov",pos:"MF"},{name:"Abbosbek Fayzullaev",pos:"MF"},
  {name:"Azizbek Amonov",pos:"FW"},{name:"Eldor Shomurodov",pos:"FW"},{name:"Igor Sergeev",pos:"FW"},{name:"Oston Urunov",pos:"FW"},{name:"Dostonbek Hamdamov",pos:"FW"}
]
};

// Helper: get all players for a team filtered by position
function getSquadByPos(team, pos) {
  const squad = SQUADS[team] || [];
  if (!pos) return squad;
  return squad.filter(p => p.pos === pos);
}

// Helper: get all players sorted alphabetically
function getAllPlayers(posFilter) {
  const all = [];
  Object.entries(SQUADS).forEach(([team, players]) => {
    players.forEach(p => {
      if (!posFilter || p.pos === posFilter) {
        all.push({...p, team});
      }
    });
  });
  return all.sort((a, b) => a.name.localeCompare(b.name));
}
