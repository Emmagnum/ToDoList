import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsComponent } from './ts.component';

describe('TsComponent', () => {
  let component: TsComponent;
  let fixture: ComponentFixture<TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/*
<div class="cont-body">
  <div class="cont-todo-list">
    <div class="c-header">
        <button>To Do</button>
    </div>
    <div class="c-main">
      <p>Tasks</p>
      <ul class="list-group">
        <li *ngFor="let name of names; index as i" class="list-group-item">
          <input type="checkbox" id="chk-item" checked>
          <label for="chk-item">{{name}}</label>
          <button (click)="deleteName(i)">X</button>
        </li>
      </ul>
    </div>
    <div class="c-footer">
      <input type="text" required [(ngModel)]="newName">
      <button (click)="addName()">Add new task</button>
    </div>
  </div>
</div>
*/
