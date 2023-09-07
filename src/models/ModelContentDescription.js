/*MODEL: Content Description:
 * This class holds content/text for the component ContentContainer.
 * The information here populates that component so that it may change depending
 * on the tab/category the user selects.
 */

export class ModelContentDescription {
    constructor(title, content, sectionTitle){
        this.title = title;
        this.content = content;
        this.sectionTitle = sectionTitle
    }
}