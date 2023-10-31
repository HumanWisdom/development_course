import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73038Page } from './s73038.page';

describe('S73038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73038Page;
  let fixture: ComponentFixture<S73038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
