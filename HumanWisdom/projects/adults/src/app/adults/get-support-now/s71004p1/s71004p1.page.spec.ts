import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71004p1Page } from './s71004p1.page';

describe('S71004p1Page', () => {
  let component: S71004p1Page;
  let fixture: ComponentFixture<S71004p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71004p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71004p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
