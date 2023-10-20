// https://randomuser.me/api/

const fetchdata = document.getElementById("fetchimage");

async function alldata() {
    const random = await fetch("https://randomuser.me/api/");
    let data = await random.json();

    const userResult = data.results[0];

    const image = document.createElement("img");
    image.classList.add("pic")
    image.src = userResult.picture.medium;

    let isEnlarged = false;

    image.addEventListener('click', () => {
        if (isEnlarged) {
            image.src = userResult.picture.medium;
        } else {
            image.src = userResult.picture.large;
        }
        isEnlarged = !isEnlarged;
    });

    const userGender = document.createElement("gender");
    userGender.classList.add("f_m");
    userGender.textContent = userResult.gender;

    const userName = document.createElement("name");
    userName.classList.add("n");
    userName.textContent = userResult.name.first + " " + userResult.name.last;

    const userLocation = document.createElement("location");
    userLocation.classList.add("L");
    userLocation.textContent = userResult.location.street.name;

    const userCity = document.createElement("city");
    userCity.classList.add("c");
    userCity.textContent = userResult.location.city;

    const userState = document.createElement("state");
    userState.classList.add("s");
    userState.textContent = userResult.location.state;

    const userCountry = document.createElement("country");
    userCountry.classList.add("con");
    userCountry.textContent = userResult.location.country;

    const userPostcode = document.createElement("postcode");
    userPostcode.classList.add("post");
    userPostcode.textContent = userResult.location.postcode;

    const userCoordinate = document.createElement("coordinates");
    userCoordinate.classList.add("cord");
    userCoordinate.textContent = `Latitude: ${userResult.location.coordinates.latitude}, Longitude: ${userResult.location.coordinates.longitude}`;

    const usertimezone = document.createElement("timezone");
    usertimezone.classList.add("t-z");
    usertimezone.textContent = userResult.location.timezone.offset;

    const userdescription = document.createElement("span");
    userdescription.classList.add("des");
    userdescription.textContent = userResult.location.timezone.description;

    const useremail = document.createElement("email");
    useremail.classList.add("u_email");
    useremail.textContent = userResult.email

    const container = document.createElement("div")
    container.classList.add("container")


    container.appendChild(image);
    container.appendChild(userGender);
    container.appendChild(userName);
    container.appendChild(userLocation);
    container.appendChild(userCity);
    container.appendChild(userState);
    container.appendChild(userCountry);
    container.appendChild(userPostcode);
    container.appendChild(userCoordinate);
    container.appendChild(usertimezone);
    container.appendChild(userdescription);
    container.appendChild(useremail)


    fetchdata.appendChild(container);
}




alldata(); 
