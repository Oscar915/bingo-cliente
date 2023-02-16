import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardboardComponent } from './list-cardboard.component';

describe('ListCardboardComponent', () => {
  let component: ListCardboardComponent;
  let fixture: ComponentFixture<ListCardboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
