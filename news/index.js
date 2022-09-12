$(document).ready(
    () => {
        const menu_toggle_trigger = $(".side-menu-toggle-trigger");
        const menu_link = document.createElement("div");
        menu_link.innerHTML = `
        <div class="pop-nav">
            <ul>
                <li>
                    <a href="${location.origin}/">Home</a>
                </li>
                <li>
                    <a href="${location.origin}/about">About us</a>
                </li>
                <li>
                    <a href="${location.origin}/contact">Contact us</a>
                </li>
                <li>
                    <a href="${location.origin}/cowork">Co-work</a>
                </li>
                <li>
                    <a href="#publications">Publications</a>
                </li>
                <li>
                    <a href="${location.origin}/donate">Donate</a>
                </li>
                <li>
                    <a href="#residences">Art residencies and opportunities</a>
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