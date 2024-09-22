import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotedLineComponent } from './doted-line.component';

describe('DotedLineComponent', () => {
  let component: DotedLineComponent;
  let fixture: ComponentFixture<DotedLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotedLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
