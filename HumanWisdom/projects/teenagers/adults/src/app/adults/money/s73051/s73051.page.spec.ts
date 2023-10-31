import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73051Page } from './s73051.page';

describe('S73051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73051Page;
  let fixture: ComponentFixture<S73051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
