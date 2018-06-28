// https://coolors.co/acbea3-40476d-826754-ad5d4e-eb6534
// https://coolors.co/a63a50-f0e7d8-ab9b96-a1674a-ba6e6e
export const primary = `#A1674A`
export const darkPrimary = LightenDarkenColor(primary, -20);
export const secondary = `#AB9B96`
export const navbarHeight = `50rem`
export const mediaMobile = `@media screen and (max-width: 1023px) and (min-width: 1px)`
export const mediaDesktop = `@media screen and (min-width: 1024px)`
export const boxShadow1 = `0 10px 30px -24px #4b4e53`
export const boxShadow2 = `0 10px 40px -24px #393b3f`
export const boxShadow3 = `0 16px 50px -24px #212224`

export default `
  :root {
    font-size: 1px; /* for 1rem to be 1px */
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    font-size: 16px;
    margin: 0;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
  }

  a:focus {
    outline: none;
  }

  & .navbar {
    height: ${navbarHeight};
  }

  & .navbar-margin-top {
    margin-top: ${navbarHeight};
  }

  & .primary: {
    color: ${primary};
  }

  & .bg-primary {
    background-color: ${primary};
  }

  & .secondary {
    color: ${secondary};
  }

  & .bg-secondary {
    background-color: ${secondary};
  }

  a {
    text-decoration: none;
    color: initial;
  }

  a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: initial;
  }

  & button {
    cursor: pointer;
    font-size: 18rem;
    border-radius: 6rem;
    padding: 8px 12px;
    border: none;
  }

  & button:focus {
    outline: none;
  }

  & button.primary {
    background-color: ${primary};
    color: white;
    transition: background-color .2s;
  }

  & button.primary:hover {
    background-color: ${darkPrimary};
  }

  & button.flat {
    background-color: transparent;
    border: 2rem solid ${primary};
    transition: background-color 0.2s, color 0.2s;
  }

  & button.flat:hover {
    background-color: ${primary};
    color: white;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`

function LightenDarkenColor(col, amt) {

  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
