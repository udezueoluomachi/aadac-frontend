$(document).ready(
    () => {
        const menu_toggle_trigger = $(".side-menu-toggle-trigger");
        const side_menu = $(".side-menu-outer-cont");
        let menu_displayed =  false;
        menu_toggle_trigger.click( ()=> {
            if(menu_displayed) {
                side_menu.addClass("none");
                menu_displayed = false;
            }
            else {
                side_menu.removeClass("none");
                menu_displayed = true;
            }
        })
    }
);