function closeMenu(){
  document.getElementById("ToggleMenu").style.display="none";
  document.getElementById("ToggleSubMenu").style.display="none";
}

function openMenu(){
  document.getElementById("ToggleMenu").style.display="block";
  document.getElementById("ToggleSubMenu").style.display="block";
}

function closeMessage(){
  document.getElementById("message").style.display="none";
}

function closeNotice(){
  document.getElementById("notice").style.display="none";
}
function showTerms(){
  document.getElementById("More").style.display="none";
  document.getElementById("Terms").innerHTML="TripAdvisor LLC is not a booking agent or tour operator, and does not charge any service fees to users of our site. Our partners (airlines, travel providers, and booking agents) who list airfare, tours, and travel packages on TripAdvisor are required to include all fees and surcharges in their listed prices. Examples include the Federal September 11th Security Fee, international departure and arrival taxes and fees, federal excise tax, and other service, handling and miscellaneous fees and surcharges. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees as required by the U.S. Department of Transportation. Airfares are generally quoted per person in USD unless otherwise noted.";
}
