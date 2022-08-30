$(document).ready(
    () => {
        const menu_toggle_trigger = $(".side-menu-toggle-trigger");
        const menu_link = document.createElement("div");
        menu_link.innerHTML = `
        <div class="pop-nav">
            <ul>
                <li>
                    <a href="../">Home</a>
                </li>
                <li>
                    <a href="../about">About us</a>
                </li>
                <li>
                    <a href="../contact">Contact us</a>
                </li>
                <li>
                    <a href="../cowork">Co-work</a>
                </li>
                <li>
                    <a href="#resources">Resources</a>
                </li>
                <li>
                    <a href="../donate">Donate</a>
                </li>
                <li>
                    <a href="#press">Press</a>
                </li>
                <li>
                    <a href="#advertise">Partner & Advertise with us</a>
                </li>
                <li>
                    <a href="#policies">Privacy policy</a>
                </li>
            </ul>
        </div>`;
        menu_toggle_trigger.click(() => {
            swal("Menu", {
                buttons : "Close",
                content : menu_link
            });
        })
    }
);