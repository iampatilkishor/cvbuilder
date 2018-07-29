import { Component, OnInit, Input, Output,Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../../model/education';
import { EventEmitter } from 'events';
import * as moment from 'moment';

import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]

})
export class EducationComponent implements OnInit {

  closeResult: string;
  currenteducation: Education;

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  model2: Date;

  constructor(private modalService: NgbModal) {}

  educations: Education[] = [];


  ngOnInit() {

  }

  open(content, education) {
    this.currenteducation = Object.assign(education);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(this.onModalClose, this.onModalDismissed);
  }

  onModalClose = (result) => {
    this.closeResult = `Closed with: ${result}`;
  }

  onModalDismissed = (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  today() {
    return new Date();
  }

}
