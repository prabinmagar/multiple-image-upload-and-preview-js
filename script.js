

$(document).ready(function(){
    $(".upload-area").click(function(){
        $('#upload-input').trigger('click');
    });

    $('#upload-input').change(event => {
        if(event.target.files){
            let filesAmount = event.target.files.length;
            $('.upload-img').html("");

            for(let i = 0; i < filesAmount; i++){
                let reader = new FileReader();
                reader.onload = function(event){
                    let html = `
                        <div class = "uploaded-img">
                            <img src = "${event.target.result}">
                            <button type = "button" class = "remove-btn">
                                <i class = "fas fa-times"></i>
                            </button>
                        </div>
                    `;
                    $(".upload-img").append(html);
                }
                reader.readAsDataURL(event.target.files[i]);
            }

            $('.upload-info-value').text(filesAmount);
            $('.upload-img').css('padding', "20px");
        }
    });

    $(window).click(function(event){
        if($(event.target).hasClass('remove-btn')){
            $(event.target).parent().remove();
        } else if($(event.target).parent().hasClass('remove-btn')){
            $(event.target).parent().parent().remove();
        }
    })
});