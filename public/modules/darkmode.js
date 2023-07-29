{
  //DECLARACION DE VARIABLES
  const darkmode_button = document.getElementById("darkMode-button");

  //DECLARACION DE FUNCIONES
  const changeIconSun = () => {
    darkmode_button.innerHTML = `          
    <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
        <path class="fill-slate-500 dark:fill-slate-300" d="M19.6661 16.4355C18.7831 18.0984 17.4684 19.4928 15.8602 20.472C14.2521 21.4512 12.4098 21.979 10.5272 22C7.67217 21.9302 4.96126 20.7314 2.98847 18.6664C1.01568 16.6014 -0.0580992 13.8385 0.00242672 10.9831C-0.0457694 8.25294 0.938278 5.60515 2.75782 3.56916C4.57737 1.53317 7.09832 0.259024 9.81664 0.00146167C10.0131 -0.00850945 10.2088 0.0326659 10.3847 0.120964C10.5605 0.209262 10.7104 0.341662 10.8197 0.505228C10.9263 0.671323 10.9861 0.863016 10.9931 1.06022C11.0001 1.25741 10.9539 1.45286 10.8593 1.62605C10.5199 2.24749 10.2541 2.9064 10.0674 3.58942C10.03 3.72958 9.96533 3.86097 9.87698 3.97601C9.78863 4.09106 9.6784 4.18749 9.55263 4.25976C9.42687 4.33203 9.28805 4.3787 9.14417 4.3971C9.00029 4.4155 8.85419 4.40526 8.71429 4.36696C8.57438 4.32867 8.44344 4.26307 8.32898 4.17396C8.21453 4.08485 8.11883 3.97398 8.0474 3.84773C7.97597 3.72149 7.93021 3.58236 7.91277 3.43835C7.89532 3.29435 7.90653 3.14832 7.94575 3.00866C7.98645 2.86017 8.03044 2.71278 8.07663 2.56869C6.33933 3.17885 4.8376 4.31939 3.78352 5.82923C2.72945 7.33907 2.17629 9.1419 2.20218 10.9831C2.14147 13.2551 2.98344 15.4586 4.54374 17.1111C6.10404 18.7636 8.25554 19.7305 10.5272 19.8001C11.6932 19.79 12.8435 19.5294 13.9001 19.036C14.9567 18.5426 15.8949 17.8279 16.6513 16.9403C14.4231 16.6192 12.3617 15.5759 10.7834 13.9705C10.5834 13.7628 10.4729 13.4848 10.4758 13.1964C10.4787 12.908 10.5947 12.6323 10.799 12.4286C11.0032 12.225 11.2792 12.1097 11.5676 12.1076C11.856 12.1055 12.1337 12.2168 12.3409 12.4174C13.1386 13.238 14.104 13.8767 15.1711 14.29C16.2383 14.7033 17.3821 14.8813 18.5244 14.812C18.7282 14.7947 18.933 14.8317 19.1179 14.9192C19.3027 15.0067 19.4611 15.1416 19.577 15.3102C19.6921 15.4723 19.7612 15.6624 19.7768 15.8606C19.7925 16.0587 19.7542 16.2574 19.6661 16.4355ZM20.3502 12.1007V11.5507H20.9001C21.1918 11.5507 21.4716 11.4348 21.6779 11.2285C21.8841 11.0223 22 10.7425 22 10.4508C22 10.159 21.8841 9.87928 21.6779 9.673C21.4716 9.46672 21.1918 9.35084 20.9001 9.35084H20.3502V8.80088C20.3502 8.50916 20.2343 8.22939 20.028 8.02311C19.8218 7.81683 19.542 7.70095 19.2503 7.70095C18.9586 7.70095 18.6788 7.81683 18.4726 8.02311C18.2663 8.22939 18.1504 8.50916 18.1504 8.80088V9.35084H17.6005C17.3088 9.35084 17.029 9.46672 16.8228 9.673C16.6165 9.87928 16.5006 10.159 16.5006 10.4508C16.5006 10.7425 16.6165 11.0223 16.8228 11.2285C17.029 11.4348 17.3088 11.5507 17.6005 11.5507H18.1504V12.1007C18.1504 12.3924 18.2663 12.6721 18.4726 12.8784C18.6788 13.0847 18.9586 13.2006 19.2503 13.2006C19.542 13.2006 19.8218 13.0847 20.028 12.8784C20.2343 12.6721 20.3502 12.3924 20.3502 12.1007ZM15.9507 0.00146167C15.659 0.00146167 15.3792 0.117346 15.1729 0.323623C14.9667 0.529899 14.8508 0.80967 14.8508 1.10139V1.65135H14.3008C14.0091 1.65135 13.7294 1.76724 13.5231 1.97351C13.3169 2.17979 13.201 2.45956 13.201 2.75128C13.201 3.043 13.3169 3.32277 13.5231 3.52904C13.7294 3.73532 14.0091 3.85121 14.3008 3.85121H14.8508V4.40117C14.8508 4.69289 14.9667 4.97266 15.1729 5.17893C15.3792 5.38521 15.659 5.5011 15.9507 5.5011C16.2424 5.5011 16.5221 5.38521 16.7284 5.17893C16.9347 4.97266 17.0505 4.69289 17.0505 4.40117V3.85121H17.6005C17.8922 3.85121 18.172 3.73532 18.3782 3.52904C18.5845 3.32277 18.7004 3.043 18.7004 2.75128C18.7004 2.45956 18.5845 2.17979 18.3782 1.97351C18.172 1.76724 17.8922 1.65135 17.6005 1.65135H17.0505V1.10139C17.0505 0.80967 16.9347 0.529899 16.7284 0.323623C16.5221 0.117346 16.2424 0.00146167 15.9507 0.00146167ZM9.3514 11.0007C9.6431 11.0007 9.92286 10.8848 10.1291 10.6786C10.3354 10.4723 10.4513 10.1925 10.4513 9.9008V9.35084H11.0012C11.2929 9.35084 11.5727 9.23495 11.7789 9.02868C11.9852 8.8224 12.1011 8.54263 12.1011 8.25091C12.1011 7.95919 11.9852 7.67942 11.7789 7.47315C11.5727 7.26687 11.2929 7.15099 11.0012 7.15099H10.4513V6.60102C10.4513 6.3093 10.3354 6.02953 10.1291 5.82326C9.92286 5.61698 9.6431 5.5011 9.3514 5.5011C9.05969 5.5011 8.77993 5.61698 8.57366 5.82326C8.3674 6.02953 8.25152 6.3093 8.25152 6.60102V7.15099H7.70158C7.40987 7.15099 7.13011 7.26687 6.92385 7.47315C6.71758 7.67942 6.6017 7.95919 6.6017 8.25091C6.6017 8.54263 6.71758 8.8224 6.92385 9.02868C7.13011 9.23495 7.40987 9.35084 7.70158 9.35084H8.25152V9.9008C8.25152 10.1925 8.3674 10.4723 8.57366 10.6786C8.77993 10.8848 9.05969 11.0007 9.3514 11.0007Z" fill=""/>
    </svg>
    `;
  };

  const changeIconMoon = () => {
    darkmode_button.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
        <path class="stroke-slate-500 dark:stroke-slate-300" d="M20.5 5.5V2M20.5 33.5V37M10.1663 9.72487L7.55 7.25M31.0968 29.524L33.7131 31.9989M5.7 19.5H2M35.3 19.5H39M31.0977 9.72487L33.714 7.25M10.1672 29.524L7.55091 31.9989M20.5 28.25C15.3914 28.25 11.25 24.3324 11.25 19.5C11.25 14.6675 15.3914 10.75 20.5 10.75C25.6086 10.75 29.75 14.6675 29.75 19.5C29.75 24.3324 25.6086 28.25 20.5 28.25Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  };

  const firstThemeCheck = () => {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "light");
      changeIconMoon();
    } else {
      localStorage.setItem("theme", "dark");
      changeIconSun();
    }
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      changeIconSun();
      localStorage.setItem("lastTheme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      changeIconMoon();
      localStorage.setItem("lastTheme", "dark");
    }
  };

  function detectLastUserSelection() {
    const lastTheme = localStorage.getItem("lastTheme");
    if (lastTheme == "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      changeIconSun();
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      changeIconMoon();
    }
  }

  //EJECUCION DEL CODIGO
  firstThemeCheck();
  darkmode_button.addEventListener("click", themeSwitch);
  detectLastUserSelection();
}
