import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61102Page } from './s61102.page';

describe('S61102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61102Page;
  let fixture: ComponentFixture<S61102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
