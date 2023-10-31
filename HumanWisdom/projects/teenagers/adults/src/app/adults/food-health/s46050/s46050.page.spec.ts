import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46050Page } from './s46050.page';

describe('S46050Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46050Page;
  let fixture: ComponentFixture<S46050Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46050Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46050Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
