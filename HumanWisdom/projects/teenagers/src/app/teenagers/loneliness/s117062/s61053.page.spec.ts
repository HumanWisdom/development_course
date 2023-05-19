import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61173Page } from './s61173.page';

describe('S61173Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61173Page;
  let fixture: ComponentFixture<S61173Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61173Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61173Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
