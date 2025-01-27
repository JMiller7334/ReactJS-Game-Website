/*MODEL: Content Article:
 * This class holds content/text for the component .
 * The information here populates that component so that it may change depending
 * on the tab/category the user selects.
 */

export class ModelContentArticle {
    constructor(title, cssArticleId ,content, img, cssImgId, alt){
        this.title = title;
        this.cssArticleId = cssArticleId;
        this.content = content;
        this.img = img;
        this.cssImgId = cssImgId;
        this.alt = alt;
    }
}