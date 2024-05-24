weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

//1)Create output object

wd = {}
//2)Access each items from the weatherData array

for(data of weatherData){ //  {district:'Thrissur',weather:32},//{district:'Kottayam',weather:29},//    {district:'Palakkad',weather:34},
                  //  {district:'Ernakulam',weather:33},// {district:'Thrissur',weather:29},


    district = data.district//Thrissur//Kottayam//Palakkad//Ernakulam//Thrissur
    currTemp = data.weather//32//29//34//33//29

//3)Check district is there in the output object

if(district in wd)
{
    oldTemp = wd[district]//32
//4)compare the temperature  
    if(oldTemp > currTemp)//32>29
    {
        wd[district] = oldTemp
    }
    else//if new value is greater than old value
    {
        wd[district] = currTemp
    }
}else//if district not present in o/p object
{
    wd[district] = currTemp//{Thrissur:32,Kottayam:29.Palakkad:33}
}

}
console.log(wd);