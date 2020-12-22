

(function() {

const maximumLikeThreshold = 25;

function likePost({likeButton, noOfLikes}) {
   
    const waitTimeAfterLike = Math.random() * 10000;
    return new Promise((resolve) => {
        if(noOfLikes > maximumLikeThreshold) {
            return resolve(true)
        } else {
            likeButton.click()
            setTimeout(() => {
                resolve(true);
            }, waitTimeAfterLike)
        }
    })
    
}

function goToNextPost(nextButton) {
    nextButton.click();
}

async function runLikeScript() {
    const LIKE_BUTTON_SELECTOR = 'span.fr66n button.wpO6b'
    const NEXT_BUTTON_SELECTOR = 'div.DdSX2 a.coreSpriteRightPaginationArrow';
    const LIKE_TEXT_SELECTOR = 'div.Nm9Fw';

    const likeButton = document.querySelector(LIKE_BUTTON_SELECTOR)
    const nextButton = document.querySelector(NEXT_BUTTON_SELECTOR)


    if(likeButton) {
        const noOfLikes = parseInt(document.querySelector(LIKE_TEXT_SELECTOR)?.innerText?.replaceAll(',', ''))
        await likePost({likeButton, noOfLikes})
        goToNextPost(nextButton);
        return runLikeScript();
    } else {
        setTimeout(() => {
            runLikeScript();
        }, 1000);
        
    }
    
}
runLikeScript();

})();


