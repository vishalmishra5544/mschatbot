function getBotResponse(input) {
    //responses
    if((input=="options")||(input=="Options")){
      return "I can give you facts about countries!!\n Select your country:\n1)India 2)South Africa 3)Australia 4)USA 5)Sri Lanka"
    }else if (input=="1"){
          return "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.Capital: New Delhi,Area: 3.287 million km²,Dialing code: +91,President: Ram Nath Kovind,Population: 138 crores (2020) World Bank,Prime minister: Narendra Modi,Gross domestic product: 2.62 lakh crores USD (2020) World Bank";
    }else if (input=="2"){
          return "South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.,Capitals: Cape Town, Pretoria, Bloemfontein,Dialing code: +27,President: Cyril Ramaphosa,Currency: South African rand,Population: 5.93 crores (2020) World Bank,Gross domestic product: 30,192.36 crores USD (2020) World Bank,Official languages: Afrikaans, English, Xhosa, Zulu, Southern Sotho, Venda, Tswana, Northern Sotho, Tsonga, Swati, Ndebele";
    }else if(input=="3"){
     return "Australia, officially the Commonwealth of Australia, is a sovereign transcontinental country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.Capital: Canberra,Dialing code: +61 ,Area: 7.692 million km²,Population: 2.57 crores (2020) World Bank,Currency: Australian dollar,Prime minister: Scott Morrison,Gross domestic product: 1.33 lakh crores USD (2020) World Bank";
    }else if(input=="4"){
    return "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking. Capital: Washington, D.C.,Dialing code: +1,Area: 9.834 million km²,President: Joe Biden,Population: 32.95 crores (2020) World Bank,Currency: United States Dollar,Gross domestic product: 20.94 lakh crores USD (2020) World Bank";
    }else if(input=="5"){
     return "Sri Lanka, formerly known as Ceylon, and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, and southeast of the Arabian Sea; it is separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait.Capitals: Colombo, Sri Jayawardenepura Kotte,Currency: Sri Lankan rupee,President: Gotabaya Rajapaksa,Population: 2.19 crores (2020) World Bank,Prime minister: Mahinda Rajapaksa,Gross domestic product: 8,070.66 crores USD (2020) World Bank,Official languages: Sinhala, Tamil";
    }else if((input=="Thanks")||(input=="thanks")){
      return "welcome!!"
    }else if((input=="Hello")||(input=="hello")){
      return "Hello!!"
    }else if((input=="Hi")||(input=="hi")){
      return "Hi!!"
    }else {
        return "Please choose a valid option!!";
    }
}