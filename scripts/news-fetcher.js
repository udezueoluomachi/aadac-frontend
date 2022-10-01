$(document).ready(
    ()=> {
        const newsMainConainer = $(".section-for-displaying-news");
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("error", () => {
            swal("An error occured","Could not load some contents",{
                icon : "error"
            });
        });
        xhr.addEventListener("load", function() {
            let response = this.responseText;
            let parsedResponse = JSON.parse(response);
            newsMainConainer.html("");
            if(parsedResponse.resolvement === true) {
                let result = parsedResponse.result;
                for(let i = 0; i < result.length; i++) {
                    newsMainConainer.html(`
                    ${newsMainConainer.html()}
                    <div class="news-card">
                        <div class="new-card-image-cont" style="background-image:url('${result[i].news_image_file_path}');"></div>
                        <div class="text-contents-for-news">
                            <a href="${result[i].news_file_path}" class="news-title block">${result[i].title.substring(0,50)} ...</a>
                            <a href="${result[i].news_file_path}" class="news-description-cont block">${result[i].description.substring(0,120)} ...</a>
                        </div>
                    </div>
                    `)
                }
            }
            else {
                newsMainConainer.html("<p>No contents are available at the moment</p>");
            }
        });
        xhr.open("GET",`https://backend.aadacnetwork.com/fetch-news/?page=${page}`,true);
        xhr.send();
    }
);