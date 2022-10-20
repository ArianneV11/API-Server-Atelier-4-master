const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(title, text, imageUrl, category, date) {
            super();
            this.Title = title !== undefined ? title : "";
            this.Text = text !== undefined ? text : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Category = category !== undefined ? category : "";
            this.Date = date !== undefined ? date : "";
            //this.Date = date !== undefined ? date : "";
            //this.Id = id !== undefined ? id : "";

            this.setKey("");
            this.addValidator('Title', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Category', 'string');
            this.addValidator('Date', 'integer');
            
        }
    }