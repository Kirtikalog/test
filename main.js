var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "father.jpg.JPG" , "", "https://cdn.clipart.email/f722f71a34ff5452ea22053eef79896a_cartoon-sisters-clipart_450-450.jpeg", "https://thumbs.dreamstime.com/b/mother-kids-icon-family-design-vector-graphic-cartoon-concept-represented-isolated-colorfull-illustration-74240723.jpg"];
var names = ["Fmaily Book", "Bhim Singh", "Surya Prathap", "Kirtika Chauhan", "Amrit Kanwer"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
};
