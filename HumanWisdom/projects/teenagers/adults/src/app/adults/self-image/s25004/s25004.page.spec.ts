import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25004Page } from './s25004.page';

describe('S25004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25004Page;
  let fixture: ComponentFixture<S25004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
