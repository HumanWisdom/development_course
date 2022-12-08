import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61089Page } from './s61089.page';

describe('S61089Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61089Page;
  let fixture: ComponentFixture<S61089Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61089Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61089Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
