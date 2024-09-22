import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtoStopComponent } from './dto-stop.component';

describe('DtoStopComponent', () => {
  let component: DtoStopComponent;
  let fixture: ComponentFixture<DtoStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtoStopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtoStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
