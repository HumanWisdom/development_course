import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61178Page } from './s61178.page';

describe('S61178Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61178Page;
  let fixture: ComponentFixture<S61178Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61178Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61178Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
