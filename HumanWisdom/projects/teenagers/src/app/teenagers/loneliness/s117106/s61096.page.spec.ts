import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61096Page } from './s61096.page';

describe('S61096Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61096Page;
  let fixture: ComponentFixture<S61096Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61096Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61096Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
