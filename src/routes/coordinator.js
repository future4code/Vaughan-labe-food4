export const goToLogin = (Navigate) => {
  Navigate("/");
}

export const goToSingUp = (Navigate) => {
  Navigate("/signUp");
}

export const goToAdress = (Navigate) => {
  Navigate("/adress");
}

export const goToCar = (Navigate) => {
  Navigate("/car");
}

export const goToFeed = (Navigate) => {
  Navigate("/feed");
}

export const goToProfile = (Navigate) => {
  Navigate("/profile");
}

export const goToRestaurant = (Navigate, id) => {
  Navigate(`/restaurant/${id}`);
}

export const goToSearch = (Navigate) => {
  Navigate("/search");
}
export const goToEditLogin = (Navigate) => {
  Navigate("/profile/editProfile");
}
export const goToEditAddress = (Navigate) => {
  Navigate("/profile/editAddress");
}

