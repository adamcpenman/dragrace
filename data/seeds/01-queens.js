exports.seed = async (knex) => {
    await knex("the_queens").insert([
//1st season
        {queens_name:"Victoria 'Porkchop' Parker", img_url:"/Images/Porkchop.png"}, //1
        {queens_name:"Tammie Brown" , img_url:"https://dragrace-queens.herokuapp.com/Images/TammieBrown.png" }, 
        {queens_name:"Akashia" , img_url:"http://localhost:5000/queenImages/s1/Akashia.png"  }, 
        {queens_name:"Jade" , img_url:"http://localhost:5000/queenImages/s1/Jade.png"  }, 
        {queens_name:"Ongina" , img_url:"http://localhost:5000/queenImages/s1/Ongina.png"  },
        {queens_name:"Shannel" , img_url:"http://localhost:5000/queenImages/s1/Shannel.png"  },
        {queens_name:"Rebecca Glasscock" , img_url:"http://localhost:5000/queenImages/s1/RebeccaGlasscock.png"  },
        {queens_name:"Nina Flowers" , img_url:"http://localhost:5000/queenImages/s1/NinaFlowers.png"  },
        {queens_name:"BeBe Zahara Benet" , img_url:"http://localhost:5000/queenImages/s1/BebeZaharaBenet.png"  },//9

//2nd season
        {queens_name:"Shangela Laquifa Wadley" , img_url:"http://localhost:5000/queenImages/s2/Shangela.png"   }, //10
        {queens_name:"Nicole Paige Brooks" , img_url:"http://localhost:5000/queenImages/s2/Nicole_Paige_Brooks.jpg"   },
        {queens_name:"Mystique Summers Madison" , img_url:"http://localhost:5000/queenImages/s2/Mystique.jpg"   },
        {queens_name:"Sonique" , img_url:"http://localhost:5000/queenImages/s2/Soniques.png"   },
        {queens_name:"Morgan McMichaels" , img_url:"http://localhost:5000/queenImages/s2/Morgan_McMichaels.jpg"   },
        {queens_name:"Sahara Davenport" , img_url:"http://localhost:5000/queenImages/s2/Sahara_Davenport.jpg"   },
        {queens_name:"Jessica Wild" , img_url:"http://localhost:5000/queenImages/s2/Jessica_Wild.jpg"   },
        {queens_name:"Pandora Boxx" , img_url:"http://localhost:5000/queenImages/s2/Pandora_Boxx.jpg"   },
        {queens_name:"Tatianna" , img_url:"http://localhost:5000/queenImages/s2/Tatianna.jpg"   },
        {queens_name:"Jujubee" , img_url:"http://localhost:5000/queenImages/s2/Jujubee.jpg"   },
        {queens_name:"Raven" , img_url:"http://localhost:5000/queenImages/s2/Raven.jpg"   },
        {queens_name:"Tyra Sanchez" , img_url:"http://localhost:5000/queenImages/s2/Tyra_Sanches.png"   }, //21

//3th season
        {queens_name:"Venus D-Lite" }, //22
        {queens_name:"Phoenix" },
        {queens_name:"Mimi Imfurst" },
        {queens_name:"India Ferrah" },
        {queens_name:"Mariah" },
        {queens_name:"Stacy Layne Matthews" },
        {queens_name:"Delta Work" },
        {queens_name:"Shangela" },
        {queens_name:"Carmen Carrera" },
        {queens_name:"Yara Sofia" },
        {queens_name:"Alexis Mateo" },
        {queens_name:"Manila Luzon" },
        {queens_name:"Raja" }, //34

//4th season
        {queens_name:"Alisa Summers" }, //35
        {queens_name:"Lashauwn Beyond" },
        {queens_name:"The Princess" },
        {queens_name:"Madame LaQueer" },
        {queens_name:"Milan" },
        {queens_name:"Jiggle Caliente" },
        {queens_name:"Willam" },
        {queens_name:"Dida Ritz" },
        {queens_name:"Kenya Michaels" },
        {queens_name:"Latrice Royale" },
        {queens_name:"Phi Phi O'Hara" },
        {queens_name:"Chad Michaels" },
        {queens_name:"Sharon Needles" }, //47
//5th season
        {queens_name:"Penny Tration" }, //48
        {queens_name:"Serena Cha Cha" },
        {queens_name:"Monica Beverly Hillz" },
        {queens_name:"Vivienne Pinay" },
        {queens_name:"Honey Mahogany" },
        {queens_name:"Lineysha Sparx" },
        {queens_name:"Jade Jolie" },
        {queens_name:"Ivy Winters" },
        {queens_name:"Alyssa Edwards" },
        {queens_name:"Coco Montrese" },
        {queens_name:"Detox" },
        {queens_name:"Roxxxy Andrews" },
        {queens_name:"Alaska" },
        {queens_name:"Jinkx Monsoon"}, //61
//6th season
        {queens_name:"Kelly Mantle" }, //62
        {queens_name:"Magnolia Crawford" },
        {queens_name:"Vivacious" },
        {queens_name:"April Carrion" },
        {queens_name:"Gia Gunn" },
        {queens_name:"Milk" },
        {queens_name:"Laganja Estranja" },
        {queens_name:"Trinity K. Bonet" },
        {queens_name:"Joslyn Fox" },
        {queens_name:"BenDeLaCreme" },
        {queens_name:"Darienne Lake" },
        {queens_name:"Courtney Act" },
        {queens_name:"Adore Delano" },
        {queens_name:"Bianca Del Rio"}, //75
//7th season
        {queens_name:"Tempest DuJour" }, //76
        {queens_name:"Sasha Belle" },
        {queens_name:"Jasmine Masters" },
        {queens_name:"Mrs. Kasha Davis" },
        {queens_name:"Kandy Ho" },
        {queens_name:"Max" },
        {queens_name:"Jaidynn Diore Fierce" },
        {queens_name:"Miss Fame" },
        {queens_name:"Trixie Mattel" },
        {queens_name:"Katya" },
        {queens_name:"Kennedy Davenport" },
        {queens_name:"Pearl" },
        {queens_name:"Ginger Ming" },
        {queens_name:"Violet Chachki"}, //89
//8th season
        {queens_name:"Laila McQueen" }, //90
        {queens_name:"Dax ExclamationPoint" },
        {queens_name:"Cynthia Lee Fontaine" },
        {queens_name:"Naysha Lopez" },
        {queens_name:"Acid Betty" },
        {queens_name:"Robbie Turner" },
        {queens_name:"Thorgy Thor" },
        {queens_name:"Derrick Barry" },
        {queens_name:"Chi Chi DeVayne" },
        {queens_name:"Naomi Smalls" },
        {queens_name:"Kim Chi" },
        {queens_name:"Bob the Drag Queen" }, //101
//9th season
        {queens_name:"Jaymes Mansfield" }, //102
        {queens_name:"Kimora Blac" },
        {queens_name:"Charlie Hides" },
        {queens_name:"Eureka" },
        {queens_name:"Cynthia Lee Fontaine" },
        {queens_name:"Aja" },
        {queens_name:"Farrah Moan" },
        {queens_name:"Valentina" },
        {queens_name:"Nina Bo'nina Brown" },
        {queens_name:"Alexis Michelle" },
        {queens_name:"Shea Coulee" },
        {queens_name:"Trinity Taylor" }, 
        {queens_name:"Peppermint" },
        {queens_name:"Sasha Velour" }, //115
//10th season
        {queens_name:"Vanessa Vanjie Mateo" }, //116
        {queens_name:"Kalorie Karbdashian-Williams" },
        {queens_name:"Yuhua Hamasaki" },
        {queens_name:"Dusty Ray Bottoms" },
        {queens_name:"Mayhem Miller" },
        {queens_name:"Blair St. Clair" },
        {queens_name:"Monique Heart" },
        {queens_name:"The Vixen" },
        {queens_name:"Monet X Change" },
        {queens_name:"Miz Cracker" },
        {queens_name:"Asia O'Hara" },
        {queens_name:"Kameron Michaels" }, 
        {queens_name:"Eureka" },
        {queens_name:"Aquaria" }, //129
//11th season
        {queens_name:"Soju" }, //130
        {queens_name:"Kahanna Montrese" },
        {queens_name:"Honey Davenport" },
        {queens_name:"Mercedes Iman Diamond" },
        {queens_name:"Ariel Versace" },
        {queens_name:"Scarlet Envy" },
        {queens_name:"Ra'Jah O'Hara" },
        {queens_name:"Plastique Tiara" },
        {queens_name:"Shuga Cain" },
        {queens_name:"Nina West" },
        {queens_name:"Vanessa Vanjie Mateo" },
        {queens_name:"Silky Nutmeg Ganache" }, 
        {queens_name:"A'keria C. Davenport" },
        {queens_name:"Brooke Lynn Hytes" },
        {queens_name:"Yvie Oddly" }, //144
        
    ])
}