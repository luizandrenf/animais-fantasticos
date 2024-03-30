import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if(menuButton) {
    function handleMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, ["click", "touchstart"], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    eventos.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, handleMenu)
    );
  }
}
