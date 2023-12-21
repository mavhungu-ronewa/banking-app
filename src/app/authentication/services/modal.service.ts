import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private showModalSource = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSource.asObservable();
  constructor() { }

  toggleModal() {
    this.showModalSource.next(!this.showModalSource.value);
  }
  getModalStatus(): Observable<boolean> {
    return this.modalStatus.asObservable();
  }

  openModal() {
    this.modalStatus.next(true);
  }

  closeModal() {
    this.modalStatus.next(false);
  }
}
