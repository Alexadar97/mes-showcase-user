import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  timerId: any;
  showtype = 'pdf'

  constructor() { }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }


  ngOnInit() {
    this.autorunpdf(5000)
  }

  /**pdf */
  autorunpdf(time) {
    var root = this;
    this.timerId = setInterval(() => {
      root.nextPage();

    }, time);

  }

  nextPage() {
    if (this.page == this.totalPages) {
      this.showtype = 'video';
      var root = this;
      clearTimeout(root.timerId);
      return false;
    }
    else {
      this.page++;
    }
  }

  prevPage() {
    this.page--;
  }



  /*video*/
  videoend() {
    
    this.showtype = 'image';
    this.imagesend(5000);
  }
/* image */
imagesend(time){
  setTimeout(() => {
    this.page = 1;
  this.showtype = 'pdf';
  this.autorunpdf(5000);
  }, time)
 
}

}
